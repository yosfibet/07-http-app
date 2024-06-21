
/**
 * @returns {Promise<object>} quote information
 */
const fetchQuote = async() => {

  const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
  const data = await res.json();

  console.log(data[0]);
  return data[0]; // extraemos el primer elemento del arreglo.

}




/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadApp = async( element ) => { 

  document.querySelector('#app-tittle').innerHTML = 'Breaking Bad App';
  element.innerHTML = 'Loading...';
  // const quote = await fetchQuote();

  const quoteLabel = document.createElement('bloqkquote');
  const authorLabel = document.createElement('h3');
  const nextQuoteButton = document.createElement('button');
  nextQuoteButton.innerText = 'Next Quote';

  const renderQuote = ( data ) => {  
    quoteLabel.innerHTML = data.quote;
    authorLabel.innerHTML = data.author;
    element.replaceChildren( quoteLabel, authorLabel, nextQuoteButton );
  }

  // Tarea realizada:
  nextQuoteButton.addEventListener('click', async() => {
    element.innerHTML = 'Loading...';
    const quote = await fetchQuote();
    renderQuote( quote );
    
  });

  fetchQuote()
  // .then ( (data) => renderQuote(data) );
  .then ( renderQuote ); // es lo mismo que arriba


}


// añadir listener (OK)
// al tocar botón -> traer nueva quote (OK)
// en el proceso de petición, bloquear boton (xxx), 
// eliminar la quote
// mostrar loading en el botón
// cuando se haga la petición -> mostrar la nueva quote en pantalla
//




