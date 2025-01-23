let employees = [];
const messageDiv = document.getElementById('message');
const employeeList = document.getElementById('employeeList');

document.getElementById('addEmployee').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const age = document.getElementById('age').value.trim();

    if (!name || !profession || !age) {
        showMessage('Error :Please Make sure All the field before adding in an emplyee', 'error');
        return;
    }

    const newEmployee = {
        id: Date.now(),
        name,
        profession,
        age: parseInt(age)
    };

    employees.push(newEmployee);
    showMessage('Employee added successfully!', 'success');
    renderEmployees();

    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
});

function showMessage(message, type) {
    messageDiv.textContent = message;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 3000);
}

function renderEmployees() {
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <p><strong>Name:</strong> ${employee.name}</p>
            <p><strong>Profession:</strong> ${employee.profession}</p>
            <p><strong>Age:</strong> ${employee.age}</p>
            <button class="btn-delete" onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    showMessage('Employee deleted successfully!', 'success');
    renderEmployees();
}