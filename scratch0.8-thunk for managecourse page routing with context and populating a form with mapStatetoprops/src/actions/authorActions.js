
import * as types from './actionTypes';
import AuthorAPI from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors){
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}



export function loadAuthors(){
  return dispatch => {
    return AuthorAPI.getAllAuthors().then(authors =>{
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error=>{
        throw error;
    });

  };

}
