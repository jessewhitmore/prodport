import { setupblockAni, grungeMask } from './pagegen.js'
import { svgCleanUp, returnDrawn } from './svgDraw.js';

export const loadResolver = {
    toLoad: [],
}


let delayLoadcheck = null
export function setupLoader() {    
    document.addEventListener('DOMContentLoaded', () => {
        // Initial check
        checkImagesLoaded();
        // Monitor for new content
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                let invalid = false
                for(const added of mutation.addedNodes) {
                    if(added.tagName == 'svg') invalid = true
                }
                if (mutation.type === 'childList' && !invalid) {
                    clearTimeout(delayLoadcheck)
                    delayLoadcheck = setTimeout(()=>{
                        checkImagesLoaded()
                        setupblockAni()


                    }, 25)
                    
                }
            }
        });
      
        observer.observe(document.body, { childList: true, subtree: true });
      });    

}

// Function to check if all images are loaded
function checkImagesLoaded() {
    const images = document.querySelectorAll('img:not([loadhandled])');
    let loadedCount = 0;

    images.forEach((img, i) => {
        if(img.src.length > 0) {
            img.setAttribute('loadhandled',true)
        } else {
            img.style.display = 'none'
            if(!img.hasAttribute('loadhandled')) loadResolver.toLoad.push(img)
            img.setAttribute('loadhandled',true)
            
        }
    })

    if(!loadResolver.running) {
        const pushedArray = []
        loadResolver.toLoad.forEach(i => {
            pushedArray.push(i.dataset.src.split('/').reverse()[0])
        })
        loadNext()
    }

}


function loadNext() {
    const tl = loadResolver.toLoad
    loadResolver.running = (tl.length == 0) ? false : true;
    if(loadResolver.running == false) return;
    const img = tl.shift()
    const tempimg = new Image()
    tempimg.onload = () => {
        img.src = img.dataset.src
        if(img.hasAttribute('nogrunge')) {
            img.style.display = 'block'
            img.style.opacity = 1
            grungeMask(img)
        }
        loadNext()
    }
    tempimg.src = img.dataset.src
}

