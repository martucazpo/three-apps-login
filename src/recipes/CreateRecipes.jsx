import RecipeTitleForm from "./RecipeTitleForm";
import Ingredients from "./Ingredients"
import CookTimeAndOvenTemperature from "./CookTimeAndOvenTemp";
import Instructions from "./Instructions";


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
            <CookTimeAndOvenTemperature 
            handleChange={props.handleChange}
            state={props.state}
            setOvenTemperature={props.setOvenTemperature}
            setCookTime={props.setCookTime}
            prepareToEditOvenTemperature={props.prepareToEditOvenTemperature}
            prepareToEditCookTime={props.prepareToEditCookTime}
            />
            <Instructions
            handleChange={props.handleChange}
            state={props.state}
            setInstructions={props.setInstructions}
            prepareToEditInstructions={props.prepareToEditInstructions} 
            />
        </dialog>
    )
}

export default CreateRecipes