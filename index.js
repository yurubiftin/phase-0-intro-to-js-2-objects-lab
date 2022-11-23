// Write your solution in this file!
const employee = {
  name: "Yurub",
  streetAddress: "south b"
}
  function updateEmployeeWithKeyAndValue( employee, value ,key){
    const newEmployee={...employee};
    newEmployee[key]=value;
    return newEmployee
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(key , employee ,value ){
    employee[key]=value;
    return employee
  }
  function deleteFromEmployeeByKey(employee, key){
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee
  }
  function destructivelyDeleteFromEmployeeByKey(key,employee){
    delete employee[key];
    return employee;
  }