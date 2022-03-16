
// when we do render the ColourPicker 
const ColourPicker =({
    red,
    green,
    blue,
    onRedChange,
    onGreenChange,
    onBlueChange
}) => {


    // creating a lable, render a slider element and p tag to show what value were showing 
    // the input is going to fire the eventHandler on the colour change 
    // htmlFor must match the input id 
    return (
        <>
            <label htmlFor="red">Red</label>
            <input type="range" id="red" onInput={onRedChange}/>
            <p>Red: {red}</p>

            <label htmlFor="green">Green</label>
            <input type="range" id="green" onInput={onGreenChange}/>
            <p>Green: {green}</p>

            <label htmlFor="blue">Blue</label>
            <input type="range" id="blue" onInput={onBlueChange}/>
            <p>Blue: {blue}</p>

        </>
    )
}

export default ColourPicker;