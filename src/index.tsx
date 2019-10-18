import * as React from "react";
// @ts-ignore
import {Draggable, Droppable} from 'react-drag-and-drop'

type StringKeyTypes<T> = Extract<keyof T, string>;

type IndexedValue<T, V> = { [key in StringKeyTypes<T>]: V };

type TypedDroppable<T, V> = {
  TypedDroppable: React.FunctionComponent<DroppableProps<T, V>>
  TypedDraggable: React.FunctionComponent<DraggableProps<T, V>>
};

type DroppableProps<T, V> = {
  type: StringKeyTypes<T>,
  onDrop: (obj: IndexedValue<T, V>) => void
};

type DroppablePropsWithChildren<T, V>  = {
  children?: React.ReactNode
} & DroppableProps<T, V>

type DraggableProps<T, V> = {
  type: StringKeyTypes<T>,
  data: V
}

type DraggablePropsWithChildren<T, V>  = {
  children?: React.ReactNode
} & DraggableProps<T, V>;

export function dragAndDrop<V, T extends IndexedValue<T, V>>(): TypedDroppable<T, V> {
  return {
    TypedDraggable: ({ children, type, data }: DraggablePropsWithChildren<T, V>): React.ReactElement<any> => (
        <Draggable type={type} data={data}>
          {children}
        </Draggable>
    ),
    TypedDroppable: ({children, type, onDrop}: DroppablePropsWithChildren<T, V>): React.ReactElement<any> => (
        <Droppable types={[type]} onDrop={onDrop}>
          {children}
        </Droppable>
    )
  };
}
