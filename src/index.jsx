import React from 'react';
import ReactDOM from 'react-dom';

import { Form } from './components';

function App() {
  const fields = [
    { name: 'name', placeholder: 'Name' },
    { name: 'surname', placeholder: 'Surname' },
    { name: 'age', placeholder: 'Age' },
    { name: 'course', placeholder: 'Curso' },
  ];

  const handleSubmit = (results) => {
    console.log(results);
  };

  return (
    <section className="app">
      <Form
        title="Amazing Form!!"
        fields={fields}
        buttonValue="Send"
        handleSubmit={handleSubmit}
      />
    </section>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
