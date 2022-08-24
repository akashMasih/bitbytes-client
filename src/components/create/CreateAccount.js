import React from 'react'
import '../contact/contact.css'

function CreateAccount() {
    return (
        <div className="login">
            <section id="contact">
                <h2>Create Your Account</h2>
                <div className="container">
                    <div className="contact__form">
                        <form >
                            <input type="text" placeholder='Your Full Name' name="name" />
                            <input type="text" placeholder='Your Email' name="email" />
                            <input type="text" placeholder='Your Mobile Number' name="number" />
                            <input type="password" placeholder='New Password' name="password" />
                            <input type="submit" value="Create" className='btn btn-primary' style={{ width: '100%' }} />
                        </form>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default CreateAccount