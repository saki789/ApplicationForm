function showPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.querySelector('#page' + pageNumber).style.display = 'block';
}
