import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ListView,
} from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtistList extends Component {

  constructor(props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource:ds.cloneWithRows(props.artists)
    };
  }
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(artist) => <ArtistBox artist={artist}/>}
      />
    );
  }
}

