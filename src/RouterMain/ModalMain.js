import React from 'react';
import { Modal } from '../portals/Modal'
import { Route, Switch } from 'react-router-dom';

export default function ModalMain() {
    return (
        <div>
            <Switch>
                 <Route exact path='/:path/:id' component={Modal}/>
            </Switch>
        </div>
    )
}
