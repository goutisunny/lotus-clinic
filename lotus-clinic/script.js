// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Hero Animation
if (document.querySelector('.hero')) {
    const heroTimeline = gsap.timeline();
    
    heroTimeline.to('.hero-title', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
    })
    .to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
    }, "-=0.7")
    .to('.hero .cta-btn', {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        clearProps: "transform"
    }, "-=0.7");
    
    // Parallax effect on hero background
    gsap.to('.hero-bg', {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });
}

// About section animation
if (document.querySelector('.about')) {
    gsap.from('.about-text', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".about",
            start: "top 80%"
        }
    });
    
    gsap.from('.stat-item', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".stats",
            start: "top 85%"
        }
    });
    
    if (document.querySelector('.about-image')) {
        gsap.from('.about-image', {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".about",
                start: "top 80%"
            }
        });
    }
}

// Services cards animation
if (document.querySelector('.services')) {
    gsap.from('.service-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "transform",
        scrollTrigger: {
            trigger: ".services",
            start: "top 80%"
        }
    });
}

// Reviews animation
if (document.querySelector('.reviews')) {
    gsap.from('.review-card', {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".reviews",
            start: "top 80%"
        }
    });
}

// Contact section animation
if (document.querySelector('.contact')) {
    gsap.from('.contact-info', {
        x: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%"
        }
    });
    
    gsap.from('.contact-form', {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%"
        }
    });
}

// CTA section animation
if (document.querySelector('.cta-section')) {
    gsap.from('.cta-banner', {
        scale: 0.95,
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".cta-section",
            start: "top 85%"
        }
    });
}

// Page Header animation
if (document.querySelector('.page-header')) {
    gsap.from('.page-header h1', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });
    gsap.from('.page-header p', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
    });
}

// Service Detail Row animation
if (document.querySelectorAll('.service-detail-row').length > 0) {
    const rows = document.querySelectorAll('.service-detail-row');
    rows.forEach(row => {
        gsap.from(row, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: row,
                start: "top 80%"
            }
        });
    });
}
