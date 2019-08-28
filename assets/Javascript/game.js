var marvelc = [
    "blackpanther",
    "antman",
    "captainamerica",
    "doctorstrange",
    "starlord",
    "thanos",
    "thor",
    "hulk",
    "captainmarvel",
    "ironman",
    "spiderman"



  ];
  
  var winNum = 0;
  var guessLeft = 12;
  
  var userGuessArr = []; 
  var computerChoiceDashes = [];
  var computerChoiceContainer = [];
  

  
  
  
  var computerChoice = marvelc[Math.floor(Math.random() * marvelc.length)];
  
  
  console.log(computerChoice);
  
  for (i = 0; i < computerChoice.length; i++) {
    computerChoiceDashes.push(computerChoice[i].replace(/[a-zA-Z]/g, "_"));
  
    var displayDashes = computerChoiceDashes.join(" ");
  
    computerChoiceContainer.push(computerChoice[i]);
  
    var displayLetters = computerChoiceContainer.join(" ");
  }
  
  
  document.getElementById("word-guess").textContent = displayDashes;
  
  
  String.prototype.replaceAt = function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
  };
  
  var imgElement = document.getElementById("marvel-image");
  
  
  function show_image(src, width, height, style, alt) {
    var img = document.createElement("img");
    img.src = src;
    img.width = width;
    img.height = height;
    img.style = style;
    img.alt = alt;
  
    
    document.getElementById("marvel-image").appendChild(img);
    console.log(img);
  }
  
  
  var button = document.getElementById("tryAgain");
  button.style.display = "none";
  button.onclick = tryAgain;
  
  
  function tryAgain() {
    userGuessArr = [];
  
    
    var rmIndex = marvelc.indexOf(computerChoice);
    marvelc.splice(rmIndex, 1);
    console.log(marvelc);
  
  
    
    computerChoice = marvelc[Math.floor(Math.random() * marvelc.length)];
    console.log(computerChoice);
  
    computerChoiceDashes = [];
    computerChoiceContainer = [];
  
    for (i = 0; i < computerChoice.length; i++) {
      computerChoiceDashes.push(computerChoice[i].replace(/[a-zA-Z]/g, "_"));
  
      displayDashes = computerChoiceDashes.join(" ");
    }
  
    for (i = 0; i < computerChoice.length; i++) {
      computerChoiceContainer.push(computerChoice[i]);
  
      displayLetters = computerChoiceContainer.join(" ");
    }
  
    document.getElementById("word-guess").textContent = displayDashes;
  
    
    button.style.display = "none";
  }
  
  //Create a button 
  var buttonRestart = document.getElementById("restartAgain");
  buttonRestart.style.display = "none";
  buttonRestart.onclick = restartAgain;
  
  function restartAgain() {
    location.reload();
  }
  
  
  document.onkeyup = function(event) {
    
    var userGuess = event.key;
  
    console.log(userGuess);
  
    
  
    if (userGuessArr.includes(userGuess)) {
      return false;
    }
  
    if (userGuess !== computerChoice.includes(userGuess)) {
      guessLeft -= 1;
      userGuessArr.push(userGuess);
  
      if (guessLeft === 0) {
        guessLeft = 20;
        userGuessArr = [];
  
        if (displayLetters === "b l a c k p a n t h e r") {
          show_image(
            "assets/Images/blackp.jpg",
            376,
            410,
            "display: block;",
            "blackpanther"
          );
          
        } else if (displayLetters === "i r o n m a n") {
          show_image(
            "assets/Images/ironman.jpeg",
            376,
            510,
            "display: block;",
            "ironman"
          );
          
        } else if (displayLetters === "s p i d e r m a n") {
          show_image(
            "assets/Images/spiderman.jpg",
            376,
            410,
            "display: block;",
            "spiderman"
          );
          
        } else if (displayLetters === "h u l k") {
          show_image(
            "assets/images/hulk.jpg",
            376,
            580,
            "display: block;",
            "hulk"
          );
       
        } else if (displayLetters === "s t a r l o r d") {
          show_image(
            "assets/Images/starlord.jpg",
            376,
            510,
            "display: block;",
            "starlord"
          );
         
        } else if (displayLetters === "t h o r") {
          show_image(
            "assets/Images/thor.jpg",
            376,
            450,
            "display: block;",
            "thor"
          );
         
        } else if (displayLetters === "d o c t o r s t r a n g e") {
          show_image(
            "assets/Images/strange.jpg",
            376,
            510,
            "display: block;",
            "doctorstrange"
          );

        } else if (displayLetters === "c a p t a i n m a r v e l") {
            show_image(
              "assets/Images/captainmar.jpg",
              376,
              510,
              "display: block;",
              "captainmarvel"
            );
          
        } else if (displayLetters === "t h a n o s") {
            show_image(
              "assets/Images/thanos.jpg",
              376,
              510,
              "display: block;",
              "thanos"
            );

        } else if (displayLetters === "a n t m a n") {
            show_image(
              "assets/Images/antman.jpg",
              376,
              510,
              "display: block;",
              "antman"
            );

        } else if (displayLetters === "c a p t a i n a m e r i c a") {
            show_image(
              "assets/Images/CaptainSteve.jpg",
              376,
              510,
              "display: block;",
              "captainamerica"
            );
        }
      }
  
      
      button.style.display = "block";
      buttonRestart.style.display = "block";
    }
  
    if (computerChoice.includes(userGuess)) {
      
  
      console.log("it matches!");
  
     
      for (var i = 0; i < displayLetters.length; i++) {
        if (userGuess === displayLetters[i]) {
          console.log(i);
  
          var char = displayLetters.charAt(i);
  
          displayDashes = displayDashes.replaceAt(i, char);
  
          document.getElementById("word-guess").textContent = displayDashes;
        }
      }
  
      
      if (displayDashes === displayLetters) {
        winNum += 1;
        guessLeft = 12;
  
        userGuessArr = [];
  
       
        button.style.display = "block";
        buttonRestart.style.display = "block";
      }
  
      if (displayDashes === "b l a c k p a n t h e r") {
        show_image(
          "assets/Images/blackp.jpg",
          376,
          410,
          "display: block;",
          "blackpanther"
        );
        
      } else if (displayDashes === "i r o n m a n") {
        show_image(
          "assets/Images/ironman.jpeg",
          376,
          510,
          "display: block;",
          "ironman"
        );
       
      } else if (displayDashes === "s p i d e r m a n") {
        show_image(
          "assets/Images/spiderman.jpg",
          376,
          410,
          "display: block;",
          "spiderman"
        );
        
      } else if (displayDashes === "h u l k") {
        show_image(
          "assets/Images/hulk.jpg",
          376,
          580,
          "display: block;",
          "hulk"
        );
        
      } else if (displayDashes === "s t a r l o r d") {
        show_image(
          "assets/Images/starlord.jpg",
          376,
          510,
          "display: block;",
          "starlord"
        );
        
      } else if (displayDashes === "t h o r") {
        show_image(
          "assets/Images/thor.jpg",
          376,
          450,
          "display: block;",
          "thor"
        );
        
      } else if (displayDashes === "d o c t o r s t r a n g e") {
        show_image(
          "assets/Images/strange.jpg",
          376,
          510,
          "display: block;",
          "doctorstrange"
        );
        
      }
    } else {
      console.log("not matches");
    }
  
    
  
    document.getElementById(
      "letters-already-guess"
    ).textContent = userGuessArr.join(", ");
  
    
  
    document.getElementById("guess-left").textContent = guessLeft;
  
   
    document.getElementById("win-num").textContent = winNum;
  };