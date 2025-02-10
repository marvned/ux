document.getElementById('email-link').addEventListener('click', function() {
    // Копируем email в буфер обмена
    const email = "marned74@gmail.com"; // Замените на свой реальный email
    navigator.clipboard.writeText(email).then(function() {
        // Показываем сообщение
        const message = document.getElementById('email-message');
        message.style.display = 'block';

        // Скрываем сообщение через 3 секунды
        setTimeout(function() {
            message.style.display = 'none';
        }, 3000);
    }).catch(function(error) {
        console.error("Ошибка при копировании:", error);
    });
});
