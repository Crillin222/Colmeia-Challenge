class LoginPage {
    get emailInput() { return cy.get('#email') }
    get passwordInput() { return cy.get('#password') }
    get loginBtn() { return cy.get('button[type="submit"]') }
    get forgotPasswordLink() { return cy.contains('a', 'Esqueceu sua senha?') }
    
    get emailErrorMessage() { 
        return cy.get('#email').parent().parent().find('.text-red-500') 
    }
    
    get passwordErrorMessage() { 
        return cy.get('#password').parent().parent().find('.text-red-500') 
    }

    login(email, password) {
        if (email) this.emailInput.type(email);
        if (password) this.passwordInput.type(password);
        this.loginBtn.click();
    }

    triggerMandatoryFieldError(field) {
        if (field === 'email') {
            this.emailInput.focus().blur();
        } else {
            this.passwordInput.focus().blur();
        }
    }
    
}

export default new LoginPage();
