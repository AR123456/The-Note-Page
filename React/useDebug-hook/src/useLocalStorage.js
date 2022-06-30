import { useState, useEffect, useCallback, useDebugValue } from "react";

const useLocalStorage = () => {
  const [value, setValue] = useState(() => {
    //
  });
  // use debug goes here
  useDebugValue({ key, value });

  useEffect(() => {
    //
  }, [key, value, localStorage]);
  const remove = useCallback(() => {
    //
  }, []);
  return (
    <div>
      <h1>Use local storage </h1>
    </div>
  );
  //   return (
  //     <div>
  //       <h1>Use local storage </h1>
  //     </div>
  //   );
  return [value, setValue, remove];
};

export default useLocalStorage;
