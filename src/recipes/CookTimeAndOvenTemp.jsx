

const CookTimeForm = (props) => {
    return (
        <form onSubmit={props.setCookTime}>
            <label htmlFor="cookTime">Cook Time:</label>
            <input
                name="cookTime"
                value={props.state.cookTime}
                onChange={(e) => props.handleChange(e)}
                type="text"
            />
            <button type="submit">{props.state.isEditCookTime ? "reset cook time" : "set cook time"}</button>
        </form>
    )

}


const OvenTemperatureForm = (props) => {
    return (
        <form onSubmit={props.setOvenTemperature}>
            <label htmlFor="ovenTemperature">Oven Temperature</label>
            <input
                name="ovenTemperature"
                value={props.state.ovenTemperature}
                onChange={(e) => props.handleChange(e)}
                type="number"
                min="0"
            />
            <button type="submit">{props.state.isEditOvenTemperature ? "reset oven temperature" : "set oven temperature"}</button>
        </form>
    )
}


const CookTimeAndOvenTemperature = (props) => {
    return (
        <div>
            <h3>Cook Time and Oven Temperature:</h3>
            <p>( not required )</p>
            <span>
                {props.state.recipe.ovenTemperature === "" || props.state.isEditOvenTemperature ?
                    <OvenTemperatureForm
                        state={props.state}
                        handleChange={props.handleChange}
                        setOvenTemperature={props.setOvenTemperature}
                    /> :
                    <p>{props.state.recipe.ovenTemperature} degrees <button onClick={props.prepareToEditOvenTemperature}>edit</button></p>}
            </span>
            <span>
                {props.state.recipe.cookTime === "" || props.state.isEditCookTime ?
                    <CookTimeForm
                        state={props.state}
                        handleChange={(e) => props.handleChange(e)}
                        setCookTime={props.setCookTime}
                    /> :
                    <p>for {props.state.recipe.cookTime} <button onClick={props.prepareToEditCookTime}>edit</button></p>}
            </span>
        </div>
    )
}


export default CookTimeAndOvenTemperature