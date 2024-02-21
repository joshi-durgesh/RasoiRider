import RestaurantCuisineAllItems from "./RestaurantCuisineAllItems";

const RestaurantCuisineCategory = ({ list, showItem, setShowIndex }) => {
  const { itemCards, title } = list?.card?.card;
  // const [showItem, setShowItem] = useState(false);

  const clickHandler = () => {
    //  setShowItem(!showItem);
    setShowIndex();
  };

  return (
    <div key={title} className='mb-4'>
      <div
        className='flex justify-between shadow-sm cursor-pointer bg-[#155e75] text-[#ffb545] py-2 ps-5'
        onClick={clickHandler}
      >
        <h1 className='text-lg font-bold '>{title}</h1>
        <span className='bi bi-caret-down-fill mr-5'></span>
      </div>
      <div className=''>
        {showItem && <RestaurantCuisineAllItems itemCards={itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCuisineCategory;
