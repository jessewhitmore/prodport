import { gsap } from "gsap";
import { loadResolver } from "./loadhandler";
import { csDL } from "../main";

async function insertCSMD(selector, mdFilePath) {
    try {
        const response = await fetch(mdFilePath);
        const mdText = await response.text();

        if (!response.ok) { // Check if the response status is not OK (e.g., 404 Not Found)
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }      

        if (mdText.includes('<html') || mdText.includes('<!DOCTYPE html>')) {
          throw new Error('Error: Expected Markdown content, but received HTML.');
        }
    

        selector.innerHTML = mdText;

        console.log(selector)
    } catch (error) {
        console.error('Error loading Markdown content:', error);
        const refresh = document.createElement('a')
        refresh.href = '#'
        refresh.innerText = 'Error loading content.'
        refresh.addEventListener('click', (e)=>{
          e.preventDefault()
          insertMDtext(selector, mdFilePath)
          selector.innerText = ''
        })
        selector.appendChild(refresh);
    }
}


export function studyHandler(study) {

    const bb = study.getBoundingClientRect()
    
    study.style.top = bb.top+'px'
    study.style.bottom = bb.bottom+'px'
    study.style.left = bb.left+'px'
    study.style.right = bb.right+'px'
    study.style.position = 'fixed'

    document.body.style.overflow = 'hidden'    


}

export async function caseStudyGen(app, study) {
    
    const studySlide = new slideInstance()
    studySlide.ele = study.querySelector('.imgHold')
    studySlide.imgHold = study.querySelector('.imgHold img').dataset.src
    let studyName = 'null'
    study.classList.forEach(v => {if(v !== 'study') studyName = v})

    studySlide.setup(studyName)

    return studySlide
}









class slideInstance {
	constructor() {
        this.index = 0
        this.slides = []
        this.lock = false
        this.handleNext = this.move.bind(this, 1)
        this.handlePrev = this.move.bind(this, -1)
        this.handleKeypress = this.keypress.bind(this)
        this.handleDepop = this.depopulate.bind(this)
        this.tl = []
        this.resize = window.addEventListener('resize', () => {
            document.querySelectorAll('.controls').forEach(ele => {
                ele.style.width = document.querySelector('.slidesWrapper').offsetWidth + 'px' 
            })
        })
    }

    ve(to, name, style, type) {
        type = type || 'div'
        const element = document.createElement(type)
        if(Array.isArray(name)) {
            element.classList.add(...name)
        } else {
            element.classList.add(name)
        }
        if(style !== undefined) {
            for (const [key, value] of Object.entries(style)) {
                element.style[key] = value
            }
        }
        if(to) to.appendChild(element)
        return element;
    }

    style(element, style) {
        for (const [key, value] of Object.entries(style)) {
            element.style[key] = value
        }
    }


    async setup(studyName) {

        this.studyName = studyName
    
        const response = await fetch(`md/study/${studyName}.md`);
        const mdText = await response.text();
    
        let animation = new Array()
        const frames = mdText.split('-----')
        

    
        frames.forEach((v,i,a) => {
            const match = v.match(/^[^\n]*/)
            a[i] = v.replace(match,'')
            a[i] = a[i].replace(/\\/g,'')
            a[i] = a[i].replace(/\n/g, ' ')
            animation.push(match.toString().trim())
        })


        const ratio = 16/9

        const slideshow = this.slideshow = this.ve(undefined, 'slideshow')
        slideshow.id = studyName+'CS'

        const slidesWrapper = this.ve(slideshow, 'slidesWrapper', {
        })


        const slidesCont = this.ve(slidesWrapper, 'slides', {
            overflow:'hidden'
        })




        this.max = 0
        frames.forEach((v, i) => { 
            if(animation[i] == 'JS') {
                this.script = v
            } else {
                this.max++
                const slide = this.ve(slidesCont, 'slide', {
                    position: 'absolute',

                })
                if(animation[i] !== undefined) {
                    slide.setAttribute('data-ani',animation[i])
                } else {
                    slide.setAttribute('data-ani','left')
                }
                slide.innerHTML = v
                if(i == 0) {
                    slide.classList.add('on')
                } else {
                    slide.style.visibility = 'hidden'
                }
                slide.querySelectorAll('img').forEach(img => {
                    img.setAttribute('loadhandled',true)
                    img.setAttribute('nogrunge',true)
                    loadResolver.toLoad.push(img)
                })
            }
        })
 
        var supportsPassive = false;
        try {
          window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; } 
          }));
        } catch(e) {}
        
        this.wheelOpt = supportsPassive ? { passive: false } : false;

    }

    populate() {

        this.index = 0
        const ele = this.ele

        const checkSRCS = this.slideshow.querySelector('img:not([src])')
        if(checkSRCS) {
            this.loading = true
            this.slideshow.querySelector('.slides').classList.add('loading')
            const promiseArray = []
            this.slideshow.querySelectorAll('img:not([src])').forEach(img => {
                loadResolver.toLoad = loadResolver.toLoad.filter(i => i !== img)
                const loadPromise = new Promise((resolve, reject) => {
                    img.src = img.dataset.src;        
                    img.onload = () => {
                        console.log('loaded', img)
                        img.style.maskImage = 'unset'
                        resolve(img);
                    };
                    img.onerror = (err) => {
                        reject(err);
                    };
                });   
                promiseArray.push(loadPromise)            
            })

            Promise.all(promiseArray).then((i)=> {
                this.loading = false
                this.slideshow.querySelector('.slides').classList.remove('loading')
                this.populatedSlideshow.querySelector('.slides').classList.remove('loading')
                console.log('done loading')
            })

        }

        const slideshow = this.populatedSlideshow = this.slideshow.cloneNode(true)

        this.style(slideshow, {
            position:'fixed',
            top:'50px',
            left:'calc(max(16.667vw, 400px) + 25px)',
            bottom: '50px',
            right: '50px',
            opacity:1
        })

        const transition = this.ve(document.body, 'CStrans', {
            position:'fixed', 
            top:0, 
            left:0,
            background:`url(${this.imgHold})`,
            backgroundSize: 'cover'
        })
        transition.id = `trans-${this.studyName}`
        document.body.appendChild(slideshow)

        const slides = slideshow.querySelectorAll('.slide')
        this.slides = []
        slides.forEach(slide => {
            this.slides.push(slide)
        })

        const slidesCont = slideshow.querySelector('.slides')



        const controlsT = this.ve(slideshow, 'controls', {
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingBottom: '10px'
        })
        slideshow.insertBefore(controlsT, slideshow.querySelector('.slidesWrapper'))

        const controlsB = this.ve(slideshow, 'controls', {
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: '10px'
        })

        const prev = this.prev = this.ve(controlsB, 'prev')
        prev.innerHTML = `<a href="javascript:void(0)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.01 25.01">
            <circle style = "fill:#eceded" cx="12.5" cy="12.5" r="11"/>
            <path style = "fill:#96acb6" d="M12.5,0c6.89,0,12.5,5.61,12.5,12.5s-5.61,12.5-12.5,12.5S0,19.4,0,12.5,5.61,0,12.5,0ZM12.5,22.01c5.24,0,9.5-4.26,9.5-9.5S17.74,3,12.5,3,3,7.26,3,12.5s4.26,9.5,9.5,9.5Z"/>
            <path style = "fill:#96acb6" d="M6.52,12.96l7.44,4.9c.25.16.53-.08.53-.46v-1.63h1.65c.18,0,.33-.18.33-.4v-5.74c0-.22-.15-.4-.33-.4h-1.65v-1.63c0-.38-.28-.62-.53-.46l-7.44,4.9c-.28.19-.28.73,0,.92Z"/>
        </svg>
        </a>`

        const count = this.count = this.ve(controlsB, 'count')
        count.innerHTML = `<span>1</span>&nbsp;/&nbsp;${this.max}`

        const next = this.next = this.ve(controlsB, 'next')
        next.innerHTML = `<a href="javascript:void(0)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.01 25.01">
            <circle style = "fill:#eceded" cx="12.5" cy="12.5" r="11"/>
            <path style = "fill:#96acb6" d="M12.5,25.01C5.61,25.01,0,19.4,0,12.5S5.61,0,12.5,0s12.5,5.61,12.5,12.5-5.61,12.5-12.5,12.5ZM12.5,3C7.26,3,3,7.26,3,12.5s4.26,9.5,9.5,9.5,9.5-4.26,9.5-9.5S17.74,3,12.5,3Z"/>
            <path style = "fill:#96acb6" d="M18.49,12.04l-7.44-4.9c-.25-.16-.53.08-.53.46v1.63h-1.65c-.18,0-.33.18-.33.4v5.74c0,.22.15.4.33.4h1.65v1.63c0,.38.28.62.53.46l7.44-4.9c.28-.19.28-.73,0-.92Z"/>
        </svg>        
        </a>`

        const download = this.download = this.ve(controlsT, 'download')
        download.innerHTML = `<a href="${csDL[this.studyName]}" download="JWhitmore-${this.studyName}-CaseStudy.pdf">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.01 25.01">
            <circle style = "fill: #eceded;" cx="12.5" cy="12.5" r="11"/>
            <path style = "fill: #96acb6;" d="M12.5,25.01C5.61,25.01,0,19.4,0,12.5S5.61,0,12.5,0s12.5,5.61,12.5,12.5-5.61,12.5-12.5,12.5ZM12.5,3C7.26,3,3,7.26,3,12.5s4.26,9.5,9.5,9.5,9.5-4.26,9.5-9.5S17.74,3,12.5,3Z"/>
            <path style = "fill: #96acb6;" d="M16.41,18.11h-7.81c-.55,0-1-.45-1-1s.45-1,1-1h7.81c.55,0,1,.45,1,1s-.45,1-1,1Z"/>
            <path style = "fill: #96acb6;" d="M16.41,10.73h-1.92v-3.67c0-.18-.15-.33-.33-.33h-3.35c-.18,0-.33.15-.33.33v3.67h-1.9c-.3,0-.44.37-.23.57l3.95,3.7c.13.12.33.12.45,0l3.87-3.7c.21-.2.07-.57-.23-.57Z"/>
        </svg>
        </a>`

        const close = this.close = this.ve(controlsT, 'close')
        close.innerHTML = `<a href="javascript:void(0)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.01 25.01">
            <circle style = "fill: #eceded" cx="12.5" cy="12.5" r="11"/>
            <path style = "fill: #96acb6" d="M12.5,25.01C5.61,25.01,0,19.4,0,12.5S5.61,0,12.5,0s12.5,5.61,12.5,12.5-5.61,12.5-12.5,12.5ZM12.5,3C7.26,3,3,7.26,3,12.5s4.26,9.5,9.5,9.5,9.5-4.26,9.5-9.5S17.74,3,12.5,3Z"/>
            <path style = "fill: #96acb6" d="M14.65,12.66l2.44-2.44c.59-.59.59-1.54,0-2.12s-1.54-.59-2.12,0l-2.44,2.44-2.44-2.44c-.59-.59-1.54-.59-2.12,0s-.59,1.54,0,2.12l2.44,2.44-2.44,2.44c-.59.59-.59,1.54,0,2.12.29.29.68.44,1.06.44s.77-.15,1.06-.44l2.44-2.44,2.44,2.44c.29.29.68.44,1.06.44s.77-.15,1.06-.44c.59-.59.59-1.54,0-2.12l-2.44-2.44Z"/>
        </svg>        
        </a>`

        document.querySelectorAll('.controls').forEach(ele => {
            ele.style.width = document.querySelector('.slidesWrapper').offsetWidth + 'px' 
        })



        const bbEle = ele.getBoundingClientRect()
        const bbSlideshow = slidesCont.getBoundingClientRect()

        gsap.fromTo(transition,{
            x: bbEle.x,
            y: bbEle.y,
            width: bbEle.width,
            height: bbEle.height
        }, {
            x: bbSlideshow.x,
            y: bbSlideshow.y,
            width: bbSlideshow.width,
            height: bbSlideshow.height,
            duration:0.4
        })

        ele.style.opacity = 0
        gsap.to('#wrapper', {
            opacity:0,
            duration:0.5,
        })

        gsap.from(slideshow, {
            opacity:0,
            duration:0.5,
            delay:0.4,
            onComplete: ()=>{
                transition.remove()
            }
        })

        close.addEventListener('click', this.handleDepop)

        prev.addEventListener('click', this.handlePrev)
        next.addEventListener('click', this.handleNext)
        slideshow.addEventListener('click', this.handleNext)
        slideshow.style.cursor = 'pointer'

        window.addEventListener("keydown", this.handleKeypress)

        window.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
        window.addEventListener('wheel', this.preventDefault, this.wheelOpt); // modern desktop
        window.addEventListener('mousewheel', this.preventDefault, this.wheelOpt); // modern desktop
        window.addEventListener('touchmove', this.preventDefault, this.wheelOpt); // mobile


        eval(this.script)


    }

    preventDefault(e) {
        e.preventDefault();
    }

    depopulate() {
        this.prev.removeEventListener('click', this.handlePrev)
        this.next.removeEventListener('click', this.handleNext)
        this.populatedSlideshow.addEventListener('click', this.handleNext)

        this.close.removeEventListener('click', this.handleDepop)
        window.removeEventListener('keydown', this.handleKeypress)

        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener('wheel', this.preventDefault, this.wheelOpt); 
        window.removeEventListener('mousewheel', this.preventDefault, this.wheelOpt); 
        window.removeEventListener('touchmove', this.preventDefault, this.wheelOpt);
      

        this.tl.forEach(ani => {ani.kill()}) 
        this.ele.style.opacity = 1

        
        gsap.to(this.populatedSlideshow, {
            opacity:0,
            duration:0.4,
            onComplete:()=>{
                this.populatedSlideshow.remove()
            }
        })

        gsap.to('#wrapper', {
            opacity:1,
            duration:0.4,
            delay:0.2
        })        
        
    }


    keypress(event) {
        if(this.lock) return
            switch (event.key) {
                case "ArrowLeft":
                    this.move(-1)
                break;
                case "ArrowRight":
                    this.move(1)
                break;
                case "Escape":
                    this.depopulate()
                break;
                case 'ArrowDown':
                case 'ArrowUp':
                case 'PageUp':
                case 'PageDown':
                case 'Home':
                case 'End':
                    event.preventDefault()
                break;
            }
    }
    
    move(move) {
        if(this.loading) return;
        if(this.index + move < 0) return
        if(this.index + move > this.max-1) return

        if(this.lock) return;
        this.lock = true

        const prev = this.slides[this.index]
        const index = this.index += move
        const curr = this.slides[index]

        this.count.querySelector('span').innerText = index+1

        // get meta

        // move it
        if(move > 0) {
            this.transitionAnimation(prev.dataset.ani, curr, 'curr', move)
            this.transitionAnimation(prev.dataset.ani, prev, 'prev', move)
        } else {
            this.transitionAnimation(curr.dataset.ani, curr, 'curr', move)
            this.transitionAnimation(curr.dataset.ani, prev, 'prev', move)
        }

    }

    transitionAnimation(type, ele, state, move) {        

        type = type.toLowerCase() || 'left'
        const animate = []
        if(state == 'prev') move *= -1 // inverse if its leaving
        switch(type) {
            case 'left':
                animate.push({
                    x: `${100*move}%`,
                    autoAlpha:1
                }, {
                    x: 0,
                    autoAlpha:1
                })
            break;
            case 'right':
                animate.push({
                    x: `${-100*move}%`,
                    autoAlpha:1
                }, {
                    x: 0,
                    autoAlpha:1
                })
            break;            
            case 'up':
                animate.push({
                    y: `${100*move}%`,
                    autoAlpha:1
                }, {
                    y: 0,
                    autoAlpha:1
                })
            break;
            case 'fade': 
                animate.push({
                    autoAlpha:0,
                }, {
                    autoAlpha:1,
                })
                if(state == 'prev') animate[0].autoAlpha = 1
            break;
            case 'none': 
                animate.push({
                    autoAlpha:1,
                }, {
                    autoAlpha:1,
                })
                if(state == 'prev') animate[0].autoAlpha = 1
            break;            
        }
        
        if(state == 'prev') {
            animate.reverse()
            ele.style.zIndex = 0
            animate[1].onComplete = () => {
                ele.style.visibility = 'hidden'
                this.lock = false
            }            
        } else {
            ele.style.zIndex = 1
        }

        animate[1].duration = 0.5
        gsap.fromTo(ele, ...animate)
    }
}