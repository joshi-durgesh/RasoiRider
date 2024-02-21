import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import SlidingContentBtn from "./SlidingContentBtn";

const AllRestaurant = ({ data, title }) => {
  const [allRestoData] = useState(data);

  return (
    <section className='max-w-6xl mx-auto '>
      <div className='flex justify-between mb-7'>
        <h2 className='text-2xl font-bold mb-4 text-[#ffb545]'>{title}</h2>
      </div>

      <div className='flex  gap-2 overflow-auto scrollbar border-b-[1px] border-[#ffb545] pb-6'>
        {allRestoData?.map((data) => {
          return <RestaurantCard key={data.info.id} resData={data} />;
        })}
      </div>
    </section>
  );
};

export default AllRestaurant;
