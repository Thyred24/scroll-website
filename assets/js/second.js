let portfolyoItems = document.querySelectorAll('.portfolyo-item');

portfolyoItems.forEach(item => {
    item.addEventListener('click', function() {
        openOverlay(item);
    });
});

function openOverlay(item) {
    let image = item.querySelector('.portfolyo-item img');
    let overlay = item.querySelector('.overley');

    let inStock = item.dataset.stock === 'true';

    if(inStock) {
        overlay.innerHTML = 'Ürün Bulunmaktadır';
    } else{
        overlay.innerHTML = 'Stokta Bulunmamaktadır';
        image.style.opacity = '0.5';
    }
}