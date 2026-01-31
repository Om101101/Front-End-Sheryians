// For only one elem
// var  h = document.querySelector("#f1").textContent;

// var spltxt = h.split("");

// var clutter = "";
// spltxt.forEach(function (elem) {
//   clutter += `<span>${elem}</span>`;
// });
// document.querySelector("#f1").innerHTML=clutter;




/// Ai code******___________
// gsap.registerPlugin(ScrollTrigger);

// const main = document.querySelector("#main");

// /* =======================
//    LOCOMOTIVE SCROLL SETUP
// ======================= */
// const locoScroll = new LocomotiveScroll({
//   el: main,
//   smooth: true,
// });

// locoScroll.on("scroll", ScrollTrigger.update);

// ScrollTrigger.scrollerProxy(main, {
//   scrollTop(value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, { duration: 0, disableLerp: true })
//       : locoScroll.scroll.instance.scroll.y;
//   },
//   getBoundingClientRect() {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     };
//   },
//   pinType: main.style.transform ? "transform" : "fixed",
// });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

// /* =======================
//    TEXT SPLIT FUNCTION
// ======================= */
// function splitText(selector) {
//   document.querySelectorAll(selector).forEach((el) => {
//     const text = el.textContent.trim();
//     el.innerHTML = text
//       .split("")
//       .map((char) => `<span>${char}</span>`)
//       .join("");
//   });
// }

// splitText("#page2 h1");

// /* =======================
//    GSAP ANIMATION
// ======================= */
// gsap.to("#f1 span", {
//   color: "red",
//   stagger: 0.08,
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#f1",
//     scroller: main,
//     start: "top 60%",
//     end: "top -20%",
//     scrub: 1.5,
//     markers: false, // 👈 production me OFF
//   },
// });

/// Ai code end here ******___________










/// coading scholl******___________


function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}

function textSpl() {
  var allh1 = document.querySelectorAll("#page2 h1");
  allh1.forEach(function (elem) {
    var clutter = "";
    var h1txt = elem.textContent;
    var splittedText = h1txt.split("");
    splittedText.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    elem.innerHTML = clutter;
  });
}
function gsapAnimation() {
  gsap.to("#page2 #f1 span", {
    color: "red",
    stagger: 0.1,
    scrollTrigger: {
      trigger: "#page2 #f1 ",
      scroller: "#main",
      markers: true,
      start: "top 50%",
      end: "top -10%",
      scrub: 2,
    },
  });
}
locoScroll();
textSpl();
gsapAnimation();
