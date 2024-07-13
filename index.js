const buttonNext = document.getElementById('Next');
const buttonPrev = document.getElementById('Prev');
const moodSelect = document.getElementById('MoodSelect');
const Day = document.getElementById('Day');
const message = document.getElementById('Text');
const hashmap = new Map()
hashmap.set('Happy', 'My beautiful girl, I love that your are feeling happy. You deserve the happiest of days.');
hashmap.set('Hopeful', 'Many great things are in store for you my love, when plans don`t go your way that doesn`t mean to give up. You stay hopeful and keep on persevering and I promise great things will come your way.');
hashmap.set('Inspired', 'Today is a great day to feel inspired. Use this newfound inspiration and lets get to work strong girl. BE GREAT!! BE HAPPY!!');
hashmap.set('Grateful', 'Hells yea my love, I always love to hear when you`re feeling grateful. Never forget the blessing we all recieve, and the joy of the littlest things. Everyday is a day of gratefulness and remembrance. Never take life for granted!');
hashmap.set('Goofy', 'You in a silly goofy mood today sweet girl?! I love seeing my baby happy and enjoying herself. Have lots of laughs and smile a ton sweet girl, you deserve it.');
hashmap.set('Sad', 'Rainy days create beautiful rainbows, sad days makes a stronger Riley. Our struggles in life never define us, nor are they forever. Beautiful results come to those who stay persistent and work through their toughest times. Pick yourself back up my love, I believe in you.');
hashmap.set('Mad', 'Anger is the downfall of many, never let these feelings overcome you and push you to being someone you are not. Always take time to calm yourself down and remember this feeling never last forever. I love you sweet girl and we will get through this together.');
hashmap.set('Annoyed', 'Take a deep breath my love, remember what your goals and plans are for the day. It is totally okay to feel that way, but just because you are upset doesn`t mean that it is okay to take that fustration out on others. You never know what others are dealing with; just because you are upset doesn`t make it right to upset others who don`t deserve it; and just remember... Treat people how you would want to be treated. Stay positive my love, I love you.');
hashmap.set('Nervous', 'Take a deep breath my love, reset and recollect yourself. It`s okay to feel nervous but know that you can accomplish anything. Believe in yourself and go out and make the impossible possible.');
hashmap.set('Stressed', 'There are moments in our life that are extremely stressful, they can be very difficult and make us feel lost and miserable. That`s the thing though my love, it`s only a moment. Our actions and decisions moving forward is what determines our happiness. Always take time for yourself to destress, take deep breaths, get some fresh air, drink some water, and just remember... Relax my love. Just like you always say, "It will always work out." (Who the hell got my baby stressing?!!!)  I love you Riley, forever and ever. ');
let currentDayIndex = new Date().getDay(); // Get the current day index

const Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Initialize the display of the current day
Day.textContent = Days[currentDayIndex];

function updateDayDisplay() {
    Day.textContent = Days[currentDayIndex];
}

function resetPhrase() {
    moodSelect.value = '--';
    message.textContent = ' ';
}

buttonNext.addEventListener('click', function() {
    currentDayIndex = (currentDayIndex + 1) % Days.length; // Loop back to Sunday after Saturday
    updateDayDisplay();
    resetPhrase();
});

buttonPrev.addEventListener('click', function() {
    currentDayIndex = (currentDayIndex - 1 + Days.length) % Days.length; // Loop back to Saturday before Sunday
    updateDayDisplay();
    resetPhrase();
});

moodSelect.addEventListener('change', function() {
    const Selection = moodSelect.value;
    const phrase = hashmap.get(Selection);
    message.textContent = phrase;
});
