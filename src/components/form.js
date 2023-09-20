import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby-link";

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
      netlify
      onSubmit={handleSubmit}
      aria-label={props.ariaLabel}
    >
      <input type="hidden" name="form-name" value={props.formName} />
      <input type="hidden" name="bot-field" aria-hidden="true" />
      <div className="field half first">
        <label htmlFor="name">Name*</label>
        <input 
        type="text" 
        name="name" 
        id="name" 
        onChange={handleChange}
        required
        aria-required="true"
        aria-label="Name"
        />
      </div>
      <div className="field half">
        <label htmlFor="email">Email*</label>
        <input 
        type="email" 
        name="email" 
        id="email" 
        onChange={handleChange}
        required
        aria-required="true"
        aria-label="Email"
        />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea 
        name="message" 
        id="message" 
        rows="4" 
        onChange={handleChange}
        aria-label="Message"
        />
      </div>
      <ul className="actions">
        <li>
          <input 
          type="submit" 
          value="Send Message" 
          className="special" 
          aria-label="Submit"
          />
        </li>
      </ul>
    </form>
  );
}

export default Form;

Form.propTypes = {
    formName: PropTypes.string,
}

