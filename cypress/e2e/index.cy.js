describe("Index Page Components", () => {
    beforeEach(() => {
        cy.visit("/"); // Asegúrate de ajustar la ruta según la configuración de tu proyecto
    });

    it("Displays video component", () => {
        cy.get("main").find("Video").should("exist");
    });

    it("Displays intro component", () => {
        cy.get("main").find("Intro").should("exist");
    });

    it("Displays bento component", () => {
        cy.get("main").find("Bento").should("exist");
    });

    it("Displays previous poster component", () => {
        cy.get("main").find("PreviousPoster").should("exist");
    });

    it("Displays sponsors component", () => {
        cy.get("main").find("Sponsors").should("exist");
    });
});
