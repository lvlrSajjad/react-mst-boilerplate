import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { grey, primary, text } from "../../theme"
import { ColorPaletteModel } from "../color-palette/color-palette"
import { ColorTextModel } from "../color-text/color-text"

/**
 * Model description here for TypeScript hints.
 */
export const ColorSetModel = types
  .model("ColorSet")
  .props( {
      primaryScheme: types.optional(ColorPaletteModel, primary) ,
      primary: types.string,
      grey: types.optional(ColorPaletteModel, grey),
      text: types.optional(ColorTextModel, text),
      card: types.string,
      screen: types.string,
      toolbar: types.string,
      divider: types.string,
      error: types.string,
      warning: types.string,
      pass: types.string,
      safe: types.string,
      defaultText: types.string,
      transparent: types.string,
      overlay: types.string
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type ColorSetType = Instance<typeof ColorSetModel>
export interface ColorSet extends ColorSetType {}
type ColorSetSnapshotType = SnapshotOut<typeof ColorSetModel>
export interface ColorSetSnapshot extends ColorSetSnapshotType {}
