import { useReducer, useEffect } from "react";
import axios from "axios";

const useFetchDrugs = (params) => {
  // just returning a static object
  return {
    drugs: [],
    loading: false,
    error: false,
  };
  //   (
  //     <div>
  //       <h2>Here are the drugs</h2>
  //     </div>
  //   );
};

export default useFetchDrugs;
