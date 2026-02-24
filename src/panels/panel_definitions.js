export function renderDefinitionsPage() {
  return `
          <div style="padding: 30px 40px; max-width: 1000px; line-height: 1.7;">
            <h2 style="margin-bottom: 30px; font-size: 2rem;">Definitions</h2>

            <h3 style="margin-bottom: 25px; font-size: 1.6rem;">Fairness Measures</h3>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Statistical Parity</h4>
              <p style="line-height: 1.7;">Difference in denial rates. Statistical parity is satisfied if applicants from different groups are denied at the same rate. A violation of this measure is defined as the difference in denial rate between a target demographic group and the reference demographic group. For example, a statistical parity value of 10 for Black applicants means Black applicants are 10 percentage points more likely to be denied on their loan application than White applicants. Negative values indicate a lower denial rate relative to the reference group.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Predictive Parity</h4>
              <p style="line-height: 1.7;">Difference in default rates. Predictive parity is satisfied if borrowers from different groups default at the same rate. A violation of this measure is defined as the difference in default rate between a target demographic group and the reference demographic group. For example, a predictive parity value of 10 for Black borrowers means that Black borrowers are 10 percentage points more likely to default than White borrowers. Negative values indicate a lower default rate relative to the reference group.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Marginal Outcome Test</h4>
              <p style="line-height: 1.7;">Difference in lending standards. The marginal outcome test is satisfied if borrowers at the margin default at the same rate across groups. Marginal applicants are defined as those who submit one application resulting in an approval and another resulting in a denial. A violation of this measure is defined as the difference in default rate between marginal applicants in the reference demographic group and marginal applicants in a target demographic group. For example, a value of 10 for Black borrowers means that Black marginal borrowers are 10 percentage points less likely to default than White marginal borrowers. This is because lower default rates at the margin imply higher lending standards among this group, relative to the reference group.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Equality of Opportunity</h4>
              <p style="line-height: 1.7;">Difference in denial rates for creditworthy borrowers; captures a notion of unfair denials. Equality of opportunity is satisfied if creditworthy borrowers are denied at the same rate across groups. A violation of this measure is defined as the difference in denial probability between creditworthy applicants in a target demographic group and creditworthy applicants in the reference demographic group. We define creditworthy applicants as those that did not default on their loan. To estimate this measure, we use the set of applicants who apply multiple times, originate one loan, and do not default. For example, a value of 10 for Black borrowers means that Black creditworthy borrowers are 10 percentage points more likely to be denied on their loan applications than White creditworthy borrowers.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Equality of Goodwill</h4>
              <p style="line-height: 1.7;">Difference in denial rates for non-creditworthy borrowers, captures a notion of unfair approvals. Equality of goodwill is satisfied if non-creditworthy borrowers are denied at the same rate across groups. A violation of this measure is defined as the difference in denial probability between non-creditworthy applicants in a target demographic group and non-creditworthy applicants in the reference demographic group. We define non-creditworthy borrowers as those that defaulted on their loan. To estimate this measure, we use the set of applicants who apply multiple times, originate one loan, and later default. For example, a value of 10 for Black borrowers means that Black non-creditworthy borrowers are 10 percentage points more likely to be denied on their loan applications than White non-creditworthy borrowers.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Conditional Statistical Parity - Small</h4>
              <p style="line-height: 1.7;">Conditional difference in denial rates. Conditional statistical parity is satisfied if applicants from different groups, conditional on the same attributes, are denied at the same rate. A violation of this measure is defined as the difference in denial rates between a target and the reference demographic group among those with the same attributes. For example, a value of 10 for Black applicants means that Black applicants are 10 percentage points more likely to be denied on their loan application than White applicants with the same set of attributes (e.g., credit score or loan amount). This "Small model" version is a linear model and includes the conditioning variables: applicant income, loan amount, loan purpose, and an indicator for whether a coapplicant is present.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Conditional Statistical Parity - Large</h4>
              <p style="line-height: 1.7;">Conditional difference in denial rates. Conditional statistical parity is satisfied if applicants from different groups, conditional on the same attributes, are denied at the same rate. A violation of this measure is defined as the difference in denial rates between a target and the reference demographic group among those with the same attributes. For example, a value of 10 for Black applicants means that Black applicants are 10 percentage points more likely to be denied on their loan application than White applicants with the same set of attributes (e.g., credit score or loan amount). This "Large model" version includes an indicator for whether a coapplicant is present, loan purpose, the outcome of the automated underwriting system, and binned variables: applicant income, loan amount, credit score, debt-to-income ratio, and loan-to-value ratio.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Representativeness</h4>
              <p style="line-height: 1.7;">Amount of under-representation among those approved; corresponds to the idea that approved applicants should be "representative" of qualified applicants. This measure is satisfied if the proportion of approved applicants from a group is equal to the proportion of qualified applicants from that group. We define qualified applicants as those who have low estimated default risk. A violation of this measure is the difference in the proportion of qualified applicants from a target demographic group and the proportion of approved applicants from the same demographic group. For example, a value of 10 for Black applicants means that there are 10 percentage points fewer Black approved applicants than Black qualified applicants. Thus, if representativeness is positive, the group is "under-represented."</p>
            </div>

            <h3 style="margin: 40px 0 25px 0; font-size: 1.6rem;">Loan and Applicant Characteristics</h3>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Sex</h4>
              <p style="line-height: 1.7;">Refers to the sex of the primary applicant, when known. We use these categories: female and male.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Race/Ethnicity</h4>
              <p style="line-height: 1.7;">Refers to the first race or ethnicity category reported for the primary applicant (up to five can be), when known. We construct mutually exclusive categories: Hispanic (Hispanic), non-Hispanic White (White), non-Hispanic Black (Black), and non-Hispanic Asian (Asian).</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Income</h4>
              <p style="line-height: 1.7;">The gross annual income of the applicant to the extent relied on by the lending institution reporting the application. This may be missing if the applicant income was not taken into account, if the loan was for a multifamily dwelling, or if the application was from an employee.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Automated Underwriting System (AUS) Outcome</h4>
              <p style="line-height: 1.7;">This variable is generated by the automated underwriting system (AUS) used by the institution to evaluate the application. Potential systems are the Desktop Underwriter, Loan Prospector, Technology Open to Approved Lenders, or some other system the lender uses.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Debt to Income Ratio (DTI)</h4>
              <p style="line-height: 1.7;">The ratio as a percentage of the applicant's or borrower's total monthly debt payments to the total monthly income relied on in making the credit decision.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Loan to Value Ratio (LTV)</h4>
              <p style="line-height: 1.7;">Ratio between the total amount of debt secured by the property and the value of the property, expressed as a percentage.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Loan Term</h4>
              <p style="line-height: 1.7;">The number of months after which the legal obligation will mature or terminate, or would have matured or terminated.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Origination</h4>
              <p style="line-height: 1.7;">A mortgage application that has been approved and for which loan capital has been issued.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Denial Rate</h4>
              <p style="line-height: 1.7;">The number of denied mortgage applications divided by the total number of submitted applications.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Default Rate</h4>
              <p style="line-height: 1.7;">We consider a loan in default if its status is ever more than 90 days past due (i.e., three or more missed payments) within 24 months of origination. Default rate is equal to the number of mortgages in default divided by the total number of mortgages.</p>
            </div>

            <div style="margin-bottom: 25px;">
              <h4 style="margin-bottom: 10px; font-size: 1.1rem; color: var(--color-accent);">Sample Size</h4>
              <p style="line-height: 1.7;">The sample size is the total number of individuals within a group who fit the criteria of the measure (e.g., for the Marginal Outcome Test among Black borrowers, the sample size is the number of Black borrowers who submitted identical applications for a mortgage multiple times and were accepted at least once and denied at least once). Rate-based measures are then calculated based on the proportion of individuals meeting a specific outcome (e.g., denial, default) within this sample.</p>
            </div>
          </div>`;
}
