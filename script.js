'use strict';




// -------------------------------------------------------------------------------------------------

//                                  ----- ANIMATION BUBBLE -----
// -------------------------------------------------------------------------------------------------
// smart phone size ---



    const body = document.querySelector('body');
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

  const cvsColor = ['#fff', '#333', '#ff0000d2', '#87ceeb', '#87ceeb',
    '#f5da0a', '#fff', '#07a421', '#07a421', '#fff', '#333', '#fff', '#333', '#fff'];
      const bubbleColor = [
        'rgba(170, 0, 255, 0.537)',  // purple
        'rgba(255, 0, 0, 0.537)',    // red
        '#333333aa',                 // darkGray 
        '#ff70e290',  // pink
        '#ff000089',  // red
        '#ffa600ba',  // orange
        '#333333aa',  // black
        '#333333aa',  // black
        '#0bdc0083',  // green
        'rgba(170, 0, 255, 0.537)',    // purple
        'rgba(255, 255, 255, 0.296)',  // whiteGray
        '#ff70e290',  // pink
        '#ff70e290',  // pink
        '#87cfebb3'   // skyBlue
      ];

  let randomNum;
  randomNum = Math.floor(Math.random() * cvsColor.length);
  canvas.style.backgroundColor = cvsColor[randomNum];
  body.style.backgroundColor = cvsColor[randomNum];
  console.log(randomNum);

class Ball {
  constructor() {
    this.x = (Math.floor(Math.random() * 6) + 1) * 50; // bc*3*100
    this.y = (Math.floor(Math.random() * 12) + 1) * 50; // bc*6*100
    this.radius = (Math.floor(Math.random() * 7) + 1) * 5; // bc*4*10
    this.dx = (Math.floor(Math.random() * 3) + 1) / 2;
    this.dy = (Math.floor(Math.random() * 6) + 1) / 4;
    this.fillColor = '';
    this.strokeColor = 'rgba(255, 255, 255, 1)'
    this.lineWidth = 1;
    this.range = true;
      // randomNum = Math.floor(Math.random() * 10);
      // canvas.style.backgroundColor = cvsColor[randomNum];
      this.reCoordinate();
    window.addEventListener('resize', () => {
      this.resetCvs();
      this.reCoordinate();
      if(window.innerWidth < 415) {
        randomNum = Math.floor(Math.random() * cvsColor.length);
        this.resetColor();
      }
    });
  }
  resetCvs() {
    canvas.width = '';
    canvas.height = '';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resetColor() {
    // random = Math.floor(Math.random() * 10);
    canvas.style.backgroundColor = cvsColor[randomNum];
    body.style.backgroundColor = cvsColor[randomNum];
  }
  reCoordinate() {
    if(window.innerWidth < 415) {
      // console.log('small');
      this.x = (Math.floor(Math.random() * 6) + 1) * 50;   // bc*3*100
      this.y = (Math.floor(Math.random() * 12) + 1) * 50;  // bc*6*100
    }
    if(window.innerWidth > 415) {
      // console.log('big');
      this.x = (Math.floor(Math.random() * 12) + 1) * 50;  // bc*6*100
      this.y = (Math.floor(Math.random() * 6) + 1) * 50;   // bc*3*100
    }
    if(window.innerWidth > 713) {
      this.x = (Math.floor(Math.random() * 14) + 1) * 50;  // pc
      this.y = (Math.floor(Math.random() * 12) + 1) * 50;  // pc
    }
    if(window.innerWidth > 1000) {
      this.x = (Math.floor(Math.random() * 20) + 1) * 50;  // pc
      this.y = (Math.floor(Math.random() * 16) + 1) * 50;  // pc
    }
    if(window.innerWidth > 1300) {
      this.x = (Math.floor(Math.random() * 24) + 1) * 50;  // pc
      this.y = (Math.floor(Math.random() * 16) + 1) * 50;  // pc
    }
    if(window.innerWidth > 1600) {
      this.x = (Math.floor(Math.random() * 30) + 1) * 50;  // pc
      this.y = (Math.floor(Math.random() * 16) + 1) * 50;  // pc
    }
    if(window.innerWidth > 1800) {
      this.x = (Math.floor(Math.random() * 34) + 1) * 50;  // pc
      this.y = (Math.floor(Math.random() * 16) + 1) * 50;  // pc
    }
  }
  drawCircle() {
    ctx.beginPath();
    ctx.lineWidth = this.lineWidth;
    ctx.fillStyle = this.fillColor;
    ctx.strokeStyle = this.strokeColor;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    // ctx.stroke();
    this.circleMove();
    this.colDetect();
  }
  circleMove() {
    this.x += this.dx;
    this.y += this.dy;
  }
  colDetect() {
    if(window.innerWidth < 415) {
      if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      } else if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
        this.dy = -this.dy;
      }
    }
    if(window.innerWidth > 415) {
      if(this.x + this.radius > canvas.width || this.x - this.radius < 0) {
        this.dx = -this.dx;
      } else if (this.y + this.radius > canvas.height) {
        this.dy = -this.dy;
      } else if(this.y - this.radius < 0) {
        this.range = false;
      }
    }
  }
}

const balls = [];
  function increaseBalls() {
    for (let i = 0; i < 100; i++) {
      balls.push(new Ball())
    }
  } increaseBalls();
  

function updateBall() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
      if(ball.range) {
        ball.drawCircle();
        ball.fillColor = bubbleColor[randomNum];
      }
    });
  requestAnimationFrame(updateBall);
  }
  updateBall();


  document.addEventListener('click', () => {
    const ball = new Ball();
      ball.reCoordinate();
    increaseBalls();
    // increaseSound.play();
  });

  // const increaseSound = new Audio();
  // increaseSound.src = 'audio/gameSound.mp3'


// -------------------------------------------------------------------------------------------------








































