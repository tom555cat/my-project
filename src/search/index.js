'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo.png';
import './search.less';
import { common } from '../../common';
import {a} from './tree-shaking';
common();

class Search extends React.Component {

    constructor() {
        super(...arguments);

        this.state = {
            Text: null
        };
    }

    loadComponent() {
        import('./text.js').then((Text)=> {
            this.setState({
                Text: Text.default
            });
        });
    }

    render() {
        debugger;
        return <div className="search-text">
            {
                Text ? <Text /> : null
            }
            搜索文字的内容<img src={ logo } />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);