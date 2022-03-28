function fetchPokemon() {
    const name_input = document.getElementById("poke_name");
    const img = document.getElementById("poke_img");
    
    const title = document.getElementById("poke_title");
    const poke_type = document.getElementById("poke_type");
    const height = document.getElementById("poke_height");
    const weight = document.getElementById("poke_weight");
    const moves = document.getElementById("poke_moves");
    
    let poke_name = name_input.value;
    poke_name = poke_name.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${poke_name}`;
    fetch(url).then((resp) => resp.json())
    .then(function(data) {
            //console.log(data);
            let poke_img = data.sprites.other.dream_world.front_default;
            img.src = poke_img;
      
            title.innerHTML = `${data.name.toUpperCase()}`;
            poke_type.innerHTML = `${data.types[0].type.name}`;
            height.innerHTML = `${data.height}`;
            weight.innerHTML = `${data.weight}`;
            moves.innerHTML = `${data.moves[0].move.name}`;
            
      /*
            poke_type.innerHTML = `${data.types.type.name}`;
            console.log(data.types[0].type.name);
            height.value = data.height;
            weight.value = data.weight;
            moves.value = data.moves.move.name;*/
    })
    .catch(function(error) {
      console.log("Hubo un error", error);
      name_input.value = "Pokemon no encontrado :(";
      img.src = "https://media.giphy.com/media/5hbbS4ZuQggsFE76Lx/giphy.gif";
      })
  }
  
  const btn = document.getElementById("poke_btn");
  btn.addEventListener("click", fetchPokemon);