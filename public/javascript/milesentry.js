async function milesHandler(event) {
    event.preventDefault();
    const runProgress = document.querySelector('input[name="run"]').value.trim();
    const walkProgress = document.querySelector('input[name="walk"]').value.trim();
    const bikeProgress = document.querySelector('input[name="bike"]').value.trim();
    const id = document.querySelector('input[name="userid"]').value.trim();
    if (run || walk || bike) {
        const response = await fetch(`/api/progress/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                user_id: id,
                runProgress,
                walkProgress,
                bikeProgress
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


document.querySelector('.goals-form').addEventListener('submit', milesHandler);