import type { ReactNode } from "react";
import { FavoritesDispatchContext, FavoritesContext } from "../App";
import type { Action } from "../reducers/favoritesReducer";

interface FavoritesDispatchProviderProps {
    children: ReactNode;
    favorites: string[];
    dispatchFavorites: React.Dispatch<Action>;
}

const FavoritesDispatchProvider = ({ children, favorites, dispatchFavorites }: FavoritesDispatchProviderProps) => {
    return (
        <FavoritesDispatchContext.Provider value={dispatchFavorites}>
            <FavoritesContext.Provider value={favorites}>
                {children}
            </FavoritesContext.Provider>
        </FavoritesDispatchContext.Provider>
    )
}

export default FavoritesDispatchProvider;