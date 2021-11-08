const collapsibles = document.querySelectorAll('.collapsible__header');

collapsibles.forEach(item => {
    item.addEventListener('click', () => {
        item.parentElement.classList.toggle('collapsible--expanded');
    });
});