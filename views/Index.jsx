const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        // const pokemon = this.props.fruits;

        return (
            <div>
                <h1>"Gotta Catch 'Em All"</h1>
                <nav>
                    <a href="/pokemon/new">Create a New Pokemon</a>
                </nav>
                <ul>
                    {pokemon.map((pokemon, i) => {
                        return (
                            <li key={i}>
            
                                <a href={`/pokemon/${pokemon._id}`}>
                                    Name:
                                    <br />
                                    {pokemon.name}
                                    <br />
                                 <br />
                                <img src={pokemon.img}/> 
                                </a> 
                                
                            </li>
                        )
                    })

                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;