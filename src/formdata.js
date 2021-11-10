import renderHome from './home.js';

renderHome();
const form = document.querySelector('#form-id');

function getForm(e) {
  e.preventDefault();
  const name = document.querySelector('#name-field');
  const score = document.querySelector('#score-field');

  //fetch to POST the data:
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TAndiRIq5l6QgrYO74Z7/scores', {
      method: 'POST',
      body: JSON.stringify({
          user: name.value,
          score: score.value,
      }),
      headers: {
          "Content-Type": "application/json; charset=UTF-8"
      }
  }).then(function (res) {
      return res.json();
  }).then(function (data) {
      console.log(data)
  })
}

form.addEventListener('submit', getForm);

export default getForm;


//to create new score for the game:
//POST : https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TAndiRIq5l6QgrYO74Z7/scores
//GET : https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TAndiRIq5l6QgrYO74Z7/scores

