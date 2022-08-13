/// <reference types ="cypress" />

describe('POST user', () => {

    it('should return status 200 with new users data created', () => {
      //Add New User (POST)
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            body: [
                {
                  "id": 1,
                  "username": "usertest1",
                  "firstName": "Niki",
                  "lastName": "Thalia",
                  "email": "niki.thal@gmail.com",
                  "password": "password123",
                  "phone": "0832433333",
                  "userStatus": 0
                }
              ]
            }).then((res) => {
                cy.log(res.body)
                expect(res.status).to.eq(200)
            })
        })
    })