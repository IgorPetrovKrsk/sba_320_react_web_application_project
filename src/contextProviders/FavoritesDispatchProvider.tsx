import type { ReactNode } from "react";
import { FavoritesDispatchContext } from "../App";
import type { Action } from "../reducers/favoritesReducer";

interface FavoritesDispatchProviderProps {
  children: ReactNode;
  dispatchFavorites: React.Dispatch<Action>;
}

const FavoritesDispatchProvider = ({children,dispatchFavorites}:FavoritesDispatchProviderProps) => {
    return (
        <FavoritesDispatchContext.Provider value={dispatchFavorites}>
            {children}
        </FavoritesDispatchContext.Provider>
    )
}

export default FavoritesDispatchProvider;