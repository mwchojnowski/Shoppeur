import React from "react"
import CheckoutNav from "../components/Checkout/CheckoutNav"
import CheckoutContent from "../components/Checkout/CheckoutContent"
import Footer from "../components/Footer"

export default function checkout(){
    return(
        <>
            <CheckoutNav />
            <CheckoutContent />
            <Footer />
        </>
    )
}