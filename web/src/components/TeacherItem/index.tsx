import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
        <header>
          <img src="https://avatars3.githubusercontent.com/u/49621396?s=460&u=287b710177f3025e48914f95368aa057eff6db5b&v=4" alt="Victor Wildner"/>
          <div>
            <strong>Victor Wildner</strong>
            <span>Química</span>
          </div>
        </header>

        <p>
          Entusiasta das melhores tecnologias de química avançada.
          <br /><br />
          Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
        </p>

        <footer>
          <p>
            Preço/Hora 
            <strong>R$ 80.00</strong>
          </p>
          <button type="button">
            <img src={whatsappIcon} alt="WhatsApp"/>
            Entrar em contato
          </button>
        </footer>
      </article>
  )
}

export default TeacherItem;