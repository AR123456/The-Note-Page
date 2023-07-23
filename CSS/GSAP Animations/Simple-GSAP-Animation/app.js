// treated like queryselector all
// start the header above page and annimate in
gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });

// annimate   links stagger animates each link in each .link in sequence
gsap.from(".link", { duration: 2, opacity: 0, delay: 1, stagger: 0.5 });
// go left to right
gsap.from(".right", { duration: 2, x: "-100vw", delay: 1, ease: "power2.in" });
// animate the left side bar in l r
gsap.from(".left", { duration: 1, delay: 1.5, x: "-100%" });
// animate the footer  go to a particular postiion
gsap.to(".footer", { duration: 1, y: 0, ease: "elastic", delay: 3 });
// the reverse button - spin in after other animations done
gsap.fromTo(
  ".button",
  { opacity: 0, scale: 0, rotation: 720 },
  { duration: 1, delay: 3.5, opacity: 1, scale: 1, rotation: 0 }
);
