const RestaurantDetails = ({ menuData }) => {
  const { name, cuisines, areaName, sla, avgRating, totalRatingsString } =
    menuData?.data?.cards[2]?.card?.card?.info;
  const { lastMileTravelString } = sla;

  return (
    <div className='flex justify-between pb-5 border-b-[1px] border-b-[#ffb545] border-dashed mt-9'>
      <div>
        <h2 className='font-bold text-lg mb-2 text-[#ffb545]'>{name}</h2>
        <p className='text-[13px] text-white'>{cuisines.join(",")}</p>
        <p className='text-[13px] text-white'>
          {areaName},{lastMileTravelString}
        </p>
      </div>
      <div className='flex flex-col justify-center border-[1px] border-[#ffb545] items-center rounded-xl p-3'>
        <span className='bi bi-star-fill pb-1 text-[#ffb545] font-bold'>
          &nbsp;{avgRating}
        </span>
        <span className='pt-1 text-[#ffb545] border-t-[1px] border-[#ffb545] font-semibold'>
          {totalRatingsString}
        </span>
      </div>
    </div>
  );
};

export default RestaurantDetails;
