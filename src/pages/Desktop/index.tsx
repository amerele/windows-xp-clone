import React, { useState, useEffect } from 'react';
import Paper from "../../Layout";
import { AppList } from '../../constants';
import { DesktopAppGrid } from '../../components/DesktopAppGrid';

const Desktop = () => {
  const [openApps, setOpenApps] = useState<TApp[]>(AppList);
  useEffect(()=>{},[])
  return (
      <Paper>
        <DesktopAppGrid Apps={openApps} />
      </Paper>
  );
};

export default Desktop;
