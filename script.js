document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    // Отправка данных в TG-бот
    const tg_url = `https://api.telegram.org/botYOUR_BOT_TOKEN/sendMessage?chat_id=YOUR_CHAT_ID&text=Новый запрос от ${name}. Телефон: ${phone}`;

    // Отправка данных в Google Таблицы
    const google_script_url = 'YOUR_GOOGLE_SCRIPT_URL'; // Ссылка на Google Apps Script
    fetch(google_script_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, phone: phone })
    });

    // Отправка данных на почту
    const mailto_url = `mailto:daniyarova12345@icloud.com?subject=Новый запрос от ${name}&body=Телефон: ${phone}`;
    window.location.href = mailto_url;

    // Очистка формы после отправки
    document.getElementById('contactForm').reset();
});

// Переключение меню на мобильных устройствах
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("active");
});