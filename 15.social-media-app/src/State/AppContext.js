import {CreateContext} from 'react';

const init_state = {
    newFeed : false,
}

export const AppContext = CreateContext(init_state)