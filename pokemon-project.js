import data from "./files/pokedex (1).json" assert{type: "json"};


function makeOnePokemon(i){
    let child = data[i];
    let span = document.createElement('span');
    span.innerHTML = '#00'+data[i].id;
    span.className = 'id-span';
    // span.id = data[i].id;
    //
    let img = document.createElement('img');
    img.src = data[i].image.thumbnail;
    //
    let Name = document.createElement('span');
    Name.className = 'pokemon-name';
    Name.innerHTML = data[i].name.english;
    //
    let onePokemonToList = document.createElement('li');
    onePokemonToList.className=('one-pokemon-to-list')
    onePokemonToList.appendChild(span);
    onePokemonToList.appendChild(img);
    onePokemonToList.appendChild(Name);
    onePokemonToList.id = `${child.id}`;
    onePokemonToList.addEventListener('click', modalByClick);

    //
    document.querySelector('ul').appendChild(onePokemonToList);
}


function load12Function(){
    let count = 0;
    for (let i=count;i<count+12;i++){
        makeOnePokemon(i)
    }
}
load12Function();

function makingModal(x){
//creating the divs for modal and give them id 
    //container
    let child = data[x]
    let modalContainer = document.createElement('div');
    modalContainer.id = ('modal-container');
    modalContainer.addEventListener('click',closeModal)
    let modalTarget = document.createElement('div');
    modalTarget.id = ('modal-target');
    let leftSide =  document.createElement('div');
    leftSide.id = ('left-side');
    let pokeModalType = document.createElement('div');
    pokeModalType.id = ('poke-modal-type');
    //right side
    let rightSide =  document.createElement('div');
    rightSide.id = ('right-side');
    let descriptionContainer = document.createElement('div');
    descriptionContainer.id = ('description-container');
    let descriptionTitle = document.createElement('div');
    descriptionTitle.id = ('description-title');
    let descriptionContent = document.createElement('div');
    descriptionContent.id = ('description-content');
    let stats = document.createElement('div');
    stats.id = ('stats');
    let statsList = document.createElement('div');
    statsList.id = ('stats-list');
    descriptionTitle.innerHTML=`description`;
    let pokemonType=[]
    let pokemonAllTypes=  document.createElement('div');
    pokemonAllTypes.id = ('pokemon-all-types')
    for (let i=0;i<child.type.length;i++){
        pokemonType[i] =  document.createElement('div');
        pokemonType[i].id =(`pokemon-type${i}`);
        pokemonType[i].append(child.type[i]);
        pokemonAllTypes.appendChild(pokemonType[i])
    }
    console.log(pokemonAllTypes);

   let pokemonStats={}
    let pokemonAllStats=  document.createElement('div');
    pokemonAllStats.id = ('pokemon-all-stats')
    for (let i=0;i<child.base.length;i++){
        pokemonType[i] =  document.createElement('div');
        pokemonType[i].id =(`pokemon-type${i}`);
        pokemonType[i].append(child.type[i]);
        pokemonAllTypes.appendChild(pokemonType[i])
    }
    descriptionContent.innerHTML = child.description;
    
    function makeOnePokemon(y){
        let child = data[y];
        let span = document.createElement('span');
        span.innerHTML = '#00'+data[y].id;
        span.className = 'id-span';
        // span.id = data[i].id;
        //
        let img = document.createElement('img');
        img.src = data[y].image.thumbnail;
        //
        let Name = document.createElement('span');
        Name.className = 'pokemon-name';
        Name.innerHTML = data[y].name.english;
        //
        let onePokemonToModal = document.createElement('div');
        onePokemonToModal.className=('one-pokemon-to-modal')
        onePokemonToModal.appendChild(span);
        onePokemonToModal.appendChild(img);
        onePokemonToModal.appendChild(Name);
        onePokemonToModal.id = `${child.id}`;
        onePokemonToModal.addEventListener('click', modalByClick);
        //
        leftSide.appendChild(onePokemonToModal);   
    }
    makeOnePokemon(x)
    modalContainer.appendChild(modalTarget);
    modalTarget.appendChild(leftSide);
    leftSide.appendChild(pokemonAllTypes);
    modalTarget.appendChild(rightSide);
    rightSide.appendChild(descriptionContainer);
    descriptionContainer.appendChild(descriptionTitle);
    descriptionContainer.appendChild(descriptionContent);
    rightSide.appendChild(statsList);


    
    
    let body = document.getElementById('body');
    body.appendChild(modalContainer);
}
  
    

//open modal by click
function modalByClick () {
    console.log(this.id);
    let childId = this.id;
    let x = childId-1;
     console.log(childId);
     makingModal(x);
     let modalChild = data[childId-1];
     console.log (modalChild);
     let modalContainer = document.getElementById('modal-container');
     modalContainer.style.display = 'block';
 }

 function closeModal(){
    console.log ("close modal click");
    let modalContainer = document.getElementById('modal-container');
    modalContainer.style.display = 'none';
 }

