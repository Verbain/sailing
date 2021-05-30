const stripe = require('stripe')('sk_test_51IucrnF5ZtIQrMXg3TnVTpqR1MXnSVdG78vMOzc9ScXDYZRDvJIF8i889WhLpRBakLaiLfaJVISXOUCZcwr2O2Gz00xuVLBo9h');
const endpointSecret = 'whsec_9FepNdGrQ8oRYRjRuX9nhu1AXYEkKNXY';
const axios = require('axios');
require('dotenv').config();
const Mixpanel = require('mixpanel');
const mixpanel = Mixpanel.init(process.env.MIXPANEL_TOKEN);

async function createCheckout (req, res) {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: 'Sailing Coin',
                        images: ['https://www.pinclipart.com/picdir/middle/23-230268_riot-clipart-politics-riot-games-logo-png-transparent.png'],
                    },
                    unit_amount: 100,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:4000/`,
        cancel_url: `http://localhost:4000/`,
    });
    res.json({id: session.id});
}
const fulfillOrder = async (session) => {
    console.log(session.customer_details.email);
    const payload = {
        email:session.customer_details.email
    }
    console.log(payload)
    console.log("THIS IS PAYLOAD",payload)
    let res = await axios.post('https://sailing-staging.herokuapp.com/api/updateWallet',payload)
        .then(r=>{
            let data = r.data;
            console.log(data);
        })
        .catch(error =>{
            console.log(error);
        })
    mixpanel.track("ACHAT DE SAILING COIN");
    console.log("Fulfilling order", session);
}
function handleEvent (request, response)  {

    let event = request.body;

    // Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;

        console.log("Payement succes ! " + event.data.object)

        fulfillOrder(session);
    }

    response.status(200);
}
module.exports={createCheckout, handleEvent};