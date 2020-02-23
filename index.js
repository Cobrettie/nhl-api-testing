function cardCreator() {
  const mainCardDiv = document.createElement('div');
  mainCardDiv.classList.add('mainCardContain');

  return mainCardDiv;
} 

let pageContainer = document.querySelector('.page-container');

// axios
//   .get('https://statsapi.web.nhl.com/api/v1/teams')
//   .then(response => {
//     console.log(response.data.teams);
//   })