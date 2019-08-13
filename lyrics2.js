const PREFIX = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'https://api.musixmatch.com/ws/1.1';
const API_KEY = 'f94c853c763bfd9d9c341c0cc7c2cb79';

const artists = [
    { id: "116",        name: "Pearl Jam" },
    { id: "815",        name: "The Doors" },
    { id: "6781",       name: "Iron Maiden" },
    { id: "33491916",   name: "Justin Bieber" }
];

const albums = [
    { id: "22370091", name: "Unplugged",        artistId: "116" },
    { id: "10284810", name: "Ten",              artistId: "116" },
    { id: "10277294", name: "L.A. Woman",       artistId: "815" },
    { id: "10277295", name: "Morrison Hotel",   artistId: "815" },
    { id: "125",      name: "Piece of Mind",    artistId: "6781" },
    { id: "31526423", name: "Greatest Hits",    artistId: "33491916" },
];

const songs = [
    { id: "772374",   name: "Oceans",           albumId: "22370091", artistId: "116" },
    { id: "772372",   name: "Black",            albumId: "10284810", artistId: "116" },
    { id: "83020099", name: "Alabama Song",     albumId: "10277294", artistId: "815" },
    { id: "30514183", name: "Roadhouse Blues",  albumId: "10277295", artistId: "815" },
    { id: "15811729", name: "The Trooper",      albumId: "125", artistId: "6781" },
    { id: "32184425", name: "Baby",             albumId: "31526423", artistId: "33491916" }
];

document.getElementById("artist").addEventListener("mouseover", selectArtist);
document.getElementById("albums").disabled=false;
document.getElementById("albums").addEventListener("mouseover", selectAlbum);
document.getElementById("button").addEventListener("click", selectSong);


/* function selectSong() {
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
} */

function selectArtist() {
    const artistId = this.value;
    document.getElementById("artist").length = 0;
    let option = document.createElement("option");
    option.text = " Select Artist Name ";
    option.disabled = true;
    option.selected = true; 
    document.getElementById("artist").appendChild(option);
    artists.forEach(function(artist) { 
        if (artistId != null) {
            artis = artist.id;
            let name = document.createElement("option");
            const url = PREFIX + API_URL + '/artist.get';
            const params = { apikey: API_KEY, artist_id: artis}

            axios.get(url, { params: params })
            .then(function(response) {
            let artista = response.data.message.body.artist.artist_name;
            name.value = artist.id;
            name.text = artista;
            document.getElementById("artist").appendChild(name);
            })
        }
    })
    document.getElementById("artist").length = 0;
    let option2 = document.createElement("option");
    option2.text = " Select Artist Name ";
    option2.disabled = true;
    option2.selected = true; 
    document.getElementById("artist").appendChild(option2);
    //selectAlbum();
}

function selectAlbum() {
    //const albId = document.getElementById("artist").value;
    const albumId = this.value;
    document.getElementById("albums").length = 0;
    let option = document.createElement("option");
    option.text = " Select Album ";
    option.disabled = true;
    option.selected = true; 
    document.getElementById("albums").appendChild(option);
    albums.forEach(function(album) { 
    //const albId = document.getElementById("artist").value;
        if (albumId != null) {
            alb = album.id;
            let name = document.createElement("option");
            const url = PREFIX + API_URL + '/album.get';
            const params = { apikey: API_KEY, album_id: alb}
            axios.get(url, { params: params })
            .then(function(response) {
            let albumes = response.data.message.body.album.album_name;
            name.value = album.id;
            name.text = albumes;
            document.getElementById("albums").appendChild(name);
            
            })
        }
    })
            document.getElementById("albums").length = 0;
            let option2 = document.createElement("option");
            option2.text = " Select Album";
            option2.disabled = true;
            option2.selected = true; 
            document.getElementById("albums").appendChild(option2);
    
    }    
/* function selectAlbum() {
    const albId = document.getElementById("albums").value;
    getAlbum(albId);
}     */
    
function selectSong() {
    const songId = document.getElementById("songs").value;
    getLyrics(songId);
}

function getLyrics(songId) {
    const url = PREFIX + API_URL + '/track.lyrics.get';
    const params = { apikey: API_KEY, track_id: songId }

    axios.get(url, { params: params })
    .then(function(response) {
        let lyric = response.data.message.body.lyrics.lyrics_body;
        document.getElementById("lyrics").innerHTML = lyric;
        console.log(response.data.message.body.lyrics.lyrics_body);
    })
    .catch(function(error) {
        console.log(error);
    });
}

function getsongs(songId) {
    
    const url = PREFIX + API_URL + '/album.tracks.get';
    const params = { apikey: API_KEY, album_id: songId}

    axios.get(url, { params: params })
    .then(function(response) {
        let artista = response.data.message.body.track_list['4'].track.track_name;
        document.getElementById("lyrics").innerHTML = artista;
        console.log(response.data.message.body.track_list['4'].track.track_name);
    })
    .catch(function(error) {
        console.log(error);
    });
}
