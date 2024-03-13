const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' },
    { id: 4, name: 'Nick Jones', age: 35, department: 'Marketing', salary: 80000, specialization: 'C#' },
    { id: 5, name: 'Andrew Webb', age: 35, department: 'HR', salary: 50000, specialization: 'Javascript' },
    { id: 6, name: 'Jessica Lewis', age: 35, department: 'PR', salary: 70000, specialization: 'C++' },
    //... More employee records can be added here
  ];

 // Function to display all employees
function displayEmployees() {
    employeeDisplay(employees);
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    employeeDisplay(hrEmployees);
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        employeeDisplay(foundEmployee);
    }
    else{
        employeeDisplay(0);
    }
}

function employeeDisplay(employees) {
    displayString = '';
    if (employees === 0) {
        displayString = 'no employee has been found with this ID';
    }
    else if (employees.length == undefined) {
        displayString = `<p>${employees.id}: ${employees.name}: ${employees.name} - ${employees.department} - $${employees.salary} - ${employees.specialization}</p>`;
    }
    else {
        displayString = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    }
    document.getElementById('employeesDetails').innerHTML = displayString;
}

function findEmployeeBySpecialization(specialization) {
    const foundEmployees = employees.filter(employee => employee.specialization === specialization);
    if (foundEmployees) {
        employeeDisplay(foundEmployees);
    }
    else {
        employeeDisplay(0);
    }

}