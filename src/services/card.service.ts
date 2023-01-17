import axios from 'axios';

export default {

    create: async (session_id: string) => {

        await axios({
            method: 'post',
            url: process.env.APTO_BASE_URL + '/user/accounts/apply',
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({ "card_product_id": `${process.env.APTO_CARD_PROGRAM}` })
        })
            .then(result => {
                return result.data;
            })
    },
    
    retrieve: async (session_id: string, account_id: string) => {

        await axios({
            method: 'get',
            url: `${process.env.APTO_BASE_URL}/user/accounts/${account_id}`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type': 'application/json'
            }
        })

            .then((result: any) => {
                return result.data;
            })
    },

    shipPhysicalCard: async (session_id: string, account_id: string) => {

        return await axios({
            method: 'post',
            url: `${process.env.APTO_BASE_URL}/user/accounts/${account_id}/order_physical`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`
            }
        })

            .then(() => {
                return true;
            })

            .catch(() => {
                return false;
            })
    },

    issue: async (session_id: string, application_id: string) => {

        return await axios({
            method: 'post',
            url: process.env.APTO_BASE_URL + '/user/accounts/issuecard', 
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type': 'application/json'
            },
            data: {
                "application_id": `${application_id}`
            }
        })

            .then(result => {
                return result.data;
            })

    },

    transaction: async (session_id: string, account_id: string) => {
        
       return await axios({
            method: 'get',
            url: `${process.env.APTO_BASE_URL}/user/accounts/${account_id}/transactions`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type': 'application/json'
            }
        })

            .then((result: any) => {
                return result.data;
            })
    }
}