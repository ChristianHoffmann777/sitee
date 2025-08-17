from django.shortcuts import render

from django.conf import settings
from django.http import JsonResponse
import stripe

def create_checkout_session(request):
    stripe.api_key = settings.STRIPE_SECRET_KEY
    session = stripe.checkout.Session.create(
        mode="payment",
        payment_method_types=["card"],
        line_items=[{"price_data":{
            "currency":"usd",
            "product_data":{"name":"Demo product"},
            "unit_amount": 500,  # $5.00
        },"quantity":1}],
        success_url="https://YOUR_FRONTEND_URL/success",
        cancel_url="https://YOUR_FRONTEND_URL/cancel",
    )
    return JsonResponse({"id": session.id})

