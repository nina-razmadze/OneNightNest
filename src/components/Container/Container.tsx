export default function Container() {
  return (
    <div className="max-w-sm p-6  border border-gray-200 rounded-lg shadow bg-secondary-default ">
      <h5 className="mb-2 text-2xl font-bold tracking-tight no-underline text-gray-900">
        Noteworthy technology acquisitions 2021
      </h5>

      <p className="mb-3 font-normal text-black">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-black "
      >
        Read more
        <svg
          className="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  );
}
