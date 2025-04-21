const validateFirstInitial = require("./testing.js");
const formatBirthMonth = require("./testing.js");

test("Returns error if the first initial is not a letter, else returns uppercase letter", () => {
    expect(validateFirstInitial.validate(" ")).toBe("First initial must be a letter");
    expect(validateFirstInitial.validate(".")).toBe("First initial must be a letter");
    expect(validateFirstInitial.validate("1")).toBe("First initial must be a letter");
    expect(validateFirstInitial.validate("a")).toBe("A");
    expect(validateFirstInitial.validate("A")).toBe("A");
});

test("Birth months typed in with leading 0 are changed, others remain the same", () => {
    expect(formatBirthMonth.format(0o1)).toBe("1");
    expect(formatBirthMonth.format(1)).toBe("1");
    expect(formatBirthMonth.format(11)).toBe("11");
});
