export default function validateForm(vals) {
  let errs = {};

  if(vals.clicks === 0 && vals.score === 0) {
    errs.clicks = 'Please click the button to get a score';
  }

  if(!vals.name.trim()) {
    errs.name = 'Please Enter your name';
  }

  return errs;
}