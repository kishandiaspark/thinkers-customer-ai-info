import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import UserImg from '../../assets/images/user.png';
import logoMain from '../../assets/images/slogo.svg';

const CustomerInside = () => {
    return (
        <div className='customerinside-section'>
            <div className='header-row'>
                <div className='logo-left'>
                    <Link to='/'><img src={logoMain} alt='' /></Link>
                    John Wick
                     <span style={{ marginRight: 10, marginLeft: 10 }}>|</span> 
                     The Ethical Loyalist
                    <span style={{ marginRight: 10, marginLeft: 10 }}>|</span> 2011
                </div>
                <div className=''>
                    27 Visits    
                </div>
                <div className=''>
                    <div className='user-right'>
                        <img src={UserImg} alt='' />
                        <div>
                            <p>Chris Daden</p>
                            <small>LX901</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className='customerinfo-content'>
                <div className='upper-info'>
                    <div className='titles'>
                        Spouse: Lana
                    </div>
                    <div className='content-area'>
                        <div className='content-row'>
                            <div className='col1'>
                                <h3>Open Orders</h3>
                            </div>
                            <div className='col2'>
                                <h3>Repair Orders</h3>
                            </div>
                            <div className='col3'>
                                <h3>Credit Meno</h3>
                            </div>
                            <div className='col4'>
                                <h3>Gift Card</h3>
                            </div>
                        </div>
                        <div className='content-row'>
                            <div className='col1'>
                                <p>14 k Diamond Ring</p>
                                <small>Purchase Date - March 2024</small>
                            </div>
                            <div className='col2'>
                                <p>Scratch on the back case</p>
                                <small>Purchase Date - January 2024</small>
                            </div>
                            <div className='col3'>
                                <p>$100</p>
                            </div>
                            <div className='col4'>
                                <p>$50</p>
                                <small>Purchase Date - March 2024</small>
                            </div>
                        </div>
                        <div className='content-row' style={{ marginBlockStart: 15 }}>
                            <div className='col1'>
                                <p>Gold Pandent</p>
                                <small>Purchase Date - May 2024</small>
                            </div>
                            <div className='col2'>
                                <p>Scratch on the back case</p>
                                <small>Purchase Date - Sep 2024</small>
                            </div>
                            <div className='col3'>
                                <p>$100</p>
                            </div>
                            <div className='col4'>
                                <p>$50</p>
                                <small>Purchase Date - March 2024</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bottom-info'>
                    <h2>The Ethical Loyalist</h2>
                    <div className='widgets-row'>
                        <div className='widgets-col'>
                            Spouse birthday next week, Inquired about new collection last week, <b>Show Rings from the new Eternity collection</b>
                        </div>
                        <div className='widgets-col'>
                            Last sale two sales are highest among all, <b>Let JACK take the charge,</b> Jack knows John’s nerves
                        </div>
                        <div className='widgets-col'>
                            He is 200 points away from upgrading to the Diamond tire, Let him <b>purchase anything upwards of $20K to unlock Diamond</b>
                        </div>
                        <div className='widgets-col'>
                            Last 5 Purchase <b>ring, Silver</b> is preferred, Growing preference for lab grown, <b>Rolex</b> Enthusiast <b>Automatic</b> Movement
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerInside;