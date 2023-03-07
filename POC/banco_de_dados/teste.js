import global from "../ferramentas/global.js"

class MyClass {
  api() {
    fetch("https://v3.football.api-sports.io/leagues", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": global.CHAVE_API_FOOTBALL
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  }

}

export default MyClass