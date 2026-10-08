import { useState, useEffect} from "react";

function Main(props) {
    const [number, setNumber] = useState(0);
    const [colors, setColor] = useState(
        {
            red: props.r,
            green: props.g,
            blue: props.b
        }
    );

    const [time, setTime] = useState(0);
    const [showTime, setShowTime] = useState(true);

    useEffect(() => {
        let id = setInterval( () => {
            setTime(time => time + 1);
        }, 1000);

        return () => {
            clearInterval(id);
        };

    }, []);

    const hideTimer = () => {
        setShowTime(!showTime);

    }

    const increase = () => {

        setNumber(prevNumber => prevNumber + 1);
        
        //console.log(number);
 };

       const randomColor = () => {
            setColor(prev => ({
                ...prev,
                red: 40

            }));
              console.log(colors.red, colors.green, colors.blue);
       } 

       //Här har ni hur ni kan lägga till slumpmässig färg
       /*const randomColor = () => {
        setColor({
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
        });

        console.log(color);
        } */

        let css = {
        backgroundColor: "rgb(" + colors.red + "," + colors.green + "," + colors.blue + ")",
        height: 300 + "px"

      
    };
   
    return (
        <>
            <main style= {css}>
                <h1>Detta är main</h1>
                <p>Nummer: {number}</p>
                <button onClick={hideTimer}>Göm timer</button>
                {showTime && <p>Tid: {time} </p> }
                
                <button onClick={increase}>Öka</button>
                <button onClick={randomColor}>Byta färg</button>
            </main>
        </>
    )
}


export default Main;




