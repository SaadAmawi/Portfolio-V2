import { createContext, useContext, useState } from "react";


const ToggleContext = createContext();

export function ToggleProvider({children}){
      const [toggledSection, setToggledSection] = useState("Work");

      return(
        <ToggleContext.Provider value={{toggledSection,setToggledSection}}>
            {children}
        </ToggleContext.Provider>
      )
}

export function useToggle() {
  return useContext(ToggleContext);
}