// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const allHearts = document.querySelectorAll(".like-glyph")

function CallbackLike(e){
  const heart = e.target;
  mimicServerCall("url")
  .then(()=> {
    if(heart.innerHtml === EMPTY_HEART){
      heart.innerHtml = FULL_HEART
      heart.className = "activated"
    }else{
      heart.innerHtml = EMPTY_HEART
      heart.className = ""
    }
  })
  .catch(function(error){
    const modal = document.getElementById('modal')
    modal.className = "";
    modal.innerHTML = error;
    setTimeout(()=> modal.className = "hidden", 3000)
  })
}

for (const glyph of allHearts){
  glyph.addEventListener("click", CallbackLike);
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
