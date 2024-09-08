



const SingleIngredient = (props) => {
    return (
        <>
            <p>{props.ingredient.quantity} {props.ingredient.measurement} {props.ingredient.ingredient}
                <span>
                    <button onClick={() => props.handleDelete(props.ingredient)}>delete</button>
                    <button onClick={() => props.prepareToEdit(props.ingredient)}>edit</button>
                </span>
            </p>
        </>
    )
}

export default SingleIngredient