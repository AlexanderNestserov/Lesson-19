const form = () => {
   const formName1 = document.getElementById('form1-name');
   const formEmail1 = document.getElementById('form1-email');
   const formPhone1 = document.getElementById('form1-phone');
   const form1 = document.getElementById('form1');

   const formName2 = document.getElementById('form2-name');
   const formEmail2 = document.getElementById('form2-email');
   const formPhone2 = document.getElementById('form2-phone');
   const form2 = document.getElementById('form2');

   const formName3 = document.getElementById('form3-name');
   const formEmail3 = document.getElementById('form3-email');
   const formPhone3 = document.getElementById('form3-phone');
   const form3 = document.getElementById('form3');

   form1.addEventListener('submit', (e) => {
      e.preventDefault();
      let isError = false;
      if (!/([^\s\-\а-яА-Я])+/g.test(formName1.value) && formName1.value !== "") {
         alert('Кириллица');
      } else {
         isError = true;
      }
      if (/[\-\_\!\.\~\*\'\w]+@([\w]+\.)+[\w]+/gi.test(formEmail1.value) && formEmail1.value !== "") {
         alert('Email');
      } else {
         isError = true;
      }
      if (!/[^\(\)\-\d]+/g.test(formPhone1.value) && formPhone1.value !== "") {
         alert('Тел');
      } else {
         isError = true;
      }
      if (!isError) {
         alert('Данные отправлены');
      }
   });

   form2.addEventListener('submit', (e) => {
      e.preventDefault();
      let isError = false;
      if (!/([^\s\-\а-яА-Я])+/g.test(formName2.value) && formName2.value !== "") {
         alert('Кириллица');
      } else {
         isError = true;
      }
      if (/[\-\_\!\.\~\*\'\w]+@([\w]+\.)+[\w]+/gi.test(formEmail2.value) && formEmail2.value !== "") {
         alert('Email');
      } else {
         isError = true;
      }
      if (!/[^\(\)\-\d]+/g.test(formPhone2.value) && formPhone2.value !== "") {
         alert('Тел');
      } else {
         isError = true;
      }
      if (!isError) {
         alert('Данные отправлены');
      }
   });

   form3.addEventListener('submit', (e) => {
      e.preventDefault();
      let isError = false;
      if (!/([^\s\-\а-яА-Я])+/g.test(formName3.value) && formName3.value !== "") {
         alert('Кириллица');
      } else {
         isError = true;
      }
      if (/[\-\_\!\.\~\*\'\w]+@([\w]+\.)+[\w]+/gi.test(formEmail3.value) && formEmail3.value !== "") {
         alert('Email');
      } else {
         isError = true;
      }
      if (!/[^\(\)\-\d]+/g.test(formPhone3.value) && formPhone3.value !== "") {
         alert('Тел');
      } else {
         isError = true;
      }
      if (!isError) {
         alert('Данные отправлены');
      }
   });
};

export default form;