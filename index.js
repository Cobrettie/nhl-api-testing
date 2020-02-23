// test if i can even access api
axios
  .get('https://statsapi.web.nhl.com/api/v1/teams')
  .then(response => {
    console.log(response);
  })

  let test = function() {console.log('hey')};

  test();