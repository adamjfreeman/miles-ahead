async function goalsHandler(event) {
    event.preventDefault();
    const run = document.querySelector('input[name="run"]').value.trim();
    const walk = document.querySelector('input[name="walk"]').value.trim();
    const bike = document.querySelector('input[name="bike"]').value.trim();
    const id = document.querySelector('input[name="userid"]').value.trim();
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
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('.goals-form').addEventListener('submit', goalsHandler);