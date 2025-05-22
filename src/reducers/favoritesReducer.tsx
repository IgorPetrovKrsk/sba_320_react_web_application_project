
export type Action =
    | { type: 'ADD'; payload: string }
    | { type: 'DELETE'; payload: string }
    | { type: 'GET'; }
    | { type: 'CLEAR'; };


export default function favoritesReducer(state: string[], action: Action): string[] {
    switch (action.type) {
        case 'ADD':
            state.push(action.payload);
            localStorage.setItem('favorites', JSON.stringify(state));
            return state;
            break;
        case 'DELETE':
            state = state.filter(it => it !== action.payload); //one liner NO {}
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
