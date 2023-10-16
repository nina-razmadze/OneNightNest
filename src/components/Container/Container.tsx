interface TCard {
  title: string;
  subText: string;
  btnText: string;
  icon: any;
}

export default function Container({ title, subText, btnText, icon }: TCard) {
  return (
    <div className="max-w-sm p-6 border border-gray-200 rounded-lg shadow bg-secondary-default">
      <h5 className="mb-2 text-2xl font-bold tracking-tight no-underline text-gray-900">
        {title}
      </h5>
      <div className="flex items-center">
        {icon}
        <p className="mb-3 ml-2 font-normal text-black mt-4">{subText}</p>
      </div>
      <div className="flex justify-start mt-8">
        <button className="text-white bg-secondary-dark font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 focus:outline-none focus:ring focus:border-primary-dark border-none cursor-pointer">
          {btnText}
        </button>
      </div>
    </div>
  );
}
