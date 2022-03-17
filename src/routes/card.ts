import express, { Request, Response } from 'express';
import Card from '../controllers/card';
const router = express.Router();

router

    .post('/', async (req: Request, res: Response) => {

        let card = new Card();
        let card_template = await card.create(req.body.session_id);

        return res.json({
            status: 201,
            message: '',
            data: card_template
        });
    })

    .put('/', async (req: Request, res: Response) => {
        let card = new Card();
        let virtual_card = await card.issue(req.body.session_id, req.body.application_id);
        return res.json({
            status: 200,
            message: 'You can now use your Givers Card!',
            data: virtual_card
        });
    })

    .post('/physical', async (req: Request, res: Response) => {
        let session_id: string = req.body.session_id;
        let account_id: string = req.body.account_id;
        const card = new Card();
        await card.physical(session_id, account_id);
        return res.sendStatus(201);
    })

    .get('/transactions', async (req: Request, res: Response) => {

        let session_id: string = req.body.session_id;
        let account_id: string = req.body.account_id;

        const card = new Card();
        let transactions = await card.transactions(session_id, account_id);

        return res.json({
            status: 200,
            message: '',
            data: transactions
        });
    })

export default router;