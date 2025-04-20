const validateFirstInitial = require("./main.js");
const formatBirthMonth = require("./main.js");

test("Returns error if the first initial is not a letter, else returns uppercase letter", () => {
    expect(validateFirstInitial.validate(" ")).toThrow("First initial must be a letter");
    expect(validateFirstInitial.validate(".")).toThrow("First initial must be a letter");
    expect(validateFirstInitial.validate("1")).toThrow("First initial must be a letter");
    expect(validateFirstInitial.validate("a")).toBe("A");
    expect(validateFirstInitial.validate("A")).toBe("A");
});

test("Birth months typed in with leading 0 are changed, others remain the same", () => {
    expect(formatBirthMonth.format(01)).toBe(1);
    expect(formatBirthMonth.format(1)).toBe(1);
    expect(formatBirthMonth.format(11)).toBe(11);
});
