/// <reference types ="cypress" />

describe('DELETE user', () => {

    it('should return status 200 with user successfully deleted', () => {
        //Add New User (POST)
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            body: [
                {
                    "id": 5,
                    "username": "usertest5",
                    "firstName": "Noni",
                    "lastName": "Thalia",
                    "email": "noni.thal@gmail.com",
                    "password": "password123",
                    "phone": "0832433333",
                    "userStatus": 0
                }
            ]
        }).then((res) => {
            cy.log(res.body)
            expect(res.status).to.eq(200)
        }).then((res) => {
            //Delete User by Username (DELETE)
            cy.request({
                method: 'DELETE',
                url: 'https://petstore.swagger.io/v2/user/usertest5'
            }).then((res) => {
                expect(res.status).to.eq(200)
            })
        })
    })
})
