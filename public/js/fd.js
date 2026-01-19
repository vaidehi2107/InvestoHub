
gsap.utils.toArray(".fd-section").forEach(section => {
  const content = section.querySelector(".fd-content");
  const image = section.querySelector(".fd-visual img");

  gsap.from(content, {
    x: -40,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 60%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(image, {
    scale: 0.95,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 60%",
      toggleActions: "play none none none"
    }
  });
});

gsap.from(".fd-break-title", {
  y: 30,
  opacity: 0,
  duration: 0.8,
  scrollTrigger: {
    trigger: ".fd-visual-break",
    start: "top 60%",
  }
});

gsap.from(".fd-break-image", {
  scale: 0.96,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".fd-visual-break",
    start: "top 60%",
  }
});

gsap.from(".calculator-section", {
    opacity: 0,
    y: 30,             // Added a slight upward movement for a better feel
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".calc-card", // Fixed: Added the "." before the class name
      start: "top 65%",      // Adjusted to 75% so it triggers a bit earlier
      toggleActions: "play none none none"
    }
});

gsap.from(".calc-right", {
    opacity: 0,
    x: 50,
    duration: 1,
    delay: 0.5, // Starts slightly after the main section
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".calc-card",
      start: "top 70%",
    }
});