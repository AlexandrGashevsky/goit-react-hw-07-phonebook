import axios from "axios";

axios.defaults.baseURL = `https://62dfdf2598dd9c9df608c50a.mockapi.io/api/contacts-go-it-hw-7`;

export function fetchContacts() {
  return axios.get(`/contacts`);
}

export function addContact(contact) {
  return axios.post(`/contacts`, contact);
}

export function deleteContacts(id) {
  return axios.delete(`/contacts/${id}`);
}
