const content = {
    "title": 'Professional Software Development in 2018',
    "date": 'Nov 7th, 2017',
    'p': 'Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor. Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor?'
}

const addArticle = (content) => {
    let parent = document.querySelector('.articles')
    let newArticle = document.createElement('div')
    let title = document.createElement('h2')
    title.textContent = content.title
    let date = document.createElement('p')
    date.textContent = content.date
    let p = document.createElement('p')
    p.textContent = content.p

    let expandBtn = document.createElement('span')
    expandBtn.classList.add('expandButton')

    newArticle.classList.add('article')
    newArticle.appendChild(title)
    newArticle.appendChild(date)
    newArticle.appendChild(p)
    newArticle.appendChild(expandBtn)


    // how do I create an element with new Article Object
    let shinyArticle = new Article(newArticle)

    parent.appendChild(newArticle)
    refresh()
}

const removeLastArticle = () => {
    let parent = document.querySelector('.articles')
    let lastChild = parent.lastChild

    parent.removeChild(lastChild)
}

const addBtn = document.querySelector('.add-article')
const removeBtn = document.querySelector('.remove-last-article')


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    addArticle(content)
})
removeBtn.addEventListener('click', (e) => {
    e.preventDefault()
    removeLastArticle()
})