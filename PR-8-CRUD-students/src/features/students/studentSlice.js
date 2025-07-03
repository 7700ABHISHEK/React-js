import { createSlice } from "@reduxjs/toolkit";
import Student from "../../pages/Student";

const studentSlice = createSlice({
    name: "students",
    initialState: {
        list: [
            {
                name: "Abhishek",
                id: 1,
                course: "FSD",
                age: 20,
                skill: "React"
            },  

            {
                name: "Sujar",
                id: 2,
                course: "FSD",
                age: 29,
                skill: "HTML"
            }
        ],
    },
    reducers: {
        addStudent: (state, action) => {

        },

        deleteStudent: (state, action) => {

        }
    }
})

export default studentSlice.reducer;