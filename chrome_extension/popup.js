document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kv-form');
    const keyInput = document.getElementById('key');
    const valueInput = document.getElementById('value');
    const list = document.getElementById('kv-list');

    // Load stored items when the popup is opened
    chrome.storage.sync.get(null, (items) => {
        for (const [key, value] of Object.entries(items)) {
            addListItem(key, value);
        }
    });

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const key = keyInput.value.trim();
        const value = valueInput.value.trim();

        if (key && value) {
            chrome.storage.sync.set({ [key]: value }, () => {
                addListItem(key, value);
                keyInput.value = '';
                valueInput.value = '';
            });
        }
    });

    function addListItem(key, value) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${value}`;
        list.appendChild(li);
    }
});
