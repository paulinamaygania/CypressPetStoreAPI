/// <reference types ="cypress" />

describe('PUT user', () => {

    it('should return status 200 with new users data created', () => {
      //Add New User (POST)
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            body: [
                {
                  "id": 2,
                  "username": "useruser",
                  "firstName": "Michele",
                  "lastName": "Thalia",
                  "email": "michele.thal@gmail.com",
                  "password": "password123",
                  "phone": "0832433333",
                  "userStatus": 0
                }
              ]
            }).then((res) => {
                cy.log(res.body)
                expect(res.status).to.eq(200)
            }).then((res) => {
                //Update user name (PUT)
                cy.request({
                  method: 'PUT',
                  url: 'https://petstore.swagger.io/v2/user/MicheleThalia',
                  body: {
                    "id": 1,
                    "username": "MicheleThalia",
                    "firstName": "Michele",
                    "lastName": "Thalia",
                    "email": "michele.thal@gmail.com",
                    "password": "password123",
                    "phone": "0832433333",
                    "userStatus": 0
                  }
                }).then((res) => {
                  expect(res.status).to.eq(200)
                })
              })
        })
    })