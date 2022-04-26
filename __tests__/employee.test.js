const Employee = require("../lib/Employee")




// name. create new named employee
test("set employee name", () => {
    const name = "Mark"

    const employee = new Employee(name)

    expect(employee.name).toBe(name)
})
// id
test("set employee id", () => {
    const employee = new Employee("Robert", "89")



    expect(employee.id).toBe("89")
})

// email
test("set employee email", () => {
    const employee = new Employee("Robert", "89", "rbert89@gmail.com")



    expect(employee.email).toBe("rbert89@gmail.com")
})

// getName()
test("get employee name", () => {
    const employee = new Employee("Robert")



    expect(employee.getName()).toBe("Robert")
})

// getId()
test("get employee id", () => {
    const employee = new Employee("Robert", "89")



    expect(employee.getId()).toBe("89")
})

// getEmail()
test("get employee email", () => {
    const employee = new Employee("Robert", "89", "rbert89@gmail.com")



    expect(employee.getEmail()).toBe("rbert89@gmail.com")
})

// getRole()
test("get employee role", () => {
    const employee = new Employee("Robert", "89", "rbert89@gmail.com")



    expect(employee.getRole()).toBe("employee")
})