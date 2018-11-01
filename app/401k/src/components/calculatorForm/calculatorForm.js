import React, { Component } from 'react'
import styled from 'styled-components'
import './style.js'

const List = styled.li`
  list-style: none;
`

const Form = styled.form`

  `

const Input = styled.input`
`
const Submit = styled.button`
  //
`

class CalculatorForm extends Component {
  render () {
    return(
      <Form>
        <List>
          <label>
            Enter your Age:
            <Input
              name="startingAge"
              type="float" />
          </label>
        </List>
        <List>
          <label>
            Enter the age you would like it stop calculating at:
            <Input
              name="endingAge"
              type="float" />
          </label>
        </List>
        <List>
          <label>
            Enter the age you would like to stop contributing to 401k:
            <Input
              name="endContributionAge"
              type="float" />
          </label>
        </List>
        <List>
          <label>
            Enter your yearly contribution amount:
            <Input
              name="yearlyContribution"
              type="float" />
          </label>
        </List>
        <List>
          <label>
            Enter the percent your company is willing to match:
            <Input
              name="companyMatchPercent"
              type="float" />
          </label>
        </List>
        <List>
          <label>
            Enter your yearly salary:
            <Input
              name="usersSalary"
              type="float" />
          </label>
        </List>
        <List>
          <label>
            Enter the percent you expect your 401k to grow at:
            <Input
              name="interestRateGrowth"
              type="float" />
          </label>
        </List>
        <Submit type="submit" value="Submit">
          Submit
        </Submit>
      </Form>
    )
  }
}

export default CalculatorForm;
