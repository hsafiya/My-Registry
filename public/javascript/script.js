
//hero sectiom images
$('.banner-area').slick({
  autoplay: true,
  speed: 2000,
  arrows: false,
  dots: true,
  fade: true
});

document.getElementById('login-redirect').onclick = function (event) {
  event.preventDefault();
  document.location.replace('/login/')
};

document.getElementById('signup-redirect').onclick = function (event) {
  event.preventDefault();
  document.location.replace('/signup/')
};
