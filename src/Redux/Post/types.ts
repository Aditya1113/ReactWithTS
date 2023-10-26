// types.ts (or rootTypes.ts)
import { IPostData } from './PostReducer'; // Import any other state types you have

export interface RootState {
  posts: IPostData; // Assuming you have a posts slice in your Redux store
  // Add other slices as needed
}
