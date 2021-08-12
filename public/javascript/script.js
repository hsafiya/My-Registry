
//hero sectiom images
$('.banner-area').slick({
  autoplay: true,
  speed: 2000,
  arrows: false,
  dots: true,
  fade: true
});

document.getElementById('login').onclick = function (event) {
  event.preventDefault();
  document.location.replace('/login/')
};

document.getElementById('signup').onclick = function (event) {
  event.preventDefault();
  document.location.replace('/signup/')
};
