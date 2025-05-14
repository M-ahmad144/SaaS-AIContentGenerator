"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscribe = async (plan: string) => {
    setLoading(plan);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    router.push(`/payment/success?plan=${plan}`);
    setLoading(null);
  };

  const plans = [
    {
      id: "free",
      name: "Free",
      price: 0,
      features: [
        "Basic content generation",
        "5 templates",
        "Community support",
      ],
      cta: "Start for free",
    },
    {
      id: "pro",
      name: "Pro",
      price: 10,
      features: [
        "Unlimited content",
        "20+ templates",
        "Priority support",
        "Advanced analytics",
      ],
      cta: "Get Pro",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: 20,
      features: [
        "Everything in Pro",
        "Unlimited templates",
        "24/7 VIP support",
        "Dedicated account manager",
      ],
      cta: "Contact us",
    },
  ];

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="mb-4 font-bold text-gray-900 text-4xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto max-w-2xl text-gray-600 text-xl">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="gap-8 grid md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border ${
                plan.id === "pro"
                  ? "border-blue-500 shadow-lg"
                  : "border-gray-200"
              }`}
            >
              <div className="p-6">
                <h2 className="mb-2 font-bold text-gray-900 text-2xl">
                  {plan.name}
                </h2>
                <div className="mb-6">
                  <span className="font-bold text-4xl">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <FaCheck className="flex-shrink-0 mt-1 mr-2 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={loading === plan.id}
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                    plan.id === "pro"
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  } ${loading === plan.id ? "opacity-70" : ""}`}
                >
                  {loading === plan.id ? (
                    <span className="flex justify-center items-center">
                      <svg
                        className="mr-3 -ml-1 w-5 h-5 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    plan.cta
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
