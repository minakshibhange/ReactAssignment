import React, { useState } from 'react';

function DatePicker() {
const [date,setDate]=useState();
  return (
   <>
   <label className="form-label" for="fname">Appointment Date</label>
    <input type="date" onChange={e=>(e.target.value)} />
   </>
  );
}

export default DatePicker;