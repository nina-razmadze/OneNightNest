import { HomeBackground } from "./HomeView.styled";
import PublicLayout from "../../layouts/PublicLayout/PublicLayout";

import ContentImage from "../../components/ContentImage/ContentImage";
import SearchForm from "../../components/Forms/SearchForm/SearchForm";

export default function HomeView() {
  return (
    <PublicLayout>
      <div className={HomeBackground}>
        <ContentImage />
        <SearchForm />
      </div>
    </PublicLayout>
  );
}
