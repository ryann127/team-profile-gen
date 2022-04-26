const Manager = require("../lib/Manager");

const manager = new Manager("Kelly", "90", "kkapur@gmail.com", "5559088989")

test("set office number", () => {
    expect(manager.officeNumber).toBe("5559088989")
})

test("get office number", () => {
    expect(manager.getOfficeNumber()).toBe("5559088989")
})