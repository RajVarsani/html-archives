console.log('Welcome to Spotify');

let songIndex=0;
let audioElement=new Audio('./songs/1.mp3')
let masterPlay=document.getElementById('masterPlay');
let masterSongName=document.getElementById('masterSongName')
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: 'Gaana1', filePath: "./songs/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: 'Gaana2', filePath: "./songs/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: 'Gaana3', filePath: "./songs/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: 'Gaana4', filePath: "./songs/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: 'Gaana5', filePath: "./songs/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: 'Gaana6', filePath: "./songs/6.mp3", coverPath: "./covers/6.jpg"},
    {songName: 'Gaana7', filePath: "./songs/7.mp3", coverPath: "./covers/7.jpg"},
    {songName: 'Gaana8', filePath: "./songs/8.mp3", coverPath: "./covers/8.jpg"},
    {songName: 'Gaana9', filePath: "./songs/9.mp3", coverPath: "./covers/9.jpg"},
    {songName: 'Gaana10', filePath: "./songs/10.mp3", coverPath: "./covers/10.jpg"}
]
songItem.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText=songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
}) // 'timeupdate' event is fired when time indicated by the currentTime attribute has been updated.

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
}) // 'change' event is fired for <input>, <select> and <textarea> elements when an alteration to the element's value is committe by the user.

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if (songIndex>=9) {
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if (songIndex<=0) {
        songIndex=9;
    }
    else{
        songIndex -=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})