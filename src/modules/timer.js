
const timer = (deadline) => {

   const getPartRemaining = () => {

      let hoursNow = new Date().getHours();

      if (7 < hoursNow && hoursNow <= 12) {
         document.body.appendChild(document.createElement('div'));
         let a = document.getElementsByTagName('div')[0];
         a.innerText = "Доброе утро";
      }
      else if (12 < hoursNow && hoursNow <= 17) {
         document.body.appendChild(document.createElement('div'));
         let a = document.getElementsByTagName('div')[0];
         a.innerText = "Добрый день";
      }
      else if (17 < hoursNow && hoursNow <= 23) {
         document.body.appendChild(document.createElement('div'));
         let a = document.getElementsByTagName('div')[0];
         a.innerText = "Добрый вечер";
      }
      else if (0 <= hoursNow && hoursNow <= 7) {
         document.body.appendChild(document.createElement('div'));
         let a = document.getElementsByTagName('div')[0];
         a.innerText = "Доброй ночи";
      }
   };

   const getDayRemaining = () => {
      const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', ' Пятница', 'Суббота'];
      let dayNow = new Date().getDay();
      let day = week[dayNow];
      document.body.appendChild(document.createElement('div'));
      let b = document.getElementsByTagName('div')[1];
      b.innerText = "Сегодня:" + ' ' + day;
   };

   const getTimeRemaining = () => {
      let hoursNow = new Date().getHours();
      let minutesNow = new Date().getMinutes();
      let secondsNow = new Date().getSeconds();
      let ampm = hoursNow >= 12 ? 'pm' : 'am';
      hoursNow = hoursNow % 12;
      hoursNow = hoursNow ? hoursNow : 12;
      hoursNow = hoursNow < 10 ? '0' + hoursNow : hoursNow;
      minutesNow = minutesNow < 10 ? '0' + minutesNow : minutesNow;
      secondsNow = secondsNow < 10 ? '0' + secondsNow : secondsNow;
      let strTime = hoursNow + ':' + minutesNow + ':' + secondsNow + ' ' + ampm;
      document.body.appendChild(document.createElement('div'));
      let c = document.getElementsByTagName('div')[2];
      c.innerText = "Текущее время:" + ' ' + strTime;
   };

   const getYearRemaining = () => {
      let dateStop = new Date(deadline).getTime();
      let dateNow = new Date().getTime();
      let timeRemainingDay = Math.floor((dateStop - dateNow) / 1000 / 86400);
      document.body.appendChild(document.createElement('div'));
      let d = document.getElementsByTagName('div')[3];
      d.innerText = "До Нового Года осталось:" + ' ' + timeRemainingDay + 'дней';
   };

   const updateClock = () => {
      getPartRemaining();
      getDayRemaining();
      getTimeRemaining();
      getYearRemaining();
      setInterval(updateClock, 1000);

   };
   updateClock();
};

export default timer;