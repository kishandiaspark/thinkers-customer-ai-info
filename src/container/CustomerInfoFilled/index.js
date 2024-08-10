import React from 'react';
import { Button, Checkbox, Col, Input, Row, Select } from "antd";
import './index.scss';
import { Link } from 'react-router-dom';

const CustomerInfoFilled = () => {
    return (
        <div className='customerinfo-section'>
            <div className='header-row'>
                <Button type='primary'>Customer</Button>
                <Button>Appraisal</Button>
                <Button>Receivables</Button>
                <Button>Family</Button>
                <Button>Family Transactions</Button>
                <Button>Gift Card</Button>
            </div>
            <div className='customerinfo-content'>
                <div className='customerinfo-sublink'>
                    <li>Customer</li>
                    <li>Notes</li>
                    <li>Group</li>
                    <li>Connectivity</li>
                    <li>Family</li>
                    <li>Finger Size(Self)</li>
                    <li>Finger Size(Significant Other)</li>
                </div>

                <Row gutter={15}>
                    <Col span={6}>
                        <label className='form-label'>Customer #</label>
                        <Input />
                    </Col>
                    <Col span={6}>
                        <label className='form-label'>Category</label>
                        <Input suffix={<svg viewBox="0 0 22 18.48">
                            <path d="M21.353.875c-4.54-.639-7.648.058-9.562,1.664a5.865,5.865,0,0,0-.791.8,5.972,5.972,0,0,0-.792-.8C8.294.934,5.187.236.647.875L0,.966V16.255L.8,16.2,1,16.186a17.766,17.766,0,0,1,6.289.879,26.1,26.1,0,0,1,3.7,1.961l.083.094.035-.029h0l0,0,.356-.294a10.674,10.674,0,0,1,3.25-1.729A17.772,17.772,0,0,1,21,16.186l.195.011.8.059V.966Zm-11.1,15.879a13.07,13.07,0,0,0-2.489-1.139,19.043,19.043,0,0,0-6.264-.97V2.309c3.786-.435,6.278.17,7.759,1.412a3.809,3.809,0,0,1,.85.985,2.384,2.384,0,0,1,.143.282ZM20.5,14.645a19.04,19.04,0,0,0-6.264.97,13.1,13.1,0,0,0-2.488,1.138V4.985a2.5,2.5,0,0,1,.143-.28,3.81,3.81,0,0,1,.851-.985c1.48-1.242,3.972-1.847,7.758-1.412V14.645Z" transform="translate(0 -0.64)" />
                        </svg>} />
                    </Col>
                    <Col span={6}>
                        <label className='form-label'>Family #</label>
                        <Input suffix={<svg viewBox="0 0 22 18.48">
                            <path d="M21.353.875c-4.54-.639-7.648.058-9.562,1.664a5.865,5.865,0,0,0-.791.8,5.972,5.972,0,0,0-.792-.8C8.294.934,5.187.236.647.875L0,.966V16.255L.8,16.2,1,16.186a17.766,17.766,0,0,1,6.289.879,26.1,26.1,0,0,1,3.7,1.961l.083.094.035-.029h0l0,0,.356-.294a10.674,10.674,0,0,1,3.25-1.729A17.772,17.772,0,0,1,21,16.186l.195.011.8.059V.966Zm-11.1,15.879a13.07,13.07,0,0,0-2.489-1.139,19.043,19.043,0,0,0-6.264-.97V2.309c3.786-.435,6.278.17,7.759,1.412a3.809,3.809,0,0,1,.85.985,2.384,2.384,0,0,1,.143.282ZM20.5,14.645a19.04,19.04,0,0,0-6.264.97,13.1,13.1,0,0,0-2.488,1.138V4.985a2.5,2.5,0,0,1,.143-.28,3.81,3.81,0,0,1,.851-.985c1.48-1.242,3.972-1.847,7.758-1.412V14.645Z" transform="translate(0 -0.64)" />
                        </svg>} />
                    </Col>
                    <Col span={6}>
                        <label className='form-label'>Salesperson</label>
                        <Input />
                    </Col>
                </Row>

                <Row gutter={15} style={{ marginBlockStart: 15 }}>
                    <Col span={3}>&nbsp;</Col>
                    <Col span={2}><label>Gender</label></Col>
                    <Col span={4}><label>First Name</label></Col>
                    <Col span={3}><label>Last Name</label></Col>
                    <Col span={3}><label>Birth Date</label></Col>
                    <Col span={3}><label>Cell Phone</label></Col>
                    <Col span={4}><label>Email</label></Col>
                    <Col span={2}><label>Work Phone</label></Col>
                </Row>

                <Row className='align-items-center' gutter={15} style={{ marginBlockStart: 10 }}>
                    <Col span={3} className='text-end'><label className='form-label'>Customer:</label></Col>
                    <Col span={2}>
                        <Select defaultValue='sample1'>
                            <Select.Option value="sample1">Male</Select.Option>
                            <Select.Option value="sample2">Female</Select.Option>
                        </Select>
                    </Col>
                    <Col span={4}><Input defaultValue='John' /></Col>
                    <Col span={3}><Input defaultValue='Wick' /></Col>
                    <Col span={3}>
                        <Row gutter={10}>
                            <Col span={12}>
                                <Select>
                                    <Select.Option value="jan">Jan</Select.Option>
                                    <Select.Option value="feb">Feb</Select.Option>
                                    <Select.Option value="march">March</Select.Option>
                                    <Select.Option value="april">April</Select.Option>
                                    <Select.Option value="may">May</Select.Option>
                                    <Select.Option value="june">June</Select.Option>
                                    <Select.Option value="july">July</Select.Option>
                                    <Select.Option value="aug">Aug</Select.Option>
                                    <Select.Option value="sep">Sep</Select.Option>
                                    <Select.Option value="oct">Oct</Select.Option>
                                    <Select.Option value="nov">Nov</Select.Option>
                                    <Select.Option value="dec">Dec</Select.Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select>
                                    <Select.Option value="d1">1</Select.Option>
                                    <Select.Option value="d2">2</Select.Option>
                                    <Select.Option value="d3">3</Select.Option>
                                    <Select.Option value="d4">4</Select.Option>
                                    <Select.Option value="d5">5</Select.Option>
                                    <Select.Option value="d6">6</Select.Option>
                                    <Select.Option value="d7">7</Select.Option>
                                    <Select.Option value="d8">8</Select.Option>
                                    <Select.Option value="d9">9</Select.Option>
                                    <Select.Option value="d10">10</Select.Option>
                                    <Select.Option value="d11">11</Select.Option>
                                    <Select.Option value="d12">12</Select.Option>
                                    <Select.Option value="d13">13</Select.Option>
                                    <Select.Option value="d14">14</Select.Option>
                                    <Select.Option value="d15">15</Select.Option>
                                    <Select.Option value="d16">16</Select.Option>
                                    <Select.Option value="d17">17</Select.Option>
                                    <Select.Option value="d18">18</Select.Option>
                                    <Select.Option value="d19">19</Select.Option>
                                    <Select.Option value="d20">20</Select.Option>
                                    <Select.Option value="d21">21</Select.Option>
                                    <Select.Option value="d22">22</Select.Option>
                                    <Select.Option value="d23">23</Select.Option>
                                    <Select.Option value="d24">24</Select.Option>
                                    <Select.Option value="d25">25</Select.Option>
                                    <Select.Option value="d26">26</Select.Option>
                                    <Select.Option value="d27">27</Select.Option>
                                    <Select.Option value="d28">28</Select.Option>
                                    <Select.Option value="d29">29</Select.Option>
                                    <Select.Option value="d30">30</Select.Option>
                                    <Select.Option value="d31">31</Select.Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={3}><Input defaultValue='7575757574' /></Col>
                    <Col span={4}><Input /></Col>
                    <Col span={2}><Input /></Col>
                </Row>

                <Row className='align-items-center' gutter={15} style={{ marginBlockStart: 10 }}>
                    <Col span={3} className='text-end'><label className='form-label'>Significant Other</label></Col>
                    <Col span={2}>
                        <Select defaultValue='sample1'>
                            <Select.Option value="sample1">Female</Select.Option>
                            <Select.Option value="sample2">Male</Select.Option>
                        </Select>
                    </Col>
                    <Col span={4}><Input defaultValue='Lana' /></Col>
                    <Col span={3}><Input /></Col>
                    <Col span={3}>
                        <Row gutter={10}>
                            <Col span={12}>
                                <Select defaultValue='aug'>
                                    <Select.Option value="jan">Jan</Select.Option>
                                    <Select.Option value="feb">Feb</Select.Option>
                                    <Select.Option value="march">March</Select.Option>
                                    <Select.Option value="april">April</Select.Option>
                                    <Select.Option value="may">May</Select.Option>
                                    <Select.Option value="june">June</Select.Option>
                                    <Select.Option value="july">July</Select.Option>
                                    <Select.Option value="aug">Aug</Select.Option>
                                    <Select.Option value="sep">Sep</Select.Option>
                                    <Select.Option value="oct">Oct</Select.Option>
                                    <Select.Option value="nov">Nov</Select.Option>
                                    <Select.Option value="dec">Dec</Select.Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select defaultValue='d1'>
                                    <Select.Option value="d1">1</Select.Option>
                                    <Select.Option value="d2">2</Select.Option>
                                    <Select.Option value="d3">3</Select.Option>
                                    <Select.Option value="d4">4</Select.Option>
                                    <Select.Option value="d5">5</Select.Option>
                                    <Select.Option value="d6">6</Select.Option>
                                    <Select.Option value="d7">7</Select.Option>
                                    <Select.Option value="d8">8</Select.Option>
                                    <Select.Option value="d9">9</Select.Option>
                                    <Select.Option value="d10">10</Select.Option>
                                    <Select.Option value="d11">11</Select.Option>
                                    <Select.Option value="d12">12</Select.Option>
                                    <Select.Option value="d13">13</Select.Option>
                                    <Select.Option value="d14">14</Select.Option>
                                    <Select.Option value="d15">15</Select.Option>
                                    <Select.Option value="d16">16</Select.Option>
                                    <Select.Option value="d17">17</Select.Option>
                                    <Select.Option value="d18">18</Select.Option>
                                    <Select.Option value="d19">19</Select.Option>
                                    <Select.Option value="d20">20</Select.Option>
                                    <Select.Option value="d21">21</Select.Option>
                                    <Select.Option value="d22">22</Select.Option>
                                    <Select.Option value="d23">23</Select.Option>
                                    <Select.Option value="d24">24</Select.Option>
                                    <Select.Option value="d25">25</Select.Option>
                                    <Select.Option value="d26">26</Select.Option>
                                    <Select.Option value="d27">27</Select.Option>
                                    <Select.Option value="d28">28</Select.Option>
                                    <Select.Option value="d29">29</Select.Option>
                                    <Select.Option value="d30">30</Select.Option>
                                    <Select.Option value="d31">31</Select.Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={3}><Input /></Col>
                    <Col span={4}><Input /></Col>
                    <Col span={2}><Input /></Col>
                </Row>

                <Row className='align-items-center' gutter={15} style={{ marginBlockStart: 10 }}>
                    <Col span={3} className='text-end'><label className='form-label'>Anniversary Date</label></Col>
                    <Col span={3}>
                        <Row gutter={10}>
                            <Col span={12}>
                                <Select>
                                    <Select.Option value="jan">Jan</Select.Option>
                                    <Select.Option value="feb">Feb</Select.Option>
                                    <Select.Option value="march">March</Select.Option>
                                    <Select.Option value="april">April</Select.Option>
                                    <Select.Option value="may">May</Select.Option>
                                    <Select.Option value="june">June</Select.Option>
                                    <Select.Option value="july">July</Select.Option>
                                    <Select.Option value="aug">Aug</Select.Option>
                                    <Select.Option value="sep">Sep</Select.Option>
                                    <Select.Option value="oct">Oct</Select.Option>
                                    <Select.Option value="nov">Nov</Select.Option>
                                    <Select.Option value="dec">Dec</Select.Option>
                                </Select>
                            </Col>
                            <Col span={12}>
                                <Select>
                                    <Select.Option value="d1">1</Select.Option>
                                    <Select.Option value="d2">2</Select.Option>
                                    <Select.Option value="d3">3</Select.Option>
                                    <Select.Option value="d4">4</Select.Option>
                                    <Select.Option value="d5">5</Select.Option>
                                    <Select.Option value="d6">6</Select.Option>
                                    <Select.Option value="d7">7</Select.Option>
                                    <Select.Option value="d8">8</Select.Option>
                                    <Select.Option value="d9">9</Select.Option>
                                    <Select.Option value="d10">10</Select.Option>
                                    <Select.Option value="d11">11</Select.Option>
                                    <Select.Option value="d12">12</Select.Option>
                                    <Select.Option value="d13">13</Select.Option>
                                    <Select.Option value="d14">14</Select.Option>
                                    <Select.Option value="d15">15</Select.Option>
                                    <Select.Option value="d16">16</Select.Option>
                                    <Select.Option value="d17">17</Select.Option>
                                    <Select.Option value="d18">18</Select.Option>
                                    <Select.Option value="d19">19</Select.Option>
                                    <Select.Option value="d20">20</Select.Option>
                                    <Select.Option value="d21">21</Select.Option>
                                    <Select.Option value="d22">22</Select.Option>
                                    <Select.Option value="d23">23</Select.Option>
                                    <Select.Option value="d24">24</Select.Option>
                                    <Select.Option value="d25">25</Select.Option>
                                    <Select.Option value="d26">26</Select.Option>
                                    <Select.Option value="d27">27</Select.Option>
                                    <Select.Option value="d28">28</Select.Option>
                                    <Select.Option value="d29">29</Select.Option>
                                    <Select.Option value="d30">30</Select.Option>
                                    <Select.Option value="d31">31</Select.Option>
                                </Select>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        /
                    </Col>
                    <Col span={3}><Input /></Col>
                </Row>

                <Row gutter={15} style={{ marginBlockStart: 10 }}>
                    <Col span={3} className='text-end'><label className='form-label'>Address</label></Col>
                    <Col span={10}>
                        <Input />
                        <Input style={{ marginBlockStart: 10 }} />
                    </Col>
                </Row>

                <Row className='align-items-center' gutter={15} style={{ marginBlockStart: 10 }}>
                    <Col span={3} className='text-end'><label className='form-label'>City</label></Col>
                    <Col span={3}><Input defaultValue='Edison' /></Col>
                    <Col span={2} className='text-end'><label className='form-label'>State/Province</label></Col>
                    <Col span={3}>
                        <Select defaultValue="nj">
                            <Select.Option value="nj">New Jersey</Select.Option>
                        </Select>
                    </Col>
                    <Col span={1} className='text-end'><label className='form-label'>Zip</label></Col>
                    <Col span={3}><Input /></Col>
                </Row>
                <Row className='align-items-center' gutter={15} style={{ marginBlockStart: 10 }}>
                    <Col span={3} className='text-end'><label className='form-label'>Country</label></Col>
                    <Col span={3}><Input defaultValue="USA" /></Col>
                </Row>

                <div className='buys-on'>
                    <h3>Buys On</h3>
                    <Checkbox>Birthday</Checkbox>
                    <Checkbox>S/O Birthday</Checkbox>
                    <Checkbox>Anniversary</Checkbox>
                    <Checkbox>Chrismas</Checkbox>
                    <Checkbox>Special Sales</Checkbox>
                    <Checkbox>Event</Checkbox>
                </div>

                <div className='bottom-action'>
                    <Link to='/customer-verify'><Button type='primary'>Save</Button></Link>
                    <Link to='/'><Button type='primary'>Reset</Button></Link>
                    <Link to='/'><Button type='primary'>Close</Button></Link>
                </div>


            </div>

        </div>
    )
}

export default CustomerInfoFilled;