const errorMessages = {
  name: "Ad Soyad en az 3 karakter olmalıdır",
  extras : ['En az 4 malzeme seçmelisiniz','En fazla 10 malzeme seçebilirsiniz'],
};

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})


describe('Home Page Tests', () => {
 it('is ACIKTIM button is work', () => {
    //Arrange 
     cy.visit('http://localhost:5173/')
    //Act
     cy.get('[data-cy="home-button"]').click()
    //Assert
     cy.contains('Position Absolute Acı Pizza')
  })
})

describe('Order Page Tests', () => {
    //Arrange
    beforeEach(()=>{
        cy.visit('http://localhost:5173/')
        cy.get('[data-cy="home-button"]').click()
    })
 it('Name input not pass to test for less than 3 chars', () => {
   //Act
     cy.get('[data-cy="name-input"]').type('sr')
    //Assert
     cy.contains(errorMessages.name)
  })
  it('if we select less than 4 extras will show error message', () => {
   //Act
     cy.get('input[type="checkbox"]').eq(2).check({ force: true })
    //Assert
     cy.contains(errorMessages.extras[0])
  })
  it('if we select more than 10 extras will show error message', () => {
   //Act
   for(let i=0 ; i<=10 ;i++){
     cy.get('input[type="checkbox"]').eq(i).check({ force: true })
   }
    //Assert
     cy.contains(errorMessages.extras[1])
  })

   it('if all inputs have correct validate then is form submit', () => {
   //Act
      //Boyut
   cy.get('[data-cy="Küçük"]').check({ force: true })
      //Hamur
    cy.get('select').select('İnce')
      //Extras
   for(let i=0 ; i<4 ;i++){
     cy.get(`[data-cy='extras-${i}']`).check({ force: true })
   }
      //Ad soyad 
      cy.get('[data-cy="name-input"]').type('sirma')
      //Submit the form 
      cy.get('[data-cy="order-button"]').click()
    //Assert
     cy.contains('TEBRİKLER!')
  })
})