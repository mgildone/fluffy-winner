import React from "react";
import {render, fireEvent, cleanup, waitForElement} from 'react-testing-library';
import 'jest-dom/extend-expect';
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { CharacterField } from "../CharacterField";
import { CharacterModal } from "../CharacterModal";

library.add(far, fas);

describe('CharacterField.js', () => {
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
});

describe('CharacterModal.js', () => {
    it('renders label text', async () => {
        const character = {
            "newCharacter": true,
            "age": 0,
            "lifePhase": "infant",
            "nationality": {
                "name": "Honduran",
                "abbreviation": "en"
            },
            "country": {
                "name": "Bahamas",
                "abbreviation": "BS"
            },
            "gender": {
                "name": "Agender",
                "abbreviation": "M",
                "icon": [
                "fas",
                "genderless"
                ]
            },
            "sexualOrientation": {
                "name": "Straight",
                "icon": [
                "fas",
                "venus-mars"
                ]
            },
            "firstName": "Eric",
            "lastName": "Obrien",
            "happiness": 22,
            "health": 81,
            "smarts": 22,
            "looks": 45
            };
        const { getByText } = render(<CharacterModal character={character} />);
        await waitForElement(() => getByText(/Welcome/i));
    });
});