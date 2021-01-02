import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentScreen';
import ListScreen from './src/screens/ListScreen';
import Images from './src/screens/Images/images';
import Counter from './src/screens/Counter/Counter';
import FormContact from './src/screens/Form/Form';
import Colour from './src/screens/Colours/Colours';
import ChangeColours from './src/screens/ChangeColours/changeColours';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Lists: ListScreen,
    CustomImages: Images,
    Counter: Counter,
    FormContact: FormContact,
    Colour: Colour,
    ChangeColours: ChangeColours
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Katleho',
    },
  }
);

export default createAppContainer(navigator);
