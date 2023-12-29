function hideContent() {
  const contentElement = document.getElementById('Name-align');
  contentElement.style.display = 'none';
}

// Function to show the content under the "Name-align" div
function showContent() {
  const contentElement = document.getElementById('Name-align');
  contentElement.style.display = 'block';
}

// Adding an event listeners to navbar links to hide and show content
const navbarLinks = document.querySelectorAll('.navbar a');
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    hideContent();
  });
});

// Function to navigate to sections
function navigate(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected section
  const section = document.getElementById(sectionId);
  section.classList.add('active');

  showContent(); // Show content when a section is navigated to
}


// The below code animate the background
const canvas = document.getElementById('animated-background');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ['#ff0000', '#00ff00', '#ff7f00', '#ffff00', '#00ff00'];

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function Dot(x, y, radius, color, velocity) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.velocity = velocity;

  this.draw = function() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  };

  this.update = function() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.velocity.x = -this.velocity.x;
    }

    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.velocity.y = -this.velocity.y;
    }

    this.draw();
  };
}

const dots = [];

function init() {
  for (let i = 0; i < 70; i++) {
    const radius = randomIntFromRange(1, 1.5);
    const x = randomIntFromRange(radius, canvas.width - radius);
    const y = randomIntFromRange(radius, canvas.height - radius);
    const color = randomColor(colors);
    const velocity = {
      x: randomIntFromRange(-2, 2),
      y: randomIntFromRange(-2, 2)
    };

    dots.push(new Dot(x, y, radius, color, velocity));
  }
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < dots.length; i++) {
    dots[i].update();
  }
}

init();
animate();

function slideObjectives() {
  let index = 1;
  setInterval(() => {
    objectiveSpans.forEach(span => {
      span.classList.remove('slide-in');
    });
    objectiveSpans[index].classList.add('slide-in');
    index++;
    if (index >= objectiveSpans.length) {
      index = 1;
    }
  }, 2000);
}

objectives.style.opacity = 1;
slideObjectives();

function navigate(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected section
  const section = document.getElementById(sectionId);
  section.classList.add('active');
}