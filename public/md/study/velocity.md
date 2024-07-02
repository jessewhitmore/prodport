LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide1-1.png" />
<img src = "assets/velocity/slide1-2.png" />
<img src = "assets/velocity/logo.png" />

----- LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide2-1.png" />
<img src = "assets/velocity/slide2-2.png" />
<img src = "assets/velocity/logo.png" />

----- LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide3-1.png" />
<img src = "assets/velocity/slide3-2.png" />
<img src = "assets/velocity/slide3-3.png" />
<img src = "assets/velocity/slide3-4.png" />
<img src = "assets/velocity/slide3-5.png" />
<img src = "assets/velocity/logo.png" />

----- FADE

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide4-1.png" />
<img src = "assets/velocity/slide4-2.png" />
<img src = "assets/velocity/logo.png" />

----- LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide4-1.png" />
<img src = "assets/velocity/slide4-3.png" />
<img src = "assets/velocity/logo.png" />

----- LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide5-1.png" />
<img src = "assets/velocity/slide5-2.png" />
<img src = "assets/velocity/slide5-3.png" />
<img src = "assets/velocity/slide5-4.png" />
<img src = "assets/velocity/logo.png" />

----- LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide6-1.png" />
<img src = "assets/velocity/slide6-2.png" />
<img src = "assets/velocity/slide6-3.png" />
<img src = "assets/velocity/slide6-4.png" />
<img src = "assets/velocity/slide6-5.png" />
<img src = "assets/velocity/slide6-6.png" />
<img src = "assets/velocity/slide6-7.png" />
<img src = "assets/velocity/slide6-8.png" />
<img src = "assets/velocity/logo.png" />

----- LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide7-1.png" />
<img src = "assets/velocity/slide7-2.png" />
<img src = "assets/velocity/slide7-3.png" />
<img src = "assets/velocity/slide7-4.png" />
<img src = "assets/velocity/slide7-5.png" />
<img src = "assets/velocity/slide7-6.png" />
<img src = "assets/velocity/slide7-7.png" />
<img src = "assets/velocity/logo.png" />

----- LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide8-1.png" />
<img src = "assets/velocity/slide8-2.png" />
<img src = "assets/velocity/slide8-3.png" />
<img src = "assets/velocity/logo.png" />

----- FADE

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide9-1.png" />
<img src = "assets/velocity/slide9-2.png" />
<img src = "assets/velocity/slide9-3.png" />
<img src = "assets/velocity/logo.png" />


----- FADE

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide10-1.png" />
<img src = "assets/velocity/slide10-2.png" />
<img src = "assets/velocity/slide10-3.png" />
<img src = "assets/velocity/slide10-4.png" />
<img src = "assets/velocity/slide10-5.png" />
<img src = "assets/velocity/slide10-6.png" />
<img src = "assets/velocity/slide9-3.png" />
<img src = "assets/velocity/logo.png" />



----- LEFT



<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide10-6.png" />
<img src = "assets/velocity/slide11-1.png" />
<img src = "assets/velocity/slide11-2.png" />
<img src = "assets/velocity/slide11-3.png" />
<img src = "assets/velocity/slide11-4.png" />
<img src = "assets/velocity/slide11-5.png" />
<img src = "assets/velocity/slide11-6.png" />
<img src = "assets/velocity/slide11-7.png" />
<img src = "assets/velocity/slide9-3.png" />
<img src = "assets/velocity/logo.png" />


----- LEFT


<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide12-1.png" />
<img src = "assets/velocity/slide12-2.png" />
<img src = "assets/velocity/slide12-3.png" />
<img class = 'D-laptop' src = "assets/velocity/slide12-4.png" />
<img class = 'D-text' src = "assets/velocity/slide12-5.png" />
<img class = 'D-laptop' src = "assets/velocity/slide12-6.png" />
<img class = 'D-text' src = "assets/velocity/slide12-7.png" />
<img class = 'D-laptop' src = "assets/velocity/slide12-8.png" />
<img class = 'D-text' src = "assets/velocity/slide12-9.png" />
<img src = "assets/velocity/slide12-10.png" />
<img src = "assets/velocity/logo.png" />


----- FADE

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide13-1.png" />
<img src = "assets/velocity/slide13-2.png" />
<img src = "assets/velocity/slide13-3.png" />
<img src = "assets/velocity/slide13-4.png" />
<img src = "assets/velocity/logo.png" />

----- LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide13-1.png" />
<img src = "assets/velocity/slide13-3.png" />
<img src = "assets/velocity/slide13-5.png" />
<img src = "assets/velocity/slide13-6.png" />
<img src = "assets/velocity/logo.png" />


----- LEFT

<img src = "assets/velocity/bg.png" />
<img src = "assets/velocity/slide14-1.png" />
<img src = "assets/velocity/logo.png" />

----- JS


    const tl = gsap.timeline({repeat:-1});
    this.tl.push(tl);


    const DLaptop = document.querySelectorAll('.D-laptop');
    const Dtext = document.querySelectorAll('.D-text');

    tl.fromTo(DLaptop[1], {
    autoAlpha:0,
    }, {
    autoAlpha:1,
    duration:1
    },'>5');
    tl.fromTo(DLaptop[2], {
    autoAlpha:0,
    }, {
    autoAlpha:1,
    duration:1
    },'>5') ;

    tl.fromTo([DLaptop[1], DLaptop[2]], {
    autoAlpha:1,
    }, {
    autoAlpha:0,
    duration:1
    },'>5');



    tl.fromTo(Dtext[1], {
    autoAlpha:0,
    y:'10%'
    }, {
    autoAlpha:1,
    y:0,
    duration:1
    },'5');
    tl.fromTo(Dtext[0], {
    autoAlpha:1,
    y:0
    }, {
    autoAlpha:0,
    y:'-10%',
    duration:1
    },'<');

    tl.fromTo(Dtext[2], {
    autoAlpha:0,
    y:'10%'
    }, {
    autoAlpha:1,
    y:0,
    duration:1
    },'>5');

    tl.fromTo(Dtext[1], {
    autoAlpha:1,
    y:0
    }, {
    autoAlpha:0,
    y:'-10%',
    duration:1
    },'<');


    tl.fromTo(Dtext[0], {
    autoAlpha:0,
    y:'10%'
    }, {
    autoAlpha:1,
    y:0,
    duration:1
    },'>5');

    tl.fromTo(Dtext[2], {
    autoAlpha:1,
    y:0
    }, {
    autoAlpha:0,
    y:'-10%',
    duration:1
    },'<');


    tl.seek(5);
    tl.play();
