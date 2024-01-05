import React, { useEffect, useState } from 'react';
import "./SingleQuestion.css";

function SingleQuestion(props) {
    let [options,setOptions]=useState([]);
    useEffect(()=>{
        setOptions(()=>{
            let variable=props.incorrect.map((ele)=>{
                return ele;
            })
            let randomIndex=Math.floor(Math.random()*4);
            variable.splice(randomIndex,0,props.correct)
            
            return variable;
        })
    },[])
    function getOptionClicked(ele){
        props.setQuesNo((prev)=>prev+1);
        props.setTimer(10);
        if(ele.target.innerText===props.correct){
            props.setCount((prev)=>prev+1);
        }
    }
    return (
        <div>
            <h2>Question {props.quesNo}</h2>
            <p>{props.question}</p>
            <div className='optionsDiv'>
                {
                    options.map((ele)=>{
                        return <button disabled={props.disable} style={{color:props.color}} className='singleOption' onClick={getOptionClicked} >
                            {ele}
                        </button>
                    })
                    
                }
            </div>
        </div>
    );
}

export default SingleQuestion;