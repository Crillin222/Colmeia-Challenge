import loginPage from '../../support/pages/LoginPage';
import dashboardPage from '../../support/pages/DashboardPage';

describe('Login Suite', () => {
    
    beforeEach(() => {
        cy.visit('/');
        cy.fixture('users').as('usersData');
    });
    
    context('Normal Scenario', () => {
        it('should login successfully with valid credentials', function() {
            const user = this.usersData.validUser;
            loginPage.login(user.email, user.password);
            dashboardPage.validateSuccessfulLogin();
        });
    });

    context('Error Scenarios', () => {
        it('should validate mandatory field error', () => {
            loginPage.triggerMandatoryFieldError('email');
            loginPage.emailErrorMessage
                .should('be.visible')
                .and('contain', 'Este campo é obrigatório');
        });
    });
});
