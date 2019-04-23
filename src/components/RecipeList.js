import React, { Component } from 'react'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
export default class RecipeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {recipes, handleDetails, value, handleChange, handleSubmit, error} = this.props;
    return (
      <div>
        <RecipeSearch value={value} handleChange={handleChange} handleSubmit={handleSubmit}/>
        <div className="container">
          <div className="row mt-2">
            {/* <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1>Recipe List</h1>
            </div> */}
          </div>
          <div className="row">
            {error ? <h1 className="text-center text-danger">{error}</h1> : 
              recipes.map(recipe => {
                return (
                  <Recipe key={recipe.recipe_id} Recipe={recipe} handleDetails={()=>handleDetails(0,recipe.recipe_id)}/>
                )
              })
            }
            </div>
        </div>
      </div>
    )
  }
}
