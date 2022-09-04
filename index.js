const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

 //const titleCased = tutorials.map((element) => {
  // return  element.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());

 //});
 //console.log(titleCased);

 function titleCased(){
  return tutorials.map(element=> {
     return  element.replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase());
  } )};
 console.log(titleCased(tutorials));

