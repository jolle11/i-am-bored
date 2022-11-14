import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

import { removeIcon } from "../../utils";

interface ActivityFilters {
	participants?: number;
	type: string;
	price?: number;
	accessibility?: number;
}

const initialState: ActivityFilters = {
	participants: undefined,
	type: "",
	price: undefined,
	accessibility: undefined,
};

const activitySlice = createSlice({
	name: "activity",
	initialState,
	reducers: {
		setParticipants(state, action: PayloadAction<number>) {
			state.participants = action.payload;
		},
		setType(state, action: PayloadAction<string>) {
			state.type = removeIcon(action.payload);
		},
		setPrice(state, action: PayloadAction<number>) {
			state.price = action.payload;
		},
		setAccessibility(state, action: PayloadAction<number>) {
			state.accessibility = action.payload;
		},
		reset(state) {
			state.participants = initialState.participants;
			state.type = initialState.type;
			state.price = initialState.price;
			state.accessibility = initialState.accessibility;
		},
	},
});

export const { setParticipants, setType, setPrice, setAccessibility, reset } =
	activitySlice.actions;
export default activitySlice.reducer;
