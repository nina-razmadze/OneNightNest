import { Link } from "react-router-dom";

export default function statements() {
  return (
    <div className="flex justify-center items-center  pr-12 ml-80 pt-32">
      <div className="w-full max-w-6xl p-4  bg-secondary-dark rounded-lg">
        <div className="text-white flex flex-col pt-4">
          <h2>განცხადების დამატება</h2>
          <p className="py-4">განცხადების ატვირთვის ღირებულება</p>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left ">
            <thead className="text-xs text-black uppercase bg-secondary-default">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ტიპი
                </th>
                <th scope="col" className="px-6 py-3">
                  ფასი
                </th>
                <th scope="col" className="px-3 py-3">
                  აქტიურობის ვადა
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-b bg-secondary-default dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  სასტუმრო
                </th>
                <td className="px-6 py-4">49.99ლ</td>
                <td className="px-3 py-4">12 თვე</td>
              </tr>
              <tr className=" border-b bg-secondary-default dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  ჰოსტელი
                </th>
                <td className="px-6 py-4">29.99</td>
                <td className="px-3 py-4">12 თვე</td>
              </tr>
              <tr className="bg-secondary-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  ბინა
                </th>
                <td className="px-6 py-4">19.99</td>
                <td className="px-3 py-4">12 თვე</td>
              </tr>
              <tr className="bg-secondary-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  სახლი
                </th>
                <td className="px-6 py-4">19.99</td>
                <td className="px-3 py-4">12 თვე</td>
              </tr>
              <tr className="bg-secondary-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  კოტეჯი
                </th>
                <td className="px-6 py-4">29.99</td>
                <td className="px-3 py-4">12 თვე</td>
              </tr>
              <tr className="bg-secondary-default">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-black whitespace-nowrap"
                >
                  საოჯახო სასტუმრო
                </th>
                <td className="px-6 py-4">29.99</td>
                <td className="px-3 py-4">12 თვე</td>
              </tr>
            </tbody>
          </table>
          <div className=" flex justify-start mt-6 mb-4 item-center w-full ">
            <Link to="/userpage/addStatement">
              <button className="text-black  bg-secondary-default font-medium rounded-full border-none text-sm px-5 py-2.5   cursor-pointer">
                განცხადების დამატება
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
