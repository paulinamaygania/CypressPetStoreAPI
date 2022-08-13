/// <reference types ="cypress" />

describe('GET user by username', () => {

    it('should return status 200 with new users data created', () => {
      //Add New User (POST)
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            body: [
                {
                  "id": 2,
                  "username": "usertest2",
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
            }).then((res) => {
                //Get User by Username (GET)
                cy.request({
                  method: 'GET',
                  url: 'https://petstore.swagger.io/v2/user/usertest2'
                }).then((res) => {
                  expect(res.status).to.eq(200)
                })
              })
        })
    })
