const content = document.querySelector('.main-board');

const displayScore = `
<div id="display-score">
<div id="score-board">
    <div id="reset-sec">
        <h3>Recent scores </h3>
        <button id="refresh-score-btn">Refresh</button>
    </div>
    <ul>
        <li>Name: 10</li>
        <li>Name: 100</li>
        <li>Name: 50</li>
        <li>Name: 25</li>
        <li>Name: 50</li>
        <li>Name: 25</li>
    </ul>
</div>
</div>
`;

const setScore = `
<div id="set-score">
<form id="form-id">
    <h3>Add your score</h3>
    <input type="text" placeholder="Your name" id="name-field">
    <input type="text" placeholder="Your score" id="score-field">
    <button type="submit" value="Submit" id="submit-score-btn">Submit</button>
</form>
</div>
`;



const renderHome = () => {
  content.insertAdjacentHTML('beforeend', displayScore);
  content.insertAdjacentHTML('beforeend', setScore);
};

export default renderHome;
