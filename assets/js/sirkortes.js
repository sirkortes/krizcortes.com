$(document).ready( function(){

  // var dot = $("#dot");
  var hbtn = $("#hireBtn");
  var cbtn = $("#contactBtn");
  var actioncall = $("#actioncall");

  hbtn.on('click', function(){

    $.scrollTo( actioncall, { duration: '0.8s' } );

  });

  cbtn.on('click', function(){

    cbtn.html('').css({
      width: '40px',
      height: '40px',
      padding: '0',
      borderRadius: '20px'
    });

  });

});