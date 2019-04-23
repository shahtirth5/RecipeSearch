import React, {
  Component
} from 'react';
import { recipes } from './tempList';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails'
let _this;
class App extends Component {
  constructor(props) {
    super(props);
    _this = this;
  }
  
  state = {
    recipes: recipes,
    url: "https://www.food2fork.com/api/search?key=API_KEY",
    base_url: "https://www.food2fork.com/api/search?key=API_KEY",
    details_id : "35382",
    pageIndex : 1,
    search : '',
    query : '&q=',
    error : ''
  }

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if(jsonData.recipes.length === 0) {
        this.setState(()=>{
          return {error: 'Sorry! But Your Search Did Not Return Any Results'}
        });
      } else {
        this.setState({
          recipes: jsonData.recipes
        });
      }
    } catch(error) {
      console.log(error);
    }
  }
  
  componentDidMount() {
    this.getRecipes();
  }

  displayPage (index) {
    switch(index) {
      default:
      case 1:
        return (<RecipeList recipes={this.state.recipes} handleDetails={this.handleDetails} value={this.state.search} handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} />);
      case 0:
        return(<RecipeDetails id={this.state.details_id} handleIndex={this.handleIndex}/>);
    }
  }

  handleIndex (index) {
    _this.setState({
      pageIndex : index
    });
  }

  handleDetails (index, id) {
    console.log("Handling Details");
    _this.setState({
      pageIndex : index,
      details_id : id
    });
  }

  handleChange(e) {
    _this.setState({
      search : e.target.value
    } , ()=>{
      console.log(_this.state.search);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const {base_url, query, search} = _this.state;
    _this.setState(()=>{
      return {url:`${base_url}${query}${search}` , search: ""}
    } , ()=>{
      _this.getRecipes();
    }) ;
  }

  render() {
    return (
      <div>
        {this.displayPage(this.state.pageIndex)}
      </div>
    );
  }
}

export default App;