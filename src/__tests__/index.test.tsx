/**
 * @jest-environment jsdom
 */
import { render, waitFor } from '@testing-library/react';
import * as React from 'react';
import { dragAndDrop as dnd } from '../index';

test('dragAndDrop is rendering', async () => {
  const dragAndDrop = dnd<string>('name');
  const Component = () => {
    return (
      <>
        <dragAndDrop.Droppable
          onDrop={(name: string) => {
            // do something
          }}
        >
          Drop here
        </dragAndDrop.Droppable>
        <dragAndDrop.Draggable data="a name">Drag this</dragAndDrop.Draggable>
      </>
    );
  };

  const { getByText } = render(<Component />);

  await waitFor(() => getByText('Drop here'));
  await waitFor(() => getByText('Drag this'));
});
