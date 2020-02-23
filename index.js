function cardCreator(team) {
  const mainCardDiv = document.createElement('div');
  mainCardDiv.classList.add('mainCardContain');

  const singleCard = document.createElement('div');
  singleCard.classList.add('singleCard');
  singleCard.textContent = team;

  mainCardDiv.appendChild(singleCard);

  return mainCardDiv;
} 

let pageContainer = document.querySelector('.page-container');

axios
  .get('https://statsapi.web.nhl.com/api/v1/teams')
  .then(response => {
    let teams = response.data.teams;
    teams.forEach(item => {
      let card = cardCreator(item.name);
      console.log(teams);
      pageContainer.appendChild(card);
    })
  })