import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ColorTextModel = types
  .model("ColorText")
  .props( {
    light: types.string,
    dim: types.string,
    dark: types.string,
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type ColorTextType = Instance<typeof ColorTextModel>
export interface ColorText extends ColorTextType {}
type ColorTextSnapshotType = SnapshotOut<typeof ColorTextModel>
export interface ColorTextSnapshot extends ColorTextSnapshotType {}
