import { RESULTS_PER_PAGE } from "../config/constants.js";
import { getState, setState } from "../state.js";




// Pagination logic

function paginate(page = getState('page') || 1) {
    const results = getState('results').slice((page - 1) * RESULTS_PER_PAGE, RESULTS_PER_PAGE * page);
    const pages = Math.ceil(getState('results').length / RESULTS_PER_PAGE);
    console.log({ results, page, pages });
    return { results, page, pages }
  }
  
  function changePage(page, render) {
    const resultsData = paginate(page)
    if(resultsData.page === 0 || resultsData.page > resultsData.pages) return;
    setState('page', page)

    return render(resultsData)
  }

 


  export {paginate,changePage }