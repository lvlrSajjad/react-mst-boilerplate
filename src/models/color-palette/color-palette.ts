import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ColorPaletteModel = types
  .model("ColorPalette")
  .props( {
    50: types.string,
    100: types.string,
    200: types.string,
    300: types.string,
    400: types.string,
    500: types.string,
    600: types.string,
    700: types.string,
    800: types.string,
    900: types.string,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type ColorPaletteType = Instance<typeof ColorPaletteModel>
export interface ColorPalette extends ColorPaletteType {}
type ColorPaletteSnapshotType = SnapshotOut<typeof ColorPaletteModel>
export interface ColorPaletteSnapshot extends ColorPaletteSnapshotType {}
