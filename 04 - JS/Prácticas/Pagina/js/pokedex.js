const promisePokemon = () =>{
    const pokeInput = document.getElementById("inputPokeName");
    let pokeName = pokeInput.value;
    if(pokeName != null){
        pokeName = pokeName.toLowerCase();
    }
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
    .then((response) => {
        if(!response.ok){
            changePhoto('../assets/img/sad-pikachu.gif');
            changeName('NO HAY NADA AQUI');
            console.log(response);
            throw new Error(`Error! status: ${response.status}`);
        }else{
            return response.json();
        }
    })
    .then((data) => {
        console.log(data);
            let pokeImg = data.sprites.front_default;
            let pokeNombre = data.name;
            let pokeType = data.types[0].type.name;
            let stats = data.stats;
            let hp = document.getElementById("PS");
            let atk = document.getElementById("ATK");
            let def = document.getElementById("DEF");
            let spatk = document.getElementById("SPATK");
            let spdef = document.getElementById("SPDEF");
            let speed = document.getElementById("SPEED");
            let pb1 = document.getElementById("pb1");
            let pb2 = document.getElementById("pb2");
            let pb3 = document.getElementById("pb3");
            let pb4 = document.getElementById("pb4");
            let pb5 = document.getElementById("pb5");
            let pb6 = document.getElementById("pb6");
            changePhoto(pokeImg);
            changeName(pokeNombre);
            changeType(pokeType);
            for(i=0;i<stats.length;i++){
                console.log(stats[i].stat.name);
                switch(stats[i].stat.name){
                    case "hp":
                        hp.innerHTML = `PS: ${stats[i].base_stat}`;
                        pb1.style.width = `${stats[i].base_stat}%`;
                        break;
                    case "attack":
                        atk.innerHTML = `ATK: ${stats[i].base_stat}`;
                        pb2.style.width = `${stats[i].base_stat}%`;
                        break;
                    case "defense":
                        def.innerHTML = `DEF: ${stats[i].base_stat}`;
                        pb3.style.width = `${stats[i].base_stat}%`;
                        break;            
                    case "special-attack":
                        spatk.innerHTML = `SP. ATK: ${stats[i].base_stat}`;
                        pb4.style.width = `${stats[i].base_stat}%`;
                        break;   
                    case "special-defense":
                        spdef.innerHTML = `SP. DEF: ${stats[i].base_stat}`;
                        pb5.style.width = `${stats[i].base_stat}%`;
                        break;
                    case "speed":
                        speed.innerHTML = `SPEED: ${stats[i].base_stat}`;
                        pb6.style.width = `${stats[i].base_stat}%`;
                        break;
                    default:
                        console.log("OK");
                        break;
                }
            }

    }).catch(function(error){
        changePhoto('assets/img/sad-pikachu.gif');
        changeName('NO HAY NADA AQUI');
        console.log(error);
    });
}

changePhoto = (pokeImg) =>{
    let img = document.getElementById("pokeImg");
    img.src = pokeImg;
}

changeName = (pokeNombre) =>{
    let name = document.getElementById("pokeName");
    name.innerHTML = pokeNombre;
}

changeType = (pokeType) =>{
    let tipo = document.getElementById("tipo-pokemon");
    pokeType = pokeType.toUpperCase();
    tipo.innerHTML = `TIPO: ${pokeType}`;
}


