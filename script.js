// declare variables and store elements
const sidebarStep = document.querySelectorAll('.indecater__num');
const formSteps = document.querySelectorAll('.step');
const stepsContainer = document.getElementById('steps__container');
const planCards = document.querySelectorAll('.plan__card');
const addsonCards = document.querySelectorAll('.addon__card');
const changePlanBtn = document.getElementById('change-plan');
const nextButton = document.getElementById('next-button');

// empty object to store selected plan, price and duration
let selectedPlan = {};

// function for storing selected add-on plan
const selectedAddsOn = () => {

    // create emplty array to store plan details
    let addOnArr = [];

    // loop add-on card to find selected add-on cards
    addsonCards.forEach((card) => {

      // select plan name, price and plan duration

      let price = card.querySelector('.sbscription__price').textContent;
      let name = card.querySelector('.card__name').textContent;
      let planDur = card.querySelector('.sbscription__duration').textContent;
      // push selected cards details to addOnArr array
      if (card.classList.contains('selected')) {
        addOnArr.push({
          price,
          name,
          planDur,
        });
      }
    });
    // return addOnArr array
    return addOnArr;
  };


  // plan prices
  const monthlyPlanPrices = [9, 12, 15];
  const yearlyPlanPrices = [90, 120, 150];
  const monthlyAdsOnPrice = [1, 2, 2];
  const yearlyAdsOnPrice = [10, 20, 20];

  // function to change price and duration of the given card
  const setplan = (card, price, duration) => {
    card.forEach((card, i) => {
      card.querySelector('.sbscription__price').textContent = `${price[i]}`;
      card.querySelector('.sbscription__duration').textContent = `${duration}`;
    });
  };

  // set default price and duration of the cards
setplan(planCards, monthlyPlanPrices, 'mo');
setplan(addsonCards, monthlyAdsOnPrice, 'mo');

// BUTTONS


function nextButtonClick(){
  var activeStepIndex;
  var activeStep;
  for(i=0;i<formSteps.length;i++){
    id = formSteps[i].getAttribute("id");
    className = formSteps[i].getAttribute("class");
    if(className.search("active") != -1){
      activeStep = formSteps[i];
      activeStepIndex = i;
      break;
    }
  }
  if(activeStepIndex != formSteps.length-1){
    activeStep.classList.remove("active");
    formSteps[activeStepIndex+1].classList.add("active");
  }
}

function prevButtonClick() {
  
  var activeStepIndex;
  var activeStep;
  for(i=0;i<formSteps.length;i++){
    id = formSteps[i].getAttribute("id");
    className = formSteps[i].getAttribute("class");
    if(className.search("active") != -1){
      activeStep = formSteps[i];
      activeStepIndex = i;
      break;
    }
  }
  if(activeStepIndex != 0 ){
    activeStep.classList.remove("active");
    formSteps[activeStepIndex-1].classList.add("active");
  }

}