import { useEffect, useReducer } from "react";
import axios from "axios";
const initialState = {
  item: [],
  isLoading: false,
  isError: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "FETCH":
      return {
        ...state,
        item: action.payload.data,
        isLoading: false,
        isError: false,
      };
    case "ERROR":
      return { ...state, isError: true };
    case "CLEAR_ALL":
      return { ...state, item: [] };
    case "REMOVE":
      return {
        ...state,
        item: state.item.filter((i) => i.id !== action.payload.id),
      };
    default:
      return state;
  }
};
const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = async () => {
    dispatch({ type: "LOADING" });
    try {
      const { data } = await axios(url);
      dispatch({ type: "FETCH", payload: { data } });
    } catch (error) {
      console.log(error.response?.status);
      dispatch({ type: "ERROR" });
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
    item: state.item,
    reload: fetchData,
    isLoading: state.isLoading,
    isError: state.isError,
    ClearAll: () => {
      dispatch({ type: "CLEAR_ALL" });
    },
    Remove: (id) => {
      dispatch({ type: "REMOVE", payload: { id } });
    },
  };
};

export default useFetch;
