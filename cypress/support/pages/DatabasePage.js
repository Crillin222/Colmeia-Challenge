class DatabasePage {
    get searchInput() { return cy.get('input[type="text"]') }
    get createBtn() { return cy.get('button').contains('Criar') }
    get resetBtn() { return cy.get('button').find('svg').parent() } 
    get databaseList() { return cy.get('.Nome-do-banco-de-dados') } 
    get archiveBtn() { return cy.get('svg').find('path[d*="M18"]').parent() } 

    searchDatabase(name) {
        this.searchInput.clear().type(name + '{enter}');
    }
}

export default new DatabasePage();
