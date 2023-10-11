import PublicLayout from "../../layouts/PublicLayout/PublicLayout";
import { HomeBackground } from "./HomeVIew.styled";

export default function HomeView() {
  return (
    <PublicLayout>
      <div className={HomeBackground}>HomeView</div>
    </PublicLayout>
  );
}
