import { render, waitForElement } from '@testing-library/react';
import * as React from 'react';
import { dragAndDrop as dnd} from '../index';

test('dragAndDrop is rendering', async () => {
  const dragAndDrop = dnd<string, { name: string }>();
  const Component = () => (
      <dragAndDrop.TypedDroppable type="name" onDrop={(obj: { name: string }) => null}>
        Hello
      </dragAndDrop.TypedDroppable>
  );

    const { getByText } = render(<Component />);

    await waitForElement(() => getByText('Hello'));
});
