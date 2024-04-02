import React, { useState, useEffect, useCallback } from "react";
import Paper from "../../Layout";
import { AppList } from "../../constants";
import { DesktopAppGrid } from "../../components/DesktopAppGrid";
import StartUp from "../StartUp";

const Desktop = () => {
  const [openApps, setOpenApps] = useState<TApp[]>(AppList);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const turnOn = useCallback(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 4000);
  }, []);

  useEffect(() => {
    const shutdown = localStorage.getItem("shutdown");
    if (!shutdown) {
      
      turnOn();
    }
  }, []);

  return (
    <>
      {!isLoading ? (
        <StartUp />
      ) : (
        <Paper>
          <DesktopAppGrid Apps={openApps} />
        </Paper>
      )}
    </>
  );
};

export default Desktop;
