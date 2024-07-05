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
            img.setAttribute('loadhandled',true)
            img.style.opacity = 0
            img.style.visibility = 'hidden'
            loadResolver.toLoad.push(img)
        }
        if(images.length-1 == i) {
            loadNext()
        }
    })

}


function loadNext() {
    const tl = loadResolver.toLoad
    if(tl.length == 0) return;
    loadResolver.running
    const toload = tl.shift()
    toload.onload = loadedIMG(toload)
    toload.src = toload.dataset.src
}

function loadedIMG(img) {
    if(img.style.visibility == 'hidden') img.style.visibility = 'visible'
    grungeMask(img)
    img.style.opacity = 1
    loadNext()
}

