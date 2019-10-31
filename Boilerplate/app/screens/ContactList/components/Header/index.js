import React from 'react';
import { TouchableOpacity, View, StyleSheet,Text } from 'react-native';

const styles = StyleSheet.create({
  
});

const HeaderView = (props) => {
  return (
    <View style={{flex: 1, }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
      <Text style={{fontSize: 26, color: 'gray',}}>Invite</Text>
      </View>
      <View style={{flex: 1, right: 20, justifyContent: 'center', alignItems: 'center', position: 'absolute'}}>
      <TouchableOpacity
        style={{padding: 10}}
        // onPress={() => alert('WIP')}
        onPress={() => props.gotoHome()}
      >
        <Text style={{fontSize: 20, color: 'gray',}}>Skip</Text>
      </TouchableOpacity>
      </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: 'gray',}}>Co-worker and Friends</Text>
      </View>
    </View>
  );
};

export default HeaderView;
