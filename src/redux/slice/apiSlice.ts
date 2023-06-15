import { createAsyncThunk, createSlice, PayloadAction, } from '@reduxjs/toolkit'
import { ListDataApi } from '../../ApiManager/ListDataApi'



interface list{
    _id: string;
    type: string;
    ctaOrdering: number;
    entityType: string;
    devices: [];
    libraryType: string;
    ordering: number;
    clientId:string;
    createdBy:string;
    notifications: [
      {
        minutesBefore: number;
        isReadReminderSoundEnabled: boolean;
        isPositiveReinfoSoundEnabled: boolean;
        isNotificationSoundEnabled: boolean;
        notificationSoundUrl: string;
        _id: string;
      }
    ];
    visualAidUrl: string;
    duration: number;
    schedule: {
      Sun: string;
      Mon: string;
      Fri: string;
      Sat: string;
    };
    name: string;
    __v: number;
    createdAt: string;
    updatedAt: string;
    id: string    
}
interface dataListState  {
    data: list[];
    isLoader: boolean;
    isError: boolean;
    nextPage: number;
  };
  const initialState:dataListState={
    data:[],
    isLoader:false,
    isError:false,
    nextPage: 1,      
}

export const fetchData=createAsyncThunk<{docs:list[]},{page:number}>('fetchData',async({page})=>{
    const response=await ListDataApi(page)
    return response
})

const apiSlice = createSlice({
    name: 'fetchData',
    initialState:initialState ,
    reducers: {
        sortArray:(state, action ) => {
            state.data = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoader = true;
            state.isError = false;
          }).addCase(fetchData.fulfilled, (state, action) => {
            state.nextPage += 1;
            console.log(state.data)
            state.data = state.data.concat(action.payload.docs);
            state.isLoader = false;
          })
          .addCase(fetchData.rejected, (state) => {
            state.isError = false;
            state.isLoader = false;
          });
    },
})
export const {sortArray}=apiSlice.actions
export default apiSlice.reducer