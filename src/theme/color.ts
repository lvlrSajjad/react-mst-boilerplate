import { hasValue } from "../utils/empty-check"
import { ColorSet } from "../models/color-set/color-set"

export const primary = {
  50: "#E0EEF9",
  100: "#B3D5F0",
  200: "#80B9E7",
  300: "#4D9CDD",
  400: "#2687D5",
  500: "#0072CE",
  600: "#006AC9",
  700: "#005FC2",
  800: "#0055BC",
  900: "#0042B0",
}

export const primaryColors = {
  blue: "#0072CE",
  red: "#E05637",
  semiRed: "#FF3B30",
  yellow: "#F3AD44",
  green: "#27AE60",
  lightBlue: "#81B9E4",
  splashBlueLight: "#179DF1",
  splashBlueDark: "#181F5B",
}

export const grey = {
  50: "#FAFAFA",
  100: "#F5F5F5",
  200: "#EEEEEE",
  300: "#E0E0E0",
  400: "#BDBDBD",
  500: "#9E9E9E",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
}

export const text = {
  light: "#FFFFFF",
  dim: "#939AA4",
  dark: "#212121",
}

export const transparent = "rgba(0, 0, 0, 0)"

export const darkOverlay = "rgba(0, 0, 0, 0.5)"

export const lightOverlay = "rgba(256, 256, 256, 0.5)"

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner color.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const colorLight: ColorSet = {
  primaryScheme: primary ,
  primary: primary["500"],
  grey,
  text,
  card: "#FFFFFF",
  screen: "#F5F5F5",
  toolbar: "#FFFFFF",
  divider: grey["400"],
  error: primaryColors.red,
  warning: primaryColors.yellow,
  pass: primaryColors.green,
  safe: primaryColors.lightBlue,
  defaultText: text.dark,
  transparent,
  overlay: darkOverlay
}
export const colorDark: ColorSet = {
  primaryScheme:  primary ,
  primary: primary["500"],
  grey,
  text,
  card: "#212121",
  screen: "#121212",
  toolbar: "#212121",
  divider: grey["800"],
  error: primaryColors.red,
  warning: primaryColors.yellow,
  pass: primaryColors.green,
  safe: primaryColors.lightBlue,
  defaultText: text.light,
  transparent,
  overlay: lightOverlay
}

export let colorScheme = "light"
export let preferredColor: ColorSet = colorLight

export function setColorScheme(scheme: string) {
  if (hasValue(scheme)) {
    if(colorScheme !== scheme ) {
      colorScheme = scheme
      if (colorScheme === "dark") {
        preferredColor = colorDark
      } else {
        preferredColor = colorLight
      }
    }
  }
}
