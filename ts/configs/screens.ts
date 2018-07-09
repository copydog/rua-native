// ----- Imports / 导入 -----
import { Home, Manual, Icons, Playground } from '../routes'
import { SimplePageExample, SimpleModalPageExample } from '../routes/example'

// ----- Screens / 页面 -----
export const home = {
  Home: { screen: Home },
  Manual: { screen: Manual },
  Icons: { screen: Icons },
  Playground: { screen: Playground },
}

export const main = {
  SimplePageExample: { screen: SimplePageExample }
}

export const drawer = {}

export const app = {
  SimpleModalPageExample: { screen: SimpleModalPageExample }
}
