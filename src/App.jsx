import React from "react";
import Accrodion from "./Componants/Accrodion";
import ColorChange from "./Componants/ColorChange";
import StarRating from "./Componants/StarRating/StarRating";
import Imageslider from "./Componants/ImgSlider/Imageslider";
import Loadmore from "./Componants/LoadMore/Loadmore";
import Imagesearch from "./Componants/imagesearch/Imagesearch";


const App = () => {
  return (
    <div>
      {/* Acrroding project-1 Componants  */}
      {/* <Accrodion /> */}

      {/* Colorchanger rgb and hex project-2  */}
      {/* <ColorChange/> */}

      {/* project-3 Star-Rating functionality */}
      {/* <StarRating/> */}

      {/* Project-4 Image slider with API  */}
      {/* <Imageslider
        url={`https://picsum.photos/v2/list`}
        limit={"10"}
        page={"1"}
      /> */}



      {/* project - 5 : button more product componant */}
      {/* <Loadmore/> */}



      {/* project-6 -- image searching componant */}
      <Imagesearch/>





    </div>
  );
};

export default App;
