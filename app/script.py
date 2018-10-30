starting_age = abs(int(input("\nEnter your age: ")))
ending_age = abs(int(input("Enter age you would like to it stop calculating at: ")))

while starting_age >= ending_age:
    starting_age = abs(int(input("\nPlease re-enter your age: ")))
    ending_age = abs(int(input("Please re-enter the age you would like to it stop calculating at(it must be greater than your age): ")))

end_contribution_age = abs(int(input("Enter age you would like to stop contributing to 401k: ")))
yearly_contribution = float(input("Enter yearly contribution amount: "))

while yearly_contribution > 18500 or yearly_contribution < 0:
    yearly_contribution = float(input("Please re-enter yearly contribution amount(Max of $18500): "))

company_match_percent = float(input("Enter the percent your company is willing to match: "))
interest_rate_growth = float(input("Enter the percent you expect your 401k to grow at: "))
users_salary = float(input("Enter your yearly salary: "))
interest_rate_growth = interest_rate_growth/100
growth_percent = int(interest_rate_growth*100)
company_match_percent = company_match_percent/100
match_percent = int(company_match_percent*100)
company_match = users_salary * company_match_percent
total_contribution = 0
total_per_year = 0


print("\n\t{:<14s}{:<25s}{:<25s}{:<25s}{:<19s}".format('Age','Yearly Contributions', '%d%% Match'%(match_percent), '%d%% Interest Rate'% (growth_percent), 'EOY Account Balance'))
dash = '-' * 107
print('\t%s'% dash)

for age in range(starting_age, ending_age+1, 1):
    if end_contribution_age < age:
        yearly_contribution = 0
        company_match = 0

    total_contribution = yearly_contribution + company_match
    total_contribution = total_contribution + total_per_year
    yearly_growth_rate = total_contribution * interest_rate_growth
    total_contribution = total_contribution + yearly_growth_rate
    total_per_year = total_contribution
    # print(total_contribution, yearly_growth_rate, total_per_year, yearly_contribution, company_match)

    print("\n\t{:<14d}${:<25.2f}${:<25.2f}${:<25.2f}${:<19.2f}".format(age, yearly_contribution, company_match, yearly_growth_rate, total_per_year))
