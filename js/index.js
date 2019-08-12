




//CANVAS EFFECT

var canvas = document.getElementById('myCanvas'),
ctx = canvas.getContext('2d'),

   particles = [],
patriclesNum = 100,
           w = 2000,
           h = 1000,
      colors = ['#7ef9ff','#00557a', '#000e14', '#003851'];

canvas.width = 2000;
canvas.height = 1000;

  
function Factory(){  
  this.x =  Math.round( Math.random() * w);
  this.y =  Math.round( Math.random() * h);
  this.rad = Math.round( Math.random() * 1) + 1;
  this.rgba = colors[ Math.round( Math.random() * 3) ];
  this.vx = Math.round( Math.random() * 4)-1.5;
  this.vy = Math.round( Math.random() * 3)-1.5;
}
   
function draw(){
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'overlay';
  for(var i = 0;i < patriclesNum; i++){
    var temp = particles[i];
    var factor = 1;
     
    for(var j = 0; j<patriclesNum; j++){
      
       var temp2 = particles[j];
       ctx.linewidth = 1;
      
       if(temp.rgba == temp2.rgba && findDistance(temp, temp2)<200){
          ctx.strokeStyle = temp.rgba;
          ctx.beginPath();
          ctx.moveTo(temp.x, temp.y);
          ctx.lineTo(temp2.x, temp2.y);
          ctx.stroke();
          factor++;
       }
    }
    
    
    ctx.fillStyle = temp.rgba;
    ctx.strokeStyle = temp.rgba;
    
    ctx.beginPath();
    ctx.arc(temp.x, temp.y, temp.rad*factor, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(temp.x, temp.y, (temp.rad+5)*factor, 0, Math.PI*2, true);
    ctx.stroke();
    ctx.closePath();
    

    temp.x += temp.vx;
    temp.y += temp.vy;
    
    if(temp.x > w)temp.x = 0;
    if(temp.x < 0)temp.x = w;
    if(temp.y > h)temp.y = 0;
    if(temp.y < 0)temp.y = h;
  }
}

function findDistance(p1,p2){  
  return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

(function init(){
  for(var i = 0; i < patriclesNum; i++){
    particles.push(new Factory);
  }
})();



(function loop(){
    draw();
    requestAnimFrame(loop);
})();

//CANVAS EFFECT

//fade in welcome
$(window).ready(function() {
  $("#hello").delay(1000).fadeIn(2400);
});
$(window).ready(function() {
  $('#name, #first-line').delay(3400).fadeIn(2400);
});
$(window).ready(function() {
  $('#next-line').delay(5800).fadeIn(2400);
});
$(window).ready(function() {
  $('#last-line').delay(8200).fadeIn(4000);
});



//play song
$("#headphones").click(function() {
  $("#playsong")[0].play();
  $("#status").text("Playing");
  $("#status").css({"color": "rgba(0,142,204,0.5)"});
  $("#headphones").css({"color": "rgba(0,142,204,0.8"})
});




//graphic design toggle
$( "#reveal-gd" ).click(function() {
  $( "#gd-section" ).toggle( "slow")

});

//graphic design toggle
$( "#reveal-web" ).click(function() {
  $( "#web-section" ).toggle( "slow")
  });

//experience toggle
$( "#reveal-exp" ).click(function() {
  $( "#exp-section" ).toggle( "slow", function() {
    $(".exparrow").toggleClass('flip');
  });
});

//education toggle
$( "#reveal-edu" ).click(function() {
  $( "#edu-section" ).toggle( "slow", function() {
    $(".eduarrow").toggleClass('flip');
  });
});

//flip effect
$(function($) {
  $(".card").flip({
    trigger: 'click',
    axis: 'x'
  }); 
});

//sidetoggle
$(function () {
  $('#sidebarCollapse').on('click', function () {
      $('#sidebar, #content').toggleClass('active');
  });
});


//modal popup
$( "#reveal-form" ).click(function() {
  $("#myModal").modal('show');
});
  

//$( window ).resize(function() {
 // $(widthCheck).prepend($( window ).width());
//});

//$( window ).resize(function() {
  //$(heightCheck).prepend($( window ).height());
//});

//var widthCheck = canvas.width;
//var heightCheck = canvas.height;

