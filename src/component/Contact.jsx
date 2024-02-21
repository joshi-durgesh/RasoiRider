const Contact = () => {
  return (
    <section className='h-[90vh] max-w-[600px] mx-auto'>
      <div className='flex flex-col  pt-5'>
        <h1 className='font-bold text-3xl p-4 text-[#ffb545] text-center'>
          Contact Us Page
        </h1>
        <form className='flex flex-col gap-1'>
          <input
            required
            type='text'
            placeholder='Name'
            className='border border-black p-2 '
          />
          <input
            required
            type='email'
            placeholder='Email'
            className='border border-black p-2 '
          />

          <input
            required
            type='text'
            placeholder='message'
            className='border border-black p-2 '
          />

          <textarea
            name='review'
            id='review'
            cols='30'
            rows='10'
            placeholder='write some text'
            className='border-0 mb-2 h-20'
          ></textarea>
          <button
            className=' p-2 font-bold bg-[#ffb545] text-white'
            type='button'
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
