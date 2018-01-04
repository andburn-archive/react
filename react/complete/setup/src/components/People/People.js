import React from 'react';
import Person from '../Person/Person';

const people = (props) => props.people.map((p, i) => {
    return (
      <Person 
        key={p.id}
        name={p.name} 
        age={p.age} 
        click={() => props.clicked(i)} 
        changed={(event) => props.changed(event, p.id)} />
    );
  });

  export default people;