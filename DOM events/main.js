
    document.addEventListener('DOMContentLoaded', (e) => {
      console.log(e.type)
    })
    window.addEventListener('load', (e) => {
      console.log(e.type)
    })


    const div = document.querySelector('div')
    console.log(div.getAttribute('some-attr'))
    div.setAttribute('some-attr', 'new value')
    console.log(div.getAttribute('some-attr'))
    div.dataset.next = 'next'
    console.log(div.dataset)


   setInterval (() => div.classList.toggle('red'), 500)

    const section = document.querySelector('section')
    console.log(section.style.backgroundColor)
    setInterval(() => {console.log(section.getBoundingClientRect())}, 1000)
    setInterval (() => {
    const {top, bottom, left, right} = section.getBoundingClientRect()
    console.log (top, bottom, left, right)}, 1000)
    function isVisible(el) {
      const {top, bottom, left, right} = section.getBoundingClientRect()
    if (bottom < 0) return false;
      if (top > window.innerHeight) return false;
    return true;
    }
    setInterval(() => {console.log(isVisible(section))}, 1000)


    console.log(section.parentElement)
    console.log(section.previousElementSibling)
    console.log(section.nextElementSibling)
    console.log(section.firstElementChild)
    console.log(section.lastElementChild)
    console.log(section.children)
    const ul = document.querySelector('ul')
    console.log(ul.closest('div'))
    console.log(section.parentNode)
    console.log(section.firstChild)
    console.log(section.childNodes)

