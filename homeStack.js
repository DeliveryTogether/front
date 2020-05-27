import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from './Participation';
import Payment from './Payment';
const screens = {
    Home:{
        screen: Home
    },
    Payment:{
        screen: Payment
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
