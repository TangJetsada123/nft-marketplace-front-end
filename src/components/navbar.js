<<<<<<< HEAD
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import "./navbar.css"
import styled from 'styled-components'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import WalletModal from './ui/modal/wallet-modal';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import metamask from '../assets/images/metamask.png'
import 'bootstrap/dist/css/bootstrap.min.css'
<<<<<<< HEAD
import WalletModal from "./ui/modal/wallet-modal";
=======
>>>>>>> f75c97f (feat: login metamask)
=======
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./navbar.css";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import WalletModal from "./ui/modal/wallet-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import metamask from "../assets/images/metamask.png";
import "bootstrap/dist/css/bootstrap.min.css";

>>>>>>> 2637ef3 (style: create component)
const Wallet = styled.button`
  margin-left: 65%;
`;

function Navbar() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [choice, setChoice] = useState(false);
  const [registerAccount, setRegisterAccount] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const [createNewAccount, setCreateNewAccount] = useState(false);
  const [wallet, setWallet] = useState([]);
  const [loginMetamask, setLoginMetamask] = useState(false);
  const [signature, setSignature] = useState("");
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/auth/create", data)
      .then((response) => setWallet(response.data));
    setCreateNewAccount(true);
  };
  const CreateAccount = () => {
    return (
      <div>
        <div className="  bg-zinc-200 opacity-100 fixed inset-0 z-50 justify-center">
          <div className="flex h-screen justify-center items-center ">
            <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-black rounded-xl ">
              <div className="flex  text-lg  text-zinc-600 mb-10 ">
                Create Your new Account Success!
              </div>
              <div className="flex-box ml-2 mt-2">
                <div>Your address is {wallet.address}</div>
                <div>Your privateKey is {wallet.privateKey}</div>
              </div>
              <button></button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const clicked = () => {
    setShowLogin(true);
  };
  const clickedRegister = () => {
    setRegisterAccount(true);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const payload = {
      passwordLogin,
    };
    console.log("payload login", payload);

    axios
      .get("http://localhost:3000/api/auth/signature", payload.passwordLogin)
      .then((response) => {
        localStorage.setItem(
          "Token",
          JSON.stringify(response.data.accessToken)
        );
        setLoginMetamask(true);
        navigate("/account");
      });
  };

  return (
    <div>
      <nav className="w-full relative z-40 flex items-center">
        <div className="w-full top-0 left-0 bg-white h-[50px] absolute z-10 md:h-[90px]">
          <div className="flex  items-center  pt-2">
            <div className="flex items-center">
              <Link to="home">
                <img
                  src={logo}
                  className="w-24 h-8 ml-2 order-1 cursor-pointer md:w-32 md:h-14"
                  alt="logo"
                />
              </Link>
              <div className="lg:border-l-[1.5px] lg:border-[#D9D9D9] order-2 lg:mx-2 h-12">
                <div className="hidden items-center order-3 lg:flex md:w-auto">
                  <ul className="flex flex-col py-3 mx-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-nav">
                    <li>
                      <Link to="/market">Expore</Link>
                    </li>
                    <li>
                      <Link to="/create">Create</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Wallet
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={clicked}
            >
              Connect Wallet
            </Wallet>
            {choice && (
              <div>
                <div className="   bg-zinc-200 opacity-95 fixed inset-0 z-50   ">
                  <div className="flex h-screen justify-center items-center ">
                    <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-black rounded-xl ">
                      <div className="flex  text-lg  text-zinc-600 mb-10 ml-24">
                        You are Signing
                      </div>
                      <img src={metamask} className="w-44 ml-16" alt="" />
                      <div className="flex ml-2 mt-2">
                        <form onSubmit={onSubmitLogin}>
                          <div class="mb-6">
                            <label
                              for="password"
                              class="block mb-2 text-sm font-medium text-gray-900 "
                            >
                              Your password
                            </label>
                            <input
                              type="password"
                              id="password"
                              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                                            "
                              required
                              onChange={(e) => setPasswordLogin(e.target.value)}
                            />
                          </div>
                          <div class="flex items-start mb-6 gap-5">
                            <button
                              type="submit"
                              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                            >
                              Submit
                            </button>
                            <div className="mt-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">
                              <button onClick={clickedRegister}>
                                Don't have an account?
                              </button>
                            </div>
                          </div>
                        </form>
                        {registerAccount && (
                          <div className="  bg-zinc-200 opacity-100 fixed inset-0 z-50 justify-center">
                            <div className="flex h-screen justify-center items-center ">
                              <div className="flex-col justify-center  bg-white py-12 px-24 border-4 border-black rounded-xl ">
                                <div className="flex  text-lg  text-zinc-600 mb-10 ">
                                  Create Your new password!
                                </div>
                                <div className="flex ml-2 mt-2">
                                  <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="mb-6">
                                      <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 "
                                      >
                                        Your Password
                                      </label>
                                      <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter Password"
                                        id="password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        {...register("password")}
                                        onChange={(e) =>
                                          setPassword(e.target.value)
                                        }
                                        className={`form-control ${
                                          errors.password ? "is-invalid" : ""
                                        }`}
                                      />
                                      <div className="invalid-feedback">
                                        {errors.password?.message}
                                      </div>
                                    </div>
                                    <div class="mb-6 ">
                                      <label
                                        for="password"
                                        class="block mb-2 text-sm font-medium text-gray-900 "
                                      >
                                        Confirm Password
                                      </label>
                                      <input
                                        type="password"
                                        id="password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                        {...register("confirmPwd")}
                                        onChange={(e) =>
                                          setConfirmPassword(e.target.value)
                                        }
                                        className={`form-control ${
                                          errors.confirmPwd ? "is-invalid" : ""
                                        }`}
                                      />
                                      <div className="invalid-feedback">
                                        {errors.confirmPwd?.message}
                                      </div>
                                    </div>
                                    <button
                                      type="submit"
                                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                      Confirm
                                    </button>
                                  </form>
                                  {createNewAccount && <CreateAccount />}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {loginMetamask && <div>Hello world</div>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {showLogin && (
              <WalletModal setShowLogin={setShowLogin} setChoice={setChoice} />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
