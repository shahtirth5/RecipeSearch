import React, { Component } from 'react';

export default class Recipe extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const image_url = this.props.Recipe.image_url;
        const publisher = this.props.Recipe.publisher;
        const source_url = this.props.Recipe.source_url;
        const title = this.props.Recipe.title;
        const { handleDetails } = this.props;

        return (
            <div>
                <div>
                    <div className="card mb-2 mx-auto mr-2">
                        <img src={image_url} className="image-card-top" style={{height:"14rem"}} alt="recipe"/>
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning">Provided by {publisher}</h6>
                            <button type="button" className="btn btn-primary text-capitalize" onClick={handleDetails}>Details</button>
                            <a href={source_url} className="btn btn-success mx-2 text-capitalize">Recipe Link</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
