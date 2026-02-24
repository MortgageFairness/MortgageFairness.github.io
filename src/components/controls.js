export function createDropdown(label, options, value, onChange, isStateDropdown = false, showInfo = false) {
  const container = document.createElement('div');
  container.className = 'control-group';

  const labelEl = document.createElement('label');
  labelEl.textContent = label;

  if (showInfo) {
    const infoIcon = document.createElement('span');
    infoIcon.className = 'info-icon';
    infoIcon.textContent = 'i';

    // Create backdrop
    const backdrop = document.createElement('div');
    backdrop.className = 'info-backdrop';

    // Create tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'info-tooltip';
    tooltip.innerHTML = `
      <button class="info-close" aria-label="Close">&times;</button>
      <p><strong>All measures (except representativeness) are depicted as differences relative to a reference demographic group. For race/ethnicity, the reference group is White applicants or borrowers. For gender, the reference group is male applicants or borrowers.</strong></p>
      <p><strong>Statistical parity:</strong> difference in denial rates</p>
      <p><strong>Predictive parity:</strong> difference in default rates</p>
      <p><strong>Conditional statistical parity:</strong> conditional difference in denial rates</p>
      <p><strong>Representativeness:</strong> amount of under-representation among approved borrowers</p>
      <p><strong>Equality of opportunity:</strong> difference in denial rates among creditworthy borrowers</p>
      <p><strong>Equality of goodwill:</strong> difference in denial rates among non-creditworthy borrowers</p>
      <p><strong>Marginal outcome test:</strong> differences in lending standards</p>
    `;

    // Append tooltip and backdrop to body
    document.body.appendChild(backdrop);
    document.body.appendChild(tooltip);

    // Show tooltip on click
    infoIcon.addEventListener('click', (e) => {
      e.stopPropagation();
      backdrop.classList.add('show');
      tooltip.classList.add('show');
    });

    // Close tooltip
    const closeTooltip = () => {
      backdrop.classList.remove('show');
      tooltip.classList.remove('show');
    };

    backdrop.addEventListener('click', closeTooltip);
    tooltip.querySelector('.info-close').addEventListener('click', closeTooltip);

    labelEl.appendChild(infoIcon);
  }

  container.appendChild(labelEl);

  const select = document.createElement('select');

  // Sort options with U.S. at top for state dropdowns
  let sortedOptions = [...options];
  if (isStateDropdown) {
    sortedOptions = sortedOptions.sort((a, b) => {
      if (a === 'U.S.') return -1;
      if (b === 'U.S.') return 1;
      return a.localeCompare(b);
    });
  }

  sortedOptions.forEach(opt => {
    const option = document.createElement('option');
    option.value = opt;
    option.textContent = opt;
    if (opt === value) {
      option.selected = true;
    }
    select.appendChild(option);
  });

  select.addEventListener('change', (e) => onChange(e.target.value));
  container.appendChild(select);

  return container;
}
