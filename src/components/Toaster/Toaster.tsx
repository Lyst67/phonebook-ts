import toast, { Toaster } from "react-hot-toast";
// import React from 'react';

const notify = () => toast("Here is your toast.");

export const Toster = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
