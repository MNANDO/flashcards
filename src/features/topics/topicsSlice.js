import  { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    }, 
    reducers: {
        addTopic: (state, action) => {
            // {id: '123456', name: 'name of topic', icon: 'icon url'}
            const {  name, id, icon } = action.payload;

            state.topics[id] = {
                id,
                name,
                icon,
                quizIds: []
            }
        },
        addQuiz: (state, action) => {
            const { id, topicId } = action.payload;

            if (state.topics[topicId]) {
                state.topics[topicId].quizIds.push(id)
            }
        }

    }
});

export const { addTopic } = topicsSlice.actions;

export const selectTopics = (state) => state.topics.topics;

export default topicsSlice.reducer;
