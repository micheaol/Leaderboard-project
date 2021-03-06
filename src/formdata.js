import 'core-js/stable';
import 'regenerator-runtime/runtime';
import renderHome from './home.js';

renderHome();
const form = document.querySelector('#form-id');
const refresh = document.querySelector('#refresh-score-btn');
const table = document.querySelector('table');

const getForm = async (e) => {
  e.preventDefault();
  const name = document.querySelector('#name-field');
  const score = document.querySelector('#score-field');

  const res = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TAndiRIq5l6QgrYO74Z7/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: name.value,
        score: score.value,
      }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    },
  );
  const data = await res.json();
  const message = document.querySelector('#message');
  message.innerHTML = data.result;
  message.style.backgroundColor = 'green';

  name.value = '';
  score.value = '';
};
const fetchUser = async () => {
  const user = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/TAndiRIq5l6QgrYO74Z7/scores',
  );

  const data = await user.json();
  const newData = data.result;

  table.innerHTML = '';

  newData.forEach((userData) => {
    const tr = document.createElement('tr');
    const tdUser = document.createElement('td');
    tdUser.innerHTML = userData.user;
    const tdScore = document.createElement('td');
    tdScore.innerHTML = userData.score;

    tr.appendChild(tdUser);
    tr.appendChild(tdScore);

    table.appendChild(tr);
  });
};

refresh.addEventListener('click', fetchUser);
form.addEventListener('submit', getForm);

export default getForm;
