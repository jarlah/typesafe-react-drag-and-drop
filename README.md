# typesafe-react-drag-and-drop

```
const nameDragAndDrop = dragAndDrop<string, { name: string }>();

<nameDragAndDrop.TypedDroppable type="name" onDrop={(obj: { name: string }) => null}>
    Hello
</nameDragAndDrop.TypedDroppable>

<nameDragAndDrop.TypedDraggable type="name" data="a name">
    Drag me
</nameDragAndDrop.TypedDraggable>
```
