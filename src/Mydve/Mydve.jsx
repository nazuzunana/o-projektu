import React from 'react';
import Viktoria from '../Mydve/img/Viktoria.png';
import Zuzana from '../Mydve/img/zuzana.jpg';

const Mydve = () => {
  return (
    <div className="cards_container">
      <h1>Autorky projektu</h1>
      <div className="cards">
        <div className="card_person">
          <h2>Viktória Andraščíková</h2>
          <img className="author_photo" src={Viktoria} alt="fotka Viktória" />
          <p className="author_description">
            Viktória momentálne pracuje v Saas firme na podpore, kde rieši
            požiadavky a problémy s firemnou aplikáciou na projektový manažment
            s klientami a partnerskými firmami z celého sveta. Okrem
            programovacích jazykov sa rada hrabe v jazykoch cudzích. Filmy a
            youtube bez titulkov a porozumenie knihám v originále sú veľkou
            motiváciou. Jej obľúbená forma relaxu je piknik v parku s príjemnou
            spoločnosťou a dobrou knihou.{' '}
          </p>
        </div>

        <div className="card_person">
          <h2>Zuzana Červínová</h2>
          <img className="author_photo" src={Zuzana} alt="fotka Zuzana" />
          <p className="author_description">
            Viktória momentálne pracuje v Saas firme na podpore, kde rieši
            požiadavky a problémy s firemnou aplikáciou na projektový manažment
            s klientami a partnerskými firmami z celého sveta. Okrem
            programovacích jazykov sa rada hrabe v jazykoch cudzích. Filmy a
            youtube bez titulkov a porozumenie knihám v originále sú veľkou
            motiváciou. Jej obľúbená forma relaxu je piknik v parku s príjemnou
            spoločnosťou a dobrou knihou.{' '}
          </p>
        </div>
      </div>
      <div className="card_us">
        <h2>Společně o nás</h2>
        <>Niečo o nás spoločne sem.</>
      </div>
    </div>
  );
};

export default Mydve;
