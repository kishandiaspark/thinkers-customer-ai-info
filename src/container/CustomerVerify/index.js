import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import './index.scss';

import UserImg from '../../assets/images/user.png';
import logoMain from '../../assets/images/slogo.svg';
import userAlt from '../../assets/images/user-alt.png';
import checkIcon from '../../assets/images/check.svg';

const CustomerVerify = () => {
    return (
        <div className='customerinside-section'>
            <div className='header-row'>
                <div className='logo-left'>
                    <Link to='/'><img src={logoMain} alt='' /></Link>
                    The Ethical Loyalist
                </div>
                <div className=''>

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
            <div className='customerslist'>
                <h2>
                    <img src={userAlt} alt='' />
                    Exiting Customer
                </h2>
                <div className='customerslist-card current'>
                    <Row>
                        <Col span='6'>
                            <label>Name: </label> John Wick
                        </Col>
                        <Col span='6'>
                            <label>City: </label> Edison
                        </Col>
                        <Col span='6'>
                            <label>Phone: </label> (253) 644-2182
                        </Col>
                        <Col span='6'>
                            <label>Customer Id: </label> #456321
                        </Col>
                    </Row>
                    <Link className='check-icon' to='/customer-inside'>
                        <img src={checkIcon} alt='' />
                    </Link>
                </div>
                <div className='customerslist-card'>
                    <Row>
                        <Col span='6'>
                            <label>Name: </label> John Wick
                        </Col>
                        <Col span='6'>
                            <label>City: </label>Denver
                        </Col>
                        <Col span='6'>
                            <label>Phone: </label> (209)-312-4567
                        </Col>
                        <Col span='6'>
                            <label>Customer Id: </label> #276423
                        </Col>
                    </Row>
                </div>
                <div className='customerslist-card'>
                    <Row>
                        <Col span='6'>
                            <label>Name: </label> John Woods
                        </Col>
                        <Col span='6'>
                            <label>City: </label> New York
                        </Col>
                        <Col span='6'>
                            <label>Phone: </label> (717) 550-1675
                        </Col>
                        <Col span='6'>
                            <label>Customer Id: </label> #722401
                        </Col>
                    </Row>
                </div>
                <div className='customerslist-card'>
                    <Row>
                        <Col span='6'>
                            <label>Name: </label> John Wick
                        </Col>
                        <Col span='6'>
                            <label>City: </label> Ohio
                        </Col>
                        <Col span='6'>
                            <label>Phone: </label> (234) 109-6666
                        </Col>
                        <Col span='6'>
                            <label>Customer Id: </label> #342268
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    )
}

export default CustomerVerify;