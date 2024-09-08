import IngredientForm from "./IngredientForm";
import ListOfIngredients from "./ListOfIngredient";


const Ingredients = (props) => {
    return (
        <div>
            <h3>Ingredients: </h3>
            <ListOfIngredients
                handleChange={props.handleChange}
                state={props.state}
                editIngredient={props.editIngredient}
                prepareToEditIngredient={props.prepareToEditIngredient}
                deleteIngredient={props.deleteIngredient}
            />
            <details ref={props.detailsRef}>
                <summary>add an ingredient</summary>
                <IngredientForm
                    handleChange={props.handleChange}
                    state={props.state}
                    handleSubmit={props.addIngredient}
                />
            </details>
        </div>
    )
}

export default Ingredients