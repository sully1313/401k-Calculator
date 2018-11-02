import React, { Component } from 'react'
import styled from 'styled-components'
import './style.js'

const List = styled.li`
  list-style: none;
`

const Form = styled.form`
  box-sizing: border-box;
  width: 50%;
  `

const Input = styled.input`
  width: 100%;
  padding: 1em;
  background: #fff;
  border: 1px solid rgba(0,0,0,.12);
  font-size: 15px;
  line-height: normal;

`
const Submit = styled.button`
  display: inline-block;
  width: auto;
  height: auto;
  padding: 1em 2.5em;
  text-align: center;
  cursor: pointer;
  position: relative;
  border: 1px solid #222 !important;
  font-family: brandon-grotesque;
  font-size: 15px;
  font-style: normal;
  line-height: normal;
  font-weight: normal;
  text-transform: uppercase;
  white-space: nowrap;
`

class CalculatorForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startingAge: '',
      endingAge: '',
      endContributionAge: '',
      yearlyContribution: '',
      companyMatchPercent: '',
      usersSalary: '',
      interestRateGrowth: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }
  render () {
    return(
      <Form>
        <List>
          <label>
            Enter your Age:
          </label>
            <Input
              name="startingAge"
              type="float"
              value={this.state.startingAge}
              onChange={this.handleInputChange} />
        </List>
        <br />
        <List>
          <label>
            Enter the age you would like it stop calculating at:
            <Input
              name="endingAge"
              type="float"
              value={this.state.endingAge}
              onChange={this.handleInputChange} />
          </label>
        </List>
        <br />
        <List>
          <label>
            Enter the age you would like to stop contributing to 401k:
            <Input
              name="endContributionAge"
              type="float"
              value={this.state.endContributionAge}
              onChange={this.handleInputChange} />
          </label>
        </List>
        <br />
        <List>
          <label>
            Enter your yearly contribution amount:
            <Input
              name="yearlyContribution"
              type="float"
              value={this.state.yearlyContribution}
              onChange={this.handleInputChange} />
          </label>
        </List>
        <br />
        <List>
          <label>
            Enter the percent your company is willing to match:
            <Input
              name="companyMatchPercent"
              type="float"
              value={this.state.companyMatchPercent}
              onChange={this.handleInputChange} />
          </label>
        </List>
        <br />
        <List>
          <label>
            Enter your yearly salary:
            <Input
              name="usersSalary"
              type="float"
              value={this.state.usersSalary}
              onChange={this.handleInputChange} />
          </label>
        </List>
        <br />
        <List>
          <label>
            Enter the percent you expect your 401k to grow at:
            <Input
              name="interestRateGrowth"
              type="float"
              value={this.state.interestRateGrowth}
              onChange={this.handleInputChange} />
          </label>
        </List>
        <br />
        <Submit type="submit" value="Submit" className="submitBtn">
          Submit
        </Submit>
      </Form>
    )
  }
}

export default CalculatorForm;
