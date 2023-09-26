const locomotiveAnimation = function () {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });


    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotiveAnimation();

const navAnimation = function () {
    gsap.to("#nav-part1 svg", {
        transform: 'translateY(-100%)',
        scrollTrigger: {
            trigger: '#page1',
            scroller: '#main',
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })

    gsap.to("#nav-part2 #links", {
        transform: 'translateY(-100%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '#page1',
            scroller: '#main',
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    })
}

navAnimation();

const cursorMove = function () {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#cursor", {
            left: dets.x,
            top: dets.y
        })
    })
};

cursorMove();

const vidoconAnimation = function () {
    const videocon = document.querySelector("#video-container");
    const playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function () {
        gsap.to(playbtn, {
            scale: 1,
            opacity: 1
        })
    });

    videocon.addEventListener("mouseleave", function () {
        gsap.to(playbtn, {
            scale: 0,
            opacity: 0
        })
    });

    videocon.addEventListener("mousemove", function (dets) {
        gsap.to(playbtn, {
            left: dets.x - 50,
            top: dets.y - 80
        })
    })
};

vidoconAnimation();

const loadingAnimation = function () {
    gsap.from("#page1 h1", {
        y: 100,
        opacity: 0,
        delay: 0.8,
        duration: 0.9,
        stagger: 0.2
    })
    gsap.from("#page1 #video-container", {
        y: 100,
        scale: 0.9,
        opacity: 0,
        delay: 0.9,
        duration: 0.3,
        stagger: 0.8
    })
};

loadingAnimation();

const childCursor = function () {
    const childCursorEnter = document.querySelectorAll(".child")
    childCursorEnter.forEach(function (element) {
        element.addEventListener("mouseenter", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(1)',
            })
        })
    })

    const childCursorLeave = document.querySelectorAll(".child")
    childCursorLeave.forEach(function (element) {
        element.addEventListener("mouseleave", function () {
            gsap.to("#cursor", {
                transform: 'translate(-50%, -50%) scale(0)',
            })
        })
    })
}

childCursor();