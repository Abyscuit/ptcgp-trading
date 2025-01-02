// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require('fs');

async function downloadData() {
  const url =
    'https://raw.githubusercontent.com/chase-manning/pokemon-tcg-pocket-cards/refs/heads/main/v2.json';

  console.log('Fetching data...');
  const data = await fetch(url).then(data => data.json());

  console.log('Saving data...');
  fs.writeFile('./src/data.json', JSON.stringify(data), err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Data saved successfully!');
  });
}

downloadData();
