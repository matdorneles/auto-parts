describe('user routes testing', () => {
  context('GET /user/auth', () => {
    it('should return create or user admin already exists', () => {
      cy.request({
        method: 'GET',
        url: 'http://localhost:3333/user/auth'
      })
      .should((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
      });
    });
  });

  context('POST /user/auth', () => {
    it('should return 200 and authenticated', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3333/user/auth',
        body: {
          "email": Cypress.env('email'),
          "password": Cypress.env('password')
        }
      })
      .should((response) => {
        expect(response.status).to.eq(200);
        cy.log(JSON.stringify(response.body));
        const token = response.body.token;
        cy.log(token);
      })
    });
  });

  context('POST /user/auth', () => {
    it('should return status code 401 when sending wrong email', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3333/user/auth',
        body: {
          "email": "admin@wrong.com",
          "password": "admin123"
        },
        failOnStatusCode: false
      })
      .should((response) => {
        expect(response.status).to.eq(401);
        expect(response.body).to.eq('User/Password is incorrect');
      });
    });
  });

  context('POST /user/auth', () => {
    it('should return status code 401 when sending wrong password', () => {
      cy.request({
        method: 'POST',
        url: 'http://localhost:3333/user/auth',
        body: {
          "email": "admin@email.com",
          "password": "wrongpass"
        },
        failOnStatusCode: false
      })
      .should((response) => {
        expect(response.status).to.eq(401);
        expect(response.body).to.eq('User/Password is incorrect');
      });
    });
  });
});