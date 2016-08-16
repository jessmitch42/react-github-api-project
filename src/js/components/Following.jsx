var React = require("react");
var $ = require("jquery");
var GithubUser = require("./GithubUser");


var Following = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        var that = this;

        $.getJSON(`https://api.github.com/users/${this.props.params.username}/following?access_token=75a83cd25bc3f0251f5866767a1afa78b6ee2976`)
            .then(
                function(following) {
                    that.setState({
                        following: following
                    });
                }
            );
    },
    render: function() {
        if (!this.state.following) {
            return <div>LOADING FOLLOWING...</div>;
        }
        return (
            <div className="following-page">
                <h2>{this.props.params.username} is Following:</h2>
                <ul>
                {this.state.following.map(
                    function (following){
                        return (
                            <GithubUser user={following} key={following.id} />
                        );
                    }
                )}
                </ul>
            </div>
        );
    }
});

module.exports = Following;