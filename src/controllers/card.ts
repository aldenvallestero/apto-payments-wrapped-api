import axios from 'axios';

class Card {

    async create(session_id: string) {

        await axios({
            method: 'post',
            url: 'https://api.aptopayments.com/v1/user/accounts/apply',
            headers: {
                'Api-Key':       `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type':  'application/json',
            },
            data: JSON.stringify({ "card_product_id": `${process.env.APTO_CARD_PROGRAM}` })
        })
            .then(result => {
                return result.data;
            })
    }
    
    async retrieve(session_id: string, account_id: string) {

        await axios({
            method: 'get',
            url: `https://api.aptopayments.com/v1/user/accounts/${account_id}`,
            headers: {
                'Api-Key':          `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization':    `Bearer ${session_id}`,
                'Content-Type':     'application/json'
            }
        })

            .then((result: any) => {
                return result.data;
            })
    }

    async physical(session_id: string, account_id: string) {

        await axios({
            method: 'post',
            url: `https://api.aptopayments.com/v1/user/accounts/${account_id}/order_physical`,
            headers: {
                'Api-Key':          `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization':    `Bearer ${session_id}`
            }
        });

        return;
    }

    async issue(session_id: string, application_id: string) {

        await axios({
            method: 'post',
            url: 'https://api.aptopayments.com/v1/user/accounts/issuecard', 
            headers: {
                'Api-Key':          `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization':    `Bearer ${session_id}`,
                'Content-Type':     'application/json'
            },
            data: JSON.stringify({ "application_id": `${application_id}` })
        })

            .then(result => {
                return result.data;
            })

    }

    async transactions(session_id: string, account_id: string) {
        
        await axios({
            method: 'get',
            url: `https://api.aptopayments.com/v1/user/accounts/${account_id}/transactions`,
            headers: {
                'Api-Key':          `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization':    `Bearer ${session_id}`,
                'Content-Type':     'application/json'
            }
        })

            .then((result: any) => {
                return result.data;
            })
    }
}

export default Card;