var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext('2d');

var stars = []
var FPS
var x
var ga
var mouse = { x:0, y:0};

  if(window.innerWidth >= 1600){
  var FPS = 70, // Frames per second
      x = 600, // Number of stars
      connected = 0,
      md = 350,
      sd = 300,
      dotvisibility = 800
      mouseConnections = 60,
      ga = 1;
      mouse = {
        x: 0,
        y: 0
      };  // mouse location
    }
    else if(window.innerWidth >= 1000){

    var  FPS = 90, // Frames per second
      x = 550, // Number of stars
      connected = 0;
      ga = 1,
      md = 200,
      sd = 300,
      dotvisibility = 500,
      mouseConnections = 60,
      mouse = {
        x: 0,
        y: 0
      };  // mouse location
    }
    else{
      var FPS = 90, // Frames per second
      x = 200, // Number of stars
      connected = 0;
      ga = 1,
      md = 0,
      sd = 0,
      dotvisibility = 400,
      mouseConnections = 0,
      mouse = {
        x: 0,
        y: 0
      };  // mouse location
    }

// Push stars to array


function start(){
  stars = []
  for (var i = 0; i < x; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 1,
      fps: Math.random() * 40 + 31,
      vx: Math.floor(Math.random() * 50) - 25,
      vy: Math.floor(Math.random() * 50) - 25
    });
  }
}

// Draw the scene

function draw() {

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
  if(stars.length === 0)
    start();
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.globalAlpha = 1;
  var color = 0;
  
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
    //distance of stars disapearing

    if(distance(mouse, s) > dotvisibility)
       continue
    else if(distance(mouse, s) > 200){
      var fade = (distance(mouse, s) - dotvisibility) / 1000;
      ctx.globalAlpha = Math.abs(Math.round(fade * 100) / 100) ;
    }
    else{
      ctx.globalAlpha = 1;
    }

      if(i % 7 != 0)
        ctx.fillStyle = '#a590dfd3';
      else
        ctx.fillStyle = 'blue';

    ctx.beginPath(); 
    ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = '#a590dfd3';
    ctx.stroke();
  }
  ctx.beginPath();
  
  ctx.globalAlpha = 1;

  for (var i = 0, x = stars.length; i < x; i++){
    stars[i].connected = 0;
  }
  ctx.lineWidth = 1
  ctx.strokeStyle = '#a590dfd3';
  redrawLines();
  ctx.stroke();

}



function redrawLines(){
  for (var i = 0, x = stars.length; i < x; i++) {
   // if(stars[i].connected >= 5) continue
    
    ctx.beginPath()
    var starI = stars[i];
   
    ctx.moveTo(starI.x,starI.y); 
    //distance of stars to connect to mouse
    if(distance(mouse, starI) < mouseConnections){ 
       stars[i].connected++;
       ctx.lineTo(mouse.x, mouse.y);
       ctx.stroke()
    }
    for (var j = 0, x = stars.length; j < x; j++) {
      if(distance(stars[i], stars[j]) > 80) continue
    
              
      

      //distance of stars to connect to
      if(distance(mouse, starI) > md){ 
        continue
      }
      
      var starII = stars[j];

      // ctx.globalAlpha = starI.ga

      if(distance(starI, starII) < md && stars[i].connected != 10 && stars[j].connected != 10) {
        

        //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
        stars[i].connected++;
        stars[j].connected++;


          var fade1 = (md - distance(mouse, starI)) / 1000;
          
          var fade2 = (md - distance(mouse, starII)) / 1000;

          var fade = Math.min(fade1, fade2);




        ctx.strokeStyle = `rgba(165, 144, 223, ${Math.abs(Math.round(fade * 1000) / 1000)})`;

        ctx.lineTo(starII.x,starII.y); 
        ctx.stroke()
        ctx.strokeStyle = `rgb(165, 144, 223)`;
      }
    }
    ctx.globalAlpha = 1;
  }

}





function distance( point1, point2 ){
  var xs = 0;
  var ys = 0;
 
  xs = point2.x - point1.x;
  xs = xs * xs;
 
  ys = point2.y - point1.y;
  ys = ys * ys;
 
  return Math.sqrt( xs + ys );
}

// Update star locations

function update() {
  for (var i = 0, x = stars.length; i < x; i++) {
    var s = stars[i];
  
    s.x += s.vx / s.fps;
    s.y += s.vy / s.fps;
    
    if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
    if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
  }
}

document.getElementById("welcome-wrapper").addEventListener('mousemove', function(e){
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});



// Update and draw

function tick() {
  draw();
  update();
  requestAnimationFrame(tick);
}




function updateValues(){
  if(window.innerWidth >= 1600){
        FPS = 90 // Frames per second
        x = 600 // Number of stars
        connected = 0 // keeps track of the number of stars connected to
        md = 350 //distance of stars seem from mouse
        sd = 400 //distance of stars connected to other stars
        mouseConnections = 60
        dotvisibility = 800
        ga = 1 //!!!!!to be deleted
        mouse = {
          x: 0,
          y: 0
        };  // mouse location
      }
      else if(window.innerWidth >= 1300){
  
      FPS = 90 // Frames per second
        x = 350 // Number of stars
        connected = 0
        ga = 1
        md = 250
        sd = 400
        dotvisibility = 500
        mouseConnections = 60
        mouse = {
          x: 0,
          y: 0
        };  // mouse location
      }
      else{
        FPS = 90 // Frames per second
        x = 200 // Number of stars
        connected = 0;
        ga = 1
        md = 0
        sd = 0
        dotvisibility = 400
        mouseConnections = 0
        mouse = {
          x: 0,
          y: 0
        };  // mouse location
      }
}



  
    window.onresize = function () {
      //needs fix
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      var e = window.event;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      ctx.clearRect(0, 0, ctx.width, ctx.height);
      stars = null;
      updateValues();
      start();
      draw();
      update();

      console.log("yippe");

    };

tick();