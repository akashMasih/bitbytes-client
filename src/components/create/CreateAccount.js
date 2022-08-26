import React from 'react'
import Background from './Background'
import './login.css'
import Logo from '../../assets/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { axios } from '../../service/axios';
import { Link, useNavigate } from 'react-router-dom'

function CreateAccount() {
    let initValue = {
        fullName: "",
        email: "",
        mobile_number: "",
        password: ""

    }
    const navigation = useNavigate()
    const [values, setValues] = useState(initValue)


    const onchangeValue = e => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const submitForm = e => {
        e.preventDefault()
        let config = {
            method: 'Post',
            url: '/user/register',
            data: values
        }
        axios(config)
            .then(res => {
                if (res && res.data && res.data.message) {
                    toast.success(res.data.message)
                    localStorage.setItem('user', res.data.user)
                    if (res.data.user.isPictureSet) {
                        navigation("/chat", { replace: true })
                    }
                    else {
                        navigation("/setProfile", { replace: true })
                    }

                }
            })
            .catch(err => {
                if (err && err.response && err.response.data) {
                    toast.error(err.response.data.error);
                }
                else {
                    toast.error("Internal Error");
                }
            })


    }


    return (
        <>
            <div className="loginContainer">
                <div className='login__form'>
                    <div className="brand">
                        <img src={Logo} alt="logo" />
                    </div>
                    <form onSubmit={submitForm}>
                        <input type="text" placeholder='Your Full Name' onChange={onchangeValue} value={values.fullName} name="fullName" />
                        <input type="text" placeholder='Your Email' onChange={onchangeValue} value={values.email} name="email" />
                        <input type="text" placeholder='Your Mobile Number' onChange={onchangeValue} value={values.mobile_number} name="mobile_number" />
                        <input type="password" placeholder='New Password' onChange={onchangeValue} value={values.password} name="password" />
                        <input type="submit" value="Create User" className='btn btn-primary login-btn' />
                        <span>Already have an account <Link to="/login">Login</Link></span>
                    </form>
                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>

            </div>
            <Background />
        </>
    )
}

export default CreateAccount