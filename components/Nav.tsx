"use client";

import { useLayoutEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode

  useLayoutEffect(() => {
    const el = document.documentElement;
    el.classList.add("dark"); // Ensure dark mode is set by default
    setIsDarkMode(true);
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div className="flex-1">
        <span className="text-lg font-semibold">Daisy Medic</span>
      </div>
      <div className={"flex items-center gap-1"}>
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};
