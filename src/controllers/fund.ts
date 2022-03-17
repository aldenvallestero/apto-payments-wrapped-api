import axios from "axios";

class Fund {

    async create(session_id: string, pan: string, cvv: string, exp_date: string, last_four: string, postal_code: string) {

        await axios({
            method: 'post',
            url: 'https://api.aptopayments.com/v1/payment_sources',
            headers: {
                'Api-Key':          `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization':    `Bearer ${session_id}`,
                'Content-Type':     'application/json'
            },
            data: JSON.stringify({
                "description": "Preferred Funding Source",
                "type": "card",
                "card": {
                    "pan":          pan,
                    "cvv":          cvv,
                    "exp_date":     exp_date,
                    "last_four":    last_four,
                    "postal_code":  postal_code
                }
            })
        });

        return;
    }

    async retrieve(session_id: string) {

        await axios({
            method: 'get',
            url: `https://api.aptopayments.com/v1/payment_sources`,
            headers: {
                'Api-Key':          `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization':    `Bearer ${session_id}`,
                'Content-Type':     'application/json',
            }
        })

    }

    async delete(session_id: string, fund_source_id: string) {

        await axios({
            method: 'delete',
            url: `https://api.aptopayments.com/v1/payment_sources/${fund_source_id}`,
            headers: {
                'Api-Key':          `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization':    `Bearer ${session_id}`,
                'Content-Type':     'application/json'
            }
        });
    }

    async push(session_id: string, funding_source_id: string, balance_id: string, amount: number) {
        
        await axios({
            method: 'post',
            url: `https://api.aptopayments.com/payment_sources/${funding_source_id}/push`,
            headers: {
                'Api-Key':          `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization':    `Bearer ${session_id}`,
                'Content-Type':     'application/json'
            },
            data: JSON.stringify({
                amount: { currency: "USD", amount },
                balance_id
            })
        })

    }

}

export default Fund;