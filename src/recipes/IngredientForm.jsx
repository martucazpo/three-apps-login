


const IngredientForm = (props) =>{
    return (
        <div>
            <form onSubmit={props.handleSubmit} >
                <label htmlFor="quantity">Quantity: </label>
                <input 
                name="quantity"
                value={props.state.quantity}
                type="number"
                min="0"
                step=".01"
                onChange={(e)=>props.handleChange(e)}
                />
                <label htmlFor="measurement">Measurement: </label>
                <input 
                name="measurement"
                value={props.state.measurement}
                type="text"
                onChange={(e)=>props.handleChange(e)}
                />
                <label htmlFor="ingredient">Ingredient: </label>
                <input 
                name="ingredient"
                value={props.state.ingredient}
                type="text"
                onChange={(e)=>props.handleChange(e)}
                /> 
                <button type="submit">{ props.state.isEditIngredient ? "change" : "add" }</button>
            </form>
        </div>
    )
}


export default IngredientForm