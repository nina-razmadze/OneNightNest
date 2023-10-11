export default function ImageLines({ image }: any) {
  return (
    <div className="bg-primary-default w-full">
      <img
        src={image}
        className=" absolute h-[600px] w-[500px] inset-0 text-transparent"
      ></img>
    </div>
  );
}
