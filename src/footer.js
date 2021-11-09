const body = document.querySelector('body');

const footer = `
<footer><p>© 2021 Leaderboard</p></footer>
`;

const renderFooter = () => {
  body.insertAdjacentHTML('beforeend', footer);
};

export default renderFooter;