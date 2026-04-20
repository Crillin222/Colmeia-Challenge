class DashboardPage {
    get campaignMenu() { return cy.get('a[routerlink="/dashboard/campanha"]') }
    get databaseMenu() { return cy.contains('Bancos de dados') }
    get formsMenu() { return cy.contains('Colmeia Forms') }
    get candidateBtn() { return cy.contains('Candidato') }

    accessDatabase() {
        this.campaignMenu.click();
        this.databaseMenu.click();
    }

    accessForms() {
        this.campaignMenu.click();
        this.formsMenu.click();
    }

    validateSuccessfulLogin() {
        cy.url().should('include', '/dashboard');
        this.campaignMenu.should('be.visible');
    }
}

export default new DashboardPage();
