import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
    const {value, handleChange, handleSubmit} = this.props;
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5 mb-2 text-center">
              <h1 className="text-primary">Search For Recipes</h1>
              <form className="mt-4" onSubmit={handleSubmit}>
                <label htmlFor="search">
                  Type recipes separated by comma
                </label>
                <div className="row">
                <div className="col-md-3"></div>
                <div className="input-group col-md-6 m-0 p-0  ">
                  <input type="text" className="form-control" name="search" placeholder="beans,bananas,apples" value={value} onChange={handleChange}></input>
                </div>
                <div className="input-group-append m-0 p-0">
                  <button className="input-group-text bg-primary text-white"><i className="fa fa-search"></i></button>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
