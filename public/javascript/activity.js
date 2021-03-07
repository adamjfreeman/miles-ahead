const ProgressBar = require('progressbar.js');

async function progressPageEventHandler(event) {
    event.preventDefault();
    document.location.replace('/milesentry/');
}

async function goalsPageEventHandler(event) {
    event.preventDefault();
    document.location.replace('/goals/');
}

var bar = new ProgressBar.Line('#container', {easing: 'easeInOut'});
bar.animate(1);

document.querySelector('#progressenter').addEventListener('click', progressPageEventHandler);
document.querySelector('#goalsenter').addEventListener('click', goalsPageEventHandler);
