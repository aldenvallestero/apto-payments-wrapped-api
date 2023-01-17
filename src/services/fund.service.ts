import axios from "axios";

export default {

    createFundSource: async (session_id: string, pan: string, cvv: string, exp_date: string, last_four: string, postal_code: string) => {
        return await axios({
            method: 'post',
            url: `${process.env.APTO_BASE_URL}/payment_sources`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type': 'application/json',
            },
            data: {
                description: "Preferred Funding Source",
                type: "card",
                card: {
                    pan: pan,
                    cvv: cvv,
                    exp_date: exp_date,
                    last_four: last_four,
                    postal_code: postal_code
                }
            }
        });
    },

    retrieveFundSource: async (session_id: string) => {

        await axios({
            method: 'get',
            url: `${process.env.APTO_BASE_URL}/payment_sources`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type': 'application/json',
            }
        })

    },

    deleteFundSource: async (session_id: string, fund_source_id: string) => {

        await axios({
            method: 'delete',
            url: `${process.env.APTO_BASE_URL}/payment_sources/${fund_source_id}`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type': 'application/json'
            }
        });
    },

    fundSourceMoneyIn: async (session_id: string, funding_source_id: string, balance_id: string, amount: number) => {
        
        await axios({
            method: 'post',
            url: `${process.env.APTO_BASE_URL}/payment_sources/${funding_source_id}/push`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type': 'application/json'
            },
            data: {
                amount: {
                    currency: "USD",
                    amount,
                },
                balance_id
            }
        })

    }

}