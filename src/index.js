import React from 'react'
import {View, Text} from 'react-native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from '@redux/store'

// const store = createStore()

const Main = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <View>
                <Text>Hai</Text>
            </View>
            {/* <RootNavigator /> */}
        </PersistGate>
    </Provider>
)

export default Main