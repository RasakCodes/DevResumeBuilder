"use client";
import { BlogsList } from "./data";
import { ImgComp } from "@/shared/ImgComp";
import { useHandleCarousel } from "../hooks/useHandleCarousel";
import UserSmallProfile from "../shared/userSmallProfile";
import PaginateDotButton from "../shared/PaginationDotsButton";

const BLogCard = () => {
  const { scroll, activeIndex, carouselRef, startAutoScroll } =
    useHandleCarousel();
  startAutoScroll();
  return (
    <>
      <div
        ref={carouselRef}
        className="flex overflow-x-auto no-scrollbar mt-10 gap-x-2"
      >
        {BlogsList.map((blog, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full md:w-[300px] lg:w-[400px] md:mr-4"
          >
            <div className="bg-white   rounded-lg max-w-sm mb-5">
              <a href="#">
                <ImgComp
                  src={blog.image}
                  alt={blog.title}
                  className={"hover:shadow-xl"}
                />
              </a>
              <div className=" flex flex-col gap-y-1">
                <p>{blog.category}</p>
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  {blog.title}
                </h5>

                <p className="font-normal text-gray-700 mb-3 text-lg">
                  {blog.descrip}
                </p>

                <UserSmallProfile
                  img={blog.owner.img}
                  alt={blog.owner.name}
                  name={blog.owner.name}
                  subDesc={`${blog.owner.date} . ${blog.owner.time}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <PaginateDotButton
        count={BlogsList.length}
        scroll={scroll}
        activeIndex={activeIndex}
      />
    </>
  );
};

export default BLogCard;
