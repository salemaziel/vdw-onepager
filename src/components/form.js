import React from "react";
import PropTypes from "prop-types";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = (props) => {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error))
  }

  return (
    
    <form
      className="contact-form"
      action="/thanks"
      name={props.formName}
      method="POST"
      data-netlify={props.dataNetlify}
      data-netlify-honeypot="bot-field"
      netlify
      onSubmit={handleSubmit} // Code Improvement Suggestion 1
    >
      <input type="hidden" name="form-name" value={props.formName} />
      <div className="field half first">
        <label htmlFor="name">Name*</label>
        <input 
        type="text" 
        name="name" 
        id="name" 
        onChange={handleChange}
        required
        />
      </div>
      <div className="field half">
        <label htmlFor="email">Email*</label>
        <input 
        type="text" 
        name="email" 
        id="email" 
        onChange={handleChange}
        required
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea 
        name="message" 
        id="message" 
        rows="4" 
        onChange={handleChange}
        />
      </div>
      <ul className="actions">
        <li>
          <input 
          type="submit" 
          value="Send Message" 
          className="special" 
          />
        </li>
      </ul>
    </form>
  );
}

Form.propTypes = {
    formName: PropTypes.string,
}

export default Form;