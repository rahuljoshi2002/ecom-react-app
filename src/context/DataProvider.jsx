import { createContext, useState } from "react";

export const Data = createContext();

const DataProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    
    return <DataProvider value={{count, setCount}}>{children}</DataProvider>;
};

export default DataProvider;
