import React from 'react'
import { FaDownload } from "react-icons/fa";
const DoubleButton = ({ firstButtonName, secondButtonName,cardIcon,firstCardColorClass,secondCardColorClass }) => {
    return (
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button className={`btn btn-${firstCardColorClass} me-md-2 w-100`} type="button">
                {cardIcon}
                {firstButtonName}</button>

            <button className={`btn btn-${secondCardColorClass} w-100`} type="button">{secondButtonName}</button>
        </div>
    )
}

export default DoubleButton