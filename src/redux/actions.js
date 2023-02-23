import { ADD_CONTACT, DELETE_CONTACT } from "./types";
import { nanoid } from "nanoid";
import { type } from "@testing-library/user-event/dist/type";

export  const addContact = payload => {
  return{
    type: ADD_CONTACT,
    payload:{
      id: nanoid(),
      ...payload,
    }
  }
}

export const deleteContact = payload => {
  return{
    type: DELETE_CONTACT,
    payload,
  }
}
