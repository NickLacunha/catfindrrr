import React from 'react';

/*import {
    IndexLink,
    Link
} from 'react-router-dom';

import {
    ButtonToolbar,
    Button,
    Jumbotron
} from 'react-bootstrap';*/

export default class Home extends React.Component {
	
    render() {
        return (
        <div>
            <h2>HELLO</h2>
            <p>
                Cras facilisis urna ornare ex volutpat, et
                convallis erat elementum. Ut aliquam, ipsum vitae
                gravida suscipit, metus dui bibendum est, eget rhoncus nibh
                metus nec massa. Maecenas hendrerit laoreet augue
                nec molestie. Cum sociis natoque penatibus et magnis
                dis parturient montes, nascetur ridiculus mus.
            </p>

            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
            <img src="http://res.cloudinary.com/the-lacunha-group/image/upload/v1494379746/IMG_2484_dietcn.jpg" />
        </div>
    );
    }
}