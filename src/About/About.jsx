import React from 'react';
import Viktoria from './img/Viktoria.png';
import Zuzana from './img/Zuzana.jpg';
import instagram from './icons/instagram.svg';
import github from './icons/github.svg';
import email from './icons/email.svg';

import './style.css';

const About = () => {
  return (
    <div className="container__about">
      <div className="container__about--cards">
        <div className="container__about--card">
          <h2>Viktória Andraščíková</h2>
          <img className="photo" src={Viktoria} alt="fotka Viktória" />{' '}
          <div className="socials">
            <a
              href="https://www.instagram.com/viktoradelaville/"
              target="_blank"
            >
              <img className="icon" src={instagram} alt="instagram ikona" />{' '}
              viktoradelaville
            </a>

            <a href="#">
              <img className="icon" src={email} alt="email ikona" />
              viktoria.andrascikova@gmail.com
            </a>

            <a href="https://github.com/ViktoriaAndr" target="_blank">
              <img className="icon" src={github} alt="github ikona" />
              ViktoriaAndr
            </a>
          </div>
          <p className="card__description">
            Viktória momentálne pracuje v Saas firme na podpore, kde rieši
            požiadavky a problémy s firemnou aplikáciou na projektový manažment
            s klientami a partnerskými firmami z celého sveta. Okrem
            programovacích jazykov sa rada hrabe v jazykoch cudzích. Filmy a
            youtube bez titulkov a porozumenie knihám v originále sú veľkou
            motiváciou. Jej obľúbená forma relaxu je piknik v parku s príjemnou
            spoločnosťou a dobrou knihou.{' '}
          </p>
        </div>

        <div className="container__about--card">
          <h2>Zuzana Červínová</h2>
          <img className="photo" src={Zuzana} alt="fotka Zuzana" />{' '}
          <div className="socials">
            <a href="https://www.instagram.com/nazuzunana/" target="_blank">
              <img className="icon" src={instagram} alt="instagram ikona" />{' '}
              @nazuzunana
            </a>

            <a href="#">
              <img className="icon" src={email} alt="email ikona" />
              zuzankacervinova@gmail.com
            </a>

            <a href="https://github.com/nazuzunana" target="_blank">
              <img className="icon" src={github} alt="github ikona" />
              nazuzunana
            </a>
          </div>
          <p className="card__description">
            Zuzana pracuje na pozici Arts Manager v aukčním domě, kde se věnuje
            především organizaci online uměleckých aukcí.
            <br />
            <br /> Po dokončení Digitální akademie by se ráda dále rozvíjela v
            oboru a uplatnila se jako junior front-end web developer. <br />
            <br />
            Píše krátké básničky na{' '}
            <a href="https://nazuzunana.com/" target="_blank">
              nazuzunana.com
            </a>{' '}
          </p>
        </div>
      </div>
      <div className="card__authors">
        <h2>Společně o nás</h2>
        <p>bobík</p>
      </div>
    </div>
  );
};

export default About;
