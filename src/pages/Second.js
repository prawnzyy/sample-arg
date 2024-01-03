import React from 'react'
import "./Second.css"

function checkPassword () {
    var value = document.getElementById('fname').value
    if (value === 'lone') {
        window.location.href = "/end"
    }
    else {
        document.getElementById("Reject").style.display="block"
    }
}

function Second() {
  return (
    <div className='Main'>
      <h1>Welcome to the next page!</h1>
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
          Ok great work, now you are here, which will require new tricks.<br></br>
          Note that across is first and we are cs students.<br></br>
          Hint: Password is in all lower case hehe
        </h2>
        <div>
            <a href='/tallies' target = "_blank">
                <button className = 'tallies'>
                    <i className='fas fa-star'></i>
                </button>
            </a>
            <a href = '/grid' target = "_blank">
            <button className = 'grid'>
                <i className='fas fa-star'></i>
            </button>
            </a>
        </div>
    </div>
  )
}

export default Second