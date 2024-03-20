import BannerItem from "./BannerItem";
import SlidingContentBtn from "./SlidingContentBtn";

const BannerSection = ({ data }) => {
  const bannerData = data?.gridElements?.infoWithStyle?.info;
  const { title } = data?.header;

  const slideLeft = () => {
    let slider = document.getElementById("banner-items");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById("banner-items");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <section className='max-w-6xl mx-auto p-2 mt-7 mb-7'>
      <div className='flex justify-between items-start'>
        <h2 className='text-2xl mb-7  font-bold text-[#ffb545]'>{title}</h2>
        <div className='flex gap-3'>
          <SlidingContentBtn
            section={"banner"}
            side={"left"}
            clickEvent={slideLeft}
          />
          <SlidingContentBtn
            section={"banner"}
            side={"right"}
            clickEvent={slideRight}
          />
        </div>
      </div>

      <div
        id='banner-items'
        className='flex gap-3  border-b-[1px]  border-[#ffb545] pb-8 py-4 overflow-auto scrollbar scroll-smooth'
      >
        {bannerData.map((data) => (
          <BannerItem key={data?.id} banData={data} />
        ))}
      </div>
    </section>
  );
};

export default BannerSection;
