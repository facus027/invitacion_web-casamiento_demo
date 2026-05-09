import { weddingPaymentConfig } from "../config/payment.config"

export const calcTotal = (guests: number) => {
  return guests * weddingPaymentConfig.cardPrice
}