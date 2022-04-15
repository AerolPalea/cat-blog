const xWrapper = document.querySelector('.xWrapper')
const popupNav = document.querySelector('.popupNav')
const menuOpenerWrapper = document.querySelector('.menuOpenerWrapper')
const searchIcon = document.querySelector('#searchIcon')
const xIcon = document.querySelector('#xIcon')
const searchField = document.querySelector('.searchField')
const searchFieldInput = document.querySelector('#searchFieldInput')
const main = document.querySelector('main')
const footer = document.querySelector('footer')
const body = document.querySelector('body')
const navBar = document.querySelector('.navBar')
const kebabMenu = document.querySelector('.kebabMenu')
const socialMediaLinks = document.querySelector('.socialMediaLinks')
const xIconMediaQuery = document.querySelector('.xIconMediaQuery')
const popStyle = popupNav.style
const htmlBody = document.body


// opens and closes the popup nav menu 
function popupNavOpen() {
    searchField.style.visibility = 'hidden'
    xIcon.style.display = 'none'
    searchIcon.style.display = 'flex'
    main.style.display = 'block'
    body.style.overflow = 'hidden'
    popStyle.transition = '1s ease'
    popStyle.opacity = '1'
    menuOpenerWrapper.style.opacity = '0'
    popStyle.left = '0px'
    menuOpenerWrapper.style.opacity = '1'
    footer.style.visibility = 'hidden'
}

function popupNavClose() {
    popStyle.transition = '0.8s ease'
    popStyle.opacity = '0'
    popStyle.left = '-1024px'
    body.style.overflow = 'auto'
    footer.style.visibility = 'visible'
}

menuOpenerWrapper.addEventListener('click', () => {
    const menuOpenerPosition = menuOpenerWrapper.getBoundingClientRect().top
    if (menuOpenerPosition >= 60) {
        kebabMenuClose()
        closeSearchBar()
        popupNavOpen()
    } else {
        closeSearchBar()
        popupNavOpen()
    }
})

xWrapper.addEventListener('click', () => {
    popupNavClose()
})

// Sets behavior for the search bar when search icon is clicked
function openSearchBar() {
    main.style.transition = '0.5s ease'
    popStyle.left = '-1024px'
    searchField.style.visibility = 'visible'
    searchFieldInput.focus()
    xIcon.style.display = 'flex'
    searchIcon.style.display = 'none'
    main.style.display = 'none'
    footer.style.display = 'none'
}

function closeSearchBar() {
    searchField.style.visibility = 'hidden'
    xIcon.style.display = 'none'
    searchIcon.style.display = ''
    main.style.display = ''
    footer.style.display = ''
}

searchIcon.addEventListener('click', () => {
    const position = searchIcon.getBoundingClientRect().bottom
    if (position >= 80) {
        popupNavClose()
        kebabMenuClose()
        openSearchBar()
    } else {
        popupNavClose()
        openSearchBar()
    }
})

xIcon.addEventListener('click', () => {
    closeSearchBar()
})
//


// Sets navBar to shrink and grow depending on whether scroll is at top of window or not
function navIncreaseHeight() {
    navBar.style.transition = '0.5s ease'
    navBar.style.backgroundColor = '#f8f8f8'
    navBar.style.paddingTop = '5px'
    navBar.style.paddingBottom = '10px'
}

function navDecreaseHeight() {
    navBar.style.transition = '0.5s ease'
    navBar.style.paddingTop = '40px'
    navBar.style.paddingBottom = '40px'
}

window.onscroll = function () {
    if (window.scrollY >= 1) {
        navIncreaseHeight()
    } else {
        navDecreaseHeight()
    }
}
//


// Sets active nav link color to indicate page
const navItem = document.querySelectorAll('.navItem a')

const activePage = window.location.pathname

console.log(activePage)

navItem.forEach(link => {
    if (link.href.includes(`${activePage}`)) {
        link.classList.toggle('active')
    }
})
//


// Setting social links to open from clicking on kebab menu on media queried nav
function kebabMenuOpen() {
    xIconMediaQuery.style.display = 'block'
    kebabMenu.style.setProperty('display', 'none', 'important')
    main.style.display = 'none'
    footer.style.display = 'none'
    socialMediaLinks.style.visibility = 'visible'
}

function kebabMenuClose() {
    xIconMediaQuery.style.display = 'none'
    kebabMenu.style.display = 'none'
    xIconMediaQuery.style.display = 'none'
    main.style.display = 'block'
    footer.style.display = 'block'
    socialMediaLinks.style.visibility = 'hidden'
}

kebabMenu.addEventListener('click', () => {
    popupNavClose()
    closeSearchBar()
    kebabMenuOpen()
})

xIconMediaQuery.addEventListener('click', () => {
    kebabMenuClose()
})

// Ensures that nav links in navbar stay visible 
window.addEventListener('resize', () => {
    if (window.innerWidth >= 1100) {
        socialMediaLinks.style.visibility = 'visible'
    } else {
        socialMediaLinks.style.visibility = 'hidden'
    }
})

// Changes footer subscribe container button on focus of input bar
const input = document.querySelector('.userInputFooter input')
const footerSubscribe = document.querySelector('.footerSubscribe')


input.addEventListener('focusin', () => {
    input.style.color = "black"
    footerSubscribe.style.backgroundColor = 'transparent'
})

input.addEventListener('blur', () => {
    footerSubscribe.style.background = ''
})


// Affects behavior of the 'Policy' button in nav bar
const policiesPlusMinus = document.querySelector('.policiesPlusMinus')
const policiesDropdownButton = document.querySelector('.policiesDropdownButton')
const policiesDropdownWrapper = document.querySelector(".policiesDropdownWrapper")

policiesDropdownButton.addEventListener("click", () => {
    if (policiesPlusMinus.innerHTML == " + ") {
        policiesDropdownWrapper.style.display = "flex"
        policiesPlusMinus.style.padding = "1.9px"
        policiesPlusMinus.innerHTML = "- "
    } else if (policiesPlusMinus.innerHTML == "- ") {
        policiesDropdownWrapper.style.display = "none"
        policiesPlusMinus.style.padding = "0"
        policiesPlusMinus.innerHTML = " + "
    }
})

