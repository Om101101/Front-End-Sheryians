var tl = gsap.timeline();

tl.from("#nav h3", {
  y: -50,
  opacity: 0,
  delay: 0.5,
  duration: 0.5,
  stagger: 1,
});
tl.from("#main h1", {
  x: -500,
  opacity: 0,
  duration: 0.5,
  stagger: 1,
});
tl.from("#img1, #img2, #img3, #img4, #img5", {
  rotate: 0,
  y: 50,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
  ease: "power3.out",
});
