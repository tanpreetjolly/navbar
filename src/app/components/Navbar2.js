"use client";
import "material-symbols";
import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";

const Navbar2 = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="relative">
      <Button
        className="lg:hidden absolute -z-10 left-2   top-8"
        onClick={handleMenuToggle}
        color="inherit"
      >
        <MenuRoundedIcon />
      </Button>
      <nav className="hidden lg:flex w-20 h-screen bg-gray-800 flex-col items-center py-8">
        <ul className="flex flex-col gap-8 lg:gap-9">
          <Button color="inherit">
            <span className="material-symbols-rounded">home</span>
          </Button>
          <Button color="inherit">
            <span className="material-symbols-rounded">school</span>
          </Button>
          <Button color="inherit">
            <span className="material-symbols-rounded">leaderboard</span>
          </Button>
          <Button color="inherit">
            <span className="material-symbols-rounded">notifications</span>
          </Button>
          <Button color="inherit">
            <span className="material-symbols-rounded">groups</span>
          </Button>
        </ul>
      </nav>
      {isNavbarOpen && (
        <nav className="w-20 h-screen bg-gray-800 flex flex-col items-center py-8">
          <ul className="flex flex-col gap-8">
            <Button onClick={handleMenuToggle} color="inherit">
              <span className="material-symbols-rounded">cancel</span>
            </Button>
            <Button color="inherit">
              <span className="material-symbols-rounded">home</span>
            </Button>
            <Button color="inherit">
              <span className="material-symbols-rounded">school</span>
            </Button>
            <Button color="inherit">
              <span className="material-symbols-rounded">leaderboard</span>
            </Button>
            <Button color="inherit">
              <span className="material-symbols-rounded">notifications</span>
            </Button>
            <Button color="inherit">
              <span className="material-symbols-rounded">groups</span>
            </Button>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar2;
