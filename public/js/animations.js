gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-section h1", {
    y: 60,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

gsap.from(".intro", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "power3.out"
});

gsap.from(".logo img", {
    x: 80,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "power3.out"
});

gsap.from(".quote", {
    opacity: 0,
    y: 20,
    duration: 0.8,
    delay: 1,
    ease: "power2.out"
});

gsap.from(".journey-item", {
    scrollTrigger: {
        trigger: ".journey-section",
        start: "top 70%"
    },
    opacity: 0,
    y: 60,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out"
});
// LEFT cards
gsap.utils.toArray(".journey-item.left .card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%"
        },
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

// RIGHT cards
gsap.utils.toArray(".journey-item.right .card").forEach(card => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 80%"
        },
        x: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    });
});

gsap.from(".dot", {
    scrollTrigger: {
        trigger: ".journey-section",
        start: "top 75%"
    },
    scale: 0,
    duration: 0.4,
    stagger: 0.3,
    ease: "back.out(1.7)"
});

document.querySelectorAll(".journey-item .card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { y: -8, duration: 0.3 });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, { y: 0, duration: 0.3 });
    });
});
