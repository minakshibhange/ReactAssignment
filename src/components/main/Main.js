import React from 'react';
import Appointment from '../details/Appointment';
import ClientDetails from '../details/ClientDetails';
import Others from '../details/Others';
import ServiceDetails from '../details/ServiceDetails';
import Team from '../details/Team';
import App1 from '../stepper/App1';
import './Main.css';

export default function Main() {
    return (
        <>
            <div className='container main-container'>
                <div className='row'>
                    <div className='wrap-main'>
                        <div className='row'>
                            <h2>Appointments</h2>
                            <p>Appointment List <i className='fa fa-solid fa-greater-than fa-sm text-primary'></i>  Add Appointment</p>
                            <h5> <i className='fa fa-solid fa-less-than fa-sm text-primary'></i> Add Appointments </h5>
                        </div>
                        <div className='row'>
                            <div className='main-header'>
                                <h6>Client Details</h6>
                            </div>
                            <div>
                                <label className='label p-2' type="text" value="client">Client</label>
                                <select className="form-select w-50">
                                    <option selected>Joke Knap</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <ClientDetails></ClientDetails>
                        </div>
                        <div className='row'>
                            <div className='main-header'>
                                <h6>Service Details</h6>
                            </div>
                            <ServiceDetails></ServiceDetails>
                        </div>
                        <div className='row'>
                            <div className='main-header'>
                                <h6>Appointment Details</h6>
                            </div>
                            <Appointment></Appointment>
                        </div>
                        <div className='row'>
                            <div className='main-header'>
                                <h6>Team Details</h6>
                            </div>
                            <Team></Team>
                        </div>
                        <div className='row'>
                            <div className='main-header'>
                                <h6>Routine & Tasks</h6>
                            </div>
                          <App1></App1>
                        </div>
                        <div className='row'>
                            <div className='main-header'>
                                <h6>Other Details</h6>
                            </div>
                            <Others></Others>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
