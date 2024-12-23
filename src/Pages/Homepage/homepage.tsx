import React from 'react';
import SideNavbar from '../../Components/HomeComponents/SideNavbar';
import Table from '../../Components/HomeComponents/Table';


export default function homepage() {
  return (
    <div className="">
    <SideNavbar />
    <div className="lg:ml-[240px] max-lg:mt-[57px] lg:p-6">
      <Table />
    </div>
  </div>
  )
}
