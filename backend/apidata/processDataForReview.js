var chem101Reviews = require('./chem101Reviews');
// console.log(chem101Reviews.result.values);
var sectionReviews = chem101Reviews.result.values;
var returnArray = [];
for (let i = 0; i < sectionReviews.length; i++) {
    // console.log(sectionReviews[i].ratings.rCommAbility);
    const tempObj = {};
    tempObj.ratings = sectionReviews[i].ratings;
    tempObj.section = sectionReviews[i].section.primary_alias.split('-').join('');
    returnArray.push(tempObj);
}
console.log(returnArray);
