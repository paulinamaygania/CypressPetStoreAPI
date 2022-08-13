/// <reference types ="cypress" />

describe('PUT an existing pet', () => {

    it('should return status 200 with a new pet created', () => {
      //Add New Pet (POST)
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            body: {
                "id": 3,
                "category": {
                  "id": 3,
                  "name": "string"
                },
                "name": "doggie",
                "photoUrls": [
                  "string"
                ],
                "tags": [
                  {
                    "id": 3,
                    "name": "mini"
                  }
                ],
                "status": "available"
              }
            }).then((res) => {
                cy.log(res.body)
                expect(res.status).to.eq(200)
                expect(res.body.tags[0]).has.property('id',3)
                expect(res.body.tags[0]).has.property('name','mini')
                expect(res.body).has.property('status', 'available')
            }).then((res) => {
              const petId = res.body.tags[0].id
              const petName = res.body.tags[0].name
              cy.log("Pet Id is: " + petId + " and pet status is: " + (res.body.status))
              //Update an existing pet (PUT)
              cy.request({
                method: 'PUT',
                url: 'https://petstore.swagger.io/v2/pet',
                body: {
                    "id": 3,
                    "category": {
                      "id": 3,
                      "name": "string"
                    },
                    "name": "doggie",
                    "photoUrls": [
                      "string"
                    ],
                    "tags": [
                      {
                        "id": 3,
                        "name": "mini"
                      }
                    ],
                    "status": "sold"
                }
              }).then((res) => {
                expect(res.status).to.eq(200)
                expect(res.body.tags[0]).has.property('id', petId)
                expect(res.body.tags[0]).has.property('name',petName)
                expect(res.body).has.property('status', 'sold')
                cy.log("Pet Id is: " + petId + " and pet status is: " + (res.body.status))
              })
            })
        })
    })