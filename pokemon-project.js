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
    img.className = 'img-locating'
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
    let statsContainer = document.createElement('div');
    statsContainer.id = ('stats-containner');
    let statsTitle = document.createElement('div');
    statsTitle.innerHTML='stats';
    let statsListContainer = document.createElement('div');
    statsListContainer.id='stats-list-container';
    statsTitle.id = ('stats-title');
    let stats = document.createElement('div');
    stats.id = ('stats');
    let statsList = document.createElement('div');
    statsList.id = ('stats-list');
    descriptionTitle.innerHTML=`Description`;
    let pokemonType=document.createElement('div');
    pokemonType.id='pokemon-type';
    // pokemonType.innerHTML='pokemon-type';

    // pokemonType.appendChild(data[x].type);
    

    // let pokemonType=[]
    let pokemonTypes = document.createElement('div');
    pokemonTypes = child.type;
    pokemonTypes.id = ('pokemon-all-types')
    console.log(pokemonTypes);
    for (let i=0;i<child.type.length;i++){
        pokemonType[i] =  document.createElement('div');
        pokemonType[i].id =(`pokemon-type`);
        pokemonType[i].append(child.type[i]);
        pokemonAllTypes.appendChild(pokemonType[i])
    }

    statsContainer.appendChild(statsTitle);
    
        console.log(statsList);
    
    let leftStatDiv = document.createElement('div');
    leftStatDiv.id = ('left-stats-containner');
    let centerStatDiv = document.createElement('div');
    centerStatDiv.id = ('center-stats-containner');
    let rightStatDiv = document.createElement('div');
    rightStatDiv.id = ('right-stats-containner');
    descriptionContent.innerHTML = child.description;

    let baseArray = (Object.values(data[x].base));
    console.log(baseArray);

    let leftStatDiv1 = document.createElement('div');
    let leftStatDiv2 = document.createElement('div');
    let leftStatDiv3 = document.createElement('div');

    leftStatDiv.appendChild(leftStatDiv1);
    leftStatDiv.appendChild(leftStatDiv2);
    leftStatDiv.appendChild(leftStatDiv3);

    leftStatDiv1.innerHTML = `HP:${data[x].base.HP}`
    leftStatDiv2.innerHTML = `Attack:${data[x].base.Attack}`
    leftStatDiv3.innerHTML = `Defense:${data[x].base.Defense}`

    let centerStatDiv1 = document.createElement('div');
    let centerStatDiv2 = document.createElement('div');
    let centerStatDiv3 = document.createElement('div');

    centerStatDiv.appendChild(centerStatDiv1);
    centerStatDiv.appendChild(centerStatDiv2);
    centerStatDiv.appendChild(centerStatDiv3);

    centerStatDiv1.innerHTML = `Attack:${baseArray[3]}`
    centerStatDiv2.innerHTML = `Defense:${baseArray[4]}`
    centerStatDiv3.innerHTML = `Speed:${baseArray[5]}`

    let rightStatDiv1 = document.createElement('div');
    rightStatDiv.appendChild(rightStatDiv1);
    let total=0;
    for (let j=0;j<baseArray.length;j++){
    total+= baseArray[j]
    }
    // leftStatDiv1.innerHTML = `total:${total}`

    statsListContainer.appendChild(leftStatDiv);
    statsListContainer.appendChild(centerStatDiv);
    statsListContainer.appendChild(rightStatDiv);
    
    

    // centerStatDiv.innerHTML = `Sp. Attack:${data[x].base.Sp. Attack}`
    // centerStatDiv.innerHTML = `Sp. Defense:${data[x].base.Sp. Defense}`
    // centerStatDiv.innerHTML = `Speed:${data[x].base.Defense}`

    rightStatDiv.innerHTML = `total:${total}`
    
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
        img.className = 'img-locating'
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
    rightSide.appendChild(statsContainer);
    statsContainer.appendChild(statsListContainer);
    statsListContainer.appendChild(statsList);
    descriptionContainer.appendChild(descriptionTitle);
    descriptionContainer.appendChild(descriptionContent);


    
    
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

