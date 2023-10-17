export default function UserProfile() {
  return (
    <div className="flex justify-end items-start h-screen pt-12 pr-12">
      <div className="w-full max-w-5xl p-4">
        <div className="grid gap-8 grid-cols-2 grid-rows-3 border border-black p-4 bg-secondary-default rounded-lg">
          <div className="flex justify-between items-center">
            <h1>Information</h1>
          </div>
          <div className="flex justify-end items-center">
            <h1>pen</h1>
          </div>
          <div>
            <h1>name</h1>
            <p>name</p>
          </div>
          <div>
            <h1>Email</h1>
            <p>name</p>
          </div>
          <div>
            <h1>LastName</h1>
            <p>name</p>
          </div>
          <div>
            <h1>Phone Number</h1>
            <p>name</p>
          </div>
        </div>
      </div>
    </div>
  );
}
