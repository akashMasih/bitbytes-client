import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'
import { axios } from '../../service/axios'
import '../contact/contact.css'
import { Link, useNavigate } from 'react-router-dom'
import Background from '../create/Background'
import '../create/login.css'
import Logo from '../../assets/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigation = useNavigate()

    useEffect(() => {
        let savedUser = localStorage.getItem("user")
        if (savedUser) {
            if (savedUser.isPictureSet) {
                navigation("/chat", { replace: true })
            }
            else {
                navigation("/setProfile", { replace: true })
            }

        }
    }, [])
    const submitForm = e => {
        e.preventDefault()
        let config = {
            method: 'Post',
            url: '/user/login',
            data: { email, password }
        }
        axios(config)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("user", JSON.stringify(res.data.user))
                if (res.data.user.isPictureSet) {
                    navigation("/chat", { replace: true })
                }
                else {
                    navigation("/setProfile", { replace: true })
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
                        <input type="text" placeholder='Your Email' onChange={e => setEmail(e.target.value)} value={email} />
                        <input type="password" placeholder='New Password' onChange={e => setPassword(e.target.value)} value={password} />
                        <input type="submit" value="Login" className='btn btn-primary login-btn' />
                        <span>Don't have an account <Link to="/create">Register</Link></span>
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

export default Login