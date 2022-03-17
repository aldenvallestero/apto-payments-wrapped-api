import express, { Request, Response } from 'express';
import Fund from '../controllers/fund';
const router = express.Router();

router

    .post('/push', async (req: Request, res: Response) => {

        let session_id: string          = req.body.session_id;
        let funding_source_id: string   = req.body.funding_source_id;
        let balance_id: string          = req.body.balance_id;
        let amount: number              = req.body.amount;

        const fund = new Fund();
        await fund.push(session_id, funding_source_id, balance_id, amount);

        return res.sendStatus(201);
    })
    
    .post('/', async (req: Request, res: Response) => {

        let session_id: string  = req.body.session_id;
        let pan: string         = req.body.pan;
        let cvv: string         = req.body.cvv;
        let exp_date: string    = req.body.exp_date;
        let last_four: string   = req.body.last_four;
        let postal_code: string = req.body.postal_code;

        const fund = new Fund();
        await fund.create(session_id, pan, cvv, exp_date, last_four, postal_code);

        return res.sendStatus(201);
    })
    
    .get('/', async (req: Request, res: Response) => {

        const fund = new Fund();
        const fund_source = fund.retrieve(req.body.session_id);

        return res.json({
            status: 200,
            message: '',
            data: fund_source
        });
    })
    
    .delete('/', async (req: Request, res: Response) => {

        const fund = new Fund();
        await fund.delete(req.body.session_id, req.body.fund_source_id);
        
        return res.sendStatus(202);
    })

export default router;