import React from 'react'
import Card from './Card';
import img1 from '../assets/images/javascript.png';
import img2 from '../assets/images/css.png';
import img3 from '../assets/images/html.png';
import img4 from '../assets/images/react.png'
import img5 from '../assets/images/react-bootstrap.png';

const Cards = () => {
  const cards = [
    {id:1,url:'https://lenguajejs.com/javascript/',image: img1, tittle:'Javascript', text: 'Javascript es un lenguaje de programación, o lo que es lo mismo, un mecanismo con el que podemos decirle a nuestro navegador que tareas debe realizar, en que orden y cuantas veces'},
    {id:2,url:'https://lenguajecss.com/css/',image: img2, tittle:'Css', text: 'Si te gusta el mundo del diseño web , probablemente ya habrás escuchado el término CSS. Se trata de una tecnología utilizada para dotar de cualidades visuales y estéticas a una página web'},
    {id:3,url:'https://lenguajehtml.com/html/',image: img3, tittle:'Html', text: 'Html son las siglas de HyperText Markup Language (Lenguaje de marcas de hipertexto), o lo que es lo mismo, un lenguaje de etiquetas que permite incluir o hacer referencia a todo tipo de información.'},
    {id:4,url:'https://es.reactjs.org',image: img4, tittle:'React', text: 'React es una biblioteca Javascript React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes'},
    {id:5,url:'https://react-bootstrap.github.io',image: img5, tittle:' React Bootstrap', text: 'Es sin duda el framework CSS más utilizado del mundo, creado por la gente de Twitter. ... Te ofrece multitud de componentes con los estilos de Bootstrap pero basados en React listos para utilizar y conseguir una interfaz atractiva instantáneamente'},
    {id:6,url:'https://lenguajejs.com/javascript/',image: img1, tittle:'Javascript', text: 'Javascript es un lenguaje de programación, o lo que es lo mismo, un mecanismo con el que podemos decirle a nuestro navegador que tareas debe realizar, en que orden y cuantas veces'},
  ]
  return (
    <div className='container d-flex justify-content-center align-items-center h-100 '>
      <div className="row gap-mt-2">
        {
          cards.map((card)=>(
            <div className="col-md-4 pt-2" key={card.id}>
              <Card title tittle={card.tittle} image={card.image} text={card.text} url={card.url}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cards;