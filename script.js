/* ------------------STICKY HEADER------------------ */

window.onscroll = function() {sticky_header()};

 // Call the function on initial page load and whenever the user scrolls
 window.addEventListener("scroll", handleScroll);

// Get the header
var header = document.getElementById("glance_header");

// Get the offset position of the navbar
var sticky = header.offsetTop;

function sticky_header() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function handleScroll() {
    var header = document.getElementById("glance_header");
    var logoContainer = header.querySelector(".logo-container");
  
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        logoContainer.style.display = "none";
    } else {
        header.classList.remove("sticky");
        logoContainer.style.display = "flex"; 
    }
  }


   /* ------------------RESPONSIVENESS------------------ */
// Function to close the hamburger menu when the window is resized
function closeHamburgerMenu() {
    const menuBtn = document.getElementById('menu-btn');
    if (window.innerWidth >= 768) { // Replace 768 with your desired mobile breakpoint
      menuBtn.checked = false;
    }
  }
  
  // Attach the window resize event listener
  window.addEventListener('resize', closeHamburgerMenu);

  // -------------------POP UP-----------------------
  document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popup");
    const content1 = document.getElementById("content-1");
    const content2 = document.getElementById("content-2");
    const content3 = document.getElementById("content-3");
    const content4 = document.getElementById("content-4");
    const contentFinal = document.getElementById("content-final");
  
    const btn1 = document.getElementById("btn-1");

    const btn2_1 = document.getElementById("btn-2-1");
    const btn2_2 = document.getElementById("btn-2-2");
    const btn2_3 = document.getElementById("btn-2-3");

    const btn3_1 = document.getElementById("btn-3-1");
    const btn3_2 = document.getElementById("btn-3-2");
    const btn3_3 = document.getElementById("btn-3-3");
    const btn3_4 = document.getElementById("btn-3-4");
    const btn3_5 = document.getElementById("btn-3-5");

    const btn4_1 = document.getElementById("btn-4-1");
    const btn4_2 = document.getElementById("btn-4-2");
    const btn4_3 = document.getElementById("btn-4-3");

    const btnThankYou = document.getElementById("btn-thank-you");
    const thankYouMessage = document.getElementById("content-final"); // Assuming this element exists
  
    // Show the initial popup content when the page loads
    console.log("Show initial popup");
    popup.style.visibility = "visible";
  
    // Function to show the next content and hide the previous content
    function showNextContent(currentContent, nextContent) {
      currentContent.style.display = "none";
      nextContent.style.display = "block";
    }
  
    // Step 1: Show content2 when "OK" button is clicked
    btn1.addEventListener("click", function () {
      console.log("Step 1: Show content2");
      showNextContent(content1, content2);
    });
  
    // Step 2: Show content3 when one of the buttons in content2 is clicked
    function showContent3() {
      console.log("Step 2: Show content3");
      showNextContent(content2, content3);
    }
  
    btn2_1.addEventListener("click", showContent3);
    btn2_2.addEventListener("click", showContent3);
    btn2_3.addEventListener("click", showContent3);
  
    // Step 3: Show content4 when one of the buttons in content3 is clicked
    function showContent4() {
      console.log("Step 3: Show content4");
      showNextContent(content3, content4);
    }
  
    btn3_1.addEventListener("click", showContent4);
    btn3_2.addEventListener("click", showContent4);
    btn3_3.addEventListener("click", showContent4);
    btn3_4.addEventListener("click", showContent4);
    btn3_5.addEventListener("click", showContent4);
  
    // Step 4: Show final content when one of the buttons in content4 is clicked
    function showContentFinal() {
      console.log("Step 4: Show final content");
      showNextContent(content4, contentFinal);
    }
  
    btn4_1.addEventListener("click", showContentFinal);
    btn4_2.addEventListener("click", showContentFinal);
    btn4_3.addEventListener("click", showContentFinal);
  
    // Final Step: Show "Thank You" message and hide the popup after "Thank You" button is clicked
    btnThankYou.addEventListener("click", function () {
      console.log("Final Step: Show 'Thank You' message");
      thankYouMessage.style.display = "block";
      popup.style.visibility = "hidden";
    });
  });
  
  
  
  