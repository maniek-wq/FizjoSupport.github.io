 var marker = new L.marker([53.544790, 14.556480]);
   var map = L.map('map').setView([53.544790,14.556480],13);
  marker.addTo(map);
  
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const z = document.getElementsByClassName("mid");

