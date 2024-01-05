import React from 'react'
import "./Third.css"

function checkPassword () {
    var value = document.getElementById('fname').value
    if (value === 'flag') {
        window.location.href = "/end"
    }
    else {
        document.getElementById("Reject").style.display="block"
    }
}

function Third() {
  return (
    <div className='Main'>
      <h1>Welcome to the third page!</h1>
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
          On to the Third page.<br></br>
          Here is an extract i found within the site:<br></br><br></br>

          Pepper is a spice from India. People sprinkle it over their food for additional taste.
          The runner-up would actually have to be salt.<br></br> <br></br>

          Salt is another powerful condiment. If you came home empty-handed from Japan you need to be whacked.
          But that does not matter here huh.<br></br><br></br>

          Japan is the land of the rising sun. They even have a life-sized gundam at Odaiba<br></br><br></br>

          If you did not realise that all this is far-fetched and weirdly mind-blowing then its time to start reading better.<br></br><br></br>
        </h2>
        <i class="fa-regular fa-lightbulb" title='Maybe look at the punctuation'></i>
    </div>
  )
}

export default Third