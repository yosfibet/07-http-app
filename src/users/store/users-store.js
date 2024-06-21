
// No lo vamos a exportar para que nadie fuera de este state lo pueda manipular

import { loadUsersByPage } from '../use-cases/load-users-by-page';

const state = {
  currentPage: 0,
  users: [],

}


const loadNextPage = async() => {
  const users = await loadUsersByPage( state.currentPage + 1);
  if ( users.length === 0 ) return;

  state.currentPage += 1;
  state.users = users;

}


const loadPreviousPage = async() => {
  if ( state.currentPage === 1) return;
  const users = await loadUsersByPage ( state.currentPage - 1 );

  state.users = users; // actualizamos el nuevo state
  state.currentPage -= 1; // actualizamos el nuevo state
}


const onUserChanged = () => {
  throw new Error('Not implemented');
  
}


// TODO:
const reloadPage = async() => {
  throw new Error('Not implemented');

}


export default {
  loadNextPage,
  loadPreviousPage,
  onUserChanged,
  reloadPage,

  /* para acceder al estado actual (state) de manera controlada
  proporcionando una interfaz para obtener datos del estado sin exponer el objeto state fuera del módulo */ 
  /**
   * 
   * @returns {User[]}
   */
  getUsers: () => [...state.users], // retorna una copia del arreglo users del estado

  /**
   * 
   * @returns {Number}
   */
  getCurrentPage: () => state.currentPage, // retorna el valor acutal del currentPage del estado

}






