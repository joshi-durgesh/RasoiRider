const SlidingContentBtn = ({ section, side, clickEvent }) => {
  return (
    <button
      id={section + "-btn-" + side}
      onClick={clickEvent}
      className='text-[#ffb545] border-[2px] border-[#ffb545] w-9 h-9 rounded-full'
    >
      <span className={"bi bi-arrow-" + side}></span>
    </button>
  );
};

export default SlidingContentBtn;
