/**
 * A "modern" sleep statement.
 *
 * @param value
 */
import { isEmpty } from "validate.js"

export const hasValue = (value: any) => !isEmpty(value)
