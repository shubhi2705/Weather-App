import React from 'react';
const Weather=(props)=>{
    return(
        <div className="container text-light">
           <div className="cards">
           <h1>{props.data.Location}</h1>
           
            {/* <h5 className="py-5"><br/><br/>
                <i className={`fas fa-${props.data.icon} w3-xxxlarge`} ></i>
            </h5> */}
            {props.data.celsius?<h1 className="py-2"><br/>
               {props.data.celsius}&deg;
            </h1>:null}
           
             {props.data.temp_min&&props.data.temp_max?minmaxTemp(props.data.temp_min,props.data.temp_max):null}
             <h3>{props.data.desc}</h3>
             </div>
        </div>

    )
}


function minmaxTemp(min,max){
    return (
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="margin-left">- &nbsp;&nbsp;</span>
            <span className="padding-right-10">{max}&deg;</span>
        </h3>
    )
}

export default Weather;
