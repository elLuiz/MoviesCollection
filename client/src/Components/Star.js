import React from 'react'

export default function Star(props) {
    var p_rate = props.length;
    var stars = [];
    function checkStar(p_rate){
        // var stars = [];
        for(let i = 0; i < p_rate; i++){
            stars.push(<i className = "fas fa-star checked"></i>) 
        }
        if(stars.length < 5){
            for(let i = 0; i = (5 - stars.length); i++)
                stars.push(<i className = "fas fa-star"></i>) 

        }
    }
    checkStar(p_rate)
    return (
        <>
            {stars}
        </>
    )
}
