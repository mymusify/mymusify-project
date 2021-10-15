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
Songs.push(song("classical","Beethoven's 5th Symphony","","songs/Beethoven's 5th Symphony.mp3"))
Songs.push(song("classical","Om Kalthoum Enta 3omri - أم كلثوم انت عمري","","https://www.youtube.com/watch?v=-2H31qDG_Nk"))
Songs.push(song("classical","Charles Aznavour - La bohème","","https://www.youtube.com/watch?v=fVfnEyLOkrM"))
Songs.push(song("pop","One Direction - Night Changes","","https://www.youtube.com/watch?v=syFZfO_wfMQ"))
Songs.push(song("pop","TONES AND I - DANCE MONKEY","","https://www.youtube.com/watch?v=q0hyYWKXF0Q"))
Songs.push(song("pop","Melanie Martinez - Play Date","","https://www.youtube.com/watch?v=P_BeepbUSUE&list=RDMM&start_radio=1&rv=q0hyYWKXF0Q"))
Songs.push(song("pop","CKay, ElGrandeToto - love nwantiti","","https://www.youtube.com/watch?v=PTXeVEYXCFU"))
Songs.push(song("rap","50 Cent - In Da Club","","https://www.youtube.com/results?search_query=rap+music"))
Songs.push(song("rap","Eminem - Lose Yourself","","https://www.youtube.com/watch?v=_Yhyp-_hX2s"))
Songs.push(song("rap","Eminem - Rap God","","https://www.youtube.com/watch?v=XbGs_qK2PQA"))
Songs.push(song("rap","Numbxiller - Numbxiller","","https://www.youtube.com/watch?v=_fJB9BXLRQA"))


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