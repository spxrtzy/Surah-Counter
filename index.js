let currentSurah = 86; // 1
let currentSurahSpan = document.querySelector('span');
currentSurahSpan.innerHTML = currentSurah;// == 1




function updateValue() {
    chrome.storage.local.get(['currentSurah'],(result)=>{
        if(!result.currentSurah) {
            result.currentSurah = "oops, error";
        }
        currentSurah = result.currentSurah;
        currentSurahSpan.innerText = result.currentSurah;
        console.log(`Current Surah number = ${result.currentSurah}`);
    });
}

updateValue()

const surahUpBtn = document.querySelector('.surahUp');
surahUpBtn.onclick = () => {
    console.log('Surah Up Clicked');

    currentSurah++;

    chrome.storage.local.set({'currentSurah':currentSurah},()=> {
        console.log('Current Surah has been increased by one');
        updateValue()
    })
}

const surahDownBtn = document.querySelector('.surahDown');
surahDownBtn.onclick = () => {
    console.log('Surah Down Clicked');

    currentSurah--;

    chrome.storage.local.set({'currentSurah':currentSurah},()=> {
        console.log('Current Surah has been decreased by one');
        updateValue()
    })
}
