
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
  };
  
  const pokeContainer = document.getElementById('poke-container');
  
  async function getPokemons() {
	try {
	  const URL = 'https://pokeapi.co/api/v2/pokemon/';
	  for (let i = 1; i <= 50; i++) {
		const response = await fetch(URL + i);
		const pokemon = await response.json();
		createCard(pokemon);
	  }
	} catch (error) {
	  console.log(error);
	}
  }
  
  function createCard(pokemon) {
	const pokeTypes = pokemon.types.map(type => type.type.name);
	const type = pokeTypes[0];
	const color = colors[type];
  
	const containerPokemon = document.createElement('div');
	containerPokemon.classList.add('pokemon');
	containerPokemon.style.backgroundColor = color;
  
	const containerImg = document.createElement('div');
	containerImg.classList.add('img-container');
  
	const img = document.createElement('img');
	img.src = pokemon.sprites.front_default;
	img.classList.add('img-container');
  
	const info = document.createElement('div');
	info.classList.add('info');
  
	const order = document.createElement('p');
	order.classList.add('number');
	order.textContent = `# ${pokemon.id.toString().padStart(3, '0')}`;
  
	const nameText = document.createElement('p');
	nameText.classList.add('name');
	nameText.textContent = pokemon.name;
  
	const pokeType = document.createElement('p');
	pokeType.textContent = `Type: ${type}`;
  
	containerImg.appendChild(img);
	info.appendChild(order);
	info.appendChild(nameText);
	info.appendChild(pokeType);
  
	containerPokemon.appendChild(containerImg);
	containerPokemon.appendChild(info);
  
	pokeContainer.appendChild(containerPokemon);
  }
  
  getPokemons();
  
