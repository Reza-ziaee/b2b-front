import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const CategoriesBtn = () => {
  return (
    <div className="basis-1/3 p-3 cursor-pointer bg-orange-500 flex items-center gap-2 max-w-sm rounded-t-lg">
      <MenuIcon />
      <b>categories</b>
    </div>
  );
};

export default CategoriesBtn;
