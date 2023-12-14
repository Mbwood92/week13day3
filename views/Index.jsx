const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemons } = this.props;
        // const pokemons = this.props.fruits;

        return (
            <div>
                <h1>Pokemon Index Page</h1>
                <nav>
                    <a href="/pokemon/new">Create a New Fruit</a>
                </nav>
        </div>

        )
    }
}

module.exports = Index;