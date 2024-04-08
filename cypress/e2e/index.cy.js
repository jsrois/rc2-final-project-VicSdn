describe('Index Page Test', () => {
    it('should display the correct title and description', () => {
        cy.title().should('eq', 'Cangas Cup Futsal 2024')
        cy.get('meta[name="description"]').should('have.attr', 'content', 'Bienvenido a las Cangas Cup 2024, un fin de semana que se te pasará volando')
    })

    it('should have a black background color', () => {
        cy.get('body').should('have.css', 'background-color', 'rgb(243, 244, 250)')
    })
})
