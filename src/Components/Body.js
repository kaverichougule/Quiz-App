import React from 'react';
import "./Body.css";
import { useEffect,useState } from 'react';
import SingleQuestion from './SingleQuestion';
function Body(props) {
    let [data,setData]=useState([]);
    let [quesNo, setQuesNo]=useState(1);

    useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=10&type=multiple")
        .then((resp)=> resp.json())
        .then((data)=>{
            setData(data.results)
        })
    },[])
    function NextQuestion(){
        
    }
    return (
        <div>
            {
                data.map((ele,index)=>{
                    if(index===quesNo-1){
                        return <SingleQuestion question={ele.question} />
                    }
                })
            }
            <button onClick={NextQuestion}>Skip</button>
        </div>
    );
}

export default Body;