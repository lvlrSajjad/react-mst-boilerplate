/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./localization"
import {useState, useEffect} from "react"
import {initFonts} from "./theme/fonts" // expo
import {AppNavigator} from "./navigators"
import {RootStore, RootStoreProvider, setupRootStore} from "./models"

function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined)

  useEffect(() => {
    ;(async () => {
      await initFonts() // expo
      setupRootStore().then(setRootStore)
    })()
  }, [])

  if (!rootStore) return null

  // otherwise, we're ready to render the app
  return (
    <RootStoreProvider value={rootStore}>
      <AppNavigator/>
    </RootStoreProvider>
  )
}

export default App
