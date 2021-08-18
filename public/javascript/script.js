//hero sectiom images
// $('.banner-area').slick({
//   autoplay: true,
//   speed: 2000,
//   arrows: false,
//   dots: true,
//   fade: true
// });


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
  document.getElementById('dialogboxbody').innerHTML = dialog;
};

function closeAlert(event) {
  event.preventDefault();
  document.getElementById('dialogbox').style.display = "none";
  document.getElementById('dialogoverlay').style.display = "none";
}

document.querySelector("#ok-click").addEventListener('click', closeAlert );

// // custom alers window
// function CustomAlert(){
//     this.render = function(dialog){
//         var winW = window.innerWidth;
//         var winH = window.innerHeight;
//         var dialogoverlay = document.getElementById('dialogoverlay');
//         var dialogbox = document.getElementById('dialogbox');
//         dialogoverlay.style.display = "block";
//         dialogoverlay.style.height = winH+"px";
//         dialogbox.style.left = (winW/2) - (550 * .5)+"px";
//         dialogbox.style.top = "100px";
//         dialogbox.style.display = "block";
//         document.getElementById('dialogboxhead').innerHTML = "Acknowledge This Message";
//         document.getElementById('dialogboxbody').innerHTML = dialog;
//         document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
//     }
// 	this.ok = function(){
// 		document.getElementById('dialogbox').style.display = "none";
// 		document.getElementById('dialogoverlay').style.display = "none";
// 	}
// }
// var Alert = new CustomAlert();



