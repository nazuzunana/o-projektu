import React from 'react';
import instagram from './instagram.svg';

const Kontakt = () => {
  return (
    <div className="card_contact">
      <div className="author_contact">
        <h3>Viktória</h3>
        <ul class="odkazy">
          <li class="odkaz">
            <img src={instagram}></img>
            <a
              href="https://www.instagram.com/viktoradelaville/"
              target="_blank"
            >
              instagram.com/viktoradelaville
            </a>
          </li>
          <li class="odkaz">viktoria.andrascikova@gmail.com</li>
          <li class="odkaz">
            <a href="https://github.com/ViktoriaAndr" target="_blank">
              github.com/ViktoriaAndr
            </a>
          </li>
        </ul>
      </div>
      <div className="author_contact">
        <h3>Zuzana</h3>
        <ul class="odkazy">
          <li class="odkaz">
            <img src={instagram}></img>
            <a
              href="https://www.instagram.com/viktoradelaville/"
              target="_blank"
            >
              instagram.com/viktoradelaville
            </a>
          </li>
          <li class="odkaz">viktoria.andrascikova@gmail.com</li>
          <li class="odkaz">
            <a href="https://github.com/ViktoriaAndr" target="_blank">
              github.com/ViktoriaAndr
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Kontakt;

// v svojom dive pridaj info
