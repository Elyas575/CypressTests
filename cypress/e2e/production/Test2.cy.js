describe("suite name", () => {
    it("Login and verify home page content", () => {
        cy.visit("https://app.im-vitro.com/")
        // https://app.im-vitro.com/ production
        // 

        // login with (tancho+us+firsttest@im-vitro.com, elias@im-vitro.com)
        cy.get('#email-input').type("elias@im-vitro.com")
        cy.get('#password-input').type("Night-watch11")
        cy.get('button[type="submit"]').click()
        cy.contains('span[data-v-7a7650e0]', 'Log out', { timeout: 20000 }).should('be.visible')
   // the name will be:
      // verify table content
        cy.get("p.title-1.widget-header", { timeout: 20000 }).should('be.visible').should('have.text','New treatments detected in TLS')
        cy.get(".column-id", { timeout: 20000 }).should('be.visible').should('have.text', 'ID');
        cy.get(".column-name", { timeout: 20000 }).should('be.visible').should('have.text', 'Name');
        cy.get(".column-birthdate", { timeout: 20000 }).should('be.visible').should('have.text', 'Date of birth');
        cy.get(".column-date", { timeout: 20000 }).should('be.visible').should('have.text', 'Egg retrieval Date');
        cy.get(".column-evaluation", { timeout: 20000 }).should('be.visible').should('have.text', 'ImVitro evaluation');
        
    })
})