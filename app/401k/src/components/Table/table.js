import React, { Component } from "react";
import { TableWrapper, CellHeader, Cell } from "./style.js";

export default class Table extends Component {
  render() {
    const startingAge = parseInt(this.props.fields.startingAge);
    const endingAge = parseInt(this.props.fields.endingAge);
    const endContributionAge = parseInt(this.props.fields.endContributionAge);
    const yearlyContribution = parseInt(this.props.fields.yearlyContribution);
    const companyMatchPercent = parseInt(this.props.fields.companyMatchPercent);
    const interestRateGrowth = parseInt(this.props.fields.interestRateGrowth);
    const usersSalary = parseInt(this.props.fields.usersSalary);

    // calculations
    const interestRate = interestRateGrowth / 100;
    const matchPercentDecimal = companyMatchPercent / 100;
    const companyMatch = usersSalary * matchPercentDecimal;
    let totalContribution = 0;
    let totalPerYear = 0;
    let age = 0;
    let yearlyGrowthRate = 0;

    for (age = startingAge; age < endingAge; age++) {
      totalContribution = yearlyContribution + companyMatch;
      totalContribution = totalContribution + totalPerYear;
      yearlyGrowthRate = totalContribution * interestRate;
      totalContribution = totalContribution + yearlyGrowthRate;
      totalPerYear = totalContribution;
      console.log(
        age,
        yearlyContribution,
        companyMatch,
        yearlyGrowthRate,
        totalPerYear
      );
    }

    return (
      <div>
        <TableWrapper>
          <tr>
            <CellHeader>Age</CellHeader>
            <CellHeader>Yearly Contribution</CellHeader>
            <CellHeader>{companyMatchPercent}% Company Match</CellHeader>
            <CellHeader>{interestRateGrowth}% Interest Growth</CellHeader>
            <CellHeader>End-of-Year Account Balance</CellHeader>
          </tr>
          <tr>
            <Cell>{age}</Cell>
            <Cell>${yearlyContribution}</Cell>
            <Cell>{companyMatch}</Cell>
            <Cell>{yearlyGrowthRate}</Cell>
            <Cell>{totalPerYear}</Cell>
          </tr>
        </TableWrapper>
      </div>
    );
  }
}
