import React from 'react'
import { View, FlatList, Text, StyleSheet, Switch, Modal, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import PropTypes from 'prop-types'

import Ionicons from 'react-native-vector-icons/Ionicons'
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons'

import { addTodo, toggleTodo, removeTodo, changeFilter } from './actions'
// import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from './constants'
import { getVisibleTodos } from './selectors'
import messages from './messages'
import theme from '../../theme'

import Button from '../../components/Button'

import reducer from './reducer'
import registerReducer from '../../registerReducer'

import checkIconImg from '../../assets/check-icon.png'

const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color={theme.colors.primary} />
)

// register the reducer
registerReducer('todos', reducer)

const styles = StyleSheet.create({
  container: {
   flex: 1
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    fontSize: 18,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  itemText: {
    paddingLeft: 20,
    flex: 1
  },
  itemButton: {
    flex:0
  }
})

class TodoPage extends React.PureComponent {

  static navigationOptions = ({navigation}) => ({
    title: 'Todos',
    headerRight: (
      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item title="search" iconName="ios-add" onPress={navigation.getParam('showAddModal') } />
      </HeaderButtons>
    )
  })

  state = {
    addModalVisible: false,
    newTodoText: ''
  }

  componentDidMount() {
    const { navigation } = this.props
    navigation.setParams({
      showAddModal: () => {
        this.setState({
          addModalVisible: true
        })
      }
    })
  }

  onChange(text) {
    this.setState({
      newTodoText: text
    })
  }

  changeFilter(e, filter) {
    const { changeFilter } = this.props
    changeFilter(filter)
  }

  addTodo(e) {
    const { addTodo } = this.props
    const { newTodoText } = this.state

    if (!newTodoText) return

    addTodo(newTodoText)
    this.setState({
      newTodoText: '',
      addModalVisible: false
    })
  }

  toggleTodo(e, todo) {
    const { toggleTodo } = this.props
    toggleTodo(todo)
  }

  removeTodo(e, todo) {
    const { removeTodo } = this.props
    removeTodo(todo)
  }

  render() {
    const { todos, intl } = this.props
    const { newTodoText, addModalVisible } = this.state
    return (
      <View style={styles.container}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Switch value={item.done} onChange={(e) => this.toggleTodo(e, item)} />
              <Text style={styles.itemText}>{item.text}</Text>
              <Button style={styles.itemButton} onPress={(e) => this.removeTodo(e, item)} title="X" />
            </View>
          )}
        />
        <Modal
          animationType="slide"
          visible={addModalVisible}
          onRequestClose={() => {}}
        >
          <View style={{ padding: 40, justifyContent: 'center', alignContent: 'center' }}>
            <Image source={checkIconImg} style={{ height: 200, marginTop: 100, marginBottom: 50 }} resizeMode="contain" />
            <TextInput placeholder={intl.formatMessage(messages.newTodo)} autoCorrect onChangeText={this.onChange.bind(this)} value={newTodoText} style={{height: 40, borderColor: '#ddd', borderWidth: 1, marginTop:theme.spaces.default, marginBottom:theme.spaces.default, paddingLeft: theme.lookAndFeel.paddingVertical, paddingRight: theme.lookAndFeel.paddingVertical }} />
            <Button title={intl.formatMessage(messages.add)} onPress={() => this.addTodo(newTodoText) } style={{marginBottom: theme.spaces.default}} />
            <Button title={intl.formatMessage(messages.cancel)} onPress={() => this.setState({ addModalVisible: false }) } />
          </View>
        </Modal>
      </View>
    )
  }
}

TodoPage.defaultProps = {
  navigation: {}
}

TodoPage.propTypes = {
  navigation: PropTypes.object,
  changeFilter: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
  intl: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state),
  filter: state.todos.filter
})
const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodo(todo)),
  toggleTodo: todo => dispatch(toggleTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  changeFilter: filter => dispatch(changeFilter(filter))
})

export default injectIntl(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoPage)
)
