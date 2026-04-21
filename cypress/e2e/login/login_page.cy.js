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

        it('should forgot password button be functional', () => {
            loginPage.forgotPasswordLink
                .should('be.visible');
            loginPage.forgotPasswordLink
                .click();
            cy.url().should('not.eq', Cypress.config().baseUrl);
        })
    });
    
    context('Error Scenarios', () => {
        it('should login with invalid user', function() {
            const user = this.usersData.invalidUser;
            loginPage.login(user.email, user.password);
            
            loginPage.emailErrorMessage
            .should('be.visible')
            .and('contain', 'Usuário ou senha inválidos');

            loginPage.passwordErrorMessage
            .should('be.visible')
            .and('contain', 'Usuário ou senha inválidos');
        })

        it('should login with invalid mail format', function() {
            const user = this.usersData.incorrectMailFormat;
            loginPage.emailInput.type(user.email).blur()

            loginPage.emailErrorMessage
            .should('be.visible')
            .and('contain', 'Email inválido');
        })
                it('should validate email mandatory field error', () => {
            loginPage.triggerMandatoryFieldError('email');
            loginPage.emailErrorMessage
                .should('be.visible')
                .and('contain', 'Este campo é obrigatório');
        });

        it('should validate password mandatory field error', () => {
            loginPage.triggerMandatoryFieldError('password');
            loginPage.passwordErrorMessage
                .should('be.visible')
                .and('contain', 'Este campo é obrigatório');
        })
    });
});
