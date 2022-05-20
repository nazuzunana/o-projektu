import React from 'react';
import Viktoria from './img/Viktoria.png';
import Zuzana from './img/zuzana.jpg';
import './style.css';

const About = () => {
  return (
    <div className="container__about">
      <div className="container__about--card">
        <h2>Viktória Andraščíková</h2>
        <img className="photo" src={Viktoria} alt="fotka Viktória" />{' '}
        <div className="socials">
          <a href="https://www.instagram.com/viktoradelaville/" target="_blank">
            <img></img>@viktoradelaville
          </a>
          <a href="#">viktoria.andrascikova@gmail.com</a>
          <a href="https://github.com/ViktoriaAndr" target="_blank">
            github.com/ViktoriaAndr
          </a>
        </div>
        <p className="card__description">
          Viktória momentálne pracuje v Saas firme na podpore, kde rieši
          požiadavky a problémy s firemnou aplikáciou na projektový manažment s
          klientami a partnerskými firmami z celého sveta. Okrem programovacích
          jazykov sa rada hrabe v jazykoch cudzích. Filmy a youtube bez titulkov
          a porozumenie knihám v originále sú veľkou motiváciou. Jej obľúbená
          forma relaxu je piknik v parku s príjemnou spoločnosťou a dobrou
          knihou.{' '}
        </p>
      </div>

      <div className="container__about--card">
        <h2>Zuzana Červínová</h2>
        <img className="photo" src={Zuzana} alt="fotka Zuzana" />{' '}
        <div className="socials">
          <a href="https://www.instagram.com/nazuzunana/" target="_blank">
            <img></img>@viktoradelaville
          </a>
          <a href="#">zuzankacervinova@gmail.com</a>
          <a href="https://github.com/nazuzunana" target="_blank">
            github.com/nazuzunana
          </a>
        </div>
        <p className="card__description">
          Viktória momentálne pracuje v Saas firme na podpore, kde rieši
          požiadavky a problémy s firemnou aplikáciou na projektový manažment s
          klientami a partnerskými firmami z celého sveta. Okrem programovacích
          jazykov sa rada hrabe v jazykoch cudzích. Filmy a youtube bez titulkov
          a porozumenie knihám v originále sú veľkou motiváciou. Jej obľúbená
          forma relaxu je piknik v parku s príjemnou spoločnosťou a dobrou
          knihou.{' '}
        </p>
      </div>
      <div className="card__authors">
        <h2>Společně o nás</h2>
        <p>Niečo o nás spoločne sem.</p>
      </div>
    </div>
  );
};

export default About;
