import React from 'react';
import { dragAndDrop } from "typesafe-react-drag-and-drop";

type Person = {
    name: string,
    age: number
}

const App: React.FC = () => {
  const personDnD = dragAndDrop<Person>("person");
  return (
    <>
      <personDnD.Droppable onDrop={(person: Person) => {
        alert(`Hello, ${person.name} are ${person.age} years old`);
      }}>
        Drop here
      </personDnD.Droppable>

      <personDnD.Draggable data={{ name: "you", age: 100 }}>
        Drag me
      </personDnD.Draggable>
    </>
  );
};

export default App;
