import React from 'react';
import './signin.css';

export default function SignIn() {
    return (
        <div className="signin-container">
            <div className='form-head'>
                <p>Cadastro</p>
            </div>
            <div className="form-block">
                <div className='form-block-1'>
                    <input type="text" placeholder="Nome" />
                </div>
                <div className='form-block-2'>
                    <input type="text" placeholder="Nome" />
                </div>
            </div>
            <div className='button-signin'>
                <button className='btn-signin'>Cadastrar</button>
            </div>
        </div>
    )
}