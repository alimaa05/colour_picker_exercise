import {useState, useEffect} from "react";
import ColourPicker from "../components/ColourPicker";
import ColourDisplay from "../components/colourDisplay";



const ColourPickerContainer = () => {
// 50 is the % of the slider thats filled
    const [red, setRed] = useState(50); 
    const [green, setGreen] = useState(50); 
    const [blue, setBlue] = useState(50);
    const [rgb, setRgb] = useState(null); 




// useEffect comes into play when we fire on mount and then everytime we change state 
// Math.ceil rounds it up to whole number
useEffect(() => {
    console.log("useEffect called");
 
    let red255 = Math.ceil(red * 2.55)
    let green255 = Math.ceil(green * 2.55)
    let blue255 = Math.ceil(blue * 2.55)

// putting empty array means its rendered one and then its told to stop - so it fires the first time after mount then stops 
// putting a list of them it will
    setRgb(`rgb(${red255}, ${green255}, ${blue255})`);
    
}, [red, green, blue]);


    const updateRed = (event) => {
        setRed(event.target.value)
    }

    const updateGreen = (event) => {
        setGreen(event.target.value)
    }

    const updateBlue = (event) => {
        setBlue(event.target.value)
    }

// render the colourPicker.js component - renders all the stuff in return bit of that js file 
// need to pass in the values from state 

    return (
        <>
        <h1>Colour Picker App</h1>
        <ColourPicker 
        red={red}
        green={green}
        blue={blue}
        onRedChange={updateRed}
        onGreenChange={updateGreen}
        onBlueChange={updateBlue}/>

        <ColourDisplay rgb={rgb}/>
        </>
        
    )

}

export default ColourPickerContainer;