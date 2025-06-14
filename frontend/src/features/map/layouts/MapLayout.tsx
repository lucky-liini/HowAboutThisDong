import React, { useState } from 'react';
import MapSidebar from '@/features/map/components/MapSidebar';
import { Outlet, useLocation } from 'react-router-dom';
import Map from '@features/map/components/Map';
type Props = {};

const MapLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  return (
    <div className="relative w-full h-full">
      <Map />
      {isSidebarOpen && (
        <div>
          <MapSidebar>
            <Outlet />
          </MapSidebar>
        </div>
      )}
      <button onClick={() => setSidebarOpen(!isSidebarOpen)}>{isSidebarOpen ? '⏪' : '⏩'}</button>
    </div>
  );
};
export default MapLayout;
