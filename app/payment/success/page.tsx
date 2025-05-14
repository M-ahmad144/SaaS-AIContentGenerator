"use client";

import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

export default function PaymentSuccess() {
  const params = useSearchParams();
  const plan = params.get("plan");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-white shadow-lg p-8 rounded-lg max-w-md text-center">
        <CheckCircle className="mx-auto mb-4 w-16 h-16 text-green-500" />
        <h1 className="mb-2 font-bold text-2xl">Payment Successful!</h1>
        <p className="mb-6">
          You've successfully subscribed to the {plan} plan.
        </p>
        <a
          href="/dashboard"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-white transition"
        >
          Go to Dashboard
        </a>
      </div>
    </div>
  );
}
