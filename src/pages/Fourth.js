import React from 'react'
import "./Fourth.css"

function checkPassword () {
    var value = document.getElementById('fname').value
    if (value === 'Tzeyoung') {
        window.location.href = "/end"
    }
    else {
        document.getElementById("Reject").style.display="block"
    }
}

function Fourth() {
  return (
    <div className='Main'>
      <h1>Welcome to the fourth page!</h1>
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
          On to the Fourth page.<br></br>
          This time no hints<br></br>

        </h2>
        <div className='Spring'>
          <a href = '/Spring' target='_blank'>
            <i class="fa-regular fa-images"></i>
          </a>
        </div>
        <div className='Summer'>
          <a href = '/Summer' target='_blank'>
            <i class="fa-regular fa-images"></i>
          </a>
        </div>
        <div className='Autumn'>
          <a href = '/Autumn' target='_blank'>
            <i class="fa-regular fa-images"></i>
          </a>
        </div>
        <div className='Winter'>
          <a href = '/Winter' target='_blank'>
            <i class="fa-regular fa-images"></i>
          </a>
        </div>
    </div>
  )
}

export default Fourth