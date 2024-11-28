// Извлекаем данные заказа из localStorage
window.onload = function() {
    var orderDetails = JSON.parse(localStorage.getItem('orders')) || [];

    var orderDetailsDiv = document.getElementById('orderDetails');
    if (orderDetails.length > 0) {
        orderDetailsDiv.innerHTML = '';
        orderDetails.forEach(function(order, index) {
            orderDetailsDiv.innerHTML += `
                <p><strong>Заказ #${index + 1}</strong></p>
                <p><strong>Имя:</strong> ${order.name}</p>
                <p><strong>Телефон:</strong> ${order.phone}</p>
                <p><strong>Файл:</strong> <img src="${order.file}" alt="File" style="max-width: 100px;"></p>
                <button class="delete-button" onclick="deleteOrder(${index})">Удалить</button>
                <hr>
            `;
        });
    } else {
        orderDetailsDiv.innerHTML = '<p>Нет данных заказа.</p>';
    }
};

// Сохранение данных в localStorage
function saveOrder(name, phone, file) {
    var order = {
        name: name,
        phone: phone,
        file: file
    };

    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(order);
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Удаление заказа
function deleteOrder(index) {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1); // Удаляем заказ по индексу
    localStorage.setItem('orders', JSON.stringify(orders));
    window.location.reload(); // Перезагружаем страницу, чтобы обновить список заказов
}

// Обработчик формы
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
            // Сохранение файла в формате Base64
            var fileData = e.target.result;
            saveOrder(name, phone, fileData);

            alert('Заказ отправлен! Мы с вами свяжемся.');
            window.location.reload();
        };
        reader.readAsDataURL(file);
    } else {
        saveOrder(name, phone, "");
        alert('Заказ отправлен без файла! Мы с вами свяжемся.');
        window.location.reload();
    }
});
