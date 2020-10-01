import React from 'react'

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="container">
        <h1 className="about-me__chapter">Про меня</h1>
        <p className="about-me__text">Евгений, 19 лет. Раньше веб-программистом
        не работал.  Я увлекаюсь своей профессией около трёх лет. Ни один мой день не проходит без саморазвития, особенно
         в области веб-разработки. Надеюсь, что добился достаточных успехов, чтобы проверить себя в профессиональном развитии.</p>
        <ul className="about-me__skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JS(ES6)</li>
          <li>SASS</li>
          <li>ReactJS</li>
          <li>Redux</li>
          <li>Typescript</li>
        </ul>
        <p className="about-me__portfolio">Моё портфолио:</p>
        <a href="https://qxie11.github.io/" target="__blank">https://qxie11.github.io/</a>
      </div>


    </div>
  )
}

export default AboutMe;
