function btnClicked(){
    const qoutes=['"  Close your eyes. Focus on making yourself feel excited, powerful. Imagine yourself destroying goals with ease."',
    '"Find a person who is as successful as you did like to be, ask them what to do, do it and work hard."',
    '"he temporary satisfaction of quitting is outweighed by the eternal suffering of being a nobody"',
    '"Your mind must be stronger than your feelings."',
    '"Absolutely every single one of my actions is intentional. Divine purpose. If your day is full of mindless action, you act without thought."',
    `'"Success is always stressful."'`,
    '"Freedom will only come when you no longer trade your time for money."',
    '"Cost is the enemy of the poor man, so the poor try to save money. Time is the enemy of the rich man, so the rich try to save time."',
    '"You must put in the effort to get the life you want."',
    '"You are exactly where you deserve to be. Change who you are and you will change how you live."',
    '"Do the impossible and you will never doubt yourself ever again."',
    '"The internet is the new battleground of earth, the wild west, the place of truth and opportunity."',
    '"Arrogance is the cause of most first world poverty."',
    '"Today you can act as an amateur or you can be a professional. Decide what you will do right now."',
    '"You are never going to have any of the things you want if you do not get them yourself. Nobody cares about you enough to do it for you."',
    '"If failure makes you stronger, you can never lose.',
    '"always win because I genuinely cant take losing." ',
    '"The faster you work, the more work you get done." ',
    '"Stress tolerance is the best indicator of a person is likelihood of success." ',
    '"Searching for my favorite feeling has built me an exceptional life." ',
    '"Focus on what is best for yourself."',
    '"There is no light without dark. There is no joy without pain." ',
    '"The faster you work, the more work you get done." ',
    '"A man without a vision for his future always returns to his past." ',
    '"Adversity builds men. It is your duty to challenge yourself and craft your own world."',
    '"Do not listen to the advice of people who are living lives you do not want to live."',
    '"The harder you work, the more important you become." '
    ]
generate=Math.floor(Math.random()*27)+0;
document.getElementById('qoute').innerHTML=qoutes[generate];
console.log(qoutes[generate]);
}

















