describe("appointments", () => {
  it("should book an interview", () => {
    cy.visit("/");
    cy.contains("Monday");
    cy.get(["alt=Add"]).first().click();
  });
});