// import { useState, useEffect } from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';

// const Stripe_PublicKey = 'pk_test_51Mk6NgGDq3h5o97DZxr2kVzv1ZDgRKwfLyyt6sWt5LLEeQbe7LzPfVnwXrKMreaL2CFxZpmXbfV3GlnPcxByr3pr00dPH0uhDq'

// const Pay = () => {
//     const [stripeToken,setStripeToken] = useState(null)

//     const onToken = (token) => {
//         setStripeToken(token)
//     }

//     useEffect(() => {
//         const makeRequest = async () => {
//             try{
//                 const res = await axios.post('http://localhost:5000/api/checkout/payment',
//                 {
//                     tokenId: stripeToken.id,
//                     amount: 20000, 
//                 }
//                 );
//                 console.log(res.data);
//             }catch(err) {
//                 console.log(err);
//             } 
//         };
//          stripeToken && makeRequest()
//     }, [stripeToken]);

//     return (
//         <div
//             style={{
//                 height: '100vh',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//             }}
        
//         >
//             <StripeCheckout name='Pelins El' image=''
//             billingAddress
//             shippingAddress
//             description=' Din totala summa är 200 kr'
//             amount={20000}
//             token={onToken}
//             stripeKey={Stripe_PublicKey}
//             >

            
//             <button style={{
//                 border: 'none',
//                 width: 120,
//                 borderRadius: 5,
//                 padding: '20px',
//                 backgroundColor: 'black',
//                 color: 'white',
//                 fontWeight: '600',
//                 cursor: 'pointer'

//             }}
//             >
//                 Betala Nu
//             </button>
//             </StripeCheckout>
//         </div>
//     )
// }

// export default Pay