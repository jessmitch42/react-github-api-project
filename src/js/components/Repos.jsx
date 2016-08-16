var React = require("react");
var $ = require("jquery");
var GithubRepo = require("./GithubRepo");


var Repos = React.createClass({
    getInitialState: function() {
        return {};
    },
    componentDidMount: function() {
        var that = this;

        $.getJSON(`https://api.github.com/users/${this.props.params.username}/repos?access_token=75a83cd25bc3f0251f5866767a1afa78b6ee2976`)
            .then(
                function(repo) {
                    that.setState({
                        repo: repo
                    });
                }
            );
    },
    render: function() {
        if (!this.state.repo) {
            return <div>LOADING REPO'S...</div>;
        }
        return (
            <div className="repos">
                <h2>Repo's of {this.props.params.username}</h2>
                <ul>
                {this.state.repo.map(
                    function (eachRepo){
                        return (
                            <GithubRepo user={eachRepo} key={eachRepo.id} />
                        );
                    }
                )}
                </ul>
            </div>
        );
    }
});

module.exports = Repos;