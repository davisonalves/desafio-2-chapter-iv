/// <reference types="cypress" />
import * as faker from 'faker';

describe('Cadastro de clientes', () => {
    let user = {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        passwd: faker.internet.password()
    }
    it('Quando eu informar os dados do cliente e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');

        cy.get('input[name=email_create]').type(user.email);
        cy.get('button#SubmitCreate').click();
        
        cy.url().should('contain', 'account-creation');

        cy.get('input[type=radio]').check('Mr.');
        cy.get('input#customer_firstname').type(user.firstName);
        cy.get('input#customer_lastname').type(user.lastName);
        cy.get('input#passwd').type(user.passwd);
        cy.get('select#days').select('26');
        cy.get('select#months').select('February ');
        cy.get('select#years').select('2001');


        /*
        */
    });
});