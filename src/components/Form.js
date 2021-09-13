import React from 'react'


const Form=(props)=>{
    // function clearData(){

    // }
    return(
        <div className="container" style={{marginTop:'10px'}} >
            <div>{props.error?checkError():""}</div>
            <form onSubmit={props.loadWeather}>
            <div className="row">
               <div className="col-md-4 offest-md-2">
                <input type="text" className="form-control" name="city" autoComplete="off" placeholder="City"/>
                   </div>
                <div className="col-md-4">
                <input type="text" className="form-control" name="country" autoComplete="off" placeholder="Country"/>
                </div>
                <div className="col-md-4 mt-md-0 text-md-left buttonInline">
                <button className="btn btn-warning" >Get Weather</button>
                &nbsp;<button className="btn btn-warning" type="reset" >Clear</button>
                </div>
           
            </div>

            </form>
         
        </div>
    )
}

const checkError=(props)=>{
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please enter city and country
        </div>
    )
}

export default Form;
