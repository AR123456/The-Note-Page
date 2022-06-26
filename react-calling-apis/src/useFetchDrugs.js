// useReducer to handle state , useEffect to re load when something on page changes
import { useReducer, useEffect } from "react";
import axios from "axios";

///////////// this is an object that defines our actions so we can ref them later
//( this can is often is put into a seperate file )
const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};
/// this is a url to use in developemnt to get round cors error
const URL_FOR_DEV = "https://api.allorigins.win/raw?url=";
//   https://api.allorigins.win/raw?url=

let search = "Lasix";
// const BASE_URL =
//   URL_FOR_DEV +
//   "https://api.fda.gov/drug/label.json?search=openfda.brand_name:" +
//   search +
//   "&limit=1";
const BASE_URL =
  "https://api.allorigins.win/raw?url=https://api.fda.gov/drug/label.json?search=openfda.brand_name:" +
  search +
  "&limit=1";
// //////////////this reducer function takes in state and action
// reducer will be called every time we call dispatch
// and dispatch, whatever we pass to it is populated inside
// the action variable.  State is whatever the current state
// of the application is
function reducer(state, action) {
  // swithch statement that makes user of actions
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      // when making a new request set loading true and clear out whatever drugs were in state
      return { loading: true, drugs: [] };
    case ACTIONS.GET_DATA:
      // spread everything that is in current state into new state, loading false
      // and pass jobs in on the payload of our action and set that inside of our
      // action.getdata
      //jobs too action.payload.jobs
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      // pass the error object in, clear out jobs if there is an error
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    // if none of the above just return our current state
    default:
      return state;
  }
}
const useFetchDrugs = (params) => {
  // useReducer takes in the reducer function and initial state - in this case
  // an object that is empty array of jobs
  const [state, dispatch] = useReducer(reducer, { drugs: [], loading: true });
  // useEffect hook to controle when state updates
  useEffect(() => {
    // using this so that an axios request is not sent for every keystroke in the search box
    // createing the cancelToken
    const cancelToken = axios.CancelToken.source();
    // in dispatch, by convention
    // types are actions, payloads is the data for the type
    // frist   state - set state to loading state
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    // second call axios  - get data
    axios
      .get(BASE_URL, {
        // using the cancel token here
        cancelToken: cancelToken.token,
        //pass in some params
        // markdown true will make descriptions appear in markdow so  easier to work with
        // this may not be needed for the FDA API
        params: { markdown: true, ...params },
      })
      // using .then syntax here vs async await which could have been used
      .then((res) => {
        //res.data  is our response back from the API
        //put it into our get data dispatch
        // we got the data,lets save it to state by calling the get data action
        dispatch({ type: ACTIONS.GET_DATA, payload: { drugs: res.data } });
      })
      // catch the error
      .catch((e) => {
        // we are intentionally canceling the token so do not treat like an error, just return
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
    // function to clean up old code
    return () => {
      //this will run any time params is changed (or if other things were being passed into the items in the [])
      // cancel the old axios request - be sure to put a check in the catch so the when this is done we do not dispatch an error
      cancelToken.cancel();
    };
    // this use effect will run any time a params changes
  }, [params]);

  // just returning a static object
  //   return {
  //     drugs: [],
  //     loading: false,
  //     error: false,
  //   };
  /////// here now returning state
  return state;
  //   (
  //     <div>
  //       <h2>Here are the drugs</h2>
  //     </div>
  //   );
};

export default useFetchDrugs;
