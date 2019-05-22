import React from 'react';
import '../styles/form.css';

const Form = () => {
  return (
    <form>
      <fieldset>
        <label>React Academy</label>
        <p>Let us know your experience in the academy, hope you had a blast!</p>
        <input type="text" name="fullName" value="Full name" required />
        <input type="text" name="tech" value="Technology" required />
        <input type="email" name="email" value="example@gmail.com" required />
        <textarea value="Write something here" required />
        <input class="submit-btn" type="submit" value="Submit" name="Submit" />
      </fieldset>
    </form>
  );
};

export default Form;
