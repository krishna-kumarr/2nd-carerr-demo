import React from 'react'
import DashboardNavbar from '../../components/Navbar/DashboardNavbar'
import Dashboard from '../../layouts/Dashboard'
import { FiFilter } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";


const Home = () => {
    const professionalPageDashboardMenu = ['Home', 'Learning', 'Community']
    const body = document.querySelector('body')

    const handleToggler = () => {
        body.classList.toggle('show-responsive-filter')
    }

    const handleCloseChatBox = () => {
        body.classList.toggle('show-responsive-filter')
    }


    return (
        <>
            <DashboardNavbar profileImage="https://github.com/mdo.png" profileName="George Martin" dashboadMenus={professionalPageDashboardMenu} />

            <Dashboard />

            <div className="responsive-filter">
                <header>
                    <h2 className='m-0'>Filter</h2>
                    <span className=" close-icon responsive-filter-close-icon" onClick={handleCloseChatBox}>close</span>
                </header>

                <div className="filter-box">
                    <form>
                        <div className='mb-3'>
                            <label htmlFor='skills' className='form-label fs-4 mb-2'>Skills</label>
                            <select className="form-select form-control" aria-label="Default select example" id="skills">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='selectors' className='form-label fs-4 mb-2'>Selectors</label>
                            <select className="form-select form-control" aria-label="Default select example" id="selectors">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <h5>Workplace Type</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="workplace_hybrid" />
                                <label className="form-check-label" for="workplace_hybrid">
                                    Hybrid
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="workplace_on_site" />
                                <label className="form-check-label" for="workplace_on_site">
                                    On-site
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="workplace_remote" />
                                <label className="form-check-label" for="workplace_remote">
                                    Remote
                                </label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='location' className='form-label fs-4 mb-2'>Location</label>
                            <select className="form-select form-control" aria-label="Default select example" id="location">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <h5>Job Type</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="job_full-time" />
                                <label className="form-check-label" for="job_full-time">
                                    Full type
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="job_part_time" />
                                <label className="form-check-label" for="job_part_time">
                                    Part time
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="job_contract" />
                                <label className="form-check-label" for="job_contract">
                                    Contract
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="job_temporary" />
                                <label className="form-check-label" for="job_temporary">
                                    Temporary
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="job_others" />
                                <label className="form-check-label" for="job_others">
                                    Others
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="workplace_remote" />
                                <label className="form-check-label" for="workplace_remote">
                                    Volunteer
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="workplace_remote" />
                                <label className="form-check-label" for="workplace_remote">
                                    Internship
                                </label>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <h5>Schedule</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="schedule_fixed" />
                                <label className="form-check-label" for="schedule_fixed">
                                    Fixed
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="schedule_flexible" />
                                <label className="form-check-label" for="schedule_flexible">
                                    Flexible
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="schedule_weekend_only" />
                                <label className="form-check-label" for="schedule_weekend_only">
                                    Weekend only
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="schedule_monday" />
                                <label className="form-check-label" for="schedule_monday">
                                    Monday to Friday
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="schedule_us" />
                                <label className="form-check-label" for="schedule_us">
                                    Us time
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="schedule_india" />
                                <label className="form-check-label" for="schedule_india">
                                    India time
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="schedule_other" />
                                <label className="form-check-label" for="schedule_other">
                                    Other
                                </label>
                            </div>
                        </div>
                        <div className='text-end'>
                            <button type='button' className='btn btn-brand-color'>Apply Filter</button>
                        </div>
                    </form>
                </div>
            </div>


            <div className="responsive-filter-toggler d-lg-none" onClick={handleToggler}>
                <p className="material-symbols-outlined message-icon mb-0"><FiFilter /></p>
                <p className="material-symbols-outlined close-icon mb-0"><IoMdClose /></p>
            </div>
        </>
    )
}

export default Home
