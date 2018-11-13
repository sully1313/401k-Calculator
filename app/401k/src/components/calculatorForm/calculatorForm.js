import React, { Component } from "react";
import Table from "./../Table/table.js";
import { List, Form, Input, Submit } from "./style.js";

export default class CalculatorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingAge: "",
      endingAge: "",
      endContributionAge: "",
      yearlyContribution: "",
      companyMatchPercent: "",
      usersSalary: "",
      interestRateGrowth: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    this.props.onSubmit(data);
    console.log(data);
    this.setState({
      startingAge: "",
      endingAge: "",
      endContributionAge: "",
      yearlyContribution: "",
      companyMatchPercent: "",
      usersSalary: "",
      interestRateGrowth: ""
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    // console.log(event)
    // console.log(name)
    // console.log(value)
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <List>
          <label>Enter your Age:</label>
          <Input
            name="startingAge"
            type="float"
            onChange={this.handleInputChange}
          />
        </List>
        <br />
        <List>
          <label>
            Enter the age you would like it stop calculating at:
            <Input
              name="endingAge"
              type="float"
              onChange={this.handleInputChange}
            />
          </label>
        </List>
        <br />
        <List>
          <label>
            Enter the age you would like to stop contributing to 401k:
            <Input
              name="endContributionAge"
              type="float"
              onChange={this.handleInputChange}
            />
          </label>
        </List>{" "}
        <br />
        <List>
          <label>
            Enter your yearly contribution amount:
            <Input
              name="yearlyContribution"
              type="float"
              onChange={this.handleInputChange}
            />
          </label>
        </List>
        <br />
        <List>
          <label>
            Enter the percent your company is willing to match:
            <Input
              name="companyMatchPercent"
              type="float"
              onChange={this.handleInputChange}
            />
          </label>
        </List>
        <br />
        <List>
          <label>
            Enter your yearly salary:
            <Input
              name="usersSalary"
              type="float"
              onChange={this.handleInputChange}
            />
          </label>
        </List>
        <br />
        <List>
          <label>
            Enter the percent you expect your 401k to grow at:
            <Input
              name="interestRateGrowth"
              type="float"
              onChange={this.handleInputChange}
            />
          </label>
        </List>
        <br />
        <Submit type="submit" value="Submit" className="submitBtn">
          Submit
        </Submit>
      </Form>
    );
  }
}
