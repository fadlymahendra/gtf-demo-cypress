import 'cypress-iframe';

const buyBotton = '.buy'
const checkoutButton = '.cart-checkout'
const midtransIframe = '#snap-midtrans'
const iframe3ds = '.iframe-3ds'
const creditDebitPayment = 'Credit/debit card'
const cardNumberField = '[placeholder="1234 1234 1234 1234"]'
const cardExpiryField = '#card-expiry'
const cardCvvField = '#card-cvv'
const payNowButton = 'Pay now'
const otpField = '#otp'
const successButton = '.btn-success'
const successPaymentInfo = 'Payment successful'
const cardWarning = '.card-warning'

describe('Checkout with valid credit card', () => {
  it('Checkout using credit card', () => {
    cy.visit('https://demo.midtrans.com/')
    cy.get(buyBotton).click()
    cy.get(checkoutButton).click()
    cy.iframe(midtransIframe).within(() => {
      cy.contains('a.list', creditDebitPayment).click()
      cy.get(cardNumberField).type('4811111111111114')
      cy.get(cardExpiryField).type('0125')
      cy.get(cardCvvField).type('123')
      cy.contains(payNowButton).click()
      cy.wait(5000)
      cy.iframe(iframe3ds).within(() => {
        cy.get(otpField).type('112233')
        cy.get(successButton).click()
      })    
      cy.contains(successPaymentInfo).should('be.visible')
    })
  })
})

describe('Checkout with invalid credit card information', () => {
  it('Checkout using expired credit card', () => {
    cy.visit('https://demo.midtrans.com/')
    cy.get(buyBotton).click()
    cy.get(checkoutButton).click()
    cy.iframe(midtransIframe).within(() => {
      cy.contains('a.list', creditDebitPayment).click()
      cy.get(cardNumberField).type('4811111111111114')
      cy.get(cardExpiryField).type('0122')
      cy.get(cardCvvField).click()
      cy.get(cardWarning).should('have.text', 'Invalid expiry.')
    })
  }),
  it('Checkout using invalid Credit card number', () => {
    cy.visit('https://demo.midtrans.com/')
    cy.get(buyBotton).click()
    cy.get(checkoutButton).click()
    cy.iframe(midtransIframe).within(() => {
      cy.contains('a.list', creditDebitPayment).click()
      cy.get(cardNumberField).type('0102 0202 0202 0202')
      cy.get(cardExpiryField).click()
      cy.get(cardWarning).should('have.text', 'Make sure your card info is correct.')
    })
  })
})