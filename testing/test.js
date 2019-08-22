test("pin code must consist of only numbers", () => {
    expect(validPin("abcd")).toBe(false);
    expect(validPin("1234")).toBe(true);
    expect(validPin("false")).toBe(false);
});

test("pin code must be 4 digits long", () => {
    expect(validPin("12344")).toBe(false);
    expect(validPin("1234")).toBe(true);
    expect(validPin("123")).toBe(false);
});

test("pin code's last digit should be even", () => {
    expect(validPin("1233")).toBe(false);
    expect(validPin("4907")).toBe(false);
    expect(validPin("7898")).toBe(true);
    expect(validPin("0026")).toBe(true);
    expect(validPin("1112")).toBe(true);
});

test("pin should have at least two different digits", () => {
    expect(validPin("0000")).toBe(false);
    expect(validPin("2222")).toBe(false);
    expect(validPin("4444")).toBe(false);
    expect(validPin("0808")).toBe(true);
    expect(validPin("1212")).toBe(true);
})

test("pin code's digits should add up to at least 5", () => {
    expect(validPin("1002")).toBe(false);
    expect(validPin("2002")).toBe(false);
    expect(validPin("0004")).toBe(false);
    expect(validPin("0100")).toBe(false);
    expect(validPin("1112")).toBe(true);
})

