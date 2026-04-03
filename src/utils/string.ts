import { parsePhoneNumberWithError } from "libphonenumber-js"

import { formatIncompletePhoneNumber } from "@/lib/libphonenumber"

export function decodeEmail(email: string) {
  return atob(email)
}

export function decodePhoneNumber(phone: string) {
  return atob(phone)
}

export function formatPhoneNumber(phone: string) {
  const parsed = parsePhoneNumberWithError(phone)
  return parsed ? parsed.formatInternational() : phone
}
