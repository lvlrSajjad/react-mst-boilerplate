import {GeneralApiProblem} from "./api-problem"
import {Character} from "../../models/character/character"
import {
  Asset,
  Auth,
  AuthCredentials,
  ForgotPasswordCredentials,
  Invoice,
  InvoiceDetails,
  Note,
  Location,
  Proposal,
  User,
  WorkOrder,
  WorkOrderFailureType,
  WorkOrderSearchParams,
  History
} from "../../models"
import {Attachment} from "../../models"
import {InvoiceResolution} from "../../models/invoice-resolution/invoice-resolution"
import {FailureTypeResolution} from "../../models/failure-type-resolution/failure-type-resolution"
import {ProposalDetails} from "../../models/proposal-details/proposal-details"
import {Profile} from "../../models/profile/profile";
import {Timezone} from "../../models/timezone/timezone";
import {ServiceProvider} from "../../models/service-provider/service-provider";
import {RFP} from "../../models/rfp/rfp";
import {RFPDetails} from "../../models/rfp-details/rfp-details";
import {RfpPriceQuote} from "../../models/rfp-price-quote/rfp-price-quote";

interface AssetProblemType {
  id: number,
  name: string
}

interface AssetType {
  id: number,
  description: string
}

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem

export type SearchWorkOrderParams = WorkOrderSearchParams
export type SearchWorkOrderResult =
  { kind: "ok"; workOrders: WorkOrder[], totalPages: number, last: boolean }
  | GeneralApiProblem

export type SearchProposalResult =
  { kind: "ok"; proposals: Proposal[], totalPages: number, last: boolean }
  | GeneralApiProblem

export type SearchRFPResult =
  { kind: "ok"; rfps: RFP[], totalPages: number, last: boolean }
  | GeneralApiProblem

export type SearchInvoiceResult =
  { kind: "ok"; invoices: Invoice[], totalPages: number, last: boolean }
  | GeneralApiProblem

export type SearchAssetResult = { kind: "ok"; assets: Asset[], totalPages: number, last: boolean } | GeneralApiProblem

export type GetAssetByIdResult = { kind: "ok"; asset: Asset } | GeneralApiProblem

export type GetFilterCriteriaResult = { kind: "ok"; criteria: string[] } | GeneralApiProblem

export type LoginParams = AuthCredentials
export type RefreshAuthParams = { refreshToken: string }
export type LoginResult = { kind: "ok"; auth: Auth } | { kind: "error"; message: string } | GeneralApiProblem

export type ForgotPasswordEmailParams = { username: string }
export type ForgotPasswordEmailResult = { kind: "ok" } | { kind: "error", message: string }

export type ForgotPasswordEmailConfirmParams = ForgotPasswordCredentials
export type ForgotPasswordEmailConfirmResult = { kind: "ok" } | { kind: "error", message: string }

export type GetWorkOrderDetailParams = { id: number }
export type GetWorkOrderDetailResult = { kind: "ok", workOrder: WorkOrder } | GeneralApiProblem

export type GetWorkOrderNotesParams = { id: number }
export type GetWorkOrderNotesResult = { kind: "ok", notes: Note[] } | GeneralApiProblem

export type GetWorkOrderHistoryParams = { id: number }
export type GetWorkOrderHistoryResult = { kind: "ok", history: History[] } | GeneralApiProblem

export type GetWorkOrderFailureTypesParams = { id: number }
export type GetWorkOrderFailureTypesResult = { kind: "ok", failureTypes: WorkOrderFailureType[] } | GeneralApiProblem

export type GetWorkOrderAttachmentsParams = { id: number }
export type GetWorkOrderAttachmentsResult = { kind: "ok", attachments: Attachment[] } | GeneralApiProblem

export type CreateWorkOrderNoteParams = { id: number, description: string, important: boolean }
export type CreateWorkOrderNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type ChangeWorkOrderStatusParams = { id: number, status: string }
export type ChangeWorkOrderStatusResult = {workOrder: WorkOrder, kind: "ok" } | GeneralApiProblem

export type ChangeWorkOrderEtaParams = { id: number, eta: string }
export type ChangeWorkOrderEtaResult = { kind: "ok" } | GeneralApiProblem

// TODO: UploadWorkOrderAttachmentResult

export type GetWorkOrderAttachmentByIdParams = { id: number, attachmentId: number }
export type GetWorkOrderAttachmentByIdResult = { kind: "ok", attachment: Attachment } | GeneralApiProblem

export type DeleteWorkOrderAttachmentsParams = { id: number, documentIds: number[] }
export type DeleteWorkOrderAttachmentsResult = { kind: "ok" } | GeneralApiProblem

export type CreateWorkOrderDirectNoteParams = { id: number, description: string, customerIds: number [], serviceProviderIds: number[], important: boolean }
export type CreateWorkOrderDirectNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type CreateInvoiceDirectNoteParams = { id: number, description: string, customerIds: number [], serviceProviderIds: number[] }
export type CreateInvoiceDirectNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type CreateAssetDirectNoteParams = { id: number, description: string, customerIds: number [], serviceProviderIds: number[] }
export type CreateAssetDirectNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type CreateProposalDirectNoteParams = { id: number, description: string, customerIds: number [], serviceProviderIds: number[] }
export type CreateProposalDirectNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type CreateRFPDirectNoteParams = { id: number, description: string, customerIds: number [], serviceProviderIds: number[] }
export type CreateRFPDirectNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type GetInvoiceDetailParams = { id: number }
export type GetInvoiceDetailResult = { kind: "ok", invoice: InvoiceDetails } | GeneralApiProblem

export type GetInvoiceNotesParams = { id: number }
export type GetInvoiceNotesResult = { kind: "ok", notes: Note[] } | GeneralApiProblem

export type GetAssetNotesParams = { id: number }
export type GetAssetNotesResult = { kind: "ok", notes: Note[] } | GeneralApiProblem

export type GetInvoiceHistoryParams = { id: number }
export type GetInvoiceHistoryResult = { kind: "ok", history: History[] } | GeneralApiProblem

export type GetInvoiceAttachmentsParams = { id: number }
export type GetInvoiceAttachmentsResult = { kind: "ok", attachments: Attachment[] } | GeneralApiProblem

export type GetAssetAttachmentsParams = { id: number }
export type GetAssetAttachmentsResult = { kind: "ok", attachments: Attachment[] } | GeneralApiProblem

export type GetProposalAttachmentsParams = { id: number }
export type GetProposalAttachmentsResult = { kind: "ok", attachments: Attachment[] } | GeneralApiProblem

export type GetRFPAttachmentsParams = { id: number }
export type GetRFPAttachmentsResult = { kind: "ok", attachments: Attachment[] } | GeneralApiProblem

export type GetRFPPriceQuotesParams = { id: number }
export type GetRFPPriceQuotesResult = { kind: "ok", priceQuotes: RfpPriceQuote[] } | GeneralApiProblem

export type CreateInvoiceNoteParams = { id: number, description: string }
export type CreateInvoiceNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type CreateAssetNoteParams = { id: number, description: string }
export type CreateAssetNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type GetResolutionsResult =
  { kind: "ok", invoiceResolutions: InvoiceResolution[], failureTypeResolutions: FailureTypeResolution[] }
  | GeneralApiProblem

export type GetWorkOrderLocationsParams = { longitude: number, latitude: number, distance: number, customerIds: string }
export type GetWorkOrderLocationsResult = { kind: "ok"; locations: Location[] } | GeneralApiProblem

export type GetWorkOrderDirectNoteUsersParams = { id: number, type: string }
export type GetWorkOrderDirectNoteUsersResult = { kind: "ok", users: User[] } | GeneralApiProblem

export type GetInvoiceDirectNoteUsersParams = { id: number, type: string }
export type GetInvoiceDirectNoteUsersResult = { kind: "ok", users: User[] } | GeneralApiProblem

export type GetAssetDirectNoteUsersParams = { id: number, type: string }
export type GetAssetDirectNoteUsersResult = { kind: "ok", users: User[] } | GeneralApiProblem

export type GetProposalDirectNoteUsersParams = { id: number, type: string }
export type GetProposalDirectNoteUsersResult = { kind: "ok", users: User[] } | GeneralApiProblem

export type GetRFPDirectNoteUsersParams = { id: number, type: string }
export type GetRFPDirectNoteUsersResult = { kind: "ok", users: User[] } | GeneralApiProblem

export type ValidateInvoiceNumberResult = { kind: "ok", invoiceNoExists: boolean } | GeneralApiProblem

export type GetProposalDetailParams = { id: number }
export type GetProposalDetailResult = { kind: "ok", proposal: ProposalDetails } | GeneralApiProblem

export type GetRFPDetailParams = { id: number }
export type GetRFPDetailResult = { kind: "ok", rfp: RFPDetails } | GeneralApiProblem

export type GetProposalNotesParams = { id: number }
export type GetProposalNotesResult = { kind: "ok", notes: Note[] } | GeneralApiProblem

export type GetRFPNotesParams = { id: number }
export type GetRFPNotesResult = { kind: "ok", notes: Note[] } | GeneralApiProblem

export type CreateProposalNoteParams = { id: number, description: string }
export type CreateProposalNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type CreateRFPNoteParams = { id: number, description: string, referenceId: number, serviceProviderIds: string[], customerIds: string[]  }
export type CreateRFPNoteResult = { kind: "ok", note: Note } | GeneralApiProblem

export type GetLocationByIdResult = { kind: "ok"; location: Location } | GeneralApiProblem

export type GetCustomersResult = { kind: "ok"; customers: User[] } | GeneralApiProblem

export type GetPermissionsResult = { kind: "ok"; permissions: any } | GeneralApiProblem

export type GetServiceProvidersParams = {customerId: number, locationId: number, assetTypeId: number, problemTypeId: number}
export type GetServiceProvidersResult = { kind: "ok"; serviceProviders: ServiceProvider[] } | GeneralApiProblem

export type ReassignWorkOrderParams = {workOrderId: number, serviceProviderId: number}
export type ReassignWorkOrderResult = { kind: "ok"; workOrder: WorkOrder } | GeneralApiProblem

export type UpdateNTEWorkOrderParams = {workOrderId: number, nte: number}
export type UpdateNTEWorkOrderResult = { kind: "ok"; workOrder: WorkOrder } | GeneralApiProblem

export type GetCustomerLocationsResult = { kind: "ok"; locations: Location[] } | GeneralApiProblem

export type GetAssetProblemTypesResult = { kind: "ok"; problemTypes: AssetProblemType[] } | GeneralApiProblem

export type GetCustomerAssetTypesResult = { kind: "ok"; assetTypes: AssetType[] } | GeneralApiProblem

export type GetProposalHistoryParams = { id: number }
export type GetProposalHistoryResult = { kind: "ok", history: History[] } | GeneralApiProblem

export type GetRFPHistoryParams = { id: number }
export type GetRFPHistoryResult = { kind: "ok", history: History[] } | GeneralApiProblem

export type PingAppleResult = { kind: "ok" } | GeneralApiProblem

export type GetInvoiceAttachmentByIdParams = { id: number, attachmentId: number }
export type GetInvoiceAttachmentByIdResult = { kind: "ok", attachment: Attachment } | GeneralApiProblem

export type GetAssetAttachmentByIdParams = { id: number, attachmentId: number }
export type GetAssetAttachmentByIdResult = { kind: "ok", attachment: Attachment } | GeneralApiProblem

export type GetProposalAttachmentByIdParams = { id: number, attachmentId: number }
export type GetProposalAttachmentByIdResult = { kind: "ok", attachment: Attachment } | GeneralApiProblem

export type GetRFPAttachmentByIdParams = { id: number, attachmentId: number }
export type GetRFPAttachmentByIdResult = { kind: "ok", attachment: Attachment } | GeneralApiProblem

export type DeleteInvoiceAttachmentsParams = { id: number, documentIds: number[] }
export type DeleteInvoiceAttachmentsResult = { kind: "ok" } | GeneralApiProblem

export type DeleteAssetAttachmentsParams = { id: number, documentIds: number[] }
export type DeleteAssetAttachmentsResult = { kind: "ok" } | GeneralApiProblem

export type DeleteProposalAttachmentsParams = { id: number, documentIds: number[] }
export type DeleteProposalAttachmentsResult = { kind: "ok" } | GeneralApiProblem

export type DeleteRFPAttachmentsParams = { id: number, documentIds: number[] }
export type DeleteRFPAttachmentsResult = { kind: "ok" } | GeneralApiProblem

export type GetProfileResult = { kind: "ok", profile: Profile } | GeneralApiProblem

export type EditProfileResult = { kind: "ok", profile: Profile } | GeneralApiProblem
export type EditProfileParams = {
  firstName: string,
  lastName : string,
  address1 : string,
  address2 : string,
  postalCode : string | number,
  city : string,
  state : string,
  timezoneId : number,
  phoneNumber : string
}


export type GetTimeZonesResult = { kind: "ok", timezones: Timezone[] } | GeneralApiProblem
