import { useState, useEffect } from "react";

export default function useForm(cb, validate) {
  const [vals, setVals] = useState({
    name: '',
    clicks: 0,
    score: 0
  });
  const [formErrs, setFormErrs] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const {name, value} = e.target;
    setVals({
      ...vals,
      [name]: value
    });
  };

  const handleScore = e => {
    e.preventDefault();
    if(vals.clicks < 10) {
      setVals({
        ...vals,
        clicks: vals.clicks + 1,
        score: Math.floor(Math.random() * 200) - 100
      });
    }
  }

  const handleReset = e => {
    e.preventDefault();
    setFormErrs({});
    setIsSubmitting(false);
    setVals({
      name: '',
      clicks: 0,
      score: 0
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    setFormErrs(validate(vals));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if(Object.keys(formErrs).length === 0 && isSubmitting) {
      const req = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(vals)
      };
      fetch('https://httpbin.org/post', req)
        .then((response) => {
          if(response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong.');
          }
        })
        .then((responseJson) => {
          console.log('json', responseJson);
          cb(responseJson.json);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [formErrs, isSubmitting, cb, vals]);

  return { handleScore, handleChange, handleSubmit, handleReset, vals, formErrs };
}