class DatabasePage {
    get inputSearch() { return cy.get('input[type="text"]') }
    get btnCreate() { return cy.get('button').contains('Criar') }
    get btnReset() { return cy.get('button').find('svg').parent() } 
    get listBanks() { return cy.get('.Nome-do-banco-de-dados') } 
    get archiveIcon() { return cy.get('svg').find('path[d*="M18"]').parent() } 

    searchBank(name) {
        this.inputSearch.clear().type(name + '{enter}');
    }
}
export default new DatabasePage();
