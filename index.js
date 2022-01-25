
module.exports = function findNarcissusFrom(people){
    let narcissus = '';
    for (let i = 0; i < people.length; i++) {
        let narcissus_know = people[i].know;
        let narcissus_name = people[i].name; 
        if(narcissus_know.length == 0){
           narcissus = narcissus_name;
        }
    }
  return narcissus;
}	