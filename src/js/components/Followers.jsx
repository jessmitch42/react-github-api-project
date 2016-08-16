var React = require("react");
var $ = require("jquery");
var GithubUser = require("./GithubUser");
var Infinite = require('react-infinite');

var Followers = React.createClass({
    getInitialState: function() {
        return {
            page: 1,
            loading: false,
            followers: []
        };
    },
    fetchData: function() {
        
        var follow = this.state.followers;
        var page = this.state.page
        this.setState({
            loading: true
        });
            
        var that = this;
        $.getJSON(`https://api.github.com/users/${this.props.params.username}/followers?page=${this.state.page}&per_page=200`,
                function(followers) {
                    // console.log(followers);
                    that.setState({
                        followers: follow.concat(followers),
                        loading: false,
                        page: (page.page + 1)
                    });
                }
            )
    },
    render: function() {
        // if (!this.state.followers) {
        //     return <div>LOADING FOLLOWERS...</div>;
        // }
        return (
                <div className="followers-page">
                <h2>Followers of {this.props.params.username}</h2>
                <ul>
                <Infinite isInfiniteLoading={this.state.loading} onInfiniteLoad={this.fetchData} useWindowAsScrollContainer elementHeight={90} infiniteLoadBeginEdgeOffset={100}>                
                {this.state.followers.map(
                    function (follower){
                        return (
                            <GithubUser user={follower} key={follower.id} />
                        );
                    }
                )}
                </Infinite>
                </ul>
            </div>
        );
    }
});

module.exports = Followers;

