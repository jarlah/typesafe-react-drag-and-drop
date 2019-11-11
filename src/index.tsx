import * as React from 'react';
import { useEffect, useRef } from 'react';

export type DragAndDrop<V> = {
  Droppable: React.FunctionComponent<DroppableProps<V>>;
  Draggable: React.FunctionComponent<DraggableProps<V>>;
};

type DroppableProps<V> = {
  onDrop: (obj: V) => void;
  children?: React.ReactNode;
};

type DraggableProps<V> = {
  data: V;
  children?: React.ReactNode;
};

const createDroppable = <V extends any>(type: string) => ({
  children,
  onDrop,
}: DroppableProps<V>) => {
  const dropRef = useRef<HTMLDivElement>(null);

  const dropOverCb = (e: DragEvent) => {
    e.preventDefault();
  };

  const onDropCb = (e: DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer) {
      const allowed = e.dataTransfer.types.indexOf(type) > -1;
      if (allowed) {
        const obj = JSON.parse(e.dataTransfer.getData(type));
        onDrop(obj as V);
      }
    }
  };

  useEffect(() => {
    const elem = dropRef.current;
    if (elem) {
      elem.addEventListener('dragover', dropOverCb);
      elem.addEventListener('drop', onDropCb);
      return () => {
        elem.removeEventListener('dragover', dropOverCb);
        elem.removeEventListener('drop', onDropCb);
      };
    }
  });

  return <div ref={dropRef}>{children}</div>;
};

const createDraggable = <V extends any>(type: string) => ({
  children,
  data,
}: DraggableProps<V>) => {
  const dragRef = useRef<HTMLDivElement>(null);

  const dragStartCb = (e: DragEvent) => {
    if (e.dataTransfer) {
      const json = JSON.stringify(data);
      e.dataTransfer.setData(type, json);
    }
  };

  useEffect(() => {
    const elem = dragRef.current;
    if (elem) {
      elem.setAttribute('draggable', 'true');
      elem.addEventListener('dragstart', dragStartCb);
      return () => {
        elem.removeEventListener('dragstart', dragStartCb);
      };
    }
  });

  return <div ref={dragRef}>{children}</div>;
};

export function dragAndDrop<V>(type: string): DragAndDrop<V> {
  return {
    Draggable: createDraggable(type),
    Droppable: createDroppable(type),
  };
}
