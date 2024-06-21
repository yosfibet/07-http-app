import usersStore from '../../store/users-store';
import './render-table.css';


let table;

const createTable = () => { // no la exportamos proque no va a salir de aquí
  const table = document.createElement('table');
  const tableHeaders = document.createElement('thead'); // encabezados de la tabla
  tableHeaders.innerHTML = `
    <tr>
      <th>#ID</th>
      <th>balance</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Active</th>
      <th>Actions</th>
      
    </tr>
  `;

  const tableBody = document.createElement('tbody');
  table.append( tableHeaders, tableBody );
  return table;

}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = ( element ) => {

  const users = usersStore.getUsers(); // para renderizar los users tal y como están en el store

  if ( !table ) {
    table = createTable();
    element.append( table );

    // TODO: Listeners a la tabla
  }

  let tableHTML = '';
  users.forEach( user => {
    // html interno a la tabla: es lo que cambia
    tableHTML += ` 
      <tr>
        <td>${ user.id }</td>
        <td>${ user.balance }</td>
        <td>${ user.firstName }</td>
        <td>${ user.lastName }</td>
        <td>${ user.isActive }</td>        
        <td>
          <a href="#/" data-id="${ user.id }">Select</a>
          |
          <a href="#/" data-id="${ user.id }">Select</a>
        </td>      
      </tr>
    
    `
    
  });

  table.querySelector('tbody').innerHTML = tableHTML;




}




