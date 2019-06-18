import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      unitId: "",
      availability: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("handleChange");
    console.log(event);
    console.log(event.target);
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    console.log("submit");
    event.preventDefault();
    axios
      .post("/api/products/add", {
        name: this.state.name,
        unit_id: this.state.unitId,
        availability: this.state.availability
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
        <TextField
          id="outlined-name"
          label="Product name"
          name="name"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-name"
          label="Unit Id"
          name="unitId"
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          value="submit"
        >
          Submit
        </Button>
      </form>
    );
  }
}
