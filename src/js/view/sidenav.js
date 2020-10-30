function showSidenav() {
    const nav = document.querySelector('header nav')
    const navLinks = nav.querySelectorAll('li')
    const toggleBtn = nav.querySelectorAll('i')
    toggleBtn.forEach((btn) => {
        btn.addEventListener('click', () => {
            nav.classList.toggle('sidenav-active')
            navLinks.forEach((navLink, index) => {
                if (navLink.style.animation) {
                    navLink.style.animation = ''
                } else {
                    navLink.style.animation = `fadeFromRight 0.5s ease-in-out forwards ${index / 7 + 0.5}s`
                }
                navLink.addEventListener('click', () => {
                    navLinks.forEach((navLink) => {
                        navLink.style.animation = ''
                    })
                    nav.classList.remove('sidenav-active')
                })
            })
        })
    })
}

export default showSidenav;