// Завдання
// Необхідно реалізувати наступний функціонал як на відео, а саме:
// •	повернути поточну дату в форматі: день.місяць.рік
// •	повернути поточний час в форматі: година:хвилина:секунда
// •	розробити секундомір в якого є можливість запуску, паузи, запам’ятовування поточного часу та скидування часу(мілісекунди не обов’язково реалізовувати)
// •	розробити таймер в якого є можливість визначення часового проміжку, а також запуск, пауза ти скидування часу

let date = document.querySelector('.date');
let time = document.querySelector('.time');
let d = new Date();

if (d.getDate() < 10) {
    date.textContent = `0${d.getDate()} : ${d.getMonth() + 1} : ${d.getFullYear()}`
}
if (d.getMonth() < 10) {
    date.textContent = `${d.getDate()} : 0${d.getMonth() + 1} : ${d.getFullYear()}`
}
if (d.getDate() < 10 && d.getMonth() < 10) {
    date.textContent = `0${d.getDate()} : 0${d.getMonth() + 1} : ${d.getFullYear()}`
};
let setTime1 = setInterval(() => {
    let d = new Date();
    let hh = d.getHours();
    let mm = d.getMinutes();
    let ss = d.getSeconds();
    if (hh < 10) hh = '0' + hh;
    if (mm < 10) mm = '0' + mm;
    if (ss < 10) ss = '0' + ss;
    time.textContent = `${hh}:${mm}:${ss}`;
});
// ---------------------------------------------------------------------------------------------
let stSec;
let ss = 0;
let mm = 0;
let hh = 0;
let seconds = document.querySelector('.seconds');
function startSec() {
    stSec = setInterval(() => {
        ss += 1;
        if (ss % 60 == 0) { mm += 1; ss = ss % 60 };
        if (mm >= 60 && mm % 60 == 0) { hh += 1; mm = mm % 60 };
        if (hh >= 24 && hh % 24 == 0) { hh = hh % 24 };

        if (hh < 10 && mm < 10 && ss < 10) { seconds.textContent = `0${hh}:0${mm}:0${ss}` }
        else if (hh < 10 && mm < 10 && ss >= 10) { seconds.textContent = `0${hh}:0${mm}:${ss}` }
        else if (hh < 10 && mm >= 10 && ss >= 10) { seconds.textContent = `0${hh}:${mm}:${ss}` }
        else if (hh < 10 && mm >= 10 && ss < 10) { seconds.textContent = `0${hh}:${mm}:0${ss}` }
        else { seconds.textContent = `${hh}:${mm}:${ss}` }

    }, 1000);

    document.querySelector('.start').disabled = true;
    document.querySelector('.loop').disabled = true;
    document.querySelector('.stop').disabled = false;
    document.querySelector('.reset').disabled = true;
    document.querySelector('.start').style.outline = '2px solid rgb(143, 165, 206)';
    document.querySelector('.stop').style.outline = 'none';
    document.querySelector('.loop').style.outline = 'none';

}
// ---------------------------------------------------------------------------------------------
// це функція, яка завжди запускає секундомір з нуля, я спочатку зробила цю, 
// так старалась, що потім шкода було видаляти
// секундомір має після ресету запускатись з нуля,а вона зануляє при старті
// зато вона рахує ще мілісекунди, тому я її не видаляла)

// function startSec() {
//     let firstTime = new Date().getTime();
//         stSec = setInterval(() => {
//         let currentTime = new Date().getTime();
//         let t = currentTime - firstTime;
//         let mls = t % 1000;
//         let ss = (t - mls) / 1000;
//         let nss = ss % 60;
//         let mm = (parseInt(ss / 60)) % 60;
//         let hh = (parseInt(ss / 3600)) % 60;
//         if (hh < 10) hh = '0' + hh;
//         if (mm < 10) mm = '0' + mm;
//         if (nss < 10) nss = '0' + nss;
//         if (mls < 10) { mls = '00' + mls; }
//         else if (mls > 10 && mls < 100) { mls = '0' + mls; }
//         let seconds = document.querySelector('.seconds');
//         seconds.textContent = `${hh}:${mm}:${nss}:${mls}`;

//     });
// document.querySelector('.start').disabled = true;
// document.querySelector('.loop').disabled = true;
// document.querySelector('.stop').disabled = false;
// document.querySelector('.reset').disabled = true;
// }
// -------------------------------------------------------------------------------------------
function stopSec() {
    clearInterval(stSec);
    document.querySelector('.start').disabled = false;
    document.querySelector('.loop').disabled = false;
    document.querySelector('.stop').disabled = true;
    document.querySelector('.reset').disabled = false;
    document.querySelector('.stop').style.outline = '2px solid rgb(143, 165, 206)';
    document.querySelector('.start').style.outline = 'none';
    document.querySelector('.loop').style.outline = 'none';

}
// -------------------------------------------------------------------------------------------
function loopMessage() {
    let h4 = document.createElement('h4');
    h4.textContent = seconds.textContent;
    document.querySelector('.showSec').appendChild(h4);
    document.querySelector('.start').disabled = false;
    document.querySelector('.loop').disabled = true;
    document.querySelector('.stop').disabled = true;
    document.querySelector('.reset').disabled = false;
    document.querySelector('.loop').style.outline = '2px solid rgb(143, 165, 206)';
    document.querySelector('.stop').style.outline = 'none';
    document.querySelector('.start').style.outline = 'none';
}
function resetSec() {
    seconds.textContent = '00:00:00';
    document.querySelector('.showSec').textContent = '';
    document.querySelector('.start').disabled = false;
    document.querySelector('.loop').disabled = true;
    document.querySelector('.stop').disabled = true;
    document.querySelector('.reset').disabled = true;
    document.querySelector('.start').style.outline = 'none';
    document.querySelector('.stop').style.outline = 'none';
    document.querySelector('.loop').style.outline = 'none';
    document.querySelector('.reset').style.outline = '2px solid rgb(143, 165, 206)';
    ss = 0;
    mm = 0;
    hh = 0;
}
window.onclick = function () {
    if (event.target != document.querySelector('.reset')) {
        document.querySelector('.reset').style.outline = 'none';
    }
    if (event.target != document.querySelector('.loop')) {
        document.querySelector('.loop').style.outline = 'none';
    }
    if (event.target != document.querySelector('.reset2')) {
        document.querySelector('.reset2').style.outline = 'none';
    }
}
// -------------------------------------------------------------------------------------------
let seconds1 = document.querySelector('.seconds1');
let nmmm = +seconds1.textContent;
let nsss = 0;
let sss = 0;
function increase() {
    let z;
    z = +seconds1.textContent;
    z += 1;
    seconds1.textContent = z;
    nmmm = +seconds1.textContent;
}
function decrease() {
    let h;
    h = +seconds1.textContent;
    h > 0 ? h -= 1 : h = 0;
    seconds1.textContent = h;
    nmmm = +seconds1.textContent;
}
// -------------------------------------------------------------------------------------------
let seconds2 = document.querySelector('.seconds2');
let decrTime;
let mmm;
function startDecreaseTime() {
    mmm = nmmm;
    decrTime = setInterval(() => {
        if (mmm < 0) {
            reset2();
            clearInterval(decrTime);
            document.querySelector('.reset2').style.outline = 'none'
            document.querySelector('.start2').style.outline = 'none'
        }
        else {
            if (sss < 10 && mmm >= 10) { seconds2.textContent = `${mmm}:0${sss}` }
            if (sss < 10 && mmm < 10) { seconds2.textContent = `0${mmm}:0${sss}` }
            if (sss >= 10 && mmm >= 10) { seconds2.textContent = `${mmm}:${sss}` }
            if (sss >= 10 && mmm < 10) { seconds2.textContent = `0${mmm}:${sss}` }
            if (sss == 0) { mmm = mmm - 1; nsss = 0 };
            nsss++;
            sss = 60 - nsss;
            nmmm = mmm;
        }
    }, 1000);
    document.querySelector('.start2').disabled = true;
    document.querySelector('.stop2').disabled = false;
    document.querySelector('.reset2').disabled = true;
    document.querySelector('.plus').disabled = true;
    document.querySelector('.minus').disabled = true;
    document.querySelector('.start2').style.outline = '2px solid rgb(143, 165, 206)';
    document.querySelector('.stop2').style.outline = 'none';
}
function stopDecrTime() {
    clearInterval(decrTime);
    document.querySelector('.start2').disabled = false;
    document.querySelector('.stop2').disabled = true;
    document.querySelector('.reset2').disabled = false;
    document.querySelector('.stop2').style.outline = '2px solid rgb(143, 165, 206)';
    document.querySelector('.start2').style.outline = 'none';
}
function reset2() {
    seconds2.textContent = `00:00`;
    document.querySelector('.start2').disabled = false;
    document.querySelector('.stop2').disabled = true;
    document.querySelector('.reset2').disabled = true;
    document.querySelector('.plus').disabled = false;
    document.querySelector('.minus').disabled = false;
    document.querySelector('.reset2').style.outline = '2px solid rgb(143, 165, 206)';
    document.querySelector('.stop2').style.outline = 'none';
    nmmm = + seconds1.textContent;
    nsss = 0;
    sss = 0;
}
