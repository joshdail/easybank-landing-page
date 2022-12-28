const body = document.querySelector("body")
const header = document.querySelector("header")
const displayBtn = document.getElementById("btn-display")
const nav = document.querySelector("nav")
const navToggle = document.getElementById("nav-toggle")

document.addEventListener("click", e => {
  if (e.target === displayBtn) {
    handleDisplayToggleClick(e)
  }
  if (e.target === navToggle) {
    handleNavToggleClick(e)
  }
})

// Handlers for nav settings

function handleNavToggleClick(e) {
  nav.classList.toggle("open")
  header.classList.toggle("drop-shadow")
}

// Handlers for display settings

function handleDisplayToggleClick(e) {
  body.getAttribute("data-display") === "dark"
    ? setDisplayMode("light")
    : setDisplayMode("dark")
  displayBtn.blur()
}

function setDisplayMode(displayMode) {
  sessionStorage.setItem("EASYBANK_DISPLAY_MODE", displayMode)
  body.setAttribute("data-display", displayMode)
}

function onLoad() {
  sessionStorage.getItem("EASYBANK_DISPLAY_MODE") === "dark"
    ? setDisplayMode("dark")
    : setDisplayMode("light")
}

onLoad()
