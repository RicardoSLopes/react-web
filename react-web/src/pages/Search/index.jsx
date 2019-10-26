import React, { Component } from 'react';
import axios from 'axios'

class Search extends Component {
    constructor(){
        super();

        this.state = {
            results:[],
        };

        //this.onSearch = this.onSearch.bind(this)
    }
    
    onSearch = (event) => { 
        //console.log('evento', event.currentTarget.value);
        const { value } = event.currentTarget;
        axios.get(`https://api.mercadollibre.com/sites/MBL/search?q=${value}`)
            .then(({ data }) => {
                // handle success
                this.setState({
                    results: data.results,
                });
                console.log(response);
            })
            .catch( (error) => {
                // handle error
                console.log(error);
            });
    }
    
    renderItem(){
        console.log('metodo render item');
        let items = [];

        for (let i = 0; i < this.state.results.length; i++) {
            items.push(
                <li key={`item_${item.id}`}>
                    { item.title  }
                </li>
            )
        }

        return items;
    }


    render(){
        return (
            <div>
                <input type="text" onChange={ this.onSearch }/>

                <ul>
                    { this.state.results.map(this.renderItem)}
                </ul>

            </div>
        );
    };
}

export default Search;