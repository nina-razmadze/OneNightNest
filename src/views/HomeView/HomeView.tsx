import { HomeBackground } from "./HomeView.styled";
import PublicLayout from "../../layouts/PublicLayout/PublicLayout";
import ContentImage from "../../components/ContentImage/ContentImage";
import SearchForm from "../../components/Forms/SearchForm/SearchForm";
import LeftImageLine from "../../components/ContentImage/ImageLines/LeftImageLine";
import ImageLine from "../../components/ContentImage/ImageLines/ImageLine";
import Adventages from "../../components/Adventages/Adventages";

export default function HomeView() {
  return (
    <PublicLayout>
      <div className={HomeBackground}>
        <ContentImage />
        <SearchForm />
        <ImageLine />
        <Adventages />
      </div>
    </PublicLayout>
  );
}
