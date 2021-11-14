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
      if (count < 100 && screen.availWidth >= 768) {
         popupContent.style.top = count + 'px';
      } else {
         cancelAnimationFrame(idInterval);
      }
   };

   popupBtn.forEach(btn => btn.addEventListener('click', () => {
      idInterval = requestAnimationFrame(animate);
      modal.style.display = "block";
      count = 0;
   }));
   popupClose.addEventListener('click', () => {
      modal.style.display = "none";
   });
};
export default modal;