async function loginFormHandler(event) {
    event.preventDefault();

    const run = document.querySelector('#run').value.trim();
    const walk = document.querySelector('#walk').value.trim();
    const bike = document.querySelector('#bike').value.trim();
    if (run || walk || bike) {
        const response = await fetch(`/api/goals/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                run,
                walk,
                bike
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            document.location.replace('/activity/');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('.btn').addEventListener('submit', loginFormHandler);