# typesafe-react-drag-and-drop

[![NPM](https://nodei.co/npm/typesafe-react-drag-and-drop.png?compact=true)](https://npmjs.org/package/typesafe-react-drag-and-drop)

```
import { dragAndDrop } from "typesafe-react-drag-and-drop";

const nameDragAndDrop = dragAndDrop<string, { name: string }>("name");

<nameDragAndDrop.Droppable onDrop={(obj: { name: string }) => null}>
    Hello
</nameDragAndDrop.Droppable>

<nameDragAndDrop.Draggable data="a name">
    Drag me
</nameDragAndDrop.Draggable>
```
