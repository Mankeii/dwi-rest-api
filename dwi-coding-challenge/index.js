const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});

fetch('https://www.wsjwine.com/api/offer/0033008')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });