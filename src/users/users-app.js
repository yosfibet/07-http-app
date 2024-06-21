import { renderAddButton } from './presentation/render-add-button/render-add-button';
import { renderButtons } from './presentation/render-buttons/render-buttons';
import { renderModal } from './presentation/render-modal/render-modal';
import { renderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store';
import { saveUser } from './use-cases/save-user';


/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async( element ) => {

  element.innerHTML = 'Loading...';
  await usersStore.loadNextPage();
  element.innerHTML = '';  // desaparece el loading porque ya tenemos data

  renderTable ( element );
  renderButtons( element );
  renderAddButton( element );
  // renderAddButton( element, () => console.log('desde el padre') ); // delegando el evento click del botón a la llamada desde aquí
  renderModal( element, async( userLike ) => {
    const user = await saveUser( userLike ); // userLike es el producto de renderModal
    usersStore.onUserChanged( user ); // una vez hecho, actualizamos el store
    renderTable();
  }
 );


  // console.log( usersStore.getUsers() );

}


