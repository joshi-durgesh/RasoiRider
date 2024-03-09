import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";
import emptyImg from "../../public/images/no-img.png";

const RestaurantCuisineItems = ({ items }) => {
  const { name, price, description, id, imageId, isVeg, defaultPrice, ribbon } =
    items;

  const imgUrl = imageId ? CDN_URL + imageId : emptyImg;
  const Dispatch = useDispatch();

  const handleAddItem = (item) => {
    Dispatch(addItems(item));
  };

  return (
    <div className=' pb-5 border-b-[1px] items-center  border-b-[#ffb545]'>
      <div className='flex mx-3 pt-4'>
        <div className=' basis-10/12'>
          <div>
            {isVeg ? (
              <i className='bi bi-caret-down-square text-green-700'></i>
            ) : (
              <i className='bi bi-caret-up-square text-orange-700'></i>
            )}
          </div>
          <div className='font-semibold mt-3 text-[#ffb545]'>{name}</div>
          <div className='mb-4 text-[#e5e5e5]'>
            {parseInt(price ? price / 100 : defaultPrice / 100).toLocaleString(
              "en-in",
              {
                style: "currency",
                currency: "INR",
              }
            )}
          </div>
          <div className='text-[13px] text-neutral-400'>{description}</div>
        </div>
        <div className=' basis-2/12 flex items-center relative'>
          <button
            className='absolute bottom-[-4px] left-4 px-7  py-1 bg-[#155e75] text-[#ffb545] font-bold rounded-md shadow-md shadow-[#ffb545] '
            onClick={() => handleAddItem(items)}
          >
            ADD
          </button>
          <div className='w-28 h-24  m-2 rounded-lg overflow-hidden '>
            <img src={imgUrl} className='object-fill w-28 h-24' />
          </div>
        </div>
      </div>
    </div>
  );
};

export const bestSellerCuisine = (RestaurantCuisineItems) => {
  return (props) => {
    const { bestseller } = props;
    return (
      <div className='relative'>
        <label className='text-orange-400 absolute top-4 left-9'>
          <i className='bi bi-star-fill'></i> {bestseller}
        </label>
        <RestaurantCuisineItems {...props} />
      </div>
    );
  };
};

export default RestaurantCuisineItems;
