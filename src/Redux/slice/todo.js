import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchtodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
})

export const todoSlice = createSlice({
    name: "todo",
    initialState: {
        isLoading: false,
        data: null,
        isError:false,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchtodos.pending, (state, action)=>{
            state.isLoading = true
        })
        builder.addCase(fetchtodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchtodos.rejected, (state, action) => {
            console.log("Error", action.payload);
            state.isError = false;
        })
    }
});

export default todoSlice.reducer