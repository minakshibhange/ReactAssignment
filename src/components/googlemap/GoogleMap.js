import React, { useEffect } from 'react';

function GoogleMap() {
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=18.6161;
        const lon=73.7286;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
  return (
    <div>
    <iframe id="iframeId" height="500px" width="100%"></iframe>
</div>
  )
}

export default GoogleMap;