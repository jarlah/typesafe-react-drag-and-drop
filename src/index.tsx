import * as React from "react";
// @ts-ignore
import {Draggable, Droppable} from 'react-drag-and-drop'

type StringKeyTypes<T> = Extract<keyof T, string>;

type IndexedValue<T, V> = { [key in StringKeyTypes<T>]: V };

type TypedDroppable<T, V> = {
  Droppable: React.FunctionComponent<DroppableProps<T, V>>
  Draggable: React.FunctionComponent<DraggableProps<T, V>>
};

type DroppableProps<T, V> = {
  onDrop: (obj: IndexedValue<T, V>) => void
};

type DroppablePropsWithChildren<T, V>  = {
  children?: React.ReactNode
} & DroppableProps<T, V>

type DraggableProps<T, V> = {
  data: V
}

type DraggablePropsWithChildren<T, V>  = {
  children?: React.ReactNode
} & DraggableProps<T, V>;

export function dragAndDrop<V, T extends IndexedValue<T, V>>(type: StringKeyTypes<T>): TypedDroppable<T, V> {
  return {
    Draggable: ({ children, data }: DraggablePropsWithChildren<T, V>): React.ReactElement<any> => (
        <Draggable type={type} data={data}>
          {children}
        </Draggable>
    ),
    Droppable: ({children, onDrop}: DroppablePropsWithChildren<T, V>): React.ReactElement<any> => (
        <Droppable types={[type]} onDrop={onDrop}>
          {children}
        </Droppable>
    )
  };
}
