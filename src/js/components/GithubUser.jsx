var React = require("react");
var Link = require("react-router").Link;

var GithubUser = React.createClass({
    render: function() {
        return (
            <li>
                <Link className="follow" to={"/user/"+this.props.user.login}>
                    <img className="user-info__avatar" src={this.props.user.avatar_url} />
                    {this.props.user.login}
                </Link>
            </li>
    );
    }
});

// var GithubUser = function() {
//     return (
//         <Link to={"/user/"+this.props.user.login}>
//             <img src={this.props.user.avatar_url} />
//             {this.props.user.login}
//         </Link>
//     );
// };

module.exports = GithubUser;

/* 
Create a new pure component called GithubUser. It should receive a user prop, and use 
its avatar_url and login properties to display one GitHub user. The whole display should 
link back to that user's page in your app, using React Router's Link component. Here's 
what a sample output of your GithubUser component should look like:
<Link to="/user/ziad-saab">
  <img src="AVATAR URL"/>
  ziad-saab
</Link>
*/