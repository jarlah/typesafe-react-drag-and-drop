import { render, waitForElement } from '@testing-library/react';
import * as React from 'react';
import { dragAndDrop as dnd} from '../index';

test('dragAndDrop is rendering', async () => {
    const dragAndDrop = dnd<string, { name: string }>();
    const Component = () => {
        return (
            <>
                <dragAndDrop.Droppable type="name" onDrop={(obj: { name: string }) => {
                    // do something
                }}>
                    Drop here
                </dragAndDrop.Droppable>
                <dragAndDrop.Draggable type="name" data="a name">
                    Drag this
                </dragAndDrop.Draggable>
            </>
        );
    };

    const { getByText } = render(<Component />);

    await waitForElement(() => getByText('Drop here'));
    await waitForElement(() => getByText('Drag this'));
});
