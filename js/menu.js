// Функция для открытия модального окна с анимацией
function openModal() {
    var modal = document.getElementById("orderModal");
    var modalContent = modal.querySelector(".modal-content");

    modal.style.display = "flex"; // Display the modal
    setTimeout(function() {
        modal.classList.add("open"); // Add 'open' class for fade-in
        modalContent.classList.remove("close"); // Ensure modal content enters smoothly
    }, 10); // Small delay to ensure the modal is visible before the transition
}

// Функция для закрытия модального окна с анимацией
function closeModal() {
    var modal = document.getElementById("orderModal");
    var modalContent = modal.querySelector(".modal-content");

    modalContent.classList.add("close"); // Add 'close' class for animation
    modal.classList.remove("open"); // Fade-out effect

    // Wait for the animation to finish before hiding the modal
    setTimeout(function() {
        modal.style.display = "none"; // Hide modal after animation
    }, 400); // Match the duration of the fade-out animation
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
    var modal = document.getElementById("orderModal");
    if (event.target === modal) {
        closeModal();
    }
};

// Форма отправки (сохранение данных в localStorage)
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Получаем значения из формы
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    
    // Сохраняем данные в localStorage
    var order = {
        name: name,
        phone: phone
    };

    // Получаем текущие заказы из localStorage
    var orders = JSON.parse(localStorage.getItem('orders')) || [];

    // Добавляем новый заказ в массив
    orders.push(order);

    // Сохраняем обновленный массив заказов
    localStorage.setItem('orders', JSON.stringify(orders));

    // Отправляем уведомление и закрываем окно
    alert('Заказ отправлен! Мы с вами свяжемся.');
    closeModal();

    // Очищаем форму
    document.getElementById('orderForm').reset();

    // Обновляем отображение заказов
    displayOrders();
});

// Функция для отображения всех заказов
function displayOrders() {
    var orders = JSON.parse(localStorage.getItem('orders')) || [];
    var ordersContainer = document.getElementById('orders');
    ordersContainer.innerHTML = '';

    // Для каждого заказа создаем элемент и добавляем в контейнер
    orders.forEach(function(order) {
        var orderElement = document.createElement('div');
        orderElement.classList.add('order-item');
        orderElement.innerHTML = `
            <p><strong>Имя:</strong> ${order.name}</p>
            <p><strong>Телефон:</strong> ${order.phone}</p>
        `;
        ordersContainer.appendChild(orderElement);
    });
}

// Загружаем и отображаем заказы при загрузке страницы
window.onload = function() {
    displayOrders();
};
