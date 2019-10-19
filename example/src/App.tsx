import React from 'react';
import { dragAndDrop } from "typesafe-react-drag-and-drop";

type Person = {
    name: string,
    age: number
}

const App: React.FC = () => {
  const nameDrop = dragAndDrop<Person, { person: Person }>("person");
  return (
    <>
      <nameDrop.Droppable onDrop={(obj: { person: Person}) => {
        alert(`Hello, ${obj.person.name} are ${obj.person.age} years old`);
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
