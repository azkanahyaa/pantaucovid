function scroll() {
    const spread = document.querySelector('#persebaran')
    const education = document.querySelector('#edukasi')
    const news = document.querySelector('#berita')
    const footer = document.querySelector('footer')

    const sideNavs = document.querySelectorAll('header nav ul li a')
    const caseCards = document.querySelectorAll('.case-card')
    const covidMap = document.querySelector('.covid-map')
    const eduNav = document.querySelectorAll('#edukasi nav ul li')
    const eduBody = document.querySelector('#edu-body')
    const newsCards = document.querySelectorAll('.news.card')
    const devProfile = document.querySelector('.dev-profile')
    const contacts = document.querySelectorAll('.dev-profile .contacts i')

    document.addEventListener('DOMContentLoaded', () => {
        fadeContents(window.scrollY)
    })

    window.addEventListener('scroll', () => {
        navActive(window.scrollY)
        fadeContents(window.scrollY)
    })

    function navActive(topWindow) {
        sideNavs.forEach(nav => {
            const item = document.querySelector(nav.hash)
    
            if(
                item.offsetTop - 400< topWindow &&
                item.offsetTop + item.offsetHeight - 400> topWindow
            ) {
                nav.classList.add("active");
            } else {
                nav.classList.remove("active");
            }
        })
    }

    function fadeContents(topWindow) {
        newsCards.forEach((newsCard, index) => {
            if (
                news.offsetTop - 400 < topWindow &&
                news.offsetTop + news.offsetHeight - 400> topWindow
            ) {
                newsCard.style.animation = `fadeFromBottom 0.6s ease-in-out forwards ${index / 7 + 0.5}s`
            }
        })

        caseCards.forEach((caseCard, index) => {
            if (
                spread.offsetTop - 400 < topWindow &&
                spread.offsetTop + spread.offsetHeight - 400 > topWindow
            ) {
                covidMap.style.animation = `fadeScale 0.6s ease-in-out forwards`
                caseCard.style.animation = `fadeFromLeft 0.6s ease-in-out forwards ${index / 7 + 0.5}s`
            }
        })

        eduNav.forEach((nav, index) => {
            if (
                education.offsetTop - 400< topWindow &&
                education.offsetTop + education.offsetHeight - 400> topWindow
            ) {
                eduBody.style.animation = `fadeFromRight 0.6s ease-in-out forwards`
                nav.style.animation = `fadeFromBottom 0.3s ease-in-out forwards ${index / 10 + 0.5}s`
            }
        })

        contacts.forEach((contact, index) => {
            if (
                footer.offsetTop - 500 < topWindow
            ) {
                devProfile.style.animation = `fadeScale 0.6s ease-in-out forwards`
                contact.style.animation = `fadeFromBottom 0.6s ease-in-out forwards ${index / 7 + 0.5}s`
            }
        })
    }
}

export default scroll