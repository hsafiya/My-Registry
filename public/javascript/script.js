//hero sectiom images
// $('.banner-area').slick({
//   autoplay: true,
//   speed: 2000,
//   arrows: false,
//   dots: true,
//   fade: true
// });
// custom alers window
window.alert=function(dialog){
      var winW = window.innerWidth;
      var winH = window.innerHeight;
      var dialogoverlay = document.getElementById('dialogoverlay');
      var dialogbox = document.getElementById('dialogbox');
      dialogoverlay.style.display = "block";
      dialogoverlay.style.height = winH+"px";
      dialogbox.style.left = (winW/2) - (550 * .5)+"px";
      dialogbox.style.top = "100px";
      dialogbox.style.display = "block";
      document.getElementById('dialogboxhead').innerHTML = "Username and password didn't match. Please try again.";
      document.getElementById('dialogboxbody').innerHTML = dialog;
      document.getElementById('dialogboxfoot').innerHTML = '<button onclick="alert.ok()" id="ok">OK</button>';
  }



