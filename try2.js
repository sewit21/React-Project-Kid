import React, { Component } from 'react';

 class Try extends Component {
    state = {
        loading: true,
        menu: null,
    }

  async  componentDidMount() {
        const key = "0";
        const food = " ";
          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}&Key=${key}`;
          const response = await fetch (url);
          const data = await response.json();
          this.setState({menu: data.meals[1], loading: false});
          console.log(data.meals[0]);
          
      } 
    
      
      render() {

            if (this.state.loading) {
                return <div> Loading </div>;
            }

            if (!this.state.menu) {
                return <div>No Recipes..</div>;
            }
    
            return ( 

        <div className="item">
    <div> Dish: {this.state.menu.strMeal}</div>
      <img src={this.state.menu.strMealThumb} alt=""/>
      <div>Type: {this.state.menu.strArea}</div>
     <div> Category: {this.state.menu.strCategory}</div>
     <div> Instructions: {this.state.menu.strInstructions}</div>


     </div>
            

);
}

}
    

 

export default Try;