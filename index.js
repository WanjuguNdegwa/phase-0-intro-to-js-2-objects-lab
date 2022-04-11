const employee = { name: "Sam"}

function updateEmployeeWithKeyAndValue(obj, key, val) {
    return {...obj, [key]: val}
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj;
}

function deleteFromEmployeeByKey(employee, key) {
    const obj = {...employee};
    delete obj[key];
    return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}