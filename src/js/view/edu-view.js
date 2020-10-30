import data from '../data/edu-data.js'

function addEduNav() {
    const container = document.querySelector('#edukasi nav ul')
    let navList = ''

    data.forEach((dataItem) => {
        navList += `
        <li id=${dataItem.tag}>${dataItem.tag}</li>
        `
    })
    container.innerHTML = navList
    navActive()
}

function navActive() {
    const navs = document.querySelectorAll('#edukasi nav ul li')
    const leftArrow = document.querySelector('#edukasi nav i.mdi-chevron-left')
    const rightArrow = document.querySelector('#edukasi nav i.mdi-chevron-right')
    let beforeThisNavActive = 0
    let activeNav = null

    if (!activeNav) {
        activeNav = 0
        navs[activeNav].classList.add('active')
        renderEduBody(0)
    }
    
    navs.forEach((nav) => {
        nav.addEventListener('click', (event) => {
            const target = event.target.getAttribute('id')
            

            navs.forEach((nav, index) => {
                if (target === nav.getAttribute('id')) {
                    beforeThisNavActive = activeNav
                    navs[beforeThisNavActive].classList.remove('active')
                    activeNav = index
                }
            })
            navs[activeNav].classList.add('active')
            renderEduBody(activeNav)
        })
    })

    leftArrow.addEventListener('click', () => {
        beforeThisNavActive = activeNav
        if (activeNav === 0) {
            activeNav = 4
        } else {
            activeNav--
        }
        navs[beforeThisNavActive].classList.remove('active')
        navs[activeNav].classList.add('active')
        renderEduBody(activeNav)
    })
    rightArrow.addEventListener('click', () => {
        beforeThisNavActive = activeNav
        if (activeNav === 4) {
            activeNav = 0
        } else {
            activeNav++
        }
        navs[beforeThisNavActive].classList.remove('active')
        navs[activeNav].classList.add('active')
        renderEduBody(activeNav)
    })

}


function renderEduBody(index) {
    const container = document.getElementById('edu-body')
    container.innerHTML = data[index].body
}

export default addEduNav
