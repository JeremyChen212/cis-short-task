// if (navigator.serviceWorker) {
//     window.addEventListener('load', () => {
// 	   navigator.serviceWorker.register('/hw4/sw.js')
// 	      .then(registration => console.log('SW registered'))
// 		  .catch(err => console.log(`SW not registered - Error: ${err}`))
//     })
// } else {
//     console.log('Service Worker is not supported in this browser.')
// }


const sidebarOpenButton = document.getElementById("sidebarOpenButton")
const sidebar = document.getElementById("sidebar-multi-level-sidebar")
const overlay = document.getElementById("overlay")
const main = document.getElementById("main")
sidebarOpenButton.addEventListener("click", function() {
    console.log("sidebarOpenButton")
    console.log(sidebar)
    sidebar?.classList.remove("-translate-x-full")
    overlay.style.opacity = 0.5
    overlay.classList.remove("hidden")
    main.classList.add("pointer-events-none");
})
overlay.addEventListener("click", function() {
    main.classList.remove("pointer-events-none")
    overlay.style.opacity = 0
    overlay.classList.add('hidden')
    sidebar?.classList.add("-translate-x-full")
})
console.log("sidebarOpenButton")
