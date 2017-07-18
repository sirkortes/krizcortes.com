$(document).ready( function(){

  // var dot = $("#dot");
  var hbtn = $("#hireBtn");
  var cbtn = $("#contactBtn");

  hbtn.on('click', function(){

    // console.log("scrollTop cbn: ",cbtn.offset().top);

    $('window').scrollTo( $("#actioncall") );

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