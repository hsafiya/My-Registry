document.getElementById('login-redirect').addEventListener('click', function (event) {
    event.preventDefault();
    document.location.replace('/login/')
  });
  
  document.getElementById('signup-redirect').addEventListener('click', function (event) {
    event.preventDefault();
    document.location.replace('/signup/')
  });
  