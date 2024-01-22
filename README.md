# Cypress Automation Test Framework
This repository contains an automation test framework using Cypress for automating the checkout scenario using a credit card.

## Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)

## Installation    
Clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
npm install
```

## Running the Tests
To run directly via command line using Electron headless browser 
```bash
npx cypress run
```
To run and inspect the element you can run using the Chrome browser
```bash
npx cypress open
```

## Next improvement
This test framework has been created in a very simple manner. For future enhancements, the following actions can be considered:
- Adding valid and invalid scenarios.
- Improve wait mechanism using implicit wait instead of explicit wait
- Adding dotenv capability.
- Creating base functions.
- Organizing tests, pages, and test data.
- Adding integration with BDD Cucumber (optional).
