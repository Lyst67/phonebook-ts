import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { Contact} from "./contactsSlice";

export type KnownError = {
  message: string;
  description: string;
  code: number | undefined;
};

export const fetchContacts = createAsyncThunk<Contact[], unknown, {rejectValue: KnownError}>(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as KnownError);
    }
  }
);

export const addContact = createAsyncThunk<Contact, Contact, {rejectValue: KnownError}>(
  "contact/addContact",
  async({ name, number }, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", { name, number });
      toast.success("Contact successfully added!", { position: "top-right" });
      return data as Contact;
    } catch (error) {
      toast.error("Error while adding!", { position: "top-right" });
      return thunkAPI.rejectWithValue(error as KnownError);
    }
  }
);

export const deleteContact = createAsyncThunk<Contact, string, {rejectValue: KnownError}>(
  "contact/delete",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      toast.success("Deleted successfully!", { position: "top-right" });
      return data as Contact;
    } catch (error) {
      toast.error("Delete error!", { position: "top-right" });
      return thunkAPI.rejectWithValue(error as KnownError);
    }
  }
);

export const updateContact = createAsyncThunk<Contact, Contact, {rejectValue: KnownError}>(
  "contact/update",
  async ({ id, name, number }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      toast.success("Updated successfully!", { position: "top-right" });
      return data as Contact;
    } catch (error) {
      toast.error("Update error!", { position: "top-right" });
      return thunkAPI.rejectWithValue(error as KnownError);
    }
  }
);
