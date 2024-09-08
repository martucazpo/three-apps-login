import RecipeTitleForm from "./RecipeTitleForm";
import Ingredients from "./Ingredients"


const CreateRecipes = (props) =>{
    return (
        <dialog open={true}>
            <RecipeTitleForm 
            handleChange={props.handleChange}
            handleSubmit={props.editTitle}
            prepareToEditTitle={props.prepareToEditTitle}
            state={props.state}
            />
            <Ingredients
            detailsRef={props.detailsRef}
            handleChange={props.handleChange}
            state={props.state} 
            addIngredient={props.addIngredient}
            prepareToEditIngredient={props.prepareToEditIngredient}
            editIngredient={props.editIngredient}
            deleteIngredient={props.deleteIngredient}
            />
        </dialog>
    )
}

export default CreateRecipes