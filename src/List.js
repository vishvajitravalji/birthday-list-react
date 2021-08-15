import React from "react";

function List({ people }) {
  return (
    <div>

      {people.map((person) => {
        const { id, age, name , image } = person;
        return (
          <section key={id} className="person">
             <img src={image} alt="user_photo"  /> 
             <div>
                <h2>{name}</h2>
                <h4>{age} years old</h4>
             </div>
           
          </section>
        );
      })}
    </div>
  );
}

export default List;
