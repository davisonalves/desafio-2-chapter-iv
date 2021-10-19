/// <reference types="cypress" />
import * as faker from 'faker';

describe('Cadastro de clientes', () => {
    let user = {
        email: faker.internet.email(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        passwd: faker.internet.password()
    };
    it('Quando eu informar os dados do cliente e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('/index.php?controller=authentication&back=my-account');

        /*Minhas asserções estavam dando erro algumas vezes por essa requisição demorar, então interceptei ela e fiz um wait para que antes das asserções o cypress espere essa requisição acabar*/
        cy.intercept({
            method: 'POST', 
            pathname: '/index.php'
        }).as('postIndex');

        /* YOUR PERSONAL INFORMATION */
        cy.get('input[name=email_create]').type(user.email);
        cy.get('button#SubmitCreate').click();

        cy.wait('@postIndex');
        cy.url().should('contain', 'account-creation');

        cy.get('input#id_gender1').check();
        cy.get('input#customer_firstname').type(user.firstName);
        cy.get('input#customer_lastname').type(user.lastName);

        /*O email que veio preenchido deve ser o mesmo que eu preenchi na tela anterior*/
        cy.get('input[name=email]').should('have.value',user.email);

        cy.get('input#passwd').type(user.passwd);
        cy.get('select#days').select('26');
        cy.get('select#months').select('February');
        cy.get('select#years').select('2001');

        cy.get('input[type=checkbox]').check();

        /* YOUR ADDRESS */

        cy.get('input#company').type(faker.company.companyName());
        cy.get('input#address1').type(faker.address.streetAddress());
        cy.get('input#city').type(faker.address.city());
        cy.get('input#address2').type(faker.address.secondaryAddress());
        cy.get('input#postcode').type('01352'); //tentei colocar esse dado com Faker mas ele sempre gera um zipcode maior do que 5 dígitos e a página da erro ao finalizar cadastro alegando que é um zipcode fora do formato esperado, então mockei um zipcode
        cy.get('select#id_country').select('United States');
        cy.get('select#id_state').select(faker.address.state());
        cy.get('input#phone_mobile').type(faker.phone.phoneNumberFormat());
        cy.get('input#alias').type(faker.address.streetAddress());
        cy.get('button#submitAccount').click();

        /*Quando finalizo meu cadastro, deve aparecer um botão para conferir minhas informações*/
        cy.get('a[title=Information]').should('be.visible');

    });
});