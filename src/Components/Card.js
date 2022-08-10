import React from 'react'
import './Card.css'

const Card = () => {
    const currDate = new Date().toLocaleDateString();
    const totalTime = new Date().toLocaleTimeString();
    const currTime = new Date().getHours();
    let greeting = '';
    const cssStyle = {};

    if(currTime >= 1 && currTime < 12){
        greeting = "Good Morning!!";
        cssStyle.color = "green";
    }else if(currTime >= 12 && currTime < 19){
        greeting = "Good Afternoon!!";
        cssStyle.color = "Orange"
    }else{
        greeting = "Good Night!!";
        cssStyle.color = "Black"
    }
  return (
    <>
        <div className="outer">
            <div className="card">
                <div className="name">
                    <h1>Hello, Avinash <span style={cssStyle}>{greeting}</span></h1>
                </div>
                <div className="date">
                    <h2>{currDate}</h2>
                </div>
                <div className="time">
                    <h2>{totalTime}</h2>
                </div>
                
            </div>
        </div>
    </>
  )
}

export default Card