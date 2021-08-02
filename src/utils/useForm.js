import { useState, useEffect } from "react";

export default function useForm(cb, validate) {
  const [vals, setVals] = useState({
    name: '',
    clicks: 0,
    score: 0
  });
  // const [name, setName] = useState({});
  const [errs, setErrs] = useState({});
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

  const handleSubmit = e => {
    e.preventDefault();
    setErrs(validate(vals));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if(Object.keys(errs).length === 0 && isSubmitting) {
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
            throw new Error('Something went wrong');
          }
        })
        .then((responseJson) => {
          cb(vals);
          setVals({
            name: '',
            clicks: 0,
            score: 0
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [errs, isSubmitting, cb, vals]);

  return { handleScore, handleChange, handleSubmit, vals, errs };
}