import querySong from "./querySong.js";
import youtubeButton from "./youtubeButton.js";


const today = new Date();
const todaysongs = document.createElement("div");
todaysongs.classList.add("todaysongs");

const monthToFetch = today.toLocaleString('en-US', { month: 'long' }); // Get the full month name
const dayToFetch = today.getDate();

querySong(monthToFetch, dayToFetch)
    .then(songs => {
        if (songs.length > 0){
            songs.forEach(song => {
                const songInfo = document.createElement("span");
                songInfo.id = "todayspan";
                const songText = document.createElement("p");
                songInfo.style.display = "block";
                songText.style.display = "inline";
                songText.textContent = `${song.Artist} - ${song.Song} (${song.Language})`;
                songInfo.appendChild(songText);
                const ytButton = youtubeButton(song.Artist, song.Song);
                songInfo.appendChild(ytButton);
                todaysongs.appendChild(songInfo);        
            });
        } else {
            todaysongs.textContent = "No songs for today";
        }
    });


export default todaysongs;