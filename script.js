// Mo's Easy Scroll Animation Library!
// Version: 1.0
// Feel free to modify this as you see fit :)
const fastMovers = document.querySelectorAll(".fast-move"); //fast transitions, 1/2s
const movers = document.querySelectorAll(".move"); //normal transitions 1s
const slowMovers = document.querySelectorAll(".slow-move"); //slow transitions 2.5s
const shortDelayMovers = document.querySelectorAll(".short-delay-move"); //delay transitions 375ms delay, 1s transition
const delayMovers = document.querySelectorAll(".delay-move"); //delay transitions 750ms delay, 1s transition
const longDelayMovers = document.querySelectorAll(".long-delay-move"); //long delay transitions 1250ms delay, 1s transition
const extraLongDelayMovers = document.querySelectorAll(".extra-long-delay-move"); //extra long delay transitions 1750ms delay, 1s transition
const rotate70Movers = document.querySelectorAll(".rotate-cc-70"); //rotate 70deg from clockwise (rotation is CC)

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting); //this is for testing and can be removed
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
        console.log("entry locked:", entry.target);
      }
    });
  },
  {
    threshold: 0.3, //the amount of the element that must be visible in the viewport before the observer fires
  }
);

//extra fast transitions get class .fast-move
fastMovers.forEach((move) => {
  observer.observe(move);
});

//move basic transition get class .move
movers.forEach((move) => {
  observer.observe(move);
});

//slow transitions get class .slow-move
slowMovers.forEach((move) => {
  observer.observe(move);
});

//fast transitions with a short delay get class .delay-move
shortDelayMovers.forEach((move) => {
  observer.observe(move);
});

//fast transitions with a short delay get class .delay-move
delayMovers.forEach((move) => {
  observer.observe(move);
});

//LONG delay transitions get class .long-delay-move
longDelayMovers.forEach((move) => {
  observer.observe(move);
});

//EXTRA LONG delay transitions get class .extra-long-delay-move
extraLongDelayMovers.forEach((move) => {
  observer.observe(move);
});

//extra fast transitions get class .fast-move
rotate70Movers.forEach((move) => {
  observer.observe(move);
});
