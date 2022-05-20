import React from 'react';
import './style.css';

const Project = () => {
  return (
    <div className="container__project">
      <h2>Dobročinné aukce</h2>
      <div className="container__project--description">
        <p>
          Vytvoříme webovou platformu, na kterou bude možné na základě e-mailové
          domluvy vkládat různé jedinečné předměty na dražbu. Výdělek z dražeb
          bude použit na dobročinné účely. Dražitelé se budou moci registrovat
          pomocí formuláře a po potvrzení totožnosti přihazovat na předměty v
          aukcích ve stanoveném termínu. Rády bychom tuto platformu poskytly
          nějaké neziskové organizaci, která by ji upravenou a doladěnou mohla
          reálně využívat pro vlastní účely.
        </p>
      </div>
    </div>
  );
};

export default Project;
