// Функція для збереження даних форми в локальному сховищі
function saveFormData(form) {
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    localStorage.setItem('formData', JSON.stringify(data));
}

// Функція для автозаповнення форми
function autoFillForm(form) {
    const data = JSON.parse(localStorage.getItem('formData'));

    if (data) {
        Object.keys(data).forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = data[key];
            }
        });
    }
}

// Функція для перевірки валідності введених даних
function validateFormData(data) {
    return data.name && data.email && data.message;
}

function saveFormData(form) {
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    if (validateFormData(data)) {
        localStorage.setItem('formData', JSON.stringify(data));
    } else {
        console.error('Невірні дані форми.');
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        // Автозаповнення форми при завантаженні
        autoFillForm(form);

        // Збереження даних форми при відправленні
        form.addEventListener('submit', () => saveFormData(form));
    });
});

function saveFormData(form) {
    const formId = form.id || 'default'; // Унікальний ідентифікатор форми
    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    if (validateFormData(data)) {
        localStorage.setItem(`formData_${formId}`, JSON.stringify(data));
    } else {
        console.error('Невірні дані форми.');
    }
}

function autoFillForm(form) {
    const formId = form.id || 'default'; // Унікальний ідентифікатор форми
    const data = JSON.parse(localStorage.getItem(`formData_${formId}`));

    if (data) {
        Object.keys(data).forEach(key => {
            const input = form.querySelector(`[name="${key}"]`);
            if (input) {
                input.value = data[key];
            }
        });
    }
}



// Додаємо обробник подій для збереження даних
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    if (form) {
        // Автозаповнення форми при завантаженні
        autoFillForm(form);

        // Збереження даних форми при відправленні
        form.addEventListener('submit', () => saveFormData(form));
    }
});



