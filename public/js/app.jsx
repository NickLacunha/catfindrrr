// this is some babel-y black magic
var { Router,
        Route,
        IndexRoute,
        IndexLink,
        hashHistory,
        Link } = ReactRouter;
		
var { ButtonToolbar,
		 Button,
		 Jumbotron,
		 FormGroup,
		 ControlLabel,
		 FormControl
	} = ReactBootstrap

var destination = document.querySelector("#container");

// home componenet
var Home = React.createClass({
	// this is where the cats go
    render: function() {
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
});

//contact component
var Contact = React.createClass({
    render: function() {
		// this 
        return (
        <div>
            <h2>GOT QUESTIONS?</h2>
            <p>
                The easiest thing to do is post on
                our <a href="http://forum.kirupa.com">forums</a>.
            </p>
        </div>
    );
    }
});

//stuff component
var Stuff = React.createClass({
    render: function() {
        return (
        <div>
            <h2>STUFF</h2>
            <p>
                Mauris sem velit, vehicula eget sodales vitae,
                rhoncus eget sapien:
            </p>
            <ol>
                <li>Nulla pulvinar diam</li>
                <li>Facilisis bibendum</li>
                <li>Vestibulum vulputate</li>
                <li>Eget erat</li>
                <li>Id porttitor</li>
            </ol>
        </div>
    );
    }
});

/* Catfindrrr components */
var SubmitCat = React.createClass({
	render: function() {
		return (
		<div>
			<form>
			<FormGroup
				controlId="formSubmitCat"
				
			>
				<ControlLabel>Submit yr cat here plz</ControlLabel>
				<FormControl
					type="file"
					accept="image"
				/>
				<FormControl.Feedback />
			</FormGroup>
			</form>
		</div>
		)
	;}


})

//Initial frame
var Layout = React.createClass({
    render: function() {
        return (
        <div className="main">
            <h1>C@findrrr</h1>
            <ButtonToolbar>
                <IndexLink to="/" activeClassName="active"><Button>Find Cats!</Button></IndexLink>
                <Link to="/stuff" activeClassName="active"><Button>Submit A Cat!</Button></Link>
                <Link to="/contact" activeClassName="active"><Button>Contact us!</Button></Link>
            </ButtonToolbar>
            <div className="content">
				<Jumbotron>
					{this.props.children}
				</Jumbotron>
            </div>
        </div>
		)
    }
});

ReactDOM.render(
<Router history={ReactRouter.hashHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="stuff" component={SubmitCat} />
        <Route path="contact" component={Contact} />
    </Route>
</Router>,
destination
        );