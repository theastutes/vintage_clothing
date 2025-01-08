import React, { Suspense } from "react";
import ItemView from "./ItemView";
import Loading from "@/components/Loading";
import Link from "next/link";
import { IItem } from "../../../../types/types";
import ToastNotification from "@/comp/ToastNotification";
import { auth } from "../../../../auth";
import { getCart } from "../../../../action/action";

interface props {
  success?: IItem[];
  error?: string;
}

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const page = async () => {
  const session = await auth();
  if (!session?.user) {
    <ToastNotification message={"Sign in to access cart"} />;
  }
  const email = session?.user?.email;

  const { success, error }: props = await getCart({ email });
  if (error) {
    return (
      <ToastNotification
        message={error}
        description="There was an issue retrieving your cart."
      />
    );
  }
  if (!success || success.length === 0) {
    return (
      <ToastNotification
        message="Cart is empty"
        description="Add items to your cart to see them here."
      />
    );
  }
  const cart = success;

  async function payNow(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert('Failed to load Razorpay SDK. Please check your connection.');
      return;
    }

    // Create order by calling the server endpoint
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount, currency: 'INR', receipt: 'receipt#1', notes: {}} )
    });

    const order = await response.json();
    console.log(order);
    // Open Razorpay Checkout
    const options = {
      key: 'rzp_test_CoHPj0bYsqnQ2w', // Replace with your Razorpay key_id
      amount: order.amount,
      currency: order.currency,
      name: 'Vintage Clothing Pvt Ltd',
      description: 'Test Transaction',
      order_id: order.id, // This is the order_id created in the backend
      callback_url: '', // Your success URL
      prefill: {
        name: '',
        email: '',
        contact: ''
      },
      theme: {
        color: '#915eff'
      },
      method:{
        upi:true
      },
      handler: function (response: { razorpay_order_id: any; razorpay_payment_id: any; razorpay_signature: any; }) {
        fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature
          })
        }).then(res => res.json())
          .then(data => {
            if (data.status === 'ok') {
              window.location.href = '';
            } else {
              alert('Payment verification failed');
            }
          }).catch(error => {
            console.error('Error:', error);
            alert('Error verifying payment');
          });
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <>
      <div className="w-full h-screen overflow-y-scroll overflow-hidden pb-36 sm:pb-0 text-2xl">
        <div className="w-full text-xl px-3 font-bold h-fit text-black z-10">
          Cart
        </div>
        <Suspense fallback={<Loading />}>
          <ItemView items={cart}/>
        </Suspense>
        <div className="fixed px-4 bottom-16 w-screen h-36 sm:h-32 sm:right-2 sm:top-16 sm:w-56 sm:rounded-md flex flex-col items-center justify-center gap-4  bg-white/30 backdrop-blur-lg">
          <div className="flex justify-between items-center w-full px-4 font-semibold text-black text-lg sm:text-xs">
            <span>Total :</span>
            <span>₹999</span>
          </div>
          <hr className="border-white w-full" />
          <Link
            href={"/placeOrder"}
            className="w-full px-5 py-3 sm:py-2 rounded-md max-w-48 text-white bg-zinc-900 text-sm sm:text-xs"
          >
            Buy
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
