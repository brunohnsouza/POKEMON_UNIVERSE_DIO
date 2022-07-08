/** ==============
    'LOADING PAGE'
    ============== */

// SELECT CLASS ".p-loading"
const loadingPage = document.querySelector(".p-loading");

// WAITING FOR THE WINDOW TO LOAD TO MAKE THE LOADING INVISIBLE
window.addEventListener("load",function() {
    loadingPage.style.display = "none";
});