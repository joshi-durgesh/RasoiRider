export const BodyShimmer = () => {
  return (
    <div className='grid grid-cols-5  max-w-6xl pt-8 pb-28 mx-auto items-center'>
      <div className=' col-span-2 bg-slate-400 w-96 h-96 rounded-full'> </div>
      <div className='col-span-3 flex flex-col gap-3'>
        <div className='bg-slate-400 w-[90%] h-10'></div>
        <div className='bg-slate-400 w-[80%] h-10'></div>
        <div className='bg-slate-400 w-[50%] h-10'></div>
        <div className='bg-slate-400 w-full h-10 mt-4'></div>
      </div>
    </div>
  );
};
