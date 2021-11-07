const collapsibles = document.querySelectorAll('.collapsible__header');
console.log(collapsibles);

collapsibles.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('collapsible--expanded');
    });
});