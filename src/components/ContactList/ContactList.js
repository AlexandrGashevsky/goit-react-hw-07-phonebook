import React from "react";
import contactListStyles from "./ContactList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/operation";
import { getFilteredContacts } from "../../redux/selectors";

export default function ContactList() {
  const filterContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={contactListStyles.list}>
      {filterContacts.map(({ id, name, number }) => (
        <li className={contactListStyles.item} key={id}>
          <p className={contactListStyles.name}>
            {name}: {number}
          </p>
          {
            <button
            className={contactListStyles.button}
              data-key={id}
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(id))}
            >
              Delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
}
