import React from 'react';
import { dragAndDrop } from "typesafe-react-drag-and-drop";

type Person = {
    name: string,
    age: number
}

const App: React.FC = () => {
  const nameDrop = dragAndDrop<Person>("person");
  return (
    <>
      <nameDrop.Droppable onDrop={(person: Person) => {
        alert(`Hello, ${person.name} are ${person.age} years old`);
      }}>
        Drop here
      </nameDrop.Droppable>

      <nameDrop.Draggable data={{ name: "you", age: 100 }}>
        Drag me
      </nameDrop.Draggable>
    </>
  );
};

export default App;
