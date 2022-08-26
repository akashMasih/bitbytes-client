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
import { Buffer } from "buffer";
import loader from "../../assets/loader.gif";


function SetProfile() {
    const navigation = useNavigate()
    const [avatars, setAvatars] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAvatar, setSelectedAvatar] = useState(undefined);
    const api = `https://api.multiavatar.com/4645646`;

    useEffect(async () => {
        const data = [];
        for (let i = 0; i < 4; i++) {
            const image = await axios.get(
                `${api}/${Math.round(Math.random() * 1000)}`
            );
            const buffer = new Buffer(image.data);
            data.push(buffer.toString("base64"));
        }
        setAvatars(data);
        setIsLoading(false);
    }, []);

    const setProfilePicture = async () => {
        if (selectedAvatar === undefined) {
            toast.error("Please select an avatar",);
        } else {
            const user = await JSON.parse(
                localStorage.getItem("user")
            );

            const { data } = await axios.post(`${'/user/setProfile'}/${user.id}`, {
                image: `data:image/svg+xml;base64,${avatars[selectedAvatar]}`
            });

            if (Object.keys(data).length !== 0) {
                user.isPictureSet = true;
                user.picture = data.image;
                localStorage.setItem('user', JSON.stringify(user));
                navigation("/chat", { replace: true })
            } else {
                toast.error("Error setting avatar. Please try again.");
            }
        }
    };

    return (
        <>
            <div className="loginContainer">
                {isLoading ?
                    <img src={loader} alt="loader" className="loader" />
                    :

                    <div className='setProfile'>
                        <span>Pick avtar as your profile picture</span>
                        <div className="avtars">
                            {avatars.map((avatar, index) => (
                                <div
                                    className={`avatar ${selectedAvatar === index ? "selected" : ""
                                        }`}
                                >
                                    <img
                                        src={`data:image/svg+xml;base64,${avatar}`}
                                        alt="avatar"
                                        key={avatar}
                                        onClick={() => setSelectedAvatar(index)}
                                    />
                                </div>
                            )
                            )}
                        </div>
                        <button className='btn btn-primary' onClick={setProfilePicture}>Set avatar</button>
                    </div>
                }
            </div>
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
            <Background />
        </>
    )
}

export default SetProfile