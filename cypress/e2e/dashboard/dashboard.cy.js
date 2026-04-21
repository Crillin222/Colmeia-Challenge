import loginPage from '../../support/pages/LoginPage';
import dashboardPage from '../../support/pages/DashboardPage';
import databasePage from '../../support/pages/DatabasePage';

describe('Dashboard Suite', () => {
    
    beforeEach(function() {
        cy.visit('/');
        cy.fixture('users').as('usersData').then((users) => {
            loginPage.login(users.validUser.email, users.validUser.password);
            cy.contains('button', 'Continuar').click();
        });
    });

    context('Database Management', () => {
        it('should validate create database modal elements', () => {
            dashboardPage.accessDatabase();
            databasePage.createBtn.click();
            databasePage.addNewItemLabel.should('be.visible');
            databasePage.itemNameInput.should('be.visible');
            databasePage.saveBtn.should('be.visible');
        });

        it('should persist a new database after re-login', function() {
            const user = this.usersData.validUser;
            const dbName = 'Persistence-Test-' + Date.now();

            dashboardPage.accessDatabase();
            databasePage.createDatabase(dbName);

            cy.visit('/');
            loginPage.login(user.email, user.password);
            cy.contains('button', 'Continuar').click();

            dashboardPage.accessDatabase();
            databasePage.searchDatabase(dbName);
            databasePage.databaseCells.contains(new RegExp("^" + dbName + "$", "g")).should('be.visible');
        });

        it('should archive a database and verify it in archive mode', () => {
            const dbName = 'Archive-Test-' + Date.now();
            dashboardPage.accessDatabase();
            databasePage.createDatabase(dbName);
            
            databasePage.searchDatabase(dbName);
            databasePage.archiveFirstDatabase();
            
            databasePage.tableBody.contains(new RegExp("^" + dbName + "$", "g")).should('not.exist');
            
            databasePage.enterArchiveMode();
            databasePage.databaseCells.contains(new RegExp("^" + dbName + "$", "g")).should('be.visible');
        });

        it('should delete a database successfully', () => {
            const dbName = 'Delete-Test-' + Date.now();
            dashboardPage.accessDatabase();
            databasePage.createDatabase(dbName);
            
            databasePage.searchDatabase(dbName);
            databasePage.databaseCells.contains(new RegExp("^" + dbName + "$", "g")).should('be.visible');
            
            databasePage.deleteFirstDatabase();
            
            databasePage.tableBody.contains(new RegExp("^" + dbName + "$", "g")).should('not.exist');
        });

        it('should refresh the database list', () => {
            dashboardPage.accessDatabase();
            databasePage.resetBtn.click();
            databasePage.tableBody.should('be.visible');
        });
    });

    context('Navigation', () => {
        it('should display content on Colmeia Forms page', () => {
            dashboardPage.accessForms();
            cy.get('main').should('not.be.empty');
        });

        it('should have a functional candidate button', () => {
            dashboardPage.candidateBtn.should('be.visible').click();
            cy.url().should('include', '/candidate');
        });
    });
});
