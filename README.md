# typesafe-react-drag-and-drop

to be published in npm soon.

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
