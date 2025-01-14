let songsData = [
    {
        id:"1",
        name:"LacoreDiamond - For You",
        artist:"LacoreDiamond",
        image:"pexels-steve-1266808.jpg",
        genre:"Pop",
        source:"lacore-diamond-for-you.mp3"
    },
    {
        id:"2",
        name:"Closer",
        artist:"Aj Super",
        image:"pexels-ahmedadly-1270184.jpg",
        genre:"Hip Hop",
        source:"closure.mp3"
    },
    {
        id:"3",
        name:"The spiral of passion",
        artist:"NowoArt",
        image:"pexels-simon73-1183099.jpg",
        genre:"Rock",
        source:"the-spiral-of-passion-272419.mp3"
    },
    {
        id:"4",
        name:"Modern RnB - Last Dance",
        artist:"AntipodeanWriter",
        image:"pexels-vladalex94-1402787.jpg",
        genre:"Pop",
        source:"modern-rnb-last-dance-15758.mp3"
    },
];

// Add a new Song :
let songName = "PinkTeam";
let artist ="LorVay";
let image = "pexels-apasaric-1820770.jpg";
let genre = "Rock";
let source = "happy-birthday-hooray-217886.mp3";




// Global Variables :
let currentselectedPlaylist;

//function for Toggle Switch :
function toggle(){
    let bodyTag = document.querySelector("body");

    let subDivs = document.querySelectorAll(".mainsub");

    let savedSongsDiv = document.querySelector(".savedSongs");

    let selectFirstDiv = document.querySelector(".firstDiv select");

    let labelFirstDiv = document.querySelector(".firstDiv label");

    let playListInput = document.querySelector(".playListInput input");

    let currentPlaylistDiv = document.querySelector(".currentPlaylistDiv h2");

    let allPlaylistDiv = document.querySelector(".allPlaylistDiv h2");

    let h1Div = document.querySelector(".h1Div h1");

    let firstDiv = document.querySelector(".firstDiv");

    let thirdDivs = document.querySelector(".thirdDivs");

    let secondDivs = document.querySelector(".secondDivs");

    let ToggleDiv = document.querySelector(".ToggleDiv label");


    let inputOfToggle = document.querySelector(".ToggleDiv input");
    inputOfToggle.addEventListener("change",function(){
        if(inputOfToggle.checked){

            ToggleDiv.style.backgroundColor = "white"



            bodyTag.style.backgroundImage = "url(pexels-minan1398-813269.jpg)";
            bodyTag.style.backgroundSize = "contain";


            subDivs.forEach((currentDiv)=>{
                currentDiv.style.backgroundImage = "url(pexels-minan1398-813269.jpg)";
                currentDiv.style.backgroundSize = "contain";
                currentDiv.style.boxShadow = "0px 0px 1px white";
            })

            savedSongsDiv.style.backgroundImage = "url(pexels-minan1398-813269.jpg)";
            savedSongsDiv.style.backgroundSize = "contain";
            savedSongsDiv.style.boxShadow = "none";

            selectFirstDiv.style.backgroundColor = "black";
            selectFirstDiv.style.color = "white";

            labelFirstDiv.style.color = "white";

            playListInput.style.backgroundColor = "black";
            playListInput.style.color = "white";
            playListInput.style.border = "none";

            currentPlaylistDiv.style.color = "white";

            allPlaylistDiv.style.color = "white";

            h1Div.style.color = "white";
        }
        else{
            bodyTag.style.backgroundImage = "";

            firstDiv.style.boxShadow = "none";
            firstDiv.style.backgroundImage = "none";

            secondDivs.style.backgroundImage = "none";
            secondDivs.style.boxShadow = "-1px -1px 3px darkmagenta"

            thirdDivs.style.boxShadow = "none"
            thirdDivs.style.backgroundImage = ""


            savedSongsDiv.style.backgroundImage = "";
            savedSongsDiv.style.boxShadow = "-1px -1px 3px darkmagenta";

            selectFirstDiv.style.backgroundColor = " rgb(89, 124, 124)";
            selectFirstDiv.style.color = "";

            labelFirstDiv.style.color = "black";

            playListInput.style.backgroundColor = "white";
            playListInput.style.color = "";
            playListInput.style.border = "";

            currentPlaylistDiv.style.color = "black";

            allPlaylistDiv.style.color = "black";

            h1Div.style.color = "black";

            ToggleDiv.style.border = "1px solid black";
           
        }
    })
}
toggle();




// function for Adding songs Data
function showSongs(){

    // Adding the song from the Songs Data :

    let allsongsDiv = document.querySelector(".Allsongs")// Div containg All songs:

    let newData = addnewSongs()
    newData.forEach((currentSong)=>{
        let song = document.createElement("div");
        song.setAttribute("class","songs");
        song.setAttribute("data-genre",currentSong.genre);
        song.setAttribute("data-id",currentSong.id);
        song.textContent = `${currentSong.name} - ${currentSong.artist}`
        allsongsDiv.appendChild(song)
    })
    // end

    // Filtering the Songs :

    let songsArr = document.querySelectorAll(".songs");//Divs of Particular songs :

    let selectTag = document.querySelector("#songs");//Select Tag :

    selectTag.addEventListener("change",function(){
        songsArr.forEach((currentSong)=>{
            let genreSong = currentSong.dataset.genre;
            let selectValue = selectTag.value;
            if(genreSong === selectValue || selectValue === "All"){
                currentSong.style.display = "block";
            }
            else{
                currentSong.style.display = "none";
            }
        })
    })
    // end
    
}
showSongs()



// Function for Shuffing songs :
function renderCurrentSong(){

    let selectedSong = document.querySelectorAll(".songs");//All songs Div 

    let imgTag = document.querySelector(".songCard img")//SongImage Tag
    
    let h2Tag = document.querySelector(".songCard .songName");//SongName Tag
    
    let pTag = document.querySelector(".songCard .songArtist");//SongArtist Tag

    let audioTag = document.querySelector(".audioTap audio");//audio Tag
    
    //songCard Shuffling
    selectedSong.forEach((currentSong)=>{
        currentSong.addEventListener("click",function(){
            let idSong = currentSong.dataset.id;
            h2Tag.dataset.id = idSong;
            let newData = addnewSongs()
            for(let i of newData){
                if(idSong === i.id){
                    h2Tag.textContent = i.name;
                    pTag.textContent = i.artist;
                    imgTag.setAttribute("src",i.image);
                    audioTag.setAttribute('src',i.source);
                }
            }
        })
    })

    // forward and backward buttons :
    let forbtns = document.querySelector(".forbtn");//forward Button

    let backbtns = document.querySelector(".backbtn");//backward button

    // forward Button Event listener :
    let newData = addnewSongs();
    forbtns.addEventListener("click",function(){
        let currentSongId = h2Tag.dataset.id;
        newData.forEach((currentSong)=>{
            let forwardedSong = (currentSongId == songsData.length)? String(songsData.length):String(Number(currentSongId) + 1);
            if(forwardedSong === currentSong.id){
                h2Tag.textContent = currentSong.name;
                    pTag.textContent = currentSong.artist;
                    imgTag.setAttribute("src",currentSong.image);
                    audioTag.setAttribute('src',currentSong.source);
                    h2Tag.dataset.id = forwardedSong;
            }
        })
        
    })

    // Backbutton Event listener :
    backbtns.addEventListener("click",function(){
        let currentSongId = h2Tag.dataset.id;
        let newData = addnewSongs();
        newData.forEach((currentSong)=>{
            let backWardSong = (currentSongId == 1)? String(1):String(Number(currentSongId) - 1);
            if(backWardSong === currentSong.id){
                h2Tag.textContent = currentSong.name;
                    pTag.textContent = currentSong.artist;
                    imgTag.setAttribute("src",currentSong.image);
                    audioTag.setAttribute('src',currentSong.source);
                    h2Tag.dataset.id = backWardSong;
            }
        })
        
    })
}
renderCurrentSong();





// Function for Add to Playlist :
function addtoPlaylist(){


    let songToPlaylist = document.querySelector(".addtoPlay");
    let songcardName = document.querySelector(".songCard h2");
    let songcardArtist = document.querySelector(".songCard p");


// Add to playlist Event listner :
    songToPlaylist.addEventListener("click",function(){
        let booleanValue = true;
        let cardNameIT = songcardName.textContent;
        let cardArtistIT = songcardArtist.textContent;
        let subdivPara = currentselectedPlaylist.querySelector("p").textContent;
        let cardDetails = `${cardNameIT} - ${cardArtistIT}`;
        let songsDivs = currentselectedPlaylist.querySelectorAll("div");
        for(let i of songsDivs){
            if(i.textContent === cardDetails){
                booleanValue = false;
            }
        }
        if(booleanValue === true){
            let playlistnewDiv = document.createElement("div");
            playlistnewDiv.setAttribute("class",subdivPara);
            playlistnewDiv.textContent = cardDetails;
            currentselectedPlaylist.appendChild(playlistnewDiv);
            addingCardSongs(playlistnewDiv,currentselectedPlaylist);
        }

        booleanValue = true;
     });
}
addtoPlaylist();


// Function creating the Playlist :
function createPlaylist(){
    let createPlaylistBtn = document.querySelector(".createPlaylistbtn");//Create playlist button :

    let inputPlaylist = document.querySelector(".playListInput input");//Input Playlist Tag :

    let allPlaylistDiv = document.querySelector(".allPlaylistDiv");//All playlist Div :

    let allPlaylistChild = allPlaylistDiv.children;
    

    // CreatePlaylist Event Listener :
    createPlaylistBtn.addEventListener("click",function(){
        let valueofInput = inputPlaylist.value;

        let lengthofAllplaylist = allPlaylistChild.length;

        if(valueofInput !== ""){
            let playlistDiv = document.createElement("div");
            let newplaylistP = document.createElement("p");
            playlistDiv.setAttribute("class","playlistDiv");
            playlistDiv.setAttribute("data-id",lengthofAllplaylist + 1);
            newplaylistP.textContent = valueofInput;
            playlistDiv.appendChild(newplaylistP);
            playlistDiv.addEventListener("click",function(){
                currentselectedPlaylist = playlistDiv;
                renderPlayList(playlistDiv);
            })
            allPlaylistDiv.appendChild(playlistDiv);
            inputPlaylist.value = "";
        }
    })

}
createPlaylist();

// function for displaying the SongCard Song
function addingCardSongs(playlistnewDiv,selectedPlaylist){
    let songsinPlay = document.querySelector(".currentPlaylistDiv");

    let selectedClass = selectedPlaylist.querySelector("p").textContent;

    let className = playlistnewDiv.getAttribute("class");

    if(className === selectedClass){
        playlistnewDiv.style.display = "block";
        songsinPlay.appendChild(playlistnewDiv);
    }
}



// function for rendering Songs :
function renderPlayList(playlistDiv){
    let playlistName = playlistDiv.querySelector("p").textContent;

    let songsinPlay = document.querySelector(".currentPlaylistDiv");

    let songsinDiv = songsinPlay.querySelectorAll("div");

    if(songsinDiv.length !== 0){
        songsinDiv.forEach((currentDiv)=>{
            let playListClass = currentDiv.getAttribute("class");
            if(playListClass === playlistName){
                currentDiv.style.display = "block";
            }else{
                currentDiv.style.display = "none";
            }
            
        })
    }

}

// function to add a new Song :
function addnewSongs(){

    let songDataLength = songsData.length;

    let newSong = {
        id: String(songDataLength + 1),
        name: songName,
        artist:artist,
        image: image,
        genre:  genre,
        source: source,
    }
    songsData.push(newSong);
    return songsData;
}
