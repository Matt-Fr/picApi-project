import React from "react";
import { Outlet } from "react-router-dom";
import { GiPhotoCamera } from "react-icons/gi";

const SharedLayout = () => {
  return (
    <>
      <header className="header">
        <GiPhotoCamera className="logo"></GiPhotoCamera>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default SharedLayout;
