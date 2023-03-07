import http from 'http'
import fs from 'fs'

const options = {
  hostname: 'api.football-data.org',
  path: '/v4/matches',
  method: 'GET',
  headers: {
    'X-Auth-Token': '8716696ce7344f0781d365d62be2b994'
  }
};

const req = http.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const json = JSON.stringify(JSON.parse(data), null, 2);
    fs.writeFile('teste1.json', json, 'utf-8', (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log('Arquivo pessoa.json salvo com sucesso: ');
        }
    })
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();