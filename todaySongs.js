import querySong from "./querySong.js";

const today = new Date();
const todaysongs = document.createElement("div");
todaysongs.classList.add("todaysongs");

const monthToFetch = today.toLocaleString('en-US', { month: 'long' }); // Get the full month name
const dayToFetch = today.getDate();

querySong(monthToFetch, dayToFetch)
    .then(songs => {
        if (songs.length > 0){
            songs.forEach(song => {
                const songInfo = document.createElement("p");
                songInfo.textContent = `${song.Artist} - ${song.Song} (${song.Language})`
                todaysongs.appendChild(songInfo);                
            });
        } else {
            todaysongs.textContent = "No songs for today";
        }
    });


export default todaysongs;