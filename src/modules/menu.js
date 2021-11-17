const menu = () => {
   const menuBtn = document.querySelector('.menu');
   const menu = document.querySelector('menu');
   const active = document.querySelector('menu.active-menu');
   const closeBtn = menu.querySelector('.close-btn');
   const menuItems = menu.querySelectorAll('.link');


   //  const handleMenu = () => {
   //     menu.classList.toggle('active-menu');
   // };
   // menuBtn.addEventListener('click', handleMenu);
   //  closeBtn.addEventListener('click', handleMenu);

   //  menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu));
   menuBtn.addEventListener('click', (e) => {
      if (e.target.closest('.menu')) {
         menu.classList.toggle('active-menu');

      }
   });
   closeBtn.addEventListener('click', (e) => {
      if (e.target.closest('.close-btn')) {
         menu.classList.toggle('active-menu');
      }
   });
   menuItems.forEach(menuItem => menuItem.addEventListener('click', (e) => {
      if (e.target.closest('.link')) {
         menu.classList.toggle('active-menu');
      }
   }));
};
export default menu;