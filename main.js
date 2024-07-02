import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { gsap } from "gsap"



import { init } from './js/pagegen.js'
import { studyHandler, caseStudyGen } from './js/caseStudy.js'
import { returnDrawn, svgCleanUp, processSVG } from './js/svgDraw.js'



export const contactInfo = {
  tel: "0421907903",
  e: 'j.whitmore.mail@gmail.com',
  li: 'https://www.linkedin.com/in/jesse-whitmore-998a18133/',
  cv: 'assets/cv.pdf'
}


export const styles = {
  fill: '#d3eefb'//'#95abb5' // '#d3eefb'
}


export const domEle = []

const app = document.querySelector('#app')


// wait for dom generation
await init(app)

returnDrawn()



app.style.transition = 'all 0.5s'
app.style.opacity = 1

const studies = document.querySelectorAll('.study')

const study1 = await caseStudyGen(app, studies[0])
studies[0].addEventListener('click', ()=>{
  study1.populate(studies[0].querySelector('.imgHold'))
})

const study2 = await caseStudyGen(app, studies[1])
studies[1].addEventListener('click', ()=>{
  study2.populate(studies[1].querySelector('.imgHold'))
})


const study3 = await caseStudyGen(app, studies[2])
studies[2].addEventListener('click', ()=>{
  study3.populate(studies[2].querySelector('.imgHold'))
})








window.addEventListener("resize", debounce);

let resizeWatch = null
let resizing = false
function debounce(event) {
  clearTimeout(resizeWatch)
  if(!resizing) resizeClean()
  resizeWatch = setTimeout(resize, 200)
}

function resize() {
  resizing = false
  returnDrawn()
}

function resizeClean() {
  resizing = true
  svgCleanUp()
}




const updateBackgroundPosition = () => {
  const scrollTop = window.pageYOffset;

  document.querySelectorAll('.edgeGhost').forEach(bgs => {
    bgs.style.backgroundPosition = `0px ${-scrollTop}px`;
  });
};
window.addEventListener('scroll', updateBackgroundPosition);


// processSVG()