import React from "react";
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
import 'jest-dom/extend-expect';
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import {CharacterField} from "../CharacterField";

library.add(far, fas);

describe('Character.js', () => {
    it('renders label text', async () => {
        const { getByText } = render(<CharacterField label="Name" />);
        await waitForElement(() => getByText(/name/i));
    });
    it('renders value', async () => {
        const { getByText } = render(<CharacterField value="Marino" />);
        await waitForElement(() => getByText(/marino/i));
    });
    it('renders icon', async () => {
        const { getByTestId } = render(<CharacterField icon={["far", "flag"]} />);
        await waitForElement(() => getByTestId(/far-flag/i));
    });
    it('renders full component', async () => {
        const { asFragment } = render(<CharacterField label="Name" value="Marino" icon={["far", "flag"]} />);
        expect(asFragment()).toMatchSnapshot();
    });
})