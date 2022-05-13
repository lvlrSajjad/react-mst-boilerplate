import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { CharacterStoreModel } from "../character-store/character-store"
import { WorkOrderStoreModel } from "../work-order-store/work-order-store"
import { InvoiceStoreModel } from "../invoice-store/invoice-store"
import { ProposalStoreModel } from "../proposal-store/proposal-store"
import { AuthStoreModel } from "../auth-store/auth-store"
import { AttachmentStoreModel } from "../attachment-store/attachment-store"
import { ThemeStoreModel } from "../theme-store/theme-store"
import { SettingsStoreModel } from "../settings-store/settings-store"
import { GeolocationStoreModel } from "../geolocation-store/geolocation-store"
import { WorkOrderScreenStoreModel } from "../work-order-screen-store/work-order-screen-store"
import { InvoiceFailureTypeStoreModel } from "../invoice-failure-type-store/invoice-failure-type-store"
import { AssetStoreModel } from "../asset-store/asset-store"
import { LocationStoreModel } from "../location-store/location-store"
import { WorkOrderDetailsStoreModel } from "../work-order-details-store/work-order-details-store"
import { WorkOrderAttachmentsStoreModel } from "../work-order-attachments-store/work-order-attachments-store"
import { WorkOrderNotesStoreModel } from "../work-order-notes-store/work-order-notes-store"
import { WorkOrderHistoryStoreModel } from "../work-order-history-store/work-order-history-store"
import { InvoiceNotesStoreModel } from "../invoice-notes-store/invoice-notes-store"
import { ProposalNotesStoreModel } from "../proposal-notes-store/proposal-notes-store"
import { WorkOrderLocationsStoreModel } from "../work-order-locations-store/work-order-locations-store"
import { WorkOrderCriteriaStoreModel } from "../work-order-criteria-store/work-order-criteria-store"
import { ProposalHistoryStoreModel } from "../proposal-history-store/proposal-history-store"
import { WorkOrderFailureTypesStoreModel } from "../work-order-failure-types-store/work-order-failure-types-store"
import {NetStateStoreModel} from "../net-state-store/net-state-store";
import {InvoiceAttachmentsStoreModel} from "../invoice-attachments-store/invoice-attachments-store";
import {AssetAttachmentsStoreModel} from "../asset-attachments-store/asset-attachments-store";
import {AssetNotesStoreModel} from "../asset-notes-store/asset-notes-store";
import {ProfileStoreModel} from "../profile-store/profile-store";
import {CustomerStoreModel} from "../customer-store/customer-store";
import {ProposalAttachmentsStoreModel} from "../proposal-attachments-store/proposal-attachments-store";
import {ServiceProviderStoreModel} from "../service-provider-store/service-provider-store";
import {RFPStoreModel} from "../rfp-store/rfp-store";
import {RFPAttachmentsStoreModel} from "../rfp-attachments-store/rfp-attachments-store";
import {RFPNotesStoreModel} from "../rfp-notes-store/rfp-notes-store";
import {RFPHistoryStoreModel} from "../rfp-history-store/rfp-history-store";
import {RFPPriceQuotesStoreModel} from "../rfp-price-quotes-store/rfp-price-quotes-store";

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  characterStore: types.optional(CharacterStoreModel, {} as any),
  workOrderStore: types.optional(WorkOrderStoreModel, {} as any),
  workOrderScreenStore: types.optional(WorkOrderScreenStoreModel, {} as any),
  // workOrderSearchParams: types.optional(WorkOrderSearchParamsModel, {} as any),
  invoiceStore: types.optional(InvoiceStoreModel, {} as any),
  proposalStore: types.optional(ProposalStoreModel, {} as any),
  authStore: types.optional(AuthStoreModel, {} as any),
  attachmentStore: types.optional(AttachmentStoreModel, {} as any),
  themeStore: types.optional(ThemeStoreModel, {} as any),
  settingsStore: types.optional(SettingsStoreModel, {} as any),
  geolocationStore: types.optional(GeolocationStoreModel, {} as any),
  invoiceFailureTypeStore: types.optional(InvoiceFailureTypeStoreModel, {} as any),
  assetStore: types.optional(AssetStoreModel, {} as any),
  locationStore: types.optional(LocationStoreModel, {} as any),
  workOrderDetailsStore: types.optional(WorkOrderDetailsStoreModel, {} as any),
  workOrderAttachmentsStore: types.optional(WorkOrderAttachmentsStoreModel, {} as any),
  workOrderNotesStore: types.optional(WorkOrderNotesStoreModel, {} as any),
  workOrderHistoryStore: types.optional(WorkOrderHistoryStoreModel, {} as any),
  workOrderCriteriaStore: types.optional(WorkOrderCriteriaStoreModel, {} as any),
  workOrderLocationsStore: types.optional(WorkOrderLocationsStoreModel, {} as any),
  invoiceNotesStore: types.optional(InvoiceNotesStoreModel, {} as any),
  proposalNotesStore: types.optional(ProposalNotesStoreModel, {} as any),
  proposalHistoryStore: types.optional(ProposalHistoryStoreModel, {} as any),
  workOrderFailureTypeStore: types.optional(WorkOrderFailureTypesStoreModel, {} as any),
  netStateStore: types.optional(NetStateStoreModel, {} as any),
  invoiceAttachmentsStore: types.optional(InvoiceAttachmentsStoreModel, {} as any),
  assetAttachmentsStore: types.optional(AssetAttachmentsStoreModel, {} as any),
  assetNotesStore: types.optional(AssetNotesStoreModel, {} as any),
  profileStore: types.optional(ProfileStoreModel, {} as any),
  customerStore: types.optional(CustomerStoreModel, {} as any),
  proposalAttachmentsStore: types.optional(ProposalAttachmentsStoreModel, {} as any),
  serviceProviderStore: types.optional(ServiceProviderStoreModel, {} as any),
  rfpStore: types.optional(RFPStoreModel, {} as any),
  rfpHistoryStore: types.optional(RFPHistoryStoreModel, {} as any),
  rfpNotesStore: types.optional(RFPNotesStoreModel, {} as any),
  rfpPriceQuotesStore: types.optional(RFPPriceQuotesStoreModel, {} as any),
  rfpAttachmentsStore: types.optional(RFPAttachmentsStoreModel, {} as any)
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
