var events = [
   {'Date': new Date(2021, 06, 05), 'Title': 'Скоро в школу'},
  {'Date': new Date(2021, 06, 21), 'Title': '12-30 Новости'},
  {'Date': new Date(2021, 07, 06), 'Title': 'Пробная версия<br> сайта'},
];
var settings = {};
var element = document.getElementById('caleandar');
caleandar(element, events, settings);
