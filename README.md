# typesafe-react-drag-and-drop

to be published in npm soon.

```
import { dragAndDrop } from "typesafe-react-drag-and-drop";

const nameDragAndDrop = dragAndDrop<string, { name: string }>();

<nameDragAndDrop.Droppable type="name" onDrop={(obj: { name: string }) => null}>
    Hello
</nameDragAndDrop.Droppable>

<nameDragAndDrop.Draggable type="name" data="a name">
    Drag me
</nameDragAndDrop.Draggable>
```
