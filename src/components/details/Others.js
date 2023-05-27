import React from 'react'

export default function Others() {
    return (
        <>
            <div className='container mb-5'>
                <form>
                    <div className='row'>
                        <div className="col-md-2 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="fname">Tasks</label>
                                <br />
                                <a href='./#' className='add setting'>Add Setting</a>
                            </div>
                        </div>
                        <div className="col-md-2 mb-4">
                            <label className="form-label" for="text">Flexible with time? </label>
                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                <div className="form-check form-check-inline mb-0 me-4">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="resetValue"
                                        value="" checked />
                                    <label className="form-check-label" for="reset">Yes</label>
                                </div>

                                <div className="form-check form-check-inline mb-0 me-4">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="resetValue1"
                                        value="checked" />
                                    <label className="form-check-label" for="reset" value="" >No</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="fname">Tasks</label>
                                <br />
                                <input type="text" class="form-control" placeholder="Type here" />
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="form-outline">
                                <label className="form-label" for="fname">Notes</label>
                                <br />
                                <input type="text" class="form-control" placeholder="Type here" />
                            </div>
                        </div>
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label p-2" for="customCheck1"> Publish to live roster </label>
                    </div>
                   
                    <div className="d-flex justify-content-center pt-3">
                    <button type="button" class="btn btn-outline-primary">Cancel</button>
                        <button type="button" class="btn btn-primary ms-2">Save</button>
                    </div>
                </form>
            </div>
        </>
    );
};
