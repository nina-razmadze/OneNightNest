export default function statements() {
  return (
    <div className="flex justify-center items-center pr-12 ml-80 pt-32">
      <div className="w-full max-w-6xl p-4">
        <div className="relative overflow-x-auto  bg-secondary-default">
          <table className="w-full text-sm text-left  ">
            <thead className="text-xs text-gray-700 uppercase bg-secondary-dark ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Color
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className=" border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">Silver</td>
                <td className="px-6 py-4">Laptop</td>
              </tr>
              <tr className=" border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td className="px-6 py-4">White</td>
                <td className="px-6 py-4">Laptop PC</td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Magic Mouse 2
                </th>
                <td className="px-6 py-4">Black</td>
                <td className="px-6 py-4">Accessories</td>
              </tr>

              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                >
                  Product 4
                </th>
                <td className="px-6 py-4">Blue</td>
                <td className="px-6 py-4">Accessory</td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                >
                  Product 2
                </th>
                <td className="px-6 py-4">Blu</td>
                <td className="px-6 py-4">Accessory</td>
              </tr>
              <tr className="bg-white">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap dark:text-white"
                >
                  Product 2
                </th>
                <td className="px-6 py-4">Blu</td>
                <td className="px-6 py-4">Accessory</td>
              </tr>
              <tr className="bg-white ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
                >
                  Product 2
                </th>
                <td className="px-6 py-4">Blu</td>
                <td className="px-6 py-4">Accessory</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
