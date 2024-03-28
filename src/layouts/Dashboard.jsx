import React from 'react'
import FilterMethods from './dummyhome/FilterMethods'
import JobWorkSpace from './dummyhome/JobWorkSpace'

const Dashboard = () => {
  return (
    <>
      <section className='homePage-backgroundColor'>
        <FilterMethods />
        <JobWorkSpace />
      </section>
    </>
  )
}

export default Dashboard