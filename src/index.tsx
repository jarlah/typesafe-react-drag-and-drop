import * as React from "react";
import {useEffect, useRef} from "react";

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

const createDroppable = <T, V>(type: StringKeyTypes<T>) => ({ children, onDrop }: DroppablePropsWithChildren<T, V>): React.ReactElement<any> => {
  const dropRef = useRef<HTMLDivElement>(null);

  const onDropCb = (e: DragEvent) => {
    if (e.dataTransfer) {
      onDrop(JSON.parse(e.dataTransfer.getData(type)));
    }
  };

  useEffect(() => {
    const elem = dropRef.current;
    if (elem) {
      elem.addEventListener("drop", onDropCb);
      return () => {
        elem.removeEventListener("drop", onDropCb);
      };
    }
  });

  return (
      <div ref={dropRef}>
        {children}
      </div>
  )
};

const createDraggable = <T, V>(type: StringKeyTypes<T>) => ({ children, data }: DraggablePropsWithChildren<T, V>): React.ReactElement<any> => {
  const dragRef = useRef<HTMLDivElement>(null);

  const dragStartCb = (e: DragEvent) => {
    if (e.dataTransfer) {
      e.dataTransfer.setData(type, JSON.stringify(data));
    }
  };

  useEffect(() => {
    const elem = dragRef.current;
    if (elem) {
      elem.setAttribute("draggable", "true");
      elem.addEventListener("dragstart", dragStartCb);
      return () => {
          elem.removeEventListener("dragstart", dragStartCb);
      }
    }
  });

  return (
      <div ref={dragRef}>
        {children}
      </div>
  )
};

export function dragAndDrop<V, T extends IndexedValue<T, V>>(type: StringKeyTypes<T>): TypedDroppable<T, V> {
  return {
    Draggable: createDraggable(type),
    Droppable: createDroppable(type)
  };
}
