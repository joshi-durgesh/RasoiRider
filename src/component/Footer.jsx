const Footer = () => {
  return (
    <section className='absolute bottom-0 left-0 bg-cyan-800 w-full'>
      <div className='text-center text-md text-[#ffb545] p-2'>
        &copy; {new Date().getFullYear()}. All rights reserved. Made by 😎
        Durgesh Joshi.
      </div>
    </section>
  );
};

export default Footer;
