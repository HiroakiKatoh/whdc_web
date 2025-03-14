'use client';
import React from 'react';
import DarkTheme from "../layouts/Dark";
import WHDC from "./whdc/index";

const Home = () => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DarkTheme>
      <WHDC />
    </DarkTheme>
  );
};

export default Home;
