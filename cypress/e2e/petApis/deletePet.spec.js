/// <reference types ="cypress" />

describe('DELETE a pet', () => {

    it('should return status 200 with a new pet created', () => {
      //Add New Pet (POST)
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                "id": 0,
                "category": {
                  "id": 0,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "boni"
                  }
                ],
                "status": "pending"
              }
            }).then((res) => {
                cy.log(res.body)
                expect(res.status).to.eq(200)
                expect(res.body.tags[0]).has.property('id',0)
                expect(res.body.tags[0]).has.property('name','boni')
                expect(res.body).has.property('status', 'pending')
            }).then((res) => {
              const petId = res.body.tags[0].id
              const petName = res.body.tags[0].name
              cy.log("Pet Id is: " + petId + "and pet name is: " + petName)
              //Delete a pet (DELETE)
              cy.request({
                method: 'DELETE',
                url: 'https://petstore.swagger.io/v2/pet/' + petId,
              }).then((res) => {
                expect(res.status).to.eq(200)
              })
            })
        })
    })