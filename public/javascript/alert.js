//custom alers window
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
  
  document.querySelector("#ok-click").addEventListener('click', closeAlert);