import React from 'react'

const AboutSection = () => {
  return (
    
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About Muaaz</title>
  <style dangerouslySetInnerHTML={{__html: "\n    body {\n      margin: 0;\n      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n      background: #f0f4f8;\n      color: #333;\n    }\n\n    header {\n      background-color: #3b82f6;\n      color: white;\n      padding: 20px 0;\n      text-align: center;\n    }\n\n    .container {\n      max-width: 900px;\n      margin: 40px auto;\n      padding: 0 20px;\n    }\n\n    h1 {\n      font-size: 2.5rem;\n      margin-bottom: 10px;\n    }\n\n    .about-box {\n      background: white;\n      border-radius: 15px;\n      padding: 30px;\n      box-shadow: 0 4px 20px rgba(0,0,0,0.1);\n    }\n\n    .about-box p {\n      font-size: 1.1rem;\n      line-height: 1.8;\n    }\n\n    footer {\n      text-align: center;\n      padding: 20px;\n      margin-top: 50px;\n      background: #e2e8f0;\n      color: #555;\n    }\n\n    @media screen and (max-width: 600px) {\n      h1 {\n        font-size: 2rem;\n      }\n\n      .about-box {\n        padding: 20px;\n      }\n    }\n  " }} />
  <header>
    <h1>About Me</h1>
  </header>
  <div className="container">
    <div className="about-box">
      <h2>Hello! I'm Muaaz 👋</h2>
      <p>
        Welcome to my portfolio! I am a passionate web developer and software engineering student, deeply interested in creating beautiful, functional, and secure web applications.
        I love working on both frontend and backend technologies and enjoy solving real-world problems through code.
      </p>
      <p>
        My journey started with curiosity and a desire to build something meaningful. Today, I'm focused on projects involving security, IoT, and modern web development frameworks like React and Laravel.
      </p>
      <p>
        Besides coding, I enjoy learning new tools, reading about cybersecurity, and helping others grow in tech.
      </p>
    </div>
  </div>
  <footer>
    © 2025 Muaaz. All rights reserved.
  </footer>
</div>


  )
}

export default AboutSection