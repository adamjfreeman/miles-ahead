async function milesHandler(event) {
    event.preventDefault();
    const progressType = '';

    if(document.querySelector('#runbtn').clicked == true){
        progressType = 'runProgress';
        alert("button was clicked");
    }
    if (document.querySelector('#walkbtn').clicked == true) {
        progressType = 'walkProgress';
        alert("button was clicked");
    }
    if (document.querySelector('#bikebtn').clicked == true) {
        progressType = 'bikeProgress';
        alert("button was clicked");
    }

    
    const milesAmount = document.querySelector('input[name="miles"]').value.trim();
    console.log(progressType);
    console.log(milesAmount);
    const id = document.querySelector('input[name="userid"]').value.trim();
    if (progressType && milesAmount) {
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


document.querySelector('.miles-form').addEventListener('submit', milesHandler);