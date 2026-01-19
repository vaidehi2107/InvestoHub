
gsap.utils.toArray(".animate-section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        }
    });
});


gsap.utils.toArray(".budgeting-page h4").forEach((heading) => {
    gsap.from(heading, {
        opacity: 0,
        x: -20,
        duration: 0.4,
        scrollTrigger: {
            trigger: heading,
            start: "top 85%",
        }
    });
});


gsap.from(".next-step", {
    opacity: 0,
    scale: 0.95,
    duration: 0.6,
    scrollTrigger: {
        trigger: ".next-step",
        start: "top 85%"
    }
});
