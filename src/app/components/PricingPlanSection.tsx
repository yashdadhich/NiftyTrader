import React from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";

const PricingPlanSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 sm:px-8 text-center">
      <h2 className="text-2xl font-bold text-center">Pricing Plan</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full mt-8 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-4 text-left">
                  <span className="font-bold text-lg">Compare plans</span>
                  <div className="text-sm text-gray-600">
                    Choose your workspace plan according to your organisational plan
                  </div>
                </th>
                <th className="border border-gray-300 p-4">
                  <span className="font-bold text-xl">Free</span>
                  <span className="text-sm text-gray-600">/ Lifetime</span><br/>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 mt-4">
                    Create Free Account
                  </button>
                </th>
                <th className="border border-gray-300 p-4">
                  <span className="font-bold text-xl">₹849</span>
                  <span className="text-sm text-gray-600">/ Month</span><br/>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 mt-4">
                    Login to Buy
                  </button>
                </th>
                <th className="border border-gray-300 p-4">
                  <span className="font-bold text-xl">₹4310</span>
                  <span className="text-sm text-gray-600">/ Year</span><br/>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded shadow-lg hover:bg-blue-600 mt-4">
                    Login to Buy
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">Number of Users</td>
                <td className="border border-gray-300 p-4">1</td>
                <td className="border border-gray-300 p-4">3</td>
                <td className="border border-gray-300 p-4">1</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">Users Per Page</td>
                <td className="border border-gray-300 p-4">5 Pages</td>
                <td className="border border-gray-300 p-4">50 Pages</td>
                <td className="border border-gray-300 p-4">Unlimited</td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">Includes essential features to get started</td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">More advanced features for increased productivity</td>
                <td className="border border-gray-300 p-4 text-red-500">
                  <XIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">Designing & Development</td>
                <td className="border border-gray-300 p-4 text-red-500">
                  <XIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">Customizable options to meet your specific needs</td>
                <td className="border border-gray-300 p-4 text-red-500">
                  <XIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">Secure data storage</td>
                <td className="border border-gray-300 p-4 text-red-500">
                  <XIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">Email Support</td>
                <td className="border border-gray-300 p-4 text-red-500">
                  <XIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">24/7 customer support</td>
                <td className="border border-gray-300 p-4 text-red-500">
                  <XIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">Analytics and reporting</td>
                <td className="border border-gray-300 p-4 text-red-500">
                  <XIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
              </tr>
              <tr className="hover:bg-gray-100">
                <td className="border border-gray-300 p-4 text-left">Account Management</td>
                <td className="border border-gray-300 p-4 text-red-500">
                  <XIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
                <td className="border border-gray-300 p-4 text-green-500">
                  <CheckIcon className="h-6 w-6 inline-block" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingPlanSection;
