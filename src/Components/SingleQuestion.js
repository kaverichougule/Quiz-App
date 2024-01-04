import React from 'react';
import "./SingleQuestion.css";
function SingleQuestion(props) {
    return (
        <div>
            <h2>Question </h2>
            <p>{props.question}</p>
            <ul>
                <li><button></button></li>
            </ul>
        </div>
    );
}

export default SingleQuestion;