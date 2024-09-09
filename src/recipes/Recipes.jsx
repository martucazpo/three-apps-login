import React, { createRef } from "react";
import CreateRecipes from "./CreateRecipes";

class Recipes extends React.Component {
  detailsRef = createRef()
  constructor() {
    super()
    this.state = {
      user: {
        recipes: []
      },
      recipe: {
        title: "",
        ingredients: [],
        cookTime: "",
        ovenTemperature: "",
        instructions: ""
      },
      isEditTitle: false,
      isEditIngredient: false,
      isEditOvenTemperature: false,
      isEditCookTime: false,
      isEditInstructions: false,
      title: "",
      quantity: "",
      measurement: "",
      ingredient: "",
      ovenTemperature: "",
      cookTime: "",
      instructions: "",
      editId: "",
      display: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.prepareToEditTitle = this.prepareToEditTitle.bind(this)
    this.editTitle = this.editTitle.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
    this.prepareToEditIngredient = this.prepareToEditIngredient.bind(this)
    this.editIngredient = this.editIngredient.bind(this)
    this.deleteIngredient = this.deleteIngredient.bind(this)
    this.setOvenTemperature = this.setOvenTemperature.bind(this)
    this.setCookTime = this.setCookTime.bind(this)
    this.prepareToEditOvenTemperature = this.prepareToEditOvenTemperature.bind(this)
    this.prepareToEditCookTime = this.prepareToEditCookTime.bind(this)
    this.setInstructions = this.setInstructions.bind(this)
    this.prepareToEditInstructions = this.prepareToEditInstructions.bind(this)
    this.displayRecipe = this.displayRecipe.bind(this)
    this.saveRecipe = this.saveRecipe.bind(this)
    this.clearRecipe = this.clearRecipe.bind(this)
  }
  handleChange(e) {
    let { name, value } = e.target
    this.setState({
      ...this.state,
      [name]: value
    })
  }
  prepareToEditTitle() {
    this.setSetState({
      ...this.state,
      isEditTitle: true,
      title: this.state.recipe.title
    })
  }
  editTitle(e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      recipe: {
        ...this.state.recipe,
        title: this.state.title
      },
      title: "",
      isEditTitle: false
    })
  }
  addIngredient(e) {
    e.preventDefault()
    let newIngredient = {
      id: crypto.randomUUID(),
      quantity: this.state.quantity,
      measurement: this.state.measurement,
      ingredient: this.state.ingredient
    }
    this.setState({
      recipe: {
        ...this.state.recipe,
        ingredients: [newIngredient, ...this.state.recipe.ingredients]
      },
      quantity: "",
      measurement: "",
      ingredient: ""
    })
    this.detailsRef.current.open = false
  }
  prepareToEditIngredient(ing) {
    this.setState({
      ...this.state,
      quantity: ing.quantity,
      measurement: ing.measurement,
      ingredient: ing.ingredient,
      editId: ing.id,
      isEditIngredient: true
    })
  }
  editIngredient(e) {
    e.preventDefault()
    let youveChanged = this.state.recipe.ingredients.map(ing => {
      if (ing.id === this.state.editId) {
        ing.quantity = this.state.quantity
        ing.measurement = this.state.measurement
        ing.ingredient = this.state.ingredient
      }
      return ing
    })
    this.setState({
      ...this.state,
      recipe: {
        ...this.state.recipe,
        ingredients: youveChanged
      },
      quantity: "",
      measurement: "",
      ingredient: "",
      editId: "",
      isEditIngredient: false
    })
  }
  deleteIngredient(ing) {
    let allTheOthers = this.state.recipe.ingredients.filter(item => item.id !== ing.id)
    this.setState({
      ...this.state,
      recipe: {
        ...this.state.recipe,
        ingredients: allTheOthers
      }
    })
  }
  setOvenTemperature(e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      recipe: {
        ...this.state.recipe,
        ovenTemperature: this.state.ovenTemperature
      },
      ovenTemperature: "",
      isEditOvenTemperature: false
    })
  }
  setCookTime(e) {
    e.preventDefault()
    this.setState({
      ...this.state,
      recipe: {
        ...this.state.recipe,
        cookTime: this.state.cookTime
      },
      cookTime: "",
      isEditCookTime: false
    })
  }
  prepareToEditOvenTemperature() {
    this.setState({
      ...this.state,
      ovenTemperature: this.state.recipe.ovenTemperature,
      isEditOvenTemperature: true
    })
  }
  prepareToEditCookTime() {
    this.setState({
      ...this.state,
      cookTime: this.state.recipe.cookTime,
      isEditCookTime: true
    })
  }
  setInstructions(e) {
    e.preventDefault()
    this.setState({
      recipe: {
        ...this.state.recipe,
        instructions: this.state.instructions
      },
      instructions: "",
      isEditInstructions: false
    })
  }
  prepareToEditInstructions() {
    this.setState({
      ...this.state,
      instructions: this.state.recipe.instructions,
      isEditInstructions: true
    })
  }
  displayRecipe() {
    this.setState({
      ...this.state,
      display: true
    })
  }
  saveRecipe() {
    let newRecipe = Object.assign({}, this.state.recipe)
    newRecipe.id = crypto.randomUUID()
    this.setState({
      ...this.state,
      user: {
        ...this.state.user,
        recipes: [newRecipe, ...this.state.user.recipes]
      },
      recipe: {
        title: "",
        ingredients: [],
        cookTime: "",
        ovenTemperature: "",
        instructions: ""
      },
      isEditTitle: false,
      isEditIngredient: false,
      isEditOvenTemperature: false,
      isEditCookTime: false,
      isEditInstructions: false,
      title: "",
      quantity: "",
      measurement: "",
      ingredient: "",
      ovenTemperature: "",
      cookTime: "",
      instructions: "",
      editId: "",
      display: false
    })
  }
  clearRecipe() {
    this.setState({
      ...this.state,
      recipe: {
        title: "",
        ingredients: [],
        cookTime: "",
        ovenTemperature: "",
        instructions: ""
      },
      isEditTitle: false,
      isEditIngredient: false,
      isEditOvenTemperature: false,
      isEditCookTime: false,
      isEditInstructions: false,
      title: "",
      quantity: "",
      measurement: "",
      ingredient: "",
      ovenTemperature: "",
      cookTime: "",
      instructions: "",
      editId: "",
      display: false
    })
  }
  render() {
    console.log(this.state.user)
    return (
      <React.Fragment>
        <h3>Recipes</h3>
        <CreateRecipes
          detailsRef={this.detailsRef}
          state={this.state}
          handleChange={this.handleChange}
          prepareToEditTitle={this.prepareToEditTitle}
          editTitle={this.editTitle}
          addIngredient={this.addIngredient}
          prepareToEditIngredient={this.prepareToEditIngredient}
          editIngredient={this.editIngredient}
          deleteIngredient={this.deleteIngredient}
          setOvenTemperature={this.setOvenTemperature}
          setCookTime={this.setCookTime}
          prepareToEditCookTime={this.prepareToEditCookTime}
          prepareToEditOvenTemperature={this.prepareToEditOvenTemperature}
          setInstructions={this.setInstructions}
          prepareToEditInstructions={this.prepareToEditInstructions}
          displayRecipe={this.displayRecipe}
          saveRecipe={this.saveRecipe}
          clearRecipe={this.clearRecipe}
        />
      </React.Fragment>
    );
  }
}

export default Recipes;
