export default function validateForm(vals, input) {
  let errors = {};

  if(vals.clicks === 0 && vals.score === 0) {
    errors.clicks = 'Please click the button to get a score';
  }

  if(!input.name.trim()) {
    errors.name = 'Please Enter your name';
  }

  return errors;
}