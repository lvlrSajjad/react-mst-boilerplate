/**
 * A "modern" sleep statement.
 *
 * @param value
 */
import { isEmpty } from "validate.js"
import { Invoice, InvoiceDetails, WorkOrder } from "../models"

export const hasValue = (value: any) => !isEmpty(value)

export const emptyCheckedWorkOrder = (workOrder: any): WorkOrder => {

  const normalWorkOrder = workOrder;

  /// check for abnormalities
  if(!isEmpty(normalWorkOrder.invoice)) {
    if(isEmpty(normalWorkOrder.invoice.id)) {
      normalWorkOrder.invoice = {
        id: -1
      }
    }
  }

  // if(!isEmpty(normalWorkOrder.asset)) {
  //   if(isEmpty(normalWorkOrder.asset.id)) {
  //     normalWorkOrder.asset = {
  //       id: -1
  //     }
  //   }
  // }

  if(!isEmpty(normalWorkOrder.location)) {
    if(isEmpty(normalWorkOrder.location.id)) {
      normalWorkOrder.location = {
        id: -1,
        priority: {id: -1}
      }
    }
  }

  if(isEmpty(normalWorkOrder.problemType)) {
    normalWorkOrder.problemType = "Preventative Maintenance"
  }

  return normalWorkOrder;
}

export const emptyCheckedWorkOrders = (workOrders: any[]): WorkOrder[] => {
  const normalWorkOrders = [];
  workOrders.forEach(workOrder=> {
    normalWorkOrders.push(emptyCheckedWorkOrder(workOrder))
  })

  return normalWorkOrders;

}

export const emptyCheckedInvoice = (invoice: any): InvoiceDetails => {

  const normalInvoice = invoice;

  /// check for abnormalities
  if(!isEmpty(normalInvoice.workOrder)) {
    if(isEmpty(normalInvoice.workOrder.id)) {
      normalInvoice.workOrder = {
        id: -1
      }
    }
  }

  if(!isEmpty(normalInvoice.customer)) {
    if(isEmpty(normalInvoice.customer.id)) {
      normalInvoice.customer = {
        id: -1
      }
    }
  }

  // if(!isEmpty(normalInvoice.location)) {
  //   if(isEmpty(normalInvoice.location.id)) {
  //     normalInvoice.location = {
  //       id: -1
  //     }
  //   }
  // }

  return normalInvoice;
}

export const emptyCheckedInvoices = (invoices: any[]): Invoice[] => {
  const normalInvoices = [];

  invoices.forEach(invoice=>normalInvoices.push(emptyCheckedWorkOrder(invoice)))

  return normalInvoices;

}
