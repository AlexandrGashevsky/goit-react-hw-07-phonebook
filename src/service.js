import axios from "axios";

axios.defaults.baseURL = `http://localhost:3000`;

export function fetchContacts() {
  return axios.get(`/contacts`);
}

export function addContact(contact) {
  return axios.post(`/contacts`, contact);
}

export function deleteContacts(id) {
  return axios.delete(`/contacts/${id}`);
}
