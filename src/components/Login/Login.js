import React from 'react'
import '../contact/contact.css'


function Login() {
    return (
        <div className="login">
            <section id="contact">
                <h2>Login</h2>
                <div className="container">
                    <div className="contact__form">
                        <form >
                            <input type="text" placeholder='Your Email' name="email" />
                            <input type="password" placeholder='Your Password' name="password" />
                            <input type="submit" value="Submit" className='btn btn-primary' style={{ width: '100%' }} />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login