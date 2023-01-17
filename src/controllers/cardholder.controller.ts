import { Request, Response } from "express";
import cardholderService from "../services/cardholder.service";

export default {

    verify: (req: Request, res: Response) => {
        cardholderService.verify_start(req.body.country_code, req.body.phone_number);
        return res.status(200).send({});
    },

    verifyConfirm: (req: Request, res: Response) => {
        cardholderService.verify_confirm(req.body.verification_id, req.body.secret);
        return res.status(200).send({});
    },

    signUp: (req: Request, res: Response) => {
        let country_code: string    = req.body.country_code;
        let phone_number: string    = req.body.phone_number;
        let verification_id: string = req.body.verification_id;
        let document_id: string     = req.body.document_id;
        let country: string         = req.body.country;
        let document_type: string   = req.body.document_type;
        let email: string           = req.body.email;
        let birthday: string        = req.body.birthday;
        let first_name: string      = req.body.first_name;
        let last_name: string       = req.body.last_name;
        let street1: string         = req.body.street1;
        let street2: string         = req.body.street2;
        let locality: string        = req.body.locality;
        let region: string          = req.body.region;
        let postal_code: string     = req.body.postal_code;

        cardholderService.register(country_code, phone_number, verification_id, document_id, country, document_type, email, birthday, first_name, last_name, street1, street2, locality, region, postal_code);
     
        return res.status(200).send({});
    },

    agreement: async (req: Request, res: Response) => {
        let session_id: string = req.body.session_id;
        let workflow_object_id: string = req.body.workflow_object_id;
        let action_id: string = req.body.action_id;

        await cardholderService.agree(session_id, workflow_object_id, action_id);
        return res.status(200).send({});
    },

    agreementConfirm: (req: Request, res: Response) => {
        req.body.session_id, req.body.application_id
        return res.status(200).send({});
    },

}