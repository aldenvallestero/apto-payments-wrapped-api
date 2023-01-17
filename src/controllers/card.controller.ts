import { Request, Response } from "express";
import cardService from "../services/card.service";

export default {

    createCard: (req: Request, res: Response) => {
        cardService.create(req.body.session_id);
        return res.status(200).send({});
    },
    issueCard: (req: Request, res: Response) => {
        cardService.issue(req.body.session_id, req.body.application_id);
        return res.status(200).send({});
    },
    shipPhysicalCard: (req: Request, res: Response) => {
        cardService.shipPhysicalCard(req.body.session_id, req.body.account_id);
        return res.status(200).send({});
    },
    retrieveCardTransactions: (req: Request, res: Response) => {
        cardService.transaction(req.body.session_id, req.body.account_id);
        return res.status(200).send({});
    },

}