var Songs = [];
function song(genre,description, image, link) {
  return {
    genre: genre, 
    description: description,
    image: image,
    link: link
  }
}
//Songs.push(song("genre","description","dossier/image","dossier(songs)/song.mp3"))
Songs.push(song("classical","Chopin - Nocturne op.9 No.2 Played by Vadim Chaimovich","images/songs images/classic/classis-chopin.jpg","songs/Chopin - Nocturne op.9 No.2.mp3"))
Songs.push(song("classical","Beethoven's 5th Symphony","images/songs images/classic/beethoven 5 sym.jpg","songs/Beethoven's 5th Symphony.mp3"))
Songs.push(song("classical","Om Kalthoum Enta 3omri - أم كلثوم انت عمري","images/songs images/classic/om k.jpg","songs/Om Kalthoum Enta 3omri - أم كلثوم انت عمري.mp3"))
Songs.push(song("classical","Charles Aznavour - La bohème","images/songs images/classic/classic-charleaznavour.jpg","Charles Aznavour - La bohème (Official Lyrics Video).mp3"))
Songs.push(song("pop","One Direction - Night Changes","https://c-cl.cdn.smule.com/rs-s35/arr/15/a0/4bd87e54-da45-47e2-91b5-1ff80a3cea08_1024.jpg","songs/One Direction - Night Changes.mp3"))
Songs.push(song("pop","TONES AND I - DANCE MONKEY","https://i1.sndcdn.com/artworks-000653856538-henymj-t500x500.jpg","songs/TONES AND I - DANCE MONKEY (OFFICIAL VIDEO).mp3"))
Songs.push(song("pop","Melanie Martinez - Play Date","data:image/jpeg;base64,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","songs/Playdate - slowed to perfection.mp3"))
Songs.push(song("pop","CKay, ElGrandeToto - love nwantiti","https://i.scdn.co/image/ab67616d0000b27339bb326b58346f99b8692745","songs/CKay, ElGrandeToto - love nwantiti (Remix Lyrics).mp3"))
Songs.push(song("rap","50 Cent - In Da Club","https://linstant-m.tn//uploads/2876.png","songs/50 Cent - In Da Club (Official Music Video).mp3"))
Songs.push(song("rap","Eminem - Lose Yourself","https://i1.sndcdn.com/artworks-000107745240-8kmke6-t500x500.jpg","songs/Eminem - Lose Yourself [HD].mp3"))
Songs.push(song("rap","Eminem - Rap God","https://i1.sndcdn.com/artworks-000065527878-gyqsw0-t500x500.jpg","songs/Eminem - Rap God (Explicit).mp3"))
Songs.push(song("rap","Numbxiller - Numbxiller","https://covers3.hosting-media.net/jpgr295/u3616551760330.jpg","songs/Numbxiller - Numbxiller (Official Music Video).mp3"))
Songs.push(song("jazz","Lovefool - Vintage Jazz Cardigans","https://i.pinimg.com/736x/63/eb/3b/63eb3bf1116a768d157e873b940b263e.jpg","songs/Lovefool - Vintage Jazz Cardigans Cover ft. Haley Reinhart.mp3"))
Songs.push(song("jazz","Feel Good Inc. - Vintage Ella Fitzgerald Style Gorillaz","data:image/jpeg;base64,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","songs/Feel Good Inc. - Vintage Ella Fitzgerald Style Gorillaz Cover ft. Thia Megia.mp3"))
Songs.push(song("jazz","Frank Sinatra Fly Me To The Moon","https://i1.sndcdn.com/artworks-000141761213-3sxu71-t500x500.jpg","songs/Frank Sinatra Fly Me To The Moon.mp3"))
Songs.push(song("jazz","Careless Whisper - Vintage 1930's Jazz Wham!","https://i1.sndcdn.com/artworks-000072221983-hr8vv3-t500x500.jpg","songs/Careless Whisper - Vintage 1930's Jazz Wham! Cover feat. Robyn Adele Anderson & Dave Koz.mp3"))
Songs.push(song("house","Dynoro & Gigi D’Agostino - In My Mind","https://images.shazam.com/coverart/t444614318_s400.jpg","songs/Dynoro & Gigi D’Agostino - In My Mind.mp3"))
Songs.push(song("house","BALENCIAGA Deep House Type Beat","https://sg-res.9appsinstall.com/sg/res/jpg/cc/f1/47a50a54a9358d6c5f1df09e2e79-s39a.jpg?x-oss-process=style/mq200","songs/Deep House Type Beat x Pop House Type Beat 2021 _BALENCIAGA_ new club edm dance instrumental.mp3"))
Songs.push(song("house","MARSHALL JEFFERSON - MOVE YOUR BODY","https://upload.wikimedia.org/wikipedia/en/5/5f/Marshall-jefferson-move-your-body.jpg","songs/MARSHALL JEFFERSON - MOVE YOUR BODY [The House Music Anthem].mp3"))
Songs.push(song("house","David Guetta - Hey Mama","http://www.hitsandclips.fr/pochette-album-single/david-guetta-feat-nicki-minaj-and-afrojack-hey-mama.jpg","songs/David Guetta - Hey Mama (ERS REMIX).mp3"))

$(document).ready(function (){
  document.getElementById("classical").setAttribute("class","");
  document.getElementById("pop").setAttribute("class","");
  document.getElementById("jazz").setAttribute("class","");
  document.getElementById("rap").setAttribute("class","");
  document.getElementById("house").setAttribute("class","");
  document.getElementById("home").setAttribute("class","active");
  $("#navbar").hide();
  $("box").html(`<div id="navbar2">

  <img id="logo2" src="./Images/logo MyMusify.png" alt="">
  <form id="form">
  <input id="searchbar2" type="text" placeholder="  Search..">
  <input id="sbn" type="submit">
  </form>
</div>`);

    for (var key in Songs) {
   
     var new_div =
       $(`<div id="song">
  <img id="songimg" src="`+ Songs[key].image + `" alt="test">
  <p id="genre" >` +Songs[key].genre + `"</p>
  <p id="description">`+Songs[key].description + `"</p>
  <audio controls>
 <source src="`+ Songs[key].link + `" type="audio/ogg">
</audio> 
  </div>`)
     $("#box2").append(new_div);
     $("#box2").hide();
   }

}
);
$(document).ready(function () {
  $("#searchbar2").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#box2 div ").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

$(document).ready(function () {
  $("#form").on("submit", function () {
     $("#form").hide()
    $("#searchbar2").hide()
    $("#box").hide();
    $("#logo2").hide()
    $("#box2").show()
    $("#navbar").show()
  return false;
  });
});

  function classical(){
    $("#navbar").show();
    $("#box2").show();
    $("#box").hide();
    document.getElementById("classical").setAttribute("class","active");
    document.getElementById("pop").setAttribute("class","");
    document.getElementById("jazz").setAttribute("class","");
    document.getElementById("rap").setAttribute("class","");
    document.getElementById("house").setAttribute("class","");
    document.getElementById("home").setAttribute("class","");
    $("box2").html("");
     for (var key in Songs) {
       if(Songs[key].genre=="classical"){
     
        var new_div =
        $(`<div id="song">
   <img id="songimg" src="`+ Songs[key].image + `" alt="test">
   <p id="genre" >` +Songs[key].genre + `"</p>
   <p id="description">`+Songs[key].description + `"</p>
   <audio controls>
  <source src="`+ Songs[key].link + `" type="audio/ogg">
 </audio> 
   </div>`)
      $("#box2").append(new_div);
    }}
  
  
  }
  function pop(){
    $("#navbar").show();
    $("#box2").show();
    $("#box").hide();
    document.getElementById("classical").setAttribute("class","");
    document.getElementById("pop").setAttribute("class","active");
    document.getElementById("jazz").setAttribute("class","");
    document.getElementById("rap").setAttribute("class","");
    document.getElementById("house").setAttribute("class","");
    document.getElementById("home").setAttribute("class","");
    $("box2").html("");
    for (var key in Songs) {
      if(Songs[key].genre=="pop"){
     
        var new_div =
        $(`<div id="song">
   <img id="songimg" src="`+ Songs[key].image + `" alt="test">
   <p id="genre" >` +Songs[key].genre + `"</p>
   <p id="description">`+Songs[key].description + `"</p>
   <audio controls>
  <source src="`+ Songs[key].link + `" type="audio/ogg">
 </audio> 
   </div>`)
      $("#box2").append(new_div);
     
    }}
  
  }
  function rap(){
    $("#navbar").show();
    $("#box2").show();
    $("#box").hide();
    document.getElementById("classical").setAttribute("class","");
    document.getElementById("pop").setAttribute("class","");
    document.getElementById("jazz").setAttribute("class","");
    document.getElementById("rap").setAttribute("class","active");
    document.getElementById("house").setAttribute("class","");
    document.getElementById("home").setAttribute("class","");
    $("box2").html("");
    for (var key in Songs) {
      if(Songs[key].genre=="rap"){
    
       var new_div =
         $(`<div id="song">
    <img id="songimg" src="`+ Songs[key].image + `" alt="test">
    <p id="genre" >` +Songs[key].genre + `"</p>
    <p id="description">`+Songs[key].description + `"</p>
    <audio controls>
   <source src="`+ Songs[key].link + `" type="audio/ogg">
  </audio> 
    </div>`)
       $("#box2").append(new_div);
     }}
  
  }
  function jazz(){
    $("#box2").show();
    $("#navbar").show();
    $("#box").hide();
    document.getElementById("classical").setAttribute("class","");
    document.getElementById("pop").setAttribute("class","");
    document.getElementById("jazz").setAttribute("class","active");
    document.getElementById("rap").setAttribute("class","");
    document.getElementById("house").setAttribute("class","");
    document.getElementById("home").setAttribute("class","");
    $("box2").html("");
    for (var key in Songs) {
      if(Songs[key].genre=="jazz"){
     
        var new_div =
        $(`<div id="song">
   <img id="songimg" src="`+ Songs[key].image + `" alt="test">
   <p id="genre" >` +Songs[key].genre + `"</p>
   <p id="description">`+Songs[key].description + `"</p>
   <audio controls>
  <source src="`+ Songs[key].link + `" type="audio/ogg">
 </audio> 
   </div>`)
      $("#box2").append(new_div);
    }}
  
  }
  
  
  
  function house(){
    $("#box2").show();
    $("#navbar").show();
    $("#box").hide();
    
    document.getElementById("classical").setAttribute("class","");
    document.getElementById("pop").setAttribute("class","");
    document.getElementById("jazz").setAttribute("class","");
    document.getElementById("rap").setAttribute("class","");
    document.getElementById("house").setAttribute("class","active");
    document.getElementById("home").setAttribute("class","");
    $("box2").html("");
    for (var key in Songs) {
      if(Songs[key].genre=="house"){
   
        var new_div =
        $(`<div id="song">
   <img id="songimg" src="`+ Songs[key].image + `" alt="test">
   <p id="genre" >` +Songs[key].genre + `"</p>
   <p id="description">`+Songs[key].description + `"</p>
   <audio controls>
  <source src="`+ Songs[key].link + `" type="audio/ogg">
 </audio> 
   </div>`)
      $("#box2").append(new_div);
  
    }}
  }
  
  
  
  function home(){
    $("#box").show();
    document.getElementById("classical").setAttribute("class","");
    document.getElementById("pop").setAttribute("class","");
    document.getElementById("jazz").setAttribute("class","");
    document.getElementById("rap").setAttribute("class","");
    document.getElementById("house").setAttribute("class","");
    document.getElementById("home").setAttribute("class","active");
    $("#navbar").hide();
    $("box").html(`<div id="navbar2">
  
    <img id="logo2" src="./Images/logo MyMusify.png" alt="">
    <form id="form">
    <input id="searchbar2" type="text" placeholder="  Search..">
    <input id="sbn" type="submit">
    </form>
  </div>`);
  
      for (var key in Songs) {
     
       var new_div =
         $(`<div id="song">
    <img id="songimg" src="`+ Songs[key].image + `" alt="test">
    <p id="genre" >` +Songs[key].genre + `"</p>
    <p id="description">`+Songs[key].description + `"</p>
    <audio controls>
   <source src="`+ Songs[key].link + `" type="audio/ogg">
  </audio> 
    </div>`)
       $("#box2").append(new_div);
       $("#box2").hide();
     }
  
  }

  $(document).ready(function () {
    $("#searchbar").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#box2 div ").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });
  
  