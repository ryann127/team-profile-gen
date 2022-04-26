const Intern = require("../lib/Intern");

const intern = new Intern("Kelly", "90", "kkapur@gmail.com", "Harvard")

test("set school name", () => {
    expect(intern.school).toBe("Harvard")
})

test("get school name", () => {
    expect(intern.getSchool()).toBe("Harvard")
})