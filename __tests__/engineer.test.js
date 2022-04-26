const Engineer = require("../lib/Engineer");

const engineer = new Engineer("Kelly", "90", "kkapur@gmail.com", "kkapur90")

test("set github username", () => {
    expect(engineer.github).toBe("kkapur90")
})

test("get office number", () => {
    expect(engineer.getGithub()).toBe("kkapur90")
})