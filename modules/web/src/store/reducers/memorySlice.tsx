// LafTools
// 
// Date: Fri, 2 Feb 2024
// Description:
// License: AGPLv3
// Copyright (C) 2024 - Present, https://laftools.dev and https://codegen.cc

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from 'lodash'

const initialState = {
  darkMode: false,
};

export type MemoryState = {
  darkMode: boolean;
};

const MemorySlice = createSlice({
  name: "memory",
  initialState,
  reducers: {
    updateOneOfParamState: (state, action: PayloadAction<Partial<MemoryState>>) => {
      _.merge(state, action.payload)
    },
  },
});

export default MemorySlice;
