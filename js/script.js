let lastScrollTop = 0;
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop && scrollTop > 100) {
  //  down
    header.style.top = "-100px";
  } else {
  // up
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

document.addEventListener("click", (e) => {
  const circle = document.createElement("div");
  circle.classList.add("click-circle");
  circle.style.left = e.pageX + "px";
  circle.style.top = e.pageY + "px";
  document.body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 500);
});

lottie.loadAnimation({
  container: document.getElementById('lottie-animation'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '../imgs/Animation - 1746032942859.json' })


// Dark
const toggle = document.getElementById('darkModeToggle');
const icon = document.getElementById('darkIcon');
const body = document.body;

// Load saved mode
if (localStorage.getItem('darkMode') === 'enabled') {
  body.classList.add('dark-mode');
  icon.classList.remove('bi-moon-fill');
  icon.classList.add('bi-sun-fill');
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  icon.classList.toggle('bi-moon-fill', !isDark);
  icon.classList.toggle('bi-sun-fill', isDark);
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
});

const totalFrames =41;
const frameImg = document.getElementById("videoFrame");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScroll;

  const frameIndex = Math.min(
    totalFrames - 1,
    Math.floor(scrollFraction * totalFrames)
  );

  const frameNumber = String(frameIndex + 1).padStart(3, "0");
  frameImg.src =` frames/ezgif-frame-${frameNumber}.jpg`;
});