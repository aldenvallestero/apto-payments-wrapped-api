import { Request, Response } from "express";
import fundService from "../services/fund.service";

export default {

    createFundSource: async (req: Request, res: Response) => {
        fundService.createFundSource(req.body.session_id, req.body.pan, req.body.cvv, req.body.exp_date, req.body.last_four, req.body.postal_code);
    },

    retrieveFundSource: async (req: Request, res: Response) => {
        fundService.retrieveFundSource(req.body.session_id);
    },

    deleteFundSource: async (req: Request, res: Response) => {
        await fundService.deleteFundSource(req.body.session_id, req.body.fund_source_id);
        
    },

    fundSourceMoneyIn: async (req: Request, res: Response) => {

        let session_id: string          = req.body.session_id;
        let funding_source_id: string   = req.body.funding_source_id;
        let balance_id: string          = req.body.balance_id;
        let amount: number              = req.body.amount;

        await fundService.fundSourceMoneyIn(session_id, funding_source_id, balance_id, amount);
    },

}