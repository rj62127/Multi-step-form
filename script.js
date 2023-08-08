// declare variables and store elements
const sidebarStep = document.querySelectorAll('.indecater__num');
const formStep = document.querySelectorAll('.step');
const form = document.getElementById('form');
const planCards = document.querySelectorAll('.plan__card');
const addsonCards = document.querySelectorAll('.addon__card');
const changePlanBtn = document.getElementById('change-plan');

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


  