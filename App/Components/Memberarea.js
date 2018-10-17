import React from 'react';
import {View, TextInput, TouchableOpacity, FlatList, Text, KeyboardAvoidingView, StatusBar, ListView} from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Icon, List, ListItem } from 'native-base'

// import Icons from 'react-native-vector-icons/FontAwesome';
import Firebase from'../Firebase/firebase';

import styles from './Style/MemberareaStyles'
import ListItems from './ListItems'

const data =[]

export default class memberarea extends React.Component {

    constructor(props){
        super(props);
        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

        this.state = {
          listViewData: data,
          newContact: ""
        }
    }

    componentDidMount() {

        var that = this

        Firebase.database().ref('/contacts').on('child_added', (data) => {
    
          const newData = [...that.state.listViewData]
          newData.push(data)
          that.setState({ listViewData: newData })
    
        })
    
      }

      addRow(data) {

        const key = Firebase.database().ref('/contacts').push().key
        Firebase.database().ref('/contacts').child(key).set({ name: data })
      }
    
      async deleteRow(secId, rowId, rowMap, data) {
    
        await Firebase.database().ref('contacts/' + data.key).set(null)
    
        rowMap[`${secId}${rowId}`].props.closeRow();
        var newData = [...this.state.listViewData];
        newData.splice(rowId, 1)
        this.setState({ listViewData: newData });
    
      }
    
      showInformation() {
    
      }
    render (){
        return (

            <Container style={styles.container}>
        <Header style={{ marginTop: StatusBar.currentHeight }}>
          <Content>
            <Item>
              <Input
                onChangeText={(newContact) => this.setState({ newContact })}
                placeholder="Add name"
              />
              <Button onPress={() => this.addRow(this.state.newContact)}>
                <Icon name="add" />
              </Button>
            </Item>
          </Content>
        </Header>

        <Content>
          <List
            enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {data.val().name}</Text>
              </ListItem>
            }
            renderLeftHiddenRow={data =>
              <Button full onPress={() => this.addRow(data)} >
                <Icon name="information-circle" />
              </Button>
            }
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={() => this.deleteRow(secId, rowId, rowMap, data)}>
                <Icon name="trash" />
              </Button>

            }

            leftOpenValue={-75}
            rightOpenValue={-75}

          />

        </Content>
      </Container>

            // <View style={styles.container}>

            //     <View style={styles.wrapper}>
            //         <TextInput style={styles.input}
            //                    underlineColorAndroid = "transparent"
            //                    placeholder="test"
            //                    placeholderTextColor = "#AEB6BF"
            //                    onChangeText = {(newContact)=> this.setState({newContact})}
            //                    value = {this.state.newContact}
            //         />
            //         <TouchableOpacity onPress={() => this.addRow(this.state.newContact)}>
            //             <Icon name = "plus-square"
            //                 size={50}
            //                 color="#5DADE2"
            //             // style = {styles.iconStyle}
            //             />
            //         </TouchableOpacity>
            //     </View>

            // <View>
            //  {/* <FlatList  data={this.ds.cloneWithRows(this.state.listViewData)}
            //             renderItem={(data) =>
            //     <ListItems text={data.val().name}
            //                onpress={(data, secId, rowId, rowMap) => this.deleteRow(secId, rowId, rowMap, data)}/>}
            // /> */}
            // </View>
                
            // </View>
        )
    }
}