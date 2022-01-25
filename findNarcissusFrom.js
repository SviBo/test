let findNarcissusFrom = require('./index.js');

let people = [
                {name:'Alex', know: ['Jhon']},
                {name:'Nadia', know: ['Alex', 'Jhon']},
                {name:'Eva', know: ['Jhon', 'Ivan']},
                {name:'Ivan', know: ['Jhon', 'Nadia']},
                {name:'Jhon', know: []},
                {name:'Ted', know: ['Eva', 'Jhon']},
                {name:'Bob', know: ['Jhon', 'Ted']},
                {name:'Mirana', know: ['Bob','Jhon']},
            ];

let result = findNarcissusFrom(people);         
console.log(result);
