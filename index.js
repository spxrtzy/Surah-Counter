let varCurrentNumberSurah = JSON.parse(localStorage.getItem('currentNumberSurah'))
let varCurrentNumber = 1;





let SurahsList = [
'wym surah 0??',
'Al-Fatihah - the Opening',
'Al-Baqarah - the Cow',
'Aali Imran - the Family of Imran',
'An-Nisa - the Women',
'Al-Maidah - the Table',
'Al-Anam - the Cattle',
'Al-Araf - the Heights',
'Al-Anfal - the Spoils of War',
'At-Taubah - the Repentance',
'Yunus - Yunus',
'Hud - Hud',
'Yusuf - Yusuf',
'Ar-Rad - the Thunder',
'Ibrahim - Ibrahim',
'Al-Hijr - the Rocky Tract',
'An-Nahl - the Bees',
'Al-Isra - the Night Journey',
'Al-Kahf - the Cave',
'Maryam - Maryam',
'Ta-Ha - Ta-Ha',
'Al-Anbiya - the Prophets',
'Al-Haj - the Pilgrimage',
'Al-Muminun - the Believers',
'An-Nur - the Light',
'Al-Furqan - the Criterion',
'Ash-Shuara - the Poets',
'An-Naml - the Ants',
'Al-Qasas - the Stories',
'Al-Ankabut - the Spider',
'Ar-Rum - the Romans',
'Luqman - Luqman',
'As-Sajdah - the Prostration',
'Al-Ahzab - the Combined Forces',
'Saba - the Sabeans',
'Al-Fatir - the Originator',
'Ya-Sin - Ya-Sin',
'As-Saffah - Those Ranges in Ranks',
'Sad - Sad',
'Az-Zumar - the Groups',
'Ghafar - the Forgiver',
'Fusilat - Distinguished',
'Ash-Shura - the Consultation',
'Az-Zukhruf - the Gold',
'Ad-Dukhan - the Smoke',
'Al-Jathiyah - the Kneeling',
'Al-Ahqaf - the Valley',
'Muhammad - Muhammad',
'Al-Fath - the Victory',
'Al-Hujurat - the Dwellings',
'Qaf - Qaf',
'Adz-Dzariyah - the Scatterers',
'At-Tur - the Mount',
'An-Najm - the Star',
'Al-Qamar - the Moon',
'Ar-Rahman - the Most Gracious',
'Al-Waqiah - the Event',
'Al-Hadid - the Iron',
'Al-Mujadilah - the Reasoning',
'Al-Hashr - the Gathering',
'Al-Mumtahanah - the Tested',
'As-Saf - the Row',
'Al-Jumah - Friday',
'Al-Munafiqun - the Hypocrites',
'At-Taghabun - the Loss & Gain',
'At-Talaq - the Divorce',
'At-Tahrim - the Prohibition',
'Al-Mulk - the Kingdom',
'Al-Qalam - the Pen',
'Al-Haqqah - the Inevitable',
'Al-Maarij - the Elevated Passages',
'Nuh - Nuh',
'Al-Jinn - the Jinn',
'Al-Muzammil - the Wrapped',
'Al-Mudaththir - the Cloaked',
'Al-Qiyamah - the Resurrection',
'Al-Insan - the Human',
'Al-Mursalat - Those Sent Forth',
'An-Naba - the Great News',
'An-Naziat - Those Who Pull Out',
'Abasa - He Frowned',
'At-Takwir - the Overthrowing',
'Al-Infitar - the Cleaving',
'Al-Mutaffifin - Those Who Deal in Fraud',
'Al-Inshiqaq - the Splitting Asunder',
'Al-Buruj - the Stars',
'At-Tariq - the Nightcomer',
'Al-Ala - the Most High',
'Al-Ghashiyah - the Overwhelming',
'Al-Fajr - the Dawn',
'Al-Balad - the City',
'Ash-Shams - the Sun',
'Al-Layl - the Night',
'Adh-Dhuha - the Forenoon',
'Al-Inshirah - the Opening Forth',
'At-Tin - the Fig',
'Al-Alaq - the Clot',
'Al-Qadar - the Night of Decree',
'Al-Bayinah - the Proof',
'Az-Zalzalah - the Earthquake',
'Al-Adiyah - the Runners',
'Al-Qariah - the Striking Hour',
'At-Takathur - the Piling Up',
'Al-Asr - the Time',
'Al-Humazah - the Slanderer',
'Al-Fil - the Elephant',
'Quraish - Quraish',
'Al-Maun - the Assistance',
'Al-Kauthar - the River of Abundance',
'Al-Kafirun - the Disbelievers',
'An-Nasr - the Help',
'Al-Masad - the Palm Fiber',
'Al-Ikhlas - the Sincerity',
'Al-Falaq - the Daybreak',
'An-Nas - Mankind'
]







if(varCurrentNumberSurah == null) {
    console.log('Key is undefined, setting it to value 1');
    localStorage.setItem('currentNumberSurah', JSON.stringify(varCurrentNumber))
    console.log(`New Value Is: ${JSON.parse(localStorage.getItem('currentNumberSurah'))}`)
}

function updateUI() {
    const currentNumberSurahSpan = document.querySelector('.span1');
    const currentNumberSurahSpanName = document.querySelector('.span2');
    currentNumberSurahSpanName.innerText = SurahsList[JSON.stringify(JSON.parse(localStorage.getItem('currentNumberSurah')))]
    currentNumberSurahSpan.innerText = JSON.stringify(JSON.parse(localStorage.getItem('currentNumberSurah')));
    console.log('Updated UI')
}

if(varCurrentNumberSurah != null){
    console.log('Yay it\'s not empty!!');
    let trigger = JSON.parse(localStorage.getItem('currentNumberSurah'));
    localStorage.setItem('currentNumberSurah', JSON.stringify(trigger))
    updateUI();
}





const IncNumBtn = document.querySelector('.surahUp');
IncNumBtn.onclick = () => {
    console.log('Incrementing Number');
    let trigger = JSON.parse(localStorage.getItem('currentNumberSurah'));
    trigger++;
    localStorage.setItem('currentNumberSurah', JSON.stringify(trigger));
    console.log(`New Number: ${JSON.stringify(JSON.parse(localStorage.getItem('currentNumberSurah')))}`);
    updateUI();
} 

const DecNumBtn = document.querySelector('.surahDown');
DecNumBtn.onclick = () => {
    console.log('Decrementing Number');
    let trigger = JSON.parse(localStorage.getItem('currentNumberSurah'));
    trigger--;
    localStorage.setItem('currentNumberSurah', JSON.stringify(trigger));
    console.log(`New Number: ${JSON.stringify(JSON.parse(localStorage.getItem('currentNumberSurah')))}`);
    updateUI();
} 

updateUI();