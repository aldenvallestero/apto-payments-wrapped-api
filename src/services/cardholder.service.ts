import axios from 'axios';

export default {
    
    verify_start: async (country_code: string, phone_number: string) => {
        return await axios({
            method: 'post',
            url: `${process.env.APTO_BASE_URL}/verifications/start`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Content-Type': 'application/json',
            },
            data: {
                datapoint: {
                    data_type: "phone",
                    country_code: country_code,
                    phone_number: phone_number
                },
                datapoint_type: "phone"
            }
        })
        
            .then(result => {
                return result.data;
            });
    },

    verify_confirm: async (verification_id: string, secret: string) => {
        return await axios({
            method: 'post',
            url: `${process.env.APTO_BASE_URL}/verifications/${verification_id}/finish`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Content-Type': 'application/json',
            },
            data: {
                "secret": secret,
            }
        })

            .then(result => {
                return result.data;
            })
    },

    register: async (country_code: string, phone_number: string, verification_id: string, document_id: string, country: string, document_type: string, email: string, birthday: string, first_name: string, last_name: string, street1: string, street2: string, locality: string, region: string, postal_code: string) => {
        
        await axios({
            method: 'post',
            url: `${process.env.APTO_BASE_URL}/user`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify({
                "data_points": {
                    "type": "list",
                    "data": [
                        { "type": "phone", "country_code": country_code, "phone_number": phone_number, "verification": { "verification_id": verification_id } },
                        { "type": "id_document", "value": document_id, "country": country, "doc_type": document_type },
                        { "type": "email", "email": email },
                        { "type": "birthdate", "date": birthday },
                        { "type": "name", "first_name": first_name, "last_name": last_name },
                        { "type": "address", "street_one": street1, "street_two": street2, "locality": locality, "region": region, "postal_code": postal_code, "country": country }
                    ]
                }
            })
        })

            .then(result => {
                return result.data;
            })
    },

    agree: async (session_id: string, workflow_object_id: string, action_id: string) => {

        await axios({
            method: 'post',
            url: `${process.env.APTO_BASE_URL}/disclaimers/accept`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
                'Content-Type': 'application/json',
            },
            data: JSON.stringify({
                "workflow_object_id": workflow_object_id,
                "action_id": action_id,
            })
        })

        return;
    },

    confirm: async (session_id: string, application_id: string) => {
        return await axios({
            method: 'get',
            url: `${process.env.APTO_BASE_URL}/user/accounts/applications/${application_id}/status`,
            headers: {
                'Api-Key': `Bearer ${process.env.APTO_MOBILE_KEY}`,
                'Authorization': `Bearer ${session_id}`,
            },
        });

    }

}