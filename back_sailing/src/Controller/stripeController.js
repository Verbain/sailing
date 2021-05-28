const stripe = require('stripe')('sk_test_51IucrnF5ZtIQrMXg3TnVTpqR1MXnSVdG78vMOzc9ScXDYZRDvJIF8i889WhLpRBakLaiLfaJVISXOUCZcwr2O2Gz00xuVLBo9h');
const endpointSecret = 'whsec_9FepNdGrQ8oRYRjRuX9nhu1AXYEkKNXY';
const axios = require('axios');

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
        success_url: `http://localhost:4000/success`,
        cancel_url: `http://localhost:4000/cancel`,
    });
    res.json({id: session.id});
}
const fulfillOrder = async (session) => {
    var payload = {
            id:'1',
            wallet:'5',
        }

        let res = await axios.post('http://localhost:4000/api/updateWallet',payload)
            .then(r=>{
                let data = r.data;
                console.log(data);
            })
            .catch(error =>{
                console.log(error);
            })

    console.log("Fulfilling order", session);
}
function handleEvent (request, response)  {
    const payload = request.body;
    const sig = request.headers['stripe-signature'];

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