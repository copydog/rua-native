// ----- Imports / 导入 -----
import { Home, Manual, Icons, Playground } from '../routes'
import {
  SimplePageExample,
  SimpleModalPageExample,
  AntDesignMobileExample,
  ReactNativeModalExample,
} from '../routes/example'

// ----- Screens / 页面 -----
export const home = {
  Home: { screen: Home },
  Manual: { screen: Manual },
  Icons: { screen: Icons },
  Playground: { screen: Playground },
}

export const main = {
  SimplePageExample: { screen: SimplePageExample },
  AntDesignMobileExample: { screen: AntDesignMobileExample },
  ReactNativeModalExample: { screen: ReactNativeModalExample },
}

export const drawer = {}

export const app = {
  SimpleModalPageExample: { screen: SimpleModalPageExample }
}
