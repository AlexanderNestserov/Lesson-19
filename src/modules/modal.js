const modal = () => {
   const popupBtn = document.querySelectorAll('.popup-btn');
   const modal = document.querySelector('.popup');
   const popupClose = modal.querySelector('.popup-close');
   const popupContent = document.querySelector('.popup-content');
   let count = 0;
   let idInterval;

   const animate = () => {
      count++;
      idInterval = requestAnimationFrame(animate);
      if (count < 100) {
         popupContent.style.top = count * 10 + 'px';
      } else {
         cancelAnimationFrame(idInterval);
      }
   };


   popupBtn.forEach(btn => btn.addEventListener('click', () => {
      modal.style.display = "block";
      idInterval = requestAnimationFrame(animate);
   }));
   popupClose.addEventListener('click', () => {
      modal.style.display = "none";

   });
};
export default modal;