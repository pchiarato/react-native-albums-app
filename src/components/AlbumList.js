// imports
import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// class

class AlbumList extends Component {
        state = {
        albums: []
    }
    
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
            .catch(error => { console.log(error); });
    }
    renderAlbums() {
        return this.state.albums.map((album, index) => <AlbumDetail key={index} album={album} />);
    }
    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}
export default AlbumList;
