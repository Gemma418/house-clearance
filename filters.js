document.addEventListener('DOMContentLoaded', () => {
    const filterBar = document.querySelector('.filter-bar');
    if (!filterBar) return;

    const inputs = Array.from(filterBar.querySelectorAll('input[type="checkbox"]'));
    const items = Array.from(document.querySelectorAll('.item-card'));
    const allCb = inputs.find(i => i.value === 'all');

    function updateVisibility() {
        const checked = inputs.filter(i => i.checked).map(i => i.value);

        // If 'all' is checked -> show everything and uncheck others
        if (checked.includes('all')) {
            inputs.forEach(i => { if (i.value !== 'all') i.checked = false; });
            items.forEach(it => it.classList.remove('hidden'));
            return;
        }

        // If nothing is checked -> revert to 'all' checked
        if (checked.length === 0) {
            if (allCb) allCb.checked = true;
            items.forEach(it => it.classList.remove('hidden'));
            return;
        }

        // Otherwise show items whose data-category is in checked list
        items.forEach(it => {
            const cat = it.dataset.category; // must match checkbox values
            if (checked.includes(cat)) it.classList.remove('hidden');
            else it.classList.add('hidden');
        });
    }

    // Wire up change listeners
    inputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.value === 'all' && input.checked) {
                // if user checks 'all', uncheck all others
                inputs.forEach(i => { if (i.value !== 'all') i.checked = false; });
            } else if (input.value !== 'all' && input.checked) {
                // if user checks a category, uncheck 'all'
                if (allCb) allCb.checked = false;
            }
            updateVisibility();
        });
    });

    // initial run
    updateVisibility();
});