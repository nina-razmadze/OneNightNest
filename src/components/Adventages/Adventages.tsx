export default function Adventages() {
  return (
    <div className="relative bg-secondary-default p-30 mt-[130px] mb-[100px] py-6 w-full flex flex-col items-center m-auto bg-primary-light">
      <div className="w-[1410px] flex flex-col items-center m-auto flex justify-start ">
        <h3 className="text-3xl font-semibold mb-8 text-black pt-[35px]">
          ჩვენი უპირატესობები
        </h3>

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
          <div className="flex flex-col justify-between p-4 leading-normal bg-primary-light rounded-lg text-black py-8">
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
