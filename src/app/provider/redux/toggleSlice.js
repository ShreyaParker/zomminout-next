import {createSlice} from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name: "toggle",
    initialState:{
        isSliceOpen: false,
        selectedImageIndex: null,
        images: [
            "https://www.ikea.com/in/en/images/products/lill-net-curtains-1-pair-white__0099863_pe242253_s5.jpg?f=xl",
            "https://www.ikea.com/in/en/images/products/lill-net-curtains-1-pair-white__0887768_pe569661_s5.jpg?f=xl",
            "https://www.ikea.com/in/en/images/products/lill-net-curtains-1-pair-white__0887770_pe569731_s5.jpg?f=xl",
            "https://www.ikea.com/in/en/images/products/lill-net-curtains-1-pair-white__1051925_pe845814_s5.jpg?f=xl"
        ]
    },
    reducers:{
      SliceOpen (state, action) {
          state.isSliceOpen = true;
          state.selectedImageIndex = action.payload;
      },
      SliceClose (state) {
          state.isSliceOpen = false;
          state.selectedImageIndex = null;

      }

    }
})

export const {SliceOpen, SliceClose} = toggleSlice.actions;
