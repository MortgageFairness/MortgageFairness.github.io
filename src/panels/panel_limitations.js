export function renderLimitationsPage() {
  return `
          <div style="padding: 30px 40px; max-width: 1000px; line-height: 1.7;">
            <h2 style="margin-bottom: 30px; font-size: 2rem;">Limitations</h2>

            <div style="margin-bottom: 30px;">
              <p style="margin-bottom: 20px;">Our analysis comes with several important caveats and limitations.</p>

              <ul style="list-style-type: disc; margin-left: 30px; margin-bottom: 20px;">
                <li style="margin-bottom: 15px;">We do not consider fairness with respect to attributes of the decision process outside approval or denial (e.g., pricing).</li>

                <li style="margin-bottom: 15px;">There is evidence suggesting that minority applicants may receive less assistance during the application process and may even be discouraged from applying in the first place.</li>

                <li style="margin-bottom: 15px;">One of the underlying data sources (McDash) is composed of the servicing portfolios of the largest residential mortgage servicers in the United States, covering approximately two-thirds of loans in the residential mortgage servicing market. However, this is not necessarily a representative sample of the entire U.S. mortgage market.</li>

                <li style="margin-bottom: 15px;">Several of our fairness definitions (Marginal Outcome Test, Equalized Odds) are derived from mortgage applicants who apply for multiple mortgages ("cross-applicants"). Our algorithm to identify these cross-applicants likely captures only a small fraction of true cross-applicants. See our <a href="https://www.philadelphiafed.org/-/media/FRBP/Assets/working-papers/2025/wp25-04.pdf" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: underline; font-weight: 700;">technical report</a> for more detail.</li>

                <li style="margin-bottom: 15px;">To interpret the Marginal Outcome Test as a difference in lending standards, we require additional assumptions (e.g., no systematic difference in leniency between lenders that predominantly serve different groups). For more detail, see our <a href="https://www.philadelphiafed.org/-/media/FRBP/Assets/working-papers/2025/wp25-04.pdf" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: underline; font-weight: 700;">working paper</a>.</li>

                <li style="margin-bottom: 15px;">Since the minimum sample size for any measure is five individuals, there may be higher uncertainty for some measures in some states that rely on smaller samples of individuals close to this minimum.</li>
              </ul>

              <p style="margin-top: 25px;">For more on scope and limitations, see our <a href="https://www.philadelphiafed.org/-/media/FRBP/Assets/working-papers/2025/wp25-04.pdf" target="_blank" rel="noopener noreferrer" style="color: var(--color-accent); text-decoration: underline; font-weight: 700;">working paper</a>.</p>
            </div>

            <h3 style="margin: 40px 0 25px 0; font-size: 1.6rem;">Data Suppression</h3>

            <p style="margin-bottom: 15px;">Values are suppressed when the sample size for a given metric is fewer than five. For example, for the marginal outcome test for Black borrowers, a value would be suppressed if there are fewer than five Black borrowers who submitted multiple applications where one was accepted and one was denied.</p>
          </div>`;
}
