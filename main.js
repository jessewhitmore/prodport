import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { gsap } from "gsap"



import { init } from './js/pagegen.js'
import { studyHandler, caseStudyGen } from './js/caseStudy.js'
import { returnDrawn, svgCleanUp } from './js/svgDraw.js'
import { setupLoader, loadResolver } from './js/loadhandler.js'


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





// Ensure initial content is loaded first
window.onload = () => {
  console.warn('Initial content loaded');
  
};





setupLoader()
async function setup() {
// wait for dom generation
  await init(app)
  app.style.transition = 'all 0.5s'
  app.style.opacity = 1




  const updateBackgroundPosition = () => {
    const scrollTop = window.pageYOffset;

    document.querySelectorAll('.edgeGhost').forEach(bgs => {
      bgs.style.backgroundPosition = `0px ${-scrollTop}px`;
    });
  };
  window.addEventListener('scroll', updateBackgroundPosition);
}

setup()










