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
      title: "",
      quantity: "",
      measurement: "",
      ingredient: "",
      editId: "",
    }
    this.handleChange = this.handleChange.bind(this)
    this.prepareToEditTitle = this.prepareToEditTitle.bind(this)
    this.editTitle = this.editTitle.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
    this.prepareToEditIngredient = this.prepareToEditIngredient.bind(this)
    this.editIngredient = this.editIngredient.bind(this)
    this.deleteIngredient = this.deleteIngredient.bind(this)
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
  render() {
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
        />
      </React.Fragment>
    );
  }
}

export default Recipes;
