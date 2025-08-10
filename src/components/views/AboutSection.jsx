import React, { useState } from 'react';

const AboutSection = () => {
  const [a, setA] = useState(123);

  const handleIncrement = () => {
    setA(prev => prev + 1);
    console.log(a + 1);
  };

  return (
    <>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Muaaz</title>
        <style dangerouslySetInnerHTML={{ __html: `
          body {
            margin: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #f0f4f8;
            color: #333;
          }

          header {
            background-color: #3b82f6;
            color: white;
            padding: 20px 0;
            text-align: center;
          }

          .container {
            max-width: 900px;
            margin: 40px auto;
            padding: 0 20px;
          }

          h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
          }

          .about-box {
            background: white;
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          }

          .about-box p {
            font-size: 1.1rem;
            line-height: 1.8;
          }

          .counter-section {
            margin-top: 20px;
            text-align: center;
          }

          .counter-value {
            font-size: 2rem;
            font-weight: bold;
            color: #3b82f6;
          }

          .btn-increment {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #3b82f6;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .btn-increment:hover {
            background-color: #2563eb;
          }

          footer {
            text-align: center;
            padding: 20px;
            margin-top: 50px;
            background: #e2e8f0;
            color: #555;
          }

          @media screen and (max-width: 600px) {
            h1 {
              font-size: 2rem;
            }

            .about-box {
              padding: 20px;
            }
          }
        ` }} />
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

            {/* ✅ Counter Section */}
            <div className="counter-section">
              <div className="counter-value">{a}</div>
              <button className="btn-increment" onClick={handleIncrement}>
                Increment
              </button>
            </div>
          </div>
        </div>
        <footer>
          © 2025 Muaaz. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default AboutSection;
