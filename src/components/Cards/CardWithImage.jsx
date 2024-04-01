import React from "react";
import Button from "../Button/Button";
import DoubleButton from "../Button/DoubleButton";


const CardWithImage = ({
  cardImage,
  cardTitle,
  cardText,
  cardTextClassName,
  cardParaTestId,
  cardButtonTestId,
  buttonName,
  role,
  firstButton_Name,
  secondButton_Name,
  icon,
  firstCardColor,
  secondCardColor,
  pageRenderPath,
  width,
  height,
  imageClassName,
  cardTitleStyle
}) => {
  return (
    <div className="card h-100 shadow mb-5 bg-body rounded-4 border-0">
  
      <img src={cardImage} className={imageClassName} alt="Card Image" data-testid='imgTesting' width={width} height={height}/>
      <div className="card-body">
        <h5 className={`card-title ${cardTitleStyle}`}data-testid='cardHeadingTestId'>{cardTitle}</h5> 
        <p className={`card-text ${cardTextClassName}`}  data-testid={cardParaTestId}>{cardText}{cardTitle ==='Learning' ? <span className="btn btn-link p-0" data-bs-toggle="modal" data-bs-target="#learnMore">Learn More</span> : null}</p>
        
      </div>
      <div className="card-footer border-0">
        {role === 'learningAndCommunity' ? 
        <DoubleButton firstButtonName={firstButton_Name} secondButtonName={secondButton_Name} cardIcon={icon} firstCardColorclassName={firstCardColor} secondCardColorclassName={secondCardColor}/>
          : <Button
            className="rounded w-100 mb-2 sign-up-buttons"
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
