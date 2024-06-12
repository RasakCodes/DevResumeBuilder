import { ImgComp } from "@/shared/ImgComp";
import React from "react";

const UserSmallProfile = ({ img, alt, name, subDesc }) => {
  return (
    <div className="flex gap-x-3">
      <ImgComp className={"w-10 h-10 rounded-full"} src={img} alt={alt} />
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p>{subDesc}</p>
      </div>
    </div>
  );
};

export default UserSmallProfile;
