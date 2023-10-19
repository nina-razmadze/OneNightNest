import "react-credit-cards/es/styles-compiled.css";

import Cards from "react-credit-cards";

import { useState } from "react";

export default function CreditCard() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setfocus] = useState("");

  const handleInputChange = () => {};
  const handleInputFocus = () => {};

  return (
    <div>
      <form>
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="Card Number"
          onChange={(e) => setNumber(e.target.value)}
          onFocus={handleInputFocus}
        />
        ...
      </form>
    </div>
    // <div className="flex justify-center items-center  pr-12 ml-80 pt-32 ">
    //   <div className="p-4 ">
    //     <h1 className="pb-12">ბარათის მონაცემები</h1>
    //     <div className=" border shadow bg-secondary-default rounded-lg p-8 ">
    //       <form>
    //         <div className="mb-6">
    //           <label className="block mb-2 text-sm font-medium text-black ">
    //             Name
    //           </label>
    //           <input
    //             type="text"
    //             placeholder=""
    //             id="base-input"
    //             className="bg-transparent  text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
    //           />
    //         </div>
    //         <div className="mb-6">
    //           <label className="block mb-2 text-sm font-medium text-black ">
    //             Card Number
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="XXXX XXXX XXXX XXXX"
    //             id="base-input"
    //             className="bg-transparent  text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
    //           />
    //         </div>

    //         <div className="grid md:grid-cols-3 md:gap-6">
    //           <div className="relative z-0 w-full mb-6 group">
    //             <label
    //               className="block text-sm text-gray-500"
    //               htmlFor="expiryDate"
    //             >
    //               Expiry Date
    //             </label>
    //             <input
    //               type="text"
    //               name="expiryDate"
    //               id="expiryDate"
    //               className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent  rounded-lg focus:outline-none focus:border-blue-500"
    //               placeholder="MM/YY"
    //               required
    //             />
    //           </div>
    //           <div className="relative z-0 w-full mb-6 group">
    //             <label
    //               className="block text-sm text-gray-500"
    //               htmlFor="expiryDate"
    //             >
    //               Expiry Date
    //             </label>
    //             <input
    //               type="text"
    //               name="expiryDate"
    //               id="expiryDate"
    //               className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent  rounded-lg focus:outline-none focus:border-blue-500"
    //               placeholder="MM/YY"
    //               required
    //             />
    //           </div>
    //           <div className="relative z-0 w-full mb-6 group">
    //             <label
    //               className="block text-sm text-gray-500"
    //               htmlFor="expiryDate"
    //             >
    //               CVV
    //             </label>
    //             <input
    //               type="text"
    //               name="expiryDate"
    //               id="expiryDate"
    //               className="block w-full py-2.5 px-4 text-sm text-gray-900 bg-transparent  rounded-lg focus:outline-none focus:border-blue-500"
    //               placeholder="MM/YY"
    //               required
    //             />
    //           </div>
    //         </div>

    //         <button className="text-white  bg-secondary-dark font-medium rounded-full border-none text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer">
    //           Submit
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}
