const collapsibles = document.querySelectorAll('.collapsible__header');
const price = document.querySelector('.domain-block__prices');

collapsibles.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('collapsible--expanded');
    });
});

price.addEventListener('click', (e) => {
    if (e.target.localName === "span") {
        for (let i = 0; i < price.children.length; i++) {
            if (price.children[i].children[0].className === 'badge badge--secondary') {
                price.children[i].children[0].className = 'badge';
            }
            e.target.classList.add('badge--secondary');
        }

    }
});