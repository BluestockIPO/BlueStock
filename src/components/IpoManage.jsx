import React from 'react';
import DashBoardsideBar from './DashBoardsideBar';
import HeaderActions from './HeaderActions';
import IpoTable from './IpoTable';

export default function IpoManage() {
  return (
    <div className="flex min-h-screen">
      <DashBoardsideBar />
      <main className="flex flex-col flex-grow bg-white">
        <HeaderActions />
        <IpoTable />
      </main>
    </div>
  );
}
