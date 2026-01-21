import { Header } from "@/components/mainPagesElements/header";
import { FiltersSidebar as SideBar } from "@/components/filtersSidebar/filtersSidebar";
import { OnlyTitle } from "@/components/mainPagesElements/title";
import { PhotoArea } from "@/components/photosArea/photoArea";


const PageVestidos = ({ }) => {
  return (
    <div className="w-full">
      <Header />
      <div className="content-area max-w-500 w-full mx-auto px-15">
        <div className="title-vestidos my-15">
          <OnlyTitle title="Vestidos" sizeTitle="40px" colorTitle="var(--color-secundary)" weightTitle="400"/>
        </div>
        <div className="flex gap-x-10 my-20">
          <div className="w-100">
            <SideBar />
          </div>
          <PhotoArea />
        </div>
      </div>
    </div>
  );
};

export default PageVestidos