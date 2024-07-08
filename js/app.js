

const cursordot = document.querySelector("[data-cursor-dot]");
const cursoroutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function(e){
  const posX = e.clientX;
  const posY = e.clientY;
  cursordot.style.left = `${posX}px`;
  cursordot.style.top = `${posY}px`;



  // cursoroutline.style.left = `${posX}px`;
  // cursoroutline.style.top = `${posY}px`;


  cursoroutline.animate({
    left: `${posX}px`,
    top:  `${posY}px`,

  }, {duration: 500, fill: "forwards"});


});










 

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


  let nav = document.querySelector("nav");
  window.addEventListener("scroll", function(){
    nav.classList.toggle("active", window.scrollY > 0)
  })



  let btn  = document.getElementById("dark_mode");
  let btntext = document.getElementById("btntext");
  let icon = document.getElementById("icon");

  btn.onclick =  function(){
  document.body.classList.toggle("darkthem");

  if(  document.body.classList.contains("darkthem")){
    icon.src= "img/sun.png";
    // btntext.innerHTML = "light";
  }
  else{
    icon.src= "img/moon.png";
    // btntext.innerHTML = "dark";
  }

  }



// Get the modal
var modals = document.querySelectorAll(".modal");

// Get the images and insert them inside the modals - use their "alt" text as a caption
var imgs = document.querySelectorAll(".myImg");
var modalImgs = document.querySelectorAll(".img01");
var captionTexts = document.querySelectorAll(".caption");
var closeButtons = document.querySelectorAll(".close");

// Attach click event to each image
imgs.forEach(function(img, index) {
  img.onclick = function() {
    var modal = modals[index];
    var modalImg = modal.querySelector(".img01");
    var captionText = modal.querySelector(".caption");
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
    modal.style.display = "block";
  }
});

// Attach click event to each close button
closeButtons.forEach(function(closeButton) {
  closeButton.onclick = function() {
    var modal = this.parentElement;
    modal.style.display = "none";
  }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  modals.forEach(function(modal) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}




function validation (){
  var email  = document.getElementById("email").value;

  if (email == "")
  {
    document.getElementById("error").innerHTML = "please enter email";
    return false;
  }
else{
  alert("email succesfull submit ");
}
  
  
}





// contact form validation in form //


function vali()
{
  var user = document.getElementById("user").value;
  var emailj = document.getElementById("emailpass").value;
  var phone = document.getElementById("phone").value;
  var sub = document.getElementById("sub").value;
  var msg = document.getElementById("masg").value;


  if(user == "")
{
  document.getElementById("usererroe").innerHTML = "please enter username";
  return false;
}


if(!isNaN(user))
{
  document.getElementById("usererroe").innerHTML = "only charcters are allowed";
  return false;
}


if(emailj == "")
{
  document.getElementById("errorpass").innerHTML = "plase enter email";
  return  false;
}


if(phone == "")
{
  document.getElementById("errorpass1").innerHTML = "plase enter phone num";
  return  false;
}


if(isNaN(phone))
{
  document.getElementById("errorpass1").innerHTML = "user can allwed digit only";
  return  false;
}


if(phone.length!=10)
{
  document.getElementById("errorpass1").innerHTML = "user can allwed 10 digit only";
  return  false;
}

if(sub == "")
{
  document.getElementById("errorpass2").innerHTML = "please enter subject";
  return false;

}

if(msg == "")
{
  document.getElementById("errorpass3").innerHTML = "plase enter message";
  return false;
}


else{
   alert("messge sent succesfully 😄😄😄😄😄😄😄😄")
}

}





const sr = ScrollReveal({
 
    delay: 0,
    distance: '0px',
    duration: 1700,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'bottom',
    rotate: {
        x: 0,
        y: 0,
        z: 0,
    },
    scale: 1,
    cleanup: false,
    container: document.documentElement,
    desktop: true,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.0,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    afterReset: function (el) {},
    afterReveal: function (el) {},
    beforeReset: function (el) {},
    beforeReveal: function (el) {},

})


sr.reveal('.wr_p_inner', {delay:350, origin:'left'})



document.addEventListener("DOMContentLoaded", function () {
  const filters = document.querySelectorAll('.filter');
  const portfolioItems = document.querySelectorAll('.portfolio');

  filters.forEach(function (filter) {
      filter.addEventListener('click', function () {
          const selectedFilter = this.getAttribute('data-filter');

          filters.forEach(function (f) {
              f.classList.remove('active');
          });
          this.classList.add('active');

          portfolioItems.forEach(function (item) {
              if (selectedFilter === 'all' || item.classList.contains(selectedFilter.slice(1))) {
                  item.classList.remove('hidden');
              } else {
                  item.classList.add('hidden');
              }
          });
      });
  });
});



// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var img = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("modalImg");
var body = document.getElementsByTagName("body")[0]; // Get the body element

for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        body.classList.add("hide-cursor"); // Add the hide-cursor class to body
    }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  body.classList.remove("hide-cursor"); // Remove the hide-cursor class from body
}






let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



