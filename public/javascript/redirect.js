document.getElementById('login-redirect').onclick = function (event) {
    event.preventDefault();
    document.location.replace('/login/')
  };
  
  document.getElementById('signup-redirect').onclick = function (event) {
    event.preventDefault();
    document.location.replace('/signup/')
  };
  