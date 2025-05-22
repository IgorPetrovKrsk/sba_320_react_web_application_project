
export type Action =
    | { type: 'TOGGLE'; payload: string }
    | { type: 'GET'; }
    | { type: 'CLEAR'; };


export default function favoritesReducer(state: string[], action: Action): string[] {
    switch (action.type) {
        case 'TOGGLE':
            const element = state.find(it=> it===action.payload);
            if (element) {
                state = state.filter(it => it !== action.payload); //one liner NO {}
            } else {
                state = [...state,action.payload];
            }
            localStorage.setItem('favorites', JSON.stringify(state));
            return state;
            break;
        case 'CLEAR':
            state = [];
            localStorage.setItem('favorites', JSON.stringify(state));
            return state;
            break;
        case 'GET':
            return state;
            break;
        default:
            return state;
    }

}
