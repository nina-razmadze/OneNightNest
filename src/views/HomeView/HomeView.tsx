import { HomeBackground } from "./HomeView.styled";
import PublicLayout from "../../layouts/PublicLayout/PublicLayout";
import RoomThree from "../../images/RoomThree.jpg";
import ContentImage from "../../components/ContentImage/ContentImage";
import SearchForm from "../../components/Forms/SearchForm/SearchForm";
import ImageLines from "../../components/ContentImage/ImageLInes";

export default function HomeView() {
  return (
    <PublicLayout>
      <div className={HomeBackground}>
        <div className="bg-primary-default h-[600px]">
          <ContentImage />
        </div>
        <SearchForm />
      </div>
      {/* <ImageLines image={RoomThree} /> */}
    </PublicLayout>
  );
}
