import React from "react";
import Button from "../Button/Button";
import DoubleButton from "../Button/DoubleButton";


const CardWithImage = ({
  cardImage,
  cardTitle,
  cardText,
  carTextClassName,
  cardParaTestId,
  cardButtonTestId,
  buttonName,
  role,
  firstButton_Name,
  secondButton_Name,
  icon,
  firstCardColor,
  secondCardColor,
  pageRenderPath
}) => {
  return (
    <div className="card h-100">
      <img src={cardImage} className="card-img-top" alt="Card Image" data-testid='imgTesting' />
      <div className="card-body">
        <h5 className="card-title" data-testid='cardHeadingTestId'>{cardTitle}</h5>
        <p className={`card-text ${carTextClassName}`} data-testid={cardParaTestId}>{cardText}</p>
      </div>
      <div className="card-footer border-0">
        {role === 'learningAndCommunity' ? 
        <DoubleButton firstButtonName={firstButton_Name} secondButtonName={secondButton_Name} cardIcon={icon} firstCardColorclassName={firstCardColor} secondCardColorclassName={secondCardColor}/>
          : <Button
            className="btn btn-primary  w-100 sign-up-buttons"
            title={buttonName}
            buttonType="button"
            functionOnchange={pageRenderPath}
            testId={cardButtonTestId}
          />}
      </div>
    </div>
  );
};

export default CardWithImage;
