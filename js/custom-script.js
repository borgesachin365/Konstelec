$( document ).ready(function() {
  //Blog Paragraph Text Truncate Js
let strlength = 80;
var elements = document.querySelectorAll('.truncate-text');
for(let i = 0; i < elements.length; i++){
    let str = elements[i].innerHTML;
    if (str.length > strlength) {
        str = str.substring(0, strlength),
        str.replace(/\w+$/, '');
        str +='...';
        elements[i].innerHTML = str;
      }
}

//Testimonial Heading Text Truncate Js
let blog_testimonials = 50;
var blog_testimonial_elements = document.querySelectorAll('.common-heading-text');
for(let i = 0; i < blog_testimonial_elements.length; i++){
    let str_new_blog = blog_testimonial_elements[i].innerHTML;
    if (str_new_blog.length > blog_testimonials) {
        str_new_blog = str_new_blog.substring(0, blog_testimonials),
        str_new_blog.replace(/\w+$/, '');
        str_new_blog +='...';
        blog_testimonial_elements[i].innerHTML = str_new_blog;
      }
}
});

//Fetch current year dynamicaly
  let currentdate = new Date();
  document.getElementById("currentyear").innerHTML = currentdate.getFullYear();

//scroll to top button
var btn = $('#top-btn');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

//Aos animation
  AOS.init();

// Hamberger navigations
$(function(){
$('li.dropdown > a').on('click',function(event){
   if($(this).hasClass("one")){
      $(this).parent().siblings().find("span").removeClass("rotateSpan");
  }
  if($(this).hasClass("dropdowns")){
      $(this).parent().siblings().find("span").removeClass("rotateSpan");
  }
    if ($(this).find('span').hasClass("rotateSpan")) {
    $(this).find('span').removeClass("rotateSpan")
  } else if (!$(this).find('span').hasClass("rotateSpan")) {
    $(this).find('span').addClass("rotateSpan")
  }
  $(this).parent().find('ul').first().toggle(300);
  $(this).parent().siblings().find('ul').hide(200);
}); 
});

// our client slider
$("#client-slider").owlCarousel({
  loop:true,
  autoplay: true,
  margin: 30,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText: ["<img src='svg/home-banner-arrow.svg'>","<img src='svg/home-banner-arrow.svg'>"],
  responsive: {
    0: {
      items: 2,
      margin:10
    },
    600: {
      items: 3,
      margin:10
    },
    1024: {
      items: 4
    },
    1366: {
      items: 4
    }
  }
});

//our projects tab slider
$("#owl-example-projects").owlCarousel({
  loop:true,
  autoplay: false,
  margin: 50,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  navText: ["<img src='images/prev__arrow.png'>","<img src='images/next__arrow.png'>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3,
      margin: 10
    },
    1024: {
      items: 3,
      margin: 10
    },
    1101: {
      items: 3,
      margin: 10
    },
    1366: {
      items: 4
    }
  }
  });

// vanila js tabs for our projects slider  
var tabLabels = document.querySelectorAll(".tabs li");
var tabPanes = document.getElementsByClassName("tab-contents");
function activateTab(e) {
  e.preventDefault();
  tabLabels.forEach(function(label, index){
    label.classList.remove("active");
  });
  [].forEach.call(tabPanes, function(pane, index){
    pane.classList.remove("active");
  });
  e.target.parentNode.classList.add("active");
  var clickedTab = e.target.getAttribute("href");
  document.querySelector(clickedTab).classList.add("active");
}
tabLabels.forEach(function(label, index){
  label.addEventListener("click", activateTab);
});

//sticky header script
const header = document.querySelector(".main-header");
const headertop = document.querySelector(".header-top");
const mainbox = document.querySelector(".main-box");
const toggleClass = "is-sticky";
const mainboxToggle = "shrink"
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    header.classList.add(toggleClass);
    mainbox.classList.add(mainboxToggle);
    headertop.style.display = "none"
  } else {
    header.classList.remove(toggleClass);
    mainbox.classList.remove(mainboxToggle);
    headertop.style.display = "block"
  }
});

