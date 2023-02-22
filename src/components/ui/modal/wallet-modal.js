import metamask from '../../../assets/images/metamask.png'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import web3 from 'web3'
import jwt_decode from "jwt-decode";

const WalletModal = ({ setOpenLogin, loginSuccess }) => {
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is mendatory')
            .min(3, 'Password must be at 3 char long'),
        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const navigate = useNavigate();
    const [registerAccount, setRegisterAccount] = useState(false);
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const [message, setMessage] = useState('')
    const [createNewAccount, setCreateNewAccount] = useState(false)
    const [wallet, setWallet] = useState([])
    const [loginMetamask, setLoginMetamask] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [signature, setSignature] = useState('');
    const [address, setAddress] = useState('')
    const [token, setToken] = useState('')
    let Web3 = require('web3')
    const clickedRegister = () => {
        setRegisterAccount(true);
    }
    const clickCreate = () => {
        loginSuccess(true);
    }

    const onSubmitLogin = async (e) => {
        e.preventDefault()
        const payload = {
            password: passwordLogin
        }
        console.log(payload.password)
        try {
            await axios
                .post(`https://nft-marketplace-service-production.up.railway.app/api/auth/signature`, payload.password)
                .then((response) => {
                        console.log(response.data.accessToken)
                        setToken(response.data.accessToken)
                        localStorage.setItem('token', JSON.stringify(response.data.accessToken));  
                        setLoginMetamask(true);
                        navigate('/account',{replace: true});
                        setOpenLogin(false);
                    })               
        } catch (error) {
            setErrorLogin(true);
        }
    }
    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState
    const onSubmit = (data) => {
        axios
            .post("https://nft-marketplace-service-production.up.railway.app/api/auth/create", data)
            .then(
                response => {
                    setCreateNewAccount(true)
                    localStorage.setItem('token',response.data)
                    const adr = jwt_decode(response.data)
                    setAddress(adr.sub)
                    axios.get(`https://nft-marketplace-service-production.up.railway.app/api/user/info/${adr.sub}`)
                        .then((res)=> {
                                setWallet(res.data)
                                console.log(res.data)
                        })
                }
            )
    }
    return (
        <div>
            <div className=" bg-zinc-200 opacity-95 fixed inset-0 z-50   ">
                <div className="flex h-screen justify-center items-center ">
                    <div className="flex-col justify-center  bg-white  border-4 border-black rounded-xl ">
                        <div className="flex  text-lg  text-zinc-600 mb-10 ml-5" >You are Signing</div>
                        <img src={metamask} className="w-44" />
                        <div className="flex ml-2 mt-2">
                            {<div className="   bg-zinc-200 opacity-100 fixed inset-0 z-50   ">
                                <div className="flex h-screen justify-center items-center ">
                                    <div className="flex-col bg-white border-4 pl-4 pr-4 pt-4 border-black rounded-xl ">
                                        <div className='flex justify-between'>
                                            <div className="text-lg  text-zinc-600  mb-10 ml-32" >You are Signing</div>
                                            <button onClick={() => setOpenLogin(false)} className=" rounded w-10 h-9 text-white  bg-red-400 ">X</button>
                                            <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                                        </div>
                                        {errorLogin && <div className='alert alert-danger text-center'>Wrong password !!! Please Login again</div>}
                                        <img src={metamask} className="w-44 ml-28" />
                                        <div className="flex ml-2 mt-2">
                                            <form onSubmit={onSubmitLogin}>
                                                <div class="mb-6">
                                                    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 ">Message</label>
                                                    <input type="text"
                                                        id="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                                    " required
                                                        onChange={(e) => setMessage(e.target.value)}
                                                    />
                                                </div>
                                                <div class="mb-6">
                                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                                                    <input type="password"
                                                        id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                                                    " required
                                                        onChange={(e) => setPasswordLogin(e.target.value)}
                                                    />
                                                </div>
                                                <div class="flex items-start mb-6 gap-5">
                                                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " >Submit</button>
                                                    <div className='mt-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'><button onClick={clickedRegister}>Don't have an account?</button></div>
                                                </div>
                                            </form>
                                            {registerAccount &&
                                                <div className="  bg-zinc-200 opacity-100 fixed inset-0 z-50 justify-center">
                                                    <div className="flex h-screen justify-center items-center ">
                                                        <div className="flex-col justify-center  bg-white p-10  border-4 border-black rounded-xl ">
                                                            <div className='flex justify-evenly'>
                                                                <div className="flex  text-lg  text-zinc-600 mb-10 mr-16" >Create Your new password!</div>
                                                                <button onClick={() => setOpenLogin(false)} className=" rounded w-10 h-9 text-white  bg-red-400 ml-22">X</button></div>
                                                            <div className="flex ml-2 mt-2">
                                                                <form onSubmit={handleSubmit(onSubmit)}>
                                                                    <div class="mb-6">
                                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your Password</label>
                                                                        <input type="password" name='password' placeholder='Enter Password' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                                                                            {...register('password')}
                                                                            onChange={(e) => setPassword(e.target.value)}
                                                                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                                        />
                                                                        <div className="invalid-feedback">{errors.password?.message}</div>
                                                                    </div>
                                                                    <div class="mb-6 ">
                                                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                                                                        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required
                                                                            {...register('confirmPwd')}
                                                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                                                            className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                                                                        />
                                                                        <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
                                                                    </div>
                                                                    <button type="submit" className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                                                        onClick={() => loginSuccess(true)}
                                                                    >Confirm</button>
                                                                </form>
                                                                {createNewAccount &&
                                                                    <div className="  bg-zinc-200 opacity-100 fixed inset-0 z-50 justify-center">
                                                                        <div className="flex h-screen justify-center items-center ">
                                                                            <div className="flex-col justify-center  bg-white p-10  border-4 border-black rounded-xl ">
                                                                                <div className='flex justify-evenly'>
                                                                                    <div className="flex  text-lg  text-zinc-600 mb-10 mr-16" >Create Your Account Successfull</div>
                                                                                    <button onClick={() => setOpenLogin(false)} className=" rounded w-10 h-9 text-white  bg-red-400 ml-22">X</button></div>
                                                                                <div>Your address is {address}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletModal;