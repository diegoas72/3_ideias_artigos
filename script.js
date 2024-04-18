document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var closeButton = document.getElementById('close-btn');

    function showModal() {
        modal.style.display = 'block';
    }

    function hideModal() {
        modal.style.display = 'none';
    }

    closeButton.addEventListener('click', hideModal);

    setTimeout(showModal, 3000); // Mostra o modal após 3 segundos (ajuste conforme necessário)
});