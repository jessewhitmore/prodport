import { gsap } from "gsap";
import { styles } from "../main";

const svgEles = {}

const svgAniObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            svgEles[entry.target.id].ani.seek(0)
            svgEles[entry.target.id].ani.play()
            entry.target.style.transition = 'all 0.1s'
            entry.target.style.opacity = 1
        } else {
            entry.target.style.transition = 'all 0.2s'
            entry.target.style.opacity = 0
        }
    });
  



  }, {
    root: null, // Use the viewport as the container
    rootMargin: '-10% 0px -10% 0px',
    threshold: 0.1 
  });
  
const arrowData = [
    'M36.92,20.56c-.07-2.19-.21-4.27-.3-6.38-.01-.32-.02-.65-.03-.97-.02-.55-.03-1.1-.05-1.64-.11-3.34-.18-6.69-.18-10.04.03-1.01-1.01-1.78-1.96-1.44-3.96,1.34-10.64,3.52-14.54,4.82-4.56,1.87-9.11,3.77-13.65,5.72-.56.01-1.11,0-1.67.02-1.08.09-2.52,0-3.56.38-1.51.7-1.21,2.66.37,3.06,7.82,2.81,15.67,5.65,23.64,8.02,1.59.45,6.86,1.91,8.32,2.44,3.15,1.04,3.79-1.47,3.61-3.97ZM31.92,20.92c-7.66-2.06-15.45-4.65-22.93-7.32-.35-.12-.7-.24-1.05-.37-.97-.35-2.36-.84-3.62-1.3,1.9-.45,3.79-.9,5.68-1.37,3.61-.89,7.21-1.81,10.8-2.75,3.33-1.13,8.58-2.88,12.54-4.2,0,2.54.09,5.09.19,7.65.03.71.06,1.42.09,2.12.11,2.73.23,5.46.27,8.16-.14-.05-.28-.09-.42-.14,0,0-1.55-.49-1.55-.49Z',
    'M42.15.21c-5.46,3.35-11.7,4.96-17.83,5.42-8.06,1.13-16.28.74-24.32-.85,5.32,2.04,10.92,3.51,16.57,4.11,2.13.23,4.27.31,6.4.27,4.65-.09,9.26-.86,13.7-2.49-.39,1.03-.6,2.05-.64,3.06-.05,1.17.08,2.34.34,3.5.37,1.62.98,3.22,1.62,4.79-1.46-.92-2.96-1.68-4.45-2.39-2.36-1.06-4.76-1.94-7.18-2.7-4.9-1.55-9.91-2.61-14.91-3.56-.55-.11-2.22-.49-2.74-.63-.42.09-.71.17-1.09.68-.4.13-.39,2.12-.14,2.04.38.63.4.54.67.74.27.16.66.24.94.32,1.11.25,3.21.62,4.34.85,6.45,1.29,12.95,2.86,19.04,5.6,2.98,1.38,5.95,3.07,8.06,5.51,1.01,1.31,2.92.07,2.52-1.67-.83-3.69-2.72-6.43-3.6-9.68-.15-.55-.28-1.12-.36-1.71-.07-.46-.08-.89-.06-1.32.14-3.05,2.32-5.21,4.58-6.77,1.64-1.19.25-4.13-1.45-3.12Z',
    'M37.4,22.71c-.09-.77-1.05-2.41-1.28-3.04-.96-2.04-1.75-4.09-2.14-6.16-.16-.85-.25-1.7-.25-2.56,0-.16.01-.32.01-.47.07-2.62.99-5.15,2.3-7.34.2-.47.44-.72.23-1.74-.94-2.59-4.72-.83-6.5-.44-7.76,2.27-15.11,5.72-22.34,9.46-1.66.04-3.33.11-4.99.22l-.64.08c-.12.02-.23.04-.4.08-.5.15-.77.21-1.18.84-.16.07-.36,1.2-.08,1.59.09.25.38.57.47.63.05.04.11.06.16.1.05.03.09.06.14.09.2.1.4.19.6.27,6.28,2.45,12.57,4.83,18.95,7.01,4.86,1.45,9.88,3.67,15.02,3.72.99-.03,2.11-1.06,1.92-2.31ZM21.35,18.18c-4.17-1.42-8.33-2.94-12.47-4.51-1.05-.4-2.09-.8-3.14-1.2,2.12-.68,4.51-1.46,6.6-2.13,2.97-.96,5.31-1.72,5.31-1.72,4.79-1.42,9.97-3.89,14.68-4.99-1.04,2.27-1.52,4.49-1.58,6.68-.03,1.12.06,2.23.24,3.34.43,2.67,1.39,5.31,2.63,7.98-4.07-.54-8.29-2.21-12.28-3.44Z',
    'M35.33.84c-.42-.81-1.34-1.08-2.05-.6,0,0-.01,0-.02.01h0c-2.71,1.79-5.76,3.08-8.88,4.1-5.39,1.57-10.84,2.95-16.33,4.08-1.8-.07-3.49-.13-5.01-.18-.69-.16-1.38-.18-1.97-.03-.06,0-.12.01-.21.03-.2.03-.35.13-.47.26-.02.01-.05.02-.07.04.01,0,.03,0,.05,0C.1,8.86,0,9.36,0,9.9c0,.29.03.57.08.84.17.93.56,1.61.76.85.2.04.21.04.27.05,0,0,1.52.15,1.52.15,9.2.99,19.02,4.29,24.88,12.79.88.94,2.45.29,2.55-1.1.08-.51-.16-1.26-.23-1.74-.98-3.61-1.61-6.58-1.45-9.18.07-1.08.28-2.1.66-3.07.87-2.24,2.64-4.27,5.73-6.3h0s.01,0,.02-.01c.72-.47.96-1.52.54-2.33ZM25.91,9.15c-.28.88-.47,1.8-.54,2.73-.02.23-.02.46-.03.68-.09,1.83.12,3.54.47,5.21-2.49-2.34-5.33-4.16-8.36-5.55-1.63-.75-3.31-1.38-5.01-1.9,2.74-.28,5.47-.73,8.16-1.37,1.55-.37,3.08-.8,4.6-1.32.52-.17,1.03-.36,1.55-.55-.33.66-.62,1.36-.84,2.08Z',
    'M36.89,19.61c-.66-2.04-1.43-4.13-1.99-6.21-.17-.64-.32-1.28-.44-1.91-.6-3.13-.46-6.22,1.57-9.14.87-1.29-.7-2.95-2.03-2.12-4.26,2.49-9.11,4.24-13.84,5.78-4.38,1.75-8.83,3.33-13.31,4.83-1.19.01-3.64.04-4.57.08-.4.03-.89,0-1.38.17-.33.26-.1-.22-.84.76-.27,2.16.39,1.53.7,2.04.14.08.45.15.52.16,8.35,1.41,16.5,5.15,24.38,8.27,3.97,1.54,13.71,5.86,11.22-2.71ZM32.62,21.54c-6.78-2.05-13.51-5.34-20.34-7.7-1.2-.41-2.4-.81-3.6-1.15-.78-.24-1.71-.49-2.65-.73,2.19-.32,4.37-.68,6.55-1.11,6.57-1.27,13.02-3.09,19.06-5.98-.53,2.05-.62,4.24-.34,6.34.11.82.28,1.63.5,2.41.07.23.13.46.21.69.74,2.68,1.87,4.93,2.27,7.47,0,0,0,.01,0,.02-.53,0-1.09-.11-1.66-.25Z',
    'M36.92,20.56c-.07-2.19-.21-4.27-.3-6.38-.01-.32-.02-.65-.03-.97-.02-.55-.03-1.1-.05-1.64-.11-3.34-.18-6.69-.18-10.04.03-1.01-1.01-1.78-1.96-1.44-3.96,1.34-10.64,3.52-14.54,4.82-4.56,1.87-9.11,3.77-13.65,5.72-.56.01-1.11,0-1.67.02-1.08.09-2.52,0-3.56.38-1.51.7-1.21,2.66.37,3.06,7.82,2.81,15.67,5.65,23.64,8.02,1.59.45,6.86,1.91,8.32,2.44,3.15,1.04,3.79-1.47,3.61-3.97ZM31.92,20.92c-7.66-2.06-15.45-4.65-22.93-7.32-.35-.12-.7-.24-1.05-.37-.97-.35-2.36-.84-3.62-1.3,1.9-.45,3.79-.9,5.68-1.37,3.61-.89,7.21-1.81,10.8-2.75,3.33-1.13,8.58-2.88,12.54-4.2,0,2.54.09,5.09.19,7.65.03.71.06,1.42.09,2.12.11,2.73.23,5.46.27,8.16-.14-.05-.28-.09-.42-.14,0,0-1.55-.49-1.55-.49Z'
]

let arrowPaths = []



export function returnMobileDrawn(app, cards) {

    // rule off edges of card
    const frontface = app.querySelector('.frontface')
    const backface = app.querySelector('.backface')

    cardLineOff(cards.sides[0])
    cardLineOff(cards.sides[1])

    // draw CS lines
    const size = {
        w: app.querySelector('.mobileWrapper').offsetWidth, 
        h: app.querySelector('.mobileWrapper').offsetHeight
    }

    const cs = cards.pages[1]
    const offsetCS = 5
    const csHeader = cs.querySelector('.header')
    const csHeaderSVG = sv('svg', {
        viewBox: `0 0 ${size.w} ${30}`,
        style: `position: absolute; pointer-events:none; bottom:0; left:0; width:100%; height:30px; display: inline-block;`
    })
    stackedLines(csHeaderSVG, 'hor', 30-2, 0, size.w, 0.5, -offsetCS, 30, 2)
    csHeader.prepend(csHeaderSVG)   

    const csFooter = cs.querySelector('.footer') 
    const csFooterSVG = sv('svg', {
        viewBox: `0 0 ${size.w} ${30}`,
        style: `position: absolute; pointer-events:none; top:0; margin-top: -15px; width:100%; height:30px; display: inline-block;`
    })
    stackedLines(csFooterSVG, 'hor', 30-2, 0, size.w, 0.5, -offsetCS, 30, 2)
    csFooter.prepend(csFooterSVG)   



}

function cardLineOff(dom) {

    const w = dom.offsetWidth
    const h = dom.offsetHeight

    const svg = sv('svg', {
        viewBox: `0 0 ${w} ${h}`,
        style: `position: absolute; pointer-events:none; top:0; left:0; width:${w}px; height:${h}px; display: inline-block;`
    })

    const lines = []
    const offset = 3
    const pl = 15
    const lineWidth = 1.5
    const divide = 0.2
    const th = stackedLines(svg, 'hor', pl, 0 -  w*0.2, w + w*0.2, divide, offset, 0.5, lineWidth)
    const bh = stackedLines(svg, 'hor', h - pl, 0 -  w*0.2, w + w*0.2, divide, offset, 0.5, lineWidth)

    const lv = stackedLines(svg, 'ver', pl, 0 -  h*0.2, h + h*0.2, divide, offset, 0.5, lineWidth)
    const rv = stackedLines(svg, 'ver', w - pl, 0 -  h*0.2, h + h*0.2, divide, offset, 0.5, lineWidth)

    lines.push(...th, ...bh, ...lv, ...rv)

    const hazSpace = 5 + 5*Math.random()

    let hazardT = hazardStripe([pl + offset*2, pl - offset], [w - (pl + offset), 0], 45, 2, hazSpace, 0)    
    hazardT.forEach(haz => {
        const path = sv('path', {
            fill:styles.fill,
            d: variantData(haz, 1, 2, 1),
        })
        maskLine(path, haz, svg)
    })

    let hazardB = hazardStripe([pl, h + pl*2 ], [w - (pl + offset), h - (pl - offset*2)], 45, 2, hazSpace, 0)    
    hazardB.forEach(haz => {
        const path = sv('path', {
            fill:styles.fill,
            d: variantData(haz, 1, 2, 1),
        })
        maskLine(path, haz, svg)
    })

    let hazardL = hazardStripe([pl - offset, pl + (offset) ], [-pl, h - (pl - offset*2)], 45, 2, hazSpace, 0)    
    hazardL.forEach(haz => {
        const path = sv('path', {
            fill:styles.fill,
            d: variantData(haz, 1, 2, 1),
        })
        maskLine(path, haz, svg)
    }) 


    let hazardR = hazardStripe([w + pl, pl ], [ w - (pl - offset), h - pl], 45, 2, hazSpace, 0)    
    hazardR.forEach(haz => {
        const path = sv('path', {
            fill:styles.fill,
            d: variantData(haz, 1, 2, 1),
        })
        maskLine(path, haz, svg)
    })   



  
//    aniStroke(svg, lines, 0.25, 0.2, 0.25)
    dom.appendChild(svg)

}



// -----------------------------------------------------------------------------------------------------------------------------------------------

export function returnDrawn() {
    

    const page = sv('svg', {
        viewBox: `0 0 ${window.innerWidth} ${window.innerHeight}`,
        style: 'position: fixed; pointer-events:none; top:0; left: 0; width:100%; height:100%'
    })


    let edgeOff = 20
    let edge2nd = 10

    const lineWidth = 2
    const wob = 100


    const app = document.querySelector('#app')


    // top left
    const lHTL = stackedLines(page, 'hor', edgeOff, -50, window.innerWidth * 0.4, 0.1, edge2nd, wob, lineWidth )
    const lVTL = stackedLines(page, 'ver', edgeOff, -50, window.innerHeight * 0.2, 0.1, edge2nd, wob, lineWidth )
    aniStroke(page, [].concat(lHTL, lVTL), 1, 0.25, 0.2)

    // nav line-off
    const navWidth = document.querySelector('#navBar').offsetWidth
    const lVNAV1 = stackedLines(page, 'ver', navWidth, -100, window.innerHeight * 0.55, 0.1, edge2nd, wob, lineWidth )
    const lVNAV2 = stackedLines(page, 'ver', navWidth, window.innerHeight * 0.8,  window.innerHeight + wob/3, 0.5, edge2nd, wob, lineWidth )
    aniStroke(page, lVNAV1, 1, 0.5, 0.2)
    aniStroke(page, lVNAV2, 1, 1.2, 0.2)


    // top right
    const lHTR = stackedLines(page, 'hor', edgeOff, window.innerWidth + 50, window.innerWidth * 0.8, 0.1, edge2nd, wob, lineWidth )
    const lVTR = stackedLines(page, 'ver', window.innerWidth - edgeOff, 0, window.innerHeight * 0.4, 0.1, -edge2nd, wob, lineWidth )
    aniStroke(page, [].concat(lHTR, lVTR), 1, 0.75, 0.2)


    // bottom right
    const lHBR = stackedLines(page, 'hor', window.innerHeight - edgeOff, window.innerWidth + 50, window.innerWidth * 0.9, 0.1, -edge2nd, wob, lineWidth )
    const lVBR = stackedLines(page, 'ver', window.innerWidth - edgeOff, window.innerHeight + 50, window.innerHeight * 0.8, 0.1, -edge2nd, wob, lineWidth )
    aniStroke(page, [].concat(lHBR, lVBR), 1, 1.2, 0.2)

    // middle hor
    const lHM = stackedLines(page, 'hor', window.innerHeight - edgeOff, window.innerWidth * 0.5, window.innerWidth * 0.7, 0.5, -edge2nd, wob + window.innerWidth*0.075, lineWidth )
    aniStroke(page, lHM, 1, 1, 0.2)

    // bottom left
    const lHBL = stackedLines(page, 'hor', window.innerHeight - edgeOff, 0, window.innerWidth * 0.3, 0.1, -edge2nd, wob, lineWidth )
    const lVBL = stackedLines(page, 'ver', edgeOff, window.innerHeight, window.innerHeight * 0.6, 0.1, edge2nd, wob, lineWidth )
    aniStroke(page, [].concat(lHBL, lVBL), 1, 0.6, 0.2)


    // append page overlay
    app.appendChild(page)

    




    const introIMdom = document.querySelector('#introduction .imgHold')
    const introINdom = document.querySelector('#introduction #introInfo')


    const introSkirtL = genSkirt(document.querySelectorAll('#introduction .skirt')[0], introINdom, 'right', 0.35 + 0*(0.5-Math.random())*2, 150 + 50 * Math.random())
    const introSkirtR = genSkirt(document.querySelectorAll('#introduction .skirt')[1], introIMdom, 'left', 0.05, 150, 50, 0.75)



    generateUnderline(document.querySelector('#introInfo .infoArea'), document.querySelector('#introInfo'), 4, 0.7, 'center')






    cornerPieces(introIMdom, 70, {
        tl:[0.5,0.5],
        br:[0.5,0.3]
    })


    cornerPieces(introINdom, 40, {
        tl:[0.2,0.15],
        tr:[0.3,0.15],
        bl:[0.25,0.15],
        br:[0.2,0.15]
    })    
    



    const studyDoms = document.querySelectorAll('.study')
    const hazStudyPos = []
    studyDoms.forEach((dom, i) => {
        hazStudyPos.push(i*2, i*2+1)

        cornerPieces(dom.querySelector('.imgHold'), 40, randomCornerObject(0, [0.4,0.2]))

        generateUnderline(dom.querySelector('.infoArea h1'), dom.querySelector('.infoArea'), 'max', 0.5 - (0.3*Math.random()), 'top')

        const infoRandom = Math.random()
        if(infoRandom > 0.9) {
            cornerPieces(dom.querySelector('.info'), 40, {
                bl: [0.4 + 0.2*Math.random(), 0.4 + 0.2*Math.random()],
                br: [0.4 + 0.2*Math.random(), 0.4 + 0.2*Math.random()]
            })
        } else if(infoRandom > 0.6) {
            cornerPieces(dom.querySelector('.info'), 40, {
                bl: [0.4 + 0.2*Math.random(), 0.4 + 0.2*Math.random()],
            })       
        } else if(infoRandom > 0.2) {
            cornerPieces(dom.querySelector('.info'), 40, {
                br: [0.4 + 0.2*Math.random(), 0.4 + 0.2*Math.random()]
            })
        } else {
        }

    })


    let hazStudy1 = returnStudyPos(hazStudyPos, studyDoms) 
    const hazStudySkirt1 = genSkirt(document.querySelectorAll('#case_studies .skirt')[hazStudy1.side], hazStudy1.pos, (hazStudy1.side == 0) ? 'right' : 'left', 0.05 + Math.random()*0.2, 50, 50)

    if(Math.random() < 0.5) {
        let hazStudy2 = returnStudyPos(hazStudyPos, studyDoms) 
        const hazStudySkirt2 = genSkirt(document.querySelectorAll('#case_studies .skirt')[hazStudy2.side], hazStudy2.pos, (hazStudy2.side == 0) ? 'right' : 'left', 0.05 + Math.random()*0.2, 150, 0, Math.random())
    }

    if(Math.random() < 0.2) {
        let hazStudy3 = returnStudyPos(hazStudyPos, studyDoms) 
        const hazStudySkirt3 = genSkirt(document.querySelectorAll('#case_studies .skirt')[hazStudy3.side], hazStudy3.pos, (hazStudy3.side == 0) ? 'right' : 'left', 0.05 + Math.random()*0.2, 50, 0, Math.random())
    }    


    cornerPieces(document.querySelector('#contact .imgHold'), 40, randomCornerObject([0.2,0.2], [0.2,0.2], [1, 1, 0.7, 0.1]))
    generateUnderline(document.querySelector('#contact .contactDetails h1'), document.querySelector('#contact .contactDetails'), 'max', 0.7 - (0.3*Math.random()), 'top')

}








let svgID = 0
function sv(type, attributes) {
    const ele = document.createElementNS('http://www.w3.org/2000/svg', type)
    if(attributes) {
        for (const [key, value] of Object.entries(attributes)) {
            ele.setAttribute(key, value)
        }
    }

    if(type == 'svg') {
        const def = document.createElementNS('http://www.w3.org/2000/svg', 'defs')
        ele.setAttribute('xmlns',"http://www.w3.org/2000/svg")
        ele.appendChild(def)
        ele.id = `svg${svgID}`
        svgEles[ele.id] = {
            ani: gsap.timeline({paused: true}),
            ele
        }
        svgAniObserver.observe(ele)
        svgID++
    }

    return ele
}


function toplevel(element) {
    let currentElement = element;
    while (currentElement) {
        if (currentElement.tagName === 'SVG' || currentElement.tagName === 'svg') {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

function aniProp(svg, ele, duration, delay, stag, fromProps, toProps) {
    const target = (Array.isArray(ele)) ? ele : [ele]

    duration = duration || 1;
    delay = delay || 0;
    stag = stag || 1;
    target.forEach(e => {
        toProps.duration = duration
        svgEles[svg.id].ani.fromTo(e, fromProps, toProps, delay)
        delay += stag*Math.random()
    })


}

function aniStroke(svg, ele, duration, delay, stag) {
    const target = (Array.isArray(ele)) ? ele : [ele]

    duration = duration || 1;
    delay = delay || 0;
    stag = stag || 1;
    target.forEach(e => {
        let lens = 0
        if(e.tagName == 'path') {
            lens = e.getTotalLength()
        } else {
            let deltaX = e.x2.baseVal.value - e.x1.baseVal.value;
            let deltaY = e.y2.baseVal.value - e.y1.baseVal.value;
            lens = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
        svgEles[svg.id].ani.fromTo(e, {
            strokeDasharray: lens,
            strokeDashoffset: lens,
        }, {
            strokeDasharray: lens,
            strokeDashoffset:0,
            duration,
        }, delay)
        delay += stag*Math.random()
    })


}


let unique = 0
function stackedLines(ele, dir, plane, from, to, weight, offset, dist, wid) {

    let l1obj, l2obj 

    let weightOffset = 1 - weight;

    let l1Wob = dist * (Math.random() - 0.5) * 2
    let l2Wob = dist * (Math.random() - 0.5) * 2

    if(dir.toLowerCase() == 'hor') {

        l1obj = {
            x1: from + (l1Wob * weight),
            x2: to +  (l1Wob * weightOffset),
            y1: plane,
            y2: plane,
            stroke: 'white',
            'stroke-width':wid,
            'stroke-linecap':'round',
        }

        l2obj = {
            x1: from + (l2Wob * weight),
            x2: to +  (l2Wob * weightOffset),
            y1: plane + offset,
            y2: plane + offset,
            stroke: 'white',
            'stroke-width':wid,
            'stroke-linecap':'round',            
        }
    } else {
        l1obj = {
            y1: from + (l1Wob * weight),
            y2: to +  (l1Wob * weightOffset),
            x1: plane,
            x2: plane,
            stroke: 'white',
            'stroke-width':wid,
            'stroke-linecap':'round',            
        }
        l2obj = {
            y1: from + (l2Wob * weight),
            y2: to +  (l2Wob * weightOffset),
            x1: plane + offset,
            x2: plane + offset,
            stroke: 'white',
            'stroke-width':wid,
            'stroke-linecap':'round',            
        }
    }

    const line1 = sv('line', l1obj)
    const path1 = sv('path', {
        fill:styles.fill,
        d: variantData(line1, 1, 1, 0.25),
    })
    

    const line2 = sv('line', l2obj)
    const path2 = sv('path', {
        fill:styles.fill,
        d: variantData(line2, 1, 1, 0.25),
    })
    
    maskLine(path1, line1, ele)
    maskLine(path2, line2, ele)


    return [line1, line2];
}













function maskLine(line, maskEle, ele, after) {

    const defs = toplevel(ele).querySelector('defs')
    const mask = sv('mask')
    mask.id = `m${unique}`

    line.setAttribute('mask',`url(#m${unique})`)
    if(after) maskEle.after(line)

    unique++

    mask.appendChild(maskEle)
    defs.appendChild(mask)

    if(!after) ele.appendChild(line)
    
    
    
}












function genSkirt(dom, lineup, stacked, pos, h, vari, aniOffset) {
    if(dom.offsetWidth - 40 < 50) return;
    pos = pos || 0.5
    vari = vari || 50
    h = (h) ? h + vari * Math.random() : 50 + vari * Math.random() 
    aniOffset = aniOffset || 0
    let w = dom.offsetWidth - 40
    let bb = (lineup.getBoundingClientRect().y + lineup.getBoundingClientRect().height*pos) - dom.parentElement.getBoundingClientRect().y
    const svg = sv('svg',{
        viewBox: `0 0 ${w} ${h}`,
        style: `position: absolute; pointer-events:none; margin-top:${bb}px; margin-left: 20px; width:${w}px; height:${h}px`        
    })


    const tline = sv('line',{
        x1: -50,
        y1: 7,
        x2: w+50,
        y2: 7,
        stroke: 'white',
        'stroke-width':3,
        'stroke-linecap':'round',          
    })
    const tpath = sv('path', {
        fill:styles.fill,
        d: variantData(tline, 1, 1, 0.25)
    })
    maskLine(tpath, tline, svg)
    const tarrow = arrowGen(tline, svg)

    const bline = sv('line',{
        x1: -50,
        y1: h-7,
        x2: w+50,
        y2: h-7,
        stroke: 'white',
        'stroke-width':3,
        'stroke-linecap':'round',          
    })
    const bpath = sv('path', {
        fill:styles.fill,
        d: variantData(bline, 1, 1, 0.25)
    })
    maskLine(bpath, bline, svg)
    const barrow = arrowGen(bline, svg)

    aniStroke(svg, [tline, bline], 0.25, 0.5 + aniOffset, 0.75)
    aniProp(svg, tarrow, 0.1, 0.5 + aniOffset, 0.25, {opacity:1, scaleY:0}, {opacity:1, scaleY:'random(0.5, 0.8)'})
    aniProp(svg, barrow, 0.1, 1 + aniOffset, 0.25, {opacity:1, scaleY:0}, {opacity:1, scaleY:'random(0.5, 0.8)'})

    if(stacked == 'left' || stacked == 'both') {
        const modH = h+h*Math.random()/2
        const lsvg = sv('svg', {
            viewBox: `0 0 12 ${modH}`,
            style: `position: absolute; pointer-events:none; margin-top:${bb - modH/2 - 25}px; margin-left: -2px; width:12px; height:${modH*2}px`        
        })
        const lstack = stackedLines(lsvg, 'ver', 11, 0, modH+modH/2*Math.random(), 1, -10, 50, 2)
        aniStroke(lsvg, lstack, 0.25, 0.25 + aniOffset, 0.5)
        dom.appendChild(lsvg)
    }

    if(stacked == 'right' || stacked == 'both') {
        const modH = h+h*Math.random()/2
        const rsvg = sv('svg', {
            viewBox: `0 0 12 ${modH}`,
            style: `position: absolute; pointer-events:none; margin-top:${bb - modH/2 - 25}px; margin-left: ${dom.offsetWidth - 12}px; width:12px; height:${modH*2}px`        
        })
        const rstack = stackedLines(rsvg, 'ver', 1, 0, modH*1.2+modH/2*Math.random(), 1, 10, 50, 2)
        aniStroke(rsvg, rstack, 0.25, 1 + aniOffset, 0.5)
        dom.appendChild(rsvg)        
    }



    let hazard = hazardStripe([10, h-20], [w-10, 20], 45, 2, 15 + 10*Math.random())    
    hazard.forEach(haz => {
        const path = sv('path', {
            fill:styles.fill,
            d: variantData(haz, 1, 2, 1),
        })
        maskLine(path, haz, svg)
    })
    aniStroke(svg, hazard, 0.25, 1.2 + aniOffset, 0.1)

    dom.appendChild(svg)

}

function refreshArrow() {
    arrowData.forEach(d=>{
        arrowPaths.push(sv('path', {
            fill: styles.fill,
            d
        }))
    })
}

function arrowGen(line, svg) {
    if(arrowPaths == 0) refreshArrow()
    const apl = arrowPaths.splice(Math.floor(arrowPaths.length*Math.random()),1)[0]
    apl.setAttribute('transform-origin',`16 13`)
    apl.setAttribute('transform',`translate(${line.x1.baseVal.value + 40} ${line.y1.baseVal.value - 13}) scale(0.6)`)


    if(arrowPaths == 0) refreshArrow()
    const apr = arrowPaths.splice(Math.floor(arrowPaths.length*Math.random()),1)[0]
    apr.setAttribute('transform-origin',`0 13`)
    apr.setAttribute('transform',`translate(${line.x2.baseVal.value - 50} ${line.y2.baseVal.value - 13}) scale(-0.6)`)

    svg.appendChild(apl)
    svg.appendChild(apr)

    return [apl, apr]
}








function cornerPieces(dom, wob, corners, ) {


    let w = dom.offsetWidth + wob*2;
    let h = dom.offsetHeight + wob*2

    
    const svg = sv('svg', {
        viewBox: `0 0 ${w} ${h}`,
        style: `position: absolute; pointer-events:none; top:0; left:0; margin-top:${-wob}px; margin-left: ${-wob}px; width:${w}px; height:${h}px; display: inline-block;`
    })

    let offset = 10
    let lineWidth = 2
    let divide = 0.2
    const lines = []
    if(corners.tl) {
        const lHTL = stackedLines(svg, 'hor', wob, wob*divide, w * corners.tl[0], divide, -offset, wob, lineWidth )
        const lVTL = stackedLines(svg, 'ver', wob, wob*divide, h * corners.tl[1], divide, -offset, wob, lineWidth )
        lines.push(...lHTL, ...lVTL)
    }
    if(corners.tr) {
        const lHTR = stackedLines(svg, 'hor', wob, w-wob*divide, w * (1-corners.tr[0]), divide, -offset, wob, lineWidth )
        const lVTR = stackedLines(svg, 'ver', w-wob, wob*divide, h * corners.tr[1], divide, offset, wob, lineWidth )
        lines.push(...lHTR, ...lVTR)
    }

    if(corners.bl) {
        const lHBL = stackedLines(svg, 'hor', h-wob, wob*divide, w * corners.bl[0], divide, offset, wob, lineWidth )
        const lVBL = stackedLines(svg, 'ver', wob, h-wob*divide, h * (1-corners.bl[1]), divide, -offset, wob, lineWidth )
        lines.push(...lHBL, ...lVBL)
    }

    if(corners.br) {
        const lHBR = stackedLines(svg, 'hor', h-wob, w-wob*divide, w * (1-corners.br[0]), divide, offset, wob, lineWidth )
        const lVBR = stackedLines(svg, 'ver', w-wob, h-wob*divide, h * (1-corners.br[1]), divide, offset, wob, lineWidth )
        lines.push(...lHBR, ...lVBR)
    }        



    aniStroke(svg, lines, 0.25, 0.2, 0.25)
    dom.appendChild(svg)
}












export function svgCleanUp() {
    svgID = 0
    for (const key in svgEles) {
        if (svgEles.hasOwnProperty(key)) {
            const svg = svgEles[key].ele
            try {
                svgAniObserver.unobserve(svg)

              } catch (e) {
                console.error('Failed to unobserve:', key);
              }
              svgEles[key].ani.kill()
              svg.remove()
        }
    }
    
}

























async function loadSVG(url, container) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Network response was not ok');
      const svgText = await response.text();
      container.innerHTML = svgText;
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  }










function randomCornerObject(min, variation, random) {
    min = min || [0.1,0.1]
    variation = variation || [0.3,0.3]
    random = random || [1, 0.5, 0.3, 0.2]

    const sides = ['tl','tr','bl','br']
    const obj = {}
    if(Math.random() < random[0]) obj[sides.splice(Math.floor(sides.length*Math.random()),1).toString()] = [min[0] + variation[0]*Math.random(), min[1] + variation[1]*Math.random()]
    if(Math.random() < random[1]) obj[sides.splice(Math.floor(sides.length*Math.random()),1).toString()] = [min[0] + variation[0]*Math.random(), min[1] + variation[1]*Math.random()]
    if(Math.random() < random[2]) obj[sides.splice(Math.floor(sides.length*Math.random()),1).toString()] = [min[0] + variation[0]*Math.random(), min[1] + variation[1]*Math.random()]
    if(Math.random() < random[3]) obj[sides.splice(Math.floor(sides.length*Math.random()),1).toString()] = [min[0] + variation[0]*Math.random(), min[1] + variation[1]*Math.random()]
    return obj;
}


    function returnStudyPos(v, dom) {
        const pos = parseInt(v.splice(Math.floor(v.length*Math.random()),1)) 
        return { pos: dom[Math.floor(pos/2)].querySelector('.imgHold'), side: pos%2 }
    }






    function variantData(line, instances, wid, mWid) {
        const x1 = line.x1.baseVal.value
        const y1 = line.y1.baseVal.value
        const x2 = line.x2.baseVal.value
        const y2 = line.y2.baseVal.value

        instances = instances || 1
        if(instances > 1) instances += instances-1 
        instances = instances + 1
        


        wid = wid || 5
        mWid = mWid || 2
        let arm = 1/instances/2

        const points = []
        for(let i = 1; i < instances; i++) {
            const posPoint = calcVariantPoint(x1, y1, x2, y2, i/instances, (i % 2) ? wid : mWid)
            const negPoint = calcVariantPoint(x1, y1, x2, y2, i/instances, ((i % 2) ? wid : mWid) * -1)

            const posAngle = calcVariantPoint(x1, y1, x2, y2, (i/instances) - arm, (i % 2) ? wid : mWid)
            const negAngle = calcVariantPoint(x1, y1, x2, y2, (i/instances) + arm, ((i % 2) ? wid : mWid) * -1)            
            points.push([
                `S${posAngle.x}, ${posAngle.y} ${posPoint.x}, ${posPoint.y}`,
                `S${negAngle.x}, ${negAngle.y} ${negPoint.x}, ${negPoint.y}`
            ])
        }

        let d = `M${x1}, ${y1}`
        d += points.map(subArray => subArray[0]).join(',');
        d += `S${x2}, ${y2} ${x2}, ${y2}`
        d += points.map(subArray => subArray[1]).reverse().join(',');
        d += `S${x1}, ${y1} ${x1}, ${y1}`

        return d;        

    }

  function calcOnLine(x1, y1, x2, y2, p) {
    const pointX = x1 + p * (x2 - x1);
    const pointY = y1 + p * (y2 - y1);
    return { pointX, pointY };
  }
  
  function calcVariantPoint(x1, y1, x2, y2, p, d) {
    const { pointX, pointY } = calcOnLine(x1, y1, x2, y2, p);
  
    const dx = x2 - x1;
    const dy = y2 - y1;
    const angle = Math.atan2(dy, dx);
  
    const perpAngle = angle + Math.PI / 2;
  
    const x = pointX + d * Math.cos(perpAngle);
    const y = pointY + d * Math.sin(perpAngle);
  
    return { x, y };
  }
  
  















function hazardStripe(guide1, guide2, angle, wid, dist, startAt) {
    wid = wid || 1;
    let over = false
    let maxOut = 0
    let d = startAt || dist
    const lines = []
     while(!over) {
         const newPoint = calculatePointAlongLine(...guide1, ...guide2, d); // x1, y1, x2, y2, d   
         const lxy = calculateLineToBounds(newPoint.newX, newPoint.newY, angle, (guide1[0] < guide2[0]) ? guide1[0] : guide2[0], (guide1[1] < guide2[1]) ? guide1[1] : guide2[1], (guide1[0] > guide2[0]) ? guide1[0] : guide2[0], (guide1[1] > guide2[1]) ? guide1[1] : guide2[1],); // nx, ny, angle, bx1, by1, bx2, by2
         d += dist
 

 
         if(lxy[0] == undefined) {
             over = true
         }  else {
             const tline = sv('line', {
                 x1: (lxy[0].x < lxy[1].x) ? lxy[0].x : lxy[1].x,
                 y1: (lxy[0].y < lxy[1].y) ? lxy[0].y : lxy[1].y,
                 x2: (lxy[0].x > lxy[1].x) ? lxy[0].x : lxy[1].x,
                 y2: (lxy[0].y > lxy[1].y) ? lxy[0].y : lxy[1].y,
                 stroke: 'white',
                 'stroke-width': wid,
                 'stroke-linecap': 'round'
             })
             lines.push(tline)
         }
     }

     return lines
 
 
}

// Function to calculate the point `d` units along the guideline
function calculatePointAlongLine(x1, y1, x2, y2, d) {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const unitVectorX = (x2 - x1) / distance;
  const unitVectorY = (y2 - y1) / distance;
  const newX = x1 + unitVectorX * d;
  const newY = y1 + unitVectorY * d;
  return { newX, newY };
}

// Function to convert degrees to radians
function degreesToRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Function to calculate the endpoint given an angle and bounds
function calculateLineToBounds(x, y, angle, bx1, by1, bx2, by2) {
  const angleRad = degreesToRadians(angle);
  const cosAngle = Math.cos(angleRad);
  const sinAngle = Math.sin(angleRad);

  let endpoints = [];

  // Calculate intersections with vertical bounds (bx1 and bx2)
  let t;
  if (cosAngle !== 0) {
    t = (bx1 - x) / cosAngle;
    let yIntersection = y + t * sinAngle;
    if (yIntersection >= by1 && yIntersection <= by2) {
      endpoints.push({ x: bx1, y: yIntersection });
    }

    t = (bx2 - x) / cosAngle;
    yIntersection = y + t * sinAngle;
    if (yIntersection >= by1 && yIntersection <= by2) {
      endpoints.push({ x: bx2, y: yIntersection });
    }
  }

  // Calculate intersections with horizontal bounds (by1 and by2)
  if (sinAngle !== 0) {
    t = (by1 - y) / sinAngle;
    let xIntersection = x + t * cosAngle;
    if (xIntersection >= bx1 && xIntersection <= bx2) {
      endpoints.push({ x: xIntersection, y: by1 });
    }

    t = (by2 - y) / sinAngle;
    xIntersection = x + t * cosAngle;
    if (xIntersection >= bx1 && xIntersection <= bx2) {
      endpoints.push({ x: xIntersection, y: by2 });
    }
  }

  // Sort endpoints by distance from the initial point
  endpoints.sort((a, b) => {
    const distA = Math.sqrt((a.x - x) ** 2 + (a.y - y) ** 2);
    const distB = Math.sqrt((b.x - x) ** 2 + (b.y - y) ** 2);
    return distA - distB;
  });

  // Return the two closest endpoints
  return [endpoints[0], endpoints[1]];
}




















function generateUnderline(txt, dom, lines, decay,  pos, offset) {
    pos = pos || 'center'
    offset = offset || 0
    lines = lines || 1
    decay = 1 - decay || 0.2
    // styles needed
    const style = window.getComputedStyle(txt)
    const lineHeight = parseFloat(style.lineHeight)
    const fontSize = parseFloat(style.fontSize)
    const elementHeight = txt.offsetHeight
    const numberOfLines = Math.round(elementHeight / lineHeight)

    const h = txt.offsetHeight
    const w = txt.offsetWidth + 40

    const lineCount = h/lineHeight
    if(lines == 'max') lines = lineCount


    let bb = txt.getBoundingClientRect().y - dom.parentElement.getBoundingClientRect().y
    const svg = sv('svg',{
        viewBox: `0 0 ${w} ${h}`,
        style: `position: absolute; pointer-events:none; top:0; margin-top:${bb}px; margin-left:-20px; width:${w}px; height:${h}px;`        
    })


    let posNo = 0
    let decayDir = 0
    switch(pos) {
        case 'top':
            posNo += offset
        break;
        case 'bottom':
            posNo = lineCount - lines + offset
            decayDir = lines-1
        break;
        default:
            posNo = Math.ceil(lineCount/2) - Math.ceil(lines/2) + offset
            decayDir = Math.floor((lines-1)/2)
    }
    const initalY = fontSize + 5 + posNo * lineHeight
    const lineEle = []
    for(let i = 0; i < lines; i++) {
        const line = sv('line',{
            x1: -20 + (Math.random()*50),
            y1: initalY + i*lineHeight,
            x2: w - (w*decay * Math.abs(i-decayDir)),
            y2: initalY + i*lineHeight,
            stroke: 'white',
            'stroke-width':3,
            'stroke-linecap':'round',
        })

        const path = sv('path', {
            fill:styles.fill,
            d: variantData(line, 1, 1, 0.25)
        })
        maskLine(path, line, svg)
        lineEle.push(line)
    }
    aniStroke(svg, lineEle, 0.25, 0.5, 0.2)
    dom.prepend(svg)
}


















































export async function processSVG() {

    const svgHold = document.createElement('div')
    document.querySelector('#wrapper').appendChild(svgHold)
    svgHold.style.width = '100%'
    svgHold.style.height = 'auto'
    svgHold.id = 'svgTest'
      // Load the SVG into the container
    await loadSVG('assets/fonts/03.svg', svgHold);
    

    const defs = svgHold.querySelector('defs')
    svgHold.querySelectorAll('#mask > g').forEach((l, li) => {
        const className = l.classList.value
        const ll = svgHold.querySelector(`#line .${className}`)
        l.querySelectorAll(':scope > *:not(g)').forEach((l1, li1) => {
            let corr = document.querySelector(`#line .${className}`).children[getChildIndex(l1)]
            const id = `m${className}-${li1}`
            corr.setAttribute('mask', `url(#${id})`)
            const mask = sv('mask')
            mask.id = id
            mask.appendChild(l1.cloneNode(true))
            defs.appendChild(mask)
        })

        

        l.querySelectorAll(':scope > g').forEach((l1, li1) => {
            l1.querySelectorAll(':scope > *').forEach((l2, li2) => {
                console.log('l2p', getChildIndex(l2.parentNode))
                console.log('l2', getChildIndex(l2))
            })
        })
    })
}


function getChildIndex(child) {
    return [...child.parentNode.children].findIndex(node => node === child);
  }
  
