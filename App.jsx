import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { ContextProvider } from './src/context/ContextProvider'; // Import your ContextProvider

export default function App() {
  return (
    <ContextProvider>
      <RootNavigator />
    </ContextProvider>
  );
}
