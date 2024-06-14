"use client"

import { db } from '@/firebase';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useSession } from 'next-auth/react'
import Link from 'next/link';
import React, { useState } from 'react'
// import LoadingSpinner from './LoadingSpinner';
import { useSubscriptionStore } from '@/store/store';
import ManageAccountButton from './ManageAccountButton';

function CheckOutButton({ sub } : { sub: string }) {
  const { data: session} = useSession();

  const [loading,setLoading] = useState(false);

  const subscription = useSubscriptionStore((state) => state.subscription)

  const isLoadingSubscription = subscription === undefined;

  const isSubscribed = subscription?.status === "active" && subscription?.role === "pro";

  const createCheckOutSession = async () => {
    if(!session?.user.id) return;

    setLoading(true);

    const docRef = await addDoc(
      collection(db, "customers",session.user.id, "subscriptions" ), {
        price: "100",
        amount: "100",
        success_url: window.location.origin,
        cancel_url: window.location.origin,
        role: "pro",
        status: "Active"
      }
    );

    
    return onSnapshot(docRef, snap => {
      const data = snap.data();
      const url = data?.url;
      const error = data?.error;

      if(error){
        alert(`An error occured: ${error.message}` )
      }
      if(url){
        window.location.assign(url);
        setLoading(false);
      }
    })

    
  };





  return (
    <div className='mt-8 block rounded-md bg-indigo-600 
    px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-indigo-600 cursor-pointer disabled:opacity-80 
    disabled:bg-indigo-600/50 disabled:text-white disabled:cursor-default
    '>
      {isSubscribed ? (
      <ManageAccountButton />
    ) : isLoadingSubscription || loading ? (
      "Loading"
    ) : (
      <button onClick={() => createCheckOutSession()}>
      "Sign Up"
      </button>
      
      )}</div>
  )
}

export default CheckOutButton