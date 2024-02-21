import { useState } from "react";

const Login = ({
  setLoginSwitch,
  setLoginBtnShow,
  setUserNumber,
  setOpenDialog,
  setBgBackdrop,
  user,
}) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationMsg, setValidationMsg] = useState("");

  const loginHandler = () => {
    user
      ? user[phoneNumber]
        ? (() => {
            console.log("working");
            setLoginSwitch("block");
            setLoginBtnShow("none");
            setUserNumber(phoneNumber);
            setOpenDialog(false);
            setBgBackdrop("none");
            setPhoneNumber("");
          })()
        : setValidationMsg("User not found, check your phone number")
      : setValidationMsg("no user found");
  };

  return (
    <form className='flex flex-col px-7 pt-4'>
      <input
        type='text'
        maxLength={10}
        placeholder='Phone number'
        className='p-3 py-4 font-bold '
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <p className='text-white'>{validationMsg}</p>
      <button
        type='button'
        className='mt-4 mb-2 bg-[#ffb545] text-white font-bold text-sm p-3'
        onClick={loginHandler}
      >
        LOGIN
      </button>
      <p className='text-[12px] mb-6 text-white'>
        By clicking on Login, I accept the Terms & Conditions & Privacy Policy
      </p>
    </form>
  );
};

export default Login;
