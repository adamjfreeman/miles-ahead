async function goalsHandler(event) {
    event.preventDefault();

    const run = document.querySelector('#run').value.trim();
    const walk = document.querySelector('#walk').value.trim();
    const bike = document.querySelector('#bike').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    if (run || walk || bike) {
        const response = await fetch(`/api/goals/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                user_id: id,
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


document.querySelector('#goals').addEventListener('submit', goalsHandler);