import { useRef } from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../../store/data-slice";
import styles from "./Search.module.css";

const Search = () => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const handleChange = () => {
    const term = inputRef.current.value.trim();
    dispatch(dataActions.filterData(term));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };
  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          placeholder="Search for a country..."
          ref={inputRef}
          onKeyUp={handleChange}
        ></input>
      </form>
    </div>
  );
};

export default Search;
