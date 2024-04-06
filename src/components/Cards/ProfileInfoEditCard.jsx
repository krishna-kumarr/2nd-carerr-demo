import React from 'react';
import { FaUserTie } from "react-icons/fa";
import { MdModeEditOutline } from 'react-icons/md';


const ProfileInfoEditCard = ({cardHeadingIcon,cardHeading,cardEditIcon,cardDescription}) => {
    return (
        <>
            <div className="card mt-3 border-0 shadow-sm rounded-4">
                <div className="card-body">
                    <div className="d-flex justify-content-between ms-1">
                        <label className="profile-side-headers d-flex align-items-center">
                            {cardHeadingIcon}
                            <span>{cardHeading}</span>
                        </label>
                        {cardEditIcon}
                    </div>
                    <p className="ms-5 mt-3 profile-descriptions">
                        {cardDescription}
                    </p>
                </div>
            </div>
        </>
    )
}

export default ProfileInfoEditCard
