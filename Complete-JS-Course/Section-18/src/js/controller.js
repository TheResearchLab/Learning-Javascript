import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './views/config.js';

import 'core-js/stable';
import 'regenerator-runtime';






// // https://forkify-api.herokuapp.com/v2

// ///////////////////////////////////////

// keep the state for the browser
// if (module.hot) { // coming from parcel
//   module.hot.accept();
// }

const controlRecipes = async function() {
  try{
   const id = window.location.hash.slice(1); // this gets the hash
   //console.log(id);

   if(!id) return;
   recipeView.renderSpinner();
   //console.log(id)
   
 // 0) results view for selected recipe - highlights the item
  resultsView.update(model.getSearchResultsPage())
  
  // 1) updating bookmarks view 
  bookmarksView.update(model.state.bookmarks);
  
  // 2) Loading
  await model.loadRecipe(id);
  
  
  // 3) rendering recipe
  recipeView.render(model.state.recipe);
  

  } catch(err) {
      //console.error(err);
      recipeView.renderError()
  }

}


const controlSearchResults = async function () {
 try {

  

   // 1) get search query
   const query = searchView.getQuery();
   if(!query) return;

   // render spinner
    resultsView.renderSpinner();

   // 2) Load search results
    await model.loadSearchResults(query)

    // 3) render results
    resultsView.render(model.getSearchResultsPage());

    // 4) render pagination buttons
    paginationView.render(model.state.search)
    console.log(model.state.search)
    //console.log()
  } catch(err) {
      console.log(err);
  }
};

//controlSearchResults();

//controlRecipes();

const controlPagination = function(goToPage) {
  console.log('Page controller');
   // 3) render new results
   resultsView.render(model.getSearchResultsPage(goToPage));

   // 4) render new pagination buttons
   paginationView.render(model.state.search)
}

const controlServings = function(newServings) {
  // update the recipe servings (in state data)
  model.updateServings(newServings)

  // update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);

}

const controlAddBookmark = function() {
  
  // add or remove bookmarks
  if(!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }

  // update recipe view
  recipeView.update(model.state.recipe);

  // render bookmarks
  bookmarksView.render(model.state.bookmarks)
}

const controlBookmarks = function() {
  // upload new recipe data
  bookmarksView.render(model.state.bookmarks)
}

const controlAddRecipe = async function(newRecipe) {
  try{
    // show loading spinner
    addRecipeView.renderSpinner()
    
    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // render recipe
  recipeView.render(model.state.recipe)

  // success message
    addRecipeView.renderMessage();

  // render bookmark view
  bookmarksView.render(model.state.bookmarks);

  // Change URL ID
  window.history.pushState(null,'',`#${model.state.recipe.id}`);
  //window.history.back() // automatically go back to last page

  // close form window
  setTimeout(function() {
    addRecipeView.toggleWindow()
  },MODAL_CLOSE_SEC*1000);

  } catch(err) {
    console.error('💥💥',err);
    addRecipeView.renderError(err.message);
  }

}

const init = function() {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServing(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  
}


init();




// window.addEventListener('hashchange',controlRecipes);
// window.addEventListener('load',controlRecipes);
