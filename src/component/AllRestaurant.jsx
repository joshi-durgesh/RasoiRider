import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SlidingContentBtn from "./SlidingContentBtn";

const AllRestaurant = ({ data, title }) => {
  const [allRestoData] = useState(data);

  const slideLeft = () => {
    let slider = document.getElementById("all-restaurant");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("all-restaurant");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section className='max-w-6xl mx-auto p-2'>
      <div className='flex justify-between mb-7 '>
        <h2 className='text-2xl font-bold mb-4 text-[#ffb545]'>{title}</h2>
        <div className='flex gap-3'>
          <SlidingContentBtn
            section={"all-restro"}
            side={"left"}
            clickEvent={slideLeft}
          />
          <SlidingContentBtn
            section={"all-restro"}
            side={"right"}
            clickEvent={slideRight}
          />
        </div>
      </div>

      <div
        id='all-restaurant'
        className='flex  gap-2 overflow-auto scrollbar scroll-smooth border-b-[1px] border-[#ffb545] pb-6'
      >
        {allRestoData?.map((data) => {
          return <RestaurantCard key={data.info.id} resData={data} />;
        })}
      </div>
    </section>
  );
};

export default AllRestaurant;
