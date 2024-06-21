
// creación y actualizacón en un mismo archivo

import { User } from '../models/user.js';

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async( userLike ) => {

  const user = new User ( userLike ); // genera la instancia de usuario, manda userLike al constructor. userLike es algo que luce como un usuario
  
  // TODO: aqui falta un mapper

  if ( user.id ) {
    throw 'No implementada la actualización' // si tenemos un id -> si queremos actualizarlo o no
    return;
    
  }
  
  const updatedUser = await createUser ( user ); // si no existe -> creamos
  // return await createUser( user ); //es lo mismo que abajo 
  return updatedUser;

}


/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async( user ) => {

  const url = `${ import.meta.env.VITE_BASE_URL }/users`;
  const res = await fetch ( url, {
    method: 'POST', // Si es petición POST, hay que indicarlo (para las GET no hacía falta)
    body: JSON.stringify( user ), // el body tiene que ir serializado como un string.
    headers: {
      'Content-Type': 'application/json'
    }    
  });

  const newUser = await res.json(); // usuario creado, listo para regresarlo
  console.log({ newUser });

  return newUser;


}


