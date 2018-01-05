"use strict";
/**
 * @typedef {Object} OrderSummary
 * @property {string} id
 * @property {Object[]} items
 * @property {string} currency
 * @property {Object} subtotal
 * @property {number} subtotal.amount
 * @property {number} subtotal.integerAmount
 * @property {Object} coupon
 * @property {number} coupon.discountedAmount
 * @property {string[]} subtotal.coupons
 * @property {Object} discount
 * @property {number} discount.amount
 * @property {number} discount.integerAmount
 * @property {string[]} discountNotifications
 * @property {Object} giftCertificate
 * @property {number} giftCertificate.totalDiscountedAmount
 * @property {string[]} giftCertificate.appliedGiftCertificates
 * @property {Object} shipping
 * @property {number} shipping.amount
 * @property {number} shipping.integerAmount
 * @property {number} shipping.amountBeforeDiscount
 * @property {number} shipping.integerAmountBeforeDiscount
 * @property {boolean} shipping.required
 * @property {Object} storeCredit
 * @property {number} storeCredit.amount
 * @property {Object} taxSubtotal
 * @property {number} taxSubtotal.amount
 * @property {number} taxSubtotal.integerAmount
 * @property {Object[]} taxes
 * @property {Object} taxTotal
 * @property {number} taxTotal.amount
 * @property {number} taxTotal.integerAmount
 * @property {Object} handling
 * @property {number} handling.amount
 * @property {number} handling.integerAmount
 * @property {Object} grandTotal
 * @property {number} grandTotal.amount
 * @property {number} grandTotal.integerAmount
 */
//# sourceMappingURL=order-summary.typedef.js.map