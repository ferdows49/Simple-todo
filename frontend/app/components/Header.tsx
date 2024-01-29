"use client";

import React from "react";
import TextField from "@mui/material/TextField";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 mx-4 border-b">
      <h1 className="text-lg font-bold">Todos</h1>
      <div className="flex">
        <TextField
          className="me-2"
          placeholder="Enter task name.."
          variant="outlined"
          size="small"
        />
        <button className="bg-blue-700 px-4 py-1 rounded-md text-white">
          Add
        </button>
      </div>
    </div>
  );
};

export default Header;
