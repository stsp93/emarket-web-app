let counter = 0;
let intervalId;
let links;

export function accrodionAnimation(accordionLinks) {
    links = accordionLinks;
    if(intervalId) clearInterval(intervalId);
    
    intervalId = setInterval(function () {
        showAccordionLink('increment',accordionLinks)
      }, 5000)
}

export function clickPrev(e) {
    e.preventDefault();
    showAccordionLink('decrement', links);
}

export function clickNext(e) {
    e.preventDefault();
    showAccordionLink('increment', links)
}


function showAccordionLink(operator,accordionLinks) {
  if (operator === 'increment') {
    counter++
    if (counter >= accordionLinks.length) counter = 0
  } else if (operator === 'decrement') {
    counter--
    if (counter < 0) counter = accordionLinks.length - 1;
  }
  accordionLinks.forEach(e => e.classList.remove('accordion__link-active'))
  accordionLinks[counter].classList.add('accordion__link-active')
}