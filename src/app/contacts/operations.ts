import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { Contact} from "./contactsSlice";

export type MyKnownError = {
  message: string;
  description: string;
  code: number | undefined;
};

export const fetchContacts = createAsyncThunk<Contact[], undefined, {rejectValue: MyKnownError}>(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as MyKnownError);
    }
  }
);

export const addContact = createAsyncThunk<Contact, Contact, {rejectValue: MyKnownError}>(
  "contact/addContact",
  async({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", { name, number });
      toast.success("Contact successfully added!", { position: "top-right" });
      return data as Contact;
    } catch (error) {
      toast.error("Error while adding!", { position: "top-right" });
      return thunkAPI.rejectWithValue(error as MyKnownError);
    }
  }
);

export const deleteContact = createAsyncThunk<Contact, string, {rejectValue: MyKnownError}>(
  "contact/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      toast.success("Deleted successfully!", { position: "top-right" });
      return data as Contact;
    } catch (error) {
      toast.error("Delete error!", { position: "top-right" });
      return thunkAPI.rejectWithValue(error as MyKnownError);
    }
  }
);

export const updateContact = createAsyncThunk<Contact, Contact, {rejectValue: MyKnownError}>(
  "contact/update",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success("Updated successfully!", { position: "top-right" });
      return data as Contact;
    } catch (error) {
      toast.error("Update error!", { position: "top-right" });
      return thunkAPI.rejectWithValue(error as MyKnownError);
    }
  }
);
