import React from 'react'

export default function alerts(props) {
  const errorStyle = {
    background: "rgba(253, 57, 122, 0.1)",
    borderColor: "transparent"
  };
  const sucessStyle = {
    background: "rgba(10, 187, 135, 0.1)",
    borderColor: "transparent"
  };
  return (
      
    <div>
        { (props.status === "error"  ? 
         <div className="alert alert-solid-danger alert-bold" role="alert"
         style={props.style ? props.style : errorStyle}>
          <div className="alert-text" style={{
           color: '#fd397a',
            fontWeight: 500
            }}>{props.msg}
            </div> 
        </div>  : null ) || (props.status === "success" ?  
    <div className="alert alert-solid-success alert-bold" role="alert" style={props.style ? props.style : sucessStyle}>
        <div className="alert-text" style={{
            color: '#0abb87',
        }}>{props.msg}
        </div>
    </div>  :  null
    
    )}  
 </div>
  )
}
