import BLogCard from "./BLogCard";
import { Paragraph } from "../shared/Text/Paragraph";
import { AnimateText } from "@/shared/animate/AnimateText";
import ButtonComp from "@/app/Build/Cv/shared/Button";

const Blogs = () => {
  return (
    <div className="border-b-2 py-10 pb-20" id="blogs">
      <div className="max-w-[90%] mx-auto flex flex-col gap-4">
        {" "}
        <div className="flex justify-between items-end flex-wrap gap-5">
          <div className="flex flex-col gap-y-3">
            {/* <YellowBgText text="Latest Blogs" className={" w-36"} /> */}

            <AnimateText text={"Blogs"} />
            <Paragraph
              text="Blogs Stay Informed with tips and insights from the field experts."
              className={"text-start"}
            />
          </div>
          <div>
            <ButtonComp text={"View All"} />
          </div>
        </div>
        <div>
          <BLogCard />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
