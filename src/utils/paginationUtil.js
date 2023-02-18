import { RESULTS_PER_PAGE } from "../config/constants.js";


// State

const state = {
    allResults : [],
    currentPage: 1,
    title:'',
    previousPage: '',
}

// Pagination logic

function paginate(allResults, page = state.currentPage) {
    const results = state.allResults.slice((page - 1) * RESULTS_PER_PAGE, RESULTS_PER_PAGE * page);
    const pages = Math.ceil(state.allResults.length / RESULTS_PER_PAGE);
    return { results, page, pages }
  }
  
  function changePage(page, render) {
    const resultsData = paginate(state.allResults, page)
    if(resultsData.page === 0 || resultsData.page > resultsData.pages) return;
    state.currentPage = page;

    return render(resultsData)
  }

 


  export {paginate,changePage,state }