import React from 'react';
import "./Body.css";
import { useEffect,useState } from 'react';
import SingleQuestion from './SingleQuestion';
function Body(props) {
    let [data,setData]=useState([]);
    let [quesNo, setQuesNo]=useState(1);
    let [timer,setTimer]=useState(10);
    let [count,setCount]=useState(0);
    let [disable,setDisable]=useState(true);
    let [Disablecolor,setDisablecolor]=useState("black");
    useEffect(()=>{
        let checkTime=setInterval(()=>{
            setTimer((prevVal)=>{
                return prevVal-1;
            })
        },1000)
        if(timer===0){
            clearInterval(checkTime);
        }
        return ()=>{
            clearInterval(checkTime);
        }
    },[timer])
    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then((resp)=> resp.json())
        .then((data)=>{
            setData(data.results)
        })
    },[])
    useEffect(()=>{
        if(timer==0){
            setDisable(false)
            setDisablecolor("gray")
        }
        else{
            setDisable(true)
            setDisablecolor("black")
        }
    })
    return (
        <div>
        {
            (quesNo<10)?
                <div>
                    {
                        data.map((ele,index)=>{
                            if(index===quesNo-1){
                                return <SingleQuestion setTimer={setTimer} setQuesNo={setQuesNo} setCount={setCount} disable={disable} color={Disablecolor} quesNo={quesNo} question={ele.question} incorrect={ele["incorrect_answers"]} correct={ele["correct_answer"]} />
                            }
                        })
                        
                    }
                    
                    <button onClick={()=>{
                        if(quesNo<10){
                            setQuesNo(quesNo+1)
                        }
                        setTimer(10);
                    }}>Skip</button>

                    <p>Time Left: {timer}</p>
                </div>: 
                <div>
                    Quiz Ended
                    <p>Your Score: {count}/10</p>    
                </div>
        }
        </div>
    );
}

export default Body;