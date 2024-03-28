import React from 'react'
import Logo from '../../assets/images/company.png'
import { FaRegCalendarAlt, FaShoppingBag, FaWallet } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { IoTimeSharp } from "react-icons/io5";



const JobCard = () => {
  return (
    <>
      <div class="d-flex align-items-center my-2">
        <div class="flex-shrink-0">
          <img src={Logo} alt="..." width={52} height={52} />
        </div>
        <div class="flex-grow-1 ms-3">
          <h6 className='job-card-component-heading'>Data Quality Manager</h6>
          <p className='job-card-posted-time m-0'>Posted on 22 Mar 2024</p>
        </div>
      </div>
      <div class="d-flex justify-content-around card-company-details-icon mt-4">
        <label className="fs-7">
          <FaLocationDot className="me-2 text-success" />
          Hybirid-Washington-USA
        </label>
        <label className="fs-7">
          <FaShoppingBag className="me-2 text-warning" />
          US Time
        </label>
        <label className="fs-7">
          <IoTimeSharp className="me-2 text-primary" />
          Full Time
        </label>
        <label className="fs-7">
          <FaWallet className="me-2 text-warning" />
          Paid
        </label>
        {/* <label className="fs-7">
          <FaRegCalendarAlt className="me-2 text-primary" />
          Weekend Only
        </label> */}
      </div>
      <h2 className='mt-4 job-card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet. Asperiores itaque quisquam exercitationem praesentium laboriosam culpa, ab beatae facere esse. Dolores dicta tempore inventore nobis! Molestiae mollitia laboriosam accusamus eligendi </h2>
    </>
  )
}

export default JobCard