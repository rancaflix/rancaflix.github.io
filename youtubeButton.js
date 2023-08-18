const youtubeButton = (artist, song) => {
    const songLink = `${artist}+${song}`.replace(/ /g, '+');
    const youtubeLink = `https://www.youtube.com/results?search_query=${songLink}`;

    const buttonImage = document.createElement("img");
    buttonImage.src = "./youtube-red.svg";
    buttonImage.alt = "Search on Youtube";
    buttonImage.id = "yrbutton";

    const youtubeButton = document.createElement("a");
    youtubeButton.style.display = "inline";
    youtubeButton.id = "a-yrbutton";
    youtubeButton.href = youtubeLink;
    youtubeButton.target = "_blank"; // Open link in a new tab
    youtubeButton.appendChild(buttonImage);

    return youtubeButton
}

export default youtubeButton