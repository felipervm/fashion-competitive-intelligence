const filter = document.querySelector('#group');
filter?.addEventListener('change', () => {
  let visible = 0;
  document.querySelectorAll('#comparison tbody tr').forEach(row => {
    row.hidden = filter.value !== 'Tutti' && row.dataset.group !== filter.value && row.dataset.group !== 'Riferimento';
    if (!row.hidden) visible++;
  });
  document.querySelector('#filter-status').textContent = `${visible} marchi visualizzati. Il riferimento resta sempre visibile.`;
});
const brandPicker = document.querySelector('#brand-picker');
function showProfile() {
  document.querySelectorAll('.brand-profile').forEach(card => {card.hidden = card.dataset.brand !== brandPicker.value;});
}
if (brandPicker) {showProfile(); brandPicker.addEventListener('change', showProfile);}
