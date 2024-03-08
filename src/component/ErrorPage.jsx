import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className='w-[100%] h-[100vh]'>
      <img
        src={require("../../public/images/404error.png")}
        className='w-full h-[100vh]'
      />
    </div>
    // <div className='text-7xl font-bold '>Error -Page {err.statusText}</div>
  );
};

export default ErrorPage;
