const express = require('express');
const Stripe = require('stripe');
const cors = require('cors');
require('dotenv').config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY_API);

app.use(cors());
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
    const { stripeProductId } = req.body;
    if (!stripeProductId) {
        return res.status(400).json({ error: 'Missing stripeProductId' });
      }
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price: stripeProductId,
                quantity: 1,
            }],
            mode: 'payment',
            success_url: 'http://localhost:5000/Success', 
            cancel_url: 'http://localhost:5000/Fail', 
        });
        res.json({ id: session.id });
    } catch (error) {
        console.error('Error creating Stripe checkout session:', error);
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
