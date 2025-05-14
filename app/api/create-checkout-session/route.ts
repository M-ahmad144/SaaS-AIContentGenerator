// app/api/pricing/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {});

export async function GET() {
  try {
    const prices = await stripe.prices.list({
      expand: ["data.product"],
      active: true,
    });

    const plans = prices.data.map((price) => ({
      id: price.id,
      nickname: price.nickname,
      unit_amount: (price.unit_amount ?? 0) / 100,
      currency: price.currency,
      interval: price.recurring?.interval,
    }));

    return NextResponse.json(plans);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
