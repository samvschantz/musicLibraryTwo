function Library(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name){
  this.name = name;
  this.tracks = {};
}

function Track(title, rating, length){
  this.title = title;
  this.rating = rating; // out of 5
  this.length = length; // in seconds
}

function overallRating(playlist){
  tracksArray = [];
  for (track in playlist.tracks){
    tracksArray.push(playlist.tracks[track]['rating']);
  }
  const reducer = (a, b) => a + b;
  return tracksArray.reduce(reducer)/tracksArray.length;
}

function totalDuration(playlist){
  tracksArray = [];
  for (track in playlist.tracks){
    tracksArray.push(playlist.tracks[track]['length']);
  }
  const reducer = (a, b) => a + b;
  return tracksArray.reduce(reducer);
}



//tests
var mainLib = new Library("Main Library", "Sam");

var workoutPlaylist = new Playlist("Workout Playlist");
var roadtripPlaylist = new Playlist("Road Trip");

var track1 = new Track("Hey Brother", 5, 145);
var track2 = new Track("Levels", 5, 177);
var track3 = new Track("Wake Me Up", 4, 120);

workoutPlaylist.tracks.trackOne = track1;
workoutPlaylist.tracks.trackTwo = track3;

roadtripPlaylist.tracks.trackOne = track2;
roadtripPlaylist.tracks.trackTwo = track3;

mainLib.playlists.push(workoutPlaylist);
mainLib.playlists.push(roadtripPlaylist);

console.log(roadtripPlaylist);
console.log(workoutPlaylist);
console.log(mainLib);

console.log(overallRating(workoutPlaylist));
console.log(totalDuration(workoutPlaylist))
//console.log(workoutPlaylist)