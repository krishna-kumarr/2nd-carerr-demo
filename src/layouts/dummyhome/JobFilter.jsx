import React from "react";
import { IoFilterSharp } from "react-icons/io5";


const JobFilter = () => {

  const [option, setOption] = React.useState('')

  return (
    <form>
      <div className="d-flex justify-content-between ">
      <label htmlFor="skills" className="form-label fs-4 mb-2 job-filter-heading">
          <span>Filter</span>
        </label>
        <IoFilterSharp />
        </div>  
        <hr className="mb-3 mt-1"/>
      <div className="mb-3">
        <label htmlFor="skills" className="form-label fs-4 mb-2">
          <span className="job-filter-sub-headings">Skills</span>
        </label>
        <select value={option} onChange={e => setOption(e.target.value)}
          className="form-select form-control filter-section"
          aria-label="Default select example"
          id="skills"
          data-testid='Skills'
        >
          <option >Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="selectors" className="form-label fs-4 mb-2">
          <span className="job-filter-sub-headings">Sectors</span>          
        </label>
        <select
          className="form-select form-control filter-section"
          aria-label="Default select example"
          id="Sectors"
          data-testid='Sectors'
        >
          <option >Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <h5 className="job-filter-sub-headings">Workplace Type</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="workplace_hybrid"
            data-testid="Hybrid"
          />
          <label className="form-check-label"  htmlFor="workplace_hybrid" >
            Hybrid
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="workplace_on_site"
            data-testid="On-site"
          />
          <label className="form-check-label"  htmlFor="workplace_on_site">
            On-site
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="workplace_remote"
            data-testid="Remote" 
          />
          <label className="form-check-label"  htmlFor="workplace_remote">
            Remote
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="location" className="form-label fs-4 mb-2 ">
          <span className="job-filter-sub-headings">Location</span>          
        </label>
        <select
          className="form-select form-control filter-section"
          aria-label="Default select example"
          id="location"
          data-testid='Location'
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="mb-3">
        <h5 className="job-filter-sub-headings">Job Type</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="job_full-time"
            data-testid="Full-time"
          />
          <label className="form-check-label" htmlFor="job_full-time">
            Full type
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="job_part_time"
            data-testid="Part-time"
          />
          <label className="form-check-label"  htmlFor="job_part_time">
            Part time
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="job_contract"
            data-testid="Contract"
          />
          <label className="form-check-label"  htmlFor="job_contract">
            Contract
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="job_temporary"
          />
          <label className="form-check-label"  htmlFor="job_temporary">
            Temporary
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="job_others"
            data-testid="Other"
          />
          <label className="form-check-label"  htmlFor="job_others">
            Others
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="workplace_remote"
            data-testid="Volunteer"
          />
          <label className="form-check-label"  htmlFor="workplace_remote">
            Volunteer
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="workplace_remote"
          />
          <label className="form-check-label"  htmlFor="workplace_remote">
            Internship
          </label>
        </div>
      </div>
      <div className="mb-3">
        <h5 className="job-filter-sub-headings">Schedule</h5>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="schedule_fixed"
            data-testid="Fixed"
          />
          <label className="form-check-label"  htmlFor="schedule_fixed">
            Fixed
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="schedule_flexible"
            data-testid="Flexible"
          />
          <label className="form-check-label"  htmlFor="schedule_flexible">
            Flexible
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="schedule_weekend_only"
            data-testid="WeekendOnly"
          />
          <label className="form-check-label"  htmlFor="schedule_weekend_only">
            Weekend only
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="schedule_monday"
            data-testid="MondaytoFriday"
          />
          <label className="form-check-label"  htmlFor="schedule_monday">
            Monday to Friday
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="schedule_us"
            data-testid="UStime"
          />
          <label className="form-check-label"  htmlFor="schedule_us">
            Us time
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="schedule_india"
            data-testid="Indiatime"
          />
          <label className="form-check-label"  htmlFor="schedule_india">
            India time
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="schedule_other"
            data-testid="ScheduleOther"
          />
          <label className="form-check-label"  htmlFor="schedule_other">
            Other
          </label>
        </div>
      </div>
      <div>
        <button type="button" className="btn btn-success w-100">
          Apply Filter
        </button>
      </div>
    </form>
  );
};

export default JobFilter;
