import allNews from '../data/news-data.js'

function showNews() {
    const container = document.getElementById('news-container')
    let newsHTML = ''
    allNews.forEach((news) => {
        newsHTML += `
            <div class="col-sm-6 col-lg-4 gut-8">
                <div class="news card" style="opacity: 0">
                    <div class="card-image-header">
                        <img src=${news.image} alt=${news.title}>
                        <p>${news.tag}</p>
                    </div>
                    <h3>${news.title}</h3>
                    <p>${news.source} - ${news.date}</p>
                </div>
            </div>
        `
    })
    container.innerHTML = newsHTML
}

export default showNews;
