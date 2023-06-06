import { loginFailure, loginStart, loginSuccess, getUsersStart, getUsersSuccess, getUsersFailure , deleteUsersStart, deleteUsersFailure, deleteUsersSuccess} from "./userRedux"
import { publicRequest, userRequest } from "../requestMethod";
import { getProductStart, getProductSuccess, getProductFailure, deleteProductStart, deleteProductSuccess, deleteProductFailure, updateProductStart, updateProductSuccess, updateProductFailure, addProductStart, addProductSuccess, addProductFailure} from "./productRedux";

export const login = async (dispatch, user) =>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
        // console.log(res.data);
    }
    catch (err){
        dispatch(loginFailure());
    }
};

export const getProducts = async (dispatch) =>{
    dispatch(getProductStart());
    try{
        const res = await userRequest.get('/products');
        dispatch(getProductSuccess(res.data));
        // console.log(res.data);
    }
    catch (err){
        dispatch(getProductFailure());
    }
};

export const deleteProducts = async (id, dispatch) =>{
    dispatch(deleteProductStart());
    try{
        const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteProductSuccess(id));
        // console.log(res.data);
    }
    catch (err){
        dispatch(deleteProductFailure());
    }
};

export const updateProducts = async (id, product, dispatch) =>{
    dispatch(updateProductStart());
    try{
        const res = await userRequest.put(`/products/${id}`);
        dispatch(updateProductSuccess({id: id, product: product}));
        // console.log(res.data);
    }
    catch (err){
        dispatch(updateProductFailure());
    }
};

// ADD PRODUCTS
export const addProducts = async (product, dispatch) =>{
    dispatch(addProductStart());
    try{
        const res = await userRequest.post(`/products/`,product);
        dispatch(addProductSuccess(res.data));
        // console.log(res.data);
    }
    catch (err){
        dispatch(addProductFailure());
    }
};



// GET USERS
export const getUsers = async (dispatch) =>{
    dispatch(getUsersStart());
    try{
        const res = await userRequest.get('/users');
        dispatch(getUsersSuccess(res.data));
        // console.log(res.data);
    }
    catch (err){
        dispatch(getUsersFailure());
    }
};

// DELETE USERS
export const deleteUsers = async (id, dispatch) =>{
    dispatch(deleteUsersStart());
    try{
        // const res = await userRequest.delete(`/products/${id}`);
        dispatch(deleteUsersSuccess(id));
        // console.log(res.data);
    }
    catch (err){
        dispatch(deleteUsersFailure());
    }
};

// GET ORDERS

