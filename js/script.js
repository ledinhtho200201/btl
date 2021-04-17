//alert("js trong script->start");

function initLoaded(){
	initCorner();
}

// slideshow
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

// slideshow các nút phân slide
$('.nut-slide ul li').click(function(event) {
  var vi_tri_hien_tai = $('.active_nut').index()+1;
  var vi_tri_click = $(this).index()+1;
  $('.nut-slide ul li').removeClass('active_nut');
  $(this).addClass('active_nut');
  if(vi_tri_click>vi_tri_hien_tai){
     $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
        $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
     });
     $('.myslide:nth-child('+vi_tri_click+')').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
        $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
     });
  }
  if(vi_tri_click<vi_tri_hien_tai){
     $('.active').addClass('bien-mat-ben-phai').one('webkitAnimationEnd', function(event) {
        $('.bien-mat-ben-phai').removeClass('bien-mat-ben-phai').removeClass('active');
     });
     $('.myslide:nth-child('+vi_tri_click+')').addClass('active').addClass('di-vao-ben-trai').one('webkitAnimationEnd', function(event) {
        $('.di-vao-ben-trai').removeClass('di-vao-ben-trai');
     });
  }
});


$(document).ready(function() {
	initLoaded();
	//alert("js trong script->ready");
});
//alert("js trong script->end");
