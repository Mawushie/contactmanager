import {applyMiddleware, compose, createStore} from 'redux'
import contactReducer from '../reducers/contactReducer'
import firebase from '../firebase/config'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import thunk from 'redux-thunk'


export const store = createStore(contactReducer,compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(firebase),
    reduxFirestore(firebase)
    ));

//applyMiddleware is used when you want to build packages on top of the normal
//redux react flow (the reason we doingthat for thunk because it is sort of interrupt the normal
//flow)