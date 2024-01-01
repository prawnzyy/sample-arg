import React from 'react'
import "./Home.css"


function checkPassword () {
  var value = document.getElementById('fname').value
  if (value === 'LaPrawn') {
    window.location.href = "/second"
  }
  else {
    document.getElementById("Reject").style.display="block"
  }
}

function Home() {
  return (
    <div className='Main'>
      <h1>Welcome!</h1>
        <div className='Main-input'>
            <input type="text" id="fname" placeholder='Password'></input>
        </div>
        <div className='Rejected' id = "Reject">
          Haha clearly aint right
        </div>
        <div>
            <button onClick={checkPassword} className="Main-button">
              Submit!
            </button>
        </div>
        <h2>
          So this is juSt a very simple arg, no funny tricks, trust me on tHis one.<br></br>
          All you gotta do is to log in wIth a password.<br></br>
          What password is for you to Figure out and for me to enjoy.<br></br>
          But i can say this, everyThing is quite important.<br></br>
        </h2>
        <div className='Hidden'>
          OdSudzq
        </div>
    </div>
  )
}

export default Home