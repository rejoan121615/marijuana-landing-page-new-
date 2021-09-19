// slider

document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
        type: "loop",
        perPage: 3,
        focus: "center",
        autoWidth: false,
    }).mount();
});
// gsap plugins
gsap.registerPlugin(ScrollTrigger);
// bottom texts
const leftText = gsap.utils.toArray("#bottom-texts #serious path");
const rightText = gsap.utils.toArray("#bottom-texts #seeds path");
const bottomTextGradient = gsap.utils.toArray("#bottom-texts #circle-gradient");
// top logo
const topMainCircle = gsap.utils.toArray("#top-logo #main-circle");
const topSeedContainer = gsap.utils.toArray("#top-logo #seedContainer");
const topContainerSeed = gsap.utils.toArray("#top-logo #seed");
// const topCenterCircleGradient = gsap.utils.toArray("#top-logo #inner-dot-group");

gsap.set(bottomTextGradient, {
    display: "none",
});
gsap.set(gsap.utils.toArray(topMainCircle, topSeedContainer), {
    transformOrigin: "center center",
});

// logo animation start 

gsap.registerPlugin(DrawSVGPlugin);

const allTexts = gsap.utils.toArray("#serious path, #seeds path");
const innerRedContainer = gsap.utils.toArray("#seedContainer");
const topBlackSeed = gsap.utils.toArray("#inner-dot #seed");
const mainBigCircle = gsap.utils.toArray("#main-circle");
const bottomGradient = gsap.utils.toArray("#circle-gradient");

// inner red container
gsap.set(innerRedContainer, {
    stroke: "#e2001a",
    fill: "transparent",
});
gsap.set(topBlackSeed, {
    scale: 1.5,
    transformOrigin: "center center",
    fill: "transparent",
    stroke: "transparent",
});

gsap.set([innerRedContainer, mainBigCircle], {
    transformOrigin: "center center",
    rotate: 180
});


// inner read container

// setting property
gsap.set(allTexts, {
    fill: "transparent",
    stroke: "white",
    scale: 1.2,
    transformOrigin: "center center",
});
// gsap.set("#inner-dot-group", {
//     scale: 0
// });
gsap.set(mainBigCircle, {
    scale: 1.08,
});

// bottom text gradient animation timeline

// bottom gradient animation
gsap.timeline().fromTo(
    bottomGradient,
    {
        scale: 0
    },
    {
        scale: 1,
        duration: 1,
        delay: 4
    }
);

gsap.set('body', {
    overflowY: 'hidden'
})

gsap.to('body', {
    scrollTrigger: {
        trigger: '#who__we__are',
    },
    overflowY: 'scroll',

})

// main animation timeline
gsap.timeline()
    .from(allTexts, {
        drawSVG: "50% 50%",
        delay: 2,
        duration: 1.5,
        stagger: {
            each: 0.3,
        },
    })
    .to(
        allTexts,
        {
            scale: 1,
            duration: 1.5,
            delay: 0.3,
            stagger: {
                each: 0.3,
                from: "start",
            },
        },
        "<"
    )
    .to(
        allTexts,
        {
            fill: "white",
            duration: 1,
            stagger: {
                each: 0.3,
            },
            delay: 1,
        },
        "<"
    )
    .from(mainBigCircle, {
        drawSVG: "0% 0%",
        duration: 2,
    })
    .to(mainBigCircle, {
        fill: "white",
        scale: 1,
        duration: 0.75,
    })
    .from(
        innerRedContainer,
        {
            drawSVG: "0% 0%",
            duration: 0.74,
        },
        "-=1.2"
    )
    .fromTo(
        innerRedContainer,
        { fill: "transparent", scale: 0.7 },
        { fill: "#e2001a", duration: 0.6, scale: 1 }
    )

    .fromTo(
        topBlackSeed,
        {
            fill: "transparent",
            stroke: "transparent",
        },
        {
            fill: "black",
            stroke: "black",
            stagger: {
                each: 0.5,
            },
            duration: 1,
        }
    )
    .to(
        topBlackSeed,
        {
            scale: 1,
            stagger: {
                each: 0.5,
            },
            delay: 0.25,
        },
        "<"
    )
    .to('#animation__wrap', {
        height: '0',
        duration: 1.2,
    }).set('body', {
        overflowY: 'scroll'
    })

// gsap.timeline()
//     .fromTo(
//         [leftText, rightText],
//         {
//             y: 100,
//             opacity: 0,
//         },
//         {
//             y: 0,
//             opacity: 1,
//             delay: 1,
//             stagger: {
//                 amount: 2,
//             },
//             // onStart: function () {
//             //     gsap.set("body", {
//             //         overflow: 'hidden'
//             //     })
//             // }
//         }
//     )
//     .fromTo(
//         topMainCircle,
//         {
//             scale: 0,
//         },
//         {
//             scale: 1,
//             duration: 2,
//         },
//         "<"
//     )
//     .fromTo(
//         topSeedContainer,
//         {
//             scale: 0,
//         },
//         {
//             scale: 1,
//             duration: 1.2,
//         },
//         "-=1"
//     )

//     .fromTo(
//         topContainerSeed[0],
//         {
//             x: 500,
//             y: 250,
//             fill: "#FFFFFF",
//             stroke: "#FFFFFF",
//         },
//         {
//             x: 0,
//             y: 0,
//             fill: "#000000",
//             stroke: "#000000",
//             duration: 1.8,
//         }
//     )
//     .fromTo(
//         topContainerSeed[1],
//         {
//             x: -500,
//             fill: "#FFFFFF",
//             stroke: "#FFFFFF",
//         },
//         {
//             x: 0,
//             fill: "#000000",
//             stroke: "#000000",
//             duration: 1.8,
//         },
//         "<"
//     )
//     .fromTo(
//         topContainerSeed[2],
//         {
//             x: -500,
//             y: 500,
//             fill: "#FFFFFF",
//             stroke: "#FFFFFF",
//         },
//         {
//             x: 0,
//             y: 0,
//             fill: "#000000",
//             stroke: "#000000",
//             duration: 1.8,
//         },
//         "<"
//     )
//     .to("#animation__wrap", {
//         height: "0",
//         duration: 2,
//     })
//     .set("#animation__wrap", {
//         display: 'none',
//         // onComplete: function () {
//         //     gsap.set('body', {
//         //         overflowY: 'scroll'
//         //     })
//         // }
//     })




// logo animation end 



    .fromTo(
            "#top__text",
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
            }
        )
        .fromTo(
            ".brand #brand__svg",
            {
                opacity: 0,
                x: 50,
                y: 50,
            },
            {
                opacity: 1,
                x: 0,
                y: 0,
                duration: 1,
            },
            "<"
        )
        .fromTo(
            "#highlightText h1",
            {
                y: 100,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: {
                    each: 0.5,
                },
                duration: 1
            }
        )
        .fromTo(".bottom__texts", {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8
        });

// scroll trigger
gsap.timeline({
    scrollTrigger: {
        trigger: "#serious__seeds",
        start: "0% 50%",
    },
}).fromTo(
    "#serious__seeds .tittle",
    {
        opacity: 0,
        y: 100,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: {
            each: 1,
        },
    }
);

// who we are
gsap.timeline({
    scrollTrigger: {
        trigger: "#who__we__are",
        start: "center center",
    },
})
    .fromTo(
        "#who__we__are .tittle",
        {
            opacity: 0,
            y: 200,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: {
                each: 1,
            },
        }
    )
    .fromTo(
        "#who__we__are .para",
        {
            opacity: 0,
            y: 200,
        },
        {
            opacity: 1,
            y: 0,
        },
        "<"
    )
    .fromTo(
        "#who__we__are .right__img",
        {
            opacity: 0,
            y: 200,
            x: 200,
        },
        {
            opacity: 1,
            x: 0,
            y: 0,
        },
        "<"
    );

// // some tittle here
gsap.timeline({
    scrollTrigger: {
        trigger: "#some__tittle__here",
        start: "0% 80%",
    },
}).fromTo(
    "#some__tittle__here .main__tittle",
    {
        opacity: 0,
        y: 200,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: {
            each: 1,
        },
    }
);

// // some tittle here list
gsap.utils
    .toArray("#some__tittle__here .list__item li")
    .forEach((item, index) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "0% 80%",
            },
        }).fromTo(
            item,
            {
                y: 100,
                opacity: 0,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
            }
        );
    });

// slider section
gsap.timeline({
    scrollTrigger: {
        trigger: "#main__slider",
        start: "top center",
    },
})
    .fromTo(
        "#main__slider .texts .tittle",
        {
            y: 100,
            opacity: 0,
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
        }
    )
    .fromTo(
        "#main__slider .splide",
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
        }
    );

// // option brand logo
gsap.timeline({
    scrollTrigger: {
        trigger: "#brand__logo",
        start: "0% 80%",
    },
})
    .fromTo(
        "#brand__logo .svg__wrapper",
        {
            scale: 0,
            rotate: 150,
        },
        {
            scale: 1,
            rotate: 0,
        }
    )
    .fromTo(
        "#brand__logo .text__wrap .para",
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            stagger: {
                each: 0.5,
            },
        },
        "<"
    );

// // item lists
gsap.utils.toArray("#brand__logo .list__items .list").forEach((item, index) => {
    gsap.timeline({
        scrollTrigger: {
            trigger: item,
            start: "0% 80%",
        },
    })
        .fromTo(
            item,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                stagger: {
                    each: 0.5,
                },
            }
        )
        .fromTo(
            item.querySelector("img"),
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
            }
        )
        .fromTo(
            item.querySelector(".para"),
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
            }
        )
});
