import React from 'react';
import { dragAndDrop } from "typesafe-react-drag-and-drop";

const App: React.FC = () => {
  const nameDrop = dragAndDrop<string, { name: string}>("name");
  return (
    <>
      <nameDrop.Droppable onDrop={(obj: { name: string}) => {
        alert(`Hello, ${obj.name}`);
      }}>
        Drop here
      </nameDrop.Droppable>

      <nameDrop.Draggable data="Jarl">
        Drag me
      </nameDrop.Draggable>
    </>
  );
};

export default App;
