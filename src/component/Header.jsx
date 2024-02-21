import logo from "../../public/images/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import Login from "./Login";
import { UseSelector, useSelector } from "react-redux";
import SignUp from "./SignUp";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [openDialog, setOpenDialog] = useState(false);
  const [formTitle, setFormTitle] = useState("Login");
  const [changeFormBtn, setChangeFormBtn] = useState("create an account.");
  const [loginSwitch, setLoginSwitch] = useState("none");
  const [loginBtnShow, setLoginBtnShow] = useState("block");
  const [userNumber, setUserNumber] = useState("");
  const [bgBackdrop, setBgBackdrop] = useState("none");

  const user = useSelector((store) => store.userinfo.users);

  const formHandler = () => {
    formTitle === "Login" ? setFormTitle("Sign up") : setFormTitle("Login");
    changeFormBtn === "create an account."
      ? setChangeFormBtn("login to your account.")
      : setChangeFormBtn("create an account.");
  };

  const openBackdrop = () => {
    setOpenDialog(true);
    setBgBackdrop("block");
  };

  const closeBackdrop = () => {
    setOpenDialog(false);
    setBgBackdrop("none");
  };

  const bgCloseBackdrop = () => {
    setOpenDialog(false);
    setBgBackdrop("none");
  };

  const logOut = () => {
    const confLogout = confirm("Are you sure, you want to logout?");
    if (confLogout) {
      setLoginBtnShow("block");
      setLoginSwitch("none");
    }
  };

  return (
    <header className='shadow-xl sticky top-0 left-0 z-10  bg-cyan-800 text-[#ffb545] '>
      <div className='flex justify-between max-w-7xl mx-auto p-2 items-center '>
        <div className='flex items-center '>
          <Link to='/'>
            <img
              src={logo}
              className='w-14 hover:scale-125 ease-in-out duration-300'
            />
          </Link>
        </div>
        <nav className='font-bold'>
          <ul className='flex gap-6'>
            <li className='hover:text-[#ffa057] p-2'>
              <Link to='/about'>
                <span className='bi bi-patch-question mr-1'></span> About
              </Link>
            </li>
            <li className='hover:text-[#ffa057] p-2'>
              <Link to='/contact'>
                <span className='bi bi-headset mr-1'></span> Contact
              </Link>
            </li>
            <li className='hover:text-[#ffa057] p-2'>
              <button style={{ display: loginSwitch }} onClick={logOut}>
                <span className='bi bi-person mr-1'></span>
                {userNumber ? user[userNumber].name : "default"}
              </button>
              <button onClick={openBackdrop} style={{ display: loginBtnShow }}>
                <span className='bi bi-person mr-1'></span> Sign in
              </button>
            </li>
            <li className='hover:text-[#ffa057] p-2'>
              <Link to='/cart'>
                <span className='bi bi-box2 mr-1 '></span> Cart (
                {cartItems.length})
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <dialog
        open={openDialog}
        className=' w-[500px] h-[100vh] z-10 p-5 absolute top-0  bg-cyan-950 m-0'
      >
        <div className='flex flex-col items-end gap-5'>
          <button className='text-2xl text-[#ffb545]' onClick={closeBackdrop}>
            <span className='bi bi-x-lg'></span>
          </button>
          <div className='flex flex-col w-[100%]  bg-cyan-800 rounded-xl '>
            <div className='flex justify-between p-4 ml-3 mt-3'>
              <div className='flex flex-col'>
                <span className='text-white text-2xl font-bold'>
                  {formTitle}
                </span>
                <span className='text-white'>
                  or &nbsp;
                  <button
                    className='text-[#ffb545] font-bold'
                    id='change-form-btn'
                    onClick={formHandler}
                  >
                    {changeFormBtn}
                  </button>
                </span>
              </div>
              <div>
                <img src={logo} className='w-20 mr-5' />
              </div>
            </div>
            {formTitle === "Login" ? (
              <Login
                setLoginSwitch={setLoginSwitch}
                setLoginBtnShow={setLoginBtnShow}
                setUserNumber={setUserNumber}
                setBgBackdrop={setBgBackdrop}
                setOpenDialog={setOpenDialog}
                user={user}
              />
            ) : (
              <SignUp setFormTitle={setFormTitle} user={user} />
            )}
          </div>
        </div>
      </dialog>
      <div
        onClick={bgCloseBackdrop}
        className='bg-[rgba(0,0,0,0.5)]  absolute top-0 left-0 w-[100%] h-[100vh] backdrop-blur-sm'
        style={{ display: bgBackdrop }}
        id='backdrop-bg'
      ></div>
    </header>
  );
};
export default Header;
