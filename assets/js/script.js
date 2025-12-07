document.addEventListener('DOMContentLoaded', function () {
    const ddd = '55';
    const numero = '62985407058';
    const texto = 'Ol%C3%A1%2C%20Juliana%20Beauty%20Boss%21%20Gostaria%20de%20um%20hor%C3%A1rio.'; // Texto inicial da mensagem

    // Monta o número completo
    const whatsappLink = `https://wa.me/${ddd}${numero}?text=${texto}`;

    // Atribui o link ao elemento
    const whatsappButton = document.getElementById('whatsapp-link');
    whatsappButton.setAttribute('href', whatsappLink);
});
