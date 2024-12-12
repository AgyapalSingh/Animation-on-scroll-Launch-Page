gsap.registerPlugin(ScrollTrigger);

const title = document.getElementById("animated-title");
const fullText = "Anti Stretch Marks Body Butter.";
const shortText = "A.S.M.B.B.";

gsap.to(
  {},
  {
    scrollTrigger: {
      trigger: ".body",
      start: "top top",
      end: "50% top",
      scrub: 5,
      onUpdate: (self) => {
        const progress = self.progress;
        const textLength = Math.round(progress * fullText.length);
        const visibleText = fullText.substring(0, textLength) || shortText;
        title.textContent = visibleText;

        if (visibleText === shortText || visibleText.length < fullText.length) {
          title.style.fontSize = "15vh";
          title.style.opacity = 1;
        } else {
          title.style.fontSize = "40px";
          title.style.opacity = 1;
        }
      },
    },
  }
);

gsap.to(title, {
  scrollTrigger: {
    trigger: ".body",
    start: "50% top",
    end: "100% top",
    scrub: true,
  },
  top: "10%",
  ease: "power1.out",
});

gsap.set(".img-product img", {
  rotate: 60,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".img-product",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
  })
  .to(".img-product img", {
    width: 700,
    height: 700,
    rotate: 0,
  })
  .to(".img-product img", {
    rotate: 0,
  })
  .to(title, {
    scrollTrigger: {
      trigger: ".body",
      start: "50% top",
      end: "100% top",
      scrub: true,
    },
    top: "-10%",
    ease: "power1.out",
  });






const title_m = document.getElementById("animated-title_m");
const fullText_m = "Anti Stretch Marks Body Butter.";
const shortText_m = "A.S.M.B.B.";

gsap.to(
  {},
  {
    scrollTrigger: {
      trigger: ".body_m",
      start: "top top",
      end: "50% top",
      scrub: 5,
      onUpdate: (self) => {
        const progress_m = self.progress;
        const textLength_m = Math.round(progress_m * fullText_m.length);
        const visibleText_m = fullText_m.substring(0, textLength_m) || shortText_m;
        title_m.textContent = visibleText_m;

        if (visibleText_m === shortText_m || visibleText_m.length < fullText_m.length) {
          title_m.style.fontSize = "5vh";
          title_m.style.opacity = 1;
        } else {
          title_m.style.fontSize = "40px";
          title_m.style.opacity = 1;
        }
      },
    },
  }
);

gsap.to(title_m, {
  scrollTrigger: {
    trigger: ".body_m",
    start: "50% top",
    end: "100% top",
    scrub: true,
  },
  top: "10%",
  ease: "power1.out",
});

gsap.set(".img-product_m img", {
  rotate: 60,
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".img-product_m",
      start: "top bottom",
      end: "bottom center",
      scrub: true,
    },
  })
  .to(".img-product_m img", {
    width: 300,
    height: 300,
    rotate: 0,
  })
  .to(".img-product_m img", {
    rotate: 0,
  })
  .to(title_m, {
    scrollTrigger: {
      trigger: ".body_m",
      start: "50% top",
      end: "100% top",
      scrub: true,
    },
    top: "-10%",
    ease: "power1.out",
  });




  