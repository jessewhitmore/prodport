import { gsap } from "gsap";

import { contactInfo, domEle } from "../main";
import { caseStudyGen } from './caseStudy.js'
import { loadResolver } from "./loadhandler.js";
import { returnDrawn, svgCleanUp } from "./svgDraw.js";

Object.defineProperty(String.prototype, 'capitalise', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});


function ve(to, name, style, type) {
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

  // ===================================================================== DEFAULT PAGE
  function genSec(targetName) {
    const dom = document.createElement('div')
    dom.id = targetName
    dom.innerHTML = `
      <div class = "skirt"></div>
      <${(targetName == 'introduction') ? 'header' : 'section'} class = "body"></${(targetName == 'introduction') ? 'header' : 'section'}>
      <div class = "skirt"></ div>
    `
    const target = dom.querySelector('.body')


    let obj = {
      targetName,
      dom,
      target,
    }  

    domEle.push(obj)
    return obj

  }


  // ===================================================================== NAV LINK RELATED
  const navSec = document.createElement('div')
  navSec.id = 'navBar'
  navSec.innerHTML = `
  <div id = "navFixed">

  <svg id ="navHeaderSVG" xmlns="http://www.w3.org/2000/svg" width="319.93" height="204.35" version="1.1" viewBox="0 0 319.93 204.35">
 <defs>
    <style>
      .cls-1 {
        fill: #d5eefc;
      }

      .cls-1, .cls-2, .cls-3 {
        stroke-width: 0px;
      }

      .cls-2 {
        fill: #ebebec;
      }

      .cls-3 {
        fill: #95abb5;
      }

      .navHideSVGele {
        visibility: hidden;
      }
    </style>
  </defs>
  <g id="backingLines">
    <polygon class="cls-1" points="20.11 195.76 19.86 171.35 19.72 146.94 19.61 98.13 19.72 49.32 19.86 24.91 20.11 .51 20.35 24.91 20.49 49.32 20.61 98.13 20.49 146.94 20.35 171.35 20.11 195.76"/>
    <path class="cls-1" d="M15.95,26.02c.65,49.79.66,105.66,0,155.46-.66-49.79-.65-105.66,0-155.46h0Z"/>
    <path class="cls-1" d="M313.35,53.13c-99.6.61-211.34.62-310.94,0,99.6-.62,211.34-.61,310.94,0h0Z"/>
    <path class="cls-1" d="M0,47.31c102.48-.61,217.45-.62,319.93,0-102.48.62-217.45.61-319.93,0h0Z"/>
    <path class="cls-1" d="M298.94,81.73c-91.9.61-194.99.62-286.89,0,91.9-.62,194.99-.61,286.89,0h0Z"/>
    <path class="cls-1" d="M12.04,83.88c91.9-.61,194.99-.62,286.89,0-91.9.62-194.99.61-286.89,0h0Z"/>
    <path class="cls-1" d="M309.41,3.45c-96.85.61-205.5.62-302.35,0,96.85-.62,205.5-.61,302.35,0h0Z"/>
    <path class="cls-1" d="M310.29,147.34c-97.48.61-206.83.62-304.32,0,97.48-.62,206.83-.61,304.32,0h0Z"/>
    <path class="cls-1" d="M3.61,145.05c100.3-.61,212.81-.62,313.11,0-100.3.62-212.81.61-313.11,0h0Z"/>
    <path class="cls-1" d="M295.72,158.56c-91.97.61-195.15.62-287.12,0,91.97-.62,195.15-.61,287.12,0h0Z"/>
    <path class="cls-1" d="M8.6,160.5c91.97-.61,195.15-.62,287.12,0-91.97.62-195.15.61-287.12,0h0Z"/>
    <path class="cls-1" d="M306.2,127.84c-96.93.61-205.66.62-302.59,0,96.93-.62,205.66-.61,302.59,0h0Z"/>
  </g>
  <g id="titles">
    <g class = "navTitleText">
      <rect class="cls-3" x="21.37" y="127.87" width="5.98" height="30.64"/>
      <rect class="cls-3" x="240.18" y="127.87" width="5.98" height="30.64"/>
      <polygon class="cls-3" points="48.38 145.57 39.16 127.87 39.16 127.87 39.15 127.87 33.17 127.87 33.17 158.51 39.16 158.51 39.16 140.81 48.38 158.51 48.38 158.51 48.38 158.51 54.36 158.51 54.36 127.87 48.38 127.87 48.38 145.57"/>
      <polygon class="cls-3" points="294.05 127.87 294.05 145.57 284.83 127.87 284.83 127.87 284.83 127.87 278.85 127.87 278.85 158.51 284.83 158.51 284.83 140.81 294.05 158.51 294.05 158.51 294.05 158.51 300.03 158.51 300.03 127.87 294.05 127.87"/>
      <polygon class="cls-3" points="65.75 127.87 59.26 127.87 59.26 133.84 65.75 133.84 65.75 158.51 71.74 158.51 71.74 133.84 78.23 133.84 78.23 127.87 71.74 127.87 65.75 127.87"/>
      <path class="cls-3" d="M103.2,142.46c.83-1.43,1.32-3.09,1.32-4.87s-.48-3.44-1.32-4.87c-1.06-1.83-2.7-3.28-4.66-4.1-1.16-.48-2.42-.75-3.75-.75h-11.65v30.66h5.98v-11.21h4.19l3.64,3.64s.05.05.08.08c.55.56.92,1.3,1.02,2.12v.46h0v4.91h5.98v-.5h0v-4.41h0s0,0,0-.01c0-2.76-1.16-5.25-3.02-7.01l.02-.02-.88-.88c1.25-.83,2.3-1.93,3.06-3.24ZM94.78,141.34h-5.67v-7.5h5.67c2.07,0,3.75,1.68,3.75,3.75s-1.68,3.75-3.75,3.75Z"/>
      <path class="cls-3" d="M120.59,127.87c-5.87,0-10.63,4.75-10.63,10.61v9.42c0,5.86,4.76,10.61,10.63,10.61s10.63-4.75,10.63-10.61v-9.42c0-5.86-4.76-10.61-10.63-10.61ZM120.59,152.55c-2.51,0-4.55-1.98-4.65-4.46v-9.6c0-2.56,2.08-4.64,4.65-4.64s4.65,2.08,4.65,4.64c0,.39,0,9.42,0,9.42,0,2.57-2.08,4.65-4.65,4.65Z"/>
      <path class="cls-3" d="M262.78,127.87c-5.87,0-10.63,4.75-10.63,10.61v9.42c0,5.86,4.76,10.61,10.63,10.61s10.63-4.75,10.63-10.61v-9.42c0-5.86-4.76-10.61-10.63-10.61ZM262.78,152.55c-2.51,0-4.55-1.98-4.65-4.46v-9.6c0-2.56,2.08-4.64,4.65-4.64s4.65,2.08,4.65,4.64c0,.39,0,9.42,0,9.42,0,2.57-2.08,4.65-4.65,4.65Z"/>
      <path class="cls-3" d="M151.51,128.95c-1.41-.69-2.98-1.08-4.65-1.08h-9.65v30.64h9.65c1.67,0,3.25-.4,4.65-1.08,3.53-1.72,5.97-5.34,5.97-9.53v-9.42c0-4.19-2.44-7.81-5.97-9.53ZM151.51,147.9c0,2.57-2.08,4.65-4.65,4.65h0s-3.67,0-3.67,0v-18.69h3.67c2.57,0,4.65,2.07,4.65,4.64v9.42Z"/>
      <path class="cls-3" d="M178.76,147.9c0,2.57-2.08,4.65-4.65,4.65s-4.65-2.08-4.65-4.65v-20.03h-5.98s0,19.75,0,20.03c0,5.86,4.76,10.61,10.63,10.61s10.63-4.75,10.63-10.61c0-.28,0-20.03,0-20.03h-5.98v20.03Z"/>
      <path class="cls-3" d="M200.96,133.83c2.57,0,4.65,2.08,4.65,4.65h5.97c0-4.19-2.44-7.81-5.97-9.53-1.41-.69-2.98-1.08-4.65-1.08s-3.25.4-4.65,1.08c-3.53,1.72-5.97,5.34-5.97,9.53v9.42c0,4.19,2.44,7.81,5.97,9.53,1.41.69,2.98,1.08,4.65,1.08s3.25-.4,4.65-1.08c3.53-1.72,5.97-5.34,5.97-9.53h-5.97c0,2.57-2.08,4.65-4.65,4.65s-4.65-2.08-4.65-4.65v-9.42c0-2.57,2.08-4.65,4.65-4.65Z"/>
      <polygon class="cls-3" points="222.27 127.87 215.77 127.87 215.77 133.84 222.27 133.84 222.27 158.51 228.25 158.51 228.25 133.84 234.74 133.84 234.74 127.87 228.25 127.87 222.27 127.87"/>
    </g>
    <g class = "navTitleText navHideSVGele">
      <rect class="cls-3" x="232.01" y="127.87" width="5.98" height="30.64"/>
      <polygon class="cls-3" points="163.48 127.89 157 127.89 157 133.86 163.48 133.86 163.48 158.51 169.45 158.51 169.45 133.86 175.93 133.86 175.93 127.89 169.45 127.89 163.48 127.89"/>
      <polygon class="cls-3" points="98.27 127.89 97.28 127.89 97.28 158.51 98.27 158.51 103.25 158.51 112.89 158.51 112.89 152.54 103.25 152.54 103.25 145.05 109.42 145.05 109.42 139.08 103.25 139.08 103.25 133.86 112.89 133.86 112.89 127.89 103.25 127.89 98.27 127.89"/>
      <path class="cls-3" d="M31.97,133.85c2.57,0,4.65,2.08,4.65,4.65h5.96c0-4.19-2.43-7.8-5.96-9.52-1.4-.69-2.98-1.08-4.65-1.08s-3.24.4-4.65,1.08c-3.53,1.72-5.96,5.33-5.96,9.52v9.41c0,4.19,2.43,7.8,5.96,9.52,1.4.69,2.98,1.08,4.65,1.08s3.24-.4,4.65-1.08c3.53-1.72,5.96-5.33,5.96-9.52h-5.96c0,2.57-2.08,4.65-4.65,4.65s-4.65-2.08-4.65-4.65v-9.41c0-2.57,2.08-4.65,4.65-4.65Z"/>
      <path class="cls-3" d="M195.52,147.91c0,2.57-2.08,4.65-4.65,4.65s-4.65-2.08-4.65-4.65v-20.01h-5.97s0,19.73,0,20.01c0,5.86,4.75,10.61,10.61,10.61s10.61-4.75,10.61-10.61c0-.28,0-20.01,0-20.01h-5.97v20.01Z"/>
      <path class="cls-3" d="M60.25,127.89h-6.07l-7.12,13.69c-.93,1.78-1.41,3.77-1.41,5.78v11.16h5.97v-11.19h11.14v11.19h5.97v-11.28c0-2.01-.48-3.99-1.41-5.78l-7.06-13.56ZM53.9,141.36l3.31-6.37,3.31,6.37h-6.63Z"/>
      <path class="cls-3" d="M220.69,128.98c-1.4-.69-2.98-1.08-4.65-1.08h-9.63v30.62h9.63c1.67,0,3.24-.4,4.65-1.08,3.53-1.72,5.96-5.33,5.96-9.52v-9.41c0-4.19-2.43-7.8-5.96-9.52ZM220.69,147.91c0,2.57-2.08,4.65-4.65,4.65h0s-3.66,0-3.66,0v-18.68h3.66c2.57,0,4.65,2.07,4.65,4.64v9.41Z"/>
      <path class="cls-3" d="M90.99,143.4c-.39-.59-.84-1.14-1.36-1.61-3.96-3.6-9.3-1.62-9.33-5.32-.01-1.44,1.17-2.61,2.61-2.61s2.61,1.17,2.61,2.61v.61l5.97-.54v-.07c0-.91-.14-1.79-.41-2.61-.84-2.64-2.92-4.72-5.56-5.56-.82-.26-1.7-.41-2.61-.41s-1.79.14-2.61.41c-2.64.84-4.72,2.92-5.56,5.56-.26.82-.41,1.7-.41,2.61s.14,1.79.41,2.61c.32,1,.82,1.91,1.45,2.72.48.61,1.2,1.08,2.71,1.72.91.38,2.56.82,4.34,1.42,1.8.6,3.42,1.86,3.42,3.85s-1.68,3.75-3.75,3.75-3.75-1.68-3.75-3.75h0v-.04l-5.95-.54v.58c0,1.33.27,2.61.76,3.76.98,2.34,2.85,4.2,5.19,5.19,1.16.49,2.43.76,3.76.76s2.6-.27,3.75-.75c2.34-.98,4.22-2.85,5.2-5.19.49-1.16.76-2.43.76-3.76s-.27-2.59-.75-3.74c-.24-.58-.54-1.13-.89-1.65Z"/>
      <polygon class="cls-3" points="244.79 127.89 243.79 127.89 243.79 158.51 244.79 158.51 249.76 158.51 259.4 158.51 259.4 152.54 249.76 152.54 249.76 145.05 255.93 145.05 255.93 139.08 249.76 139.08 249.76 133.86 259.4 133.86 259.4 127.89 249.76 127.89 244.79 127.89"/>
      <path class="cls-3" d="M280.86,145.05c-.24-.58-.54-1.13-.89-1.65-.39-.59-.84-1.14-1.36-1.61-3.96-3.6-9.3-1.62-9.33-5.32-.01-1.44,1.17-2.61,2.61-2.61s2.61,1.17,2.61,2.61v.61l5.97-.54v-.07c0-.91-.14-1.79-.41-2.61-.84-2.64-2.92-4.72-5.56-5.56-.82-.26-1.7-.41-2.61-.41s-1.79.14-2.61.41c-2.64.84-4.72,2.92-5.56,5.56-.26.82-.41,1.7-.41,2.61s.14,1.79.41,2.61c.32,1,.82,1.91,1.45,2.72.48.61,1.2,1.08,2.72,1.72.91.38,2.56.82,4.34,1.42,1.8.6,3.42,1.86,3.42,3.85s-1.68,3.75-3.75,3.75-3.75-1.68-3.75-3.75h0v-.04l-5.95-.54v.58c0,1.33.27,2.61.76,3.76.98,2.34,2.85,4.2,5.19,5.19,1.16.49,2.43.76,3.76.76s2.6-.27,3.75-.75c2.34-.98,4.22-2.85,5.2-5.19.49-1.16.76-2.43.76-3.76s-.27-2.59-.75-3.74Z"/>
      <path class="cls-3" d="M152.36,143.4c-.39-.59-.84-1.14-1.36-1.61-3.96-3.6-9.3-1.62-9.33-5.32-.01-1.44,1.17-2.61,2.61-2.61s2.61,1.17,2.61,2.61v.61l5.97-.54v-.07c0-.91-.14-1.79-.41-2.61-.84-2.64-2.92-4.72-5.56-5.56-.82-.26-1.7-.41-2.61-.41s-1.79.14-2.61.41c-2.64.84-4.72,2.92-5.56,5.56-.26.82-.41,1.7-.41,2.61s.14,1.79.41,2.61c.32,1,.82,1.91,1.45,2.72.48.61,1.2,1.08,2.71,1.72.91.38,2.56.82,4.34,1.42,1.8.6,3.42,1.86,3.42,3.85s-1.68,3.75-3.75,3.75-3.75-1.68-3.75-3.75h0v-.04l-5.95-.54v.58c0,1.33.27,2.61.76,3.76.98,2.34,2.85,4.2,5.19,5.19,1.16.49,2.43.76,3.76.76s2.6-.27,3.75-.75c2.34-.98,4.22-2.85,5.2-5.19.49-1.16.76-2.43.76-3.76s-.27-2.59-.75-3.74c-.24-.58-.54-1.13-.89-1.65Z"/>
    </g>
    <g class = "navTitleText navHideSVGele">
      <path class="cls-3" d="M31.99,133.83c2.57,0,4.65,2.08,4.65,4.65h5.97c0-4.19-2.44-7.81-5.97-9.53-1.41-.69-2.98-1.08-4.65-1.08s-3.25.4-4.65,1.08c-3.53,1.72-5.97,5.34-5.97,9.53v9.42c0,4.19,2.44,7.81,5.97,9.53,1.41.69,2.98,1.08,4.65,1.08s3.25-.4,4.65-1.08c3.53-1.72,5.97-5.34,5.97-9.53h-5.97c0,2.57-2.08,4.65-4.65,4.65s-4.65-2.08-4.65-4.65v-9.42c0-2.57,2.08-4.65,4.65-4.65Z"/>
      <path class="cls-3" d="M58.54,127.87c-5.87,0-10.63,4.75-10.63,10.61v9.42c0,5.86,4.76,10.61,10.63,10.61s10.63-4.75,10.63-10.61v-9.42c0-5.86-4.76-10.61-10.63-10.61ZM58.54,152.55c-2.51,0-4.55-1.98-4.65-4.46v-9.6c0-2.56,2.08-4.64,4.65-4.64s4.65,2.08,4.65,4.64c0,.39,0,9.42,0,9.42,0,2.57-2.08,4.65-4.65,4.65Z"/>
      <polygon class="cls-3" points="89.81 127.87 89.81 145.57 80.59 127.87 80.59 127.87 80.59 127.87 74.61 127.87 74.61 158.51 80.59 158.51 80.59 140.81 89.81 158.51 89.81 158.51 89.81 158.51 95.79 158.51 95.79 127.87 89.81 127.87"/>
      <polygon class="cls-3" points="159.47 127.87 152.98 127.87 152.98 133.84 159.47 133.84 159.47 158.51 165.46 158.51 165.46 133.84 171.95 133.84 171.95 127.87 165.46 127.87 159.47 127.87"/>
      <path class="cls-3" d="M116.02,127.87h-6.07l-7.12,13.69c-.93,1.78-1.41,3.77-1.41,5.78v11.16h5.97v-11.19h11.14v11.19h5.97v-11.28c0-2.01-.48-3.99-1.41-5.78l-7.06-13.56ZM109.67,141.33l3.31-6.37,3.31,6.37h-6.63Z"/>
      <path class="cls-3" d="M139.78,133.83c2.57,0,4.65,2.08,4.65,4.65h5.97c0-4.19-2.44-7.81-5.97-9.53-1.41-.69-2.98-1.08-4.65-1.08s-3.25.4-4.65,1.08c-3.53,1.72-5.97,5.34-5.97,9.53v9.42c0,4.19,2.44,7.81,5.97,9.53,1.41.69,2.98,1.08,4.65,1.08s3.25-.4,4.65-1.08c3.53-1.72,5.97-5.34,5.97-9.53h-5.97c0,2.57-2.08,4.65-4.65,4.65s-4.65-2.08-4.65-4.65v-9.42c0-2.57,2.08-4.65,4.65-4.65Z"/>
    </g>
  </g>
  <g id="t01" class = "navLetterForm">
    <path class="cls-2" d="M48.45,3.4c-14.98,0-27.13,12.15-27.13,27.13v24.07c0,14.98,12.15,27.13,27.13,27.13s27.13-12.15,27.13-27.13v-24.07c0-14.98-12.15-27.13-27.13-27.13ZM48.45,18.67c6.55,0,11.86,5.31,11.86,11.86,0,.08,0,.3,0,.63l-23.72,7.48v-8.11c0-6.55,5.31-11.86,11.86-11.86ZM48.45,66.48c-6.4,0-11.61-5.07-11.86-11.41v-.42l23.73-7.48c0,4.14,0,7.43,0,7.43,0,6.56-5.32,11.88-11.88,11.88Z"/>
    <polygon class="cls-2" points="98.75 3.41 98.74 3.41 98.74 3.42 89.38 21.4 98.74 26.27 98.74 81.73 114.01 81.73 114.01 7.15 114.01 3.41 98.75 3.41"/>
    <rect class="cls-2" x="126.01" y="66.48" width="15.27" height="15.27"/>
    <rect class="cls-2" x="175.1" y="3.4" width="15.27" height="78.33"/>
    <polygon class="cls-2" points="244.06 3.41 244.06 48.65 220.51 3.42 220.51 3.41 220.51 3.41 205.24 3.41 205.24 81.73 220.51 81.73 220.51 36.49 244.06 81.72 244.06 81.73 244.06 81.73 259.33 81.73 259.33 3.41 244.06 3.41"/>
  </g>
  <g id="t02" class = "navLetterForm navHideSVGele">
    <path class="cls-2" d="M48.43,3.44c-14.97,0-27.11,12.14-27.11,27.11v24.05c0,14.97,12.14,27.11,27.11,27.11s27.11-12.14,27.11-27.11v-24.05c0-14.97-12.14-27.11-27.11-27.11ZM36.58,30.55c0-6.54,5.31-11.85,11.85-11.85s11.85,5.31,11.85,11.85c0,.08,0,.3,0,.63l-23.7,7.47v-8.1ZM48.43,66.47c-6.4,0-11.6-5.07-11.85-11.4v-.42l23.72-7.48c0,4.14,0,7.43,0,7.43,0,6.56-5.32,11.87-11.87,11.87Z"/>
    <path class="cls-2" d="M125.87,35.44s1.03-2.25,1.41-3.43c.67-2.11,1.04-4.35,1.04-6.68s-.37-4.56-1.04-6.66c-1.07-3.35-2.91-6.35-5.33-8.78-2.45-2.47-5.49-4.36-8.89-5.45-2.11-.67-4.35-1.04-6.68-1.04s-4.56.37-6.66,1.04c-6.75,2.15-12.08,7.48-14.23,14.23-.67,2.1-1.04,4.34-1.04,6.66v5.29l15.27-4.15v-1.27c.06-3.59,2.96-6.48,6.55-6.55h.24c3.63.06,6.56,3.02,6.56,6.66,0,1.1-.27,2.14-.74,3.06l-27.91,53.32h46.69v-15.27h-21.52l16.29-31Z"/>
    <rect class="cls-2" x="143.1" y="66.44" width="15.27" height="15.27"/>
    <path class="cls-2" d="M225.91,55.58c-.51,6.09-5.6,10.89-11.83,10.89-6.56,0-11.88-5.32-11.88-11.88v-24.06c0-6.56,5.32-11.88,11.88-11.88,6.23,0,11.32,4.79,11.83,10.89l15.02-2.7c-1.25-9.11-7.01-16.77-14.97-20.67-3.59-1.76-7.61-2.77-11.88-2.77s-8.29,1.01-11.88,2.77c-9.02,4.41-15.24,13.64-15.24,24.36v24.06c0,10.71,6.23,19.95,15.24,24.36,3.59,1.76,7.61,2.77,11.88,2.77s8.29-1.01,11.88-2.77c7.96-3.89,13.73-11.55,14.97-20.67l-15.02-2.7Z"/>
    <path class="cls-2" d="M280.29,79.79c5.99-2.51,10.78-7.3,13.3-13.28,1.25-2.96,1.94-6.21,1.94-9.63s-.68-6.62-1.91-9.56c-.62-1.49-1.38-2.9-2.27-4.22-1-1.5-2.14-2.91-3.47-4.12-10.13-9.2-23.8-4.15-23.87-13.6-.03-3.68,2.99-6.67,6.67-6.67s6.67,2.99,6.67,6.67h0s0,0,0,0v1.57l15.27-1.38v-.18h0c0-2.33-.37-4.57-1.04-6.67-2.15-6.75-7.48-12.08-14.23-14.23-2.1-.67-4.34-1.04-6.67-1.04s-4.57.37-6.67,1.04c-6.75,2.15-12.08,7.48-14.23,14.23-.67,2.1-1.04,4.34-1.04,6.67s.37,4.57,1.04,6.67c.81,2.55,1.85,4.79,3.72,6.95,1.3,1.5,3.07,2.77,6.94,4.4,2.31.97,6.54,2.11,11.1,3.64,4.6,1.55,8.75,4.76,8.75,9.85s-4.3,9.6-9.6,9.6-9.59-4.3-9.59-9.6h0v-.11l-15.23-1.38v1.49c0,3.41.69,6.67,1.94,9.63,2.51,5.97,7.3,10.75,13.27,13.27,2.96,1.25,6.21,1.94,9.63,1.94s6.64-.69,9.6-1.93Z"/>
  </g>  
  <g id="t03" class = "navLetterForm navHideSVGele">
    <path class="cls-2" d="M48.45,3.39c-14.98,0-27.13,12.15-27.13,27.13v24.07c0,14.98,12.15,27.13,27.13,27.13s27.13-12.15,27.13-27.13v-24.07c0-14.98-12.15-27.13-27.13-27.13ZM36.59,30.52c0-6.55,5.31-11.86,11.86-11.86s11.86,5.31,11.86,11.86c0,.08,0,.3,0,.63l-23.72,7.48v-8.11ZM48.45,66.46c-6.4,0-11.61-5.07-11.86-11.41v-.42l23.73-7.48c0,4.14,0,7.43,0,7.43,0,6.56-5.32,11.88-11.88,11.88Z"/>
    <path class="cls-2" d="M89.74,3.45v15.26h20.72l-14.94,28.7h16.54c.21.03.42.05.63.1,4.38.89,7.67,4.75,7.67,9.39,0,5.29-4.29,9.58-9.58,9.58h-6.63c-2.95,0-5.58-1.33-7.34-3.43l-13.27,7.66c2.7,4.02,6.51,7.22,11.03,9.11,2.95,1.23,6.18,1.92,9.58,1.92h6.63c3.4,0,6.63-.69,9.58-1.92,5.02-2.1,9.19-5.81,11.9-10.48,2.13-3.66,3.36-7.9,3.36-12.44,0-3.4-.69-6.63-1.94-9.58,0,0,0,0,0-.01-.41-.98-.89-1.94-1.42-2.85-.81-1.39-1.75-2.67-2.8-3.88-2.48-2.84-5.57-5.13-9.1-6.61-.17-.07-.35-.12-.52-.19l7.84-15.07,7.95-15.26h0s-17.21,0-17.21,0h-28.68Z"/>
    <rect class="cls-2" x="147.52" y="66.39" width="15.32" height="15.32"/>
    <path class="cls-2" d="M225.49,55.62c-.51,6.1-5.61,10.89-11.83,10.89-6.56,0-11.88-5.32-11.88-11.88v-24.07c0-6.56,5.32-11.88,11.88-11.88,6.23,0,11.33,4.79,11.83,10.89l15.02-2.7c-1.25-9.11-7.01-16.78-14.97-20.67-3.59-1.76-7.62-2.77-11.88-2.77s-8.29,1.01-11.88,2.77c-9.02,4.41-15.25,13.65-15.25,24.36v24.07c0,10.72,6.23,19.95,15.25,24.36,3.59,1.76,7.62,2.77,11.88,2.77s8.29-1.01,11.88-2.77c7.96-3.89,13.73-11.55,14.97-20.67l-15.02-2.7Z"/>
    <path class="cls-2" d="M273.7,81.72c14.97,0,27.11-12.14,27.11-27.11v-24.05c0-14.97-12.14-27.11-27.11-27.11s-27.11,12.14-27.11,27.11v24.05c0,14.97,12.14,27.11,27.11,27.11ZM261.85,30.56c0-6.54,5.31-11.85,11.85-11.85s11.85,5.31,11.85,11.85c0,.99.02,24.05.02,24.05,0,6.56-5.32,11.87-11.87,11.87s-11.6-5.07-11.85-11.4v-24.52Z"/>
  </g>

</svg>



    <nav id = "sectionNav">
    </nav>

    <nav id = "linkNav">
    </nav>
  </div>
  `
  function linkClick(e) {
    console.log(e)
  }


  // Function to insert Markdown content
  async function insertMDtext(selector, mdFilePath) {
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
        selector.querySelectorAll('img').forEach(img => {
          loadResolver.toLoad.push(img)
      })
    

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









  // ===================================================================== INIT






export async function init(app) {
  // set-up 

  const headerSec = await genSec('introduction')
  const csSec = await genSec('case_studies')
//  const testSec = genSec('testimonial')
  const contactSec = await genSec('contact')


  // nav elements
  const navCurrent = navSec.querySelector('#navCurrent')
  const sectionNav = navSec.querySelector('#sectionNav')
  const linkNav = navSec.querySelector('#linkNav')

  const wrapper = document.createElement('div')
  wrapper.id = 'wrapper'
  // loop through created elements
  domEle.forEach(obj => {    
    // set-up nav
    let split = obj.targetName.split('_')
    let textVal = ''
    split.forEach(val => {
      textVal += val.capitalise() + ' '
    })

    // set-up links
    const sectionNavEle = document.createElement('a')
    sectionNavEle.href = 'javascript:void(0)'
    sectionNavEle.innerHTML = `<div>${textVal.trim()}</div>`
    console.log(obj)
    sectionNavEle.addEventListener('click', ()=>{
      obj.dom.scrollIntoView({ behavior: "smooth", block: "start" })
    })


    sectionNav.appendChild(sectionNavEle)

    // append to wrapper
    wrapper.appendChild(obj.dom)

  })

  // img transition function
  imgTrans()

  app.appendChild(navSec)
  app.appendChild(wrapper)
  // ----------------------------------------------------------------------- DOM ATTACHED
  
  const introIcons = []
  for(const props in contactInfo) {
    const p = contactInfo[props]
    let link = document.createElement('a')
    link.id = props
    link.innerHTML = `<span>${(props == 'cv') ? 'cv' : p}</span>`
    const im = new Image()
    im.src = `assets/${props}logo.svg`

    switch(props) {
      case 'li':
        link.innerHTML = `<span>linkedin</span>`       
      break;      
      case 'cv':
        link.innerHTML = `<span>cv</span>`
      break;
      default:
      link.innerHTML = `<span>${p}</span>`

    }

    switch(props) {
      case 'tel':
        link.href = `tel:${p}`
      break;
      case 'e':
        link.href = `emailto:${p}`
      break;
      default:
        link.href = p
    }


    const introLinks = link.cloneNode(true)
    introLinks.prepend(im.cloneNode())
    introIcons.push(introLinks)

    link.prepend(im)


    link.addEventListener('click', (e)=>{linkClick(e)})
    linkNav.appendChild(link)


  }
  



  // obj loop
  const promises = domEle.map(obj => {
    return insertMDtext(obj.target, `md/${obj.targetName}.md`);
  });

  await Promise.all(promises);

  introIcons.forEach(icon => {
    contactSec.dom.querySelector('.infoArea').appendChild(icon.cloneNode(true))
    icon.querySelector('span').remove()
    headerSec.dom.querySelector('.icons').appendChild(icon)
  })

  const navTitleForm = document.querySelectorAll('.navTitleText')
  navTitleForm.forEach((ele, i) => gsap.set(ele, {y:`${i*100}%`}))
  const navshow = (entries, navObserver) => {
    document.querySelector('#linkNav').style.opacity = 1
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelector('#linkNav').style.opacity = 0
      }
    });
  };

  const navObserver = new IntersectionObserver(navshow, {
    root: null, // Use the viewport as the container
    rootMargin: '0px',
    threshold: 0.6 // Trigger when 10% of the target is visible
  });
  navObserver.observe(headerSec.dom);
  navObserver.observe(contactSec.dom);




  const sectionChange = (entries, sectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let move = 100
        const navHeader = document.querySelector('#navHead')
        const navLetterForm = document.querySelectorAll('.navLetterForm')
        

        switch(entry.target.id) {
          case 'introduction':
            move = 0
          break;
          case 'case_studies':
            move = 1
          break;
          case 'contact':
            move = 2
          break;
        }


        navTitleForm.forEach((ele,i) => {
          gsap.killTweensOf(ele)
          gsap.to(ele, {
            y: `${(i-move)*50}%`,
            duration:0.4,
            delay: (i == move) ? 0.2 : 0
          })
          gsap.to(ele, {
            autoAlpha: (i == move) ? 1 : 0,
            duration:  (i == move) ? 0. : 0.2,
            delay: (i == move) ? 0.2 : 0
          })
        })



        gsap.to(navLetterForm, {
          autoAlpha: 0,
          duration:0.2
        })
        gsap.killTweensOf(navLetterForm[move])
        gsap.set(navLetterForm[move], {autoAlpha: 1})

        gsap.killTweensOf(navLetterForm[move].children)

        gsap.set(navLetterForm[move].children, {autoAlpha:0})
        gsap.fromTo(navLetterForm[move].children, {
          autoAlpha:0,
        },{
          autoAlpha: 1,
          duration:0.6,
          stagger: 0.1
        })

      }
    });
  };

  const sectionObserver = new IntersectionObserver(sectionChange, {
    root: null, // Use the viewport as the container
    rootMargin: '-50% 0px -20% 0px',
    threshold: 0.1 // Trigger when 10% of the target is visible
  });
  sectionObserver.observe(headerSec.dom)
  sectionObserver.observe(csSec.dom)
  sectionObserver.observe(contactSec.dom)




  let edgeOff = 20
  let edge2nd = 10

  const lineWidth = 2
  const wob = 100


  const topEdge = ve(app, 'edgeGhost', {
      position:'fixed',
      top:0,
      left:0,
      width:'100%',
      height:`${edgeOff*3}px`,
      maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 25%, transparent 100%)'

  })

  const rightEdge = ve(app, 'edgeGhost', {
      position:'fixed',
      top:0,
      right:0,
      width:`${edgeOff*2}px`,
      height:'100%',
      maskImage: 'linear-gradient(to left, rgba(0,0,0,0.95) 25%, transparent 100%)'

  })

  const botEdge = ve(app, 'edgeGhost', {
      position:'fixed',
      bottom:0,
      left:0,
      width:'100%',
      height:`${edgeOff*3}px`,
      maskImage: 'linear-gradient(to top, rgba(0,0,0,0.95) 25%, transparent 100%)'
  })

  const leftEdge = ve(app, 'edgeGhost', {
      position:'fixed',
      top:0,
      left:0,
      width:`${edgeOff*2}px`,
      height:'100%',
      maskImage: 'linear-gradient(to right, rgba(0,0,0,0.95) 25%, transparent 100%)'

  })  


  loadCases(csSec)

  returnDrawn()
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


}








async function loadCases(cs) {
  const studies = cs.dom.querySelectorAll('.study')
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
}



const blockani = {

}
const blockChange = (entries, sectionObserver) => {
  console.log(blockani)
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      blockani[entry.target.dataset.blockani].enter()
      // gsap.to(entry.target, {
      //   opacity:1,
      //   duration:0.5
      // })
    } else {
      blockani[entry.target.dataset.blockani].leave()

    }
  })
}

const blockObserver = new IntersectionObserver(blockChange, {
  root: null, // Use the viewport as the container
  rootMargin: '-30% 0px -30% 0px',
  threshold: 0.1 // Trigger when 10% of the target is visible
});

class blockAniBuild {
  constructor() {
    this.tl = gsap.timeline({paused: true, onStart:()=>{ this.img.forEach(i =>{ i.style.transition = 'none'; i.style.opacity = 0; }) }, onComplete: ()=>{ this.img.forEach(i =>{ i.style.transition = 'opacity 0.5s'; i.style.opacity = 1; grungeMask(i) }) } })
    this.firstPlay = true
  }

  enter() {
    this.tl.pause()
    this.tl.timeScale(1)
    this.tl.play()
    if(this.firstPlay) this.firstPlay = false
  }

  leave() {
    if(this.firstPlay) return
    this.tl.pause()
    this.tl.timeScale(1)
    this.tl.reverse()
  }


}

export function setupblockAni() {
  if(!blockani.intro) {
     const dom = document.querySelector('#introduction .body')
     dom.setAttribute('data-blockani', 'intro')
      
     blockani.intro = new blockAniBuild()
     blockani.intro.img = [dom.querySelector('.imgHold img')]
     const tl = blockani.intro.tl
     tl.fromTo(dom.querySelectorAll('#introInfo > *:not(svg)'), {
      filter: 'blur(5px)',
      opacity: 0,
     }, {
      filter: 'blur(0px)',
      opacity: 1,
      duration:0.5,
     },0.25)
     .fromTo(dom.querySelectorAll('.imgHold div'), {
      filter: 'blur(5px)',
      opacity: 0,
     }, {
      filter: 'blur(0px)',
      opacity: 1,
      duration:0.5,
     },0.25)


     blockObserver.observe(dom)
  }

  if(!blockani.study1) {
    const domTree = document.querySelectorAll('#case_studies .study')

    domTree.forEach((dom,i) => {
      dom.setAttribute('data-blockani', `study${i}`)
      blockani[`study${i}`] = new blockAniBuild()
      blockani[`study${i}`].img = [dom.querySelector('.imgHold img')]

      const tl = blockani[`study${i}`].tl
      tl.fromTo(dom.querySelectorAll('.title, .meta, .info > *:not(svg)'), {
       filter: 'blur(5px)',
       opacity: 0,
      }, {
       filter: 'blur(0px)',
       opacity: 1,
       duration:0.5,
      },0.6)
      .fromTo(dom.querySelectorAll('.imgHold div'), {
       filter: 'blur(5px)',
       opacity: 0,
      }, {
       filter: 'blur(0px)',
       opacity: 1,
       duration:0.5,
      },0)

    
      blockObserver.observe(dom)      

    })
  }

  if(!blockani.contact) {
    const dom = document.querySelector('#contact .body')
    dom.setAttribute('data-blockani', 'contact')
     
    blockani.contact = new blockAniBuild()
    blockani.contact.img = [dom.querySelector('.imgHold img')]
    const tl = blockani.contact.tl
    tl.fromTo(dom.querySelectorAll('h1, a'), {
     filter: 'blur(5px)',
     opacity: 0,
    }, {
     filter: 'blur(0px)',
     opacity: 1,
     duration:0.5,
    },0.25)
    .fromTo(dom.querySelectorAll('.imgHold div'), {
     filter: 'blur(5px)',
     opacity: 0,
    }, {
     filter: 'blur(0px)',
     opacity: 1,
     duration:0.5,
    },0.25)


    blockObserver.observe(dom)
 }  
}

const iTrans = [] 
function imgTrans() {
  const div = document.createElement('div')
  div.innerHTML = `
<img data-src="https://assets.playground.xyz/JWhitmore/448d6f0e_spritesheetFixed.png" />
`

// <img data-src="https://assets.playground.xyz/JWhitmore/8b178c3e_Sequence-0100.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/d43b9b5c_Sequence-0101.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/7dca50ab_Sequence-0102.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/df3cdabf_Sequence-0103.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/4d1c7b2e_Sequence-0104.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/421822f8_Sequence-0105.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/edb6856e_Sequence-0106.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/097977d1_Sequence-0107.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/16f2786d_Sequence-0108.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/2048ccc3_Sequence-0109.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/6bcb023e_Sequence-0110.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/af0c9013_Sequence-0111.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/758d2b5e_Sequence-0112.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/b24f6169_Sequence-0113.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/a0f63765_Sequence-0114.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/bd487baa_Sequence-0115.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/d60e93c5_Sequence-0116.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/e8a1f196_Sequence-0117.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/9738aca1_Sequence-0118.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/a4ec165a_Sequence-0119.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/62377001_Sequence-0120.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/45bea221_Sequence-0121.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/fa8dc596_Sequence-0122.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/2c2186f1_Sequence-0123.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/1206a486_Sequence-0124.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/b4e862ee_Sequence-0125.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/032a3af5_Sequence-0126.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/862bad2c_Sequence-0127.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/9c4aa7b8_Sequence-0128.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/8d2176bc_Sequence-0129.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/6c2b9e68_Sequence-0130.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/16dcc55f_Sequence-0131.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/731f5a25_Sequence-0132.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/90993289_Sequence-0133.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/64389dbb_Sequence-0134.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/5eed0196_Sequence-0135.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/fcc21a04_Sequence-0136.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/61faeae0_Sequence-0137.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/5099d513_Sequence-0138.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/d9f4c1e5_Sequence-0139.jpg" />
// <img data-src="https://assets.playground.xyz/JWhitmore/0fda420f_Sequence-0140.jpg" /> 


  div.querySelectorAll('img').forEach(img => {
    loadResolver.toLoad.push(img)
    iTrans.push(img)
  })

}

function grungeMask(img) {

  // 18 frames
  const frames = 18
  let i = 0;
  const maskW = iTrans[0].naturalWidth
  const maskH = iTrans[0].naturalHeight
  const ratio = (maskW/frames)/maskH
  console.log(ratio)
  img.style.maskImage = `url(${iTrans[0].src})`
  img.style.maskMode = 'luminance'
  img.style.maskSize = 'auto 110%'
  img.style.maskPosition = `0px 0%`
  const h = img.offsetHeight * 1.1
  console.log(h)
  const interval = setInterval(()=>{
    i++    
    img.style.maskPosition = `${(i * -h*ratio)}px 0%`
    if(i == frames) {
      clearInterval(interval)
      img.style.maskImage = 'unset'
    }
  },20)
 }