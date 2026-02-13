// Footer year
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Typing effect in hero
const typingEl = document.getElementById("typing");
const phrases = [
  "I build clean, modern interfaces.",
  "I love turning designs into code.",
  "I focus on responsive web apps.",
];
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typingEl) return;
  const current = phrases[phraseIndex];

  if (!deleting) {
    charIndex++;
    if (charIndex === current.length + 3) {
      deleting = true; // small pause
    }
  } else {
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  typingEl.textContent = current.slice(0, charIndex);
  const delay = deleting ? 60 : 120;
  setTimeout(typeLoop, delay);
}

if (typingEl) {
  typeLoop();
}


const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => observer.observe(el));


const sections = document.querySelectorAll("main section[id]");
const scrollTopBtn = document.getElementById("scrollTop");

function onScroll() {
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    const id = section.id;
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const inView = scrollPos >= top && scrollPos < top + height;
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.classList.toggle("active", inView);
    }
  });

  if (scrollTopBtn) {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  }
}

window.addEventListener("scroll", onScroll);

if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

onScroll();


