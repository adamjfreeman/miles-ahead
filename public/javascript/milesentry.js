let progressType = '';

async function milesHandler(event) {
    event.preventDefault();
    const milesAmount = document.querySelector('input[name="miles"]').value.trim();
    console.log(progressType);
    console.log(milesAmount);
    const id = document.querySelector('input[name="userid"]').value.trim();
    if (progressType) {

        let progressObject = {
            user_id: id,
        }
        if (progressType === "runProgress") {
            progressObject.runProgress = milesAmount;
        }
        else if (progressType === "walkProgress") {
            progressObject.walkProgress = milesAmount;
        }
        else if (progressType === "bikeProgress") {
            progressObject.bikeProgress = milesAmount;
        }
        console.log (progressObject);
        const response = await fetch(`/api/progress/${id}`, {
            
            method: 'PUT',
            body: JSON.stringify({
                progressObject 
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}


document.querySelector('#runbtn').addEventListener('click', function (event) {
    progressType = "runProgress"
});
document.querySelector('#walkbtn').addEventListener('click', function (event) {
    progressType = "walkProgress"
});
document.querySelector('#bikebtn').addEventListener('click', function (event) {
    progressType = "bikeProgress"
});
document.querySelector('.miles-form').addEventListener('submit', milesHandler);
