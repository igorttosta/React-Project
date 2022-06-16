import React from 'react';
import './login.css';

export default function Login() {
    return (
        <div className="login-container">
            <div className='form-head'>
                <p>Login</p>
            </div>
            <div className="form-block">
                <div className='form-block-1'>
                    <input type="text" placeholder="Nome" />
                </div>
                <div className='form-block-2'>
                    <input type="text" placeholder="Nome" />
                </div>
            </div>
            <div className='button-login'>
                <button className='btn-login'>Logar</button>
            </div>
        </div>
    )
}