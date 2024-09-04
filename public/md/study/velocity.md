NONE

<img data-src="https://assets.playground.xyz/JWhitmore/cd04df17_v0.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/82f2d08c_v1.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/1f87941b_v2.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/1a51ce01_v3.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/feadd055_v4.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/520d7910_v5a.jpg" />

----- FADE

<img data-src="https://assets.playground.xyz/JWhitmore/649b6146_v5b.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/c5a7a108_v5c.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/3b160b01_v6.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/d3322507_v7.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/d01a4f2f_v8.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/d89f743f_v9.jpg" />

----- FADE

<img data-src="https://assets.playground.xyz/JWhitmore/0eb992e2_v10.jpg" />

----- FADE

<img data-src="https://assets.playground.xyz/JWhitmore/1ee29821_v11.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/fd1ca312_v12.jpg" />

----- NONE

<img data-src = "https://assets.playground.xyz/JWhitmore/888509f2_bg.png" />
<img data-src = "https://assets.playground.xyz/JWhitmore/3c506409_slide12-1.png" />
<img data-src = "https://assets.playground.xyz/JWhitmore/800df54b_slide12-2.png" />
<img data-src = "https://assets.playground.xyz/JWhitmore/32b133a3_slide12-3.png" />
<img class = 'D-laptop' data-src = "https://assets.playground.xyz/JWhitmore/13b91d99_slide12-4.png" />
<img class = 'D-text' data-src = "https://assets.playground.xyz/JWhitmore/832906a8_slide12-5.png" />
<img class = 'D-laptop' data-src = "https://assets.playground.xyz/JWhitmore/8bfff58c_slide12-6.png" />
<img class = 'D-text' data-src = "https://assets.playground.xyz/JWhitmore/8bb00aa3_slide12-7.png" />
<img class = 'D-laptop' data-src = "https://assets.playground.xyz/JWhitmore/ab23b27b_slide12-8.png" />
<img class = 'D-text' data-src = "https://assets.playground.xyz/JWhitmore/310f7a44_slide12-9.png" />
<img data-src = "https://assets.playground.xyz/JWhitmore/49fe6b87_slide12-10.png" />
<img data-src = "https://assets.playground.xyz/JWhitmore/13e4200b_logo.png" />

----- FADE

<img data-src="https://assets.playground.xyz/JWhitmore/5e16d713_v14.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/184163b0_v15.jpg" />

----- NONE

<img data-src="https://assets.playground.xyz/JWhitmore/e15f9a84_v16.jpg" />

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

