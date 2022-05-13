import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const LocationModel = types
  .model("Location")
  .props( {
    id: types.number,
    name: types.maybe(types.string),
    storeNumber: types.maybeNull(types.string),
    locationType: types.maybeNull(types.string)
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

type LocationType = Instance<typeof LocationModel>
export interface ColorPalette extends LocationType {}
type LocationSnapshotType = SnapshotOut<typeof LocationModel>
export interface LocationSnapshot extends LocationSnapshotType {}
