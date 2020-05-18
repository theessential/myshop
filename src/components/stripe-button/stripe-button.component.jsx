import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const StripeCheckoutButton=({price}) => {
    const priceForStripe=price*100;
    const publishableKey='pk_test_8BvaI80CmDeQDUfNiA4Lfiph00dgsQXfBe';

    const onToken=token =>{
        console.log(token);
        alert('Succesful Payment!')
    }
    return(
<StripeCheckout
label='Pay now'
name='Leagcy Clothing'
billingAddress
shippingAddress
description={`Your total is $${price}`}
amount={priceForStripe}
panelLabel='Pay Now'
token={onToken}
stripeKey={publishableKey}




/>
 );
};

export default StripeCheckoutButton;