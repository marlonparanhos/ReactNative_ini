import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import Parimpar from './componentes/Parimpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador numeroInicial={100} />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena'}
    },
    Inverter: {
        screen: () => <Inverter texto='React Nativo' />
    },
    Parimpar: {
        screen: () => <Parimpar numero={30} />,
        navigationOptions: { title: 'Par & Ímpar'}
    },
    Simples: {
        screen: () => <Simples texto='Flexível!!!' />
    }
}, {drawerWidth: 300})