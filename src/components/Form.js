import "./FormStyle.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Message"/>
            <button className="btn btn-light">Submit</button>
        </form>
    </div>
  )
}

export default Form