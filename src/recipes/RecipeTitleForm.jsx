


const RecipeTitleForm = (props) => {
    return (
        <div>
            {props.state.recipe.title === "" || props.state.isEditTitle ?
                (<form onSubmit={props.handleSubmit}>
                    <label htmlFor="title">Recipe Title:</label>
                    <input
                        name="title"
                        value={props.state.title}
                        onChange={(e) => props.handleChange(e)}
                        required
                    />
                    <button type="submit">{props.state.isEditTitle ? "change" : "add"}</button>
                </form>) :
                (
                    <div><h3>{props.state.recipe.title}</h3><button onClick={props.prepareToEditTitle}>edit</button></div>
                )
            }

        </div>
    )
}

export default RecipeTitleForm