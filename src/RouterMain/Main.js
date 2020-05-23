import React from 'react';
import Products from '../components/ProductListComponent/Products';
import Gallery from '../components/GalleryComponent/Gallery';
import { Route, Switch } from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <Switch>
                 <Route exact path='/' component={Products}/>
                 <Route  exact path='/gallery' component={Gallery}/>
            </Switch>
        </div>
    )
}
