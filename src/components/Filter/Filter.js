import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/actions";
import { getFilter } from "../../redux/selectors";
import filterStyles from "./Filter.module.css";
export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={filterStyles.label} name="filter" htmlFor="filter" value={filter}>
      Find contacts by name
      <input
        className={filterStyles.inputFilter}
        value={filter}
        type="text"
        id="filter"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}
