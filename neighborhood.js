const randomRestaurant = document.querySelector('#random-restaurant');
const restaurantSiteArr = [
  'https://generalschinesebbq.menufy.com/',
  'https://blazinsteaksmaui.com/',
  'http://guavatreemaui.com/',
  'https://locations.pizzahut.com/hi/wailuku/790-eha-street?utm_medium=organic&utm_source=local&utm_campaign=googlelistings&utm_content=website&utm_term=311052',
  'https://www.instagram.com/p/B_u5Uj7jB-b/?hl=en',
];

randomRestaurant.addEventListener('click', () => {
  let random = Math.floor(Math.random() * restaurantSiteArr.length);
  window.open(restaurantSiteArr[random]);
});
