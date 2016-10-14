const Menu = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Nav</h1>
                <ul className="header">
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
                    <li><Link to="/contact" activeClassName="active">Contact</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

export default Menu;