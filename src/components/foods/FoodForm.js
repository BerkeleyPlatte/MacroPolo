import React, { Component } from "react";

export default class FoodForm extends Component {
  state = {
    name: "",
    fat: "",
    carb: "",
    protein: "",
    id: "",
    userId: "",
    foodId: "",
    count: 0
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewFood = evt => {
    evt.preventDefault();

    let newFood = {
      name: this.state.name,
      fat: Number(this.state.fat),
      carb: Number(this.state.carb),
      protein: Number(this.state.protein),
      userId: Number(sessionStorage.getItem("userId")),
      count: Number(this.state.count),
    };
   

    this.props
      .addFood(newFood)
     
      .then(() => this.props.history.push("/foods"))
     
  };
  
  render() {
    return (
      <React.Fragment>
        <form className="foodForm">
          <div className="form-group">
            <label htmlFor="food">Food name</label>
            <input
              autoFocus
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="fat">Fat</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="fat"
            />
          </div>
          <div className="form-group">
            <label htmlFor="carb">Carbs</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="carb"
            />
          </div>
          <div className="form-group">
            <label htmlFor="protein">Protein</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="protein"
            />
          </div>

          <button
            type="submit"
            onClick={this.constructNewFood}
            className="btn btn-primary"
          >
            Create
          </button>
          &nbsp;
          <button
            type="submit"
            onClick={() => this.props.history.push("/foods")}
            className="btn btn-primary"
          >
            Cancel
          </button>
        </form>
      </React.Fragment>
    );
  }
}
