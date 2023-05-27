import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DatePicker from '../datepicker/DatePicker'
import GoogleMap from '../googlemap/GoogleMap';

export default function Appointment() {
        const [currLocation, setCurrLocation] = useState({});
        const [currLocationJs, setCurrLocationJs] = useState({});
        useEffect(() => {
          getLocation();
          getLocationJs();
        }, []);
      
        const getLocation = async () => {
          const location = await axios.get("https://ipapi.co/json");
          setCurrLocation(location.data);
        };
      
        const getLocationJs = () => {
          navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            const { latitude, longitude } = position.coords;
            setCurrLocationJs({ latitude, longitude });
          });
        };
    return (
        <>
            <div className='container'>
                <form>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="fname">Appointment Type</label>
                                <br />
                                <select className="form-select">
                                    <option selected>Select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-4">
                            <DatePicker></DatePicker>
                        </div>
                        <div className="col-md-3 mb-4">
                            <label className="form-label" for="time">Start Time</label>
                            <input type="text" value="11.00" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label className="form-label" for="time">End Time</label>
                            <input type="text" value="13.00" />
                        </div>
                        <div className="col-md-3 mb-4">
                            <label className="form-label" for="text"> <i className="fa fa-refresh" aria-hidden="true"></i> Reset </label>
                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                <div className="form-check form-check-inline mb-0 me-4">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="resetValue"
                                        value="" />
                                    <label className="form-check-label" for="reset">Yes</label>
                                </div>

                                <div className="form-check form-check-inline mb-0 me-4">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="resetValue1"
                                        value="" checked />
                                    <label className="form-check-label" for="reset" value="" >No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="customCheck1" />
                            <label class="custom-control-label p-2" for="customCheck1"> Next day overnight <span className='text-danger'> (sleepover shift) </span></label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='pt-5'>
                            <h6>Current Location</h6>
                            <p>Latitude: {currLocation.latitude}</p>
                            <p>Longitude: {currLocation.longitude}</p>
                            <p>City: {currLocation.city}</p>
                        </div>
                    </div>
                    <GoogleMap></GoogleMap>
                </form>
            </div>

        </>
    );
}
