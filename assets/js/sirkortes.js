DomReady.ready(function() { 
  
  console.log('dom is ready'); 

  var hbtn = document.getElementById('hireBtn');
  var cbtn = document.getElementById('contactBtn');
  var actioncall = document.getElementById('actionCall');
  var body = document.getElementsByTagName('body')[0];

  hbtn.onclick = function() {
    scrollTo( body, actioncall, 1200); 
  }
      
  function scrollTo(scroller, to, duration) {

      var start = 0,
          to = to.offsetTop,
          change = to - start,
          currentTime = 0,
          increment = 20;
          
      var animateScroll = function(){        
          currentTime += increment;
          var val = Math.easeInOutQuad(currentTime, start, change, duration);
          scroller.scrollTop = val;
          if(currentTime < duration) {
            setTimeout(animateScroll, increment);
          }
      };
      animateScroll();
  }

  //t = current time
  //b = start value
  //c = change in value
  //d = duration
  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  };




  // for stars inclusion
  // xhr = new XMLHttpRequest();
  // xhr.open("GET","../img/gif/stars2.svg", false);
  // // Following line is just to be on the safe side;
  // // not needed if your server delivers SVG with correct MIME type
  // xhr.overrideMimeType("image/svg+xml");
  // xhr.send("");
  // document.getElementById("stars").appendChild(xhr.responseXML.documentElement);


});
  
  // for form opening
  // cbtn.on('click', function(){

  //   cbtn.html('').css({
  //     width: '40px',
  //     height: '40px',
  //     padding: '0',
  //     borderRadius: '20px'
  //   });

  // });