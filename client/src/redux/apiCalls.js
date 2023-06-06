import { userRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import axios from 'axios';

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try{
        // const res = await axios.post('http://localhost:5000/api/auth/login', user, {headers:{token: "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjgyZmE0MGQyOTU3ZDgyMTQ3MmU5OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTgyMjE3MCwiZXhwIjoxNjgyMjU0MTcwfQ.tk5Tr5wOkuHVjxLHJQA-uZNatmyJwMo8GkIxV0doEjE"}});
        const res = await userRequest.post('auth/login', user);
        dispatch(loginSuccess(res.data));
    }
    catch (err){
        dispatch(loginFailure());
    }
}