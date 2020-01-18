let clock = {
    hours: document.querySelector('#hours'),
    minutes: document.querySelector('#minutes'),
    seconds: document.querySelector('#seconds'),

    startTime: document.querySelector('#startTime'),
    stopTime: document.querySelector('#stopTime'),
    hideTime: document.querySelector('#hideTime'),
    showTime: document.querySelector('#showTime'),

    startStop: null,

    pushStart: function () {
        let currentThis = this;
        currentThis.startTime.addEventListener('click', function () {
            currentThis.startStop = setInterval(function () {
                let MyTime = new Date();
                currentThis.hours.innerHTML = MyTime.getHours() + ':';
                currentThis.minutes.innerHTML = MyTime.getMinutes() + ':';
                currentThis.seconds.innerHTML = MyTime.getSeconds();
            }, 1000);
        })
    },

    pushStop: function () {
        let currentThis = this;
        currentThis.stopTime.addEventListener('click', function () {
            clearInterval(currentThis.startStop);
        })
    },

    pushHide: function () {
        let currentThis = this;
        currentThis.hideTime.addEventListener('click', function () {
            currentThis.hours.style.opacity = 0;
            currentThis.minutes.style.opacity = 0;
            currentThis.seconds.style.opacity = 0;
        })
    },

    pushShow: function () {
        let currentThis = this;
        currentThis.showTime.addEventListener('click', function () {
            currentThis.hours.style.opacity = 1;
            currentThis.minutes.style.opacity = 1;
            currentThis.seconds.style.opacity = 1;
        })
    }
}






