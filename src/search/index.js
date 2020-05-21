'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo.png';
import './search.less';
import { common } from '../../common';
import {a} from './tree-shaking';
common();

class Search extends React.Component {

    render() {
        debugger;
        return <div className="search-text">
            搜索文字的内容<img src={ logo } />
        </div>;
    }
}

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);