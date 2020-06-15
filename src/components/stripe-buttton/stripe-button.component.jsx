import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_HDbbijqw2m4EYwXGs43GtM2M';

  const onToken = (token) => {
    axios({
      url: 'paymentAPI',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        MySwal.fire(
          'Payment Done Successfully!',
          'You will confirmation email soon!',
          'success'
        );
      })
      .catch((err) => {
        MySwal.fire(
          'Payment Done Successfully!',
          'You will confirmation email soon!',
          'success'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Ella Clothing"
      billingAddress
      shippingAddress
      image="https:///svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
