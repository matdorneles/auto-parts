describe('category routes testing', () => {
  context('POST /user/auth', () => {
    it('should return status 200 and authenticated', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3333/user/auth',
        body: {
          "email": Cypress.env('email'),
          "password": Cypress.env('password')
        }
      })
      .then((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
        Cypress.env('token', response.body.token);
        cy.log(Cypress.env('token'));
      });
    });
  });

  context('POST /admin/category/create', () => {
    it('should return 200 and create new category', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3333/admin/category/create',
        body: {
          "name": "carroceria"
        },
        headers: {
          Authorization: `Bearer ${Cypress.env('token')}`
        }
      })
      .should((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
      })
    })
  })
})