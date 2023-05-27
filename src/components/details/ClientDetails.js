import React from 'react';
import './Detail.css';

export default function ClientDetails() {
    return (
        <>
            <div className='container'>
                <div className="row client-details">
                    <a href='./#' className='button pb-3'>Hide Client Details id <i class="fa fa-chevron-circle-down"></i></a>
                    <div className="col-md-3">
                        <div className="card">
                            <img className="card-img-top" src="https://media.geeksforgeeks.org/wp-content/uploads/20190506125816/avt.png"
                                alt="Card image cap" width="150px" />
                            <div className="card-body">
                                <h6 className="card-title">Jake Knap, 63 Yr (Male)</h6>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9'>
                        <div className="row">
                            <div className="col-md-4">
                                <p> <b>D.O.B.</b>  1-0-1960</p>
                                <p><i className="fa fa-phone "></i>  <span className='ms-1 d-sm-inline'>01184-21422-254</span></p>
                                <p>Plan Managed</p>
                                <p>Category Homecare,</p>

                            </div>
                            <div className="col-md-4">
                                <p><i className="fa fa-map-marker text-danger "></i>  VLC, Brisbane</p>
                                <p><i className="fa fa-envelope "></i> knapjack1872gmail.com </p>
                                <p>NDIS No.  4356789</p>
                                <p>Status  New</p>

                            </div>
                            <div className="col-md-4">
                                <p><i className="fa fa-street-view fa-lg map-views "></i></p>
                                <p className='text-primary'> Map <br /> View</p>
                                <p>NDIS Zone  NSW</p>
                                <p>Funding $1244.67</p>
                            </div>
                        </div>
                        <div className='row'>
                            <p>Agreement Period</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                <form>
                        <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label className="form-label" for="fname">Funding Source</label>
                                    <br />
                                    <select className="form-select">
                                    <option selected>Select</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                    <label className="form-label" for="lname">Region</label>
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
                    </form>

                </div>
                
            </div>
        </>
    )
}
