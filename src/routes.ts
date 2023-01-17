import express from 'express';
import cardController from './controllers/card.controller';
import cardholderController from './controllers/cardholder.controller';
import fundController from './controllers/fund.controller';

export default express.Router()

    // card
    .post('/', cardController.createCard)
    .put('/', cardController.issueCard)
    .post('/', cardController.shipPhysicalCard)
    .get('/', cardController.retrieveCardTransactions)

    // cardholder
    .post('/verify/start', cardholderController.verify)
    .put('/verify/confirm', cardholderController.verifyConfirm)
    .post('/signup', cardholderController.signUp)
    .post('/agreement', cardholderController.agreement)
    .put('/agreement', cardholderController.agreementConfirm)

    // fund
    .post('/fund', fundController.createFundSource)
    .get('/fund', fundController.retrieveFundSource)
    .delete('/fund', fundController.deleteFundSource)
    .post('/fund/in', fundController.fundSourceMoneyIn)