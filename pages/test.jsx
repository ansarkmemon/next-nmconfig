import React, {Component} from 'react';
import config from '@config';

class Test extends Component {
    render() {
        console.log(config.get('app'));
        return (
            <div>
                <p>Hi</p>
            </div>
        );
    }
}

export default Test;