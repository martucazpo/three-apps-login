const InstructionsForm = (props) => {
    return (
        <form onSubmit={props.setInstructions}>
            <label htmlFor="instructions">Give Instructions</label>
            <textarea
                name="instructions"
                onChange={(e) => props.handleChange(e)}
                value={props.state.instructions}
                required
            />
            <button type="submit">{props.state.isEditInstructions ? "reset instructions" : "set instructions"}</button>
        </form>
    )
}

const Instructions = (props) => {
    return (
        <div>
            <h3>Instructions:</h3>
            {
                props.state.recipe.instructions === "" || props.state.isEditInstructions ? <InstructionsForm
                    state={props.state}
                    handleChange={props.handleChange}
                    setInstructions={props.setInstructions}
                /> :
                    <>
                        <p>{props.state.recipe.instructions}</p>
                        <button onClick={props.prepareToEditInstructions}>edit</button>
                    </>

            }
        </div>
    )
}

export default Instructions