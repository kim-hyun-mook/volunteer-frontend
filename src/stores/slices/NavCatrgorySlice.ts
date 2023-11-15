import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@stores/index.ts';
import { Community } from '@interfaces/Community.ts';

interface CommunityState {
  activeIndex: number;
  communityData: Community[] | null;
}

const initialState: CommunityState = {
  activeIndex: -1,
  communityData: null,
};

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {
    setActiveIndex: (state, action: PayloadAction<number>) => {
      state.activeIndex = action.payload;
    },
    setCommunityData: (state, action: PayloadAction<Community[]>) => {
      state.communityData = action.payload;
    },
  },
});

export const { setActiveIndex, setCommunityData } = communitySlice.actions;

export const selectActiveIndex = (state: RootState) => state.community.activeIndex;
export const selectCommunityData = (state: RootState) => state.community.communityData;

export default communitySlice.reducer;
