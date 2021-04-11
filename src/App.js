import './App.css';
import React from 'react';
import Layout from "./components/layout";
import {
    BrowserRouter, Switch, Route, Link
} from 'react-router-dom'

// Firebase deps
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import initializeFirebase from "./firebase/initializeFirebase";

import { useAuthState, useDarkMode } from "./hooks/hooks";

import Quiz from "./components/quiz";
import {Text} from "rebass";

import Channel from "./components/chat/Channel";
import Loader from "./components/Loader";

//initialize firebase
initializeFirebase();

const App = () => {
  const { user, initializing } = useAuthState(firebase.auth());
  // not super sure how to do dark mode
  /*const [darkMode, setDarkMode] = useDarkMode();

  const brandLogo = darkMode
    ? `${process.env.PUBLIC_URL}/the-big-boyz-logo.svg`
    : `${process.env.PUBLIC_URL}/the-big-boyz-logo-dark.svg`;

  const ThemeIcon = darkMode ? SunIcon : MoonIcon; */

  const signInWithGoogle = async () => {
    // Retrieve Google provider object
    const provider = new firebase.auth.GoogleAuthProvider();
    // Set language to the default browser preference
    firebase.auth().useDeviceLanguage();
    // Start sign in process
    try {
      await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderContent = () => {
    if (initializing) {
      return (
        <div className="flex items-center justify-center h-full">
          <Loader size="lg" />
        </div>
      );
    };

    // login logic
    // if user is logged in render this
    if (user) {
      return (
        <BrowserRouter>
          <Layout>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/quiz">Quiz</Link></p>
            {/* <p><Link to="/chat">Chat</Link></p> */}
            <Switch>
              <Route path="/quiz"><Quiz /></Route>
              <Route path="/chat"><Channel user={user}/></Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </Layout>
        </BrowserRouter>
      )
    };
    // else not logged in prompt them to login via google
    return (
      <button
        onClick={signInWithGoogle}
        className="rounded shadow-button pl-6 pr-8 py-3 bg-white hover:bg-gray-50 text-gray-600 font-medium flex items-center justify-center overflow-y-hidden focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75"
      >
        <svg
          viewBox="5 -5 30 30"
          enableBackground="new 5 -5 30 30"
          className="w-6 h-6 mr-4 flex-shrink-0"
        >
        <path
          fill="#fff"
          d="M15.3-4.2C11.6-3 8.4-.2 6.6 3.2 6 4.5 5.6 5.7 5.3 7c-.7 3.3-.2 6.7 1.3 9.7 1 1.9 2.4 3.7 4.2 5 1.6 1.3 3.5 2.2 5.6 2.7 2.6.7 5.3.7 7.8.1 2.3-.5 4.5-1.6 6.3-3.2 1.9-1.7 3.2-3.9 3.9-6.2.8-2.6.9-5.3.4-8-4.8 0-9.6 0-14.4 0 0 2 0 3.9 0 5.9 2.8 0 5.6 0 8.3 0-.3 1.9-1.5 3.6-3.1 4.6-1 .7-2.2 1.1-3.4 1.3-1.2.2-2.5.2-3.7 0-1.2-.2-2.4-.7-3.4-1.4-1.6-1.1-2.9-2.8-3.5-4.6-.7-1.9-.7-4 0-5.8.5-1.3 1.2-2.5 2.2-3.5 1.2-1.2 2.8-2.1 4.6-2.5 1.5-.3 3-.2 4.5.2 1.2.4 2.4 1 3.3 1.9.9-.9 1.9-1.8 2.8-2.8.5-.5 1-1 1.5-1.5-1.4-1.3-3.1-2.3-4.9-3-3.3-1.2-7-1.2-10.3-.1z"
        />
        <path
          fill="#EA4335"
          d="M15.3-4.2c3.3-1.1 7-1.1 10.3.1 1.8.7 3.5 1.7 4.9 3-.5.5-1 1-1.5 1.5-.9.9-1.9 1.8-2.8 2.8-.9-.9-2.1-1.5-3.3-1.9-1.4-.4-3-.5-4.5-.2-1.7.4-3.3 1.2-4.6 2.5-1 1-1.8 2.2-2.2 3.5-1.7-1.3-3.3-2.5-5-3.8 1.8-3.5 5-6.2 8.7-7.5z"
        />
        <path
          fill="#FBBC05"
          d="M5.3 7c.3-1.3.7-2.6 1.3-3.7 1.7 1.3 3.3 2.5 5 3.8-.7 1.9-.7 4 0 5.8-1.7 1.3-3.3 2.5-5 3.8-1.5-2.9-2-6.4-1.3-9.7z"
        />
        <path
          fill="#4285F4"
          d="M20.3 7.2c4.8 0 9.6 0 14.4 0 .5 2.6.4 5.4-.4 8-.7 2.4-2 4.6-3.9 6.2-1.6-1.2-3.2-2.5-4.9-3.7 1.6-1.1 2.7-2.8 3.1-4.6-2.8 0-5.6 0-8.3 0 0-2 0-4 0-5.9z"
        />
        <path
          fill="#34A853"
          d="M6.6 16.7c1.7-1.3 3.3-2.5 5-3.8.6 1.8 1.9 3.5 3.5 4.6 1 .7 2.2 1.2 3.4 1.4 1.2.2 2.4.2 3.7 0 1.2-.2 2.4-.6 3.4-1.3 1.6 1.2 3.2 2.5 4.9 3.7-1.8 1.6-3.9 2.7-6.3 3.2-2.6.6-5.3.6-7.8-.1-2-.5-3.9-1.5-5.6-2.7-1.7-1.3-3.2-3-4.2-5z"
        />
        </svg>
          Sign in with Google
      </button>
    )
  }
  
  return (
    <div className="App">
      {/* This header thingy to hold the signout button is gonna need to be restyled*/}
      <header
        className="flex-shrink-0 flex items-center justify-between px-4 sm:px-8 shadow-md"
        style={{ height: "var(--topbar-height)" }}
      >
        <div className="flex items-center">
          {user ? (
            <button
              onClick={signOut}
              className="uppercase text-sm font-medium text-primary-500 hover:text-white tracking-wide hover:bg-primary-500 bg-transparent rounded py-2 px-4 mr-4 focus:outline-none focus:ring focus:ring-primary-500 focus:ring-opacity-75 transition-all"
            >
              Sign out
            </button>
          ) : null}
          {/* <ThemeIcon
            className="h-8 w-8 cursor-pointer"
            onClick={() => setDarkMode((prev) => !prev)}
          /> */}
        </div>
      </header>
      {renderContent()}
    </div>
  )
}

const Home = () => (
  <Text fontSize={[ 3, 4, 5 ]} color='primary'>
    Home Page
  </Text>
)

export default App;
