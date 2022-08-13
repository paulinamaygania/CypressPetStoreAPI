/// <reference types ="cypress" />

describe('POST pet to the store', () => {

    it('should return status 200 with a new pet created', () => {
      //Add New Pet (POST)
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                "id": 2,
                "category": {
                  "id": 2,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 2,
                    "name": "coki"
                  }
                ],
                "status": "available"
              }
            }).then((res) => {
                cy.log(res.body)
                expect(res.status).to.eq(200)
                expect(res.body.tags[0]).has.property('id',2)
                expect(res.body.tags[0]).has.property('name','coki')
            }).then((res) => {
              const petId = res.body.tags[0].id
              const petName = res.body.tags[0].name
              cy.log("Pet Id is: " + petId + " and pet name is: " + petName)
              //Get Pet by Id (GET)
              cy.request({
                method: 'GET',
                url: 'https://petstore.swagger.io/v2/pet/' + petId
              }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.tags[0]).has.property('id', petId)
                expect(res.body.tags[0]).has.property('name',petName)
              })
            })
        })
    })