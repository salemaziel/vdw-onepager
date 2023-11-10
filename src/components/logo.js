 import * as React from "react"
 import { StaticImage } from "gatsby-plugin-image"
 
 const Logo = () => {
  return (
    <div className="bio">
      {/*<StaticImage
        className="bio-avatar"
        objectPosition="50% 50%"
        formats={["auto", "webp"]}
        src="../../static/assets/logo-idea1-250px-whiteshadow.png"
        quality={95}
        alt="RBL Logo"         
  />*/}
      <StaticImage
        className="bio-avatar"
        objectPosition="50% 50%"
        formats={["auto", "webp", "avif"]}
        src="../../static/assets/logo-vertical-white2.png"
        quality={95}
        alt="Via Del Web Logo"
        layout="constrained"
        loading="eager"
        placeholder="blurred"
        imgClassName="object-cover object-fit"
      />
    </div>
   )
 }
 
 export default Logo
 