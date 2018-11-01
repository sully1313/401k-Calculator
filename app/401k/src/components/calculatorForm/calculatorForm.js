import React, { Component } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  //
  `

const Input = styled.input`
  //
`
const Submit = styled.button`
  //
`

class CalculatorForm extends Component {
  render () {
    return(
      <form>
        <label>
          Enter your Age:
          <input
            name="startingAge"
            type="float" />
        </label>
        <label>
          Enter the age you would like it stop calculating at:
          <input
            name="endingAge"
            type="float" />
        </label>
        <label>
          Enter the age you would like to stop contributing to 401k:
          <input
            name="endContributionAge"
            type="float" />
        </label>
        <label>
          Enter your yearly contribution amount:
          <input
            name="yearlyContribution"
            type="float" />
        </label>
        <label>
          Enter the percent your company is willing to match:
          <input
            name="companyMatchPercent"
            type="float" />
        </label>
        <label>
          Enter your yearly salary:
          <input
            name="usersSalary"
            type="float" />
        </label>
        <label>
          Enter the percent you expect your 401k to grow at:
          <input
            name="interestRateGrowth"
            type="float" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default CalculatorForm;
