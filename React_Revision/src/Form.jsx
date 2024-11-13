import React from 'react';

function MyForm() {
  return (
    <form>
      <label htmlFor="email">Email Address:</label>
      <input type="email" id="email" name="email" placeholder="Enter your email" />
    </form>
  );
}

export default MyForm;
