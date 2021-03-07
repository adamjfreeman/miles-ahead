//const { Progress, Goals, User } = require('../../models');

const progress = document.querySelector('.progress-bar');

progress.style.width = progress.getAttribute('data-done') + '%';
progress.style.opacity = 1;