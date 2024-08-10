import React, { useState } from 'react';
import { Button, Checkbox, Col, Input, Row, Select } from "antd";
import './index.scss';

import CheckIcon from '../../assets/images/check.svg'
import { Link } from 'react-router-dom';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const CustomerInfo = () => {
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    let recognition;

    const startListening = () => {
        if (!('webkitSpeechRecognition' in window)) {
            alert('Your browser does not support speech recognition.');
            return;
        }

        recognition = new window.webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;

        recognition.onstart = () => {
            setIsListening(true);
            console.log('Speech recognition started');
        };

        recognition.onresult = (event) => {
            const currentTranscript = Array.from(event.results)
                .map(result => result[0].transcript)
                .join(' ');
            setTranscript(currentTranscript);
        };

        recognition.onend = () => {
            setIsListening(false);
            console.log('Speech recognition ended');
        };

        recognition.onerror = (event) => {
            console.log('Error occurred in recognition: ' + event.error);
        };

        recognition.start();
    };

    const stopListening = () => {
        if (recognition) {
            recognition.stop();
        }
    };

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
                        <Select>
                            <Select.Option value="sample1">Male</Select.Option>
                            <Select.Option value="sample2">Female</Select.Option>
                        </Select>
                    </Col>
                    <Col span={4}><Input /></Col>
                    <Col span={3}><Input /></Col>
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
                    <Col span={3}><Input /></Col>
                    <Col span={4}><Input /></Col>
                    <Col span={2}><Input /></Col>
                </Row>

                <Row className='align-items-center' gutter={15} style={{ marginBlockStart: 10 }}>
                    <Col span={3} className='text-end'><label className='form-label'>Significant Other</label></Col>
                    <Col span={2}>
                        <Select>
                            <Select.Option value="sample1">Male</Select.Option>
                            <Select.Option value="sample2">Female</Select.Option>
                        </Select>
                    </Col>
                    <Col span={4}><Input /></Col>
                    <Col span={3}><Input /></Col>
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
                    <Col span={3}><Input /></Col>
                    <Col span={2} className='text-end'><label className='form-label'>State/Province</label></Col>
                    <Col span={3}>
                        <Select>
                            <Select.Option value="Califonia">Califonia</Select.Option>
                        </Select>
                    </Col>
                    <Col span={1} className='text-end'><label className='form-label'>Zip</label></Col>
                    <Col span={3}><Input /></Col>
                </Row>
                <Row className='align-items-center' gutter={15} style={{ marginBlockStart: 10 }}>
                    <Col span={3} className='text-end'><label className='form-label'>Country</label></Col>
                    <Col span={3}><Input /></Col>
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
                    <Button type='primary'>Save</Button>
                    <Button type='primary'>Reset</Button>
                    <Button type='primary'>Close</Button>
                </div>

                {/* <div>
                    <h1>Speech to Text</h1>
                    <button>
                        {isListening ? 'Stop Listening' : 'Start Listening'}
                    </button>
                </div> */}

                {isListening ?
                    <div className='aicustomer-talk'>
                        <div className='aicustomer-talk-inner'>
                            {transcript}
                        </div>
                        <Link to='/customer-info-filled' className='arrow-send'>
                            <img src={CheckIcon} alt='' />
                        </Link>
                    </div>
                    :
                    null
                }
    
                <button onClick={isListening ? stopListening : startListening} className={isListening ? 'voice-btn listning-voice' : 'voice-btn'}>
                    <img alt='' src={`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20data-name%3D%22Layer%201%22%20viewBox%3D%220%200%20512%20512%22%3E%3Cg%20data-name%3D%22%20Path%20%22%3E%3Cpath%20fill%3D%22%23b3d1e7%22%20d%3D%22M309.14%2C43.12A75.682%2C75.682%2C0%2C0%2C0%2C180%2C96.51v166.5a75.5%2C75.5%2C0%2C0%2C0%2C151%2C0V96.51A75.059%2C75.059%2C0%2C0%2C0%2C309.14%2C43.12Z%22%2F%3E%3Crect%20width%3D%22104%22%20height%3D%2232%22%20x%3D%22204%22%20y%3D%22459%22%20fill%3D%22%23b3d1e7%22%2F%3E%3C%2Fg%3E%3Cpath%20fill%3D%22%23dfe8f4%22%20d%3D%22M385%2C201v63.61A129.022%2C129.022%2C0%2C0%2C1%2C278.94%2C391.88l-4.94.88V459H238V392.76l-4.94-.88A129.022%2C129.022%2C0%2C0%2C1%2C127%2C264.61V201h32v63.61c0%2C53.65%2C43.51%2C97.3%2C97%2C97.3s97-43.65%2C97-97.3V201Z%22%2F%3E%3Crect%20width%3D%22151%22%20height%3D%2286.5%22%20x%3D%22180.5%22%20y%3D%22136.51%22%20fill%3D%22%239fe2e0%22%2F%3E%3Cpath%20fill%3D%22%2399bace%22%20d%3D%22M210%2C263.01V96.51A75.6%2C75.6%2C0%2C0%2C1%2C270.632%2C22.5%2C75.674%2C75.674%2C0%2C0%2C0%2C180%2C96.51v166.5a75.545%2C75.545%2C0%2C0%2C0%2C90.5%2C74.005A75.519%2C75.519%2C0%2C0%2C1%2C210%2C263.01Z%22%2F%3E%3Crect%20width%3D%2230%22%20height%3D%2286.5%22%20x%3D%22180.5%22%20y%3D%22136.51%22%20fill%3D%22%238ececb%22%2F%3E%3Cpath%20fill%3D%22%23284268%22%20d%3D%22M255.5%2C344.508a81.593%2C81.593%2C0%2C0%2C0%2C81.5-81.5V96.508a81.5%2C81.5%2C0%2C0%2C0-163%2C0v166.5A81.593%2C81.593%2C0%2C0%2C0%2C255.5%2C344.508Zm-69.5-248a69.5%2C69.5%2C0%2C0%2C1%2C139%2C0V131H186ZM186%2C143H325v74H186Zm0%2C86H325v34.008a69.5%2C69.5%2C0%2C1%2C1-139%2C0Z%22%2F%3E%3Crect%20width%3D%2212%22%20height%3D%2238%22%20x%3D%22265%22%20y%3D%22161%22%20fill%3D%22%23284268%22%2F%3E%3Crect%20width%3D%2212%22%20height%3D%2238%22%20x%3D%22235%22%20y%3D%22161%22%20fill%3D%22%23284268%22%2F%3E%3Crect%20width%3D%2212%22%20height%3D%2238%22%20x%3D%22205%22%20y%3D%22161%22%20fill%3D%22%23284268%22%2F%3E%3Crect%20width%3D%2212%22%20height%3D%2238%22%20x%3D%22295%22%20y%3D%22161%22%20fill%3D%22%23284268%22%2F%3E%3Cpath%20fill%3D%22%23284268%22%20d%3D%22M196%2096.508V118h12V96.508a47.284%2047.284%200%200%201%2015.3-34.654L214.97%2053.1A59.839%2059.839%200%200%200%20196%2096.508zM223.161%2046.91l6.639%2010a47.4%2047.4%200%200%201%208.807-4.6l-4.41-11.16A59.453%2059.453%200%200%200%20223.161%2046.91zM232%20397.781V453H204a6%206%200%200%200-6%206v32a6%206%200%200%200%206%206H308a6%206%200%200%200%206-6V459a6%206%200%200%200-6-6H280V397.781A135.009%20135.009%200%200%200%20391%20264.61V201a6%206%200%200%200-6-6H353a6%206%200%200%200-6%206v63.61c0%2050.345-40.822%2091.3-91%2091.3s-91-40.958-91-91.3V201a6%206%200%200%200-6-6H127a6%206%200%200%200-6%206v63.61A135.009%20135.009%200%200%200%20232%20397.781zM302%20465v20H210V465zM133%20207h20v57.61c0%2056.962%2046.206%20103.3%20103%20103.3s103-46.341%20103-103.3V207h20v57.61A123.018%20123.018%200%200%201%20277.877%20385.97l-4.939.888a6%206%200%200%200-4.938%205.9V453H244V392.763a6%206%200%200%200-4.938-5.9l-4.939-.888A123.018%20123.018%200%200%201%20133%20264.61z%22%2F%3E%3C%2Fsvg%3E`} />
                </button>

            </div>

        </div>
    )
}

export default CustomerInfo;