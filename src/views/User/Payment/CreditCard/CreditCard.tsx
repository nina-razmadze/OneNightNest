import Cards, { Focused } from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import { useState } from "react";

export default function CreditCard() {
  const [number, setNumber] = useState("");
  const [expiry, setExpiry] = useState("");

  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");

  const [focus, setFocus] = useState<Focused | undefined>(undefined);

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className="flex justify-center items-center pr-12 ml-80 pt-32">
      <div className="w-full max-w-6xl p-4 bg-secondary-dark rounded-lg">
        <div className="grid grid-cols-2 gap-4">
          <div className=" flex items-center  rounded-lg">
            <Cards
              number={number}
              name={name}
              expiry={expiry}
              cvc={cvc}
              focused={focus}
            />
          </div>
          <div>
            <form onSubmit={handleFormSubmit} className="mr-8">
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Card Number
                </label>
                <input
                  type="tel"
                  name="number"
                  value={number}
                  placeholder="XXXX XXXX XXXX XXXX"
                  onChange={(e) => setNumber(e.target.value)}
                  onFocus={(e) => setFocus("name")}
                  className="bg-secondary-default border-none text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onFocus={() => setFocus("name")}
                  className="bg-secondary-default border-none text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                />
              </div>

              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  MM/YY Expiry
                </label>
                <input
                  type="text"
                  name="expiry"
                  value={expiry}
                  placeholder="MM/YY"
                  onChange={(e) => setExpiry(e.target.value)}
                  onFocus={() => setFocus("expiry")}
                  className="bg-secondary-default border-none text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  CVC
                </label>
                <input
                  type="tel"
                  name="cvc"
                  value={cvc}
                  placeholder="CVC"
                  onChange={(e) => setCvc(e.target.value)}
                  onFocus={() => setFocus("cvc")}
                  className="bg-secondary-default border-none text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 "
                />
              </div>
              <div className="flex items-center justify-end mt-6">
                <button
                  type="submit"
                  className="text-secondary-dark  bg-secondary-default  font-medium rounded-full border-none text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
                >
                  Get started
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
