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

let cardsContainer = document.querySelector('.cardsContainer');

axios
  .get('https://statsapi.web.nhl.com/api/v1/teams')
  .then(response => {
    let teams = response.data.teams;
    console.log(response);
    teams.forEach(item => {
      let card = cardCreator(item.name, item.locationName, item.firstYearOfPlay);
      cardsContainer.appendChild(card);
    })
  })