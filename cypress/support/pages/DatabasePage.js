class DatabasePage {
    get searchInput() { return cy.get('input[type="search"]') }
    get createBtn() { return cy.get('button').contains('Criar') }
    get resetBtn() { return cy.get('div.border-gray-200').find('path[d*="M17.65"]').closest('button') } 
    get archiveModeBtn() { return cy.get('div.border-gray-200').find('path[d*="M20 2H4"]').closest('button') }
    get tableBody() { return cy.get('tbody') } 
    get databaseCells() { return cy.get('tbody td') }
    get rowArchiveBtn() { return cy.get('button[title="Arquivar"]') }
    get rowDeleteBtn() { return cy.get('button[title="Apagar"]') }
    get addNewItemLabel() { return cy.contains('Adicionar novo item') }
    get itemNameInput() { return cy.get('input[placeholder="Nome do item"]') }
    get saveBtn() { return cy.contains('button', 'Salvar') }

    searchDatabase(name) {
        this.searchInput.clear().type(name);
        cy.get('button').find('path[d*="M15.5 14"]').closest('button').click();
    }

    createDatabase(name) {
        this.createBtn.click();
        this.itemNameInput.type(name);
        this.saveBtn.click();
    }

    archiveFirstDatabase() {
        this.rowArchiveBtn.first().click();
    }

    deleteFirstDatabase() {
        this.rowDeleteBtn.first().click();
    }

    enterArchiveMode() {
        this.archiveModeBtn.click();
    }
}

export default new DatabasePage();
