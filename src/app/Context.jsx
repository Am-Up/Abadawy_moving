"use client";
import { createContext, useState } from "react";

export const AppContext = createContext();

export default function Context({ children }) {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  return (
    <AppContext.Provider value={{ open, setOpen, setMenu, menu }}>
      {children}
    </AppContext.Provider>
  );
}
