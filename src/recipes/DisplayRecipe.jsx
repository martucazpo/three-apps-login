


const DisplayRecipe = ({ recipe, saveRecipe, clearRecipe }) =>{
    return (
        <div>
            <header>
                <h3>{ recipe.title }</h3>
            </header>
            <main>
                <article>
                    <section>
                        <header>
                            <h4>Ingredients:</h4>
                        </header>
                        <ul>{ recipe.ingredients.map(ing => <li key={ing.id}><p>{ing.quantity} {ing.measurement} {ing.ingredient}</p></li>)}</ul>
                    </section>
                    {
                        recipe.cookTime || recipe.ovenTemperature ? 
                        <section>
                            {
                                recipe.ovenTemperature ? <p>Bake at { recipe.ovenTemperature } degrees for { recipe.cookTime }</p> : <p>Cook Time: {recipe.cookTime}</p>
                            }
                        </section> : null
                    }
                </article>
                <article>
                    <section>
                        <header>
                            <h3>Instructions:</h3>
                        </header>
                        <p>{recipe.instructions}</p>
                    </section>
                </article>
            </main>
            <footer>
                <button onClick={clearRecipe}>Delete and start over:</button>
                <button onClick={saveRecipe}>SAVE RECIPE</button>
            </footer>
        </div>
    )
}

export default DisplayRecipe