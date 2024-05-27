gsap.registerPlugin(ScrollTrigger);

let flagship1 = document.querySelector(".f1");
let flagship2 = document.querySelector(".f2");
let flagship3 = document.querySelector(".f3");
let flagship4 = document.querySelector(".f4");

// const fadeOutUp = {
//   opacity: 0,
//   y: -300,
//   duration: 0.6,
// };

const fadeOutDown = {
  opacity: 0,
  y: 300,
  duration: 0.6,
};

const fadeOutLeft = {
  opacity: 0,
  x: -300,
  duration: 0.6,
};

const fadeOutRight = {
  opacity: 0,
  x: 300,
  duration: 0.6,
};

let tween1 = gsap.to(flagship1, fadeOutUp);
let tween2 = gsap.to(flagship2, fadeOutRight);
let tween3 = gsap.to(flagship3, fadeOutDown);
let tween4 = gsap.to(flagship4, fadeOutDown);
let tween5 = gsap.from(".fc1", {
  opacity: 0,
  duration: 0.6,
});

let tween6 = gsap.from(".fc2", {
  opacity: 0,
  duration: 0.6,
});

tween1.pause();
tween2.pause();
tween3.pause();
tween4.pause();
tween5.pause();

flagship1.addEventListener("mouseenter", () => {
  tween2.play();
  tween3.play();
  tween4.play();
  tween5.play();
});

flagship1.addEventListener("mouseleave", () => {
  tween5.reverse();
  tween2.reverse();
  tween3.reverse();
  tween4.reverse();
});

flagship2.addEventListener("mouseenter", () => {
  tween1.play();
  tween3.play();
  tween4.play();
  tween6.play();
});

flagship2.addEventListener("mouseleave", () => {
  tween6.reverse();
  tween1.reverse();
  tween3.reverse();
  tween4.reverse();
});
