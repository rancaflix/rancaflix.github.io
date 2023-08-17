const querySong = async (month, day) => {
    try {
        const response = await fetch('./songs.json'); // Adjust the file path if needed
        const data = await response.json();

        // Filter songs for the specified month and day
        const songsForDayAndMonth = data.filter(song => song.Month === month && song.Day === day);
        return songsForDayAndMonth;
    } catch (error) {
        console.error('Error fetching or parsing JSON:', error);
    }
}

export default querySong
