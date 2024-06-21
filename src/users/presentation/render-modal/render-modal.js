import modalHTML from './render-modal.html?raw';
import './render-modal.css';



// variable a nivel de módulo. Todas funciones dentro de este módulo pueden acceder a él
// se previenen accesos desde el exterior, se protege su estado de modificaciones externas
// permite reutilizar  la referencia al modal en diferntes partes del módulo sin neceisad de pasarla como parámetro a cada función.
// 
let modal, form; // ya que queremos hacer referencia a él en varios lugares

// TODO:
export const showModal = () => {
  modal?.classList.remove('hide-modal');

}

export const hideModal = () => {
  modal?.classList.add('hide-modal');
  form?.reset(); // tomamos el formulario ( ? -> si existe ) y reseteamos

}


/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = ( element, callback ) => {

  if ( modal ) return; // si existe no hacemos nada, sino -> construimos todo

  modal = document.createElement('div');
  modal.innerHTML = modalHTML;
  // modal.classList.add() lo vamos a hacer abajo de la otra forma
  modal.className = 'modal-container hide-modal';
  form = modal.querySelector('form');


  modal.addEventListener('click', ( event ) => {
    if ( event.target.className === 'modal-container' ) {
      hideModal();
    }    
  });

  // vamos a escuchar cuando se POSTea el FORMULARIO. queremos que no envíe mediante refresco (desfasado, ya no se usa)
  form.addEventListener ('submit', async( event ) => {
    event.preventDefault(); // para evitar su comportamiento por defecto. ya no se usa la forma clásica, por eso hacemos esto.

    const formData = new FormData( form );
    const userLike = {}; // creamos un objeto vacío para usarlo


    // transformando campos:
    // el "balance" es string -> conversión a número.
    for ( const [key, value] of formData ) {
      if ( key === 'balance' ) {
        userLike[ key ] = +value;
        console.log({userLike}); // +value <- tranformar a número. sería igual a esto -> Number (value)
        continue;  // "continue" -> acabar iteración y seguir con siguiente iteración del ciclo. "Return" nos sacaría de la función <- No queremos eso
      }

      // transformando el check -> de on:off a true:false
      if ( key === 'isActive' ) {
        userLike[key] = (value === 'on' ) ? true : false;
        continue;
      }

      userLike[ key ] = value;
      // TODO: guardar usuario
      await callback( userLike );      
      
    }
    
    console.log(userLike);
    hideModal();

  });

  element.append( modal );




}

