export default function Adventages() {
  return (
    // <div className="bg-secondary-default rounded-lg  flex justify-center mb-[60px] relative">
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[200px]   m-auto">
    //     <div className="grid grid-cols-4 gap-4 border border-black  w-[1410px]">
    //       <div className=" border border-black">01</div>
    //       <div className=" border border-black">01</div>
    //       <div className=" border border-black">01</div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative bg-secondary-default  p-30 mt-[130px] mb-[100px] py-6 w-full flex center items-center m-auto bg-primary-light">
      <div className="w-[1410px] flex center items-center m-auto">
        <div className="grid grid-cols-3 gap-4 w-full relative z-10 items-center py-12 rounded-full bg-fcf5eb text-base">
          <div className="flex flex-col justify-between p-4 leading-normal bg-primary-light rounded-lg text-black py-8">
            <h5 className="mb-2 text-2xl font-bold tracking-tight pb-4">
              ფასი
            </h5>
            <p className="mb-3 font-normal">
              მიიღე ყველაზე იაფინი შეთავაზებები საქართველოში
            </p>
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal rounded-lg bg-primary-light text-black py-8">
            <h5 className="mb-2 text-2xl font-bold tracking-tight pb-4">
              სწრაფი
            </h5>
            <p className="mb-3 font-normal">ბინის დაჯავშნა არაუმეტეს 5 წუთში</p>
          </div>

          <div className="flex flex-col justify-between p-4 leading-normal  bg-primary-light rounded-lg text-black py-8">
            <h5 className="mb-2 text-2xl font-bold tracking-tight pb-4">
              მარტივი
            </h5>
            <p className="mb-3 font-normal">
              ინტუიტიური და მარტივად აღსაქმელი აპლიკაცია
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
