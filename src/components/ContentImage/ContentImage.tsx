import background from "../../images/background.jpg";

import secbackground from "../../images/secbackground.jpg";
import thirdbackground from "../../images/thirdbackground.jpg";

export default function ContentImage() {
  return (
    <div className="mt-[80px] w-full ">
      <div className="flex  bg-primary-dark h-[500px]">
        <img
          src={secbackground}
          style={{
            width: "100%",
            height: "500px",
            borderRadius: "10px",
            marginRight: "20px",
            marginLeft: "20px",
            marginTop: "-50px",
          }}
        />
        <img
          src={background}
          style={{
            width: "100%",
            height: "560px",
            borderRadius: "15px",
            marginRight: "20px",
            marginLeft: "20px",
          }}
        />
        <img
          src={thirdbackground}
          style={{
            width: "100%",
            height: "500px",
            borderRadius: "10px",
            marginRight: "20px",
            marginLeft: "20px",
            marginTop: "-50px",
          }}
        />
      </div>
    </div>
  );
}
