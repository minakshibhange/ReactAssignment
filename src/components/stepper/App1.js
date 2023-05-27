import React, { useState } from 'react';
import StepNavigation from './stepNavigation';

function App1() {
    const labelArray = ['Task 1', 'Task 2', 'Task 3', 'Task 4']
    const [currentStep, updateCurrentStep] = useState(1);

    function updateStep(step) {
        updateCurrentStep(step);
    }
    return (
        <>
            <form>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="form-outline">
                            <label className="form-label" for="fname">Title</label>
                            <br />
                            <input type="text" class="form-control" placeholder="Meal" />
                        </div>
                    </div>
                    <div className='col-md-3'></div>
                    <div className="col-md-3 mb-4">
                    <br />
                    <button type="button" class="btn routine ms-2"><i className='fa fa-plus'></i>Add Routine</button>
                    </div>
                </div>
            </form>
            <div className="App">
                <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>
                <p>Selected Task: {currentStep}</p>
                <button className="primaryButton" disabled={currentStep === 1} onClick={() => updateStep(currentStep - 1)}>Previous Task</button>
                <button className="primaryButton" disabled={currentStep === labelArray.length} onClick={() => updateStep(currentStep + 1)}>Add Task</button>
            </div>
        </>
    );
};

export default App1;