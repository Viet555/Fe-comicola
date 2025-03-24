import { createContext, useContext } from "react";
import { useDispatch } from "react-redux";

const DispatchContext = createContext(null);

export const DispatchProvider = ({ children }) => {
    const dispatch = useDispatch();
    return (
        <DispatchContext.Provider value={dispatch}>
            {children}
        </DispatchContext.Provider>
    );
};

export const useAppDispatch = () => {
    return useContext(DispatchContext);
};
