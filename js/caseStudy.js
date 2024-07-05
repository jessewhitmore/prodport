import { gsap } from "gsap";
import { loadResolver } from "./loadhandler";


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

    populate(ele) {

        this.index = 0
        this.fromEle = ele

        const slideshow = this.populatedSlideshow = this.slideshow.cloneNode(true)
        this.style(slideshow, {
            position:'fixed',
            top:'50px',
            left:'calc(max(16.667vw, 300px) + 25px)',
            bottom: '50px',
            right: '50px',
            opacity:1
        })

        console.log(this.imgHold)

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
            alignItems: 'center'
        })
        slideshow.insertBefore(controlsT, slideshow.querySelector('.slidesWrapper'))

        const controlsB = this.ve(slideshow, 'controls', {
            justifyContent: 'center',
            alignItems: 'center'
        })

        const prev = this.prev = this.ve(controlsB, 'prev')
        prev.innerHTML = `<a href="javascript:void(0)">PREV</a>`

        const count = this.count = this.ve(controlsB, 'count')
        count.innerHTML = `<span>1</span> / ${this.max}`

        const next = this.next = this.ve(controlsB, 'next')
        next.innerHTML = `<a href="javascript:void(0)">NEXT</a>`

        const download = this.download = this.ve(controlsT, 'download')
        download.innerHTML = `<a href="download/JWhitmore-${this.studyName}-CaseStudy.pdf" download="JWhitmore-${this.studyName}-CaseStudy.pdf">DOWNLOAD`

        const close = this.close = this.ve(controlsT, 'close')
        close.innerHTML = `<a href="javascript:void(0)">CLOSE</a>`


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

        prev.addEventListener('click', this.handlePrev)
        next.addEventListener('click', this.handleNext)

        window.addEventListener("keydown", this.handleKeypress)

        window.addEventListener('DOMMouseScroll', this.preventDefault, false); // older FF
        window.addEventListener('wheel', this.preventDefault, this.wheelOpt); // modern desktop
        window.addEventListener('mousewheel', this.preventDefault, this.wheelOpt); // modern desktop
        window.addEventListener('touchmove', this.preventDefault, this.wheelOpt); // mobile

        

        close.addEventListener('click', this.handleDepop)

        eval(this.script)

    }

    preventDefault(e) {
        e.preventDefault();
    }

    depopulate() {
        this.prev.removeEventListener('click', this.handlePrev)
        this.next.removeEventListener('click', this.handleNext)
        this.close.removeEventListener('click', this.handleDepop)
        window.removeEventListener('keydown', this.handleKeypress)

        window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
        window.removeEventListener('wheel', this.preventDefault, this.wheelOpt); 
        window.removeEventListener('mousewheel', this.preventDefault, this.wheelOpt); 
        window.removeEventListener('touchmove', this.preventDefault, this.wheelOpt);
      

        this.tl.forEach(ani => {ani.kill()}) 
        this.fromEle.style.opacity = 1

        
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