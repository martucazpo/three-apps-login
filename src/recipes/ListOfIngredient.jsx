import SingleIngredient from "./SingleIngredient"
import IngredientForm from "./IngredientForm"


const ListOfIngredients = (props) => {
    return (
        <div>
            <ul>
                {
                    props.state.recipe.ingredients.map(ing => props.state.isEditIngredient && ing.id === props.state.editId ?
                        (<li key={ing.id}><IngredientForm
                            handleChange={props.handleChange}
                            state={props.state}
                            handleSubmit={props.editIngredient}
                        /></li>) :
                        (<li key={ing.id}><SingleIngredient
                            ingredient={ing}
                            handleDelete={props.deleteIngredient}
                            prepareToEdit={props.prepareToEditIngredient}
                        /></li>))
                }
            </ul>
        </div>
    )
}


export default ListOfIngredients