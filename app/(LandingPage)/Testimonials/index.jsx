"use client";
import React from "react";
import { HeaderText } from "../shared/Text/Header";
import { Paragraph } from "../shared/Text/Paragraph";
import { StarIcon } from "@/shared/component/icons/Star";
import { testimonialsData } from "./testimonials";
import UserSmallProfile from "../shared/userSmallProfile";
import { useHandleCarousel } from "../hooks/useHandleCarousel";
import PaginateDotButton from "../shared/PaginationDotsButton";

const Testimonials = () => {
  const { scroll, carouselRef, activeIndex } = useHandleCarousel("100%");
  return (
    <div className="border-b-2 py-10 pb-10">
      <div className="max-w-[90%] mx-auto flex flex-col gap-4 my-5">
        {" "}
        <div className="flex flex-col gap-y-3">
          {/* <YellowBgText text="Testimonials" className={" w-36"} /> */}

          <HeaderText text={"Happy Clients"} className={"text-start"} />
          <Paragraph
            text="Here's what our customers have to say:"
            className={"text-start"}
          />
        </div>
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar mt-10 gap-x-2 "
        >
          {testimonialsData.map((testi, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full md:w-[300px] lg:w-[50%] md:mr-4 flex flex-col gap-5"
            >
              <div className="flex gap-x-2">
                {[...Array(testi.ratings)].map((star, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-[#2E2C2F]  text-lg md:leading-[145%] ">
                {testi.descrip}
              </p>
              <UserSmallProfile
                img={testi.user.img}
                alt={testi.user.name}
                name={testi.user.name}
                subDesc={testi.user.profession}
              />
            </div>
          ))}
        </div>
        <PaginateDotButton
          count={testimonialsData.length}
          scroll={scroll}
          activeIndex={activeIndex}
        />
      </div>
    </div>
  );
};

export default Testimonials;
