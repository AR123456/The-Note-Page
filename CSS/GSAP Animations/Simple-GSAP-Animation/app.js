// treated like queryselector all
// start the header above page and annimate in
gsap.from(".header", { duration: 1, y: "-100%", ease: "bounce" });

// annimate   links stagger animates each link in each .link in sequence
gsap.from(".link", { duration: 2, opacity: 0, delay: 1, stagger: 0.5 });
