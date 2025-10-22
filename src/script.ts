import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const transitions = {
    SpringUp: {
        from: {
            opacity: 0,
            scale: 0.75,
        },
        to: {
            ease: "elastic.out(0.6,0.14)",
            opacity: 1,
            scale: 1,
            duration: 4.25,
            delay: 1.25,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.Spring_Up',
            }
        }
    },
    Stagger: {
        from: {
            opacity: 0,
            y: 50,
        },
        to: {
            opacity: 1,
            y: 0,
            delay: .125,
            duration: 1.125,
            stagger: 0.125,
            ease: "power2.out"
        }
    },
    FadeUp: {
        from: {
            opacity: 0,
            y: 50,
        },
        to: {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
        }
    },
    FadeDown: {
        from: {
            opacity: 0,
            y: -50,
        },
        to: {
            opacity: 1,
            y: 0,
            delay: 0.25,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
        }
    },
    FadeIn: {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
            duration: 1,
            stagger: 0.125,
            ease: "power1.out"
        }
    },
    MobileLink: {
        from: {
            y: 100,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: 0.25,
            stagger: 0.1,
            ease: "power1.out"
        }
    }
}

// Hero Orbit Spring Animation
ScrollTrigger.batch(".Spring_Up", {
    start: "top bottom",
    onEnter: elements => {
        gsap.fromTo(elements, transitions.SpringUp.from, transitions.SpringUp.to);
    },
    once: true
});

// Stagger Animation
ScrollTrigger.batch(".Fade_Stagger", {
    start: "top bottom",
    onEnter: elements => {
        gsap.fromTo(elements, transitions.Stagger.from, transitions.Stagger.to);

    },
    once: true
});

ScrollTrigger.batch(".Project_Stagger", {
    start: "top bottom-=100px",
    onEnter: elements => {
        gsap.fromTo(elements,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.25,
                stagger: {
                    grid: "auto",
                    each: 0.125
                },
            });
    },
    once: true
});


// FadeUp Animation
ScrollTrigger.batch(".Fade_Up", {
    start: "top bottom-=100px",
    onEnter: elements => {
        gsap.fromTo(elements, transitions.FadeUp.from, transitions.FadeUp.to);
    },
    once: true
});

// FadeDown Animation
ScrollTrigger.batch(".Fade_Down", {
    start: "top bottom-=100px",
    onEnter: elements => {
        gsap.fromTo(elements, transitions.FadeDown.from, transitions.FadeDown.to);
    },
    once: true
});

// FadeIn Animation
ScrollTrigger.batch(".Fade_In", {
    onEnter: elements => {
        gsap.fromTo(elements, transitions.FadeIn.from, transitions.FadeIn.to)
    },
    once: true
});

// Mobile Nav Ham-Menu Animation
const MobileNavElement = document.querySelector("#mobileHeaderNav");
let isMenuOpen = false;
const menuTl = gsap.timeline({ paused: true });

if (MobileNavElement) {
    menuTl.fromTo(
        MobileNavElement,
        {
            clipPath: "circle(30px at calc(100vw + 30px) -30px)",
            backgroundColor: "var(--base)",
        },
        {
            clipPath: "circle(150vh at 40px 40px)",
            backgroundColor: "var(--primaryLite)",
            duration: 0.6,
            ease: "power1.inOut"
        }
    );
}

// MobileNav Link FadeUp animation
const MobileLinkElement = document.querySelectorAll("#mobileHeaderNav .MobileHeader_Nav");
const linkTl = gsap.timeline({ paused: true });

if (MobileLinkElement.length !== 0) {
    linkTl.fromTo(MobileLinkElement, transitions.MobileLink.from, transitions.MobileLink.to);
}

// Event listener to trigger MobileNav animations
const HamMenuButton = document.getElementById("Ham_Menu");

const closeNav = () => {
    linkTl.reverse()
    setTimeout(() => {
        menuTl.reverse();
    }, 350)
}

HamMenuButton?.addEventListener('click', () => {
    if (!isMenuOpen) {
        menuTl.play();
        linkTl.play()
    } else {
        closeNav()
    }
    isMenuOpen = !isMenuOpen;
    HamMenuButton?.classList.toggle("isOpen");
});

// Close Nav menu after Theme button click for Mobile sizes
const themeToggleMobileBtn = document.getElementById("themeToggleMobile");
const themeToggleMobileProjectBtn = document.getElementById("themeToggleMobileProject");
themeToggleMobileBtn?.addEventListener('click', () => {
    closeNav()
    isMenuOpen = !isMenuOpen;
    HamMenuButton?.classList.toggle("isOpen");
});
themeToggleMobileProjectBtn?.addEventListener('click', () => {
    closeNav()
    isMenuOpen = !isMenuOpen;
    HamMenuButton?.classList.toggle("isOpen");
});

// Smooth Scrolling
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);

// Use requestAnimationFrame instead of gsap.ticker for better performance
function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Smooth scroll on Nav Link Click
document
    .querySelectorAll('header nav a, #mobileHeaderNav .nav-link') // Selector now includes desktop AND mobile links
    .forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default browser behavior

            let targetId;
            if (el.tagName === 'A') {
                // For desktop anchor tags
                targetId = el.getAttribute("href")?.slice(1);
            } else {
                // For mobile button tags
                targetId = el.getAttribute("data-target");
            }
            
            if (!targetId) return;

            const target = document.getElementById(targetId);
            if (target) {
                lenis.scrollTo(target); // Use Lenis for smooth scrolling

                // If the mobile menu is open, close it.
                if (isMenuOpen) {
                    closeNav();
                    isMenuOpen = !isMenuOpen;
                    HamMenuButton?.classList.toggle("isOpen");
                }
            }
        });
    });