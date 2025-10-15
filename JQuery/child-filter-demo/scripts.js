// scripts.js - jQuery Child Filter
$(function(){
  // Utility: gather selected filters grouped by data-filter-type
  function getSelectedFilters() {
    const groups = {};
    $('input[type="checkbox"][data-filter-type]').each(function(){
      const type = $(this).data('filter-type');
      if (!groups[type]) groups[type] = [];
      if (this.checked) groups[type].push(String(this.value));
    });
    return groups;
  }

  // Check whether a product matches the selected filters
  // Logic: AND across groups, OR within a group
  function productMatches($product, selectedGroups) {
    // if no filter selected at all => match
    const groupKeys = Object.keys(selectedGroups).filter(k => selectedGroups[k].length > 0);
    if (groupKeys.length === 0) return true;

    for (let i = 0; i < groupKeys.length; i++) {
      const type = groupKeys[i];
      const wantedValues = selectedGroups[type]; // array
      // find child's values for this product
      const childValues = $product.find(`.chip[data-child-type="${type}"]`).map(function(){ return $(this).data('child-value') }).get().map(String);

      // check OR within group: product must have at least one value in wantedValues
      const hasAtLeastOne = wantedValues.some(v => childValues.indexOf(v) !== -1);
      if (!hasAtLeastOne) return false; // fails this group's requirement => overall fail
    }
    return true; // passed all groups
  }

  function applyFilters() {
    const selected = getSelectedFilters();
    const query = $('#searchInput').val().trim().toLowerCase();

    $('#productList .product-card').each(function(){
      const $p = $(this);
      const name = ($p.data('name') || $p.find('.product-title').text() || '').toString().toLowerCase();

      const matchesText = query === '' || name.indexOf(query) !== -1;
      const matchesFilter = productMatches($p, selected);

      if (matchesText && matchesFilter) {
        $p.removeClass('hidden');
      } else {
        $p.addClass('hidden');
      }
    });
  }

  // Event handlers
  $('input[type="checkbox"][data-filter-type]').on('change', applyFilters);
  $('#searchInput').on('input', applyFilters);
  $('#resetFilters').on('click', function(){
    $('input[type="checkbox"][data-filter-type]').prop('checked', false);
    $('#searchInput').val('');
    applyFilters();
  });

  // optional: clicking on a chip toggles checkbox filter (nice UX)
  $('.chip').on('click', function(){
    const type = $(this).data('child-type');
    const value = $(this).data('child-value');

    // find checkbox corresponding to this child and toggle it
    const $cb = $(`input[data-filter-type="${type}"][value="${value}"]`);
    if ($cb.length) {
      $cb.prop('checked', !$cb.prop('checked'));
      applyFilters();
    }
  });

  // initial render
  applyFilters();
});
