// Lamp switch functionality
document.querySelector('.lamp-switch').addEventListener('click', function() {
    document.body.classList.toggle('lights-on');
});

// Diary functionality
const diary = document.querySelector('.diary');
const diaryContent = document.querySelector('.diary-content');
const schedule = document.querySelector('.schedule');
const scheduleContent = document.querySelector('.schedule-content');
const overlay = document.querySelector('.overlay');
const closeButtons = document.querySelectorAll('.close-btn');

diary.addEventListener('click', function() {
    diaryContent.classList.add('show');
    overlay.classList.add('show');
});

schedule.addEventListener('click', function() {
    scheduleContent.classList.add('show');
    overlay.classList.add('show');
});

closeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        diaryContent.classList.remove('show');
        scheduleContent.classList.remove('show');
        overlay.classList.remove('show');
    });
});

overlay.addEventListener('click', function() {
    diaryContent.classList.remove('show');
    scheduleContent.classList.remove('show');
    overlay.classList.remove('show');
});

// Initialize items with slight random rotations
document.querySelectorAll('.item').forEach(item => {
    if (!item.classList.contains('id-card')) {
        const randomRotate = (Math.random() * 6) - 10;
        item.style.transform = item.style.transform + ` rotate(${randomRotate}deg)`;
    }
});