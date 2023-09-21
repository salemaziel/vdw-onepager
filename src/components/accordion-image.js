import React, { useState, useCallback } from 'react'
//import { Fade } from 'react-awesome-reveal'

const AccordionImage = ({ title, subtitle, image, content, text }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = useCallback(() => {
    setIsActive((prevIsActive) => !prevIsActive);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      toggleActive();
    }
  }, [toggleActive]);



  return (
    <>
      <div
        className="cursor-pointer"
        style={{ marginBottom: '2em' }}
        onClick={toggleActive}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
        aria-controls="accordion-content"
        aria-label={isActive ? 'Collapse accordion' : 'Expand accordion'}

      >
        {title && <h3 className="text-normal">{title}</h3>}
        {subtitle && <h4 className="text-normal">{subtitle}</h4>}
      </div>

      {isActive && (
        <>
        {/*<Fade>*/}
          <span className="image main">
            <div className="" id="accordion">
              <div className="accordion-content">
              {text && <p style={{ marginBottom: '0' }}>{text}</p>}
              </div>
              {image && <img src={image} alt={title} style={{ padding: '1rem' }} />}
            </div>
            <div className="accordion-content">
            {content && <p>{content}</p>}
            </div>
          </span>
        {/*</Fade>*/}
        </>
      )}
    </>
  )
}
export default AccordionImage
