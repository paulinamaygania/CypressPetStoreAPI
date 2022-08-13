/// <reference types="cypress" />

describe('GET pet by ID', ()=>{

    it('should returns a single pet data', () => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/2'
        }).then((res)=>{
            expect(res.status).to.eq(200)
            cy.log(res.body)      
        })
    })
})