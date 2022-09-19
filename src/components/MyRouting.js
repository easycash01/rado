import React from 'react'
import {useRoutes} from 'react-router-dom';

/* importo le rotte dal file  */
import {routes} from  '../routes';

function MyRouting() {
let element = useRoutes(routes)
    return element;
}

export default MyRouting;