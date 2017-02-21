export default class uber extends Component {
  constructor(props) {
      super(props);
      this.state = {
          destLong: '',
          destLat: ''
      }
  }
    
  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>
          UBER EVERYWHERE
        </Text>
        <Text style={styles.welcome}>
          See how expensive your ride will be
        </Text>
        <Button title="Log current location"
                color="#841584"
                onPress={onCurrentLocButtonPress}
        />
        <TextInput style={styles.destination}
            editable={true}
            placeholder='Destination - Longitude'
            onChangeText={(destLong) => this.setState({destLong})}  
        />
        <TextInput style={styles.destination}
            editable={true}
            placeholder='Destination - Latitude'
            onChangeText={(destLat) => this.setState({destLat})}

        />
        <Button title="Here's how much you're out, mate"
                color="#841584"
                //onPress=""
        />
      </View>
    );
  }
}