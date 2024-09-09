import RecipeTitleForm from "./RecipeTitleForm";
import Ingredients from "./Ingredients"
import CookTimeAndOvenTemperature from "./CookTimeAndOvenTemp";
import Instructions from "./Instructions";
import DisplayRecipe from "./DisplayRecipe"


const CreateRecipes = (props) => {
    return (
        <dialog open={true}>
            {
                props.state.display ?
                    (<DisplayRecipe
                        recipe={props.state.recipe}
                        clearRecipe={props.clearRecipe}
                        saveRecipe={props.saveRecipe}
                    />) :
                    (
                        <>
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
                            {
                                props.state.recipe.title && props.state.recipe.ingredients.length > 0 && props.state.recipe.instructions ?
                                    <button onClick={props.displayRecipe}>Display and Save Recipe</button> :
                                    <p>Please fill out all required fields to save recipe</p>

                            }

                        </>
                    )

            }

        </dialog>
    )
}

export default CreateRecipes