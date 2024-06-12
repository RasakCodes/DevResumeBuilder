import React from "react";

const PricingPlan = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Pricing Plans</h2>
          <p className="text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>
        <div className="flex space-x-4">
          <div className="bg-white p-6 rounded-lg borde border-l">
            <h3 className="text-2xl font-semibold">Basic</h3>
            <p className="text-6xl font-bold">$19</p>
            <p className="text-gray-600">Per month</p>
            <p className="text-gray-600">Best for individual developers</p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded">
              Get started
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg borde border-l">
            <h3 className="text-2xl font-semibold">Business</h3>
            <p className="text-6xl font-bold">$29</p>
            <p className="text-gray-600">Per month</p>
            <p className="text-gray-600">Ideal for small development teams</p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded">
              Get started
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg borde border-l">
            <h3 className="text-2xl font-semibold">Enterprise</h3>
            <p className="text-6xl font-bold">$49</p>
            <p className="text-gray-600">Per month</p>
            <p className="text-gray-600">
              Perfect for large development organizations
            </p>
            <button className="mt-4 bg-black text-white px-6 py-2 rounded">
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
