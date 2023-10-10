import { render, screen, fireEvent, wait } from "@testing-library/react";
import React from 'react';
import App from "./App";

import fetchMissions from './api/fetchMissions';
jest.mock('./api/fetchMissions');


test('renders without errors', () => {
    render(<App />)
});

test('fetches and renders mission data', async () => {
    render(<App />);
    fetchMissions.mockResolvedValueOnce({
        data: [
            {mission_name: "Mission 1", mission_id: "mission 1"},
            {mission_name: "Mission 2", mission_id: "mission 2"},
            {mission_name: "Mission 3", mission_id: "mission 3"},
            {mission_name: "Mission 4", mission_id: "mission 4"},
        ]
    });

    const button = screen.getByRole('button');
    fireEvent.click(button);

    await wait();

    expect(screen.getAllByTestId("mission")).toHaveLength(4);
})