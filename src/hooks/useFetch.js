import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

const useFetch = () => {
  const dispatch = useDispatch();
  const fetchData = useCallback(
    async (url) => {
      dispatch(dataActions.updateLoading(true));
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const result = await response.json();
        dispatch(dataActions.updateData({ result }));
        dispatch(dataActions.updateLoading(false));
        dispatch(dataActions.updateError(false));
      } catch (err) {
        dispatch(dataActions.updateError({ err }));
        dispatch(dataActions.updateLoading(false));
      }

      return () => {};
    },
    [dispatch]
  );

  return { fetchData };
};

export default useFetch;
