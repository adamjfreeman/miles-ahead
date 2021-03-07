async function progressPageEventHandler(event) {
    event.preventDefault();
    document.location.replace('/milesentry/');
}

async function goalsPageEventHandler(event) {
    event.preventDefault();
    document.location.replace('/goals/');
}

document.querySelector('#progressenter').addEventListener('click', progressPageEventHandler);
document.querySelector('#goalsenter').addEventListener('click', goalsPageEventHandler);
