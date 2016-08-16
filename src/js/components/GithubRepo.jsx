var React = require("react");

var GithubRepo = React.createClass({
    render: function() {
        return (
            <li>
                <a href={this.props.user.svn_url} className="repo" >
                    {this.props.user.full_name}
                </a>
            </li>
    );
    }
});

module.exports = GithubRepo;