import React from 'react';
import { dragAndDrop } from "typesafe-react-drag-and-drop";

type Person = {
    name: string,
    age: number
}

const App: React.FC = () => {
  const person = dragAndDrop<Person>("person");
  return (
    <>
      <person.Droppable onDrop={(person: Person) => {
        alert(`Hello, ${person.name} are ${person.age} years old`);
      }}>
        Drop here
      </person.Droppable>

      <person.Draggable data={{ name: "you", age: 100 }}>
        Drag me
      </person.Draggable>
    </>
  );
};

export default App;
