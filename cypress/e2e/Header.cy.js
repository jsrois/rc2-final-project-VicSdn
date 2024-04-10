describe("Header responsive behavior", () => {
    beforeEach(() => {
        cy.visit("/"); 
    });

    it("Changes header on small screen", () => {
        cy.get("#menuMobileContent").should("not.be.visible");

        cy.get("#menuButton").click();

        cy.get("#menuMobileContent").should("be.visible");

        cy.get("#innerMenuButton").click();

        cy.get("#menuMobileContent").should("not.be.visible");
    });
});
