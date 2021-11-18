# typesafe-react-drag-and-drop

[![NPM](https://nodei.co/npm/typesafe-react-drag-and-drop.png?compact=true)](https://npmjs.org/package/typesafe-react-drag-and-drop)

```
import { dragAndDrop } from "typesafe-react-drag-and-drop";

const name = dragAndDrop<string>("name");

<name.Droppable onDrop={(name: string) => null}>
    Hello
</name.Droppable>

<name.Draggable data="a name">
    Drag me
</name.Draggable>
```
