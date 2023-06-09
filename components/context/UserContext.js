import { createContext, useState } from 'react';

const UserContext = createContext({});
const UserDispatchContext = createContext({});

const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    sleepGoal: '8',
    awakeningGoal: new Date(),
    showGoals: false
  });

  return (
    <UserContext.Provider value={userDetails}>
      <UserDispatchContext.Provider value={setUserDetails}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext, UserDispatchContext };