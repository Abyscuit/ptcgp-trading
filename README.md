### An open-source API to search for through the Pokemon TCG Pocket cards by ID, Name, Type, Rarity or Pack.

## Getting Started

First, install the packages:

```bash
npm install
```

Then build the project:

```bash
npm run build
```

Then start the server:

```bash
npm start
```

To fetch the latest card data:
```bash
npm run fetch-data
```

To run the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage
You can navigate to [http://localhost:3000/api](http://localhost:3000/api) to use the API.
### Endpoints
* Get all card data: `/all-cards`
* Get cards by id: `/id/[...ids]`
* Get cards by name: `/name/[name]`
* Get cards by pack: `/pack/[pack]`
* Get cards by rarity: `/rarity/[...rarity]`
* Get cards by type: `/type/[...types]`
### Examples
* Get Grass and Fire Types: `/api/type/grass/fire`
* Get Bulbasaur and Venusaur by ID: `/api/id/a1-001/a1-003`
* Get Cards in Mewtwo Pack: `/api/pack/mewtwo`
* Get Charizard Cards by Name: `/api/name/charizard`
* Get Rare and EX Cards: `/api/rarity/rare/ex`
