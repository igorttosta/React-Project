import React from 'react';
import './user-page.css';
import Login from '../../components/login/login';
import SignIn from '../../components/signin/signin';
import TopBar from '../../components/top-bar/top-bar';
import Footer from '../../components/footer/footer';

export default function UserPage() {
    return (
        <div>
            <div className='top-bar'>
                <TopBar/>
            </div>
            <div className="forms">
                <Login />
                <SignIn />
            </div>

            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}