const API_URL = 'https://api.musixmatch.com/ws/1.1';
const API_KEY = 'f94c853c763bfd9d9c341c0cc7c2cb79';


const artists = [
    { id: "101", name: "Pearl Jam" },
    { id: "505", name: "The Doors" },
    { id: "666", name: "Iron Maiden" },
    { id: "000", name: "Justin Bieber" }
];

const albums = [
    { id: "980", name: "Unplugged",        artistId: "101" },
    { id: "322", name: "Ten",              artistId: "101" },
    { id: "201", name: "L.A. Woman",       artistId: "505" },
    { id: "324", name: "Morrison Hotel",   artistId: "505" },
    { id: "125", name: "Piece of Mind",    artistId: "666" },
    { id: "876", name: "Greatest Hits",    artistId: "000" },
];

const songs = [
    { id: "772374",   name: "Oceans",           albumId: "980", artistId: "101" },
    { id: "772372",   name: "Black",            albumId: "322", artistId: "101" },
    { id: "83020099", name: "Alabama Song",     albumId: "201", artistId: "505" },
    { id: "30514183", name: "Roadhouse Blues",  albumId: "324", artistId: "505" },
    { id: "15811729", name: "The Trooper",      albumId: "125", artistId: "666" },
    { id: "32184425", name: "Baby",             albumId: "876", artistId: "000" }
];

document.getElementById("artist").addEventListener("change", selectArtist);
document.getElementById("albums").addEventListener("change", selectAlbum);
document.getElementById("button").addEventListener("click", selectSong);

function selectArtist() {
    const artistId = this.value;
    document.getElementById("albums").length = 0;
    document.getElementById("songs").length = 0;
    document.getElementById("albums").disabled = false;
    let option2 = document.createElement("option");
    option2.text = " Select Album ";
    option2.disabled = true;
    option2.selected = true;
    document.getElementById("albums").appendChild(option2);
    let option3 = document.createElement("option");
    option3.text = " Select Song ";
    option3.disabled = true;
    option3.selected = true;
    document.getElementById("songs").appendChild(option3);
    albums.forEach(function(album) {
        if (artistId == album.artistId) {
            let option = document.createElement("option");
            option.value = album.id;
            option.text = album.name;
            document.getElementById("albums").appendChild(option);
        }
    });
}

function selectAlbum() {
    const albumId = this.value;
    document.getElementById("songs").length = 0;
    document.getElementById("songs").disabled = false;
    let option3 = document.createElement("option");
    option3.text = " Select Song ";
    option3.disabled = true;
    option3.selected = true;
    document.getElementById("songs").appendChild(option3);
    songs.forEach(function(song) {
        if (albumId == song.albumId) {
            let option = document.createElement("option");
            option.value = song.id;
            option.text = song.name;
            document.getElementById("songs").appendChild(option);
        }
    })
}

artists.forEach(function(artist) {
    let option = document.createElement("option");
    option.value = artist.id;
    option.text = artist.name;
    document.getElementById("artist").appendChild(option);
});

function selectSong() {
    const songId = document.getElementById("songs").value;
    alert(songId);

}

