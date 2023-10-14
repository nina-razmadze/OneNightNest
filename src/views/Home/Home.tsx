import { HomeBackground } from "./SHome.styled";
import Adventages from "@src/components/Adventages/Adventages";

import PublicLayout from "@src/layouts/PublicLayout/PublicLayout";
import ContentImage from "@src/components/ContentImage/ContentImage";

import SearchForm from "@src/components/Forms/SearchForm/SearchForm";
import ImageLine from "@src/components/ContentImage/ImageLines/ImageLine";

export default function Home() {
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
