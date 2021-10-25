//
export const SearchIt = (value) => {
  return async (dispatch, getState) => {
    let query = await getState();
    if (query.search.query.length > 2) {
      dispatch({
        type: "SEARCH_LOADING",
        payload: true,
      });
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            query.search.query
        );
        let result = await response.json();
        if (response.ok) {
          //   console.log(result);
          dispatch({
            type: "SEARCH_IT",
            payload: result.data,
          });
          dispatch({
            type: "SEARCH_LOADING",
            payload: false,
          });
        } else {
          dispatch({
            type: "SEARCH_LOADING",
            payload: false,
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
};
//
export const setQuery = (value) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_SEARCH",
      payload: value,
    });
    if (value.length === 0) {
      dispatch({
        type: "SEARCH_CLEAN_UP",
        payload: value,
      });
    }
  };
};
export const cleanUp = (value) => {
  return async (dispatch) => {
    dispatch({
      type: "SEARCH_CLEAN_UP",
      payload: value,
    });
  };
};
