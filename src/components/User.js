import { useEffect, useState } from "react";

const User = ({name, location}) => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);
    const [count2] = useState(2);

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         console.log("Namaste");  
    //     },1000);

    //     return () => {
    //         clearInterval(timer);
    //     }
    // },[]);

    useEffect(() => {
        console.log("count render");
    },[count]);

    useEffect(() => {
        console.log("count1 render");
    },[count1]);

    useEffect(() => {
        console.log("count & count1 render");
    },[count,count1]);

    console.log("render"); 

    return (
        <div className="user-card">
            <h4>count: {count}</h4>
            <h4>count1: {count1}</h4>
            <h4>count2: {count2}</h4>

            {/* <button onClick={() => {
                setCount(count + 1);
                setCount1(count1 + 1)
            }}>
                button
            </button> */}

            <button onClick={() => {
                setCount(count + 1);
            }}>
                button for count
            </button>

            <button onClick={() => {
                setCount1(count1 + 1)
            }}>
                button for count1
            </button>

            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akshaymarch7</h4>
        </div>
    )
}

export default User;