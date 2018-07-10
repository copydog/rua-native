import * as React from 'react'
import { View, Text } from 'react-native'
import { actions, D } from 'rua'
import { Button } from 'react-native-elements'
import Modal from 'react-native-modal'

@D.Connect(store => ({
  simpleModal: store.modal.simpleModal,
}))
export default class ReactNativeModalExample extends React.PureComponent<any, any>
{
  renderSimpleModal()
  {
    const { simpleModal } = this.props
    return (
      <Modal
        isVisible={simpleModal}
        onBackdropPress={this.handleHideAllModal}
      >
        <View>
          <Text>123</Text>
        </View>
      </Modal>
    )
  }

  handleHideAllModal()
  {
    actions.modal.hideAll()
  }

  handleShowModal(name)
  {
    return () => actions.modal.show(name)
  }

  render()
  {
    console.log(Modal)
    console.log(Button)
    return (
      <View>
        <Text>ReactNativeModal</Text>
        <Button title={'hi'} onPress={this.handleShowModal('SimpleModal')}/>
        {this.renderSimpleModal()}
      </View>
    )
  }
}

