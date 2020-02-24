function cardCreator(team, location, firstYear) {
  const singleCardContainer = document.createElement('div');
  singleCardContainer.classList.add('singleCardContain');

  const singleCard = document.createElement('div');
  singleCard.classList.add('singleCard');
  singleCard.textContent = `Team: ${team}`;

  const firstYearOfPlay = document.createElement('p');
  firstYearOfPlay.textContent = `First Year of Play: ${firstYear}`;

  const teamLocation = document.createElement('p');
  teamLocation.textContent = `Team Location: ${location}`

  // append children
  singleCard.appendChild(teamLocation);
  singleCard.appendChild(firstYearOfPlay);
  singleCardContainer.appendChild(singleCard);

  return singleCardContainer;
} 

const cardsContainer = document.querySelector('.cardsContainer');
const pageContainer = document.querySelector('.page-container');

axios
  .get('https://statsapi.web.nhl.com/api/v1/teams')
  .then(response => {
    let teams = response.data.teams;
    teams.forEach(item => {
      let card = cardCreator(item.name, item.locationName, item.firstYearOfPlay);
      cardsContainer.appendChild(card);
    })
    return axios.get('https://statsapi.web.nhl.com/api/v1/teams')
  })
  .then(response => {
    const nhlCopyright = document.createElement('p');
    nhlCopyright.textContent = `Official Copyright: ${response.data.copyright}`;
    pageContainer.appendChild(nhlCopyright);
  })
// nhlCopyright.textContent = `NHL Copyright: ${}`;