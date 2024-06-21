import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 * @param { () => void } callback
 */
export const renderAddButton = ( element ) =>{
// export const renderAddButton = ( element, callback ) =>{ // para delegar evento click a la llamada de la función padre

  const fabButton = document.createElement('button');
  fabButton.innerText = '+';
  fabButton.classList.add('fab-button');
  // fabButton.className='fab-button'; // funciona igual al de arriba. mejor la de arriba

  element.append( fabButton );


  // TODO:
  fabButton.addEventListener('click', () => {
    showModal();
  })

  // // TODO:
  // fabButton.addEventListener('click', () => {
  //   if ( !callback ) return;

  //   callback();
  //   throw Error('no implementado');
  // })


}
