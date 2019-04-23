import React, { Component } from 'react'
import {recipe} from '../tempDetails';

export default class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe:recipe
    }
  }

  async componentDidMount() {
    console.log(this.props.id);
    const id = this.props.id;
    const url = `https://www.food2fork.com/api/get?key=API_KEY&rId=${id}`;
    try{
      const data = await fetch(url);
      const jsonData = await data.json();
      console.log(jsonData);
      this.setState({
        recipe:jsonData.recipe
      });
    } catch(error) {

    }
  }
  

  render() {
    const {
      image_url,
      publisher,
      publisher_url,
      source_url,
      title,
      ingredients
    } = this.state.recipe;
    const {handleIndex} = this.props;
    console.log(this.state.recipe);
    console.log(image_url);
    return (
      <div className="mt-2">
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-6">
              <button type="button" className="btn btn-warning mb-5 text-capitalize" onClick={() => handleIndex(1)}>Back to recipe list</button>
              <img src={image_url} className="d-block w-100" alt="recipe"></img>
            </div>
            {/* Details */}
            <div className="col-10 mx-auto col-md-6">
              <div className="text-uppercase">{title}</div>
              <div className="text-warning text-capitalize">Provided by {publisher}</div>
              <a href={publisher_url} className="btn btn-primary mt-2">Publisher Webpage</a> 
              <a href={source_url} className="btn btn-success mt-2">Recipe Url</a> 
              <ul className="list-group mt-4">
                <h2 className="mt-3 mb-4">Ingredients</h2>
                {
                  ingredients.map((item,index) => {
                    return (
                      <li key={index} className="list-group-item">{item}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
