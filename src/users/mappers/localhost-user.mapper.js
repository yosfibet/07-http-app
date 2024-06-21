import { User } from '../models/user';

/**
 * 
 * @param {Like<User>} localhostUser // algo que luzca como un usuario
 * @returns {User} // Una instancia de nuestro usuario
 */
export const localhostUserToModel = ( localhostUser ) => {

  const {
    avatar,
    balance,
    first_name,
    gender,
    id,
    isActive,
    last_name,
  } = localhostUser;

return new User ({
  avatar,
  balance,
  firstName: first_name,
  gender,
  id,
  isActive,
  lastName: last_name,
});

}
