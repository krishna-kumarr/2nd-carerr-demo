import React, { useEffect, useRef, useState } from 'react'
import FilterMethods from './dummyhome/FilterMethods'
import JobWorkSpace from './dummyhome/JobWorkSpace'
import { FiFilter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import HomeFilterForm from '../components/Forms/HomeFilterForm';

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  let filterRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!e.target.closest('.filter-closet')) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    }
  }, [])

  return (
    <div ref={filterRef}>
      <section className='homePage-backgroundColor'>
        <FilterMethods />
        <JobWorkSpace />
      </section>


      <div className={`${open ? 'responsive-filter d-xl-none ' : 'd-none'}`} id="myModal">
        <div className="responsive-filter-card filter-closet">
          <header>
            <h2 className='m-0 text-start ps-3'>Filter</h2>
            <p className=" close-icon responsive-filter-close-icon" onClick={() => setOpen(!open)}><IoMdClose /></p>
          </header>

          <div className="filter-body-content ">
            <HomeFilterForm />
          </div>
        </div>
      </div>


      <div className="responsive-filter-toggler d-xl-none">
        {open ? 
        <p className="material-symbols-outlined mb-0" onClick={() => setOpen(!open)}>< IoMdClose/></p>
        :
        <p className="material-symbols-outlined  mb-0" onClick={() => setOpen(!open)}><  FiFilter/></p>
}
      </div>
    </div>
  )
}

export default Dashboard