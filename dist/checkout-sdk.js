module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 90);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@bigcommerce/data-store");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var invalid_argument_error_1 = __webpack_require__(128);
exports.InvalidArgumentError = invalid_argument_error_1.default;
var missing_data_error_1 = __webpack_require__(129);
exports.MissingDataError = missing_data_error_1.default;
var not_implemented_error_1 = __webpack_require__(130);
exports.NotImplementedError = not_implemented_error_1.default;
var not_initialized_error_1 = __webpack_require__(131);
exports.NotInitializedError = not_initialized_error_1.default;
var request_error_1 = __webpack_require__(34);
exports.RequestError = request_error_1.default;
var standard_error_1 = __webpack_require__(12);
exports.StandardError = standard_error_1.default;
var timeout_error_1 = __webpack_require__(132);
exports.TimeoutError = timeout_error_1.default;
var unrecoverable_error_1 = __webpack_require__(133);
exports.UnrecoverableError = unrecoverable_error_1.default;
var unsupported_browser_error_1 = __webpack_require__(134);
exports.UnsupportedBrowserError = unsupported_browser_error_1.default;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var selector_decorator_1 = __webpack_require__(46);
exports.selectorDecorator = selector_decorator_1.default;
var selector_decorator_2 = __webpack_require__(46);
exports.selector = selector_decorator_2.default;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(64);
var PaymentStrategy = /** @class */ (function () {
    function PaymentStrategy(_store) {
        this._store = _store;
        this._isInitialized = false;
    }
    PaymentStrategy.prototype.finalize = function (options) {
        return Promise.reject(new errors_1.OrderFinalizationNotRequiredError());
    };
    PaymentStrategy.prototype.initialize = function (options) {
        this._isInitialized = true;
        return Promise.resolve(this._store.getState());
    };
    PaymentStrategy.prototype.deinitialize = function (options) {
        this._isInitialized = false;
        return Promise.resolve(this._store.getState());
    };
    return PaymentStrategy;
}());
exports.default = PaymentStrategy;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(91), exports);
var checkout_client_1 = __webpack_require__(44);
exports.CheckoutClient = checkout_client_1.default;
var checkout_service_1 = __webpack_require__(45);
exports.CheckoutService = checkout_service_1.default;
var checkout_store_error_selector_1 = __webpack_require__(93);
exports.CheckoutStoreErrorSelector = checkout_store_error_selector_1.default;
var checkout_store_selector_1 = __webpack_require__(102);
exports.CheckoutStoreSelector = checkout_store_selector_1.default;
var checkout_store_status_selector_1 = __webpack_require__(103);
exports.CheckoutStoreStatusSelector = checkout_store_status_selector_1.default;
var create_checkout_client_1 = __webpack_require__(48);
exports.createCheckoutClient = create_checkout_client_1.default;
var create_checkout_service_1 = __webpack_require__(236);
exports.createCheckoutService = create_checkout_service_1.default;
var create_checkout_store_1 = __webpack_require__(87);
exports.createCheckoutStore = create_checkout_store_1.default;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var bind_decorator_1 = __webpack_require__(94);
exports.bindDecorator = bind_decorator_1.default;
var create_freeze_proxy_1 = __webpack_require__(95);
exports.createFreezeProxy = create_freeze_proxy_1.default;
exports.createFreezeProxies = create_freeze_proxy_1.createFreezeProxies;
var cancellable_promise_1 = __webpack_require__(96);
exports.CancellablePromise = cancellable_promise_1.default;
var get_environment_1 = __webpack_require__(97);
exports.getEnvironment = get_environment_1.default;
var merge_or_push_1 = __webpack_require__(98);
exports.mergeOrPush = merge_or_push_1.default;
var omit_deep_1 = __webpack_require__(47);
exports.omitDeep = omit_deep_1.default;
var omit_private_1 = __webpack_require__(99);
exports.omitPrivate = omit_private_1.default;
var set_prototype_of_1 = __webpack_require__(100);
exports.setPrototypeOf = set_prototype_of_1.default;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var payment_argument_invalid_error_1 = __webpack_require__(168);
exports.PaymentArgumentInvalidError = payment_argument_invalid_error_1.default;
var payment_method_invalid_error_1 = __webpack_require__(169);
exports.PaymentMethodInvalidError = payment_method_invalid_error_1.default;
var payment_method_cancelled_error_1 = __webpack_require__(170);
exports.PaymentMethodCancelledError = payment_method_cancelled_error_1.default;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@bigcommerce/request-sender");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cart_action_creator_1 = __webpack_require__(108);
exports.CartActionCreator = cart_action_creator_1.default;
var cart_comparator_1 = __webpack_require__(50);
exports.CartComparator = cart_comparator_1.default;
var cart_reducer_1 = __webpack_require__(109);
exports.cartReducer = cart_reducer_1.default;
var cart_request_sender_1 = __webpack_require__(120);
exports.CartRequestSender = cart_request_sender_1.default;
var cart_selector_1 = __webpack_require__(121);
exports.CartSelector = cart_selector_1.default;
var map_to_internal_cart_1 = __webpack_require__(51);
exports.mapToInternalCart = map_to_internal_cart_1.default;
var map_to_internal_line_item_1 = __webpack_require__(53);
exports.mapToInternalLineItem = map_to_internal_line_item_1.default;
var map_to_internal_line_items_1 = __webpack_require__(52);
exports.mapToInternalLineItems = map_to_internal_line_items_1.default;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var utility_1 = __webpack_require__(8);
var StandardError = /** @class */ (function (_super) {
    tslib_1.__extends(StandardError, _super);
    function StandardError(message) {
        var _newTarget = this.constructor;
        var _this = _super.call(this, message || 'An unexpected error has occurred.') || this;
        _this.type = 'standard';
        utility_1.setPrototypeOf(_this, _newTarget.prototype);
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, _newTarget);
        }
        else {
            _this.stack = (new Error(_this.message)).stack;
        }
        return _this;
    }
    return StandardError;
}(Error));
exports.default = StandardError;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var create_payment_client_1 = __webpack_require__(135);
exports.createPaymentClient = create_payment_client_1.default;
var create_payment_strategy_registry_1 = __webpack_require__(137);
exports.createPaymentStrategyRegistry = create_payment_strategy_registry_1.default;
var payment_action_creator_1 = __webpack_require__(58);
exports.PaymentActionCreator = payment_action_creator_1.default;
var payment_method_action_creator_1 = __webpack_require__(60);
exports.PaymentMethodActionCreator = payment_method_action_creator_1.default;
var payment_method_reducer_1 = __webpack_require__(193);
exports.paymentMethodReducer = payment_method_reducer_1.default;
var payment_method_request_sender_1 = __webpack_require__(194);
exports.PaymentMethodRequestSender = payment_method_request_sender_1.default;
var payment_method_selector_1 = __webpack_require__(195);
exports.PaymentMethodSelector = payment_method_selector_1.default;
var payment_reducer_1 = __webpack_require__(196);
exports.paymentReducer = payment_reducer_1.default;
var payment_request_sender_1 = __webpack_require__(62);
exports.PaymentRequestSender = payment_request_sender_1.default;
var payment_strategy_action_creator_1 = __webpack_require__(197);
exports.PaymentStrategyActionCreator = payment_strategy_action_creator_1.default;
var payment_strategy_reducer_1 = __webpack_require__(198);
exports.paymentStrategyReducer = payment_strategy_reducer_1.default;
var payment_strategy_registry_1 = __webpack_require__(63);
exports.PaymentStrategyRegistry = payment_strategy_registry_1.default;
var payment_strategy_selector_1 = __webpack_require__(199);
exports.PaymentStrategySelector = payment_strategy_selector_1.default;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_QUOTE_REQUESTED = 'LOAD_QUOTE_REQUESTED';
exports.LOAD_QUOTE_SUCCEEDED = 'LOAD_QUOTE_SUCCEEDED';
exports.LOAD_QUOTE_FAILED = 'LOAD_QUOTE_FAILED';


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var coupon_action_creator_1 = __webpack_require__(110);
exports.CouponActionCreator = coupon_action_creator_1.default;
var coupon_request_sender_1 = __webpack_require__(111);
exports.CouponRequestSender = coupon_request_sender_1.default;
var coupon_selector_1 = __webpack_require__(112);
exports.CouponSelector = coupon_selector_1.default;
var coupon_reducer_1 = __webpack_require__(113);
exports.couponReducer = coupon_reducer_1.default;
var gift_certificate_action_creator_1 = __webpack_require__(114);
exports.GiftCertificateActionCreator = gift_certificate_action_creator_1.default;
var gift_certificate_request_sender_1 = __webpack_require__(115);
exports.GiftCertificateRequestSender = gift_certificate_request_sender_1.default;
var gift_certificate_selector_1 = __webpack_require__(116);
exports.GiftCertificateSelector = gift_certificate_selector_1.default;
var gift_certificate_reducer_1 = __webpack_require__(117);
exports.giftCertificateReducer = gift_certificate_reducer_1.default;
var map_to_internal_coupon_1 = __webpack_require__(118);
exports.mapToInternalCoupon = map_to_internal_coupon_1.default;
var map_to_internal_gift_certificate_1 = __webpack_require__(119);
exports.mapToInternalGiftCertificate = map_to_internal_gift_certificate_1.default;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
tslib_1.__exportStar(__webpack_require__(35), exports);
var order_action_creator_1 = __webpack_require__(138);
exports.OrderActionCreator = order_action_creator_1.default;
var order_reducer_1 = __webpack_require__(142);
exports.orderReducer = order_reducer_1.default;
var order_request_sender_1 = __webpack_require__(143);
exports.OrderRequestSender = order_request_sender_1.default;
var order_selector_1 = __webpack_require__(144);
exports.OrderSelector = order_selector_1.default;
var map_to_internal_order_1 = __webpack_require__(145);
exports.mapToInternalOrder = map_to_internal_order_1.default;
var map_to_internal_incomplete_order_1 = __webpack_require__(36);
exports.mapToInternalIncompleteOrder = map_to_internal_incomplete_order_1.default;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var quote_action_creator_1 = __webpack_require__(146);
exports.QuoteActionCreator = quote_action_creator_1.default;
var quote_reducer_1 = __webpack_require__(147);
exports.quoteReducer = quote_reducer_1.default;
var quote_request_sender_1 = __webpack_require__(150);
exports.QuoteRequestSender = quote_request_sender_1.default;
var quote_selector_1 = __webpack_require__(151);
exports.QuoteSelector = quote_selector_1.default;
var map_to_internal_quote_1 = __webpack_require__(56);
exports.mapToInternalQuote = map_to_internal_quote_1.default;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SIGN_IN_CUSTOMER_REQUESTED = 'SIGN_IN_CUSTOMER_REQUESTED';
exports.SIGN_IN_CUSTOMER_SUCCEEDED = 'SIGN_IN_CUSTOMER_SUCCEEDED';
exports.SIGN_IN_CUSTOMER_FAILED = 'SIGN_IN_CUSTOMER_FAILED';
exports.SIGN_OUT_CUSTOMER_REQUESTED = 'SIGN_OUT_CUSTOMER_REQUESTED';
exports.SIGN_OUT_CUSTOMER_SUCCEEDED = 'SIGN_OUT_CUSTOMER_SUCCEEDED';
exports.SIGN_OUT_CUSTOMER_FAILED = 'SIGN_OUT_CUSTOMER_FAILED';


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var create_customer_strategy_registry_1 = __webpack_require__(126);
exports.createCustomerStrategyRegistry = create_customer_strategy_registry_1.default;
var customer_reducer_1 = __webpack_require__(207);
exports.customerReducer = customer_reducer_1.default;
var customer_action_creator_1 = __webpack_require__(75);
exports.CustomerActionCreator = customer_action_creator_1.default;
var customer_request_sender_1 = __webpack_require__(208);
exports.CustomerRequestSender = customer_request_sender_1.default;
var customer_selector_1 = __webpack_require__(209);
exports.CustomerSelector = customer_selector_1.default;
var customer_strategy_action_creator_1 = __webpack_require__(210);
exports.CustomerStrategyActionCreator = customer_strategy_action_creator_1.default;
var customer_strategy_selector_1 = __webpack_require__(211);
exports.CustomerStrategySelector = customer_strategy_selector_1.default;
var customer_strategy_reducer_1 = __webpack_require__(212);
exports.customerStrategyReducer = customer_strategy_reducer_1.default;
var map_to_internal_customer_1 = __webpack_require__(76);
exports.mapToInternalCustomer = map_to_internal_customer_1.default;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ACKNOWLEDGE = 'PAYMENT_STATUS_ACKNOWLEDGE';
exports.FINALIZE = 'PAYMENT_STATUS_FINALIZE';
exports.INITIALIZE = 'PAYMENT_STATUS_INITIALIZE';


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var remote_checkout_action_creator_1 = __webpack_require__(152);
exports.RemoteCheckoutActionCreator = remote_checkout_action_creator_1.default;
var remote_checkout_request_sender_1 = __webpack_require__(153);
exports.RemoteCheckoutRequestSender = remote_checkout_request_sender_1.default;
var remote_checkout_selector_1 = __webpack_require__(154);
exports.RemoteCheckoutSelector = remote_checkout_selector_1.default;
var remote_checkout_reducer_1 = __webpack_require__(155);
exports.remoteCheckoutReducer = remote_checkout_reducer_1.default;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomerStrategy = /** @class */ (function () {
    function CustomerStrategy(_store) {
        this._store = _store;
        this._isInitialized = false;
    }
    CustomerStrategy.prototype.initialize = function (options) {
        this._isInitialized = true;
        return Promise.resolve(this._store.getState());
    };
    CustomerStrategy.prototype.deinitialize = function (options) {
        this._isInitialized = false;
        return Promise.resolve(this._store.getState());
    };
    return CustomerStrategy;
}());
exports.default = CustomerStrategy;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var billing_address_selector_1 = __webpack_require__(104);
exports.BillingAddressSelector = billing_address_selector_1.default;
var billing_address_action_creator_1 = __webpack_require__(105);
exports.BillingAddressActionCreator = billing_address_action_creator_1.default;
var billing_address_request_sender_1 = __webpack_require__(106);
exports.BillingAddressRequestSender = billing_address_request_sender_1.default;
var billing_address_reducer_1 = __webpack_require__(107);
exports.billingAddressReducer = billing_address_reducer_1.default;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_SHIPPING_ADDRESS_REQUESTED = 'UPDATE_SHIPPING_ADDRESS_REQUESTED';
exports.UPDATE_SHIPPING_ADDRESS_SUCCEEDED = 'UPDATE_SHIPPING_ADDRESS_SUCCEEDED';
exports.UPDATE_SHIPPING_ADDRESS_FAILED = 'UPDATE_SHIPPING_ADDRESS_FAILED';


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_SHIPPING_OPTIONS_REQUESTED = 'LOAD_SHIPPING_OPTIONS_REQUESTED';
exports.LOAD_SHIPPING_OPTIONS_SUCCEEDED = 'LOAD_SHIPPING_OPTIONS_SUCCEEDED';
exports.LOAD_SHIPPING_OPTIONS_FAILED = 'LOAD_SHIPPING_OPTIONS_FAILED';
exports.SELECT_SHIPPING_OPTION_REQUESTED = 'SELECT_SHIPPING_OPTION_REQUESTED';
exports.SELECT_SHIPPING_OPTION_SUCCEEDED = 'SELECT_SHIPPING_OPTION_SUCCEEDED';
exports.SELECT_SHIPPING_OPTION_FAILED = 'SELECT_SHIPPING_OPTION_FAILED';


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_action_creator_1 = __webpack_require__(122);
exports.ConfigActionCreator = config_action_creator_1.default;
var config_selector_1 = __webpack_require__(123);
exports.ConfigSelector = config_selector_1.default;
var config_reducer_1 = __webpack_require__(124);
exports.configReducer = config_reducer_1.default;
var config_request_sender_1 = __webpack_require__(125);
exports.ConfigRequestSender = config_request_sender_1.default;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var country_action_creator_1 = __webpack_require__(214);
exports.CountryActionCreator = country_action_creator_1.default;
var country_request_sender_1 = __webpack_require__(215);
exports.CountryRequestSender = country_request_sender_1.default;
var country_selector_1 = __webpack_require__(216);
exports.CountrySelector = country_selector_1.default;
var country_reducer_1 = __webpack_require__(217);
exports.countryReducer = country_reducer_1.default;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var create_shipping_strategy_registry_1 = __webpack_require__(218);
exports.createShippingStrategyRegistry = create_shipping_strategy_registry_1.default;
var consignment_reducer_1 = __webpack_require__(222);
exports.consignmentReducer = consignment_reducer_1.default;
var shipping_address_action_creator_1 = __webpack_require__(79);
exports.ShippingAddressActionCreator = shipping_address_action_creator_1.default;
var shipping_address_request_sender_1 = __webpack_require__(223);
exports.ShippingAddressRequestSender = shipping_address_request_sender_1.default;
var shipping_address_selector_1 = __webpack_require__(224);
exports.ShippingAddressSelector = shipping_address_selector_1.default;
var shipping_country_action_creator_1 = __webpack_require__(225);
exports.ShippingCountryActionCreator = shipping_country_action_creator_1.default;
var shipping_country_request_sender_1 = __webpack_require__(226);
exports.ShippingCountryRequestSender = shipping_country_request_sender_1.default;
var shipping_country_selector_1 = __webpack_require__(227);
exports.ShippingCountrySelector = shipping_country_selector_1.default;
var shipping_country_reducer_1 = __webpack_require__(228);
exports.shippingCountryReducer = shipping_country_reducer_1.default;
var shipping_option_action_creator_1 = __webpack_require__(80);
exports.ShippingOptionActionCreator = shipping_option_action_creator_1.default;
var shipping_option_request_sender_1 = __webpack_require__(229);
exports.ShippingOptionRequestSender = shipping_option_request_sender_1.default;
var shipping_option_selector_1 = __webpack_require__(230);
exports.ShippingOptionSelector = shipping_option_selector_1.default;
var shipping_option_reducer_1 = __webpack_require__(231);
exports.shippingOptionReducer = shipping_option_reducer_1.default;
var shipping_strategy_action_creator_1 = __webpack_require__(232);
exports.ShippingStrategyActionCreator = shipping_strategy_action_creator_1.default;
var shipping_strategy_selector_1 = __webpack_require__(233);
exports.ShippingStrategySelector = shipping_strategy_selector_1.default;
var shipping_strategy_reducer_1 = __webpack_require__(234);
exports.shippingStrategyReducer = shipping_strategy_reducer_1.default;
var map_to_internal_shipping_option_1 = __webpack_require__(83);
exports.mapToInternalShippingOption = map_to_internal_shipping_option_1.default;
var map_to_internal_shipping_options_1 = __webpack_require__(82);
exports.mapToInternalShippingOptions = map_to_internal_shipping_options_1.default;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_BILLING_ADDRESS_REQUESTED = 'UPDATE_BILLING_ADDRESS_REQUESTED';
exports.UPDATE_BILLING_ADDRESS_SUCCEEDED = 'UPDATE_BILLING_ADDRESS_SUCCEEDED';
exports.UPDATE_BILLING_ADDRESS_FAILED = 'UPDATE_BILLING_ADDRESS_FAILED';


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APPLY_COUPON_REQUESTED = 'APPLY_COUPON_REQUESTED';
exports.APPLY_COUPON_SUCCEEDED = 'APPLY_COUPON_SUCCEEDED';
exports.APPLY_COUPON_FAILED = 'APPLY_COUPON_FAILED';
exports.REMOVE_COUPON_REQUESTED = 'REMOVE_COUPON_REQUESTED';
exports.REMOVE_COUPON_SUCCEEDED = 'REMOVE_COUPON_SUCCEEDED';
exports.REMOVE_COUPON_FAILED = 'REMOVE_COUPON_FAILED';


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.APPLY_GIFT_CERTIFICATE_REQUESTED = 'APPLY_GIFT_CERTIFICATE_REQUESTED';
exports.APPLY_GIFT_CERTIFICATE_SUCCEEDED = 'APPLY_GIFT_CERTIFICATE_SUCCEEDED';
exports.APPLY_GIFT_CERTIFICATE_FAILED = 'APPLY_GIFT_CERTIFICATE_FAILED';
exports.REMOVE_GIFT_CERTIFICATE_REQUESTED = 'REMOVE_GIFT_CERTIFICATE_REQUESTED';
exports.REMOVE_GIFT_CERTIFICATE_SUCCEEDED = 'REMOVE_GIFT_CERTIFICATE_SUCCEEDED';
exports.REMOVE_GIFT_CERTIFICATE_FAILED = 'REMOVE_GIFT_CERTIFICATE_FAILED';


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("@bigcommerce/script-loader");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var registry_1 = __webpack_require__(127);
exports.Registry = registry_1.default;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var standard_error_1 = __webpack_require__(12);
var DEFAULT_RESPONSE = {
    body: {},
    headers: {},
    status: 0,
    statusText: '',
};
var RequestError = /** @class */ (function (_super) {
    tslib_1.__extends(RequestError, _super);
    function RequestError(_a, message) {
        var _b = _a === void 0 ? DEFAULT_RESPONSE : _a, _c = _b.body, body = _c === void 0 ? {} : _c, headers = _b.headers, status = _b.status, statusText = _b.statusText;
        var _this = _super.call(this, joinErrors(body.errors) || body.detail || body.title || message || 'An unexpected error has occurred.') || this;
        _this.type = 'request';
        _this.body = body;
        _this.headers = headers;
        _this.status = status;
        _this.statusText = statusText;
        return _this;
    }
    return RequestError;
}(standard_error_1.default));
exports.default = RequestError;
function joinErrors(errors) {
    if (!Array.isArray(errors)) {
        return;
    }
    return errors.reduce(function (result, error) {
        if (typeof error === 'string') {
            return result.concat([error]);
        }
        if (error && error.message) {
            return result.concat([error.message]);
        }
        return result;
    }, []).join(' ');
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderActionType;
(function (OrderActionType) {
    OrderActionType["LoadOrderRequested"] = "LOAD_ORDER_REQUESTED";
    OrderActionType["LoadOrderSucceeded"] = "LOAD_ORDER_SUCCEEDED";
    OrderActionType["LoadOrderFailed"] = "LOAD_ORDER_FAILED";
    OrderActionType["SubmitOrderRequested"] = "SUBMIT_ORDER_REQUESTED";
    OrderActionType["SubmitOrderSucceeded"] = "SUBMIT_ORDER_SUCCEEDED";
    OrderActionType["SubmitOrderFailed"] = "SUBMIT_ORDER_FAILED";
    OrderActionType["FinalizeOrderRequested"] = "FINALIZE_ORDER_REQUESTED";
    OrderActionType["FinalizeOrderSucceeded"] = "FINALIZE_ORDER_SUCCEEDED";
    OrderActionType["FinalizeOrderFailed"] = "FINALIZE_ORDER_FAILED";
})(OrderActionType = exports.OrderActionType || (exports.OrderActionType = {}));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mapToInternalIncompleteOrder(checkout, existingOrder) {
    return {
        orderId: checkout.orderId,
        token: existingOrder.token,
        payment: existingOrder.payment,
        socialData: existingOrder.socialData,
        status: existingOrder.status,
        customerCreated: existingOrder.customerCreated,
        hasDigitalItems: existingOrder.hasDigitalItems,
        isDownloadable: existingOrder.isDownloadable,
        isComplete: existingOrder.isComplete,
        callbackUrl: existingOrder.callbackUrl,
    };
}
exports.default = mapToInternalIncompleteOrder;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_address_equal_1 = __webpack_require__(148);
exports.isAddressEqual = is_address_equal_1.default;
var map_to_internal_address_1 = __webpack_require__(149);
exports.mapToInternalAddress = map_to_internal_address_1.default;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var amazon_pay_script_loader_1 = __webpack_require__(158);
exports.AmazonPayScriptLoader = amazon_pay_script_loader_1.default;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isVaultedInstrument(instrument) {
    return Boolean(instrument.instrumentId);
}
exports.default = isVaultedInstrument;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var braintree_credit_card_payment_strategy_1 = __webpack_require__(183);
exports.BraintreeCreditCardPaymentStrategy = braintree_credit_card_payment_strategy_1.default;
var braintree_payment_processor_1 = __webpack_require__(67);
exports.BraintreePaymentProcessor = braintree_payment_processor_1.default;
var braintree_paypal_payment_strategy_1 = __webpack_require__(185);
exports.BraintreePaypalPaymentStrategy = braintree_paypal_payment_strategy_1.default;
var braintree_visacheckout_payment_processor_1 = __webpack_require__(68);
exports.BraintreeVisaCheckoutPaymentProcessor = braintree_visacheckout_payment_processor_1.default;
var create_braintree_payment_processor_1 = __webpack_require__(187);
exports.createBraintreePaymentProcessor = create_braintree_payment_processor_1.default;
var create_braintree_visacheckout_payment_processor_1 = __webpack_require__(188);
exports.createBraintreeVisaCheckoutPaymentProcessor = create_braintree_visacheckout_payment_processor_1.default;
var visacheckout_script_loader_1 = __webpack_require__(189);
exports.VisaCheckoutScriptLoader = visacheckout_script_loader_1.default;
var braintree_visacheckout_payment_strategy_1 = __webpack_require__(190);
exports.BraintreeVisaCheckoutPaymentStrategy = braintree_visacheckout_payment_strategy_1.default;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShippingStrategyActionType;
(function (ShippingStrategyActionType) {
    ShippingStrategyActionType["UpdateAddressFailed"] = "SHIPPING_STRATEGY_UPDATE_ADDRESS_FAILED";
    ShippingStrategyActionType["UpdateAddressRequested"] = "SHIPPING_STRATEGY_UPDATE_ADDRESS_REQUESTED";
    ShippingStrategyActionType["UpdateAddressSucceeded"] = "SHIPPING_STRATEGY_UPDATE_ADDRESS_SUCCEEDED";
    ShippingStrategyActionType["SelectOptionFailed"] = "SHIPPING_STRATEGY_SELECT_OPTION_FAILED";
    ShippingStrategyActionType["SelectOptionRequested"] = "SHIPPING_STRATEGY_SELECT_OPTION_REQUESTED";
    ShippingStrategyActionType["SelectOptionSucceeded"] = "SHIPPING_STRATEGY_SELECT_OPTION_SUCCEEDED";
    ShippingStrategyActionType["InitializeFailed"] = "SHIPPING_STRATEGY_INITIALIZE_FAILED";
    ShippingStrategyActionType["InitializeRequested"] = "SHIPPING_STRATEGY_INITIALIZE_REQUESTED";
    ShippingStrategyActionType["InitializeSucceeded"] = "SHIPPING_STRATEGY_INITIALIZE_SUCCEEDED";
    ShippingStrategyActionType["DeinitializeFailed"] = "SHIPPING_STRATEGY_DEINITIALIZE_FAILED";
    ShippingStrategyActionType["DeinitializeRequested"] = "SHIPPING_STRATEGY_DEINITIALIZE_REQUESTED";
    ShippingStrategyActionType["DeinitializeSucceeded"] = "SHIPPING_STRATEGY_DEINITIALIZE_SUCCEEDED";
})(ShippingStrategyActionType = exports.ShippingStrategyActionType || (exports.ShippingStrategyActionType = {}));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShippingStrategy = /** @class */ (function () {
    function ShippingStrategy(_store) {
        this._store = _store;
        this._isInitialized = false;
    }
    ShippingStrategy.prototype.initialize = function (options) {
        this._isInitialized = true;
        return Promise.resolve(this._store.getState());
    };
    ShippingStrategy.prototype.deinitialize = function (options) {
        this._isInitialized = false;
        return Promise.resolve(this._store.getState());
    };
    return ShippingStrategy;
}());
exports.default = ShippingStrategy;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var instrument_action_creator_1 = __webpack_require__(239);
exports.InstrumentActionCreator = instrument_action_creator_1.default;
var instrument_request_sender_1 = __webpack_require__(243);
exports.InstrumentRequestSender = instrument_request_sender_1.default;
var instrument_selector_1 = __webpack_require__(244);
exports.InstrumentSelector = instrument_selector_1.default;
var instrument_reducer_1 = __webpack_require__(245);
exports.instrumentReducer = instrument_reducer_1.default;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @deprecated Use request senders directly
 */
var CheckoutClient = /** @class */ (function () {
    /**
     * @internal
     */
    function CheckoutClient(_billingAddressRequestSender, _cartRequestSender, _configRequestSender, _countryRequestSender, _couponRequestSender, _customerRequestSender, _giftCertificateRequestSender, _orderRequestSender, _paymentMethodRequestSender, _quoteRequestSender, _shippingAddressRequestSender, _shippingCountryRequestSender, _shippingOptionRequestSender) {
        this._billingAddressRequestSender = _billingAddressRequestSender;
        this._cartRequestSender = _cartRequestSender;
        this._configRequestSender = _configRequestSender;
        this._countryRequestSender = _countryRequestSender;
        this._couponRequestSender = _couponRequestSender;
        this._customerRequestSender = _customerRequestSender;
        this._giftCertificateRequestSender = _giftCertificateRequestSender;
        this._orderRequestSender = _orderRequestSender;
        this._paymentMethodRequestSender = _paymentMethodRequestSender;
        this._quoteRequestSender = _quoteRequestSender;
        this._shippingAddressRequestSender = _shippingAddressRequestSender;
        this._shippingCountryRequestSender = _shippingCountryRequestSender;
        this._shippingOptionRequestSender = _shippingOptionRequestSender;
    }
    CheckoutClient.prototype.loadCheckout = function (options) {
        return this._quoteRequestSender.loadQuote(options);
    };
    CheckoutClient.prototype.loadCart = function (options) {
        return this._cartRequestSender.loadCart(options);
    };
    CheckoutClient.prototype.loadOrder = function (orderId, options) {
        return this._orderRequestSender.loadOrder(orderId, options);
    };
    CheckoutClient.prototype.submitOrder = function (body, options) {
        return this._orderRequestSender.submitOrder(body, options);
    };
    CheckoutClient.prototype.finalizeOrder = function (orderId, options) {
        return this._orderRequestSender.finalizeOrder(orderId, options);
    };
    CheckoutClient.prototype.loadPaymentMethods = function (options) {
        return this._paymentMethodRequestSender.loadPaymentMethods(options);
    };
    CheckoutClient.prototype.loadPaymentMethod = function (methodId, options) {
        return this._paymentMethodRequestSender.loadPaymentMethod(methodId, options);
    };
    CheckoutClient.prototype.loadCountries = function (options) {
        return this._countryRequestSender.loadCountries(options);
    };
    CheckoutClient.prototype.loadShippingCountries = function (options) {
        return this._shippingCountryRequestSender.loadCountries(options);
    };
    CheckoutClient.prototype.updateBillingAddress = function (address, options) {
        return this._billingAddressRequestSender.updateAddress(address, options);
    };
    CheckoutClient.prototype.updateShippingAddress = function (address, options) {
        return this._shippingAddressRequestSender.updateAddress(address, options);
    };
    CheckoutClient.prototype.loadShippingOptions = function (options) {
        return this._shippingOptionRequestSender.loadShippingOptions(options);
    };
    CheckoutClient.prototype.selectShippingOption = function (addressId, shippingOptionId, options) {
        return this._shippingOptionRequestSender.selectShippingOption(addressId, shippingOptionId, options);
    };
    CheckoutClient.prototype.signInCustomer = function (credentials, options) {
        return this._customerRequestSender.signInCustomer(credentials, options);
    };
    CheckoutClient.prototype.signOutCustomer = function (options) {
        return this._customerRequestSender.signOutCustomer(options);
    };
    CheckoutClient.prototype.applyCoupon = function (code, options) {
        return this._couponRequestSender.applyCoupon(code, options);
    };
    CheckoutClient.prototype.removeCoupon = function (code, options) {
        return this._couponRequestSender.removeCoupon(code, options);
    };
    CheckoutClient.prototype.applyGiftCertificate = function (code, options) {
        return this._giftCertificateRequestSender.applyGiftCertificate(code, options);
    };
    CheckoutClient.prototype.removeGiftCertificate = function (code, options) {
        return this._giftCertificateRequestSender.removeGiftCertificate(code, options);
    };
    CheckoutClient.prototype.loadConfig = function (options) {
        return this._configRequestSender.loadConfig(options);
    };
    return CheckoutClient;
}());
exports.default = CheckoutClient;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var create_checkout_selectors_1 = __webpack_require__(92);
/**
 * Responsible for completing the checkout process for the current customer.
 *
 * This object can be used to collect all information that is required for
 * checkout, such as shipping and billing information. It can also be used to
 * retrieve the current checkout state and subscribe to its changes.
 */
var CheckoutService = /** @class */ (function () {
    /**
     * @internal
     */
    function CheckoutService(_store, _billingAddressActionCreator, _cartActionCreator, _configActionCreator, _countryActionCreator, _couponActionCreator, _customerStrategyActionCreator, _giftCertificateActionCreator, _instrumentActionCreator, _orderActionCreator, _paymentMethodActionCreator, _paymentStrategyActionCreator, _quoteActionCreator, _shippingCountryActionCreator, _shippingOptionActionCreator, _shippingStrategyActionCreator) {
        var _this = this;
        this._store = _store;
        this._billingAddressActionCreator = _billingAddressActionCreator;
        this._cartActionCreator = _cartActionCreator;
        this._configActionCreator = _configActionCreator;
        this._countryActionCreator = _countryActionCreator;
        this._couponActionCreator = _couponActionCreator;
        this._customerStrategyActionCreator = _customerStrategyActionCreator;
        this._giftCertificateActionCreator = _giftCertificateActionCreator;
        this._instrumentActionCreator = _instrumentActionCreator;
        this._orderActionCreator = _orderActionCreator;
        this._paymentMethodActionCreator = _paymentMethodActionCreator;
        this._paymentStrategyActionCreator = _paymentStrategyActionCreator;
        this._quoteActionCreator = _quoteActionCreator;
        this._shippingCountryActionCreator = _shippingCountryActionCreator;
        this._shippingOptionActionCreator = _shippingOptionActionCreator;
        this._shippingStrategyActionCreator = _shippingStrategyActionCreator;
        this._state = create_checkout_selectors_1.default(this._store.getState());
        this._store.subscribe(function (state) {
            _this._state = create_checkout_selectors_1.default(state);
        });
    }
    /**
     * Returns a snapshot of the current checkout state.
     *
     * The method returns a new instance every time there is a change in the
     * checkout state. You can query the state by calling any of its getter
     * methods.
     *
     * ```js
     * const state = service.getState();
     *
     * console.log(state.checkout.getOrder());
     * console.log(state.errors.getSubmitOrderError());
     * console.log(state.statuses.isSubmittingOrder());
     * ```
     *
     * @returns The current customer's checkout state
     */
    CheckoutService.prototype.getState = function () {
        return this._state;
    };
    /**
     * Notifies all subscribers with the current state.
     *
     * When this method gets called, the subscribers get called regardless if
     * they have any filters applied.
     */
    CheckoutService.prototype.notifyState = function () {
        this._store.notifyState();
    };
    /**
     * Subscribes to any changes to the current state.
     *
     * The method registers a callback function and executes it every time there
     * is a change in the checkout state.
     *
     * ```js
     * service.subscribe(state => {
     *     console.log(state.checkout.getCart());
     * });
     * ```
     *
     * The method can be configured to notify subscribers only regarding
     * relevant changes, by providing a filter function.
     *
     * ```js
     * const filter = state => state.checkout.getCart();
     *
     * // Only trigger the subscriber when the cart changes.
     * service.subscribe(state => {
     *     console.log(state.checkout.getCart())
     * }, filter);
     * ```
     *
     * @param subscriber - The function to subscribe to state changes.
     * @param filters - One or more functions to filter out irrelevant state
     * changes. If more than one function is provided, the subscriber will only
     * be triggered if all conditions are met.
     * @returns A function, if called, will unsubscribe the subscriber.
     */
    CheckoutService.prototype.subscribe = function (subscriber) {
        var _this = this;
        var filters = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            filters[_i - 1] = arguments[_i];
        }
        return (_a = this._store).subscribe.apply(_a, [function () { return subscriber(_this.getState()); }].concat(filters.map(function (filter) { return function (state) { return filter(create_checkout_selectors_1.default(state)); }; })));
        var _a;
    };
    /**
     * Loads the current checkout.
     *
     * This method can only be called if there is an active checkout. Also, it
     * can only retrieve data that belongs to the current customer. When it is
     * successfully executed, you can retrieve the data by calling
     * `CheckoutStoreSelector#getCheckout`.
     *
     * ```js
     * const state = await service.loadCheckout();
     *
     * console.log(state.checkout.getCheckout());
     * ```
     *
     * @param options - Options for loading the current checkout.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadCheckout = function (options) {
        var _this = this;
        var action = this._quoteActionCreator.loadQuote(options);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads the checkout configuration of a store.
     *
     * This method should be called before performing any other actions using
     * this service. If it is successfully executed, the data can be retrieved
     * by calling `CheckoutStoreSelector#getConfig`.
     *
     * ```js
     * const state = await service.loadConfig();
     *
     * console.log(state.checkout.getConfig());
     * ```
     *
     * @param options - Options for loading the checkout configuration.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadConfig = function (options) {
        var _this = this;
        var action = this._configActionCreator.loadConfig(options);
        return this._store.dispatch(action, { queueId: 'config' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads the current cart.
     *
     * This method can only be called if there is an active cart. Also, it can
     * only retrieve data that belongs to the current customer.
     *
     * If the method is called successfully, you can retrieve the current cart
     * by calling `CheckoutStoreSelector#getCart`
     *
     * ```js
     * const state = await service.loadCart();
     *
     * console.log(state.checkout.getCart());
     * ```
     *
     * @param options - Options for loading the current cart.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadCart = function (options) {
        var _this = this;
        var action = this._cartActionCreator.loadCart(options);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads an order by an id.
     *
     * The method can only retrieve an order if the order belongs to the current
     * customer. If it is successfully executed, the data can be retrieved by
     * calling `CheckoutStoreSelector#getOrder`.
     *
     * ```js
     * const state = await service.loadOrder();
     *
     * console.log(state.checkout.getOrder());
     * ```
     *
     * @param orderId - The identifier of the order to load.
     * @param options - Options for loading the order.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadOrder = function (orderId, options) {
        var _this = this;
        var action = this._orderActionCreator.loadOrder(orderId, options);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Submits an order, thereby completing a checkout process.
     *
     * Before you can submit an order, you must initialize the payment method
     * chosen by the customer by calling `CheckoutService#initializePayment`.
     *
     * ```js
     * await service.initializePayment({ methodId: 'braintree' });
     * await service.submitOrder({
     *     methodId: 'braintree',
     *     payment: {
     *         paymentData: {
     *             ccExpiry: { month: 10, year: 20 },
     *             ccName: 'BigCommerce',
     *             ccNumber: '4111111111111111',
     *             ccType: 'visa',
     *             ccCvv: 123,
     *         },
     *     },
     * });
     * ```
     *
     * You are not required to include `paymentData` if the order does not
     * require additional payment details. For example, the customer has already
     * entered their payment details on the cart page using one of the hosted
     * payment methods, such as PayPal. Or the customer has applied a gift
     * certificate that exceeds the grand total amount.
     *
     * If the order is submitted successfully, you can retrieve the newly
     * created order by calling `CheckoutStoreSelector#getOrder`.
     *
     * ```js
     * const state = await service.submitOrder(payload);
     *
     * console.log(state.checkout.getOrder());
     * ```
     *
     * @param payload - The request payload to submit for the current order.
     * @param options - Options for submitting the current order.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.submitOrder = function (payload, options) {
        var _this = this;
        var action = this._paymentStrategyActionCreator.execute(payload, options);
        return this._store.dispatch(action, { queueId: 'paymentStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Finalizes the submission process for an order.
     *
     * This method is only required for certain hosted payment methods that
     * require a customer to enter their credit card details on their website.
     * You need to call this method once the customer has redirected back to
     * checkout in order to complete the checkout process.
     *
     * If the method is called before order finalization is required or for a
     * payment method that does not require order finalization, an error will be
     * thrown. Conversely, if the method is called successfully, you should
     * immediately redirect the customer to the order confirmation page.
     *
     * ```js
     * try {
     *     await service.finalizeOrderIfNeeded();
     *
     *     window.location.assign('/order-confirmation');
     * } catch (error) {
     *     if (error.type !== 'order_finalization_not_required') {
     *         throw error;
     *     }
     * }
     * ```
     *
     * @param options - Options for finalizing the current order.
     * @returns A promise that resolves to the current state.
     * @throws `OrderFinalizationNotRequiredError` error if order finalization
     * is not required for the current order at the time of execution.
     */
    CheckoutService.prototype.finalizeOrderIfNeeded = function (options) {
        var _this = this;
        var action = this._paymentStrategyActionCreator.finalize(options);
        return this._store.dispatch(action, { queueId: 'paymentStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads a list of payment methods available for checkout.
     *
     * If a customer enters their payment details before navigating to the
     * checkout page (i.e.: using PayPal checkout button on the cart page), only
     * one payment method will be available for the customer - the selected
     * payment method. Otherwise, by default, all payment methods configured by
     * the merchant will be available for the customer.
     *
     * Once the method is executed successfully, you can call
     * `CheckoutStoreSelector#getPaymentMethods` to retrieve the list of payment
     * methods.
     *
     * ```js
     * const state = service.loadPaymentMethods();
     *
     * console.log(state.checkout.getPaymentMethods());
     * ```
     *
     * @param options - Options for loading the payment methods that are
     * available to the current customer.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadPaymentMethods = function (options) {
        var _this = this;
        var action = this._paymentMethodActionCreator.loadPaymentMethods(options);
        return this._store.dispatch(action, { queueId: 'paymentMethods' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads a payment method by an id.
     *
     * This method does not work with multi-option payment providers. Due to its
     * limitation, it is deprecated and will be removed in the future.
     *
     * @deprecated
     * @param methodId - The identifier for the payment method to load.
     * @param options - Options for loading the payment method.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadPaymentMethod = function (methodId, options) {
        var _this = this;
        var action = this._paymentMethodActionCreator.loadPaymentMethod(methodId, options);
        return this._store.dispatch(action, { queueId: 'paymentMethods' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Initializes the payment step of a checkout process.
     *
     * Before a payment method can accept payment details, it must first be
     * initialized. Some payment methods require you to provide additional
     * initialization options. For example, Amazon requires a container ID in
     * order to initialize their payment widget.
     *
     * ```js
     * await service.initializePayment({
     *     methodId: 'amazon',
     *     amazon: {
     *         container: 'walletWidget',
     *     },
     * });
     * ```
     *
     * @param options - Options for initializing the payment step of checkout.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.initializePayment = function (options) {
        var _this = this;
        var action = this._paymentStrategyActionCreator.initialize(options);
        return this._store.dispatch(action, { queueId: 'paymentStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * De-initializes the payment step of a checkout process.
     *
     * The method should be called once you no longer require a payment method
     * to be initialized. It can perform any necessary clean-up behind the
     * scene, i.e.: remove DOM nodes or event handlers that are attached as a
     * result of payment initialization.
     *
     * ```js
     * await service.deinitializePayment({
     *     methodId: 'amazon',
     * });
     * ```
     *
     * @param options - Options for deinitializing the payment step of checkout.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.deinitializePayment = function (options) {
        var _this = this;
        var action = this._paymentStrategyActionCreator.deinitialize(options);
        return this._store.dispatch(action, { queueId: 'paymentStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads a list of countries available for billing.
     *
     * Once you make a successful request, you will be able to retrieve the list
     * of countries by calling `CheckoutStoreSelector#getBillingCountries`.
     *
     * ```js
     * const state = await service.loadBillingCountries();
     *
     * console.log(state.checkout.getBillingCountries());
     * ```
     *
     * @param options - Options for loading the available billing countries.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadBillingCountries = function (options) {
        var _this = this;
        var action = this._countryActionCreator.loadCountries(options);
        return this._store.dispatch(action, { queueId: 'billingCountries' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads a list of countries available for shipping.
     *
     * The list is determined based on the shipping zones configured by a
     * merchant. Once you make a successful call, you will be able to retrieve
     * the list of available shipping countries by calling
     * `CheckoutStoreSelector#getShippingCountries`.
     *
     * ```js
     * const state = await service.loadShippingCountries();
     *
     * console.log(state.checkout.getShippingCountries());
     * ```
     *
     * @param options - Options for loading the available shipping countries.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadShippingCountries = function (options) {
        var _this = this;
        var action = this._shippingCountryActionCreator.loadCountries(options);
        return this._store.dispatch(action, { queueId: 'shippingCountries' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads a set of form fields that should be presented to customers in order
     * to capture their billing address.
     *
     * Once the method has been executed successfully, you can call
     * `CheckoutStoreSelector#getBillingAddressFields` to retrieve the set of
     * form fields.
     *
     * ```js
     * const state = service.loadBillingAddressFields();
     *
     * console.log(state.checkout.getBillingAddressFields('US'));
     * ```
     *
     * @param options - Options for loading the billing address form fields.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadBillingAddressFields = function (options) {
        return this.loadBillingCountries(options);
    };
    /**
     * Loads a set of form fields that should be presented to customers in order
     * to capture their shipping address.
     *
     * Once the method has been executed successfully, you can call
     * `CheckoutStoreSelector#getShippingAddressFields` to retrieve the set of
     * form fields.
     *
     * ```js
     * const state = service.loadShippingAddressFields();
     *
     * console.log(state.checkout.getShippingAddressFields('US'));
     * ```
     *
     * @param options - Options for loading the shipping address form fields.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadShippingAddressFields = function (options) {
        return this.loadShippingCountries(options);
    };
    /**
     * Initializes the sign-in step of a checkout process.
     *
     * Some payment methods, such as Amazon, have their own sign-in flow. In
     * order to support them, this method must be called.
     *
     * ```js
     * await service.initializeCustomer({
     *     methodId: 'amazon',
     *     amazon: {
     *         container: 'signInButton',
     *     },
     * });
     * ```
     *
     * @param options - Options for initializing the customer step of checkout.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.initializeCustomer = function (options) {
        var _this = this;
        var action = this._customerStrategyActionCreator.initialize(options);
        return this._store.dispatch(action, { queueId: 'customerStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * De-initializes the sign-in step of a checkout process.
     *
     * It should be called once you no longer want to prompt customers to sign
     * in. It can perform any necessary clean-up behind the scene, i.e.: remove
     * DOM nodes or event handlers that are attached as a result of customer
     * initialization.
     *
     * ```js
     * await service.deinitializeCustomer({
     *     methodId: 'amazon',
     * });
     * ```
     *
     * @param options - Options for deinitializing the customer step of checkout.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.deinitializeCustomer = function (options) {
        var _this = this;
        var action = this._customerStrategyActionCreator.deinitialize(options);
        return this._store.dispatch(action, { queueId: 'customerStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Signs into a customer's registered account.
     *
     * Once a customer is signed in successfully, the checkout state will be
     * populated with information associated with the customer, such as their
     * saved addresses. You can call `CheckoutStoreSelector#getCustomer` to
     * retrieve the data.
     *
     * ```js
     * const state = await service.signInCustomer({
     *     email: 'foo@bar.com',
     *     password: 'password123',
     * });
     *
     * console.log(state.checkout.getCustomer());
     * ```
     *
     * @param credentials - The credentials to be used for signing in the customer.
     * @param options - Options for signing in the customer.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.signInCustomer = function (credentials, options) {
        var _this = this;
        var action = this._customerStrategyActionCreator.signIn(credentials, options);
        return this._store.dispatch(action, { queueId: 'customerStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Signs out the current customer if they are previously signed in.
     *
     * Once the customer is successfully signed out, the checkout state will be
     * reset automatically.
     *
     * ```js
     * const state = await service.signOutCustomer();
     *
     * // The returned object should not contain information about the previously signed-in customer.
     * console.log(state.checkout.getCustomer());
     * ```
     *
     * @param options - Options for signing out the customer.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.signOutCustomer = function (options) {
        var _this = this;
        var action = this._customerStrategyActionCreator.signOut(options);
        return this._store.dispatch(action, { queueId: 'customerStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads a list of shipping options available for checkout.
     *
     * Available shipping options can only be determined once a customer
     * provides their shipping address. If the method is executed successfully,
     * `CheckoutStoreSelector#getShippingOptions` can be called to retrieve the
     * list of shipping options.
     *
     * ```js
     * const state = await service.loadShippingOptions();
     *
     * console.log(state.checkout.getShippingOptions());
     * ```
     *
     * @param options - Options for loading the available shipping options.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadShippingOptions = function (options) {
        var _this = this;
        var action = this._shippingOptionActionCreator.loadShippingOptions(options);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Initializes the shipping step of a checkout process.
     *
     * Some payment methods, such as Amazon, can provide shipping information to
     * be used for checkout. In order to support them, this method must be
     * called.
     *
     * ```js
     * await service.initializeShipping({
     *     methodId: 'amazon',
     *     amazon: {
     *         container: 'addressBook',
     *     },
     * });
     * ```
     *
     * @param options - Options for initializing the shipping step of checkout.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.initializeShipping = function (options) {
        var _this = this;
        var action = this._shippingStrategyActionCreator.initialize(options);
        return this._store.dispatch(action, { queueId: 'shippingStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * De-initializes the shipping step of a checkout process.
     *
     * It should be called once you no longer need to collect shipping details.
     * It can perform any necessary clean-up behind the scene, i.e.: remove DOM
     * nodes or event handlers that are attached as a result of shipping
     * initialization.
     *
     * ```js
     * await service.deinitializeShipping({
     *     methodId: 'amazon',
     * });
     * ```
     *
     * @param options - Options for deinitializing the shipping step of checkout.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.deinitializeShipping = function (options) {
        var _this = this;
        var action = this._shippingStrategyActionCreator.deinitialize(options);
        return this._store.dispatch(action, { queueId: 'shippingStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Selects a shipping option for a given address.
     *
     * If a shipping option has an additional cost, the quote for the current
     * order will be adjusted once the option is selected.
     *
     * ```js
     * const state = await service.selectShippingOption('address-id', 'shipping-option-id');
     *
     * console.log(state.checkout.getSelectedShippingOption());
     * ```
     *
     * @param addressId - The identifier of the address to be assigned with the
     * shipping option.
     * @param shippingOptionId - The identifier of the shipping option to
     * select.
     * @param options - Options for selecting the shipping option.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.selectShippingOption = function (addressId, shippingOptionId, options) {
        var _this = this;
        var action = this._shippingStrategyActionCreator.selectOption(addressId, shippingOptionId, options);
        return this._store.dispatch(action, { queueId: 'shippingStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Updates the shipping address for the current checkout.
     *
     * When a customer updates their shipping address for an order, they will
     * see an updated list of shipping options and the cost for each option,
     * unless no options are available. If the update is successful, you can
     * call `CheckoutStoreSelector#getShippingAddress` to retrieve the address.
     *
     * If the shipping address changes and the selected shipping option becomes
     * unavailable for the updated address, the shipping option will be
     * deselected.
     *
     * You can submit an address that is partially complete. The address does
     * not get validated until you submit the order.
     *
     * ```js
     * const state = await service.updateShippingAddress(address);
     *
     * console.log(state.checkout.getShippingAddress());
     * ```
     *
     * @param address - The address to be used for shipping.
     * @param options - Options for updating the shipping address.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.updateShippingAddress = function (address, options) {
        var _this = this;
        var action = this._shippingStrategyActionCreator.updateAddress(address, options);
        return this._store.dispatch(action, { queueId: 'shippingStrategy' })
            .then(function () { return _this.getState(); });
    };
    /**
     * Updates the billing address for the current checkout.
     *
     * A customer must provide their billing address before they can proceed to
     * pay for their order.
     *
     * You can submit an address that is partially complete. The address does
     * not get validated until you submit the order.
     *
     * ```js
     * const state = await service.updateBillingAddress(address);
     *
     * console.log(state.checkout.getBillingAddress());
     * ```
     *
     * @param address - The address to be used for billing.
     * @param options - Options for updating the billing address.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.updateBillingAddress = function (address, options) {
        var _this = this;
        var action = this._billingAddressActionCreator.updateAddress(address, options);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Applies a coupon code to the current checkout.
     *
     * Once the coupon code gets applied, the quote for the current checkout will
     * be adjusted accordingly. The same coupon code cannot be applied more than
     * once.
     *
     * ```js
     * await service.applyCoupon('COUPON');
     * ```
     *
     * @param code - The coupon code to apply to the current checkout.
     * @param options - Options for applying the coupon code.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.applyCoupon = function (code, options) {
        var _this = this;
        var action = this._couponActionCreator.applyCoupon(code, options);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Removes a coupon code from the current checkout.
     *
     * Once the coupon code gets removed, the quote for the current checkout will
     * be adjusted accordingly.
     *
     * ```js
     * await service.removeCoupon('COUPON');
     * ```
     *
     * @param code - The coupon code to remove from the current checkout.
     * @param options - Options for removing the coupon code.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.removeCoupon = function (code, options) {
        var _this = this;
        var action = this._couponActionCreator.removeCoupon(code, options);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Applies a gift certificate to the current checkout.
     *
     * Once the gift certificate gets applied, the quote for the current
     * checkout will be adjusted accordingly.
     *
     * ```js
     * await service.applyGiftCertificate('GIFT_CERTIFICATE');
     * ```
     *
     * @param code - The gift certificate to apply to the current checkout.
     * @param options - Options for applying the gift certificate.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.applyGiftCertificate = function (code, options) {
        var _this = this;
        var action = this._giftCertificateActionCreator.applyGiftCertificate(code, options);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Removes a gift certificate from an order.
     *
     * Once the gift certificate gets removed, the quote for the current
     * checkout will be adjusted accordingly.
     *
     * ```js
     * await service.removeGiftCertificate('GIFT_CERTIFICATE');
     * ```
     *
     * @param code - The gift certificate to remove from the current checkout.
     * @param options - Options for removing the gift certificate.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.removeGiftCertificate = function (code, options) {
        var _this = this;
        var action = this._giftCertificateActionCreator.removeGiftCertificate(code, options);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Loads a list of payment instruments associated with a customer.
     *
     * Once the method has been called successfully, you can retrieve the list
     * of payment instruments by calling `CheckoutStoreSelector#getInstruments`.
     * If the customer does not have any payment instruments on record, i.e.:
     * credit card, you will get an empty list instead.
     *
     * ```js
     * const state = service.loadInstruments();
     *
     * console.log(state.checkout.getInstruments());
     * ```
     *
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.loadInstruments = function () {
        var _this = this;
        var action = this._instrumentActionCreator.loadInstruments();
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    /**
     * Deletes a payment instrument by an id.
     *
     * Once an instrument gets removed, it can no longer be retrieved using
     * `CheckoutStoreSelector#getInstruments`.
     *
     * ```js
     * const state = service.deleteInstrument('123');
     *
     * console.log(state.checkout.getInstruments());
     * ```
     *
     * @param instrumentId - The identifier of the payment instrument to delete.
     * @returns A promise that resolves to the current state.
     */
    CheckoutService.prototype.deleteInstrument = function (instrumentId) {
        var _this = this;
        var action = this._instrumentActionCreator.deleteInstrument(instrumentId);
        return this._store.dispatch(action)
            .then(function () { return _this.getState(); });
    };
    return CheckoutService;
}());
exports.default = CheckoutService;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var utility_1 = __webpack_require__(8);
var cache_key_resolver_1 = __webpack_require__(101);
/**
 * Decorates a class by patching all of its methods to cache their return values
 * and return them if they are called again with the same set of parameters. The
 * decorator also binds all the methods to the calling instance so it can be
 * destructed.
 */
function selectorDecorator(target) {
    var decoratedTarget = /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return class_1;
    }(target));
    Object.getOwnPropertyNames(target.prototype)
        .forEach(function (key) {
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (!descriptor || key === 'constructor') {
            return;
        }
        Object.defineProperty(decoratedTarget.prototype, key, selectorMethodDecorator(target.prototype, key, descriptor));
    });
    return decoratedTarget;
}
exports.default = selectorDecorator;
function selectorMethodDecorator(target, key, descriptor) {
    if (typeof descriptor.value !== 'function') {
        return descriptor;
    }
    var resolver = new cache_key_resolver_1.default();
    var method = descriptor.value;
    var memoizedMethod = lodash_1.memoize(method, function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return resolver.getKey.apply(resolver, args);
    });
    return utility_1.bindDecorator(target, key, {
        get: function () {
            var _this = this;
            var value = (function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var cachedValue = memoizedMethod.call.apply(memoizedMethod, [_this].concat(args));
                if (resolver.getUsedCount.apply(resolver, args) === 1) {
                    return cachedValue;
                }
                var newValue = method.call.apply(method, [_this].concat(args));
                if (lodash_1.isEqual(newValue, cachedValue)) {
                    return cachedValue;
                }
                memoizedMethod.cache.set(resolver.getKey.apply(resolver, args), newValue);
                return newValue;
            });
            Object.defineProperty(this, key, tslib_1.__assign({}, descriptor, { value: value }));
            return value;
        },
        set: function (value) {
            resolver = new cache_key_resolver_1.default();
            method = value;
            memoizedMethod = lodash_1.memoize(method, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolver.getKey.apply(resolver, args);
            });
        },
    });
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(4);
function omitDeep(object, predicate) {
    if (Array.isArray(object)) {
        return object.map(function (value) { return omitDeep(value, predicate); });
    }
    if (typeof object === 'object') {
        return lodash_1.transform(lodash_1.omitBy(object, predicate), function (result, value, key) {
            result[key] = omitDeep(value, predicate);
        }, {});
    }
    return object;
}
exports.default = omitDeep;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var request_sender_1 = __webpack_require__(10);
var billing_1 = __webpack_require__(23);
var cart_1 = __webpack_require__(11);
var config_1 = __webpack_require__(26);
var coupon_1 = __webpack_require__(15);
var customer_1 = __webpack_require__(19);
var geography_1 = __webpack_require__(27);
var order_1 = __webpack_require__(16);
var payment_1 = __webpack_require__(13);
var quote_1 = __webpack_require__(17);
var shipping_1 = __webpack_require__(28);
var checkout_client_1 = __webpack_require__(44);
function createCheckoutClient(config) {
    if (config === void 0) { config = {}; }
    var requestSender = request_sender_1.createRequestSender();
    var cartRequestSender = new cart_1.CartRequestSender(requestSender);
    var configRequestSender = new config_1.ConfigRequestSender(requestSender);
    var couponRequestSender = new coupon_1.CouponRequestSender(requestSender);
    var countryRequestSender = new geography_1.CountryRequestSender(requestSender, config);
    var customerRequestSender = new customer_1.CustomerRequestSender(requestSender);
    var giftCertificateRequestSender = new coupon_1.GiftCertificateRequestSender(requestSender);
    var orderRequestSender = new order_1.OrderRequestSender(requestSender);
    var paymentMethodRequestSender = new payment_1.PaymentMethodRequestSender(requestSender);
    var quoteRequestSender = new quote_1.QuoteRequestSender(requestSender);
    var shippingCountryRequestSender = new shipping_1.ShippingCountryRequestSender(requestSender, config);
    var shippingOptionRequestSender = new shipping_1.ShippingOptionRequestSender(requestSender);
    var billingAddressRequestSender = new billing_1.BillingAddressRequestSender(requestSender);
    var shippingAddressRequestSender = new shipping_1.ShippingAddressRequestSender(requestSender);
    return new checkout_client_1.default(billingAddressRequestSender, cartRequestSender, configRequestSender, countryRequestSender, couponRequestSender, customerRequestSender, giftCertificateRequestSender, orderRequestSender, paymentMethodRequestSender, quoteRequestSender, shippingAddressRequestSender, shippingCountryRequestSender, shippingOptionRequestSender);
}
exports.default = createCheckoutClient;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_CART_REQUESTED = 'LOAD_CART_REQUESTED';
exports.LOAD_CART_SUCCEEDED = 'LOAD_CART_SUCCEEDED';
exports.LOAD_CART_FAILED = 'LOAD_CART_FAILED';
exports.VERIFY_CART_REQUESTED = 'VERIFY_CART_REQUESTED';
exports.VERIFY_CART_SUCCEEDED = 'VERIFY_CART_SUCCEEDED';
exports.VERIFY_CART_FAILED = 'VERIFY_CART_FAILED';


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var utility_1 = __webpack_require__(8);
/**
 * @todo Convert this file into TypeScript properly
 */
var CartComparator = /** @class */ (function () {
    function CartComparator() {
    }
    CartComparator.prototype.isEqual = function (cartA, cartB) {
        return lodash_1.isEqual(this._normalize(cartA), this._normalize(cartB));
    };
    CartComparator.prototype._normalize = function (cart) {
        return utility_1.omitPrivate(tslib_1.__assign({}, cart, { items: cart.items && cart.items.map(function (item) { return lodash_1.omit(item, ['id', 'imageUrl']); }) }));
    };
    return CartComparator;
}());
exports.default = CartComparator;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(4);
var coupon_1 = __webpack_require__(15);
var map_to_internal_line_items_1 = __webpack_require__(52);
function mapToInternalCart(checkout, existingCart) {
    return {
        id: checkout.cart.id,
        items: map_to_internal_line_items_1.default(checkout.cart.lineItems, existingCart.items),
        currency: checkout.cart.currency.code,
        subtotal: existingCart.subtotal,
        coupon: {
            discountedAmount: existingCart.coupon.discountedAmount,
            coupons: checkout.cart.coupons.map(function (coupon) {
                return coupon_1.mapToInternalCoupon(coupon, 
                // tslint:disable-next-line:no-non-null-assertion
                lodash_1.find(existingCart.coupon.coupons, { code: coupon.code }));
            }),
        },
        discount: {
            amount: checkout.cart.discountAmount,
            integerAmount: existingCart.discount.integerAmount,
        },
        discountNotifications: existingCart.discountNotifications,
        giftCertificate: {
            totalDiscountedAmount: existingCart.giftCertificate.totalDiscountedAmount,
            appliedGiftCertificates: checkout.giftCertificates.map(function (giftCertificate) {
                return coupon_1.mapToInternalGiftCertificate(giftCertificate, 
                // tslint:disable-next-line:no-non-null-assertion
                lodash_1.find(existingCart.giftCertificate.appliedGiftCertificates, { code: giftCertificate.code }));
            }),
        },
        shipping: {
            amount: checkout.shippingCostTotal,
            integerAmount: existingCart.shipping.integerAmount,
            amountBeforeDiscount: existingCart.shipping.amountBeforeDiscount,
            integerAmountBeforeDiscount: existingCart.shipping.integerAmountBeforeDiscount,
            required: existingCart.shipping.required,
        },
        storeCredit: {
            amount: checkout.storeCredit,
        },
        taxSubtotal: existingCart.taxSubtotal,
        taxes: existingCart.taxes,
        taxTotal: {
            amount: checkout.taxTotal,
            integerAmount: existingCart.taxTotal.integerAmount,
        },
        handling: existingCart.handling,
        grandTotal: {
            amount: checkout.grandTotal,
            integerAmount: existingCart.grandTotal.integerAmount,
        },
    };
}
exports.default = mapToInternalCart;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(4);
var map_to_internal_line_item_1 = __webpack_require__(53);
function mapToInternalLineItems(itemMap, existingItems) {
    return Object.keys(itemMap)
        .reduce(function (result, key) { return result.concat(itemMap[key].map(function (item) {
        // tslint:disable-next-line:no-non-null-assertion
        var existingItem = lodash_1.find(existingItems, { id: item.id });
        return map_to_internal_line_item_1.default(item, existingItem, mapToInternalLineItemType(key));
    })); }, []);
}
exports.default = mapToInternalLineItems;
function mapToInternalLineItemType(type) {
    switch (type) {
        case 'physicalItems':
            return 'ItemPhysicalEntity';
        case 'digitalItems':
            return 'ItemDigitalEntity';
        case 'giftCertificates':
            return 'ItemGiftCertificateEntity';
        default:
            return '';
    }
}


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mapToInternalLineItem(item, existingItem, type) {
    return {
        amount: existingItem.amount,
        amountAfterDiscount: existingItem.amountAfterDiscount,
        attributes: existingItem.attributes,
        discount: item.discountAmount,
        id: item.id,
        imageUrl: item.imageUrl,
        integerAmount: existingItem.integerAmount,
        integerAmountAfterDiscount: existingItem.integerAmountAfterDiscount,
        integerDiscount: existingItem.integerDiscount,
        integerTax: existingItem.integerTax,
        name: item.name,
        quantity: item.quantity,
        tax: existingItem.tax,
        variantId: item.variantId,
        type: type,
    };
}
exports.default = mapToInternalLineItem;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigActionType;
(function (ConfigActionType) {
    ConfigActionType["LoadConfigRequested"] = "LOAD_CONFIG_REQUESTED";
    ConfigActionType["LoadConfigSucceeded"] = "LOAD_CONFIG_SUCCEEDED";
    ConfigActionType["LoadConfigFailed"] = "LOAD_CONFIG_FAILED";
})(ConfigActionType = exports.ConfigActionType || (exports.ConfigActionType = {}));


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("@bigcommerce/form-poster");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var address_1 = __webpack_require__(37);
function mapToInternalQuote(checkout, existingQuote) {
    return {
        orderComment: existingQuote.orderComment,
        shippingOption: checkout.consignments[0] ? checkout.consignments[0].selectedShippingOptionId : existingQuote.shippingOption,
        billingAddress: address_1.mapToInternalAddress(checkout.billingAddress, existingQuote.billingAddress),
        shippingAddress: checkout.consignments[0] ? address_1.mapToInternalAddress(checkout.consignments[0].shippingAddress, existingQuote.shippingAddress) : existingQuote.shippingAddress,
    };
}
exports.default = mapToInternalQuote;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.INITIALIZE_REMOTE_BILLING_REQUESTED = 'INITIALIZE_REMOTE_BILLING_REQUESTED';
exports.INITIALIZE_REMOTE_BILLING_SUCCEEDED = 'INITIALIZE_REMOTE_BILLING_SUCCEEDED';
exports.INITIALIZE_REMOTE_BILLING_FAILED = 'INITIALIZE_REMOTE_BILLING_FAILED';
exports.INITIALIZE_REMOTE_SHIPPING_REQUESTED = 'INITIALIZE_REMOTE_SHIPPING_REQUESTED';
exports.INITIALIZE_REMOTE_SHIPPING_SUCCEEDED = 'INITIALIZE_REMOTE_SHIPPING_SUCCEEDED';
exports.INITIALIZE_REMOTE_SHIPPING_FAILED = 'INITIALIZE_REMOTE_SHIPPING_FAILED';
exports.INITIALIZE_REMOTE_PAYMENT_REQUESTED = 'INITIALIZE_REMOTE_PAYMENT_REQUESTED';
exports.INITIALIZE_REMOTE_PAYMENT_SUCCEEDED = 'INITIALIZE_REMOTE_PAYMENT_SUCCEEDED';
exports.INITIALIZE_REMOTE_PAYMENT_FAILED = 'INITIALIZE_REMOTE_PAYMENT_FAILED';
exports.SIGN_OUT_REMOTE_CUSTOMER_REQUESTED = 'SIGN_OUT_REMOTE_CUSTOMER_REQUESTED';
exports.SIGN_OUT_REMOTE_CUSTOMER_SUCCEEDED = 'SIGN_OUT_REMOTE_CUSTOMER_SUCCEEDED';
exports.SIGN_OUT_REMOTE_CUSTOMER_FAILED = 'SIGN_OUT_REMOTE_CUSTOMER_FAILED';
exports.SET_REMOTE_CHECKOUT_META = 'SET_REMOTE_CHECKOUT_META';


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var lodash_1 = __webpack_require__(4);
var concat_1 = __webpack_require__(163);
var defer_1 = __webpack_require__(164);
var Observable_1 = __webpack_require__(5);
var errors_1 = __webpack_require__(2);
var is_vaulted_instrument_1 = __webpack_require__(39);
var actionTypes = __webpack_require__(59);
/**
 * @todo Convert this file into TypeScript properly
 */
var PaymentActionCreator = /** @class */ (function () {
    function PaymentActionCreator(_paymentRequestSender, _orderActionCreator) {
        this._paymentRequestSender = _paymentRequestSender;
        this._orderActionCreator = _orderActionCreator;
    }
    PaymentActionCreator.prototype.submitPayment = function (payment) {
        var _this = this;
        return function (store) { return concat_1.concat(Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.SUBMIT_PAYMENT_REQUESTED));
            return _this._paymentRequestSender.submitPayment(_this._getPaymentRequestBody(payment, store.getState()))
                .then(function (_a) {
                var body = _a.body;
                observer.next(data_store_1.createAction(actionTypes.SUBMIT_PAYMENT_SUCCEEDED, body));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.SUBMIT_PAYMENT_FAILED, response));
            });
        }), defer_1.defer(function () {
            var state = store.getState();
            var order = state.order.getOrder();
            if (!order || !order.orderId) {
                throw new errors_1.MissingDataError('Unable to reload order data because "order.orderId" is missing');
            }
            return _this._orderActionCreator.loadOrder(order.orderId);
        })); };
    };
    PaymentActionCreator.prototype.initializeOffsitePayment = function (payment) {
        var _this = this;
        return function (store) {
            return Observable_1.Observable.create(function (observer) {
                observer.next(data_store_1.createAction(actionTypes.INITIALIZE_OFFSITE_PAYMENT_REQUESTED));
                return _this._paymentRequestSender.initializeOffsitePayment(_this._getPaymentRequestBody(payment, store.getState()))
                    .then(function () {
                    observer.next(data_store_1.createAction(actionTypes.INITIALIZE_OFFSITE_PAYMENT_SUCCEEDED));
                    observer.complete();
                })
                    .catch(function () {
                    observer.error(data_store_1.createErrorAction(actionTypes.INITIALIZE_OFFSITE_PAYMENT_FAILED));
                });
            });
        };
    };
    PaymentActionCreator.prototype._getPaymentRequestBody = function (payment, state) {
        var deviceSessionId = state.quote.getQuoteMeta().request.deviceSessionId;
        var billingAddress = state.billingAddress.getBillingAddress();
        var cart = state.cart.getCart();
        var customer = state.customer.getCustomer();
        var order = state.order.getOrder();
        var paymentMethod = this._getPaymentMethod(payment, state.paymentMethods);
        var shippingAddress = state.shippingAddress.getShippingAddress();
        var shippingOption = state.shippingOptions.getSelectedShippingOption();
        var config = state.config.getStoreConfig();
        var instrumentMeta = state.instruments.getInstrumentsMeta();
        if (!config) {
            throw new errors_1.NotInitializedError('Config data is missing');
        }
        var authToken = payment.paymentData && instrumentMeta && is_vaulted_instrument_1.default(payment.paymentData) ?
            state.order.getPaymentAuthToken() + ", " + instrumentMeta.vaultAccessToken :
            state.order.getPaymentAuthToken();
        if (!authToken || !payment.paymentData) {
            throw new errors_1.MissingDataError('Unable to submit payment because "authToken" or "paymentData" is missing.');
        }
        return {
            billingAddress: billingAddress,
            cart: cart,
            customer: customer,
            order: order,
            paymentMethod: paymentMethod,
            shippingAddress: shippingAddress,
            shippingOption: shippingOption,
            authToken: authToken,
            orderMeta: state.order.getOrderMeta(),
            payment: payment.paymentData,
            quoteMeta: {
                request: tslib_1.__assign({}, state.quote.getQuoteMeta().request, { deviceSessionId: deviceSessionId }),
            },
            source: 'bigcommerce-checkout-js-sdk',
            store: lodash_1.pick(config.storeProfile, [
                'storeHash',
                'storeId',
                'storeLanguage',
                'storeName',
            ]),
        };
    };
    PaymentActionCreator.prototype._getPaymentMethod = function (payment, paymentMethodSelector) {
        var paymentMethod = paymentMethodSelector.getPaymentMethod(payment.methodId, payment.gatewayId);
        return (paymentMethod && paymentMethod.method === 'multi-option' && !paymentMethod.gateway) ? tslib_1.__assign({}, paymentMethod, { gateway: paymentMethod.id }) :
            paymentMethod;
    };
    return PaymentActionCreator;
}());
exports.default = PaymentActionCreator;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SUBMIT_PAYMENT_REQUESTED = 'SUBMIT_PAYMENT_REQUESTED';
exports.SUBMIT_PAYMENT_SUCCEEDED = 'SUBMIT_PAYMENT_SUCCEEDED';
exports.SUBMIT_PAYMENT_FAILED = 'SUBMIT_PAYMENT_FAILED';
exports.INITIALIZE_OFFSITE_PAYMENT_REQUESTED = 'INITIALIZE_OFFSITE_PAYMENT_REQUESTED';
exports.INITIALIZE_OFFSITE_PAYMENT_SUCCEEDED = 'INITIALIZE_OFFSITE_PAYMENT_SUCCEEDED';
exports.INITIALIZE_OFFSITE_PAYMENT_FAILED = 'INITIALIZE_OFFSITE_PAYMENT_FAILED';


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(61);
/**
 * @todo Convert this file into TypeScript properly
 */
var PaymentMethodActionCreator = /** @class */ (function () {
    function PaymentMethodActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    PaymentMethodActionCreator.prototype.loadPaymentMethods = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.LOAD_PAYMENT_METHODS_REQUESTED));
            _this._checkoutClient.loadPaymentMethods(options)
                .then(function (response) {
                observer.next(data_store_1.createAction(actionTypes.LOAD_PAYMENT_METHODS_SUCCEEDED, response.body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.LOAD_PAYMENT_METHODS_FAILED, response));
            });
        });
    };
    PaymentMethodActionCreator.prototype.loadPaymentMethod = function (methodId, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.LOAD_PAYMENT_METHOD_REQUESTED, undefined, { methodId: methodId }));
            _this._checkoutClient.loadPaymentMethod(methodId, options)
                .then(function (response) {
                observer.next(data_store_1.createAction(actionTypes.LOAD_PAYMENT_METHOD_SUCCEEDED, response.body.data, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.LOAD_PAYMENT_METHOD_FAILED, response, { methodId: methodId }));
            });
        });
    };
    return PaymentMethodActionCreator;
}());
exports.default = PaymentMethodActionCreator;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_PAYMENT_METHODS_REQUESTED = 'LOAD_PAYMENT_METHODS_REQUESTED';
exports.LOAD_PAYMENT_METHODS_SUCCEEDED = 'LOAD_PAYMENT_METHODS_SUCCEEDED';
exports.LOAD_PAYMENT_METHODS_FAILED = 'LOAD_PAYMENT_METHODS_FAILED';
exports.LOAD_PAYMENT_METHOD_REQUESTED = 'LOAD_PAYMENT_METHOD_REQUESTED';
exports.LOAD_PAYMENT_METHOD_SUCCEEDED = 'LOAD_PAYMENT_METHOD_SUCCEEDED';
exports.LOAD_PAYMENT_METHOD_FAILED = 'LOAD_PAYMENT_METHOD_FAILED';
exports.INITIALIZE_PAYMENT_METHOD_REQUESTED = 'INITIALIZE_PAYMENT_METHOD_REQUESTED';
exports.INITIALIZE_PAYMENT_METHOD_SUCCEEDED = 'INITIALIZE_PAYMENT_METHOD_SUCCEEDED';
exports.INITIALIZE_PAYMENT_METHOD_FAILED = 'INITIALIZE_PAYMENT_METHOD_FAILED';


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var PaymentRequestSender = /** @class */ (function () {
    /**
     * @constructor
     * @param {BigpayClient} client
     */
    function PaymentRequestSender(_client) {
        this._client = _client;
    }
    PaymentRequestSender.prototype.submitPayment = function (payload) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._client.submitPayment(payload, function (error, response) {
                if (error) {
                    reject(_this._transformResponse(error));
                }
                else {
                    resolve(_this._transformResponse(response));
                }
            });
        });
    };
    PaymentRequestSender.prototype.initializeOffsitePayment = function (payload) {
        var _this = this;
        return new Promise(function () {
            _this._client.initializeOffsitePayment(payload);
        });
    };
    PaymentRequestSender.prototype._transformResponse = function (response) {
        return {
            headers: {},
            body: response.data,
            status: response.status,
            statusText: response.statusText,
        };
    };
    return PaymentRequestSender;
}());
exports.default = PaymentRequestSender;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var errors_1 = __webpack_require__(2);
var registry_1 = __webpack_require__(33);
var paymentMethodTypes = __webpack_require__(165);
var PaymentStrategyRegistry = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentStrategyRegistry, _super);
    function PaymentStrategyRegistry(_store, options) {
        var _this = _super.call(this, options) || this;
        _this._store = _store;
        return _this;
    }
    PaymentStrategyRegistry.prototype.getByMethod = function (paymentMethod) {
        if (!paymentMethod) {
            return this.get();
        }
        var token = this._getToken(paymentMethod);
        var cacheToken = paymentMethod.gateway || paymentMethod.id;
        return this.get(token, cacheToken);
    };
    PaymentStrategyRegistry.prototype._getToken = function (paymentMethod) {
        var methodId = paymentMethod.gateway || paymentMethod.id;
        if (this.hasFactory(methodId)) {
            return methodId;
        }
        if (paymentMethod.type === paymentMethodTypes.OFFLINE) {
            return 'offline';
        }
        if (this._isLegacyMethod(paymentMethod)) {
            return 'legacy';
        }
        if (paymentMethod.type === paymentMethodTypes.HOSTED) {
            return 'offsite';
        }
        return 'creditcard';
    };
    PaymentStrategyRegistry.prototype._isLegacyMethod = function (paymentMethod) {
        var config = this._store.getState().config.getStoreConfig();
        if (!config) {
            throw new errors_1.NotInitializedError('Config data is missing');
        }
        var clientSidePaymentProviders = config.paymentSettings.clientSidePaymentProviders;
        if (!clientSidePaymentProviders || paymentMethod.gateway === 'adyen') {
            return false;
        }
        return !lodash_1.some(clientSidePaymentProviders, function (id) {
            return paymentMethod.id === id || paymentMethod.gateway === id;
        });
    };
    return PaymentStrategyRegistry;
}(registry_1.Registry));
exports.default = PaymentStrategyRegistry;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var order_finalization_not_required_error_1 = __webpack_require__(171);
exports.OrderFinalizationNotRequiredError = order_finalization_not_required_error_1.default;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var remote_checkout_synchronization_error_1 = __webpack_require__(173);
exports.RemoteCheckoutSynchronizationError = remote_checkout_synchronization_error_1.default;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(9);
var payment_strategy_1 = __webpack_require__(6);
var CreditCardPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(CreditCardPaymentStrategy, _super);
    function CreditCardPaymentStrategy(store, _orderActionCreator, _paymentActionCreator) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._paymentActionCreator = _paymentActionCreator;
        return _this;
    }
    CreditCardPaymentStrategy.prototype.execute = function (payload, options) {
        var _this = this;
        var payment = payload.payment, order = tslib_1.__rest(payload, ["payment"]);
        var paymentData = payment && payment.paymentData;
        if (!payment || !paymentData) {
            throw new errors_1.PaymentArgumentInvalidError(['payment.paymentData']);
        }
        return this._store.dispatch(this._orderActionCreator.submitOrder(order, options))
            .then(function () {
            return _this._store.dispatch(_this._paymentActionCreator.submitPayment(tslib_1.__assign({}, payment, { paymentData: paymentData })));
        });
    };
    return CreditCardPaymentStrategy;
}(payment_strategy_1.default));
exports.default = CreditCardPaymentStrategy;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var utility_1 = __webpack_require__(8);
var errors_2 = __webpack_require__(9);
var BraintreePaymentProcessor = /** @class */ (function () {
    function BraintreePaymentProcessor(_braintreeSDKCreator) {
        this._braintreeSDKCreator = _braintreeSDKCreator;
    }
    BraintreePaymentProcessor.prototype.initialize = function (clientToken, options) {
        this._braintreeSDKCreator.initialize(clientToken);
        this._threeDSecureOptions = options && options.threeDSecure;
    };
    BraintreePaymentProcessor.prototype.preloadPaypal = function () {
        return this._braintreeSDKCreator.getPaypal();
    };
    BraintreePaymentProcessor.prototype.tokenizeCard = function (payment, billingAddress) {
        var paymentData = payment.paymentData;
        var requestData = this._mapToCreditCard(paymentData, billingAddress);
        return this._braintreeSDKCreator.getClient()
            .then(function (client) { return client.request(requestData); })
            .then(function (_a) {
            var creditCards = _a.creditCards;
            return ({
                nonce: creditCards[0].nonce,
            });
        });
    };
    BraintreePaymentProcessor.prototype.paypal = function (amount, storeLanguage, currency, offerCredit) {
        return this._braintreeSDKCreator.getPaypal()
            .then(function (paypal) { return paypal.tokenize({
            amount: amount,
            currency: currency,
            enableShippingAddress: true,
            flow: 'checkout',
            locale: storeLanguage,
            offerCredit: offerCredit,
            useraction: 'commit',
        }); });
    };
    BraintreePaymentProcessor.prototype.verifyCard = function (payment, billingAddress, amount) {
        if (!this._threeDSecureOptions) {
            throw new errors_1.NotInitializedError('Unable to verify card because the choosen payment method has not been initialized.');
        }
        var _a = this._threeDSecureOptions, addFrame = _a.addFrame, removeFrame = _a.removeFrame;
        return Promise.all([
            this.tokenizeCard(payment, billingAddress),
            this._braintreeSDKCreator.get3DS(),
        ]).then(function (_a) {
            var paymentData = _a[0], threeDSecure = _a[1];
            var nonce = paymentData.nonce;
            var cancelVerifyCard = function () { return threeDSecure.cancelVerifyCard()
                .then(function (response) {
                verification.cancel(new errors_2.PaymentMethodCancelledError());
                return response;
            }); };
            var verification = new utility_1.CancellablePromise(threeDSecure.verifyCard({
                addFrame: function (error, iframe) {
                    addFrame(error, iframe, cancelVerifyCard);
                },
                amount: amount,
                nonce: nonce,
                removeFrame: removeFrame,
            }));
            return verification.promise;
        });
    };
    BraintreePaymentProcessor.prototype.appendSessionId = function (processedPayment) {
        var _this = this;
        return processedPayment
            .then(function (paymentData) { return Promise.all([paymentData, _this._braintreeSDKCreator.getDataCollector()]); })
            .then(function (_a) {
            var paymentData = _a[0], deviceData = _a[1].deviceData;
            return (tslib_1.__assign({}, paymentData, { deviceSessionId: deviceData }));
        });
    };
    BraintreePaymentProcessor.prototype.deinitialize = function () {
        return this._braintreeSDKCreator.teardown();
    };
    BraintreePaymentProcessor.prototype._mapToCreditCard = function (creditCard, billingAddress) {
        var streetAddress = billingAddress.addressLine1;
        if (billingAddress.addressLine2) {
            streetAddress = " " + billingAddress.addressLine2;
        }
        return {
            data: {
                creditCard: {
                    cardholderName: creditCard.ccName,
                    number: creditCard.ccNumber,
                    cvv: creditCard.ccCvv,
                    expirationDate: creditCard.ccExpiry.month + "/" + creditCard.ccExpiry.year,
                    options: {
                        validate: false,
                    },
                    billingAddress: {
                        countryName: billingAddress.country,
                        postalCode: billingAddress.postCode,
                        streetAddress: streetAddress,
                    },
                },
            },
            endpoint: 'payment_methods/credit_cards',
            method: 'post',
        };
    };
    return BraintreePaymentProcessor;
}());
exports.default = BraintreePaymentProcessor;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var http_request_1 = __webpack_require__(69);
var BraintreeVisaCheckoutPaymentProcessor = /** @class */ (function () {
    function BraintreeVisaCheckoutPaymentProcessor(_braintreeSDKCreator, _requestSender) {
        this._braintreeSDKCreator = _braintreeSDKCreator;
        this._requestSender = _requestSender;
    }
    BraintreeVisaCheckoutPaymentProcessor.prototype.initialize = function (clientToken, options) {
        if (!clientToken) {
            throw new errors_1.NotInitializedError();
        }
        this._braintreeSDKCreator.initialize(clientToken);
        return this._braintreeSDKCreator.getVisaCheckout()
            .then(function (visaCheckout) { return visaCheckout.createInitOptions({
            settings: {
                locale: options.locale,
                shipping: {
                    collectShipping: options.collectShipping,
                },
            },
            paymentRequest: {
                currencyCode: options.currencyCode,
                subtotal: String(options.subtotal),
            },
        }); });
    };
    BraintreeVisaCheckoutPaymentProcessor.prototype.deinitialize = function () {
        return this._braintreeSDKCreator.teardown();
    };
    BraintreeVisaCheckoutPaymentProcessor.prototype.handleSuccess = function (payment, shipping, billing) {
        var _this = this;
        return this._braintreeSDKCreator.getVisaCheckout()
            .then(function (braintreeVisaCheckout) { return Promise.all([
            braintreeVisaCheckout.tokenize(payment),
            _this._braintreeSDKCreator.getDataCollector(),
        ])
            .then(function (_a) {
            var tokenizedPayload = _a[0], dataCollector = _a[1];
            var _b = tokenizedPayload.shippingAddress, shippingAddress = _b === void 0 ? _this._toVisaCheckoutAddress(shipping) : _b, _c = tokenizedPayload.billingAddress, billingAddress = _c === void 0 ? _this._toVisaCheckoutAddress(billing) : _c;
            return _this._postForm(tslib_1.__assign({}, tokenizedPayload, { shippingAddress: shippingAddress,
                billingAddress: billingAddress }), dataCollector);
        }); });
    };
    BraintreeVisaCheckoutPaymentProcessor.prototype._postForm = function (paymentData, dataCollector) {
        var userData = paymentData.userData, billingAddress = paymentData.billingAddress, shippingAddress = paymentData.shippingAddress, cardInformation = paymentData.details;
        var userEmail = userData.userEmail;
        var deviceData = dataCollector.deviceData;
        return this._requestSender.post('/checkout.php', {
            headers: {
                Accept: 'text/html',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: http_request_1.toFormUrlEncoded({
                payment_type: paymentData.type,
                nonce: paymentData.nonce,
                provider: 'braintreevisacheckout',
                action: 'set_external_checkout',
                device_data: deviceData,
                card_information: this._getCardInformation(cardInformation),
                billing_address: this._getAddress(userEmail, billingAddress),
                shipping_address: this._getAddress(userEmail, shippingAddress),
            }),
        });
    };
    BraintreeVisaCheckoutPaymentProcessor.prototype._toVisaCheckoutAddress = function (address) {
        if (!address) {
            return {};
        }
        return {
            firstName: address.firstName,
            lastName: address.lastName,
            phoneNumber: address.phone,
            streetAddress: address.addressLine1,
            extendedAddress: address.addressLine2,
            locality: address.city,
            region: address.provinceCode,
            countryCode: address.countryCode,
            postalCode: address.postCode,
        };
    };
    BraintreeVisaCheckoutPaymentProcessor.prototype._getAddress = function (email, address) {
        if (address === void 0) { address = {}; }
        return {
            email: email,
            first_name: address.firstName,
            last_name: address.lastName,
            phone_number: address.phoneNumber,
            address_line_1: address.streetAddress,
            address_line_2: address.extendedAddress,
            city: address.locality,
            state: address.region,
            country_code: address.countryCode,
            postal_code: address.postalCode,
        };
    };
    BraintreeVisaCheckoutPaymentProcessor.prototype._getCardInformation = function (cardInformation) {
        return {
            type: cardInformation.cardType,
            number: cardInformation.lastTwo,
        };
    };
    return BraintreeVisaCheckoutPaymentProcessor;
}());
exports.default = BraintreeVisaCheckoutPaymentProcessor;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var to_form_url_encoded_1 = __webpack_require__(186);
exports.toFormUrlEncoded = to_form_url_encoded_1.default;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(2);
var BraintreeScriptLoader = /** @class */ (function () {
    function BraintreeScriptLoader(_scriptLoader, _window) {
        if (_window === void 0) { _window = window; }
        this._scriptLoader = _scriptLoader;
        this._window = _window;
    }
    BraintreeScriptLoader.prototype.loadClient = function () {
        var _this = this;
        return this._scriptLoader
            .loadScript('//js.braintreegateway.com/web/3.15.0/js/client.min.js')
            .then(function () {
            if (!_this._window.braintree || !_this._window.braintree.client) {
                throw new errors_1.StandardError();
            }
            return _this._window.braintree.client;
        });
    };
    BraintreeScriptLoader.prototype.load3DS = function () {
        var _this = this;
        return this._scriptLoader
            .loadScript('//js.braintreegateway.com/web/3.15.0/js/three-d-secure.min.js')
            .then(function () {
            if (!_this._window.braintree || !_this._window.braintree.threeDSecure) {
                throw new errors_1.StandardError();
            }
            return _this._window.braintree.threeDSecure;
        });
    };
    BraintreeScriptLoader.prototype.loadDataCollector = function () {
        var _this = this;
        return this._scriptLoader
            .loadScript('//js.braintreegateway.com/web/3.15.0/js/data-collector.min.js')
            .then(function () {
            if (!_this._window.braintree || !_this._window.braintree.dataCollector) {
                throw new errors_1.StandardError();
            }
            return _this._window.braintree.dataCollector;
        });
    };
    BraintreeScriptLoader.prototype.loadPaypal = function () {
        var _this = this;
        return this._scriptLoader
            .loadScript('//js.braintreegateway.com/web/3.15.0/js/paypal.min.js')
            .then(function () {
            if (!_this._window.braintree || !_this._window.braintree.paypal) {
                throw new errors_1.StandardError();
            }
            return _this._window.braintree.paypal;
        });
    };
    BraintreeScriptLoader.prototype.loadVisaCheckout = function () {
        var _this = this;
        return this._scriptLoader
            .loadScript('//js.braintreegateway.com/web/3.15.0/js/visa-checkout.min.js')
            .then(function () {
            if (!_this._window.braintree || !_this._window.braintree.visaCheckout) {
                throw new errors_1.StandardError();
            }
            return _this._window.braintree.visaCheckout;
        });
    };
    return BraintreeScriptLoader;
}());
exports.default = BraintreeScriptLoader;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(2);
var BraintreeSDKCreator = /** @class */ (function () {
    function BraintreeSDKCreator(_braintreeScriptLoader) {
        this._braintreeScriptLoader = _braintreeScriptLoader;
    }
    BraintreeSDKCreator.prototype.initialize = function (clientToken) {
        this._clientToken = clientToken;
    };
    BraintreeSDKCreator.prototype.getClient = function () {
        var _this = this;
        if (!this._clientToken) {
            throw new errors_1.NotInitializedError();
        }
        if (!this._client) {
            this._client = this._braintreeScriptLoader.loadClient()
                .then(function (client) { return client.create({ authorization: _this._clientToken }); });
        }
        return this._client;
    };
    BraintreeSDKCreator.prototype.getPaypal = function () {
        if (!this._paypal) {
            this._paypal = Promise.all([
                this.getClient(),
                this._braintreeScriptLoader.loadPaypal(),
            ])
                .then(function (_a) {
                var client = _a[0], paypal = _a[1];
                return paypal.create({ client: client });
            });
        }
        return this._paypal;
    };
    BraintreeSDKCreator.prototype.get3DS = function () {
        if (!this._3ds) {
            this._3ds = Promise.all([
                this.getClient(),
                this._braintreeScriptLoader.load3DS(),
            ])
                .then(function (_a) {
                var client = _a[0], threeDSecure = _a[1];
                return threeDSecure.create({ client: client });
            });
        }
        return this._3ds;
    };
    BraintreeSDKCreator.prototype.getDataCollector = function () {
        if (!this._dataCollector) {
            this._dataCollector = Promise.all([
                this.getClient(),
                this._braintreeScriptLoader.loadDataCollector(),
            ])
                .then(function (_a) {
                var client = _a[0], dataCollector = _a[1];
                return dataCollector.create({ client: client, kount: true });
            })
                .catch(function (error) {
                if (error && error.code === 'DATA_COLLECTOR_KOUNT_NOT_ENABLED') {
                    return { deviceData: undefined, teardown: function () { return Promise.resolve(); } };
                }
                throw error;
            });
        }
        return this._dataCollector;
    };
    BraintreeSDKCreator.prototype.getVisaCheckout = function () {
        if (!this._visaCheckout) {
            this._visaCheckout = Promise.all([
                this.getClient(),
                this._braintreeScriptLoader.loadVisaCheckout(),
            ])
                .then(function (_a) {
                var client = _a[0], visaCheckout = _a[1];
                return visaCheckout.create({ client: client });
            });
        }
        return this._visaCheckout;
    };
    BraintreeSDKCreator.prototype.teardown = function () {
        var _this = this;
        return Promise.all([
            this._teardown(this._3ds),
            this._teardown(this._dataCollector),
            this._teardown(this._visaCheckout),
        ]).then(function () {
            _this._3ds = undefined;
            _this._dataCollector = undefined;
            _this._visaCheckout = undefined;
        });
    };
    BraintreeSDKCreator.prototype._teardown = function (module) {
        return module ?
            module.then(function (mod) { return mod.teardown(); }) :
            Promise.resolve();
    };
    return BraintreeSDKCreator;
}());
exports.default = BraintreeSDKCreator;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var square_payment_strategy_1 = __webpack_require__(191);
exports.SquarePaymentStrategy = square_payment_strategy_1.default;
var square_script_loader_1 = __webpack_require__(192);
exports.SquareScriptLoader = square_script_loader_1.default;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PaymentStrategyActionType;
(function (PaymentStrategyActionType) {
    PaymentStrategyActionType["ExecuteFailed"] = "PAYMENT_STRATEGY_EXECUTE_FAILED";
    PaymentStrategyActionType["ExecuteRequested"] = "PAYMENT_STRATEGY_EXECUTE_REQUESTED";
    PaymentStrategyActionType["ExecuteSucceeded"] = "PAYMENT_STRATEGY_EXECUTE_SUCCEEDED";
    PaymentStrategyActionType["FinalizeFailed"] = "PAYMENT_STRATEGY_FINALIZE_FAILED";
    PaymentStrategyActionType["FinalizeRequested"] = "PAYMENT_STRATEGY_FINALIZE_REQUESTED";
    PaymentStrategyActionType["FinalizeSucceeded"] = "PAYMENT_STRATEGY_FINALIZE_SUCCEEDED";
    PaymentStrategyActionType["InitializeFailed"] = "PAYMENT_STRATEGY_INITIALIZE_FAILED";
    PaymentStrategyActionType["InitializeRequested"] = "PAYMENT_STRATEGY_INITIALIZE_REQUESTED";
    PaymentStrategyActionType["InitializeSucceeded"] = "PAYMENT_STRATEGY_INITIALIZE_SUCCEEDED";
    PaymentStrategyActionType["DeinitializeFailed"] = "PAYMENT_STRATEGY_DEINITIALIZE_FAILED";
    PaymentStrategyActionType["DeinitializeRequested"] = "PAYMENT_STRATEGY_DEINITIALIZE_REQUESTED";
    PaymentStrategyActionType["DeinitializeSucceeded"] = "PAYMENT_STRATEGY_DEINITIALIZE_SUCCEEDED";
    PaymentStrategyActionType["WidgetInteractionStarted"] = "PAYMENT_STRATEGY_WIDGET_INTERACTION_STARTED";
    PaymentStrategyActionType["WidgetInteractionFinished"] = "PAYMENT_STRATEGY_WIDGET_INTERACTION_FINISHED";
    PaymentStrategyActionType["WidgetInteractionFailed"] = "PAYMENT_STRATEGY_WIDGET_INTERACTION_FAILED";
})(PaymentStrategyActionType = exports.PaymentStrategyActionType || (exports.PaymentStrategyActionType = {}));


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_STATE = {
    errors: {},
    statuses: {},
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(18);
/**
 * @todo Convert this file into TypeScript properly
 */
var CustomerActionCreator = /** @class */ (function () {
    function CustomerActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    CustomerActionCreator.prototype.signInCustomer = function (credentials, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.SIGN_IN_CUSTOMER_REQUESTED));
            _this._checkoutClient.signInCustomer(credentials, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.SIGN_IN_CUSTOMER_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.SIGN_IN_CUSTOMER_FAILED, response));
            });
        });
    };
    CustomerActionCreator.prototype.signOutCustomer = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.SIGN_OUT_CUSTOMER_REQUESTED));
            _this._checkoutClient.signOutCustomer(options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.SIGN_OUT_CUSTOMER_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.SIGN_OUT_CUSTOMER_FAILED, response));
            });
        });
    };
    return CustomerActionCreator;
}());
exports.default = CustomerActionCreator;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mapToInternalCustomer(checkout, existingCustomer) {
    return {
        addresses: existingCustomer.addresses,
        customerId: checkout.cart.customerId,
        customerGroupId: existingCustomer.customerGroupId,
        customerGroupName: existingCustomer.customerGroupName,
        isGuest: existingCustomer.isGuest,
        phoneNumber: existingCustomer.phoneNumber,
        remote: existingCustomer.remote,
        storeCredit: checkout.storeCredit,
        email: existingCustomer.email,
        firstName: existingCustomer.firstName,
        name: existingCustomer.name,
    };
}
exports.default = mapToInternalCustomer;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomerStrategyActionType;
(function (CustomerStrategyActionType) {
    CustomerStrategyActionType["SignInFailed"] = "CUSTOMER_STRATEGY_SIGN_IN_FAILED";
    CustomerStrategyActionType["SignInRequested"] = "CUSTOMER_STRATEGY_SIGN_IN_REQUESTED";
    CustomerStrategyActionType["SignInSucceeded"] = "CUSTOMER_STRATEGY_SIGN_IN_SUCCEEDED";
    CustomerStrategyActionType["SignOutFailed"] = "CUSTOMER_STRATEGY_SIGN_OUT_FAILED";
    CustomerStrategyActionType["SignOutRequested"] = "CUSTOMER_STRATEGY_SIGN_OUT_REQUESTED";
    CustomerStrategyActionType["SignOutSucceeded"] = "CUSTOMER_STRATEGY_SIGN_OUT_SUCCEEDED";
    CustomerStrategyActionType["InitializeFailed"] = "CUSTOMER_STRATEGY_INITIALIZE_FAILED";
    CustomerStrategyActionType["InitializeRequested"] = "CUSTOMER_STRATEGY_INITIALIZE_REQUESTED";
    CustomerStrategyActionType["InitializeSucceeded"] = "CUSTOMER_STRATEGY_INITIALIZE_SUCCEEDED";
    CustomerStrategyActionType["DeinitializeFailed"] = "CUSTOMER_STRATEGY_DEINITIALIZE_FAILED";
    CustomerStrategyActionType["DeinitializeRequested"] = "CUSTOMER_STRATEGY_DEINITIALIZE_REQUESTED";
    CustomerStrategyActionType["DeinitializeSucceeded"] = "CUSTOMER_STRATEGY_DEINITIALIZE_SUCCEEDED";
    CustomerStrategyActionType["WidgetInteractionStarted"] = "CUSTOMER_STRATEGY_WIDGET_INTERACTION_STARTED";
    CustomerStrategyActionType["WidgetInteractionFinished"] = "CUSTOMER_STRATEGY_WIDGET_INTERACTION_FINISHED";
    CustomerStrategyActionType["WidgetInteractionFailed"] = "CUSTOMER_STRATEGY_WIDGET_INTERACTION_FAILED";
})(CustomerStrategyActionType = exports.CustomerStrategyActionType || (exports.CustomerStrategyActionType = {}));


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_COUNTRIES_REQUESTED = 'LOAD_COUNTRIES_REQUESTED';
exports.LOAD_COUNTRIES_SUCCEEDED = 'LOAD_COUNTRIES_SUCCEEDED';
exports.LOAD_COUNTRIES_FAILED = 'LOAD_COUNTRIES_FAILED';


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(24);
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action<T>
 */
var ShippingAddressActionCreator = /** @class */ (function () {
    function ShippingAddressActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    ShippingAddressActionCreator.prototype.updateAddress = function (address, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.UPDATE_SHIPPING_ADDRESS_REQUESTED));
            _this._checkoutClient.updateShippingAddress(address, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.UPDATE_SHIPPING_ADDRESS_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.UPDATE_SHIPPING_ADDRESS_FAILED, response));
            });
        });
    };
    return ShippingAddressActionCreator;
}());
exports.default = ShippingAddressActionCreator;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(25);
/**
 * @todo Convert this file into TypeScript properly
 */
var ShippingOptionActionCreator = /** @class */ (function () {
    function ShippingOptionActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    ShippingOptionActionCreator.prototype.loadShippingOptions = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.LOAD_SHIPPING_OPTIONS_REQUESTED));
            _this._checkoutClient.loadShippingOptions(options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.LOAD_SHIPPING_OPTIONS_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.LOAD_SHIPPING_OPTIONS_FAILED, response));
            });
        });
    };
    ShippingOptionActionCreator.prototype.selectShippingOption = function (addressId, shippingOptionId, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.SELECT_SHIPPING_OPTION_REQUESTED));
            _this._checkoutClient.selectShippingOption(addressId, shippingOptionId, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.SELECT_SHIPPING_OPTION_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.SELECT_SHIPPING_OPTION_FAILED, response));
            });
        });
    };
    return ShippingOptionActionCreator;
}());
exports.default = ShippingOptionActionCreator;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_SHIPPING_COUNTRIES_REQUESTED = 'LOAD_SHIPPING_COUNTRIES_REQUESTED';
exports.LOAD_SHIPPING_COUNTRIES_SUCCEEDED = 'LOAD_SHIPPING_COUNTRIES_SUCCEEDED';
exports.LOAD_SHIPPING_COUNTRIES_FAILED = 'LOAD_SHIPPING_COUNTRIES_FAILED';


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var map_to_internal_shipping_option_1 = __webpack_require__(83);
function mapToInternalShippingOptions(consignments, existingOptions) {
    return consignments.reduce(function (result, consignment) {
        return (tslib_1.__assign({}, result, (_a = {}, _a[consignment.shippingAddress.id] = (consignment.availableShippingOptions || []).map(function (option) {
            // tslint:disable-next-line:no-non-null-assertion
            return map_to_internal_shipping_option_1.default(option, lodash_1.find(existingOptions[consignment.shippingAddress.id], { id: option.id }));
        }), _a)));
        var _a;
    }, {});
}
exports.default = mapToInternalShippingOptions;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mapToInternalShippingOption(option, existingOption) {
    return {
        description: option.description,
        module: existingOption.module,
        method: existingOption.method,
        price: option.price,
        formattedPrice: existingOption.formattedPrice,
        id: option.id,
        selected: existingOption.selected,
        isRecommended: existingOption.isRecommended,
        imageUrl: option.imageUrl,
        transitTime: option.transitTime,
    };
}
exports.default = mapToInternalShippingOption;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = __webpack_require__(8);
var console_logger_1 = __webpack_require__(237);
var noop_logger_1 = __webpack_require__(238);
var logger = createLogger(utility_1.getEnvironment() !== 'test');
function createLogger(isEnabled) {
    if (isEnabled === void 0) { isEnabled = true; }
    if (!isEnabled) {
        return new noop_logger_1.default();
    }
    return new console_logger_1.default(console);
}
exports.createLogger = createLogger;
function getDefaultLogger() {
    return logger;
}
exports.getDefaultLogger = getDefaultLogger;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LOAD_INSTRUMENTS_REQUESTED = 'LOAD_INSTRUMENTS_REQUESTED';
exports.LOAD_INSTRUMENTS_SUCCEEDED = 'LOAD_INSTRUMENTS_SUCCEEDED';
exports.LOAD_INSTRUMENTS_FAILED = 'LOAD_INSTRUMENTS_FAILED';
exports.DELETE_INSTRUMENT_REQUESTED = 'DELETE_INSTRUMENT_REQUESTED';
exports.DELETE_INSTRUMENT_SUCCEEDED = 'DELETE_INSTRUMENT_SUCCEEDED';
exports.DELETE_INSTRUMENT_FAILED = 'DELETE_INSTRUMENT_FAILED';


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_STATE = {
    data: [],
    errors: {},
    statuses: {},
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var error_1 = __webpack_require__(246);
var create_action_transformer_1 = __webpack_require__(248);
var create_checkout_store_reducer_1 = __webpack_require__(251);
var create_internal_checkout_selectors_1 = __webpack_require__(252);
function createCheckoutStore(initialState, options) {
    if (initialState === void 0) { initialState = {}; }
    var actionTransformer = create_action_transformer_1.default(error_1.createRequestErrorFactory());
    var stateTransformer = function (state) { return create_internal_checkout_selectors_1.default(state); };
    return data_store_1.createDataStore(create_checkout_store_reducer_1.default(), initialState, tslib_1.__assign({ actionTransformer: actionTransformer, stateTransformer: stateTransformer }, options));
}
exports.default = createCheckoutStore;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(4);
var errors_1 = __webpack_require__(2);
var RequestErrorFactory = /** @class */ (function () {
    function RequestErrorFactory() {
        this._factoryMethods = {};
        this.register('default', function (response, message) { return new errors_1.RequestError(response, message); });
        this.register('timeout', function (response) { return new errors_1.TimeoutError(response); });
    }
    RequestErrorFactory.prototype.register = function (type, factoryMethod) {
        this._factoryMethods[type] = factoryMethod;
    };
    RequestErrorFactory.prototype.createError = function (response, message) {
        var factoryMethod = this._factoryMethods[this._getType(response)] || this._factoryMethods.default;
        return factoryMethod(response, message);
    };
    RequestErrorFactory.prototype._getType = function (response) {
        if (response.status === 0) {
            return 'timeout';
        }
        if (response.body && typeof response.body.type === 'string') {
            return lodash_1.last(response.body.type.split('/')) || 'default';
        }
        var error = lodash_1.last(response.body && response.body.errors);
        return error && error.code ? error.code : 'default';
    };
    return RequestErrorFactory;
}());
exports.default = RequestErrorFactory;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./messageformat.d.ts" />
var lodash_1 = __webpack_require__(4);
var MessageFormat = __webpack_require__(257);
var DEFAULT_LOCALE = 'en';
var KEY_PREFIX = 'optimized_checkout';
/**
 * Responsible for getting language strings.
 *
 * This object can be used to retrieve language strings that are most
 * appropriate for a given locale.
 *
 * The language strings provided to the object should follow [ICU
 * MessageFormat](http://userguide.icu-project.org/formatparse/messages) syntax.
 */
var LanguageService = /** @class */ (function () {
    /**
     * @internal
     */
    function LanguageService(config, _logger) {
        this._logger = _logger;
        var _a = this._transformConfig(config), locale = _a.locale, locales = _a.locales, translations = _a.translations;
        this._locale = locale;
        this._locales = locales;
        this._translations = translations;
        this._formatters = {};
    }
    /**
     * Remaps a set of language strings with a different set of keys.
     *
     * ```js
     * service.mapKeys({
     *     'new_key': 'existing_key',
     * });
     *
     * console.log(service.translate('new_key'));
     * ```
     *
     * @param maps - The set of language strings.
     */
    LanguageService.prototype.mapKeys = function (maps) {
        var _this = this;
        Object.keys(maps).forEach(function (key) {
            var translationKey = KEY_PREFIX + "." + maps[key];
            _this._translations[KEY_PREFIX + "." + key] = _this._translations[translationKey];
        });
    };
    /**
     * Gets the preferred locale of the current customer.
     *
     * @returns The preferred locale code.
     */
    LanguageService.prototype.getLocale = function () {
        return this._hasTranslations() ? this._locale : DEFAULT_LOCALE;
    };
    /**
     * Gets a language string by a key.
     *
     * ```js
     * service.translate('language_key');
     * ```
     *
     * If the language string contains a placeholder, you can replace it by
     * providing a second argument.
     *
     * ```js
     * service.translate('language_key', { placeholder: 'Hello' });
     * ```
     *
     * @param key - The language key.
     * @param data - Data for replacing placeholders in the language string.
     * @returns The translated language string.
     */
    LanguageService.prototype.translate = function (key, data) {
        if (data === void 0) { data = {}; }
        var prefixedKey = KEY_PREFIX + "." + key;
        if (typeof this._translations[prefixedKey] !== 'string') {
            this._logger.warn("Translation key \"" + prefixedKey + "\" is missing");
            return prefixedKey;
        }
        if (!this._formatters[prefixedKey]) {
            var messageFormat = new MessageFormat(this._locales[prefixedKey]);
            this._formatters[prefixedKey] = messageFormat.compile(this._translations[prefixedKey] || '');
        }
        return this._formatters[prefixedKey](this._transformData(data));
    };
    LanguageService.prototype._transformConfig = function (config) {
        if (config === void 0) { config = {}; }
        var output = {
            defaultTranslations: {},
            translations: {},
            locales: {},
            locale: config.locale || DEFAULT_LOCALE,
        };
        var locales = config.locales || {};
        var translations = this._flattenObject(config.translations || {});
        var defaultTranslations = this._flattenObject(config.defaultTranslations || {});
        var translationKeys = lodash_1.union(Object.keys(defaultTranslations), Object.keys(translations));
        translationKeys.forEach(function (key) {
            if (translations && translations[key]) {
                output.translations[key] = translations[key];
                output.locales[key] = locales[key] || output.locale;
            }
            else {
                output.translations[key] = defaultTranslations[key];
                output.locales[key] = DEFAULT_LOCALE;
            }
        });
        return output;
    };
    LanguageService.prototype._flattenObject = function (object, result, parentKey) {
        var _this = this;
        if (result === void 0) { result = {}; }
        if (parentKey === void 0) { parentKey = ''; }
        try {
            Object.keys(object).forEach(function (key) {
                var value = object[key];
                var resultKey = parentKey ? parentKey + "." + key : key;
                if (lodash_1.isObject(value)) {
                    return _this._flattenObject(value, result, resultKey);
                }
                result[resultKey] = value;
            });
        }
        catch (err) {
            this._logger.warn("Unable to parse object: " + err);
        }
        return result;
    };
    LanguageService.prototype._transformData = function (data) {
        return Object.keys(data).reduce(function (result, key) {
            var value = data[key];
            result[key] = value === null || value === undefined ? '' : value;
            return result;
        }, {});
    };
    LanguageService.prototype._hasTranslations = function () {
        var _this = this;
        return Object.keys(this._locales).map(function (key) { return _this._locales[key]; })
            .filter(function (code) { return code.split('-')[0] === _this._locale.split('-')[0]; })
            .length > 0;
    };
    return LanguageService;
}());
exports.default = LanguageService;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var request_sender_1 = __webpack_require__(10);
exports.createTimeout = request_sender_1.createTimeout;
var checkout_1 = __webpack_require__(7);
exports.createCheckoutService = checkout_1.createCheckoutService;
var locale_1 = __webpack_require__(255);
exports.createLanguageService = locale_1.createLanguageService;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CheckoutActionType;
(function (CheckoutActionType) {
    CheckoutActionType["LoadCheckoutRequested"] = "LOAD_CHECKOUT_REQUESTED";
    CheckoutActionType["LoadCheckoutSucceeded"] = "LOAD_CHECKOUT_SUCCEEDED";
    CheckoutActionType["LoadCheckoutFailed"] = "LOAD_CHECKOUT_FAILED";
})(CheckoutActionType = exports.CheckoutActionType || (exports.CheckoutActionType = {}));


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var checkout_1 = __webpack_require__(7);
function createCheckoutSelectors(selectors) {
    var checkout = new checkout_1.CheckoutStoreSelector(selectors);
    var errors = new checkout_1.CheckoutStoreErrorSelector(selectors);
    var statuses = new checkout_1.CheckoutStoreStatusSelector(selectors);
    return {
        checkout: checkout,
        errors: errors,
        statuses: statuses,
    };
}
exports.default = createCheckoutSelectors;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
/**
 * Responsible for getting the error of any asynchronous checkout action, if
 * there is any.
 *
 * This object has a set of getters that would return an error if an action is
 * not executed successfully. For example, if you are unable to submit an order,
 * you can use this object to retrieve the reason for the failure.
 */
var CheckoutStoreErrorSelector = /** @class */ (function () {
    /**
     * @internal
     */
    function CheckoutStoreErrorSelector(selectors) {
        this._billingAddress = selectors.billingAddress;
        this._cart = selectors.cart;
        this._config = selectors.config;
        this._countries = selectors.countries;
        this._coupons = selectors.coupons;
        this._customerStrategies = selectors.customerStrategies;
        this._giftCertificates = selectors.giftCertificates;
        this._instruments = selectors.instruments;
        this._order = selectors.order;
        this._paymentMethods = selectors.paymentMethods;
        this._paymentStrategies = selectors.paymentStrategies;
        this._quote = selectors.quote;
        this._shippingCountries = selectors.shippingCountries;
        this._shippingOptions = selectors.shippingOptions;
        this._shippingStrategies = selectors.shippingStrategies;
    }
    /**
     * Gets the error of any checkout action that has failed.
     *
     * @returns The error object if unable to perform any checkout action,
     * otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getError = function () {
        return this.getLoadCheckoutError() ||
            this.getSubmitOrderError() ||
            this.getFinalizeOrderError() ||
            this.getLoadOrderError() ||
            this.getLoadCartError() ||
            this.getVerifyCartError() ||
            this.getLoadBillingCountriesError() ||
            this.getLoadShippingCountriesError() ||
            this.getLoadPaymentMethodsError() ||
            this.getLoadPaymentMethodError() ||
            this.getInitializePaymentError() ||
            this.getLoadShippingOptionsError() ||
            this.getSelectShippingOptionError() ||
            this.getSignInError() ||
            this.getSignOutError() ||
            this.getInitializeCustomerError() ||
            this.getUpdateBillingAddressError() ||
            this.getUpdateShippingAddressError() ||
            this.getInitializeShippingError() ||
            this.getApplyCouponError() ||
            this.getRemoveCouponError() ||
            this.getApplyGiftCertificateError() ||
            this.getRemoveGiftCertificateError() ||
            this.getLoadInstrumentsError() ||
            this.getDeleteInstrumentError() ||
            this.getLoadConfigError();
    };
    /**
     * Returns an error if unable to load the current checkout.
     *
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadCheckoutError = function () {
        return this._quote.getLoadError();
    };
    /**
     * Returns an error if unable to submit the current order.
     *
     * @returns The error object if unable to submit, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getSubmitOrderError = function () {
        return this._paymentStrategies.getExecuteError();
    };
    /**
     * Returns an error if unable to finalize the current order.
     *
     * @returns The error object if unable to finalize, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getFinalizeOrderError = function () {
        return this._paymentStrategies.getFinalizeError();
    };
    /**
     * Returns an error if unable to load the current order.
     *
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadOrderError = function () {
        return this._order.getLoadError();
    };
    /**
     * Returns an error if unable to load the current cart.
     *
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadCartError = function () {
        return this._cart.getLoadError();
    };
    /**
     * Returns an error if unable to verify the current cart.
     *
     * This method is deprecated because cart verification is an internal
     * process, therefore should not be referred externally.
     *
     * @deprecated
     * @returns The error object if unable to verify, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getVerifyCartError = function () {
        return this._cart.getVerifyError();
    };
    /**
     * Returns an error if unable to load billing countries.
     *
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadBillingCountriesError = function () {
        return this._countries.getLoadError();
    };
    /**
     * Returns an error if unable to load shipping countries.
     *
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadShippingCountriesError = function () {
        return this._shippingCountries.getLoadError();
    };
    /**
     * Returns an error if unable to load payment methods.
     *
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadPaymentMethodsError = function () {
        return this._paymentMethods.getLoadError();
    };
    /**
     * Returns an error if unable to load a specific payment method.
     *
     * @param methodId - The identifier of the payment method to load.
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadPaymentMethodError = function (methodId) {
        return this._paymentMethods.getLoadMethodError(methodId);
    };
    /**
     * Returns an error if unable to initialize a specific payment method.
     *
     * @param methodId - The identifier of the payment method to initialize.
     * @returns The error object if unable to initialize, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getInitializePaymentError = function (methodId) {
        return this._paymentStrategies.getInitializeError(methodId);
    };
    /**
     * Returns an error if unable to sign in.
     *
     * @returns The error object if unable to sign in, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getSignInError = function () {
        return this._customerStrategies.getSignInError();
    };
    /**
     * Returns an error if unable to sign out.
     *
     * @returns The error object if unable to sign out, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getSignOutError = function () {
        return this._customerStrategies.getSignOutError();
    };
    /**
     * Returns an error if unable to initialize the customer step of a checkout
     * process.
     *
     * @param methodId - The identifer of the initialization method to execute.
     * @returns The error object if unable to initialize, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getInitializeCustomerError = function (methodId) {
        return this._customerStrategies.getInitializeError(methodId);
    };
    /**
     * Returns an error if unable to load shipping options.
     *
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadShippingOptionsError = function () {
        return this._shippingOptions.getLoadError();
    };
    /**
     * Returns an error if unable to select a shipping option.
     *
     * @returns The error object if unable to select, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getSelectShippingOptionError = function () {
        return this._shippingStrategies.getSelectOptionError();
    };
    /**
     * Returns an error if unable to update a billing address.
     *
     * @returns The error object if unable to update, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getUpdateBillingAddressError = function () {
        return this._billingAddress.getUpdateError();
    };
    /**
     * Returns an error if unable to update a shipping address.
     *
     * @returns The error object if unable to update, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getUpdateShippingAddressError = function () {
        return this._shippingStrategies.getUpdateAddressError();
    };
    /**
     * Returns an error if unable to initialize the shipping step of a checkout
     * process.
     *
     * @param methodId - The identifer of the initialization method to execute.
     * @returns The error object if unable to initialize, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getInitializeShippingError = function (methodId) {
        return this._shippingStrategies.getInitializeError(methodId);
    };
    /**
     * Returns an error if unable to apply a coupon code.
     *
     * @returns The error object if unable to apply, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getApplyCouponError = function () {
        return this._coupons.getApplyError();
    };
    /**
     * Returns an error if unable to remove a coupon code.
     *
     * @returns The error object if unable to remove, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getRemoveCouponError = function () {
        return this._coupons.getRemoveError();
    };
    /**
     * Returns an error if unable to apply a gift certificate.
     *
     * @returns The error object if unable to apply, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getApplyGiftCertificateError = function () {
        return this._giftCertificates.getApplyError();
    };
    /**
     * Returns an error if unable to remove a gift certificate.
     *
     * @returns The error object if unable to remove, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getRemoveGiftCertificateError = function () {
        return this._giftCertificates.getRemoveError();
    };
    /**
     * Returns an error if unable to load payment instruments.
     *
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadInstrumentsError = function () {
        return this._instruments.getLoadError();
    };
    /**
     * Returns an error if unable to delete a payment instrument.
     *
     * @param instrumentId - The identifier of the payment instrument to delete.
     * @returns The error object if unable to delete, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getDeleteInstrumentError = function (instrumentId) {
        return this._instruments.getDeleteError(instrumentId);
    };
    /**
     * Returns an error if unable to load the checkout configuration of a store.
     *
     * @returns The error object if unable to load, otherwise undefined.
     */
    CheckoutStoreErrorSelector.prototype.getLoadConfigError = function () {
        return this._config.getLoadError();
    };
    CheckoutStoreErrorSelector = tslib_1.__decorate([
        selector_1.selector
    ], CheckoutStoreErrorSelector);
    return CheckoutStoreErrorSelector;
}());
exports.default = CheckoutStoreErrorSelector;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
function bindDecorator(target, key, descriptor) {
    if (!key || !descriptor) {
        return bindClassDecorator(target);
    }
    return bindMethodDecorator(target, key, descriptor);
}
exports.default = bindDecorator;
/**
 * Decorates a class by binding all its prototype methods to the calling
 * instance.
 */
function bindClassDecorator(target) {
    var decoratedTarget = /** @class */ (function (_super) {
        tslib_1.__extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return class_1;
    }(target));
    Object.getOwnPropertyNames(target.prototype)
        .forEach(function (key) {
        var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);
        if (!descriptor || key === 'constructor') {
            return;
        }
        Object.defineProperty(decoratedTarget.prototype, key, bindMethodDecorator(target.prototype, key, descriptor));
    });
    return decoratedTarget;
}
exports.bindClassDecorator = bindClassDecorator;
/**
 * Decorates a method by binding it to the calling instance.
 */
function bindMethodDecorator(target, key, descriptor) {
    if (typeof descriptor.value !== 'function') {
        return descriptor;
    }
    var method = descriptor.value;
    return {
        get: function () {
            var boundMethod = method.bind(this);
            Object.defineProperty(this, key, tslib_1.__assign({}, descriptor, { value: boundMethod }));
            return boundMethod;
        },
        set: function (value) {
            method = value;
        },
    };
}
exports.bindMethodDecorator = bindMethodDecorator;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
function createFreezeProxy(target) {
    return createProxy(target, function (target, name) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return data_store_1.deepFreeze((_a = target[name]).call.apply(_a, [target].concat(args)));
            var _a;
        };
    });
}
exports.default = createFreezeProxy;
function createFreezeProxies(map) {
    return Object.keys(map)
        .reduce(function (result, key) {
        result[key] = createFreezeProxy(map[key]);
        return result;
    }, {});
}
exports.createFreezeProxies = createFreezeProxies;
function createProxy(target, trap) {
    var proxy = Object.create(target);
    traversePrototypeOf(target, function (prototype) {
        Object.getOwnPropertyNames(prototype)
            .forEach(function (name) {
            if (name === 'constructor' || typeof proxy[name] !== 'function' || name.charAt(0) === '_') {
                return;
            }
            proxy[name] = trap(target, name, proxy);
        });
    });
    return proxy;
}
function traversePrototypeOf(target, iteratee) {
    var prototype = Object.getPrototypeOf(target);
    while (prototype) {
        iteratee(prototype);
        prototype = Object.getPrototypeOf(prototype);
    }
}


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CancellablePromise = /** @class */ (function () {
    function CancellablePromise(promise) {
        var _this = this;
        var cancellable = new Promise(function (resolve, reject) {
            _this.cancel = reject;
        });
        this.promise = Promise.race([promise, cancellable]);
    }
    return CancellablePromise;
}());
exports.default = CancellablePromise;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getEnvironment() {
    try {
        return process.env.NODE_ENV || 'development';
    }
    catch (e) {
        return 'development';
    }
}
exports.default = getEnvironment;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = __webpack_require__(4);
/**
 * Push an item to an array if it doesn't exist in the array. Otherwise, merge
 * with the existing item in the array. This function always returns a new array.
 */
function mergeOrPush(array, item, predicate) {
    var index = lodash_1.findIndex(array, predicate);
    var newArray = array.slice();
    if (index === -1) {
        newArray.push(item);
    }
    else {
        newArray[index] = lodash_1.isPlainObject(item) ? lodash_1.assign({}, array[index], item) : item;
    }
    return newArray;
}
exports.default = mergeOrPush;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var omit_deep_1 = __webpack_require__(47);
function omitPrivate(object) {
    return omit_deep_1.default(object, function (value, key) {
        return ("" + key).indexOf('$$') === 0 || ("" + key).indexOf('_') === 0;
    });
}
exports.default = omitPrivate;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function setPrototypeOf(object, prototype) {
    if (Object.setPrototypeOf) {
        Object.setPrototypeOf(object, prototype);
    }
    else {
        object.__proto__ = prototype;
    }
    return object;
}
exports.default = setPrototypeOf;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CacheKeyResolver = /** @class */ (function () {
    function CacheKeyResolver() {
        this._lastId = 0;
        this._maps = [];
    }
    CacheKeyResolver.prototype.getKey = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = this._resolveMap.apply(this, args), index = _a.index, map = _a.map, parentMaps = _a.parentMaps;
        if (map && map.cacheKey) {
            map.usedCount++;
            return map.cacheKey;
        }
        return this._generateKey(parentMaps, args.slice(index));
    };
    CacheKeyResolver.prototype.getUsedCount = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var map = this._resolveMap.apply(this, args).map;
        return map ? map.usedCount : 0;
    };
    CacheKeyResolver.prototype._resolveMap = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var index = 0;
        var parentMaps = this._maps;
        while (parentMaps.length) {
            var isMatched = false;
            for (var _a = 0, parentMaps_1 = parentMaps; _a < parentMaps_1.length; _a++) {
                var map = parentMaps_1[_a];
                if (map.value !== args[index]) {
                    continue;
                }
                if ((args.length === 0 || index === args.length - 1) && map.cacheKey) {
                    return { index: index, map: map, parentMaps: parentMaps };
                }
                isMatched = true;
                parentMaps = map.maps;
                index++;
                break;
            }
            if (!isMatched) {
                break;
            }
        }
        return { index: index, parentMaps: parentMaps };
    };
    CacheKeyResolver.prototype._generateKey = function (maps, args) {
        var index = 0;
        var parentMaps = maps;
        var map;
        do {
            map = {
                usedCount: 1,
                value: args[index],
                maps: [],
            };
            parentMaps.push(map);
            parentMaps = map.maps;
            index++;
        } while (index < args.length);
        map.cacheKey = "" + ++this._lastId;
        return map.cacheKey;
    };
    return CacheKeyResolver;
}());
exports.default = CacheKeyResolver;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
/**
 * Responsible for getting the state of the current checkout.
 *
 * This object has a set of methods that allow you to get a specific piece of
 * checkout information, such as shipping and billing details.
 */
var CheckoutStoreSelector = /** @class */ (function () {
    /**
     * @internal
     */
    function CheckoutStoreSelector(selectors) {
        this._billingAddress = selectors.billingAddress;
        this._cart = selectors.cart;
        this._config = selectors.config;
        this._countries = selectors.countries;
        this._customer = selectors.customer;
        this._form = selectors.form;
        this._instruments = selectors.instruments;
        this._order = selectors.order;
        this._paymentMethods = selectors.paymentMethods;
        this._quote = selectors.quote;
        this._shippingAddress = selectors.shippingAddress;
        this._shippingCountries = selectors.shippingCountries;
        this._shippingOptions = selectors.shippingOptions;
    }
    /**
     * Gets the current order.
     *
     * If the order is not submitted, the method returns the order as
     * incomplete. Otherwise, it returns the order as complete with an
     * identifier.
     *
     * @returns The current order if it is loaded, otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getOrder = function () {
        return this._order.getOrder();
    };
    /**
     * Gets the current quote.
     *
     * @deprecated This method will be replaced in the future.
     * @returns The current quote if it is loaded, otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getQuote = function () {
        return this._quote.getQuote();
    };
    /**
     * Gets the checkout configuration of a store.
     *
     * @returns The configuration object if it is loaded, otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getConfig = function () {
        return this._config.getStoreConfig();
    };
    /**
     * Gets the shipping address of the current checkout.
     *
     * If the address is partially complete, it may not have shipping options
     * associated with it.
     *
     * @returns The shipping address object if it is loaded, otherwise
     * undefined.
     */
    CheckoutStoreSelector.prototype.getShippingAddress = function () {
        return this._shippingAddress.getShippingAddress();
    };
    /**
     * Gets a list of shipping options available for each shipping address.
     *
     * If there is no shipping address assigned to the current checkout, the
     * list of shipping options will be empty.
     *
     * @returns The list of shipping options per address if loaded, otherwise
     * undefined.
     */
    CheckoutStoreSelector.prototype.getShippingOptions = function () {
        return this._shippingOptions.getShippingOptions();
    };
    /**
     * Gets the selected shipping option for the current checkout.
     *
     * @returns The shipping option object if there is a selected option,
     * otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getSelectedShippingOption = function () {
        return this._shippingOptions.getSelectedShippingOption();
    };
    /**
     * Gets a list of countries available for shipping.
     *
     * @returns The list of countries if it is loaded, otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getShippingCountries = function () {
        return this._shippingCountries.getShippingCountries();
    };
    /**
     * Gets the billing address of an order.
     *
     * @returns The billing address object if it is loaded, otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getBillingAddress = function () {
        return this._billingAddress.getBillingAddress();
    };
    /**
     * Gets a list of countries available for billing.
     *
     * @returns The list of countries if it is loaded, otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getBillingCountries = function () {
        return this._countries.getCountries();
    };
    /**
     * Gets a list of payment methods available for checkout.
     *
     * @returns The list of payment methods if it is loaded, otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getPaymentMethods = function () {
        return this._paymentMethods.getPaymentMethods();
    };
    /**
     * Gets a payment method by an id.
     *
     * The method returns undefined if unable to find a payment method with the
     * specified id, either because it is not available for the customer, or it
     * is not loaded.
     *
     * @param methodId - The identifier of the payment method.
     * @param gatewayId - The identifier of a payment provider providing the
     * payment method.
     * @returns The payment method object if loaded and available, otherwise,
     * undefined.
     */
    CheckoutStoreSelector.prototype.getPaymentMethod = function (methodId, gatewayId) {
        return this._paymentMethods.getPaymentMethod(methodId, gatewayId);
    };
    /**
     * Gets the payment method that is selected for checkout.
     *
     * @returns The payment method object if there is a selected method;
     * undefined if otherwise.
     */
    CheckoutStoreSelector.prototype.getSelectedPaymentMethod = function () {
        return this._paymentMethods.getSelectedPaymentMethod();
    };
    /**
     * Gets the current cart.
     *
     * @returns The current cart object if it is loaded, otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getCart = function () {
        return this._cart.getCart();
    };
    /**
     * Gets the current customer.
     *
     * @returns The current customer object if it is loaded, otherwise
     * undefined.
     */
    CheckoutStoreSelector.prototype.getCustomer = function () {
        return this._customer.getCustomer();
    };
    /**
     * Checks if payment data is required or not.
     *
     * If payment data is required, customers should be prompted to enter their
     * payment details.
     *
     * ```js
     * if (state.checkout.isPaymentDataRequired()) {
     *     // Render payment form
     * } else {
     *     // Render "Payment is not required for this order" message
     * }
     * ```
     *
     * @param useStoreCredit - If true, check whether payment data is required
     * with store credit applied; otherwise, check without store credit.
     * @returns True if payment data is required, otherwise false.
     */
    CheckoutStoreSelector.prototype.isPaymentDataRequired = function (useStoreCredit) {
        return this._order.isPaymentDataRequired(useStoreCredit);
    };
    /**
     * Checks if payment data is submitted or not.
     *
     * If payment data is already submitted using a payment method, customers
     * should not be prompted to enter their payment details again.
     *
     * @param methodId - The identifier of the payment method.
     * @param gatewayId - The identifier of a payment provider providing the
     * payment method.
     * @returns True if payment data is submitted, otherwise false.
     */
    CheckoutStoreSelector.prototype.isPaymentDataSubmitted = function (methodId, gatewayId) {
        return this._order.isPaymentDataSubmitted(this.getPaymentMethod(methodId, gatewayId));
    };
    /**
     * Gets a list of payment instruments associated with the current customer.
     *
     * @returns The list of payment instruments if it is loaded, otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getInstruments = function () {
        return this._instruments.getInstruments();
    };
    /**
     * Gets a set of form fields that should be presented to customers in order
     * to capture their billing address for a specific country.
     *
     * @param countryCode - A 2-letter country code (ISO 3166-1 alpha-2).
     * @returns The set of billing address form fields if it is loaded,
     * otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getBillingAddressFields = function (countryCode) {
        return this._form.getBillingAddressFields(this.getBillingCountries(), countryCode);
    };
    /**
     * Gets a set of form fields that should be presented to customers in order
     * to capture their shipping address for a specific country.
     *
     * @param countryCode - A 2-letter country code (ISO 3166-1 alpha-2).
     * @returns The set of shipping address form fields if it is loaded,
     * otherwise undefined.
     */
    CheckoutStoreSelector.prototype.getShippingAddressFields = function (countryCode) {
        return this._form.getShippingAddressFields(this.getShippingCountries(), countryCode);
    };
    CheckoutStoreSelector = tslib_1.__decorate([
        selector_1.selector
    ], CheckoutStoreSelector);
    return CheckoutStoreSelector;
}());
exports.default = CheckoutStoreSelector;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
/**
 * Responsible for checking the statuses of various asynchronous actions related
 * to checkout.
 *
 * This object has a set of getters that return true if an action is in
 * progress. For example, you can check whether a customer is submitting an
 * order and waiting for the request to complete.
 */
var CheckoutStoreStatusSelector = /** @class */ (function () {
    /**
     * @internal
     */
    function CheckoutStoreStatusSelector(selectors) {
        this._billingAddress = selectors.billingAddress;
        this._cart = selectors.cart;
        this._config = selectors.config;
        this._countries = selectors.countries;
        this._coupons = selectors.coupons;
        this._customerStrategies = selectors.customerStrategies;
        this._giftCertificates = selectors.giftCertificates;
        this._instruments = selectors.instruments;
        this._order = selectors.order;
        this._paymentMethods = selectors.paymentMethods;
        this._paymentStrategies = selectors.paymentStrategies;
        this._quote = selectors.quote;
        this._shippingCountries = selectors.shippingCountries;
        this._shippingOptions = selectors.shippingOptions;
        this._shippingStrategies = selectors.shippingStrategies;
    }
    /**
     * Checks whether any checkout action is pending.
     *
     * @returns True if there is a pending action, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isPending = function () {
        return this.isLoadingCheckout() ||
            this.isSubmittingOrder() ||
            this.isFinalizingOrder() ||
            this.isLoadingOrder() ||
            this.isLoadingCart() ||
            this.isVerifyingCart() ||
            this.isLoadingBillingCountries() ||
            this.isLoadingShippingCountries() ||
            this.isLoadingPaymentMethods() ||
            this.isLoadingPaymentMethod() ||
            this.isInitializingPayment() ||
            this.isLoadingShippingOptions() ||
            this.isSelectingShippingOption() ||
            this.isSigningIn() ||
            this.isSigningOut() ||
            this.isInitializingCustomer() ||
            this.isUpdatingBillingAddress() ||
            this.isUpdatingShippingAddress() ||
            this.isInitializingShipping() ||
            this.isApplyingCoupon() ||
            this.isRemovingCoupon() ||
            this.isApplyingGiftCertificate() ||
            this.isRemovingGiftCertificate() ||
            this.isLoadingInstruments() ||
            this.isDeletingInstrument() ||
            this.isLoadingConfig() ||
            this.isCustomerStepPending() ||
            this.isPaymentStepPending();
    };
    /**
     * Checks whether the current checkout is loading.
     *
     * @returns True if the current checkout is loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingCheckout = function () {
        return this._quote.isLoading();
    };
    /**
     * Checks whether the current order is submitting.
     *
     * @returns True if the current order is submitting, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isSubmittingOrder = function () {
        return this._paymentStrategies.isExecuting();
    };
    /**
     * Checks whether the current order is finalizing.
     *
     * @returns True if the current order is finalizing, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isFinalizingOrder = function () {
        return this._paymentStrategies.isFinalizing();
    };
    /**
     * Checks whether the current order is loading.
     *
     * @returns True if the current order is loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingOrder = function () {
        return this._order.isLoading();
    };
    /**
     * Checks whether the current cart is loading.
     *
     * @returns True if the current cart is loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingCart = function () {
        return this._cart.isLoading();
    };
    /**
     * Checks whether the current cart is verifying.
     *
     * This method is deprecated because cart verification is an internal
     * process, therefore should not be referred externally.
     *
     * @deprecated
     * @returns True if the current cart is verifying, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isVerifyingCart = function () {
        return this._cart.isVerifying();
    };
    /**
     * Checks whether billing countries are loading.
     *
     * @returns True if billing countries are loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingBillingCountries = function () {
        return this._countries.isLoading();
    };
    /**
     * Checks whether shipping countries are loading.
     *
     * @returns True if shipping countries are loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingShippingCountries = function () {
        return this._shippingCountries.isLoading();
    };
    /**
     * Checks whether payment methods are loading.
     *
     * @returns True if payment methods are loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingPaymentMethods = function () {
        return this._paymentMethods.isLoading();
    };
    /**
     * Checks whether a specific or any payment method is loading.
     *
     * The method returns true if no ID is provided and at least one payment
     * method is loading.
     *
     * @param methodId - The identifier of the payment method to check.
     * @returns True if the payment method is loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingPaymentMethod = function (methodId) {
        return this._paymentMethods.isLoadingMethod(methodId);
    };
    /**
     * Checks whether a specific or any payment method is initializing.
     *
     * The method returns true if no ID is provided and at least one payment
     * method is initializing.
     *
     * @param methodId - The identifier of the payment method to check.
     * @returns True if the payment method is initializing, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isInitializingPayment = function (methodId) {
        return this._paymentStrategies.isInitializing(methodId);
    };
    /**
     * Checks whether the current customer is signing in.
     *
     * If an ID is provided, the method also checks whether the customer is
     * signing in using a specific customer method with the same ID.
     *
     * @param methodId - The identifier of the method used for signing in the
     * current customer.
     * @returns True if the customer is signing in, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isSigningIn = function (methodId) {
        return this._customerStrategies.isSigningIn(methodId);
    };
    /**
     * Checks whether the current customer is signing out.
     *
     * If an ID is provided, the method also checks whether the customer is
     * signing out using a specific customer method with the same ID.
     *
     * @param methodId - The identifier of the method used for signing out the
     * current customer.
     * @returns True if the customer is signing out, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isSigningOut = function (methodId) {
        return this._customerStrategies.isSigningOut(methodId);
    };
    /**
     * Checks whether the customer step is initializing.
     *
     * If an ID is provided, the method also checks whether the customer step is
     * initializing using a specific customer method with the same ID.
     *
     * @param methodId - The identifier of the method used for initializing the
     * customer step of checkout.
     * @returns True if the customer step is initializing, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isInitializingCustomer = function (methodId) {
        return this._customerStrategies.isInitializing(methodId);
    };
    /**
     * Checks whether shipping options are loading.
     *
     * @returns True if shipping options are loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingShippingOptions = function () {
        return this._shippingOptions.isLoading();
    };
    /**
     * Checks whether the current customer is selecting a shipping option.
     *
     * @returns True if selecting a shipping option, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isSelectingShippingOption = function () {
        return this._shippingStrategies.isSelectingOption();
    };
    /**
     * Checks whether the current customer is updating their billing address.
     *
     * @returns True if updating their billing address, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isUpdatingBillingAddress = function () {
        return this._billingAddress.isUpdating();
    };
    /**
     * Checks whether the current customer is updating their shipping address.
     *
     * @returns True if updating their shipping address, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isUpdatingShippingAddress = function () {
        return this._shippingStrategies.isUpdatingAddress();
    };
    /**
     * Checks whether the shipping step of a checkout process is initializing.
     *
     * If an identifier is provided, the method also checks whether the shipping
     * step is initializing using a specific shipping method with the same
     * identifier.
     *
     * @param methodId - The identifer of the initialization method to check.
     * @returns True if the shipping step is initializing, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isInitializingShipping = function (methodId) {
        return this._shippingStrategies.isInitializing(methodId);
    };
    /**
     * Checks whether the current customer is applying a coupon code.
     *
     * @returns True if applying a coupon code, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isApplyingCoupon = function () {
        return this._coupons.isApplying();
    };
    /**
     * Checks whether the current customer is removing a coupon code.
     *
     * @returns True if removing a coupon code, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isRemovingCoupon = function () {
        return this._coupons.isRemoving();
    };
    /**
     * Checks whether the current customer is applying a gift certificate.
     *
     * @returns True if applying a gift certificate, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isApplyingGiftCertificate = function () {
        return this._giftCertificates.isApplying();
    };
    /**
     * Checks whether the current customer is removing a gift certificate.
     *
     * @returns True if removing a gift certificate, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isRemovingGiftCertificate = function () {
        return this._giftCertificates.isRemoving();
    };
    /**
     * Checks whether the current customer's payment instruments are loading.
     *
     * @returns True if payment instruments are loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingInstruments = function () {
        return this._instruments.isLoading();
    };
    /**
     * Checks whether the current customer is deleting a payment instrument.
     *
     * @returns True if deleting a payment instrument, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isDeletingInstrument = function (instrumentId) {
        return this._instruments.isDeleting(instrumentId);
    };
    /**
     * Checks whether the checkout configuration of a store is loading.
     *
     * @returns True if the configuration is loading, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isLoadingConfig = function () {
        return this._config.isLoading();
    };
    /**
     * Checks whether the customer step of a checkout is in a pending state.
     *
     * The customer step is considered to be pending if it is in the process of
     * initializing, signing in, signing out, and/or interacting with a customer
     * widget.
     *
     * @returns True if the customer step is pending, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isCustomerStepPending = function () {
        return this._customerStrategies.isInitializing() ||
            this._customerStrategies.isSigningIn() ||
            this._customerStrategies.isSigningOut() ||
            this._customerStrategies.isWidgetInteracting();
    };
    /**
     * Checks whether the payment step of a checkout is in a pending state.
     *
     * The payment step is considered to be pending if it is in the process of
     * initializing, submitting an order, finalizing an order, and/or
     * interacting with a payment widget.
     *
     * @returns True if the payment step is pending, otherwise false.
     */
    CheckoutStoreStatusSelector.prototype.isPaymentStepPending = function () {
        return this._paymentStrategies.isInitializing() ||
            this._paymentStrategies.isExecuting() ||
            this._paymentStrategies.isFinalizing() ||
            this._paymentStrategies.isWidgetInteracting();
    };
    CheckoutStoreStatusSelector = tslib_1.__decorate([
        selector_1.selector
    ], CheckoutStoreStatusSelector);
    return CheckoutStoreStatusSelector;
}());
exports.default = CheckoutStoreStatusSelector;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var BillingAddressSelector = /** @class */ (function () {
    function BillingAddressSelector(_quote) {
        this._quote = _quote;
    }
    BillingAddressSelector.prototype.getBillingAddress = function () {
        return this._quote.data && this._quote.data.billingAddress;
    };
    BillingAddressSelector.prototype.getUpdateError = function () {
        return this._quote.errors.updateBillingAddressError;
    };
    BillingAddressSelector.prototype.isUpdating = function () {
        return !!this._quote.statuses.isUpdatingBillingAddress;
    };
    BillingAddressSelector = tslib_1.__decorate([
        selector_1.selector
    ], BillingAddressSelector);
    return BillingAddressSelector;
}());
exports.default = BillingAddressSelector;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(29);
var BillingAddressActionCreator = /** @class */ (function () {
    function BillingAddressActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    BillingAddressActionCreator.prototype.updateAddress = function (address, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.UPDATE_BILLING_ADDRESS_REQUESTED));
            _this._checkoutClient.updateBillingAddress(address, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.UPDATE_BILLING_ADDRESS_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.UPDATE_BILLING_ADDRESS_FAILED, response));
            });
        });
    };
    return BillingAddressActionCreator;
}());
exports.default = BillingAddressActionCreator;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var BillingAddressRequestSender = /** @class */ (function () {
    function BillingAddressRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    BillingAddressRequestSender.prototype.updateAddress = function (address, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/billing';
        var params = {
            includes: ['cart', 'quote'].join(','),
        };
        return this._requestSender.post(url, { body: address, params: params, timeout: timeout });
    };
    return BillingAddressRequestSender;
}());
exports.default = BillingAddressRequestSender;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var checkout_1 = __webpack_require__(7);
var DEFAULT_STATE = {};
function billingAddressReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
    });
    return reducer(state, action);
}
exports.default = billingAddressReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return action.payload ? action.payload.billingAddress : data;
        default:
            return data;
    }
}


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(49);
var cart_comparator_1 = __webpack_require__(50);
/**
 * @todo Convert this file into TypeScript properly
 */
var CartActionCreator = /** @class */ (function () {
    function CartActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    CartActionCreator.prototype.loadCart = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.LOAD_CART_REQUESTED));
            _this._checkoutClient.loadCart(options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.LOAD_CART_SUCCEEDED, body.data, body.meta));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.LOAD_CART_FAILED, response));
            });
        });
    };
    /**
     * @deprecated
     */
    CartActionCreator.prototype.verifyCart = function (cart, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.VERIFY_CART_REQUESTED));
            _this._checkoutClient.loadCart(options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                var comparator = new cart_comparator_1.default();
                var isValid = cart ? comparator.isEqual(cart, body.data.cart) : false;
                observer.next(data_store_1.createAction(actionTypes.VERIFY_CART_SUCCEEDED, isValid));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.VERIFY_CART_FAILED, response));
            });
        });
    };
    return CartActionCreator;
}());
exports.default = CartActionCreator;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var billingAddressActionTypes = __webpack_require__(29);
var cartActionTypes = __webpack_require__(49);
var checkout_1 = __webpack_require__(7);
var couponActionTypes = __webpack_require__(30);
var giftCertificateActionTypes = __webpack_require__(31);
var customerActionTypes = __webpack_require__(18);
var quoteActionTypes = __webpack_require__(14);
var shippingAddressActionTypes = __webpack_require__(24);
var shippingOptionActionTypes = __webpack_require__(25);
var map_to_internal_cart_1 = __webpack_require__(51);
var DEFAULT_STATE = {
    errors: {},
    meta: {},
    statuses: {},
};
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action
 */
function cartReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        externalData: externalDataReducer,
        errors: errorsReducer,
        meta: metaReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = cartReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return data ? tslib_1.__assign({}, data, map_to_internal_cart_1.default(action.payload, data)) : data;
        case billingAddressActionTypes.UPDATE_BILLING_ADDRESS_SUCCEEDED:
        case cartActionTypes.LOAD_CART_SUCCEEDED:
        case customerActionTypes.SIGN_IN_CUSTOMER_SUCCEEDED:
        case customerActionTypes.SIGN_OUT_CUSTOMER_SUCCEEDED:
        case quoteActionTypes.LOAD_QUOTE_SUCCEEDED:
        case shippingAddressActionTypes.UPDATE_SHIPPING_ADDRESS_SUCCEEDED:
        case shippingOptionActionTypes.LOAD_SHIPPING_OPTIONS_SUCCEEDED:
        case shippingOptionActionTypes.SELECT_SHIPPING_OPTION_SUCCEEDED:
        case couponActionTypes.APPLY_COUPON_SUCCEEDED:
        case couponActionTypes.REMOVE_COUPON_SUCCEEDED:
        case giftCertificateActionTypes.APPLY_GIFT_CERTIFICATE_SUCCEEDED:
        case giftCertificateActionTypes.REMOVE_GIFT_CERTIFICATE_SUCCEEDED:
            return action.payload ? tslib_1.__assign({}, data, action.payload.cart) : data;
        default:
            return data;
    }
}
function externalDataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return tslib_1.__assign({}, data, action.payload.cart);
        default:
            return data;
    }
}
function metaReducer(meta, action) {
    if (meta === void 0) { meta = DEFAULT_STATE.meta; }
    switch (action.type) {
        case cartActionTypes.VERIFY_CART_SUCCEEDED:
            return tslib_1.__assign({}, meta, { isValid: action.payload });
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
        case cartActionTypes.LOAD_CART_SUCCEEDED:
        case quoteActionTypes.LOAD_QUOTE_SUCCEEDED:
            return tslib_1.__assign({}, meta, { isValid: true });
        default:
            return meta;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = DEFAULT_STATE.errors; }
    switch (action.type) {
        case cartActionTypes.LOAD_CART_REQUESTED:
        case cartActionTypes.LOAD_CART_SUCCEEDED:
            return tslib_1.__assign({}, errors, { loadError: undefined });
        case cartActionTypes.LOAD_CART_FAILED:
            return tslib_1.__assign({}, errors, { loadError: action.payload });
        case cartActionTypes.VERIFY_CART_REQUESTED:
            return tslib_1.__assign({}, errors, { verifyError: undefined });
        case cartActionTypes.VERIFY_CART_SUCCEEDED:
        case cartActionTypes.VERIFY_CART_FAILED:
            return tslib_1.__assign({}, errors, { verifyError: action.payload });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = DEFAULT_STATE.statuses; }
    switch (action.type) {
        case cartActionTypes.LOAD_CART_REQUESTED:
            return tslib_1.__assign({}, statuses, { isLoading: true });
        case cartActionTypes.LOAD_CART_SUCCEEDED:
        case cartActionTypes.LOAD_CART_FAILED:
            return tslib_1.__assign({}, statuses, { isLoading: false });
        case cartActionTypes.VERIFY_CART_REQUESTED:
            return tslib_1.__assign({}, statuses, { isVerifying: true });
        case cartActionTypes.VERIFY_CART_SUCCEEDED:
        case cartActionTypes.VERIFY_CART_FAILED:
            return tslib_1.__assign({}, statuses, { isVerifying: false });
        default:
            return statuses;
    }
}


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(30);
/**
 * @todo Convert this file into TypeScript properly
 */
var CouponActionCreator = /** @class */ (function () {
    function CouponActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    CouponActionCreator.prototype.applyCoupon = function (code, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.APPLY_COUPON_REQUESTED));
            _this._checkoutClient.applyCoupon(code, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.APPLY_COUPON_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.APPLY_COUPON_FAILED, response));
            });
        });
    };
    CouponActionCreator.prototype.removeCoupon = function (code, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.REMOVE_COUPON_REQUESTED));
            _this._checkoutClient.removeCoupon(code, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.REMOVE_COUPON_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.REMOVE_COUPON_FAILED, response));
            });
        });
    };
    return CouponActionCreator;
}());
exports.default = CouponActionCreator;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var CouponRequestSender = /** @class */ (function () {
    function CouponRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    CouponRequestSender.prototype.applyCoupon = function (couponCode, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/coupon';
        return this._requestSender.post(url, { timeout: timeout, body: { couponCode: couponCode } });
    };
    CouponRequestSender.prototype.removeCoupon = function (couponCode, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = "/internalapi/v1/checkout/coupon/" + couponCode;
        return this._requestSender.delete(url, { timeout: timeout });
    };
    return CouponRequestSender;
}());
exports.default = CouponRequestSender;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var CouponSelector = /** @class */ (function () {
    function CouponSelector(_coupon) {
        this._coupon = _coupon;
    }
    CouponSelector.prototype.getRemoveError = function () {
        return this._coupon.errors.removeCouponError;
    };
    CouponSelector.prototype.getApplyError = function () {
        return this._coupon.errors.applyCouponError;
    };
    CouponSelector.prototype.isApplying = function () {
        return !!this._coupon.statuses.isApplyingCoupon;
    };
    CouponSelector.prototype.isRemoving = function () {
        return !!this._coupon.statuses.isRemovingCoupon;
    };
    CouponSelector = tslib_1.__decorate([
        selector_1.selector
    ], CouponSelector);
    return CouponSelector;
}());
exports.default = CouponSelector;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var checkout_1 = __webpack_require__(7);
var couponActionTypes = __webpack_require__(30);
var DEFAULT_STATE = {
    errors: {},
    statuses: {},
};
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action
 */
function couponReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = couponReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return action.payload.coupons;
        default:
            return data;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = {}; }
    switch (action.type) {
        case couponActionTypes.APPLY_COUPON_REQUESTED:
        case couponActionTypes.APPLY_COUPON_SUCCEEDED:
            return tslib_1.__assign({}, errors, { applyCouponError: undefined });
        case couponActionTypes.APPLY_COUPON_FAILED:
            return tslib_1.__assign({}, errors, { applyCouponError: action.payload });
        case couponActionTypes.REMOVE_COUPON_REQUESTED:
        case couponActionTypes.REMOVE_COUPON_SUCCEEDED:
            return tslib_1.__assign({}, errors, { removeCouponError: undefined });
        case couponActionTypes.REMOVE_COUPON_FAILED:
            return tslib_1.__assign({}, errors, { removeCouponError: action.payload });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = {}; }
    switch (action.type) {
        case couponActionTypes.APPLY_COUPON_REQUESTED:
            return tslib_1.__assign({}, statuses, { isApplyingCoupon: true });
        case couponActionTypes.APPLY_COUPON_SUCCEEDED:
        case couponActionTypes.APPLY_COUPON_FAILED:
            return tslib_1.__assign({}, statuses, { isApplyingCoupon: false });
        case couponActionTypes.REMOVE_COUPON_REQUESTED:
            return tslib_1.__assign({}, statuses, { isRemovingCoupon: true });
        case couponActionTypes.REMOVE_COUPON_SUCCEEDED:
        case couponActionTypes.REMOVE_COUPON_FAILED:
            return tslib_1.__assign({}, statuses, { isRemovingCoupon: false });
        default:
            return statuses;
    }
}


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(31);
/**
 * @todo Convert this file into TypeScript properly
 */
var GiftCertificateActionCreator = /** @class */ (function () {
    function GiftCertificateActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    GiftCertificateActionCreator.prototype.applyGiftCertificate = function (giftCertificate, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.APPLY_GIFT_CERTIFICATE_REQUESTED));
            _this._checkoutClient.applyGiftCertificate(giftCertificate, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.APPLY_GIFT_CERTIFICATE_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.APPLY_GIFT_CERTIFICATE_FAILED, response));
            });
        });
    };
    GiftCertificateActionCreator.prototype.removeGiftCertificate = function (giftCertificate, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.REMOVE_GIFT_CERTIFICATE_REQUESTED));
            _this._checkoutClient.removeGiftCertificate(giftCertificate, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.REMOVE_GIFT_CERTIFICATE_SUCCEEDED, body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.REMOVE_GIFT_CERTIFICATE_FAILED, response));
            });
        });
    };
    return GiftCertificateActionCreator;
}());
exports.default = GiftCertificateActionCreator;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var GiftCertificateRequestSender = /** @class */ (function () {
    function GiftCertificateRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    GiftCertificateRequestSender.prototype.applyGiftCertificate = function (couponCode, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/coupon';
        return this._requestSender.post(url, { timeout: timeout, body: { couponCode: couponCode } });
    };
    GiftCertificateRequestSender.prototype.removeGiftCertificate = function (couponCode, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = "/internalapi/v1/checkout/coupon/" + couponCode;
        return this._requestSender.delete(url, { timeout: timeout });
    };
    return GiftCertificateRequestSender;
}());
exports.default = GiftCertificateRequestSender;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var GiftCertificateSelector = /** @class */ (function () {
    function GiftCertificateSelector(_giftCertificate) {
        this._giftCertificate = _giftCertificate;
    }
    GiftCertificateSelector.prototype.getRemoveError = function () {
        return this._giftCertificate.errors.removeGiftCertificateError;
    };
    GiftCertificateSelector.prototype.getApplyError = function () {
        return this._giftCertificate.errors.applyGiftCertificateError;
    };
    GiftCertificateSelector.prototype.isApplying = function () {
        return !!this._giftCertificate.statuses.isApplyingGiftCertificate;
    };
    GiftCertificateSelector.prototype.isRemoving = function () {
        return !!this._giftCertificate.statuses.isRemovingGiftCertificate;
    };
    GiftCertificateSelector = tslib_1.__decorate([
        selector_1.selector
    ], GiftCertificateSelector);
    return GiftCertificateSelector;
}());
exports.default = GiftCertificateSelector;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var checkout_1 = __webpack_require__(7);
var giftCertificateActionTypes = __webpack_require__(31);
var DEFAULT_STATE = {
    errors: {},
    statuses: {},
};
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action
 */
function giftCertificateReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = giftCertificateReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return action.payload.giftCertificates;
        default:
            return data;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = DEFAULT_STATE.errors; }
    switch (action.type) {
        case giftCertificateActionTypes.APPLY_GIFT_CERTIFICATE_REQUESTED:
        case giftCertificateActionTypes.APPLY_GIFT_CERTIFICATE_SUCCEEDED:
            return tslib_1.__assign({}, errors, { applyGiftCertificateError: undefined });
        case giftCertificateActionTypes.APPLY_GIFT_CERTIFICATE_FAILED:
            return tslib_1.__assign({}, errors, { applyGiftCertificateError: action.payload });
        case giftCertificateActionTypes.REMOVE_GIFT_CERTIFICATE_REQUESTED:
        case giftCertificateActionTypes.REMOVE_GIFT_CERTIFICATE_SUCCEEDED:
            return tslib_1.__assign({}, errors, { removeGiftCertificateError: undefined });
        case giftCertificateActionTypes.REMOVE_GIFT_CERTIFICATE_FAILED:
            return tslib_1.__assign({}, errors, { removeGiftCertificateError: action.payload });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = DEFAULT_STATE.statuses; }
    switch (action.type) {
        case giftCertificateActionTypes.APPLY_GIFT_CERTIFICATE_REQUESTED:
            return tslib_1.__assign({}, statuses, { isApplyingGiftCertificate: true });
        case giftCertificateActionTypes.APPLY_GIFT_CERTIFICATE_SUCCEEDED:
        case giftCertificateActionTypes.APPLY_GIFT_CERTIFICATE_FAILED:
            return tslib_1.__assign({}, statuses, { isApplyingGiftCertificate: false });
        case giftCertificateActionTypes.REMOVE_GIFT_CERTIFICATE_REQUESTED:
            return tslib_1.__assign({}, statuses, { isRemovingGiftCertificate: true });
        case giftCertificateActionTypes.REMOVE_GIFT_CERTIFICATE_SUCCEEDED:
        case giftCertificateActionTypes.REMOVE_GIFT_CERTIFICATE_FAILED:
            return tslib_1.__assign({}, statuses, { isRemovingGiftCertificate: false });
        default:
            return statuses;
    }
}


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mapToInternalCoupon(coupon, existingCoupon) {
    return {
        code: coupon.code,
        discount: existingCoupon.discount,
        discountType: existingCoupon.discountType,
        name: existingCoupon.name,
    };
}
exports.default = mapToInternalCoupon;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mapToInternalGiftCertificate(giftCertificate, existingGiftCertificate) {
    return {
        code: giftCertificate.code,
        discountedAmount: existingGiftCertificate.discountedAmount,
        remainingBalance: existingGiftCertificate.remainingBalance,
        giftCertificate: {
            balance: giftCertificate.balance,
            code: giftCertificate.code,
            purchaseDate: giftCertificate.purchaseDate,
        },
    };
}
exports.default = mapToInternalGiftCertificate;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var CartRequestSender = /** @class */ (function () {
    function CartRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    CartRequestSender.prototype.loadCart = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/cart';
        return this._requestSender.get(url, { timeout: timeout });
    };
    CartRequestSender.prototype.loadCarts = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/api/storefront/carts';
        return this._requestSender.get(url, { timeout: timeout });
    };
    return CartRequestSender;
}());
exports.default = CartRequestSender;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var CartSelector = /** @class */ (function () {
    function CartSelector(_cart) {
        this._cart = _cart;
    }
    CartSelector.prototype.getCart = function () {
        return this._cart.data;
    };
    CartSelector.prototype.isValid = function () {
        return !!(this._cart.meta && this._cart.meta.isValid);
    };
    CartSelector.prototype.getLoadError = function () {
        return this._cart.errors.loadError;
    };
    CartSelector.prototype.getVerifyError = function () {
        return this._cart.errors.verifyError;
    };
    CartSelector.prototype.isLoading = function () {
        return !!this._cart.statuses.isLoading;
    };
    CartSelector.prototype.isVerifying = function () {
        return !!this._cart.statuses.isVerifying;
    };
    CartSelector = tslib_1.__decorate([
        selector_1.selector
    ], CartSelector);
    return CartSelector;
}());
exports.default = CartSelector;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var config_actions_1 = __webpack_require__(54);
var ConfigActionCreator = /** @class */ (function () {
    function ConfigActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    ConfigActionCreator.prototype.loadConfig = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(config_actions_1.ConfigActionType.LoadConfigRequested));
            _this._checkoutClient.loadConfig(options)
                .then(function (response) {
                observer.next(data_store_1.createAction(config_actions_1.ConfigActionType.LoadConfigSucceeded, response.body));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(config_actions_1.ConfigActionType.LoadConfigFailed, response));
            });
        });
    };
    return ConfigActionCreator;
}());
exports.default = ConfigActionCreator;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var ConfigSelector = /** @class */ (function () {
    function ConfigSelector(_config) {
        this._config = _config;
    }
    ConfigSelector.prototype.getConfig = function () {
        return this._config.data;
    };
    ConfigSelector.prototype.getStoreConfig = function () {
        return this._config.data && this._config.data.storeConfig;
    };
    ConfigSelector.prototype.getContextConfig = function () {
        return this._config.data && this._config.data.context;
    };
    ConfigSelector.prototype.getLoadError = function () {
        return this._config.errors.loadError;
    };
    ConfigSelector.prototype.isLoading = function () {
        return !!this._config.statuses.isLoading;
    };
    ConfigSelector = tslib_1.__decorate([
        selector_1.selector
    ], ConfigSelector);
    return ConfigSelector;
}());
exports.default = ConfigSelector;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var config_actions_1 = __webpack_require__(54);
var DEFAULT_STATE = {
    errors: {},
    statuses: {},
};
function configReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = configReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case config_actions_1.ConfigActionType.LoadConfigSucceeded:
            return action.payload ? action.payload : data;
        default:
            return data;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = DEFAULT_STATE.errors; }
    switch (action.type) {
        case config_actions_1.ConfigActionType.LoadConfigSucceeded:
            return tslib_1.__assign({}, errors, { loadError: undefined });
        case config_actions_1.ConfigActionType.LoadConfigFailed:
            return tslib_1.__assign({}, errors, { loadError: action.payload });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = DEFAULT_STATE.statuses; }
    switch (action.type) {
        case config_actions_1.ConfigActionType.LoadConfigRequested:
            return tslib_1.__assign({}, statuses, { isLoading: true });
        case config_actions_1.ConfigActionType.LoadConfigSucceeded:
        case config_actions_1.ConfigActionType.LoadConfigFailed:
            return tslib_1.__assign({}, statuses, { isLoading: false });
        default:
            return statuses;
    }
}


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConfigRequestSender = /** @class */ (function () {
    function ConfigRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    ConfigRequestSender.prototype.loadConfig = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/api/storefront/checkout-settings';
        return this._requestSender.get(url, {
            timeout: timeout,
            headers: {
                'X-API-INTERNAL': 'This API endpoint is for internal use only and may change in the future',
            },
        });
    };
    return ConfigRequestSender;
}());
exports.default = ConfigRequestSender;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var form_poster_1 = __webpack_require__(55);
var request_sender_1 = __webpack_require__(10);
var script_loader_1 = __webpack_require__(32);
var registry_1 = __webpack_require__(33);
var payment_1 = __webpack_require__(13);
var braintree_1 = __webpack_require__(40);
var chasepay_1 = __webpack_require__(200);
var quote_1 = __webpack_require__(17);
var remote_checkout_1 = __webpack_require__(21);
var amazon_pay_1 = __webpack_require__(38);
var _1 = __webpack_require__(19);
var customer_action_creator_1 = __webpack_require__(75);
var strategies_1 = __webpack_require__(202);
function createCustomerStrategyRegistry(store, client) {
    var registry = new registry_1.Registry();
    var requestSender = request_sender_1.createRequestSender();
    var remoteCheckoutRequestSender = new remote_checkout_1.RemoteCheckoutRequestSender(requestSender);
    registry.register('amazon', function () {
        return new strategies_1.AmazonPayCustomerStrategy(store, new payment_1.PaymentMethodActionCreator(client), new remote_checkout_1.RemoteCheckoutActionCreator(remoteCheckoutRequestSender), remoteCheckoutRequestSender, new amazon_pay_1.AmazonPayScriptLoader(script_loader_1.getScriptLoader()));
    });
    registry.register('braintreevisacheckout', function () {
        return new strategies_1.BraintreeVisaCheckoutCustomerStrategy(store, new payment_1.PaymentMethodActionCreator(client), new _1.CustomerStrategyActionCreator(registry), new quote_1.QuoteActionCreator(client), new remote_checkout_1.RemoteCheckoutActionCreator(remoteCheckoutRequestSender), braintree_1.createBraintreeVisaCheckoutPaymentProcessor(script_loader_1.getScriptLoader()), new braintree_1.VisaCheckoutScriptLoader(script_loader_1.getScriptLoader()));
    });
    registry.register('chasepay', function () {
        return new strategies_1.ChasePayCustomerStrategy(store, new payment_1.PaymentMethodActionCreator(client), new remote_checkout_1.RemoteCheckoutActionCreator(remoteCheckoutRequestSender), new chasepay_1.ChasePayScriptLoader(script_loader_1.getScriptLoader()), requestSender, form_poster_1.createFormPoster());
    });
    registry.register('default', function () {
        return new strategies_1.DefaultCustomerStrategy(store, new customer_action_creator_1.default(client));
    });
    return registry;
}
exports.default = createCustomerStrategyRegistry;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var Registry = /** @class */ (function () {
    function Registry(options) {
        this._factories = {};
        this._instances = {};
        this._options = tslib_1.__assign({ defaultToken: 'default' }, options);
    }
    Registry.prototype.get = function (token, cacheToken) {
        if (token === void 0) { token = this._options.defaultToken; }
        if (cacheToken === void 0) { cacheToken = token; }
        try {
            return this._getInstance(token, cacheToken);
        }
        catch (error) {
            return this._getInstance(this._options.defaultToken, cacheToken);
        }
    };
    Registry.prototype.register = function (token, factory) {
        if (this.hasFactory(token)) {
            throw new errors_1.InvalidArgumentError("'" + token + "' is already registered.");
        }
        this._factories[token] = factory;
    };
    Registry.prototype.hasFactory = function (token) {
        return !!this._factories[token];
    };
    Registry.prototype.hasInstance = function (token) {
        return !!this._instances[token];
    };
    Registry.prototype._getInstance = function (token, cacheToken) {
        if (!this.hasInstance(cacheToken)) {
            var factory = this._factories[token];
            if (!factory) {
                throw new errors_1.InvalidArgumentError("'" + token + "' is not registered.");
            }
            this._instances[cacheToken] = factory();
        }
        return this._instances[cacheToken];
    };
    return Registry;
}());
exports.default = Registry;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var standard_error_1 = __webpack_require__(12);
var InvalidArgumentError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidArgumentError, _super);
    function InvalidArgumentError(message) {
        var _this = _super.call(this, message || 'Invalid arguments have been provided.') || this;
        _this.type = 'invalid_argument';
        return _this;
    }
    return InvalidArgumentError;
}(standard_error_1.default));
exports.default = InvalidArgumentError;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var standard_error_1 = __webpack_require__(12);
var MissingDataError = /** @class */ (function (_super) {
    tslib_1.__extends(MissingDataError, _super);
    function MissingDataError(message) {
        var _this = _super.call(this, message || 'Unable to proceed because required data is missing.') || this;
        _this.type = 'missing_data';
        return _this;
    }
    return MissingDataError;
}(standard_error_1.default));
exports.default = MissingDataError;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var standard_error_1 = __webpack_require__(12);
var NotImplementedError = /** @class */ (function (_super) {
    tslib_1.__extends(NotImplementedError, _super);
    function NotImplementedError(message) {
        var _this = _super.call(this, message || 'Not implemented.') || this;
        _this.type = 'not_implemented';
        return _this;
    }
    return NotImplementedError;
}(standard_error_1.default));
exports.default = NotImplementedError;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var standard_error_1 = __webpack_require__(12);
var NotInitializedError = /** @class */ (function (_super) {
    tslib_1.__extends(NotInitializedError, _super);
    function NotInitializedError(message) {
        var _this = _super.call(this, message || 'Unable to proceed because the required component has not been initialized.') || this;
        _this.type = 'not_initialized';
        return _this;
    }
    return NotInitializedError;
}(standard_error_1.default));
exports.default = NotInitializedError;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var request_error_1 = __webpack_require__(34);
/**
 * @todo Convert this file into TypeScript properly
 */
var TimeoutError = /** @class */ (function (_super) {
    tslib_1.__extends(TimeoutError, _super);
    function TimeoutError(response) {
        var _this = _super.call(this, response, 'The request has timed out or aborted.') || this;
        _this.type = 'timeout';
        return _this;
    }
    return TimeoutError;
}(request_error_1.default));
exports.default = TimeoutError;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var request_error_1 = __webpack_require__(34);
var UnrecoverableError = /** @class */ (function (_super) {
    tslib_1.__extends(UnrecoverableError, _super);
    function UnrecoverableError(response, message) {
        var _this = _super.call(this, response, message || 'An unexpected error has occurred. The checkout process cannot continue as a result.') || this;
        _this.type = 'unrecoverable';
        return _this;
    }
    return UnrecoverableError;
}(request_error_1.default));
exports.default = UnrecoverableError;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var standard_error_1 = __webpack_require__(12);
var UnsupportedBrowserError = /** @class */ (function (_super) {
    tslib_1.__extends(UnsupportedBrowserError, _super);
    function UnsupportedBrowserError(message) {
        var _this = _super.call(this, message || 'Unsupported browser error') || this;
        _this.type = 'unsupported_browser';
        return _this;
    }
    return UnsupportedBrowserError;
}(standard_error_1.default));
exports.default = UnsupportedBrowserError;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../payment/bigpay-client.d.ts" />
var bigpay_client_1 = __webpack_require__(136);
function createPaymentClient(store) {
    var paymentClient = bigpay_client_1.createClient();
    store.subscribe(function (state) {
        var config = state.config.getStoreConfig();
        if (config) {
            paymentClient.setHost(config.paymentSettings.bigpayBaseUrl);
        }
    }, function (state) { return state.config.getStoreConfig(); });
    return paymentClient;
}
exports.default = createPaymentClient;


/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = require("@bigcommerce/bigpay-client");

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var form_poster_1 = __webpack_require__(55);
var request_sender_1 = __webpack_require__(10);
var script_loader_1 = __webpack_require__(32);
var billing_1 = __webpack_require__(23);
var cart_1 = __webpack_require__(11);
var order_1 = __webpack_require__(16);
var quote_1 = __webpack_require__(17);
var remote_checkout_1 = __webpack_require__(21);
var afterpay_1 = __webpack_require__(156);
var amazon_pay_1 = __webpack_require__(38);
var klarna_1 = __webpack_require__(159);
var wepay_1 = __webpack_require__(161);
var _1 = __webpack_require__(13);
var payment_action_creator_1 = __webpack_require__(58);
var payment_method_action_creator_1 = __webpack_require__(60);
var payment_request_sender_1 = __webpack_require__(62);
var payment_strategy_registry_1 = __webpack_require__(63);
var strategies_1 = __webpack_require__(166);
var braintree_1 = __webpack_require__(40);
var square_1 = __webpack_require__(72);
function createPaymentStrategyRegistry(store, client, paymentClient) {
    var registry = new payment_strategy_registry_1.default(store, { defaultToken: 'creditcard' });
    var scriptLoader = script_loader_1.getScriptLoader();
    var braintreePaymentProcessor = braintree_1.createBraintreePaymentProcessor(scriptLoader);
    var orderActionCreator = new order_1.OrderActionCreator(client);
    var paymentActionCreator = new payment_action_creator_1.default(new payment_request_sender_1.default(paymentClient), new order_1.OrderActionCreator(client));
    var paymentMethodActionCreator = new payment_method_action_creator_1.default(client);
    var remoteCheckoutActionCreator = new remote_checkout_1.RemoteCheckoutActionCreator(new remote_checkout_1.RemoteCheckoutRequestSender(request_sender_1.createRequestSender()));
    registry.register('afterpay', function () {
        return new strategies_1.AfterpayPaymentStrategy(store, new cart_1.CartActionCreator(client), orderActionCreator, paymentActionCreator, paymentMethodActionCreator, remoteCheckoutActionCreator, new afterpay_1.AfterpayScriptLoader(scriptLoader));
    });
    registry.register('amazon', function () {
        return new strategies_1.AmazonPayPaymentStrategy(store, orderActionCreator, new billing_1.BillingAddressActionCreator(client), remoteCheckoutActionCreator, new amazon_pay_1.AmazonPayScriptLoader(scriptLoader));
    });
    registry.register('creditcard', function () {
        return new strategies_1.CreditCardPaymentStrategy(store, orderActionCreator, paymentActionCreator);
    });
    registry.register('klarna', function () {
        return new strategies_1.KlarnaPaymentStrategy(store, orderActionCreator, paymentMethodActionCreator, remoteCheckoutActionCreator, new klarna_1.KlarnaScriptLoader(scriptLoader));
    });
    registry.register('legacy', function () {
        return new strategies_1.LegacyPaymentStrategy(store, orderActionCreator);
    });
    registry.register('offline', function () {
        return new strategies_1.OfflinePaymentStrategy(store, orderActionCreator);
    });
    registry.register('offsite', function () {
        return new strategies_1.OffsitePaymentStrategy(store, orderActionCreator, paymentActionCreator);
    });
    registry.register('paypal', function () {
        return new strategies_1.PaypalProPaymentStrategy(store, orderActionCreator, paymentActionCreator);
    });
    registry.register('paypalexpress', function () {
        return new strategies_1.PaypalExpressPaymentStrategy(store, orderActionCreator, scriptLoader);
    });
    registry.register('paypalexpresscredit', function () {
        return new strategies_1.PaypalExpressPaymentStrategy(store, orderActionCreator, scriptLoader);
    });
    registry.register('sagepay', function () {
        return new strategies_1.SagePayPaymentStrategy(store, orderActionCreator, paymentActionCreator, form_poster_1.createFormPoster());
    });
    registry.register('squarev2', function () {
        return new strategies_1.SquarePaymentStrategy(store, orderActionCreator, paymentActionCreator, new square_1.SquareScriptLoader(scriptLoader));
    });
    registry.register('nopaymentdatarequired', function () {
        return new strategies_1.NoPaymentDataRequiredPaymentStrategy(store, orderActionCreator);
    });
    registry.register('braintree', function () {
        return new strategies_1.BraintreeCreditCardPaymentStrategy(store, orderActionCreator, paymentActionCreator, paymentMethodActionCreator, braintreePaymentProcessor);
    });
    registry.register('braintreepaypal', function () {
        return new strategies_1.BraintreePaypalPaymentStrategy(store, orderActionCreator, paymentActionCreator, paymentMethodActionCreator, braintreePaymentProcessor);
    });
    registry.register('braintreepaypalcredit', function () {
        return new strategies_1.BraintreePaypalPaymentStrategy(store, orderActionCreator, paymentActionCreator, paymentMethodActionCreator, braintreePaymentProcessor, true);
    });
    registry.register('braintreevisacheckout', function () {
        return new braintree_1.BraintreeVisaCheckoutPaymentStrategy(store, paymentMethodActionCreator, new _1.PaymentStrategyActionCreator(registry), new quote_1.QuoteActionCreator(client), paymentActionCreator, orderActionCreator, braintree_1.createBraintreeVisaCheckoutPaymentProcessor(scriptLoader), new braintree_1.VisaCheckoutScriptLoader(scriptLoader));
    });
    registry.register('wepay', function () {
        return new strategies_1.WepayPaymentStrategy(store, orderActionCreator, paymentActionCreator, new wepay_1.WepayRiskClient(scriptLoader));
    });
    return registry;
}
exports.default = createPaymentStrategyRegistry;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var cart_1 = __webpack_require__(11);
var errors_1 = __webpack_require__(139);
var errors_2 = __webpack_require__(2);
var order_actions_1 = __webpack_require__(35);
var OrderActionCreator = /** @class */ (function () {
    function OrderActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
        this._cartComparator = new cart_1.CartComparator();
    }
    OrderActionCreator.prototype.loadOrder = function (orderId, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(order_actions_1.OrderActionType.LoadOrderRequested));
            _this._checkoutClient.loadOrder(orderId, options)
                .then(function (response) {
                observer.next(data_store_1.createAction(order_actions_1.OrderActionType.LoadOrderSucceeded, response.body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(order_actions_1.OrderActionType.LoadOrderFailed, response));
            });
        });
    };
    OrderActionCreator.prototype.submitOrder = function (payload, options) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(order_actions_1.OrderActionType.SubmitOrderRequested));
            var state = store.getState();
            var cart = state.cart.getCart();
            if (!cart) {
                throw new errors_2.MissingDataError();
            }
            _this._verifyCart(cart, options)
                .then(function () { return _this._checkoutClient.submitOrder(_this._mapToOrderRequestBody(payload), options); })
                .then(function (response) {
                observer.next(data_store_1.createAction(order_actions_1.OrderActionType.SubmitOrderSucceeded, response.body.data, tslib_1.__assign({}, response.body.meta, { token: response.headers.token })));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(order_actions_1.OrderActionType.SubmitOrderFailed, response));
            });
        }); };
    };
    OrderActionCreator.prototype.finalizeOrder = function (orderId, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(order_actions_1.OrderActionType.FinalizeOrderRequested));
            _this._checkoutClient.finalizeOrder(orderId, options)
                .then(function (response) {
                observer.next(data_store_1.createAction(order_actions_1.OrderActionType.FinalizeOrderSucceeded, response.body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(order_actions_1.OrderActionType.FinalizeOrderFailed, response));
            });
        });
    };
    OrderActionCreator.prototype._verifyCart = function (existingCart, options) {
        var _this = this;
        return this._checkoutClient.loadCart(options)
            .then(function (_a) {
            var _b = _a.body, body = _b === void 0 ? {} : _b;
            return _this._cartComparator.isEqual(existingCart, body.data.cart) ? Promise.resolve(true) : Promise.reject(false);
        })
            .catch(function () { return Promise.reject(new errors_1.CartChangedError()); });
    };
    OrderActionCreator.prototype._mapToOrderRequestBody = function (payload) {
        var payment = payload.payment, order = tslib_1.__rest(payload, ["payment"]);
        if (!payment) {
            return order;
        }
        return tslib_1.__assign({}, payload, { payment: {
                paymentData: payment.paymentData,
                name: payment.methodId,
                gateway: payment.gatewayId,
            } });
    };
    return OrderActionCreator;
}());
exports.default = OrderActionCreator;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cart_changed_error_1 = __webpack_require__(140);
exports.CartChangedError = cart_changed_error_1.default;
var cart_unavailable_error_1 = __webpack_require__(141);
exports.CartUnavailableError = cart_unavailable_error_1.default;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var CartChangedError = /** @class */ (function (_super) {
    tslib_1.__extends(CartChangedError, _super);
    function CartChangedError() {
        var _this = _super.call(this, 'An update to your shopping cart has been detected and your available shipping costs have been updated.') || this;
        _this.type = 'cart_changed';
        return _this;
    }
    return CartChangedError;
}(errors_1.StandardError));
exports.default = CartChangedError;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var CartUnavailableError = /** @class */ (function (_super) {
    tslib_1.__extends(CartUnavailableError, _super);
    function CartUnavailableError() {
        var _this = _super.call(this, 'There is no available shopping cart.') || this;
        _this.type = 'cart_unavailable';
        return _this;
    }
    return CartUnavailableError;
}(errors_1.StandardError));
exports.default = CartUnavailableError;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var checkout_1 = __webpack_require__(7);
var quoteActionTypes = __webpack_require__(14);
var map_to_internal_incomplete_order_1 = __webpack_require__(36);
var order_actions_1 = __webpack_require__(35);
var DEFAULT_STATE = {
    errors: {},
    meta: {},
    statuses: {},
};
function orderReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        meta: metaReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = orderReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return data ? tslib_1.__assign({}, data, map_to_internal_incomplete_order_1.default(action.payload, data)) : data;
        case order_actions_1.OrderActionType.LoadOrderSucceeded:
        case order_actions_1.OrderActionType.FinalizeOrderSucceeded:
        case order_actions_1.OrderActionType.SubmitOrderSucceeded:
        case quoteActionTypes.LOAD_QUOTE_SUCCEEDED:
            return action.payload ? tslib_1.__assign({}, data, action.payload.order) : data;
        default:
            return data;
    }
}
function metaReducer(meta, action) {
    switch (action.type) {
        case order_actions_1.OrderActionType.SubmitOrderSucceeded:
            return tslib_1.__assign({}, meta, action.meta);
        default:
            return meta;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = DEFAULT_STATE.errors; }
    switch (action.type) {
        case order_actions_1.OrderActionType.LoadOrderRequested:
        case order_actions_1.OrderActionType.LoadOrderSucceeded:
            return tslib_1.__assign({}, errors, { loadError: undefined });
        case order_actions_1.OrderActionType.LoadOrderFailed:
            return tslib_1.__assign({}, errors, { loadError: action.payload });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = DEFAULT_STATE.statuses; }
    switch (action.type) {
        case order_actions_1.OrderActionType.LoadOrderRequested:
            return tslib_1.__assign({}, statuses, { isLoading: true });
        case order_actions_1.OrderActionType.LoadOrderSucceeded:
        case order_actions_1.OrderActionType.LoadOrderFailed:
            return tslib_1.__assign({}, statuses, { isLoading: false });
        default:
            return statuses;
    }
}


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var OrderRequestSender = /** @class */ (function () {
    function OrderRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    OrderRequestSender.prototype.loadOrder = function (orderId, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = "/internalapi/v1/checkout/order/" + orderId;
        return this._requestSender.get(url, { timeout: timeout });
    };
    OrderRequestSender.prototype.submitOrder = function (body, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/order';
        return this._requestSender.post(url, { body: body, timeout: timeout });
    };
    OrderRequestSender.prototype.finalizeOrder = function (orderId, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = "/internalapi/v1/checkout/order/" + orderId;
        return this._requestSender.post(url, { timeout: timeout });
    };
    return OrderRequestSender;
}());
exports.default = OrderRequestSender;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var paymentStatusTypes = __webpack_require__(20);
var selector_1 = __webpack_require__(3);
var OrderSelector = /** @class */ (function () {
    function OrderSelector(_order, _customer, _cart) {
        this._order = _order;
        this._customer = _customer;
        this._cart = _cart;
    }
    OrderSelector.prototype.getOrder = function () {
        return this._order.data;
    };
    OrderSelector.prototype.getOrderMeta = function () {
        return {
            deviceFingerprint: this._order.meta && this._order.meta.deviceFingerprint,
        };
    };
    OrderSelector.prototype.getPaymentAuthToken = function () {
        return this._order.meta && this._order.meta.token;
    };
    OrderSelector.prototype.isPaymentDataRequired = function (useStoreCredit) {
        if (useStoreCredit === void 0) { useStoreCredit = false; }
        var grandTotal = this._cart.data && this._cart.data.grandTotal && this._cart.data.grandTotal.amount || 0;
        var storeCredit = this._customer.data && this._customer.data.storeCredit || 0;
        return (useStoreCredit ? grandTotal - storeCredit : grandTotal) > 0;
    };
    OrderSelector.prototype.isPaymentDataSubmitted = function (paymentMethod) {
        var _a = (this.getOrder() || {}).payment, payment = _a === void 0 ? {} : _a;
        return !!(paymentMethod && paymentMethod.nonce) ||
            payment.status === paymentStatusTypes.ACKNOWLEDGE ||
            payment.status === paymentStatusTypes.FINALIZE;
    };
    OrderSelector.prototype.getLoadError = function () {
        return this._order.errors.loadError;
    };
    OrderSelector.prototype.isLoading = function () {
        return !!this._order.statuses.isLoading;
    };
    OrderSelector = tslib_1.__decorate([
        selector_1.selector
    ], OrderSelector);
    return OrderSelector;
}());
exports.default = OrderSelector;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var cart_1 = __webpack_require__(11);
var coupon_1 = __webpack_require__(15);
var map_to_internal_incomplete_order_1 = __webpack_require__(36);
function mapToInternalOrder(checkout, order, existingOrder) {
    return tslib_1.__assign({}, map_to_internal_incomplete_order_1.default(checkout, existingOrder), { id: order.orderId, items: cart_1.mapToInternalLineItems(order.lineItems, existingOrder.items), currency: order.currency.code, customerCanBeCreated: existingOrder.customerCanBeCreated, subtotal: {
            amount: existingOrder.subtotal.amount,
            integerAmount: existingOrder.subtotal.integerAmount,
        }, coupon: {
            discountedAmount: existingOrder.coupon.discountedAmount,
            coupons: checkout.cart.coupons.map(function (coupon) {
                return coupon_1.mapToInternalCoupon(coupon, 
                // tslint:disable-next-line:no-non-null-assertion
                lodash_1.find(existingOrder.coupon.coupons, { code: coupon.code }));
            }),
        }, discount: {
            amount: order.discountAmount,
            integerAmount: existingOrder.discount.integerAmount,
        }, discountNotifications: existingOrder.discountNotifications, giftCertificate: {
            totalDiscountedAmount: existingOrder.giftCertificate.totalDiscountedAmount,
            appliedGiftCertificates: checkout.giftCertificates.map(function (giftCertificate) {
                return coupon_1.mapToInternalGiftCertificate(giftCertificate, 
                // tslint:disable-next-line:no-non-null-assertion
                lodash_1.find(existingOrder.giftCertificate.appliedGiftCertificates, { code: giftCertificate.code }));
            }),
        }, shipping: {
            amount: checkout.shippingCostTotal,
            integerAmount: existingOrder.shipping.integerAmount,
            amountBeforeDiscount: existingOrder.shipping.amountBeforeDiscount,
            integerAmountBeforeDiscount: existingOrder.shipping.integerAmountBeforeDiscount,
            required: existingOrder.shipping.required,
        }, storeCredit: {
            amount: checkout.storeCredit,
        }, taxSubtotal: existingOrder.taxSubtotal, taxes: existingOrder.taxes, taxTotal: {
            amount: checkout.taxTotal,
            integerAmount: existingOrder.taxTotal.integerAmount,
        }, handling: {
            amount: existingOrder.handling.amount,
            integerAmount: existingOrder.handling.integerAmount,
        }, grandTotal: {
            amount: checkout.grandTotal,
            integerAmount: existingOrder.grandTotal.integerAmount,
        } });
}
exports.default = mapToInternalOrder;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(14);
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action<T>
 */
var QuoteActionCreator = /** @class */ (function () {
    function QuoteActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    QuoteActionCreator.prototype.loadQuote = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.LOAD_QUOTE_REQUESTED));
            _this._checkoutClient.loadCheckout(options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.LOAD_QUOTE_SUCCEEDED, body.data, body.meta));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.LOAD_QUOTE_FAILED, response));
            });
        });
    };
    return QuoteActionCreator;
}());
exports.default = QuoteActionCreator;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var billingAddressActionTypes = __webpack_require__(29);
var checkout_1 = __webpack_require__(7);
var customerActionTypes = __webpack_require__(18);
var shippingAddressActionTypes = __webpack_require__(24);
var shippingOptionActionTypes = __webpack_require__(25);
var map_to_internal_quote_1 = __webpack_require__(56);
var quoteActionTypes = __webpack_require__(14);
var DEFAULT_STATE = {
    errors: {},
    meta: {},
    statuses: {},
};
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action
 */
function quoteReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        meta: metaReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = quoteReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return data ? tslib_1.__assign({}, data, map_to_internal_quote_1.default(action.payload, data)) : data;
        case billingAddressActionTypes.UPDATE_BILLING_ADDRESS_SUCCEEDED:
        case customerActionTypes.SIGN_IN_CUSTOMER_SUCCEEDED:
        case customerActionTypes.SIGN_OUT_CUSTOMER_SUCCEEDED:
        case quoteActionTypes.LOAD_QUOTE_SUCCEEDED:
        case shippingAddressActionTypes.UPDATE_SHIPPING_ADDRESS_SUCCEEDED:
        case shippingOptionActionTypes.LOAD_SHIPPING_OPTIONS_SUCCEEDED:
        case shippingOptionActionTypes.SELECT_SHIPPING_OPTION_SUCCEEDED:
            return action.payload ? tslib_1.__assign({}, data, action.payload.quote) : data;
        default:
            return data;
    }
}
function metaReducer(meta, action) {
    switch (action.type) {
        case quoteActionTypes.LOAD_QUOTE_SUCCEEDED:
            return action.meta ? tslib_1.__assign({}, meta, action.meta) : meta;
        default:
            return meta;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = DEFAULT_STATE.errors; }
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutRequested:
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
        case quoteActionTypes.LOAD_QUOTE_REQUESTED:
        case quoteActionTypes.LOAD_QUOTE_SUCCEEDED:
            return tslib_1.__assign({}, errors, { loadError: undefined });
        case checkout_1.CheckoutActionType.LoadCheckoutFailed:
        case quoteActionTypes.LOAD_QUOTE_FAILED:
            return tslib_1.__assign({}, errors, { loadError: action.payload });
        case billingAddressActionTypes.UPDATE_BILLING_ADDRESS_REQUESTED:
        case billingAddressActionTypes.UPDATE_BILLING_ADDRESS_SUCCEEDED:
            return tslib_1.__assign({}, errors, { updateBillingAddressError: undefined });
        case billingAddressActionTypes.UPDATE_BILLING_ADDRESS_FAILED:
            return tslib_1.__assign({}, errors, { updateBillingAddressError: action.payload });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = DEFAULT_STATE.statuses; }
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutRequested:
        case quoteActionTypes.LOAD_QUOTE_REQUESTED:
            return tslib_1.__assign({}, statuses, { isLoading: true });
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
        case checkout_1.CheckoutActionType.LoadCheckoutFailed:
        case quoteActionTypes.LOAD_QUOTE_SUCCEEDED:
        case quoteActionTypes.LOAD_QUOTE_FAILED:
            return tslib_1.__assign({}, statuses, { isLoading: false });
        case billingAddressActionTypes.UPDATE_BILLING_ADDRESS_REQUESTED:
            return tslib_1.__assign({}, statuses, { isUpdatingBillingAddress: true });
        case billingAddressActionTypes.UPDATE_BILLING_ADDRESS_SUCCEEDED:
        case billingAddressActionTypes.UPDATE_BILLING_ADDRESS_FAILED:
            return tslib_1.__assign({}, statuses, { isUpdatingBillingAddress: false });
        default:
            return statuses;
    }
}


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var utility_1 = __webpack_require__(8);
function isAddressEqual(addressA, addressB) {
    return lodash_1.isEqual(normalize(addressA), normalize(addressB));
}
exports.default = isAddressEqual;
function normalize(address) {
    var ignoredKeys = ['id', 'provinceCode'];
    return Object.keys(utility_1.omitPrivate(address) || {})
        .reduce(function (result, key) {
        return ignoredKeys.indexOf(key) === -1 && address[key] ? tslib_1.__assign({}, result, (_a = {}, _a[key] = address[key], _a)) :
            result;
        var _a;
    }, {});
}


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function mapToInternalAddress(address, existingAddress) {
    return {
        id: address.id,
        firstName: address.firstName,
        lastName: address.lastName,
        company: address.company,
        addressLine1: address.street1,
        addressLine2: address.street2,
        city: address.city,
        province: address.region,
        provinceCode: address.regionCode,
        postCode: address.postalCode,
        country: address.country,
        countryCode: address.countryCode,
        phone: address.phone,
        type: existingAddress.type,
        customFields: address.customFields,
    };
}
exports.default = mapToInternalAddress;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var QuoteRequestSender = /** @class */ (function () {
    function QuoteRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    QuoteRequestSender.prototype.loadQuote = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/quote';
        var params = {
            includes: ['cart', 'customer', 'shippingOptions', 'order'].join(','),
        };
        return this._requestSender.get(url, { params: params, timeout: timeout });
    };
    return QuoteRequestSender;
}());
exports.default = QuoteRequestSender;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var QuoteSelector = /** @class */ (function () {
    function QuoteSelector(_quote) {
        this._quote = _quote;
    }
    QuoteSelector.prototype.getQuote = function () {
        return this._quote.data;
    };
    QuoteSelector.prototype.getQuoteMeta = function () {
        return this._quote.meta;
    };
    QuoteSelector.prototype.getLoadError = function () {
        return this._quote.errors.loadError;
    };
    QuoteSelector.prototype.isLoading = function () {
        return !!this._quote.statuses.isLoading;
    };
    QuoteSelector = tslib_1.__decorate([
        selector_1.selector
    ], QuoteSelector);
    return QuoteSelector;
}());
exports.default = QuoteSelector;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(57);
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action<T>
 */
var RemoteCheckoutActionCreator = /** @class */ (function () {
    function RemoteCheckoutActionCreator(_remoteCheckoutRequestSender) {
        this._remoteCheckoutRequestSender = _remoteCheckoutRequestSender;
    }
    RemoteCheckoutActionCreator.prototype.initializeBilling = function (methodId, params, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.INITIALIZE_REMOTE_BILLING_REQUESTED, undefined, { methodId: methodId }));
            _this._remoteCheckoutRequestSender.initializeBilling(methodId, params, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.INITIALIZE_REMOTE_BILLING_SUCCEEDED, body, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.INITIALIZE_REMOTE_BILLING_FAILED, response, { methodId: methodId }));
            });
        });
    };
    RemoteCheckoutActionCreator.prototype.initializeShipping = function (methodId, params, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.INITIALIZE_REMOTE_SHIPPING_REQUESTED, undefined, { methodId: methodId }));
            _this._remoteCheckoutRequestSender.initializeShipping(methodId, params, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.INITIALIZE_REMOTE_SHIPPING_SUCCEEDED, body, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.INITIALIZE_REMOTE_SHIPPING_FAILED, response, { methodId: methodId }));
            });
        });
    };
    RemoteCheckoutActionCreator.prototype.initializePayment = function (methodId, params, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.INITIALIZE_REMOTE_PAYMENT_REQUESTED, undefined, { methodId: methodId }));
            _this._remoteCheckoutRequestSender.initializePayment(methodId, params, options)
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                observer.next(data_store_1.createAction(actionTypes.INITIALIZE_REMOTE_PAYMENT_SUCCEEDED, body, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.INITIALIZE_REMOTE_PAYMENT_FAILED, response, { methodId: methodId }));
            });
        });
    };
    RemoteCheckoutActionCreator.prototype.signOut = function (methodName, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.SIGN_OUT_REMOTE_CUSTOMER_REQUESTED));
            _this._remoteCheckoutRequestSender.signOut(methodName, options)
                .then(function () {
                observer.next(data_store_1.createAction(actionTypes.SIGN_OUT_REMOTE_CUSTOMER_SUCCEEDED));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.SIGN_OUT_REMOTE_CUSTOMER_FAILED, response));
            });
        });
    };
    RemoteCheckoutActionCreator.prototype.setCheckoutMeta = function (methodName, meta) {
        return data_store_1.createAction(actionTypes.SET_REMOTE_CHECKOUT_META, (_a = {},
            _a[methodName] = meta,
            _a));
        var _a;
    };
    return RemoteCheckoutActionCreator;
}());
exports.default = RemoteCheckoutActionCreator;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var RemoteCheckoutRequestSender = /** @class */ (function () {
    function RemoteCheckoutRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    RemoteCheckoutRequestSender.prototype.initializeBilling = function (methodName, params, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = "/remote-checkout/" + methodName + "/billing";
        return this._requestSender.get(url, { params: params, timeout: timeout });
    };
    RemoteCheckoutRequestSender.prototype.initializeShipping = function (methodName, params, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = "/remote-checkout/" + methodName + "/shipping";
        return this._requestSender.get(url, { params: params, timeout: timeout });
    };
    RemoteCheckoutRequestSender.prototype.initializePayment = function (methodName, params, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = "/remote-checkout/" + methodName + "/payment";
        return this._requestSender.get(url, { params: params, timeout: timeout });
    };
    RemoteCheckoutRequestSender.prototype.signOut = function (methodName, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = "/remote-checkout/" + methodName + "/signout";
        return this._requestSender.get(url, { timeout: timeout });
    };
    RemoteCheckoutRequestSender.prototype.generateToken = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/remote-checkout-token';
        return this._requestSender.get(url, { timeout: timeout });
    };
    RemoteCheckoutRequestSender.prototype.trackAuthorizationEvent = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/remote-checkout/events/shopper-checkout-service-provider-authorization-requested';
        return this._requestSender.post(url, { timeout: timeout });
    };
    return RemoteCheckoutRequestSender;
}());
exports.default = RemoteCheckoutRequestSender;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var RemoteCheckoutSelector = /** @class */ (function () {
    function RemoteCheckoutSelector(_remoteCheckout, _customer) {
        this._remoteCheckout = _remoteCheckout;
        this._customer = _customer;
    }
    RemoteCheckoutSelector.prototype.getCheckout = function () {
        return this._remoteCheckout.data;
    };
    RemoteCheckoutSelector.prototype.getCheckoutMeta = function () {
        return this._remoteCheckout.meta;
    };
    RemoteCheckoutSelector.prototype.getProviderId = function () {
        var customer = this._customer.data;
        return customer && customer.remote && customer.remote.provider;
    };
    RemoteCheckoutSelector = tslib_1.__decorate([
        selector_1.selector
    ], RemoteCheckoutSelector);
    return RemoteCheckoutSelector;
}());
exports.default = RemoteCheckoutSelector;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var actionTypes = __webpack_require__(57);
function remoteCheckoutReducer(state, action) {
    if (state === void 0) { state = {}; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        meta: metaReducer,
    });
    return reducer(state, action);
}
exports.default = remoteCheckoutReducer;
function dataReducer(data, action) {
    if (data === void 0) { data = {}; }
    switch (action.type) {
        case actionTypes.INITIALIZE_REMOTE_BILLING_SUCCEEDED:
            return tslib_1.__assign({}, data, { billingAddress: action.payload.billing && action.payload.billing.address });
        case actionTypes.INITIALIZE_REMOTE_SHIPPING_SUCCEEDED:
            return tslib_1.__assign({}, data, { shippingAddress: action.payload.shipping && action.payload.shipping.address });
        default:
            return data;
    }
}
function metaReducer(meta, action) {
    if (meta === void 0) { meta = {}; }
    switch (action.type) {
        case actionTypes.SET_REMOTE_CHECKOUT_META:
            return tslib_1.__assign({}, meta, action.payload);
        default:
            return meta;
    }
}


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var afterpay_script_loader_1 = __webpack_require__(157);
exports.AfterpayScriptLoader = afterpay_script_loader_1.default;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SCRIPTS_DEFAULT = {
    PROD: '//portal.afterpay.com/afterpay-async.js',
    SANDBOX: '//portal-sandbox.afterpay.com/afterpay-async.js',
};
var SCRIPTS_US = {
    PROD: '//portal.afterpay.com/afterpay-async.js',
    SANDBOX: '//portal.us-sandbox.afterpay.com/afterpay-async.js',
};
/** Class responsible for loading the Afterpay SDK */
var AfterpayScriptLoader = /** @class */ (function () {
    function AfterpayScriptLoader(_scriptLoader) {
        this._scriptLoader = _scriptLoader;
    }
    /**
     * Loads the appropriate Afterpay SDK depending on the payment method data.
     * @param method the payment method data
     */
    AfterpayScriptLoader.prototype.load = function (method, countryCode) {
        var testMode = method.config.testMode || false;
        var scriptURI = this._getScriptURI(countryCode, testMode);
        return this._scriptLoader.loadScript(scriptURI)
            .then(function () { return window.AfterPay; });
    };
    AfterpayScriptLoader.prototype._getScriptURI = function (countryCode, testMode) {
        if (countryCode === 'US') {
            return testMode ? SCRIPTS_US.SANDBOX : SCRIPTS_US.PROD;
        }
        return testMode ? SCRIPTS_DEFAULT.SANDBOX : SCRIPTS_DEFAULT.PROD;
    };
    return AfterpayScriptLoader;
}());
exports.default = AfterpayScriptLoader;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AmazonPayScriptLoader = /** @class */ (function () {
    function AmazonPayScriptLoader(_scriptLoader) {
        this._scriptLoader = _scriptLoader;
        this._window = window;
    }
    AmazonPayScriptLoader.prototype.loadWidget = function (method, onPaymentReady) {
        var _a = method.config, merchantId = _a.merchantId, testMode = _a.testMode, _b = method.initializationData, _c = (_b === void 0 ? {} : _b).region, region = _c === void 0 ? 'us' : _c;
        var url = 'https://' +
            (region.toLowerCase() !== 'us' ? 'static-eu.' : 'static-na.') +
            'payments-amazon.com/OffAmazonPayments/' +
            (region.toLowerCase() + "/") +
            (testMode ? 'sandbox/' : '') +
            (region.toLowerCase() !== 'us' ? 'lpa/' : '') +
            ("js/Widgets.js?sellerId=" + merchantId);
        this._configureWidget(method, onPaymentReady);
        return this._scriptLoader.loadScript(url);
    };
    AmazonPayScriptLoader.prototype._configureWidget = function (method, onPaymentReady) {
        var _this = this;
        var onLoginReady = function () {
            if (!_this._window.amazon) {
                return;
            }
            _this._window.amazon.Login.setClientId(method.initializationData.clientId);
            _this._window.amazon.Login.setUseCookie(true);
        };
        if (this._window.amazon && this._window.amazon.Login) {
            onLoginReady();
        }
        else {
            this._window.onAmazonLoginReady = onLoginReady;
        }
        if (this._window.OffAmazonPayments && onPaymentReady) {
            onPaymentReady();
        }
        else {
            this._window.onAmazonPaymentsReady = onPaymentReady;
        }
    };
    return AmazonPayScriptLoader;
}());
exports.default = AmazonPayScriptLoader;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var klarna_script_loader_1 = __webpack_require__(160);
exports.KlarnaScriptLoader = klarna_script_loader_1.default;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SDK_URL = '//credit.klarnacdn.net/lib/v1/api.js';
var KlarnaScriptLoader = /** @class */ (function () {
    function KlarnaScriptLoader(_scriptLoader) {
        this._scriptLoader = _scriptLoader;
    }
    KlarnaScriptLoader.prototype.load = function () {
        return this._scriptLoader.loadScript(SDK_URL)
            .then(function () { return window.Klarna.Credit; });
    };
    return KlarnaScriptLoader;
}());
exports.default = KlarnaScriptLoader;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var wepay_risk_client_1 = __webpack_require__(162);
exports.WepayRiskClient = wepay_risk_client_1.default;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(2);
var SCRIPT_SRC = '//static.wepay.com/min/js/risk.1.latest.js';
var WepayRiskClient = /** @class */ (function () {
    function WepayRiskClient(_scriptLoader) {
        this._scriptLoader = _scriptLoader;
    }
    WepayRiskClient.prototype.initialize = function () {
        var _this = this;
        return this._scriptLoader
            .loadScript(SCRIPT_SRC)
            .then(function () { return _this._riskClient = window.WePay.risk; })
            .then(function () { return _this; });
    };
    WepayRiskClient.prototype.getRiskToken = function () {
        if (!this._riskClient) {
            throw new errors_1.NotInitializedError();
        }
        this._riskClient.generate_risk_token();
        return this._riskClient.get_risk_token();
    };
    return WepayRiskClient;
}());
exports.default = WepayRiskClient;


/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/concat");

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/defer");

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HOSTED = 'PAYMENT_TYPE_HOSTED';
exports.OFFLINE = 'PAYMENT_TYPE_OFFLINE';


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var afterpay_payment_strategy_1 = __webpack_require__(167);
exports.AfterpayPaymentStrategy = afterpay_payment_strategy_1.default;
var amazon_pay_payment_strategy_1 = __webpack_require__(172);
exports.AmazonPayPaymentStrategy = amazon_pay_payment_strategy_1.default;
var credit_card_payment_strategy_1 = __webpack_require__(66);
exports.CreditCardPaymentStrategy = credit_card_payment_strategy_1.default;
var klarna_payment_strategy_1 = __webpack_require__(174);
exports.KlarnaPaymentStrategy = klarna_payment_strategy_1.default;
var legacy_payment_strategy_1 = __webpack_require__(175);
exports.LegacyPaymentStrategy = legacy_payment_strategy_1.default;
var no_payment_data_required_strategy_1 = __webpack_require__(176);
exports.NoPaymentDataRequiredPaymentStrategy = no_payment_data_required_strategy_1.default;
var offline_payment_strategy_1 = __webpack_require__(177);
exports.OfflinePaymentStrategy = offline_payment_strategy_1.default;
var offsite_payment_strategy_1 = __webpack_require__(178);
exports.OffsitePaymentStrategy = offsite_payment_strategy_1.default;
var payment_strategy_1 = __webpack_require__(6);
exports.PaymentStrategy = payment_strategy_1.default;
var paypal_express_payment_strategy_1 = __webpack_require__(179);
exports.PaypalExpressPaymentStrategy = paypal_express_payment_strategy_1.default;
var paypal_pro_payment_strategy_1 = __webpack_require__(180);
exports.PaypalProPaymentStrategy = paypal_pro_payment_strategy_1.default;
var sage_pay_payment_strategy_1 = __webpack_require__(181);
exports.SagePayPaymentStrategy = sage_pay_payment_strategy_1.default;
var wepay_payment_strategy_1 = __webpack_require__(182);
exports.WepayPaymentStrategy = wepay_payment_strategy_1.default;
var braintree_1 = __webpack_require__(40);
exports.BraintreeCreditCardPaymentStrategy = braintree_1.BraintreeCreditCardPaymentStrategy;
exports.BraintreePaypalPaymentStrategy = braintree_1.BraintreePaypalPaymentStrategy;
exports.BraintreeVisaCheckoutPaymentStrategy = braintree_1.BraintreeVisaCheckoutPaymentStrategy;
var square_1 = __webpack_require__(72);
exports.SquarePaymentStrategy = square_1.SquarePaymentStrategy;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var errors_2 = __webpack_require__(9);
var payment_strategy_1 = __webpack_require__(6);
var AfterpayPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(AfterpayPaymentStrategy, _super);
    function AfterpayPaymentStrategy(store, _cartActionCreator, _orderActionCreator, _paymentActionCreator, _paymentMethodActionCreator, _remoteCheckoutActionCreator, _afterpayScriptLoader) {
        var _this = _super.call(this, store) || this;
        _this._cartActionCreator = _cartActionCreator;
        _this._orderActionCreator = _orderActionCreator;
        _this._paymentActionCreator = _paymentActionCreator;
        _this._paymentMethodActionCreator = _paymentMethodActionCreator;
        _this._remoteCheckoutActionCreator = _remoteCheckoutActionCreator;
        _this._afterpayScriptLoader = _afterpayScriptLoader;
        return _this;
    }
    AfterpayPaymentStrategy.prototype.initialize = function (options) {
        var _this = this;
        if (this._isInitialized) {
            return _super.prototype.initialize.call(this, options);
        }
        var state = this._store.getState();
        var paymentMethod = state.paymentMethods.getPaymentMethod(options.methodId, options.gatewayId);
        var config = state.config.getStoreConfig();
        var storeCountryName = config ? config.storeProfile.storeCountry : '';
        if (!paymentMethod) {
            throw new errors_1.MissingDataError("Unable to initialize because \"paymentMethod (" + options.methodId + ")\" data is missing.");
        }
        return this._afterpayScriptLoader.load(paymentMethod, this._mapCountryToISO2(storeCountryName))
            .then(function (afterpaySdk) {
            _this._afterpaySdk = afterpaySdk;
        })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    AfterpayPaymentStrategy.prototype.deinitialize = function (options) {
        if (!this._isInitialized) {
            return _super.prototype.deinitialize.call(this, options);
        }
        if (this._afterpaySdk) {
            this._afterpaySdk = undefined;
        }
        return _super.prototype.deinitialize.call(this, options);
    };
    AfterpayPaymentStrategy.prototype.execute = function (payload, options) {
        var _this = this;
        var paymentId = payload.payment && payload.payment.gatewayId;
        if (!paymentId) {
            throw new errors_2.PaymentArgumentInvalidError(['payment.gatewayId']);
        }
        var useStoreCredit = !!payload.useStoreCredit;
        var customerMessage = payload.customerMessage ? payload.customerMessage : '';
        var state = this._store.getState();
        var config = state.config.getStoreConfig();
        var storeCountryName = config ? config.storeProfile.storeCountry : '';
        return this._store.dispatch(this._remoteCheckoutActionCreator.initializePayment(paymentId, { useStoreCredit: useStoreCredit, customerMessage: customerMessage }))
            .then(function (state) { return _this._store.dispatch(_this._cartActionCreator.verifyCart(state.cart.getCart(), options)); })
            .then(function () { return _this._store.dispatch(_this._paymentMethodActionCreator.loadPaymentMethod(paymentId, options)); })
            .then(function (state) { return _this._displayModal(storeCountryName, state.paymentMethods.getPaymentMethod(paymentId)); })
            // Afterpay will handle the rest of the flow so return a promise that doesn't really resolve
            .then(function () { return new Promise(function () { }); });
    };
    AfterpayPaymentStrategy.prototype.finalize = function (options) {
        var _this = this;
        var state = this._store.getState();
        var customer = state.customer.getCustomer();
        var order = state.order.getOrder();
        var config = state.config.getContextConfig();
        if (!order || !order.payment.id || !config || !config.payment.token || !customer) {
            throw new errors_1.MissingDataError('Unable to finalize order because "order", "customer" or "token" data is missing.');
        }
        var orderPayload = customer.remote ?
            { useStoreCredit: customer.remote.useStoreCredit, customerMessage: customer.remote.customerMessage } :
            {};
        var paymentPayload = {
            methodId: order.payment.id,
            paymentData: { nonce: config.payment.token },
        };
        return this._store.dispatch(this._orderActionCreator.submitOrder(orderPayload, options))
            .then(function () {
            return _this._store.dispatch(_this._paymentActionCreator.submitPayment(paymentPayload));
        });
    };
    AfterpayPaymentStrategy.prototype._displayModal = function (countryName, paymentMethod) {
        if (!this._afterpaySdk || !paymentMethod || !paymentMethod.clientToken) {
            throw new errors_1.NotInitializedError('Unable to display payment modal because payment method has not been initialized.');
        }
        this._afterpaySdk.initialize({ countryCode: this._mapCountryToISO2(countryName) });
        this._afterpaySdk.display({ token: paymentMethod.clientToken });
    };
    AfterpayPaymentStrategy.prototype._mapCountryToISO2 = function (countryName) {
        switch (countryName) {
            case 'Australia':
                return 'AU';
            case 'New Zealand':
                return 'NZ';
            case 'United States':
                return 'US';
            default:
                return 'AU';
        }
    };
    return AfterpayPaymentStrategy;
}(payment_strategy_1.default));
exports.default = AfterpayPaymentStrategy;


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var PaymentArgumentInvalidError = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentArgumentInvalidError, _super);
    function PaymentArgumentInvalidError(invalidFields) {
        var _this = this;
        var message = 'Unable to submit payment for the order because the payload is invalid.';
        if (invalidFields) {
            message = message + " Make sure the following fields are provided correctly: " + invalidFields.join(', ') + ".";
        }
        _this = _super.call(this, message) || this;
        return _this;
    }
    return PaymentArgumentInvalidError;
}(errors_1.InvalidArgumentError));
exports.default = PaymentArgumentInvalidError;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var PaymentMethodInvalidError = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentMethodInvalidError, _super);
    function PaymentMethodInvalidError(response) {
        var _this = _super.call(this, response, 'There is a problem processing your payment. Please try again later.') || this;
        _this.type = 'payment_method_invalid';
        return _this;
    }
    return PaymentMethodInvalidError;
}(errors_1.RequestError));
exports.default = PaymentMethodInvalidError;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var PaymentMethodCancelledError = /** @class */ (function (_super) {
    tslib_1.__extends(PaymentMethodCancelledError, _super);
    function PaymentMethodCancelledError() {
        var _this = _super.call(this, 'Payment process was cancelled.') || this;
        _this.type = 'payment_cancelled';
        return _this;
    }
    return PaymentMethodCancelledError;
}(errors_1.StandardError));
exports.default = PaymentMethodCancelledError;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var OrderFinalizationNotRequiredError = /** @class */ (function (_super) {
    tslib_1.__extends(OrderFinalizationNotRequiredError, _super);
    function OrderFinalizationNotRequiredError() {
        var _this = _super.call(this, 'The current order does not need to be finalized at this stage.') || this;
        _this.type = 'order_finalization_not_required';
        return _this;
    }
    return OrderFinalizationNotRequiredError;
}(errors_1.StandardError));
exports.default = OrderFinalizationNotRequiredError;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var address_1 = __webpack_require__(37);
var errors_1 = __webpack_require__(2);
var errors_2 = __webpack_require__(65);
var payment_strategy_1 = __webpack_require__(6);
var AmazonPayPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(AmazonPayPaymentStrategy, _super);
    function AmazonPayPaymentStrategy(store, _orderActionCreator, _billingAddressActionCreator, _remoteCheckoutActionCreator, _scriptLoader) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._billingAddressActionCreator = _billingAddressActionCreator;
        _this._remoteCheckoutActionCreator = _remoteCheckoutActionCreator;
        _this._scriptLoader = _scriptLoader;
        _this._window = window;
        return _this;
    }
    AmazonPayPaymentStrategy.prototype.initialize = function (options) {
        var _this = this;
        if (this._isInitialized) {
            return _super.prototype.initialize.call(this, options);
        }
        var amazonOptions = options.amazon, methodId = options.methodId;
        var state = this._store.getState();
        var paymentMethod = state.paymentMethods.getPaymentMethod(methodId);
        if (!amazonOptions) {
            throw new errors_1.InvalidArgumentError('Unable to initialize payment because "options.amazon" argument is not provided.');
        }
        if (!paymentMethod) {
            throw new errors_1.MissingDataError("Unable to initialize because \"paymentMethod (" + options.methodId + ")\" data is missing.");
        }
        this._walletOptions = amazonOptions;
        this._paymentMethod = paymentMethod;
        return new Promise(function (resolve, reject) {
            var onReady = function () {
                _this._createWallet(amazonOptions)
                    .then(resolve)
                    .catch(reject);
            };
            _this._scriptLoader.loadWidget(paymentMethod, onReady)
                .catch(reject);
        })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    AmazonPayPaymentStrategy.prototype.deinitialize = function (options) {
        if (!this._isInitialized) {
            return _super.prototype.deinitialize.call(this, options);
        }
        this._walletOptions = undefined;
        return _super.prototype.deinitialize.call(this, options);
    };
    AmazonPayPaymentStrategy.prototype.execute = function (payload, options) {
        var _this = this;
        var referenceId = this._getOrderReferenceId();
        if (!referenceId) {
            throw new errors_1.NotInitializedError('Unable to submit payment without order reference ID');
        }
        if (!payload.payment) {
            throw new errors_1.InvalidArgumentError('Unable to proceed because "payload.payment.methodId" argument is not provided.');
        }
        var _a = payload.payment, paymentData = _a.paymentData, paymentPayload = tslib_1.__rest(_a, ["paymentData"]), _b = payload.useStoreCredit, useStoreCredit = _b === void 0 ? false : _b;
        return this._store.dispatch(this._remoteCheckoutActionCreator.initializePayment(paymentPayload.methodId, { referenceId: referenceId, useStoreCredit: useStoreCredit }))
            .then(function () { return _this._store.dispatch(_this._orderActionCreator.submitOrder(tslib_1.__assign({}, payload, { payment: paymentPayload }), options)); })
            .catch(function (error) {
            if (error instanceof errors_1.RequestError && error.body.type === 'provider_widget_error' && _this._walletOptions) {
                return _this._createWallet(_this._walletOptions)
                    .then(function () { return Promise.reject(error); });
            }
            return Promise.reject(error);
        });
    };
    AmazonPayPaymentStrategy.prototype._getMerchantId = function () {
        return this._paymentMethod && this._paymentMethod.config.merchantId;
    };
    AmazonPayPaymentStrategy.prototype._getOrderReferenceId = function () {
        var state = this._store.getState();
        var meta = state.remoteCheckout.getCheckoutMeta() || {};
        return meta && meta.amazon && meta.amazon.referenceId;
    };
    AmazonPayPaymentStrategy.prototype._createWallet = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var container = options.container, _a = options.onError, onError = _a === void 0 ? lodash_1.noop : _a, _b = options.onPaymentSelect, onPaymentSelect = _b === void 0 ? lodash_1.noop : _b, _c = options.onReady, onReady = _c === void 0 ? lodash_1.noop : _c;
            var referenceId = _this._getOrderReferenceId();
            var merchantId = _this._getMerchantId();
            if (!merchantId || !document.getElementById(container) || !_this._window.OffAmazonPayments) {
                return reject(new errors_1.NotInitializedError('Unable to create AmazonPay Wallet widget without valid merchant ID or container ID.'));
            }
            var walletOptions = {
                design: { designMode: 'responsive' },
                scope: 'payments:billing_address payments:shipping_address payments:widget profile',
                sellerId: merchantId,
                onError: function (error) {
                    reject(error);
                    onError(error);
                },
                onPaymentSelect: function (orderReference) {
                    _this._synchronizeBillingAddress()
                        .then(function () { return onPaymentSelect(orderReference); })
                        .catch(onError);
                },
                onReady: function (orderReference) {
                    resolve();
                    onReady(orderReference);
                },
            };
            if (referenceId) {
                walletOptions.amazonOrderReferenceId = referenceId;
            }
            else {
                walletOptions.onOrderReferenceCreate = function (orderReference) {
                    if (!_this._paymentMethod) {
                        throw new errors_1.NotInitializedError('Unable to create Amazon wallet because payment method has not been initialized.');
                    }
                    _this._store.dispatch(_this._remoteCheckoutActionCreator.setCheckoutMeta(_this._paymentMethod.id, {
                        referenceId: orderReference.getAmazonOrderReferenceId(),
                    }));
                };
            }
            var widget = new _this._window.OffAmazonPayments.Widgets.Wallet(walletOptions);
            widget.bind(container);
            return widget;
        });
    };
    AmazonPayPaymentStrategy.prototype._synchronizeBillingAddress = function () {
        var _this = this;
        var referenceId = this._getOrderReferenceId();
        var methodId = this._paymentMethod && this._paymentMethod.id;
        if (!methodId || !referenceId) {
            throw new errors_2.RemoteCheckoutSynchronizationError();
        }
        return this._store.dispatch(this._remoteCheckoutActionCreator.initializeBilling(methodId, { referenceId: referenceId }))
            .then(function (state) {
            var remoteCheckout = state.remoteCheckout.getCheckout();
            var address = state.billingAddress.getBillingAddress();
            if (remoteCheckout && remoteCheckout.billingAddress === false) {
                throw new errors_2.RemoteCheckoutSynchronizationError();
            }
            if (!remoteCheckout || !remoteCheckout.billingAddress || address_1.isAddressEqual(remoteCheckout.billingAddress, address || {})) {
                return _this._store.getState();
            }
            return _this._store.dispatch(_this._billingAddressActionCreator.updateAddress(remoteCheckout.billingAddress));
        });
    };
    return AmazonPayPaymentStrategy;
}(payment_strategy_1.default));
exports.default = AmazonPayPaymentStrategy;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var RemoteCheckoutSynchronizationError = /** @class */ (function (_super) {
    tslib_1.__extends(RemoteCheckoutSynchronizationError, _super);
    function RemoteCheckoutSynchronizationError(error) {
        var _this = _super.call(this, 'Unable to synchronize your checkout details with a third party provider. Please try again later.') || this;
        _this.error = error;
        _this.type = 'remote_checkout_synchronization';
        return _this;
    }
    return RemoteCheckoutSynchronizationError;
}(errors_1.StandardError));
exports.default = RemoteCheckoutSynchronizationError;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var payment_strategy_1 = __webpack_require__(6);
var KlarnaPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(KlarnaPaymentStrategy, _super);
    function KlarnaPaymentStrategy(store, _orderActionCreator, _paymentMethodActionCreator, _remoteCheckoutActionCreator, _klarnaScriptLoader) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._paymentMethodActionCreator = _paymentMethodActionCreator;
        _this._remoteCheckoutActionCreator = _remoteCheckoutActionCreator;
        _this._klarnaScriptLoader = _klarnaScriptLoader;
        return _this;
    }
    KlarnaPaymentStrategy.prototype.initialize = function (options) {
        var _this = this;
        return this._klarnaScriptLoader.load()
            .then(function (klarnaCredit) { _this._klarnaCredit = klarnaCredit; })
            .then(function () {
            _this._unsubscribe = _this._store.subscribe(function () { return _this._loadWidget(options); }, function (state) {
                var cart = state.cart.getCart();
                return cart && cart.grandTotal;
            });
            return _this._loadWidget(options);
        })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    KlarnaPaymentStrategy.prototype.deinitialize = function (options) {
        if (this._unsubscribe) {
            this._unsubscribe();
        }
        return _super.prototype.deinitialize.call(this, options);
    };
    KlarnaPaymentStrategy.prototype.execute = function (payload, options) {
        var _this = this;
        if (!payload.payment) {
            throw new errors_1.InvalidArgumentError('Unable to proceed because "payload.payment" argument is not provided.');
        }
        var _a = payload.payment, paymentData = _a.paymentData, paymentPayload = tslib_1.__rest(_a, ["paymentData"]);
        return this._authorize()
            .then(function (_a) {
            var authorizationToken = _a.authorization_token;
            return _this._store.dispatch(_this._remoteCheckoutActionCreator.initializePayment(paymentPayload.methodId, { authorizationToken: authorizationToken }));
        })
            .then(function () { return _this._store.dispatch(_this._orderActionCreator.submitOrder(tslib_1.__assign({}, payload, { payment: paymentPayload, 
            // Note: API currently doesn't support using Store Credit with Klarna.
            // To prevent deducting customer's store credit, set it as false.
            useStoreCredit: false }), options)); });
    };
    KlarnaPaymentStrategy.prototype._loadWidget = function (options) {
        var _this = this;
        if (!options.klarna) {
            throw new errors_1.InvalidArgumentError('Unable to load widget because "options.klarna" argument is not provided.');
        }
        var methodId = options.methodId, _a = options.klarna, container = _a.container, onLoad = _a.onLoad;
        return this._store.dispatch(this._paymentMethodActionCreator.loadPaymentMethod(methodId))
            .then(function (state) { return new Promise(function (resolve, reject) {
            var paymentMethod = state.paymentMethods.getPaymentMethod(methodId);
            if (!paymentMethod || !paymentMethod.clientToken) {
                throw new errors_1.MissingDataError('Unable to load payment widget because "paymentMethod.clientToken" field is missing.');
            }
            if (!_this._klarnaCredit) {
                throw new errors_1.NotInitializedError();
            }
            _this._klarnaCredit.init({ client_token: paymentMethod.clientToken });
            _this._klarnaCredit.load({ container: container }, function (response) {
                if (onLoad) {
                    onLoad(response);
                }
                if (!response.show_form) {
                    reject(response);
                }
                else {
                    resolve(response);
                }
            });
        }); });
    };
    KlarnaPaymentStrategy.prototype._authorize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this._klarnaCredit) {
                throw new errors_1.NotInitializedError();
            }
            _this._klarnaCredit.authorize({}, function (res) {
                if (!res.approved) {
                    reject(res);
                }
                else {
                    resolve(res);
                }
            });
        });
    };
    return KlarnaPaymentStrategy;
}(payment_strategy_1.default));
exports.default = KlarnaPaymentStrategy;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var payment_strategy_1 = __webpack_require__(6);
var LegacyPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(LegacyPaymentStrategy, _super);
    function LegacyPaymentStrategy(store, _orderActionCreator) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        return _this;
    }
    LegacyPaymentStrategy.prototype.execute = function (payload, options) {
        return this._store.dispatch(this._orderActionCreator.submitOrder(payload, options));
    };
    return LegacyPaymentStrategy;
}(payment_strategy_1.default));
exports.default = LegacyPaymentStrategy;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var payment_strategy_1 = __webpack_require__(6);
var NoPaymentDataRequiredPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(NoPaymentDataRequiredPaymentStrategy, _super);
    function NoPaymentDataRequiredPaymentStrategy(store, _orderActionCreator) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        return _this;
    }
    NoPaymentDataRequiredPaymentStrategy.prototype.execute = function (orderRequest, options) {
        return this._store.dispatch(this._orderActionCreator.submitOrder(lodash_1.omit(orderRequest, 'payment'), options));
    };
    return NoPaymentDataRequiredPaymentStrategy;
}(payment_strategy_1.default));
exports.default = NoPaymentDataRequiredPaymentStrategy;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var payment_strategy_1 = __webpack_require__(6);
var OfflinePaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(OfflinePaymentStrategy, _super);
    function OfflinePaymentStrategy(store, _orderActionCreator) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        return _this;
    }
    OfflinePaymentStrategy.prototype.execute = function (payload, options) {
        var action = this._orderActionCreator.submitOrder(tslib_1.__assign({}, payload, { payment: payload.payment ? { methodId: payload.payment.methodId } : undefined }), options);
        return this._store.dispatch(action);
    };
    return OfflinePaymentStrategy;
}(payment_strategy_1.default));
exports.default = OfflinePaymentStrategy;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var errors_2 = __webpack_require__(9);
var paymentStatusTypes = __webpack_require__(20);
var payment_strategy_1 = __webpack_require__(6);
var OffsitePaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(OffsitePaymentStrategy, _super);
    function OffsitePaymentStrategy(store, _orderActionCreator, _paymentActionCreator) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._paymentActionCreator = _paymentActionCreator;
        return _this;
    }
    OffsitePaymentStrategy.prototype.execute = function (payload, options) {
        var _this = this;
        var payment = payload.payment, order = tslib_1.__rest(payload, ["payment"]);
        var paymentData = payment && payment.paymentData;
        var orderPayload = payment && payment.gatewayId === 'adyen' ? payload : order;
        if (!payment || !paymentData) {
            throw new errors_2.PaymentArgumentInvalidError(['payment.paymentData']);
        }
        return this._store.dispatch(this._orderActionCreator.submitOrder(orderPayload, options))
            .then(function () {
            return _this._store.dispatch(_this._paymentActionCreator.initializeOffsitePayment(tslib_1.__assign({}, payment, { paymentData: paymentData })));
        });
    };
    OffsitePaymentStrategy.prototype.finalize = function (options) {
        var state = this._store.getState();
        var order = state.order.getOrder();
        if (!order) {
            throw new errors_1.MissingDataError('Unable to finalize order because "order" data is missing.');
        }
        var orderId = order.orderId, _a = order.payment, payment = _a === void 0 ? {} : _a;
        if (orderId &&
            payment.status === paymentStatusTypes.ACKNOWLEDGE ||
            payment.status === paymentStatusTypes.FINALIZE) {
            return this._store.dispatch(this._orderActionCreator.finalizeOrder(orderId, options));
        }
        return _super.prototype.finalize.call(this);
    };
    return OffsitePaymentStrategy;
}(payment_strategy_1.default));
exports.default = OffsitePaymentStrategy;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var paymentStatusTypes = __webpack_require__(20);
var payment_strategy_1 = __webpack_require__(6);
/**
 * @todo Convert this file into TypeScript properly
 */
var PaypalExpressPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(PaypalExpressPaymentStrategy, _super);
    function PaypalExpressPaymentStrategy(store, _orderActionCreator, _scriptLoader) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._scriptLoader = _scriptLoader;
        return _this;
    }
    PaypalExpressPaymentStrategy.prototype.initialize = function (options) {
        var _this = this;
        var state = this._store.getState();
        this._paymentMethod = state.paymentMethods.getPaymentMethod(options.methodId);
        if (!this._isInContextEnabled() || this._isInitialized) {
            return _super.prototype.initialize.call(this, options);
        }
        return this._scriptLoader.loadScript('//www.paypalobjects.com/api/checkout.min.js')
            .then(function () {
            _this._paypalSdk = window.paypal;
            if (!_this._paymentMethod || !_this._paymentMethod.config.merchantId) {
                throw new errors_1.MissingDataError('Unable to initialize because "paymentMethod.config.merchantId" field is missing.');
            }
            _this._paypalSdk.checkout.setup(_this._paymentMethod.config.merchantId, {
                button: 'paypal-button',
                environment: _this._paymentMethod.config.testMode ? 'sandbox' : 'production',
            });
        })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    PaypalExpressPaymentStrategy.prototype.deinitialize = function () {
        if (!this._isInitialized) {
            return _super.prototype.deinitialize.call(this);
        }
        if (this._isInContextEnabled() && this._paypalSdk) {
            this._paypalSdk.checkout.closeFlow();
            this._paypalSdk = null;
        }
        return _super.prototype.deinitialize.call(this);
    };
    PaypalExpressPaymentStrategy.prototype.execute = function (payload, options) {
        var _this = this;
        if (this._getPaymentStatus() === paymentStatusTypes.ACKNOWLEDGE ||
            this._getPaymentStatus() === paymentStatusTypes.FINALIZE) {
            return this._store.dispatch(this._orderActionCreator.submitOrder(payload, options));
        }
        if (!this._isInContextEnabled()) {
            return this._store.dispatch(this._orderActionCreator.submitOrder(payload, options))
                .then(function (state) {
                var order = state.order.getOrder();
                if (order && order.payment.redirectUrl) {
                    window.location.assign(order.payment.redirectUrl);
                }
                // We need to hold execution so the consumer does not redirect us somewhere else
                return new Promise(function () { });
            });
        }
        this._paypalSdk.checkout.initXO();
        return this._store.dispatch(this._orderActionCreator.submitOrder(payload, options))
            .then(function (state) {
            var order = state.order.getOrder();
            if (order && order.payment.redirectUrl) {
                _this._paypalSdk.checkout.startFlow(order.payment.redirectUrl);
            }
            // We need to hold execution so the consumer does not redirect us somewhere else
            return new Promise(function () { });
        })
            .catch(function (error) {
            _this._paypalSdk.checkout.closeFlow();
            return Promise.reject(error);
        });
    };
    PaypalExpressPaymentStrategy.prototype.finalize = function (options) {
        var state = this._store.getState();
        var order = state.order.getOrder();
        if (!order) {
            throw new errors_1.MissingDataError('Unable to finalize order because "order" data is missing.');
        }
        if (order.orderId &&
            this._getPaymentStatus() === paymentStatusTypes.ACKNOWLEDGE ||
            this._getPaymentStatus() === paymentStatusTypes.FINALIZE) {
            return this._store.dispatch(this._orderActionCreator.finalizeOrder(order.orderId, options));
        }
        return _super.prototype.finalize.call(this);
    };
    PaypalExpressPaymentStrategy.prototype._getPaymentStatus = function () {
        var state = this._store.getState();
        var order = state.order.getOrder();
        if (!order) {
            throw new errors_1.MissingDataError('Unable to determine payment status because "order" data is missing.');
        }
        return order.payment && order.payment.status;
    };
    PaypalExpressPaymentStrategy.prototype._isInContextEnabled = function () {
        return !!(this._paymentMethod && this._paymentMethod.config.merchantId);
    };
    return PaypalExpressPaymentStrategy;
}(payment_strategy_1.default));
exports.default = PaypalExpressPaymentStrategy;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var errors_2 = __webpack_require__(9);
var paymentStatusTypes = __webpack_require__(20);
var payment_strategy_1 = __webpack_require__(6);
var PaypalProPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(PaypalProPaymentStrategy, _super);
    function PaypalProPaymentStrategy(store, _orderActionCreator, _paymentActionCreator) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._paymentActionCreator = _paymentActionCreator;
        return _this;
    }
    PaypalProPaymentStrategy.prototype.execute = function (payload, options) {
        var _this = this;
        if (this._isPaymentAcknowledged()) {
            return this._store.dispatch(this._orderActionCreator.submitOrder(tslib_1.__assign({}, payload, { payment: payload.payment ? { methodId: payload.payment.methodId } : undefined }), options));
        }
        var payment = payload.payment, order = tslib_1.__rest(payload, ["payment"]);
        var paymentData = payment && payment.paymentData;
        if (!payment || !paymentData) {
            throw new errors_2.PaymentArgumentInvalidError(['payment.paymentData']);
        }
        return this._store.dispatch(this._orderActionCreator.submitOrder(order, options))
            .then(function () {
            return _this._store.dispatch(_this._paymentActionCreator.submitPayment(tslib_1.__assign({}, payment, { paymentData: paymentData })));
        });
    };
    PaypalProPaymentStrategy.prototype._isPaymentAcknowledged = function () {
        var state = this._store.getState();
        var order = state.order.getOrder();
        if (!order) {
            throw new errors_1.MissingDataError('Unable to determine payment status because "order" data is missing.');
        }
        return order.payment && order.payment.status === paymentStatusTypes.ACKNOWLEDGE;
    };
    return PaypalProPaymentStrategy;
}(payment_strategy_1.default));
exports.default = PaypalProPaymentStrategy;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var errors_1 = __webpack_require__(2);
var errors_2 = __webpack_require__(9);
var paymentStatusTypes = __webpack_require__(20);
var payment_strategy_1 = __webpack_require__(6);
var SagePayPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(SagePayPaymentStrategy, _super);
    function SagePayPaymentStrategy(store, _orderActionCreator, _paymentActionCreator, _formPoster) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._paymentActionCreator = _paymentActionCreator;
        _this._formPoster = _formPoster;
        return _this;
    }
    SagePayPaymentStrategy.prototype.execute = function (payload, options) {
        var _this = this;
        var payment = payload.payment, order = tslib_1.__rest(payload, ["payment"]);
        var paymentData = payment && payment.paymentData;
        if (!payment || !paymentData) {
            throw new errors_2.PaymentArgumentInvalidError(['payment.paymentData']);
        }
        return this._store.dispatch(this._orderActionCreator.submitOrder(order, options))
            .then(function () {
            return _this._store.dispatch(_this._paymentActionCreator.submitPayment(tslib_1.__assign({}, payment, { paymentData: paymentData })));
        })
            .catch(function (error) {
            if (!(error instanceof errors_1.RequestError) || !lodash_1.some(error.body.errors, { code: 'three_d_secure_required' })) {
                return Promise.reject(error);
            }
            return new Promise(function () {
                _this._formPoster.postForm(error.body.three_ds_result.acs_url, {
                    PaReq: error.body.three_ds_result.payer_auth_request,
                    TermUrl: error.body.three_ds_result.callback_url,
                    MD: error.body.three_ds_result.merchant_data,
                });
            });
        });
    };
    SagePayPaymentStrategy.prototype.finalize = function (options) {
        var state = this._store.getState();
        var order = state.order.getOrder();
        if (!order) {
            throw new errors_1.MissingDataError('Unable to finalize order because "order" data is missing.');
        }
        var orderId = order.orderId, _a = order.payment, payment = _a === void 0 ? {} : _a;
        if (orderId && payment.status === paymentStatusTypes.FINALIZE) {
            return this._store.dispatch(this._orderActionCreator.finalizeOrder(orderId, options));
        }
        return _super.prototype.finalize.call(this);
    };
    return SagePayPaymentStrategy;
}(payment_strategy_1.default));
exports.default = SagePayPaymentStrategy;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var credit_card_payment_strategy_1 = __webpack_require__(66);
var WepayPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(WepayPaymentStrategy, _super);
    function WepayPaymentStrategy(store, orderActionCreator, paymentActionCreator, _wepayRiskClient) {
        var _this = _super.call(this, store, orderActionCreator, paymentActionCreator) || this;
        _this._wepayRiskClient = _wepayRiskClient;
        return _this;
    }
    WepayPaymentStrategy.prototype.initialize = function (options) {
        this._wepayRiskClient.initialize();
        return _super.prototype.initialize.call(this, options);
    };
    WepayPaymentStrategy.prototype.execute = function (payload, options) {
        var token = this._wepayRiskClient.getRiskToken();
        var payloadWithToken = lodash_1.merge({}, payload, {
            payment: {
                paymentData: {
                    extraData: {
                        riskToken: token,
                    },
                },
            },
        });
        return _super.prototype.execute.call(this, payloadWithToken, options);
    };
    return WepayPaymentStrategy;
}(credit_card_payment_strategy_1.default));
exports.default = WepayPaymentStrategy;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var errors_2 = __webpack_require__(9);
var is_credit_card_like_1 = __webpack_require__(184);
var is_vaulted_instrument_1 = __webpack_require__(39);
var payment_strategy_1 = __webpack_require__(6);
var BraintreeCreditCardPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(BraintreeCreditCardPaymentStrategy, _super);
    function BraintreeCreditCardPaymentStrategy(store, _orderActionCreator, _paymentActionCreator, _paymentMethodActionCreator, _braintreePaymentProcessor) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._paymentActionCreator = _paymentActionCreator;
        _this._paymentMethodActionCreator = _paymentMethodActionCreator;
        _this._braintreePaymentProcessor = _braintreePaymentProcessor;
        return _this;
    }
    BraintreeCreditCardPaymentStrategy.prototype.initialize = function (options) {
        var _this = this;
        return this._store.dispatch(this._paymentMethodActionCreator.loadPaymentMethod(options.methodId))
            .then(function (state) {
            var paymentMethod = state.paymentMethods.getPaymentMethod(options.methodId);
            if (!paymentMethod || !paymentMethod.clientToken) {
                throw new errors_1.MissingDataError('Unable to initialize because "paymentMethod.clientToken" field is missing.');
            }
            _this._braintreePaymentProcessor.initialize(paymentMethod.clientToken, options.braintree);
            _this._is3dsEnabled = paymentMethod.config.is3dsEnabled;
            return _super.prototype.initialize.call(_this, options);
        })
            .catch(function (error) { return _this._handleError(error); });
    };
    BraintreeCreditCardPaymentStrategy.prototype.execute = function (orderRequest, options) {
        var _this = this;
        var payment = orderRequest.payment, order = tslib_1.__rest(orderRequest, ["payment"]);
        if (!payment) {
            throw new errors_2.PaymentArgumentInvalidError(['payment']);
        }
        return this._store.dispatch(this._orderActionCreator.submitOrder(order, options))
            .then(function (state) {
            return state.order.isPaymentDataRequired(order.useStoreCredit) && payment ?
                _this._preparePaymentData(payment) :
                Promise.resolve(payment);
        })
            .then(function (payment) {
            return _this._store.dispatch(_this._paymentActionCreator.submitPayment(payment));
        })
            .catch(function (error) { return _this._handleError(error); });
    };
    BraintreeCreditCardPaymentStrategy.prototype.deinitialize = function (options) {
        var _this = this;
        return this._braintreePaymentProcessor.deinitialize()
            .then(function () { return _super.prototype.deinitialize.call(_this, options); });
    };
    BraintreeCreditCardPaymentStrategy.prototype._handleError = function (error) {
        if (error.name === 'BraintreeError') {
            throw new errors_1.StandardError(error.message);
        }
        throw error;
    };
    BraintreeCreditCardPaymentStrategy.prototype._isUsingVaulting = function (paymentData) {
        if (is_credit_card_like_1.default(paymentData)) {
            return Boolean(paymentData.shouldSaveInstrument);
        }
        return is_vaulted_instrument_1.default(paymentData);
    };
    BraintreeCreditCardPaymentStrategy.prototype._preparePaymentData = function (payment) {
        var paymentData = payment.paymentData;
        var state = this._store.getState();
        if (paymentData && this._isUsingVaulting(paymentData)) {
            return Promise.resolve(payment);
        }
        var cart = state.cart.getCart();
        var billingAddress = state.billingAddress.getBillingAddress();
        if (!cart || !billingAddress) {
            throw new errors_1.MissingDataError('Unable to prepare payment data because "cart" and "billingAddress" data is missing.');
        }
        var tokenizedCard = this._is3dsEnabled ?
            this._braintreePaymentProcessor.verifyCard(payment, billingAddress, cart.grandTotal.amount) :
            this._braintreePaymentProcessor.tokenizeCard(payment, billingAddress);
        return this._braintreePaymentProcessor.appendSessionId(tokenizedCard)
            .then(function (paymentData) { return (tslib_1.__assign({}, payment, { paymentData: paymentData })); });
    };
    return BraintreeCreditCardPaymentStrategy;
}(payment_strategy_1.default));
exports.default = BraintreeCreditCardPaymentStrategy;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var is_vaulted_instrument_1 = __webpack_require__(39);
function isCreditCardLike(instrument) {
    var card = instrument;
    return !is_vaulted_instrument_1.default(card) &&
        typeof card.ccName === 'string' &&
        typeof card.ccNumber === 'string' &&
        typeof card.ccType === 'string' &&
        typeof card.ccExpiry === 'object' &&
        typeof card.ccExpiry.month === 'string' &&
        typeof card.ccExpiry.year === 'string';
}
exports.default = isCreditCardLike;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var errors_2 = __webpack_require__(9);
var payment_strategy_1 = __webpack_require__(6);
var BraintreePaypalPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(BraintreePaypalPaymentStrategy, _super);
    function BraintreePaypalPaymentStrategy(store, _orderActionCreator, _paymentActionCreator, _paymentMethodActionCreator, _braintreePaymentProcessor, _credit) {
        if (_credit === void 0) { _credit = false; }
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._paymentActionCreator = _paymentActionCreator;
        _this._paymentMethodActionCreator = _paymentMethodActionCreator;
        _this._braintreePaymentProcessor = _braintreePaymentProcessor;
        _this._credit = _credit;
        return _this;
    }
    BraintreePaypalPaymentStrategy.prototype.initialize = function (options) {
        var _this = this;
        var braintreeOptions = options.braintree, methodId = options.methodId;
        this._paymentMethod = this._store.getState().paymentMethods.getPaymentMethod(methodId);
        if (this._paymentMethod && this._paymentMethod.nonce) {
            return _super.prototype.initialize.call(this, options);
        }
        return this._store.dispatch(this._paymentMethodActionCreator.loadPaymentMethod(methodId))
            .then(function (state) {
            _this._paymentMethod = state.paymentMethods.getPaymentMethod(methodId);
            if (!_this._paymentMethod || !_this._paymentMethod.clientToken) {
                throw new errors_1.MissingDataError('Unable to initialize because "paymentMethod.clientToken" field is missing.');
            }
            _this._braintreePaymentProcessor.initialize(_this._paymentMethod.clientToken, braintreeOptions);
            return _this._braintreePaymentProcessor.preloadPaypal();
        })
            .then(function () { return _super.prototype.initialize.call(_this, options); })
            .catch(function (error) { return _this._handleError(error); });
    };
    BraintreePaypalPaymentStrategy.prototype.execute = function (orderRequest, options) {
        var _this = this;
        var payment = orderRequest.payment, order = tslib_1.__rest(orderRequest, ["payment"]);
        if (!payment) {
            throw new errors_2.PaymentArgumentInvalidError(['payment']);
        }
        return Promise.all([
            payment ? this._preparePaymentData(payment) : Promise.resolve(payment),
            this._store.dispatch(this._orderActionCreator.submitOrder(order, options)),
        ])
            .then(function (_a) {
            var payment = _a[0];
            return _this._store.dispatch(_this._paymentActionCreator.submitPayment(payment));
        })
            .catch(function (error) { return _this._handleError(error); });
    };
    BraintreePaypalPaymentStrategy.prototype.deinitialize = function (options) {
        var _this = this;
        return this._braintreePaymentProcessor.deinitialize()
            .then(function () { return _super.prototype.deinitialize.call(_this, options); });
    };
    BraintreePaypalPaymentStrategy.prototype._handleError = function (error) {
        if (error.name === 'BraintreeError') {
            throw new errors_1.StandardError(error.message);
        }
        throw error;
    };
    BraintreePaypalPaymentStrategy.prototype._preparePaymentData = function (payment) {
        var state = this._store.getState();
        var cart = state.cart.getCart();
        var config = state.config.getStoreConfig();
        if (!cart || !config || !this._paymentMethod) {
            throw new errors_1.MissingDataError("Unable to prepare payment data because \"cart\", \"config\" or \"paymentMethod (" + payment.methodId + ")\" data is missing.");
        }
        var amount = cart.grandTotal.amount;
        var currency = config.currency, storeLanguage = config.storeProfile.storeLanguage;
        var _a = this._paymentMethod, method = _a.method, nonce = _a.nonce;
        if (nonce) {
            return Promise.resolve(tslib_1.__assign({}, payment, { paymentData: { nonce: nonce, method: method } }));
        }
        var tokenizedCard = this._braintreePaymentProcessor
            .paypal(amount, storeLanguage, currency.code, this._credit);
        return this._braintreePaymentProcessor.appendSessionId(tokenizedCard)
            .then(function (paymentData) { return (tslib_1.__assign({}, payment, { paymentData: tslib_1.__assign({}, paymentData, { method: method }) })); });
    };
    return BraintreePaypalPaymentStrategy;
}(payment_strategy_1.default));
exports.default = BraintreePaypalPaymentStrategy;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toFormUrlEncoded(data) {
    return Object.keys(data)
        .filter(function (key) { return data[key] !== undefined; })
        .map(function (key) {
        var value = data[key];
        if (typeof value === 'string') {
            return key + "=" + encodeURIComponent(value);
        }
        return key + "=" + encodeURIComponent(JSON.stringify(value) || '');
    })
        .join('&');
}
exports.default = toFormUrlEncoded;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var braintree_payment_processor_1 = __webpack_require__(67);
var braintree_script_loader_1 = __webpack_require__(70);
var braintree_sdk_creator_1 = __webpack_require__(71);
function createBraintreePaymentProcessor(scriptLoader) {
    var braintreeScriptLoader = new braintree_script_loader_1.default(scriptLoader);
    var braintreeSDKCreator = new braintree_sdk_creator_1.default(braintreeScriptLoader);
    return new braintree_payment_processor_1.default(braintreeSDKCreator);
}
exports.default = createBraintreePaymentProcessor;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var request_sender_1 = __webpack_require__(10);
var braintree_script_loader_1 = __webpack_require__(70);
var braintree_sdk_creator_1 = __webpack_require__(71);
var braintree_visacheckout_payment_processor_1 = __webpack_require__(68);
function createBraintreeVisaCheckoutPaymentProcessor(scriptLoader) {
    var braintreeScriptLoader = new braintree_script_loader_1.default(scriptLoader);
    var braintreeSDKCreator = new braintree_sdk_creator_1.default(braintreeScriptLoader);
    var requestSender = request_sender_1.createRequestSender();
    return new braintree_visacheckout_payment_processor_1.default(braintreeSDKCreator, requestSender);
}
exports.default = createBraintreeVisaCheckoutPaymentProcessor;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(2);
var VisaCheckoutScriptLoader = /** @class */ (function () {
    function VisaCheckoutScriptLoader(_scriptLoader, _window) {
        if (_window === void 0) { _window = window; }
        this._scriptLoader = _scriptLoader;
        this._window = _window;
    }
    VisaCheckoutScriptLoader.prototype.load = function (testMode) {
        var _this = this;
        return this._scriptLoader
            .loadScript("//" + (testMode ? 'sandbox-' : '') + "assets.secure.checkout.visa.com/checkout-widget/resources/js/integration/v1/sdk.js")
            .then(function () {
            if (!_this._window.V) {
                throw new errors_1.StandardError();
            }
            return _this._window.V;
        });
    };
    return VisaCheckoutScriptLoader;
}());
exports.default = VisaCheckoutScriptLoader;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var payment_strategy_1 = __webpack_require__(6);
var BraintreeVisaCheckoutPaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(BraintreeVisaCheckoutPaymentStrategy, _super);
    function BraintreeVisaCheckoutPaymentStrategy(store, _paymentMethodActionCreator, _paymentStrategyActionCreator, _quoteActionCreator, _paymentActionCreator, _orderActionCreator, _braintreeVisaCheckoutPaymentProcessor, _visaCheckoutScriptLoader) {
        var _this = _super.call(this, store) || this;
        _this._paymentMethodActionCreator = _paymentMethodActionCreator;
        _this._paymentStrategyActionCreator = _paymentStrategyActionCreator;
        _this._quoteActionCreator = _quoteActionCreator;
        _this._paymentActionCreator = _paymentActionCreator;
        _this._orderActionCreator = _orderActionCreator;
        _this._braintreeVisaCheckoutPaymentProcessor = _braintreeVisaCheckoutPaymentProcessor;
        _this._visaCheckoutScriptLoader = _visaCheckoutScriptLoader;
        return _this;
    }
    BraintreeVisaCheckoutPaymentStrategy.prototype.initialize = function (options) {
        var _this = this;
        var visaCheckoutOptions = options.braintreevisacheckout, methodId = options.methodId;
        if (!visaCheckoutOptions) {
            throw new errors_1.InvalidArgumentError('Unable to initialize payment because "options.braintreevisacheckout" argument is not provided.');
        }
        return this._store.dispatch(this._paymentMethodActionCreator.loadPaymentMethod(methodId))
            .then(function (state) {
            _this._paymentMethod = state.paymentMethods.getPaymentMethod(methodId);
            var cart = state.cart.getCart();
            var storeConfig = state.config.getStoreConfig();
            if (!cart || !storeConfig || !_this._paymentMethod || !_this._paymentMethod.clientToken) {
                throw new errors_1.MissingDataError("Unable to prepare payment data because \"cart\", \"config\" or \"paymentMethod (Visa Checkout)\" data is missing.");
            }
            var _a = visaCheckoutOptions.onError, onError = _a === void 0 ? function () { } : _a, _b = visaCheckoutOptions.onPaymentSelect, onPaymentSelect = _b === void 0 ? function () { } : _b;
            var initOptions = {
                locale: storeConfig.storeProfile.storeLanguage,
                collectShipping: false,
                subtotal: cart.subtotal.amount,
                currencyCode: storeConfig.currency.code,
            };
            return Promise.all([
                _this._visaCheckoutScriptLoader.load(_this._paymentMethod.config.testMode),
                _this._braintreeVisaCheckoutPaymentProcessor.initialize(_this._paymentMethod.clientToken, initOptions),
            ])
                .then(function (_a) {
                var visaCheckout = _a[0], visaInitOptions = _a[1];
                visaCheckout.init(visaInitOptions);
                visaCheckout.on('payment.success', function (paymentSuccessPayload) {
                    return _this._paymentInstrumentSelected(paymentSuccessPayload)
                        .then(function () { return onPaymentSelect(); })
                        .catch(function (error) { return onError(error); });
                });
                visaCheckout.on('payment.error', function (payment, error) { return onError(error); });
            });
        })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    BraintreeVisaCheckoutPaymentStrategy.prototype.execute = function (orderRequest, options) {
        var _this = this;
        var payment = orderRequest.payment, order = tslib_1.__rest(orderRequest, ["payment"]);
        if (!payment) {
            throw new errors_1.InvalidArgumentError('Unable to submit payment because "payload.payment" argument is not provided.');
        }
        if (!this._paymentMethod || !this._paymentMethod.initializationData || !this._paymentMethod.initializationData.nonce) {
            throw new errors_1.MissingDataError("Unable to prepare payment data because \"paymentMethod (" + payment.methodId + ")\" data is missing.");
        }
        var nonce = this._paymentMethod.initializationData.nonce;
        return this._store.dispatch(this._orderActionCreator.submitOrder(order, options))
            .then(function () {
            return _this._store.dispatch(_this._paymentActionCreator.submitPayment(tslib_1.__assign({}, payment, { paymentData: { nonce: nonce } })));
        })
            .catch(function (error) { return _this._handleError(error); });
    };
    BraintreeVisaCheckoutPaymentStrategy.prototype.deinitialize = function (options) {
        var _this = this;
        return this._braintreeVisaCheckoutPaymentProcessor.deinitialize()
            .then(function () { return _super.prototype.deinitialize.call(_this, options); });
    };
    BraintreeVisaCheckoutPaymentStrategy.prototype._paymentInstrumentSelected = function (paymentSuccessPayload) {
        var _this = this;
        var state = this._store.getState();
        if (!this._paymentMethod) {
            throw new Error('Payment method not initialized');
        }
        var methodId = this._paymentMethod.id;
        return this._store.dispatch(this._paymentStrategyActionCreator.widgetInteraction(function () {
            return _this._braintreeVisaCheckoutPaymentProcessor.handleSuccess(paymentSuccessPayload, state.shippingAddress.getShippingAddress(), state.billingAddress.getBillingAddress())
                .then(function () { return Promise.all([
                _this._store.dispatch(_this._quoteActionCreator.loadQuote()),
                _this._store.dispatch(_this._paymentMethodActionCreator.loadPaymentMethod(methodId)),
            ]); });
        }, { methodId: methodId }), { queueId: 'widgetInteraction' });
    };
    BraintreeVisaCheckoutPaymentStrategy.prototype._handleError = function (error) {
        if (error.name === 'BraintreeError') {
            throw new errors_1.StandardError(error.message);
        }
        throw error;
    };
    return BraintreeVisaCheckoutPaymentStrategy;
}(payment_strategy_1.default));
exports.default = BraintreeVisaCheckoutPaymentStrategy;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var payment_strategy_1 = __webpack_require__(6);
var SquarePaymentStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(SquarePaymentStrategy, _super);
    function SquarePaymentStrategy(store, _orderActionCreator, _paymentActionCreator, _scriptLoader) {
        var _this = _super.call(this, store) || this;
        _this._orderActionCreator = _orderActionCreator;
        _this._paymentActionCreator = _paymentActionCreator;
        _this._scriptLoader = _scriptLoader;
        return _this;
    }
    SquarePaymentStrategy.prototype.initialize = function (options) {
        var _this = this;
        return this._scriptLoader.load()
            .then(function (createSquareForm) {
            return new Promise(function (resolve, reject) {
                _this._paymentForm = createSquareForm(_this._getFormOptions(options, { resolve: resolve, reject: reject }));
                _this._paymentForm.build();
            });
        })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    SquarePaymentStrategy.prototype.execute = function (payload, options) {
        var _this = this;
        var payment = payload.payment, order = tslib_1.__rest(payload, ["payment"]);
        if (!payment || !payment.methodId) {
            throw new errors_1.MissingDataError('Unable to submit payment because "payload.payment.methodId" argument is not provided.');
        }
        var paymentName = payment.methodId;
        return new Promise(function (resolve, reject) {
            if (!_this._paymentForm) {
                throw new errors_1.NotInitializedError('Unable to submit payment because the choosen payment method has not been initialized.');
            }
            if (_this._deferredRequestNonce) {
                _this._deferredRequestNonce.reject(new errors_1.TimeoutError());
            }
            _this._deferredRequestNonce = { resolve: resolve, reject: reject };
            _this._paymentForm.requestCardNonce();
        })
            .then(function (paymentData) {
            var paymentPayload = {
                methodId: paymentName,
                paymentData: paymentData,
            };
            return _this._store.dispatch(_this._orderActionCreator.submitOrder(order, options))
                .then(function () {
                return _this._store.dispatch(_this._paymentActionCreator.submitPayment(paymentPayload));
            });
        });
    };
    SquarePaymentStrategy.prototype._getFormOptions = function (options, deferred) {
        var _this = this;
        var squareOptions = options.square, methodId = options.methodId;
        var state = this._store.getState();
        var paymentMethod = state.paymentMethods.getPaymentMethod(methodId);
        if (!squareOptions || !paymentMethod) {
            throw new errors_1.InvalidArgumentError('Unable to proceed because "options.square" argument is not provided.');
        }
        return tslib_1.__assign({}, squareOptions, paymentMethod.initializationData, { callbacks: {
                paymentFormLoaded: function () {
                    deferred.resolve();
                    var state = _this._store.getState();
                    var billingAddress = state.billingAddress.getBillingAddress();
                    if (!_this._paymentForm) {
                        throw new errors_1.NotInitializedError();
                    }
                    if (billingAddress && billingAddress.postCode) {
                        _this._paymentForm.setPostalCode(billingAddress.postCode);
                    }
                },
                unsupportedBrowserDetected: function () {
                    deferred.reject(new errors_1.UnsupportedBrowserError());
                },
                cardNonceResponseReceived: function (errors, nonce) {
                    _this._cardNonceResponseReceived(errors, nonce);
                },
            } });
    };
    SquarePaymentStrategy.prototype._cardNonceResponseReceived = function (errors, nonce) {
        if (!this._deferredRequestNonce) {
            throw new errors_1.StandardError();
        }
        if (errors) {
            this._deferredRequestNonce.reject(errors);
        }
        else {
            this._deferredRequestNonce.resolve({ nonce: nonce });
        }
    };
    return SquarePaymentStrategy;
}(payment_strategy_1.default));
exports.default = SquarePaymentStrategy;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var SquareScriptLoader = /** @class */ (function () {
    function SquareScriptLoader(_scriptLoader) {
        this._scriptLoader = _scriptLoader;
    }
    SquareScriptLoader.prototype.load = function () {
        var scriptURI = '//js.squareup.com/v2/paymentform';
        return this._scriptLoader.loadScript(scriptURI)
            .then(function () { return function (options) {
            return new window.SqPaymentForm(options);
        }; });
    };
    return SquareScriptLoader;
}());
exports.default = SquareScriptLoader;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var utility_1 = __webpack_require__(8);
var actionTypes = __webpack_require__(61);
var DEFAULT_STATE = {
    errors: {},
    statuses: {},
};
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action
 */
function paymentMethodReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = paymentMethodReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case actionTypes.LOAD_PAYMENT_METHOD_SUCCEEDED:
            return utility_1.mergeOrPush(data || [], action.payload.paymentMethod, {
                id: action.payload.paymentMethod.id,
                gateway: action.payload.paymentMethod.gateway,
            });
        case actionTypes.LOAD_PAYMENT_METHODS_SUCCEEDED:
            return action.payload.paymentMethods || [];
        default:
            return data;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = DEFAULT_STATE.errors; }
    switch (action.type) {
        case actionTypes.LOAD_PAYMENT_METHODS_REQUESTED:
        case actionTypes.LOAD_PAYMENT_METHODS_SUCCEEDED:
            return tslib_1.__assign({}, errors, { loadError: undefined });
        case actionTypes.LOAD_PAYMENT_METHODS_FAILED:
            return tslib_1.__assign({}, errors, { loadError: action.payload });
        case actionTypes.LOAD_PAYMENT_METHOD_REQUESTED:
        case actionTypes.LOAD_PAYMENT_METHOD_SUCCEEDED:
            return tslib_1.__assign({}, errors, { loadMethodId: undefined, loadMethodError: undefined });
        case actionTypes.LOAD_PAYMENT_METHOD_FAILED:
            return tslib_1.__assign({}, errors, { loadMethodId: action.meta.methodId, loadMethodError: action.payload });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = DEFAULT_STATE.statuses; }
    switch (action.type) {
        case actionTypes.LOAD_PAYMENT_METHODS_REQUESTED:
            return tslib_1.__assign({}, statuses, { isLoading: true });
        case actionTypes.LOAD_PAYMENT_METHODS_SUCCEEDED:
        case actionTypes.LOAD_PAYMENT_METHODS_FAILED:
            return tslib_1.__assign({}, statuses, { isLoading: false });
        case actionTypes.LOAD_PAYMENT_METHOD_REQUESTED:
            return tslib_1.__assign({}, statuses, { isLoadingMethod: true, loadMethodId: action.meta.methodId });
        case actionTypes.LOAD_PAYMENT_METHOD_SUCCEEDED:
        case actionTypes.LOAD_PAYMENT_METHOD_FAILED:
            return tslib_1.__assign({}, statuses, { isLoadingMethod: false, loadMethodId: undefined });
        default:
            return statuses;
    }
}


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var PaymentMethodRequestSender = /** @class */ (function () {
    function PaymentMethodRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    PaymentMethodRequestSender.prototype.loadPaymentMethods = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/payments';
        return this._requestSender.get(url, { timeout: timeout });
    };
    PaymentMethodRequestSender.prototype.loadPaymentMethod = function (methodId, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = "/internalapi/v1/checkout/payments/" + methodId;
        return this._requestSender.get(url, { timeout: timeout });
    };
    return PaymentMethodRequestSender;
}());
exports.default = PaymentMethodRequestSender;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var selector_1 = __webpack_require__(3);
var PaymentMethodSelector = /** @class */ (function () {
    function PaymentMethodSelector(_paymentMethods, _order) {
        this._paymentMethods = _paymentMethods;
        this._order = _order;
    }
    PaymentMethodSelector.prototype.getPaymentMethods = function () {
        return this._paymentMethods.data;
    };
    PaymentMethodSelector.prototype.getPaymentMethod = function (methodId, gatewayId) {
        return gatewayId ?
            lodash_1.find(this._paymentMethods.data, { id: methodId, gateway: gatewayId }) :
            lodash_1.find(this._paymentMethods.data, { id: methodId });
    };
    PaymentMethodSelector.prototype.getSelectedPaymentMethod = function () {
        if (!this._order.data || !this._order.data.payment || !this._order.data.payment.id) {
            return;
        }
        return this.getPaymentMethod(this._order.data.payment.id, this._order.data.payment.gateway);
    };
    PaymentMethodSelector.prototype.getLoadError = function () {
        return this._paymentMethods.errors && this._paymentMethods.errors.loadError;
    };
    PaymentMethodSelector.prototype.getLoadMethodError = function (methodId) {
        if (methodId && this._paymentMethods.errors.loadMethodId !== methodId) {
            return;
        }
        return this._paymentMethods.errors.loadMethodError;
    };
    PaymentMethodSelector.prototype.isLoading = function () {
        return !!this._paymentMethods.statuses.isLoading;
    };
    PaymentMethodSelector.prototype.isLoadingMethod = function (methodId) {
        if (methodId && this._paymentMethods.statuses.loadMethodId !== methodId) {
            return false;
        }
        return !!this._paymentMethods.statuses.isLoadingMethod;
    };
    PaymentMethodSelector = tslib_1.__decorate([
        selector_1.selector
    ], PaymentMethodSelector);
    return PaymentMethodSelector;
}());
exports.default = PaymentMethodSelector;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var actionTypes = __webpack_require__(59);
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action
 */
function paymentReducer(state, action) {
    if (state === void 0) { state = {}; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
    });
    return reducer(state, action);
}
exports.default = paymentReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case actionTypes.SUBMIT_PAYMENT_SUCCEEDED:
            return action.payload;
        default:
            return data;
    }
}


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var errors_1 = __webpack_require__(2);
var errors_2 = __webpack_require__(64);
var payment_strategy_actions_1 = __webpack_require__(73);
var PaymentStrategyActionCreator = /** @class */ (function () {
    function PaymentStrategyActionCreator(_strategyRegistry) {
        this._strategyRegistry = _strategyRegistry;
    }
    PaymentStrategyActionCreator.prototype.execute = function (payload, options) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            var state = store.getState();
            var _a = payload.payment, payment = _a === void 0 ? {} : _a, useStoreCredit = payload.useStoreCredit;
            var meta = { methodId: payment.methodId };
            var strategy;
            if (state.order.isPaymentDataRequired(useStoreCredit)) {
                var method = state.paymentMethods.getPaymentMethod(payment.methodId, payment.gatewayId);
                if (!method) {
                    throw new errors_1.MissingDataError("Unable to submit payment because \"paymentMethod (" + payment.methodId + ")\" data is missing.");
                }
                strategy = _this._strategyRegistry.getByMethod(method);
            }
            else {
                strategy = _this._strategyRegistry.get('nopaymentdatarequired');
            }
            observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.ExecuteRequested, undefined, meta));
            strategy
                .execute(payload, tslib_1.__assign({}, options, { methodId: payment.methodId, gatewayId: payment.gatewayId }))
                .then(function () {
                observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.ExecuteSucceeded, undefined, meta));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(payment_strategy_actions_1.PaymentStrategyActionType.ExecuteFailed, error, meta));
            });
        }); };
    };
    PaymentStrategyActionCreator.prototype.finalize = function (options) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            var state = store.getState();
            var order = state.order.getOrder();
            if (!order) {
                throw new errors_1.MissingDataError('Unable to finalize order because "order" data is missing.');
            }
            if (!order.payment || !order.payment.id) {
                throw new errors_2.OrderFinalizationNotRequiredError();
            }
            var method = state.paymentMethods.getPaymentMethod(order.payment.id, order.payment.gateway);
            var meta = { methodId: order.payment.id };
            if (!method) {
                throw new errors_1.MissingDataError("Unable to finalize payment because \"paymentMethod (" + order.payment.id + ")\" data is missing.");
            }
            observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.FinalizeRequested, undefined, meta));
            _this._strategyRegistry.getByMethod(method)
                .finalize(tslib_1.__assign({}, options, { methodId: method.id, gatewayId: method.gateway }))
                .then(function () {
                observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.FinalizeSucceeded, undefined, meta));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(payment_strategy_actions_1.PaymentStrategyActionType.FinalizeFailed, error, meta));
            });
        }); };
    };
    PaymentStrategyActionCreator.prototype.initialize = function (options) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            var state = store.getState();
            var methodId = options.methodId, gatewayId = options.gatewayId;
            var method = state.paymentMethods.getPaymentMethod(methodId, gatewayId);
            if (!method) {
                throw new errors_1.MissingDataError("Unable to initialize because \"paymentMethod (" + methodId + ")\" data is missing.");
            }
            observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.InitializeRequested, undefined, { methodId: methodId }));
            _this._strategyRegistry.getByMethod(method)
                .initialize(tslib_1.__assign({}, options, { methodId: methodId, gatewayId: gatewayId }))
                .then(function () {
                observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.InitializeSucceeded, undefined, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(payment_strategy_actions_1.PaymentStrategyActionType.InitializeFailed, error, { methodId: methodId }));
            });
        }); };
    };
    PaymentStrategyActionCreator.prototype.deinitialize = function (options) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            var state = store.getState();
            var methodId = options.methodId, gatewayId = options.gatewayId;
            var method = state.paymentMethods.getPaymentMethod(methodId, gatewayId);
            if (!method) {
                throw new errors_1.MissingDataError("Unable to deinitialize because \"paymentMethod (" + methodId + ")\" data is missing.");
            }
            observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.DeinitializeRequested, undefined, { methodId: methodId }));
            _this._strategyRegistry.getByMethod(method)
                .deinitialize(tslib_1.__assign({}, options, { methodId: methodId, gatewayId: gatewayId }))
                .then(function () {
                observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.DeinitializeSucceeded, undefined, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(payment_strategy_actions_1.PaymentStrategyActionType.DeinitializeFailed, error, { methodId: methodId }));
            });
        }); };
    };
    PaymentStrategyActionCreator.prototype.widgetInteraction = function (method, options) {
        return function (store) { return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId;
            var meta = { methodId: methodId };
            observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.WidgetInteractionStarted, undefined, meta));
            method().then(function () {
                observer.next(data_store_1.createAction(payment_strategy_actions_1.PaymentStrategyActionType.WidgetInteractionFinished, undefined, meta));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(payment_strategy_actions_1.PaymentStrategyActionType.WidgetInteractionFailed, error, meta));
            });
        }); };
    };
    return PaymentStrategyActionCreator;
}());
exports.default = PaymentStrategyActionCreator;


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var payment_strategy_actions_1 = __webpack_require__(73);
var payment_strategy_state_1 = __webpack_require__(74);
function paymentStrategyReducer(state, action) {
    if (state === void 0) { state = payment_strategy_state_1.DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        errors: errorsReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = paymentStrategyReducer;
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = payment_strategy_state_1.DEFAULT_STATE.errors; }
    switch (action.type) {
        case payment_strategy_actions_1.PaymentStrategyActionType.InitializeRequested:
        case payment_strategy_actions_1.PaymentStrategyActionType.InitializeSucceeded:
            return tslib_1.__assign({}, errors, { initializeError: undefined, initializeMethodId: undefined });
        case payment_strategy_actions_1.PaymentStrategyActionType.InitializeFailed:
            return tslib_1.__assign({}, errors, { initializeError: action.payload, initializeMethodId: action.meta && action.meta.methodId });
        case payment_strategy_actions_1.PaymentStrategyActionType.DeinitializeRequested:
        case payment_strategy_actions_1.PaymentStrategyActionType.DeinitializeSucceeded:
            return tslib_1.__assign({}, errors, { deinitializeError: undefined, deinitializeMethodId: undefined });
        case payment_strategy_actions_1.PaymentStrategyActionType.DeinitializeFailed:
            return tslib_1.__assign({}, errors, { deinitializeError: action.payload, deinitializeMethodId: action.meta && action.meta.methodId });
        case payment_strategy_actions_1.PaymentStrategyActionType.ExecuteRequested:
        case payment_strategy_actions_1.PaymentStrategyActionType.ExecuteSucceeded:
            return tslib_1.__assign({}, errors, { executeError: undefined, executeMethodId: undefined });
        case payment_strategy_actions_1.PaymentStrategyActionType.ExecuteFailed:
            return tslib_1.__assign({}, errors, { executeError: action.payload, executeMethodId: action.meta && action.meta.methodId });
        case payment_strategy_actions_1.PaymentStrategyActionType.FinalizeRequested:
        case payment_strategy_actions_1.PaymentStrategyActionType.FinalizeSucceeded:
            return tslib_1.__assign({}, errors, { finalizeError: undefined, finalizeMethodId: undefined });
        case payment_strategy_actions_1.PaymentStrategyActionType.FinalizeFailed:
            return tslib_1.__assign({}, errors, { finalizeError: action.payload, finalizeMethodId: action.meta && action.meta.methodId });
        case payment_strategy_actions_1.PaymentStrategyActionType.WidgetInteractionStarted:
        case payment_strategy_actions_1.PaymentStrategyActionType.WidgetInteractionFinished:
            return tslib_1.__assign({}, errors, { widgetInteractionError: undefined, widgetInteractionMethodId: undefined });
        case payment_strategy_actions_1.PaymentStrategyActionType.WidgetInteractionFailed:
            return tslib_1.__assign({}, errors, { widgetInteractionError: action.payload, widgetInteractionMethodId: action.meta.methodId });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = payment_strategy_state_1.DEFAULT_STATE.statuses; }
    switch (action.type) {
        case payment_strategy_actions_1.PaymentStrategyActionType.InitializeRequested:
            return tslib_1.__assign({}, statuses, { isInitializing: true, initializeMethodId: action.meta && action.meta.methodId });
        case payment_strategy_actions_1.PaymentStrategyActionType.InitializeFailed:
        case payment_strategy_actions_1.PaymentStrategyActionType.InitializeSucceeded:
            return tslib_1.__assign({}, statuses, { isInitializing: false, initializeMethodId: undefined });
        case payment_strategy_actions_1.PaymentStrategyActionType.DeinitializeRequested:
            return tslib_1.__assign({}, statuses, { isDeinitializing: true, deinitializeMethodId: action.meta && action.meta.methodId });
        case payment_strategy_actions_1.PaymentStrategyActionType.DeinitializeFailed:
        case payment_strategy_actions_1.PaymentStrategyActionType.DeinitializeSucceeded:
            return tslib_1.__assign({}, statuses, { isDeinitializing: false, deinitializeMethodId: undefined });
        case payment_strategy_actions_1.PaymentStrategyActionType.ExecuteRequested:
            return tslib_1.__assign({}, statuses, { isExecuting: true, executeMethodId: action.meta && action.meta.methodId });
        case payment_strategy_actions_1.PaymentStrategyActionType.ExecuteFailed:
        case payment_strategy_actions_1.PaymentStrategyActionType.ExecuteSucceeded:
            return tslib_1.__assign({}, statuses, { isExecuting: false, executeMethodId: undefined });
        case payment_strategy_actions_1.PaymentStrategyActionType.FinalizeRequested:
            return tslib_1.__assign({}, statuses, { isFinalizing: true, finalizeMethodId: action.meta && action.meta.methodId });
        case payment_strategy_actions_1.PaymentStrategyActionType.FinalizeFailed:
        case payment_strategy_actions_1.PaymentStrategyActionType.FinalizeSucceeded:
            return tslib_1.__assign({}, statuses, { isFinalizing: false, finalizeMethodId: undefined });
        case payment_strategy_actions_1.PaymentStrategyActionType.WidgetInteractionStarted:
            return tslib_1.__assign({}, statuses, { isWidgetInteracting: true, widgetInteractionMethodId: action.meta.methodId });
        case payment_strategy_actions_1.PaymentStrategyActionType.WidgetInteractionFinished:
        case payment_strategy_actions_1.PaymentStrategyActionType.WidgetInteractionFailed:
            return tslib_1.__assign({}, statuses, { isWidgetInteracting: false, widgetInteractionMethodId: undefined });
        default:
            return statuses;
    }
}


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var payment_strategy_state_1 = __webpack_require__(74);
var PaymentStrategySelector = /** @class */ (function () {
    function PaymentStrategySelector(_paymentStrategies) {
        if (_paymentStrategies === void 0) { _paymentStrategies = payment_strategy_state_1.DEFAULT_STATE; }
        this._paymentStrategies = _paymentStrategies;
    }
    PaymentStrategySelector.prototype.getInitializeError = function (methodId) {
        if (methodId && this._paymentStrategies.errors.initializeMethodId !== methodId) {
            return;
        }
        return this._paymentStrategies.errors.initializeError;
    };
    PaymentStrategySelector.prototype.getExecuteError = function (methodId) {
        if (methodId && this._paymentStrategies.errors.executeMethodId !== methodId) {
            return;
        }
        return this._paymentStrategies.errors.executeError;
    };
    PaymentStrategySelector.prototype.getFinalizeError = function (methodId) {
        if (methodId && this._paymentStrategies.errors.finalizeMethodId !== methodId) {
            return;
        }
        return this._paymentStrategies.errors.finalizeError;
    };
    PaymentStrategySelector.prototype.getWidgetInteractingError = function (methodId) {
        if (methodId && this._paymentStrategies.errors.widgetInteractionMethodId !== methodId) {
            return;
        }
        return this._paymentStrategies.errors.widgetInteractionError;
    };
    PaymentStrategySelector.prototype.isInitializing = function (methodId) {
        if (methodId && this._paymentStrategies.statuses.initializeMethodId !== methodId) {
            return false;
        }
        return !!this._paymentStrategies.statuses.isInitializing;
    };
    PaymentStrategySelector.prototype.isExecuting = function (methodId) {
        if (methodId && this._paymentStrategies.statuses.executeMethodId !== methodId) {
            return false;
        }
        return !!this._paymentStrategies.statuses.isExecuting;
    };
    PaymentStrategySelector.prototype.isFinalizing = function (methodId) {
        if (methodId && this._paymentStrategies.statuses.finalizeMethodId !== methodId) {
            return false;
        }
        return !!this._paymentStrategies.statuses.isFinalizing;
    };
    PaymentStrategySelector.prototype.isWidgetInteracting = function (methodId) {
        if (methodId && this._paymentStrategies.statuses.widgetInteractionMethodId !== methodId) {
            return false;
        }
        return !!this._paymentStrategies.statuses.isWidgetInteracting;
    };
    PaymentStrategySelector = tslib_1.__decorate([
        selector_1.selector
    ], PaymentStrategySelector);
    return PaymentStrategySelector;
}());
exports.default = PaymentStrategySelector;


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chasepay_script_loader_1 = __webpack_require__(201);
exports.ChasePayScriptLoader = chasepay_script_loader_1.default;


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(2);
var ChasePayScriptLoader = /** @class */ (function () {
    function ChasePayScriptLoader(_scriptLoader, _window) {
        if (_window === void 0) { _window = window; }
        this._scriptLoader = _scriptLoader;
        this._window = _window;
    }
    ChasePayScriptLoader.prototype.load = function (testMode) {
        var _this = this;
        return this._scriptLoader
            .loadScript("//pwc" + (testMode ? 'psb' : '') + ".chase.com/pwc/checkout/js/v20170521/list.action?type=raw&applId=PWC&channelId=CWC&version=1")
            .then(function () {
            if (!_this._window.JPMC) {
                throw new errors_1.StandardError();
            }
            return _this._window.JPMC;
        });
    };
    return ChasePayScriptLoader;
}());
exports.default = ChasePayScriptLoader;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var amazon_pay_customer_strategy_1 = __webpack_require__(203);
exports.AmazonPayCustomerStrategy = amazon_pay_customer_strategy_1.default;
var customer_strategy_1 = __webpack_require__(22);
exports.CustomerStrategy = customer_strategy_1.default;
var default_customer_strategy_1 = __webpack_require__(204);
exports.DefaultCustomerStrategy = default_customer_strategy_1.default;
var braintree_visacheckout_customer_strategy_1 = __webpack_require__(205);
exports.BraintreeVisaCheckoutCustomerStrategy = braintree_visacheckout_customer_strategy_1.default;
var chasepay_customer_strategy_1 = __webpack_require__(206);
exports.ChasePayCustomerStrategy = chasepay_customer_strategy_1.default;


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var customer_strategy_1 = __webpack_require__(22);
var AmazonPayCustomerStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(AmazonPayCustomerStrategy, _super);
    function AmazonPayCustomerStrategy(store, _paymentMethodActionCreator, _remoteCheckoutActionCreator, _remoteCheckoutRequestSender, _scriptLoader) {
        var _this = _super.call(this, store) || this;
        _this._paymentMethodActionCreator = _paymentMethodActionCreator;
        _this._remoteCheckoutActionCreator = _remoteCheckoutActionCreator;
        _this._remoteCheckoutRequestSender = _remoteCheckoutRequestSender;
        _this._scriptLoader = _scriptLoader;
        _this._window = window;
        return _this;
    }
    AmazonPayCustomerStrategy.prototype.initialize = function (options) {
        var _this = this;
        if (this._isInitialized) {
            return _super.prototype.initialize.call(this, options);
        }
        var amazonOptions = options.amazon, methodId = options.methodId;
        if (!amazonOptions || !methodId) {
            throw new errors_1.InvalidArgumentError('Unable to proceed because "options.amazon" argument is not provided.');
        }
        return this._store.dispatch(this._paymentMethodActionCreator.loadPaymentMethod(methodId))
            .then(function (state) { return new Promise(function (resolve, reject) {
            _this._paymentMethod = state.paymentMethods.getPaymentMethod(methodId);
            if (!_this._paymentMethod) {
                throw new errors_1.MissingDataError("Unable to initialize because \"paymentMethod (" + methodId + ")\" data is missing.");
            }
            var _a = amazonOptions.onError, onError = _a === void 0 ? function () { } : _a;
            var onReady = function () {
                _this._createSignInButton(tslib_1.__assign({}, amazonOptions, { onError: function (error) {
                        reject(error);
                        onError(error);
                    } }));
                resolve();
            };
            _this._scriptLoader.loadWidget(_this._paymentMethod, onReady)
                .catch(reject);
        }); })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    AmazonPayCustomerStrategy.prototype.deinitialize = function (options) {
        if (!this._isInitialized) {
            return _super.prototype.deinitialize.call(this, options);
        }
        this._paymentMethod = undefined;
        return _super.prototype.deinitialize.call(this, options);
    };
    AmazonPayCustomerStrategy.prototype.signIn = function (credentials, options) {
        throw new errors_1.NotImplementedError('In order to sign in via AmazonPay, the shopper must click on "Login with Amazon" button.');
    };
    AmazonPayCustomerStrategy.prototype.signOut = function (options) {
        var customer = this._store.getState().customer;
        var _a = (customer.getCustomer() || {}).remote, remote = _a === void 0 ? { provider: undefined } : _a;
        if (!remote.provider) {
            return Promise.resolve(this._store.getState());
        }
        return this._store.dispatch(this._remoteCheckoutActionCreator.signOut(remote.provider, options));
    };
    AmazonPayCustomerStrategy.prototype._createSignInButton = function (options) {
        var _this = this;
        if (!this._paymentMethod || !this._paymentMethod.config.merchantId || !this._window.OffAmazonPayments) {
            throw new errors_1.MissingDataError('Unable to create sign-in button because "paymentMethod.config.merchantId" field is missing.');
        }
        var initializationData = this._paymentMethod.initializationData;
        return new this._window.OffAmazonPayments.Button(options.container, this._paymentMethod.config.merchantId, {
            color: options.color || 'Gold',
            size: options.size || 'small',
            type: 'PwA',
            useAmazonAddressBook: true,
            onError: options.onError,
            authorization: function () {
                _this._handleAuthorization(initializationData);
            },
        });
    };
    AmazonPayCustomerStrategy.prototype._handleAuthorization = function (options) {
        var _this = this;
        this._remoteCheckoutRequestSender.generateToken()
            .then(function (_a) {
            var body = _a.body;
            if (!_this._window.amazon) {
                throw new errors_1.NotInitializedError();
            }
            _this._window.amazon.Login.authorize({
                popup: false,
                scope: 'payments:shipping_address payments:billing_address payments:widget profile',
                state: "" + options.tokenPrefix + body.token,
            }, options.redirectUrl);
            _this._remoteCheckoutRequestSender.trackAuthorizationEvent();
        });
    };
    return AmazonPayCustomerStrategy;
}(customer_strategy_1.default));
exports.default = AmazonPayCustomerStrategy;


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var customer_strategy_1 = __webpack_require__(22);
var DefaultCustomerStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultCustomerStrategy, _super);
    function DefaultCustomerStrategy(store, _customerActionCreator) {
        var _this = _super.call(this, store) || this;
        _this._customerActionCreator = _customerActionCreator;
        return _this;
    }
    DefaultCustomerStrategy.prototype.signIn = function (credentials, options) {
        return this._store.dispatch(this._customerActionCreator.signInCustomer(credentials, options));
    };
    DefaultCustomerStrategy.prototype.signOut = function (options) {
        return this._store.dispatch(this._customerActionCreator.signOutCustomer(options));
    };
    return DefaultCustomerStrategy;
}(customer_strategy_1.default));
exports.default = DefaultCustomerStrategy;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var customer_strategy_1 = __webpack_require__(22);
var BraintreeVisaCheckoutCustomerStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(BraintreeVisaCheckoutCustomerStrategy, _super);
    function BraintreeVisaCheckoutCustomerStrategy(store, _paymentMethodActionCreator, _customerStrategyActionCreator, _quoteActionCreator, _remoteCheckoutActionCreator, _braintreeVisaCheckoutPaymentProcessor, _visaCheckoutScriptLoader) {
        var _this = _super.call(this, store) || this;
        _this._paymentMethodActionCreator = _paymentMethodActionCreator;
        _this._customerStrategyActionCreator = _customerStrategyActionCreator;
        _this._quoteActionCreator = _quoteActionCreator;
        _this._remoteCheckoutActionCreator = _remoteCheckoutActionCreator;
        _this._braintreeVisaCheckoutPaymentProcessor = _braintreeVisaCheckoutPaymentProcessor;
        _this._visaCheckoutScriptLoader = _visaCheckoutScriptLoader;
        _this._buttonClassName = 'visa-checkout-wrapper';
        return _this;
    }
    BraintreeVisaCheckoutCustomerStrategy.prototype.initialize = function (options) {
        var _this = this;
        var visaCheckoutOptions = options.braintreevisacheckout, methodId = options.methodId;
        if (!visaCheckoutOptions || !methodId) {
            throw new errors_1.InvalidArgumentError('Unable to proceed because "options.braintreevisacheckout" argument is not provided.');
        }
        return this._store.dispatch(this._paymentMethodActionCreator.loadPaymentMethod(methodId))
            .then(function (state) {
            _this._paymentMethod = state.paymentMethods.getPaymentMethod(methodId);
            var cart = state.cart.getCart();
            var storeConfig = state.config.getStoreConfig();
            if (!cart || !storeConfig || !_this._paymentMethod || !_this._paymentMethod.clientToken) {
                throw new errors_1.MissingDataError('Unable to prepare payment data because "cart", "config" or "paymentMethod (Visa Checkout)" data is missing.');
            }
            var container = visaCheckoutOptions.container, _a = visaCheckoutOptions.onError, onError = _a === void 0 ? function () { } : _a;
            var initOptions = {
                locale: storeConfig.storeProfile.storeLanguage,
                collectShipping: true,
                subtotal: cart.subtotal.amount,
                currencyCode: storeConfig.currency.code,
            };
            return Promise.all([
                _this._visaCheckoutScriptLoader.load(_this._paymentMethod.config.testMode),
                _this._braintreeVisaCheckoutPaymentProcessor.initialize(_this._paymentMethod.clientToken, initOptions),
            ])
                .then(function (_a) {
                var visaCheckout = _a[0], initOptions = _a[1];
                var signInButton = _this._createSignInButton(container, _this._buttonClassName);
                visaCheckout.init(initOptions);
                visaCheckout.on('payment.success', function (paymentSuccessPayload) {
                    return _this._paymentInstrumentSelected(paymentSuccessPayload)
                        .catch(function (error) { return onError(error); });
                });
                visaCheckout.on('payment.error', function (payment, error) { return onError(error); });
                return signInButton;
            })
                .then(function (signInButton) { signInButton.style.visibility = 'visible'; });
        })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    BraintreeVisaCheckoutCustomerStrategy.prototype.signIn = function (credentials, options) {
        throw new errors_1.NotImplementedError('In order to sign in via VisaCheckout, the shopper must click on "Visa Checkout" button.');
    };
    BraintreeVisaCheckoutCustomerStrategy.prototype.signOut = function (options) {
        var state = this._store.getState();
        var _a = (state.customer.getCustomer() || {}).remote, remote = _a === void 0 ? { provider: undefined } : _a;
        if (!remote.provider) {
            return Promise.resolve(this._store.getState());
        }
        return this._store.dispatch(this._remoteCheckoutActionCreator.signOut(remote.provider, options));
    };
    BraintreeVisaCheckoutCustomerStrategy.prototype.deinitialize = function (options) {
        var _this = this;
        if (!this._isInitialized) {
            return _super.prototype.deinitialize.call(this, options);
        }
        this._paymentMethod = undefined;
        return this._braintreeVisaCheckoutPaymentProcessor.deinitialize()
            .then(function () { return _super.prototype.deinitialize.call(_this, options); });
    };
    BraintreeVisaCheckoutCustomerStrategy.prototype._paymentInstrumentSelected = function (paymentSuccessPayload) {
        var _this = this;
        var state = this._store.getState();
        if (!this._paymentMethod) {
            throw new Error('Payment method not initialized');
        }
        var methodId = this._paymentMethod.id;
        return this._store.dispatch(this._customerStrategyActionCreator.widgetInteraction(function () {
            return _this._braintreeVisaCheckoutPaymentProcessor.handleSuccess(paymentSuccessPayload, state.shippingAddress.getShippingAddress(), state.billingAddress.getBillingAddress())
                .then(function () { return _this._store.dispatch(_this._quoteActionCreator.loadQuote()); });
        }, { methodId: methodId }), { queueId: 'widgetInteraction' });
    };
    BraintreeVisaCheckoutCustomerStrategy.prototype._createSignInButton = function (containerId, buttonClass) {
        var container = document.querySelector("#" + containerId);
        if (!container) {
            throw new Error('Need a container to place the button');
        }
        return container.querySelector('.' + buttonClass) ||
            this._insertVisaCheckoutButton(container, buttonClass);
    };
    BraintreeVisaCheckoutCustomerStrategy.prototype._insertVisaCheckoutButton = function (container, buttonClass) {
        var buttonSource = 'https://secure.checkout.visa.com/wallet-services-web/xo/button.png?acceptCanadianVisaDebit=false&cobrand=true&size=154';
        var buttonTemplate = "\n            <img\n                alt=\"Visa Checkout\"\n                class=\"v-button\"\n                role=\"button\"\n                src=\"" + buttonSource + "\"\n                />\n            <a class=\"v-learn v-learn-default\" style=\"text-align: right; display: block; font-size: 10px; color: #003366;\" href=\"#\" data-locale=\"en_US\">Tell Me More</a>";
        var visaCheckoutButton = document.createElement('div');
        visaCheckoutButton.style.visibility = 'hidden';
        visaCheckoutButton.className = buttonClass;
        visaCheckoutButton.innerHTML = buttonTemplate;
        container.appendChild(visaCheckoutButton);
        return visaCheckoutButton;
    };
    return BraintreeVisaCheckoutCustomerStrategy;
}(customer_strategy_1.default));
exports.default = BraintreeVisaCheckoutCustomerStrategy;


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errors_1 = __webpack_require__(2);
var http_request_1 = __webpack_require__(69);
var customer_strategy_1 = __webpack_require__(22);
var ChasePayCustomerStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(ChasePayCustomerStrategy, _super);
    function ChasePayCustomerStrategy(store, _paymentMethodActionCreator, _remoteCheckoutActionCreator, _chasePayScriptLoader, _requestSender, _formPoster) {
        var _this = _super.call(this, store) || this;
        _this._paymentMethodActionCreator = _paymentMethodActionCreator;
        _this._remoteCheckoutActionCreator = _remoteCheckoutActionCreator;
        _this._chasePayScriptLoader = _chasePayScriptLoader;
        _this._requestSender = _requestSender;
        _this._formPoster = _formPoster;
        return _this;
    }
    ChasePayCustomerStrategy.prototype.initialize = function (options) {
        var _this = this;
        var chasePayOptions = options.chasepay, methodId = options.methodId;
        if (!chasePayOptions || !methodId) {
            throw new errors_1.InvalidArgumentError('Unable to proceed because "options.chasepay" argument is not provided.');
        }
        return this._store.dispatch(this._paymentMethodActionCreator.loadPaymentMethod(methodId))
            .then(function (state) {
            _this._paymentMethod = state.paymentMethods.getPaymentMethod(methodId);
            var cart = state.cart.getCart();
            var storeConfig = state.config.getStoreConfig();
            if (!cart || !storeConfig || !_this._paymentMethod || !_this._paymentMethod.initializationData.digitalSessionId) {
                throw new errors_1.MissingDataError('Unable to prepare payment data because "cart", "config" or "paymentMethod (Chase Pay)" data is missing.');
            }
            var container = chasePayOptions.container;
            return _this._chasePayScriptLoader.load(_this._paymentMethod.config.testMode)
                .then(function (JPMC) {
                var ChasePay = JPMC.ChasePay;
                if (ChasePay.isChasePayUp) {
                    ChasePay.insertButtons({
                        containers: [container],
                    });
                }
                ChasePay.on(ChasePay.EventType.START_CHECKOUT, function () {
                    _this._store.dispatch(_this._paymentMethodActionCreator.loadPaymentMethod(methodId))
                        .then(function () {
                        var state = _this._store.getState();
                        var method = state.paymentMethods.getPaymentMethod(methodId);
                        var sessionId = method && method.initializationData && method.initializationData.digitalSessionId;
                        if (sessionId) {
                            ChasePay.startCheckout(sessionId);
                        }
                    });
                });
                ChasePay.on(ChasePay.EventType.COMPLETE_CHECKOUT, function (payload) {
                    var state = _this._store.getState();
                    var method = state.paymentMethods.getPaymentMethod(methodId);
                    var requestId = method && method.initializationData && method.initializationData.merchantRequestId;
                    if (requestId) {
                        _this._setExternalCheckoutData(payload, requestId)
                            .then(function () {
                            _this._reloadPage();
                        });
                    }
                });
            });
        })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    ChasePayCustomerStrategy.prototype.signIn = function (credentials, options) {
        throw new errors_1.NotImplementedError('In order to sign in via Chase Pay, the shopper must click on "Visa Checkout" button.');
    };
    ChasePayCustomerStrategy.prototype.signOut = function (options) {
        var state = this._store.getState();
        var _a = (state.customer.getCustomer() || {}).remote, remote = _a === void 0 ? { provider: undefined } : _a;
        if (!remote.provider) {
            return Promise.resolve(this._store.getState());
        }
        return this._store.dispatch(this._remoteCheckoutActionCreator.signOut(remote.provider, options));
    };
    ChasePayCustomerStrategy.prototype._setExternalCheckoutData = function (payload, requestId) {
        var url = "checkout.php?provider=chasepay&action=set_external_checkout";
        var options = {
            headers: {
                Accept: 'text/html',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            body: http_request_1.toFormUrlEncoded({
                sessionToken: payload.sessionToken,
                merchantRequestId: requestId,
            }),
            method: 'post',
        };
        return this._requestSender.sendRequest(url, options);
    };
    ChasePayCustomerStrategy.prototype._reloadPage = function () {
        this._formPoster.postForm('/checkout.php', {
            headers: {
                Accept: 'text/html',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            params: {
                fromChasePay: true,
            },
        });
    };
    return ChasePayCustomerStrategy;
}(customer_strategy_1.default));
exports.default = ChasePayCustomerStrategy;


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var checkout_1 = __webpack_require__(7);
var customerActionTypes = __webpack_require__(18);
var order_1 = __webpack_require__(16);
var quoteActionTypes = __webpack_require__(14);
var map_to_internal_customer_1 = __webpack_require__(76);
var DEFAULT_STATE = {};
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action
 */
function customerReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
    });
    return reducer(state, action);
}
exports.default = customerReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return data ? tslib_1.__assign({}, data, map_to_internal_customer_1.default(action.payload, data)) : data;
        case customerActionTypes.SIGN_IN_CUSTOMER_SUCCEEDED:
        case customerActionTypes.SIGN_OUT_CUSTOMER_SUCCEEDED:
        case order_1.OrderActionType.LoadOrderSucceeded:
        case order_1.OrderActionType.FinalizeOrderSucceeded:
        case order_1.OrderActionType.SubmitOrderSucceeded:
        case quoteActionTypes.LOAD_QUOTE_SUCCEEDED:
            return action.payload ? tslib_1.__assign({}, data, action.payload.customer) : data;
        default:
            return data;
    }
}


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var CustomerRequestSender = /** @class */ (function () {
    function CustomerRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    CustomerRequestSender.prototype.signInCustomer = function (credentials, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/customer';
        var params = {
            includes: ['cart', 'quote', 'shippingOptions'].join(','),
        };
        return this._requestSender.post(url, { params: params, timeout: timeout, body: credentials });
    };
    CustomerRequestSender.prototype.signOutCustomer = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/customer';
        var params = {
            includes: ['cart', 'quote', 'shippingOptions'].join(','),
        };
        return this._requestSender.delete(url, { params: params, timeout: timeout });
    };
    return CustomerRequestSender;
}());
exports.default = CustomerRequestSender;


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var CustomerSelector = /** @class */ (function () {
    function CustomerSelector(_customer) {
        this._customer = _customer;
    }
    CustomerSelector.prototype.getCustomer = function () {
        return this._customer.data;
    };
    CustomerSelector = tslib_1.__decorate([
        selector_1.selector
    ], CustomerSelector);
    return CustomerSelector;
}());
exports.default = CustomerSelector;


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var customer_strategy_actions_1 = __webpack_require__(77);
var CustomerStrategyActionCreator = /** @class */ (function () {
    function CustomerStrategyActionCreator(_strategyRegistry) {
        this._strategyRegistry = _strategyRegistry;
    }
    CustomerStrategyActionCreator.prototype.signIn = function (credentials, options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId;
            var meta = { methodId: methodId };
            observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.SignInRequested, undefined, meta));
            _this._strategyRegistry.get(methodId)
                .signIn(credentials, options)
                .then(function () {
                observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.SignInSucceeded, undefined, meta));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(customer_strategy_actions_1.CustomerStrategyActionType.SignInFailed, error, meta));
            });
        });
    };
    CustomerStrategyActionCreator.prototype.signOut = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId;
            var meta = { methodId: methodId };
            observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.SignOutRequested, undefined, meta));
            _this._strategyRegistry.get(methodId)
                .signOut(options)
                .then(function () {
                observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.SignOutSucceeded, undefined, meta));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(customer_strategy_actions_1.CustomerStrategyActionType.SignOutFailed, error, meta));
            });
        });
    };
    CustomerStrategyActionCreator.prototype.initialize = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId;
            var meta = { methodId: methodId };
            observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.InitializeRequested, undefined, meta));
            _this._strategyRegistry.get(methodId)
                .initialize(options)
                .then(function () {
                observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.InitializeSucceeded, undefined, meta));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(customer_strategy_actions_1.CustomerStrategyActionType.InitializeFailed, error, meta));
            });
        });
    };
    CustomerStrategyActionCreator.prototype.deinitialize = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId;
            var meta = { methodId: methodId };
            observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.DeinitializeRequested, undefined, meta));
            _this._strategyRegistry.get(methodId)
                .deinitialize(options)
                .then(function () {
                observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.DeinitializeSucceeded, undefined, meta));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(customer_strategy_actions_1.CustomerStrategyActionType.DeinitializeFailed, error, meta));
            });
        });
    };
    CustomerStrategyActionCreator.prototype.widgetInteraction = function (method, options) {
        return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId;
            var meta = { methodId: methodId };
            observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.WidgetInteractionStarted, undefined, meta));
            method().then(function () {
                observer.next(data_store_1.createAction(customer_strategy_actions_1.CustomerStrategyActionType.WidgetInteractionFinished, undefined, meta));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(customer_strategy_actions_1.CustomerStrategyActionType.WidgetInteractionFailed, error, meta));
            });
        });
    };
    return CustomerStrategyActionCreator;
}());
exports.default = CustomerStrategyActionCreator;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CustomerStrategySelector = /** @class */ (function () {
    function CustomerStrategySelector(_customerStrategies) {
        this._customerStrategies = _customerStrategies;
    }
    CustomerStrategySelector.prototype.getSignInError = function (methodId) {
        if (methodId && this._customerStrategies.errors.signInMethodId !== methodId) {
            return;
        }
        return this._customerStrategies.errors.signInError;
    };
    CustomerStrategySelector.prototype.getSignOutError = function (methodId) {
        if (methodId && this._customerStrategies.errors.signOutMethodId !== methodId) {
            return;
        }
        return this._customerStrategies.errors.signOutError;
    };
    CustomerStrategySelector.prototype.getInitializeError = function (methodId) {
        if (methodId && this._customerStrategies.errors.initializeMethodId !== methodId) {
            return;
        }
        return this._customerStrategies.errors.initializeError;
    };
    CustomerStrategySelector.prototype.getWidgetInteractionError = function (methodId) {
        if (methodId && this._customerStrategies.errors.widgetInteractionMethodId !== methodId) {
            return;
        }
        return this._customerStrategies.errors.widgetInteractionError;
    };
    CustomerStrategySelector.prototype.isSigningIn = function (methodId) {
        if (methodId && this._customerStrategies.statuses.signInMethodId !== methodId) {
            return false;
        }
        return !!this._customerStrategies.statuses.isSigningIn;
    };
    CustomerStrategySelector.prototype.isSigningOut = function (methodId) {
        if (methodId && this._customerStrategies.statuses.signOutMethodId !== methodId) {
            return false;
        }
        return !!this._customerStrategies.statuses.isSigningOut;
    };
    CustomerStrategySelector.prototype.isInitializing = function (methodId) {
        if (methodId && this._customerStrategies.statuses.initializeMethodId !== methodId) {
            return false;
        }
        return !!this._customerStrategies.statuses.isInitializing;
    };
    CustomerStrategySelector.prototype.isWidgetInteracting = function (methodId) {
        if (methodId && this._customerStrategies.statuses.widgetInteractionMethodId !== methodId) {
            return false;
        }
        return !!this._customerStrategies.statuses.isWidgetInteracting;
    };
    return CustomerStrategySelector;
}());
exports.default = CustomerStrategySelector;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var customer_strategy_actions_1 = __webpack_require__(77);
var customer_strategy_state_1 = __webpack_require__(213);
function customerStrategyReducer(state, action) {
    if (state === void 0) { state = customer_strategy_state_1.DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        errors: errorsReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = customerStrategyReducer;
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = customer_strategy_state_1.DEFAULT_STATE.errors; }
    switch (action.type) {
        case customer_strategy_actions_1.CustomerStrategyActionType.InitializeRequested:
        case customer_strategy_actions_1.CustomerStrategyActionType.InitializeSucceeded:
            return tslib_1.__assign({}, errors, { initializeError: undefined, initializeMethodId: undefined });
        case customer_strategy_actions_1.CustomerStrategyActionType.InitializeFailed:
            return tslib_1.__assign({}, errors, { initializeError: action.payload, initializeMethodId: action.meta && action.meta.methodId });
        case customer_strategy_actions_1.CustomerStrategyActionType.DeinitializeRequested:
        case customer_strategy_actions_1.CustomerStrategyActionType.DeinitializeSucceeded:
            return tslib_1.__assign({}, errors, { deinitializeError: undefined, deinitializeMethodId: undefined });
        case customer_strategy_actions_1.CustomerStrategyActionType.DeinitializeFailed:
            return tslib_1.__assign({}, errors, { deinitializeError: action.payload, deinitializeMethodId: action.meta && action.meta.methodId });
        case customer_strategy_actions_1.CustomerStrategyActionType.SignInRequested:
        case customer_strategy_actions_1.CustomerStrategyActionType.SignInSucceeded:
            return tslib_1.__assign({}, errors, { signInError: undefined, signInMethodId: undefined });
        case customer_strategy_actions_1.CustomerStrategyActionType.SignInFailed:
            return tslib_1.__assign({}, errors, { signInError: action.payload, signInMethodId: action.meta && action.meta.methodId });
        case customer_strategy_actions_1.CustomerStrategyActionType.SignOutRequested:
        case customer_strategy_actions_1.CustomerStrategyActionType.SignOutSucceeded:
            return tslib_1.__assign({}, errors, { signOutError: undefined, signOutMethodId: undefined });
        case customer_strategy_actions_1.CustomerStrategyActionType.SignOutFailed:
            return tslib_1.__assign({}, errors, { signOutError: action.payload, signOutMethodId: action.meta && action.meta.methodId });
        case customer_strategy_actions_1.CustomerStrategyActionType.WidgetInteractionStarted:
        case customer_strategy_actions_1.CustomerStrategyActionType.WidgetInteractionFinished:
            return tslib_1.__assign({}, errors, { widgetInteractionError: undefined, widgetInteractionMethodId: undefined });
        case customer_strategy_actions_1.CustomerStrategyActionType.WidgetInteractionFailed:
            return tslib_1.__assign({}, errors, { widgetInteractionError: action.payload, widgetInteractionMethodId: action.meta.methodId });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = customer_strategy_state_1.DEFAULT_STATE.statuses; }
    switch (action.type) {
        case customer_strategy_actions_1.CustomerStrategyActionType.InitializeRequested:
            return tslib_1.__assign({}, statuses, { isInitializing: true, initializeMethodId: action.meta && action.meta.methodId });
        case customer_strategy_actions_1.CustomerStrategyActionType.InitializeFailed:
        case customer_strategy_actions_1.CustomerStrategyActionType.InitializeSucceeded:
            return tslib_1.__assign({}, statuses, { isInitializing: false, initializeMethodId: undefined });
        case customer_strategy_actions_1.CustomerStrategyActionType.DeinitializeRequested:
            return tslib_1.__assign({}, statuses, { isDeinitializing: true, deinitializeMethodId: action.meta && action.meta.methodId });
        case customer_strategy_actions_1.CustomerStrategyActionType.DeinitializeFailed:
        case customer_strategy_actions_1.CustomerStrategyActionType.DeinitializeSucceeded:
            return tslib_1.__assign({}, statuses, { isDeinitializing: false, deinitializeMethodId: undefined });
        case customer_strategy_actions_1.CustomerStrategyActionType.SignInRequested:
            return tslib_1.__assign({}, statuses, { isSigningIn: true, signInMethodId: action.meta && action.meta.methodId });
        case customer_strategy_actions_1.CustomerStrategyActionType.SignInFailed:
        case customer_strategy_actions_1.CustomerStrategyActionType.SignInSucceeded:
            return tslib_1.__assign({}, statuses, { isSigningIn: false, signInMethodId: undefined });
        case customer_strategy_actions_1.CustomerStrategyActionType.SignOutRequested:
            return tslib_1.__assign({}, statuses, { isSigningOut: true, signOutMethodId: action.meta && action.meta.methodId });
        case customer_strategy_actions_1.CustomerStrategyActionType.SignOutFailed:
        case customer_strategy_actions_1.CustomerStrategyActionType.SignOutSucceeded:
            return tslib_1.__assign({}, statuses, { isSigningOut: false, signOutMethodId: undefined });
        case customer_strategy_actions_1.CustomerStrategyActionType.WidgetInteractionStarted:
            return tslib_1.__assign({}, statuses, { isWidgetInteracting: true, widgetInteractionMethodId: action.meta.methodId });
        case customer_strategy_actions_1.CustomerStrategyActionType.WidgetInteractionFinished:
        case customer_strategy_actions_1.CustomerStrategyActionType.WidgetInteractionFailed:
            return tslib_1.__assign({}, statuses, { isWidgetInteracting: false, widgetInteractionMethodId: undefined });
        default:
            return statuses;
    }
}


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_STATE = {
    errors: {},
    statuses: {},
};


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(78);
/**
 * @todo Convert this file into TypeScript properly
 */
var CountryActionCreator = /** @class */ (function () {
    function CountryActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    CountryActionCreator.prototype.loadCountries = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.LOAD_COUNTRIES_REQUESTED));
            _this._checkoutClient.loadCountries(options)
                .then(function (response) {
                observer.next(data_store_1.createAction(actionTypes.LOAD_COUNTRIES_SUCCEEDED, response.body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.LOAD_COUNTRIES_FAILED, response));
            });
        });
    };
    return CountryActionCreator;
}());
exports.default = CountryActionCreator;


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CountryRequestSender = /** @class */ (function () {
    function CountryRequestSender(_requestSender, _config) {
        this._requestSender = _requestSender;
        this._config = _config;
    }
    CountryRequestSender.prototype.loadCountries = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/store/countries';
        var headers = {
            'Accept-Language': this._config.locale,
        };
        return this._requestSender.get(url, { headers: headers, timeout: timeout });
    };
    return CountryRequestSender;
}());
exports.default = CountryRequestSender;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var CountrySelector = /** @class */ (function () {
    function CountrySelector(_countries) {
        this._countries = _countries;
    }
    CountrySelector.prototype.getCountries = function () {
        return this._countries.data;
    };
    CountrySelector.prototype.getLoadError = function () {
        return this._countries.errors.loadError;
    };
    CountrySelector.prototype.isLoading = function () {
        return !!this._countries.statuses.isLoading;
    };
    CountrySelector = tslib_1.__decorate([
        selector_1.selector
    ], CountrySelector);
    return CountrySelector;
}());
exports.default = CountrySelector;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var actionTypes = __webpack_require__(78);
var DEFAULT_STATE = {
    errors: {},
    statuses: {},
};
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action
 */
function countryReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = countryReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case actionTypes.LOAD_COUNTRIES_SUCCEEDED:
            return action.payload || [];
        default:
            return data;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = DEFAULT_STATE.errors; }
    switch (action.type) {
        case actionTypes.LOAD_COUNTRIES_REQUESTED:
        case actionTypes.LOAD_COUNTRIES_SUCCEEDED:
            return tslib_1.__assign({}, errors, { loadError: undefined });
        case actionTypes.LOAD_COUNTRIES_FAILED:
            return tslib_1.__assign({}, errors, { loadError: action.payload });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = DEFAULT_STATE.statuses; }
    switch (action.type) {
        case actionTypes.LOAD_COUNTRIES_REQUESTED:
            return tslib_1.__assign({}, statuses, { isLoading: true });
        case actionTypes.LOAD_COUNTRIES_SUCCEEDED:
        case actionTypes.LOAD_COUNTRIES_FAILED:
            return tslib_1.__assign({}, statuses, { isLoading: false });
        default:
            return statuses;
    }
}


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var request_sender_1 = __webpack_require__(10);
var script_loader_1 = __webpack_require__(32);
var registry_1 = __webpack_require__(33);
var payment_1 = __webpack_require__(13);
var remote_checkout_1 = __webpack_require__(21);
var amazon_pay_1 = __webpack_require__(38);
var shipping_address_action_creator_1 = __webpack_require__(79);
var shipping_option_action_creator_1 = __webpack_require__(80);
var strategies_1 = __webpack_require__(219);
function createShippingStrategyRegistry(store, client) {
    var registry = new registry_1.Registry();
    registry.register('amazon', function () {
        return new strategies_1.AmazonPayShippingStrategy(store, new shipping_address_action_creator_1.default(client), new shipping_option_action_creator_1.default(client), new payment_1.PaymentMethodActionCreator(client), new remote_checkout_1.RemoteCheckoutActionCreator(new remote_checkout_1.RemoteCheckoutRequestSender(request_sender_1.createRequestSender())), new amazon_pay_1.AmazonPayScriptLoader(script_loader_1.getScriptLoader()));
    });
    registry.register('default', function () {
        return new strategies_1.DefaultShippingStrategy(store, new shipping_address_action_creator_1.default(client), new shipping_option_action_creator_1.default(client));
    });
    return registry;
}
exports.default = createShippingStrategyRegistry;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var amazon_pay_shipping_strategy_1 = __webpack_require__(220);
exports.AmazonPayShippingStrategy = amazon_pay_shipping_strategy_1.default;
var default_shipping_strategy_1 = __webpack_require__(221);
exports.DefaultShippingStrategy = default_shipping_strategy_1.default;
var shipping_strategy_1 = __webpack_require__(42);
exports.ShippingStrategy = shipping_strategy_1.default;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var address_1 = __webpack_require__(37);
var errors_1 = __webpack_require__(2);
var errors_2 = __webpack_require__(65);
var shipping_strategy_actions_1 = __webpack_require__(41);
var shipping_strategy_1 = __webpack_require__(42);
var AmazonPayShippingStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(AmazonPayShippingStrategy, _super);
    function AmazonPayShippingStrategy(store, _addressActionCreator, _optionActionCreator, _paymentMethodActionCreator, _remoteCheckoutActionCreator, _scriptLoader) {
        var _this = _super.call(this, store) || this;
        _this._addressActionCreator = _addressActionCreator;
        _this._optionActionCreator = _optionActionCreator;
        _this._paymentMethodActionCreator = _paymentMethodActionCreator;
        _this._remoteCheckoutActionCreator = _remoteCheckoutActionCreator;
        _this._scriptLoader = _scriptLoader;
        _this._window = window;
        return _this;
    }
    AmazonPayShippingStrategy.prototype.initialize = function (options) {
        var _this = this;
        if (this._isInitialized) {
            return _super.prototype.initialize.call(this, options);
        }
        var amazonOptions = options.amazon, methodId = options.methodId;
        if (!amazonOptions || !methodId) {
            throw new errors_1.InvalidArgumentError('Unable to proceed because "options.amazon" argument is not provided.');
        }
        return this._store.dispatch(this._paymentMethodActionCreator.loadPaymentMethod(methodId))
            .then(function (state) { return new Promise(function (resolve, reject) {
            _this._paymentMethod = state.paymentMethods.getPaymentMethod(methodId);
            if (!_this._paymentMethod) {
                throw new errors_1.MissingDataError("Unable to initialize because \"paymentMethod (" + methodId + ")\" data is missing.");
            }
            var onReady = function () {
                _this._createAddressBook(amazonOptions)
                    .then(resolve)
                    .catch(reject);
            };
            _this._scriptLoader.loadWidget(_this._paymentMethod, onReady)
                .catch(reject);
        }); })
            .then(function () { return _super.prototype.initialize.call(_this, options); });
    };
    AmazonPayShippingStrategy.prototype.deinitialize = function (options) {
        if (!this._isInitialized) {
            return _super.prototype.deinitialize.call(this, options);
        }
        this._paymentMethod = undefined;
        return _super.prototype.deinitialize.call(this, options);
    };
    AmazonPayShippingStrategy.prototype.updateAddress = function (address, options) {
        return Promise.resolve(this._store.getState());
    };
    AmazonPayShippingStrategy.prototype.selectOption = function (addressId, optionId, options) {
        return this._store.dispatch(this._optionActionCreator.selectShippingOption(addressId, optionId, options));
    };
    AmazonPayShippingStrategy.prototype._createAddressBook = function (options) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var container = options.container, _a = options.onAddressSelect, onAddressSelect = _a === void 0 ? function () { } : _a, _b = options.onError, onError = _b === void 0 ? function () { } : _b, _c = options.onReady, onReady = _c === void 0 ? function () { } : _c;
            var merchantId = _this._paymentMethod && _this._paymentMethod.config.merchantId;
            if (!merchantId || !document.getElementById(container) || !_this._window.OffAmazonPayments) {
                return reject(new errors_1.NotInitializedError('Unable to create AmazonPay AddressBook widget without valid merchant ID or container ID.'));
            }
            var widget = new _this._window.OffAmazonPayments.Widgets.AddressBook({
                design: {
                    designMode: 'responsive',
                },
                scope: 'payments:billing_address payments:shipping_address payments:widget profile',
                sellerId: merchantId,
                onAddressSelect: function (orderReference) {
                    _this._synchronizeShippingAddress()
                        .then(function () { return onAddressSelect(orderReference); })
                        .catch(onError);
                },
                onError: function (error) {
                    reject(error);
                    onError(error);
                },
                onOrderReferenceCreate: function (orderReference) {
                    _this._handleOrderReferenceCreate(orderReference);
                },
                onReady: function () {
                    resolve();
                    onReady();
                },
            });
            widget.bind(container);
            return widget;
        });
    };
    AmazonPayShippingStrategy.prototype._synchronizeShippingAddress = function () {
        var _this = this;
        var state = this._store.getState();
        var meta = state.remoteCheckout.getCheckoutMeta();
        var methodId = this._paymentMethod && this._paymentMethod.id;
        var referenceId = meta && meta.amazon && meta.amazon.referenceId;
        if (!methodId || !referenceId) {
            throw new errors_1.NotInitializedError();
        }
        return this._store.dispatch(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressRequested, undefined, { methodId: methodId }))
            .then(function () { return _this._store.dispatch(_this._remoteCheckoutActionCreator.initializeShipping(methodId, { referenceId: referenceId })); })
            .then(function (state) {
            var remoteCheckout = state.remoteCheckout.getCheckout();
            var address = state.shippingAddress.getShippingAddress();
            if (remoteCheckout && remoteCheckout.shippingAddress === false) {
                throw new errors_2.RemoteCheckoutSynchronizationError();
            }
            if (!remoteCheckout || !remoteCheckout.shippingAddress || address_1.isAddressEqual(remoteCheckout.shippingAddress, address || {})) {
                return _this._store.getState();
            }
            return _this._store.dispatch(_this._addressActionCreator.updateAddress(remoteCheckout.shippingAddress));
        })
            .then(function () { return _this._store.dispatch(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressSucceeded, undefined, { methodId: methodId })); })
            .catch(function (error) { return _this._store.dispatch(data_store_1.createErrorAction(shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressFailed, error, { methodId: methodId })); });
    };
    AmazonPayShippingStrategy.prototype._handleOrderReferenceCreate = function (orderReference) {
        if (!this._paymentMethod) {
            throw new errors_1.NotInitializedError();
        }
        this._store.dispatch(this._remoteCheckoutActionCreator.setCheckoutMeta(this._paymentMethod.id, {
            referenceId: orderReference.getAmazonOrderReferenceId(),
        }));
    };
    return AmazonPayShippingStrategy;
}(shipping_strategy_1.default));
exports.default = AmazonPayShippingStrategy;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var shipping_strategy_1 = __webpack_require__(42);
var DefaultShippingStrategy = /** @class */ (function (_super) {
    tslib_1.__extends(DefaultShippingStrategy, _super);
    function DefaultShippingStrategy(store, _addressActionCreator, _optionActionCreator) {
        var _this = _super.call(this, store) || this;
        _this._addressActionCreator = _addressActionCreator;
        _this._optionActionCreator = _optionActionCreator;
        return _this;
    }
    DefaultShippingStrategy.prototype.updateAddress = function (address, options) {
        return this._store.dispatch(this._addressActionCreator.updateAddress(address, options));
    };
    DefaultShippingStrategy.prototype.selectOption = function (addressId, optionId, options) {
        return this._store.dispatch(this._optionActionCreator.selectShippingOption(addressId, optionId, options));
    };
    return DefaultShippingStrategy;
}(shipping_strategy_1.default));
exports.default = DefaultShippingStrategy;


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var checkout_1 = __webpack_require__(7);
var DEFAULT_STATE = {};
function shippingReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
    });
    return reducer(state, action);
}
exports.default = shippingReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return action.payload ? action.payload.consignments : data;
        default:
            return data;
    }
}


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Response<T>
 */
var ShippingAddressRequestSender = /** @class */ (function () {
    function ShippingAddressRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    ShippingAddressRequestSender.prototype.updateAddress = function (address, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/shipping';
        var params = {
            includes: ['cart', 'quote', 'shippingOptions'].join(','),
        };
        return this._requestSender.post(url, { body: address, params: params, timeout: timeout });
    };
    return ShippingAddressRequestSender;
}());
exports.default = ShippingAddressRequestSender;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var ShippingAddressSelector = /** @class */ (function () {
    function ShippingAddressSelector(_quote) {
        this._quote = _quote;
    }
    ShippingAddressSelector.prototype.getShippingAddress = function () {
        return this._quote.data && this._quote.data.shippingAddress;
    };
    ShippingAddressSelector = tslib_1.__decorate([
        selector_1.selector
    ], ShippingAddressSelector);
    return ShippingAddressSelector;
}());
exports.default = ShippingAddressSelector;


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var actionTypes = __webpack_require__(81);
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action<T>
 */
var ShippingCountryActionCreator = /** @class */ (function () {
    function ShippingCountryActionCreator(_checkoutClient) {
        this._checkoutClient = _checkoutClient;
    }
    ShippingCountryActionCreator.prototype.loadCountries = function (options) {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.LOAD_SHIPPING_COUNTRIES_REQUESTED));
            _this._checkoutClient.loadShippingCountries(options)
                .then(function (response) {
                observer.next(data_store_1.createAction(actionTypes.LOAD_SHIPPING_COUNTRIES_SUCCEEDED, response.body.data));
                observer.complete();
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.LOAD_SHIPPING_COUNTRIES_FAILED, response));
            });
        });
    };
    return ShippingCountryActionCreator;
}());
exports.default = ShippingCountryActionCreator;


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ShippingCountryRequestSender = /** @class */ (function () {
    function ShippingCountryRequestSender(_requestSender, _config) {
        this._requestSender = _requestSender;
        this._config = _config;
    }
    ShippingCountryRequestSender.prototype.loadCountries = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/shipping/countries';
        var headers = {
            'Accept-Language': this._config.locale,
        };
        return this._requestSender.get(url, { headers: headers, timeout: timeout });
    };
    return ShippingCountryRequestSender;
}());
exports.default = ShippingCountryRequestSender;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var ShippingCountrySelector = /** @class */ (function () {
    function ShippingCountrySelector(_shippingCountries) {
        this._shippingCountries = _shippingCountries;
    }
    ShippingCountrySelector.prototype.getShippingCountries = function () {
        return this._shippingCountries.data;
    };
    ShippingCountrySelector.prototype.getLoadError = function () {
        return this._shippingCountries.errors.loadError;
    };
    ShippingCountrySelector.prototype.isLoading = function () {
        return !!this._shippingCountries.statuses.isLoading;
    };
    ShippingCountrySelector = tslib_1.__decorate([
        selector_1.selector
    ], ShippingCountrySelector);
    return ShippingCountrySelector;
}());
exports.default = ShippingCountrySelector;


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var actionTypes = __webpack_require__(81);
var DEFAULT_STATE = {
    errors: {},
    statuses: {},
};
/**
 * @todo Convert this file into TypeScript properly
 * i.e.: Action
 */
function shippingCountryReducer(state, action) {
    if (state === void 0) { state = DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        errors: errorsReducer,
        data: dataReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = shippingCountryReducer;
function dataReducer(data, action) {
    switch (action.type) {
        case actionTypes.LOAD_SHIPPING_COUNTRIES_SUCCEEDED:
            return action.payload || [];
        default:
            return data;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = DEFAULT_STATE.errors; }
    switch (action.type) {
        case actionTypes.LOAD_SHIPPING_COUNTRIES_REQUESTED:
        case actionTypes.LOAD_SHIPPING_COUNTRIES_SUCCEEDED:
            return tslib_1.__assign({}, errors, { loadError: undefined });
        case actionTypes.LOAD_SHIPPING_COUNTRIES_FAILED:
            return tslib_1.__assign({}, errors, { loadError: action.payload });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = DEFAULT_STATE.statuses; }
    switch (action.type) {
        case actionTypes.LOAD_SHIPPING_COUNTRIES_REQUESTED:
            return tslib_1.__assign({}, statuses, { isLoading: true });
        case actionTypes.LOAD_SHIPPING_COUNTRIES_SUCCEEDED:
        case actionTypes.LOAD_SHIPPING_COUNTRIES_FAILED:
            return tslib_1.__assign({}, statuses, { isLoading: false });
        default:
            return statuses;
    }
}


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @todo Convert this file into TypeScript properly
 */
var ShippingOptionRequestSender = /** @class */ (function () {
    function ShippingOptionRequestSender(_requestSender) {
        this._requestSender = _requestSender;
    }
    ShippingOptionRequestSender.prototype.loadShippingOptions = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/shippingoptions';
        var params = {
            includes: ['cart', 'quote', 'shippingOptions'].join(','),
        };
        return this._requestSender.get(url, { params: params, timeout: timeout });
    };
    ShippingOptionRequestSender.prototype.selectShippingOption = function (addressId, shippingOptionId, _a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var body = { addressId: addressId, shippingOptionId: shippingOptionId };
        var url = '/internalapi/v1/checkout/shippingoptions';
        var params = {
            includes: ['cart', 'quote', 'shippingOptions'].join(','),
        };
        return this._requestSender.put(url, { body: body, params: params, timeout: timeout });
    };
    return ShippingOptionRequestSender;
}());
exports.default = ShippingOptionRequestSender;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var selector_1 = __webpack_require__(3);
var ShippingOptionSelector = /** @class */ (function () {
    function ShippingOptionSelector(_shippingOptions, _quote) {
        this._shippingOptions = _shippingOptions;
        this._quote = _quote;
    }
    ShippingOptionSelector.prototype.getShippingOptions = function () {
        return this._shippingOptions.data;
    };
    ShippingOptionSelector.prototype.getSelectedShippingOption = function () {
        var _a = this._quote.data || {}, _b = _a.shippingAddress, shippingAddress = _b === void 0 ? null : _b, _c = _a.shippingOption, optionId = _c === void 0 ? null : _c;
        var shippingOptions = this.getShippingOptions();
        if (!shippingAddress || !shippingOptions || !optionId) {
            return;
        }
        return lodash_1.find(shippingOptions[shippingAddress.id], { id: optionId });
    };
    ShippingOptionSelector.prototype.getLoadError = function () {
        return this._shippingOptions.errors.loadError;
    };
    ShippingOptionSelector.prototype.isLoading = function () {
        return !!this._shippingOptions.statuses.isLoading;
    };
    ShippingOptionSelector = tslib_1.__decorate([
        selector_1.selector
    ], ShippingOptionSelector);
    return ShippingOptionSelector;
}());
exports.default = ShippingOptionSelector;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var checkout_1 = __webpack_require__(7);
var customerActionTypes = __webpack_require__(18);
var quoteActionTypes = __webpack_require__(14);
var shippingAddressActionTypes = __webpack_require__(24);
var shippingOptionActionTypes = __webpack_require__(25);
var map_to_internal_shipping_options_1 = __webpack_require__(82);
/**
 * @todo Convert this file into TypeScript properly
 * @param {ShippingOptionsState} state
 * @param {Action} action
 * @return {ShippingOptionsState}
 */
function shippingOptionReducer(state, action) {
    if (state === void 0) { state = {}; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = shippingOptionReducer;
/**
 * @private
 * @param {?ShippingOptionList} data
 * @param {Action} action
 * @return {?ShippingOptionList}
 */
function dataReducer(data, action) {
    switch (action.type) {
        case checkout_1.CheckoutActionType.LoadCheckoutSucceeded:
            return tslib_1.__assign({}, data, map_to_internal_shipping_options_1.default(action.payload.consignments, data));
        case customerActionTypes.SIGN_IN_CUSTOMER_SUCCEEDED:
        case customerActionTypes.SIGN_OUT_CUSTOMER_SUCCEEDED:
        case quoteActionTypes.LOAD_QUOTE_SUCCEEDED:
        case shippingAddressActionTypes.UPDATE_SHIPPING_ADDRESS_SUCCEEDED:
        case shippingOptionActionTypes.LOAD_SHIPPING_OPTIONS_SUCCEEDED:
        case shippingOptionActionTypes.SELECT_SHIPPING_OPTION_SUCCEEDED:
            return action.payload ? action.payload.shippingOptions : data;
        default:
            return data;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = {}; }
    switch (action.type) {
        case shippingOptionActionTypes.LOAD_SHIPPING_OPTIONS_REQUESTED:
            return tslib_1.__assign({}, statuses, { isLoading: true });
        case shippingOptionActionTypes.LOAD_SHIPPING_OPTIONS_FAILED:
        case shippingOptionActionTypes.LOAD_SHIPPING_OPTIONS_SUCCEEDED:
            return tslib_1.__assign({}, statuses, { isLoading: false });
        default:
            return statuses;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = {}; }
    switch (action.type) {
        case shippingOptionActionTypes.LOAD_SHIPPING_OPTIONS_REQUESTED:
        case shippingOptionActionTypes.LOAD_SHIPPING_OPTIONS_SUCCEEDED:
            return tslib_1.__assign({}, errors, { loadError: undefined });
        case shippingOptionActionTypes.LOAD_SHIPPING_OPTIONS_FAILED:
            return tslib_1.__assign({}, errors, { loadError: action.payload });
        default:
            return errors;
    }
}


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var shipping_strategy_actions_1 = __webpack_require__(41);
var ShippingStrategyActionCreator = /** @class */ (function () {
    function ShippingStrategyActionCreator(_strategyRegistry) {
        this._strategyRegistry = _strategyRegistry;
    }
    ShippingStrategyActionCreator.prototype.updateAddress = function (address, options) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId || store.getState().remoteCheckout.getProviderId();
            observer.next(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressRequested, undefined, { methodId: methodId }));
            _this._strategyRegistry.get(methodId)
                .updateAddress(address, tslib_1.__assign({}, options, { methodId: methodId }))
                .then(function () {
                observer.next(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressSucceeded, undefined, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressFailed, error, { methodId: methodId }));
            });
        }); };
    };
    ShippingStrategyActionCreator.prototype.selectOption = function (addressId, shippingOptionId, options) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId || store.getState().remoteCheckout.getProviderId();
            observer.next(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.SelectOptionRequested, undefined, { methodId: methodId }));
            _this._strategyRegistry.get(methodId)
                .selectOption(addressId, shippingOptionId, tslib_1.__assign({}, options, { methodId: methodId }))
                .then(function () {
                observer.next(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.SelectOptionSucceeded, undefined, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(shipping_strategy_actions_1.ShippingStrategyActionType.SelectOptionFailed, error, { methodId: methodId }));
            });
        }); };
    };
    ShippingStrategyActionCreator.prototype.initialize = function (options) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId || store.getState().remoteCheckout.getProviderId();
            var mergedOptions = tslib_1.__assign({}, options, { methodId: methodId });
            observer.next(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.InitializeRequested, undefined, { methodId: methodId }));
            _this._strategyRegistry.get(methodId)
                .initialize(mergedOptions)
                .then(function () {
                observer.next(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.InitializeSucceeded, undefined, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(shipping_strategy_actions_1.ShippingStrategyActionType.InitializeFailed, error, { methodId: methodId }));
            });
        }); };
    };
    ShippingStrategyActionCreator.prototype.deinitialize = function (options) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            var methodId = options && options.methodId || store.getState().remoteCheckout.getProviderId();
            observer.next(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.DeinitializeRequested, undefined, { methodId: methodId }));
            _this._strategyRegistry.get(methodId)
                .deinitialize(tslib_1.__assign({}, options, { methodId: methodId }))
                .then(function () {
                observer.next(data_store_1.createAction(shipping_strategy_actions_1.ShippingStrategyActionType.DeinitializeSucceeded, undefined, { methodId: methodId }));
                observer.complete();
            })
                .catch(function (error) {
                observer.error(data_store_1.createErrorAction(shipping_strategy_actions_1.ShippingStrategyActionType.DeinitializeFailed, error, { methodId: methodId }));
            });
        }); };
    };
    return ShippingStrategyActionCreator;
}());
exports.default = ShippingStrategyActionCreator;


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var selector_1 = __webpack_require__(3);
var ShippingStrategySelector = /** @class */ (function () {
    function ShippingStrategySelector(_shippingStrategies) {
        this._shippingStrategies = _shippingStrategies;
    }
    ShippingStrategySelector.prototype.getUpdateAddressError = function (methodId) {
        if (methodId && this._shippingStrategies.errors.updateAddressMethodId !== methodId) {
            return;
        }
        return this._shippingStrategies.errors.updateAddressError;
    };
    ShippingStrategySelector.prototype.getSelectOptionError = function (methodId) {
        if (methodId && this._shippingStrategies.errors.selectOptionMethodId !== methodId) {
            return;
        }
        return this._shippingStrategies.errors.selectOptionError;
    };
    ShippingStrategySelector.prototype.getInitializeError = function (methodId) {
        if (methodId && this._shippingStrategies.errors.initializeMethodId !== methodId) {
            return;
        }
        return this._shippingStrategies.errors.initializeError;
    };
    ShippingStrategySelector.prototype.isUpdatingAddress = function (methodId) {
        if (methodId && this._shippingStrategies.statuses.updateAddressMethodId !== methodId) {
            return false;
        }
        return !!this._shippingStrategies.statuses.isUpdatingAddress;
    };
    ShippingStrategySelector.prototype.isSelectingOption = function (methodId) {
        if (methodId && this._shippingStrategies.statuses.selectOptionMethodId !== methodId) {
            return false;
        }
        return !!this._shippingStrategies.statuses.isSelectingOption;
    };
    ShippingStrategySelector.prototype.isInitializing = function (methodId) {
        if (methodId && this._shippingStrategies.statuses.initializeMethodId !== methodId) {
            return false;
        }
        return !!this._shippingStrategies.statuses.isInitializing;
    };
    ShippingStrategySelector = tslib_1.__decorate([
        selector_1.selector
    ], ShippingStrategySelector);
    return ShippingStrategySelector;
}());
exports.default = ShippingStrategySelector;


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var shipping_strategy_actions_1 = __webpack_require__(41);
var shipping_strategy_state_1 = __webpack_require__(235);
function shippingStrategyReducer(state, action) {
    if (state === void 0) { state = shipping_strategy_state_1.DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        errors: errorsReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = shippingStrategyReducer;
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = shipping_strategy_state_1.DEFAULT_STATE.errors; }
    switch (action.type) {
        case shipping_strategy_actions_1.ShippingStrategyActionType.InitializeRequested:
        case shipping_strategy_actions_1.ShippingStrategyActionType.InitializeSucceeded:
            return tslib_1.__assign({}, errors, { initializeError: undefined, initializeMethodId: undefined });
        case shipping_strategy_actions_1.ShippingStrategyActionType.InitializeFailed:
            return tslib_1.__assign({}, errors, { initializeError: action.payload, initializeMethodId: action.meta && action.meta.methodId });
        case shipping_strategy_actions_1.ShippingStrategyActionType.DeinitializeRequested:
        case shipping_strategy_actions_1.ShippingStrategyActionType.DeinitializeSucceeded:
            return tslib_1.__assign({}, errors, { deinitializeError: undefined, deinitializeMethodId: undefined });
        case shipping_strategy_actions_1.ShippingStrategyActionType.DeinitializeFailed:
            return tslib_1.__assign({}, errors, { deinitializeError: action.payload, deinitializeMethodId: action.meta && action.meta.methodId });
        case shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressRequested:
        case shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressSucceeded:
            return tslib_1.__assign({}, errors, { updateAddressError: undefined, updateAddressMethodId: undefined });
        case shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressFailed:
            return tslib_1.__assign({}, errors, { updateAddressError: action.payload, updateAddressMethodId: action.meta && action.meta.methodId });
        case shipping_strategy_actions_1.ShippingStrategyActionType.SelectOptionRequested:
        case shipping_strategy_actions_1.ShippingStrategyActionType.SelectOptionSucceeded:
            return tslib_1.__assign({}, errors, { selectOptionError: undefined, selectOptionMethodId: undefined });
        case shipping_strategy_actions_1.ShippingStrategyActionType.SelectOptionFailed:
            return tslib_1.__assign({}, errors, { selectOptionError: action.payload, selectOptionMethodId: action.meta && action.meta.methodId });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = shipping_strategy_state_1.DEFAULT_STATE.statuses; }
    switch (action.type) {
        case shipping_strategy_actions_1.ShippingStrategyActionType.InitializeRequested:
            return tslib_1.__assign({}, statuses, { isInitializing: true, initializeMethodId: action.meta && action.meta.methodId });
        case shipping_strategy_actions_1.ShippingStrategyActionType.InitializeFailed:
        case shipping_strategy_actions_1.ShippingStrategyActionType.InitializeSucceeded:
            return tslib_1.__assign({}, statuses, { isInitializing: false, initializeMethodId: undefined });
        case shipping_strategy_actions_1.ShippingStrategyActionType.DeinitializeRequested:
            return tslib_1.__assign({}, statuses, { isDeinitializing: true, deinitializeMethodId: action.meta && action.meta.methodId });
        case shipping_strategy_actions_1.ShippingStrategyActionType.DeinitializeFailed:
        case shipping_strategy_actions_1.ShippingStrategyActionType.DeinitializeSucceeded:
            return tslib_1.__assign({}, statuses, { isDeinitializing: false, deinitializeMethodId: undefined });
        case shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressRequested:
            return tslib_1.__assign({}, statuses, { isUpdatingAddress: true, updateAddressMethodId: action.meta && action.meta.methodId });
        case shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressFailed:
        case shipping_strategy_actions_1.ShippingStrategyActionType.UpdateAddressSucceeded:
            return tslib_1.__assign({}, statuses, { isUpdatingAddress: false, updateAddressMethodId: undefined });
        case shipping_strategy_actions_1.ShippingStrategyActionType.SelectOptionRequested:
            return tslib_1.__assign({}, statuses, { isSelectingOption: true, selectOptionMethodId: action.meta && action.meta.methodId });
        case shipping_strategy_actions_1.ShippingStrategyActionType.SelectOptionFailed:
        case shipping_strategy_actions_1.ShippingStrategyActionType.SelectOptionSucceeded:
            return tslib_1.__assign({}, statuses, { isSelectingOption: false, selectOptionMethodId: undefined });
        default:
            return statuses;
    }
}


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_STATE = {
    errors: {},
    statuses: {},
};


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var request_sender_1 = __webpack_require__(10);
var billing_1 = __webpack_require__(23);
var cart_1 = __webpack_require__(11);
var log_1 = __webpack_require__(84);
var utility_1 = __webpack_require__(8);
var config_1 = __webpack_require__(26);
var coupon_1 = __webpack_require__(15);
var customer_1 = __webpack_require__(19);
var geography_1 = __webpack_require__(27);
var order_1 = __webpack_require__(16);
var payment_1 = __webpack_require__(13);
var instrument_1 = __webpack_require__(43);
var quote_1 = __webpack_require__(17);
var shipping_1 = __webpack_require__(28);
var checkout_service_1 = __webpack_require__(45);
var create_checkout_client_1 = __webpack_require__(48);
var create_checkout_store_1 = __webpack_require__(87);
/**
 * Creates an instance of `CheckoutService`.
 *
 * ```js
 * const service = createCheckoutService();
 *
 * service.subscribe(state => {
 *     console.log(state);
 * });
 *
 * service.loadCheckout();
 * ```
 *
 * @param options - A set of construction options.
 * @returns an instance of `CheckoutService`.
 */
function createCheckoutService(options) {
    if (document.location.protocol !== 'https:') {
        log_1.getDefaultLogger().warn('The BigCommerce Checkout SDK should not be used on a non-HTTPS page');
    }
    if (utility_1.getEnvironment() !== 'production') {
        log_1.getDefaultLogger().warn('Note that the development build is not optimized. To create a production build, set process.env.NODE_ENV to `production`.');
    }
    var _a = options || {}, _b = _a.locale, locale = _b === void 0 ? '' : _b, _c = _a.shouldWarnMutation, shouldWarnMutation = _c === void 0 ? true : _c;
    var client = create_checkout_client_1.default({ locale: locale });
    var store = create_checkout_store_1.default({}, { shouldWarnMutation: shouldWarnMutation });
    var paymentClient = payment_1.createPaymentClient(store);
    return new checkout_service_1.default(store, new billing_1.BillingAddressActionCreator(client), new cart_1.CartActionCreator(client), new config_1.ConfigActionCreator(client), new geography_1.CountryActionCreator(client), new coupon_1.CouponActionCreator(client), new customer_1.CustomerStrategyActionCreator(customer_1.createCustomerStrategyRegistry(store, client)), new coupon_1.GiftCertificateActionCreator(client), new instrument_1.InstrumentActionCreator(new instrument_1.InstrumentRequestSender(paymentClient, request_sender_1.createRequestSender())), new order_1.OrderActionCreator(client), new payment_1.PaymentMethodActionCreator(client), new payment_1.PaymentStrategyActionCreator(payment_1.createPaymentStrategyRegistry(store, client, paymentClient)), new quote_1.QuoteActionCreator(client), new shipping_1.ShippingCountryActionCreator(client), new shipping_1.ShippingOptionActionCreator(client), new shipping_1.ShippingStrategyActionCreator(shipping_1.createShippingStrategyRegistry(store, client)));
}
exports.default = createCheckoutService;


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger(_console) {
        this._console = _console;
    }
    ConsoleLogger.prototype.log = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this._logToConsole.apply(this, ['log'].concat(messages));
    };
    ConsoleLogger.prototype.info = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this._logToConsole.apply(this, ['info'].concat(messages));
    };
    ConsoleLogger.prototype.warn = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this._logToConsole.apply(this, ['warn'].concat(messages));
    };
    ConsoleLogger.prototype.error = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this._logToConsole.apply(this, ['error'].concat(messages));
    };
    ConsoleLogger.prototype.debug = function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        this._logToConsole.apply(this, ['debug'].concat(messages));
    };
    ConsoleLogger.prototype._logToConsole = function (type) {
        var messages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            messages[_i - 1] = arguments[_i];
        }
        if (!this._console || !this._console[type]) {
            return;
        }
        (_a = this._console[type]).call.apply(_a, [this._console].concat(messages));
        var _a;
    };
    return ConsoleLogger;
}());
exports.default = ConsoleLogger;


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NoopLogger = /** @class */ (function () {
    function NoopLogger() {
    }
    NoopLogger.prototype.log = function () { };
    NoopLogger.prototype.info = function () { };
    NoopLogger.prototype.warn = function () { };
    NoopLogger.prototype.error = function () { };
    NoopLogger.prototype.debug = function () { };
    return NoopLogger;
}());
exports.default = NoopLogger;


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var Observable_1 = __webpack_require__(5);
var date_time_1 = __webpack_require__(240);
var errors_1 = __webpack_require__(2);
var actionTypes = __webpack_require__(85);
var InstrumentActionCreator = /** @class */ (function () {
    function InstrumentActionCreator(_instrumentRequestSender) {
        this._instrumentRequestSender = _instrumentRequestSender;
    }
    InstrumentActionCreator.prototype.loadInstruments = function () {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.LOAD_INSTRUMENTS_REQUESTED));
            var session = _this._getSessionContext(store);
            var token = _this._getCurrentAccessToken(store);
            var shippingAddress = _this._getShippingAddress(store);
            return _this._getValidAccessToken(token)
                .then(function (currentToken) {
                return _this._instrumentRequestSender.loadInstruments(tslib_1.__assign({}, session, { authToken: currentToken.vaultAccessToken }), shippingAddress)
                    .then(function (_a) {
                    var body = _a.body;
                    observer.next(data_store_1.createAction(actionTypes.LOAD_INSTRUMENTS_SUCCEEDED, body, currentToken));
                    observer.complete();
                });
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.LOAD_INSTRUMENTS_FAILED, response));
            });
        }); };
    };
    InstrumentActionCreator.prototype.deleteInstrument = function (instrumentId) {
        var _this = this;
        return function (store) { return Observable_1.Observable.create(function (observer) {
            observer.next(data_store_1.createAction(actionTypes.DELETE_INSTRUMENT_REQUESTED, undefined, { instrumentId: instrumentId }));
            var session = _this._getSessionContext(store);
            var token = _this._getCurrentAccessToken(store);
            return _this._getValidAccessToken(token)
                .then(function (currentToken) {
                return _this._instrumentRequestSender.deleteInstrument(tslib_1.__assign({}, session, { authToken: currentToken.vaultAccessToken }), instrumentId)
                    .then(function () {
                    observer.next(data_store_1.createAction(actionTypes.DELETE_INSTRUMENT_SUCCEEDED, undefined, tslib_1.__assign({ instrumentId: instrumentId }, currentToken)));
                    observer.complete();
                });
            })
                .catch(function (response) {
                observer.error(data_store_1.createErrorAction(actionTypes.DELETE_INSTRUMENT_FAILED, response, { instrumentId: instrumentId }));
            });
        }); };
    };
    InstrumentActionCreator.prototype._isValidVaultAccessToken = function (token) {
        if (!token || !token.vaultAccessToken) {
            return false;
        }
        var expiryBuffer = 2;
        var expiry = date_time_1.addMinutes(new Date(token.vaultAccessExpiry), expiryBuffer);
        return date_time_1.isFuture(expiry);
    };
    InstrumentActionCreator.prototype._getCurrentAccessToken = function (store) {
        var instruments = store.getState().instruments;
        var meta = instruments.getInstrumentsMeta();
        if (!meta) {
            return;
        }
        return {
            vaultAccessToken: meta.vaultAccessToken,
            vaultAccessExpiry: meta.vaultAccessExpiry,
        };
    };
    InstrumentActionCreator.prototype._getValidAccessToken = function (token) {
        return token && this._isValidVaultAccessToken(token)
            ? Promise.resolve(token)
            : this._instrumentRequestSender.getVaultAccessToken()
                .then(function (_a) {
                var _b = _a.body, body = _b === void 0 ? {} : _b;
                return ({
                    vaultAccessToken: body.data.token,
                    vaultAccessExpiry: body.data.expires_at,
                });
            });
    };
    InstrumentActionCreator.prototype._getShippingAddress = function (store) {
        var state = store.getState();
        return state.shippingAddress.getShippingAddress();
    };
    InstrumentActionCreator.prototype._getSessionContext = function (store) {
        var state = store.getState();
        var config = state.config.getStoreConfig();
        var customer = state.customer.getCustomer();
        if (!config || !customer) {
            throw new errors_1.MissingDataError('Unable to proceed because "config" or "customer" data is missing.');
        }
        var customerId = customer.customerId;
        var storeId = config.storeProfile.storeId;
        return {
            customerId: customerId,
            storeId: storeId,
        };
    };
    return InstrumentActionCreator;
}());
exports.default = InstrumentActionCreator;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var add_minutes_1 = __webpack_require__(241);
exports.addMinutes = add_minutes_1.default;
var is_future_1 = __webpack_require__(242);
exports.isFuture = is_future_1.default;


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function addMinutes(date, amount) {
    var newDate = new Date(date.getTime());
    newDate.setMinutes(date.getMinutes() + amount);
    return newDate;
}
exports.default = addMinutes;


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFuture(date) {
    return date.valueOf() > Date.now();
}
exports.default = isFuture;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var InstrumentRequestSender = /** @class */ (function () {
    function InstrumentRequestSender(_client, _requestSender) {
        this._client = _client;
        this._requestSender = _requestSender;
    }
    InstrumentRequestSender.prototype.getVaultAccessToken = function (_a) {
        var timeout = (_a === void 0 ? {} : _a).timeout;
        var url = '/internalapi/v1/checkout/payments/vault-access-token';
        return this._requestSender.get(url, { timeout: timeout });
    };
    InstrumentRequestSender.prototype.loadInstruments = function (requestContext, shippingAddress) {
        return (shippingAddress) ?
            this._loadInstrumentsWithAddress(requestContext, shippingAddress) :
            this._loadInstruments(requestContext);
    };
    InstrumentRequestSender.prototype.deleteInstrument = function (requestContext, instrumentId) {
        var _this = this;
        var payload = tslib_1.__assign({}, requestContext, { instrumentId: instrumentId });
        return new Promise(function (resolve, reject) {
            _this._client.deleteShopperInstrument(payload, function (error, response) {
                if (error) {
                    reject(_this._transformResponse(error));
                }
                else {
                    resolve(_this._transformResponse(response));
                }
            });
        });
    };
    InstrumentRequestSender.prototype._loadInstruments = function (requestContext) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._client.loadInstruments(requestContext, function (error, response) {
                if (error) {
                    reject(_this._transformResponse(error));
                }
                else {
                    resolve(_this._transformResponse(response));
                }
            });
        });
    };
    InstrumentRequestSender.prototype._loadInstrumentsWithAddress = function (requestContext, shippingAddress) {
        var _this = this;
        var payload = tslib_1.__assign({}, requestContext, { shippingAddress: shippingAddress });
        return new Promise(function (resolve, reject) {
            _this._client.loadInstrumentsWithAddress(payload, function (error, response) {
                if (error) {
                    reject(_this._transformResponse(error));
                }
                else {
                    resolve(_this._transformResponse(response));
                }
            });
        });
    };
    InstrumentRequestSender.prototype._transformResponse = function (_a) {
        var body = _a.data, status = _a.status, statusText = _a.statusText;
        return {
            headers: {},
            body: body,
            status: status,
            statusText: statusText,
        };
    };
    return InstrumentRequestSender;
}());
exports.default = InstrumentRequestSender;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var instrument_state_1 = __webpack_require__(86);
var InstrumentSelector = /** @class */ (function () {
    function InstrumentSelector(_instruments) {
        if (_instruments === void 0) { _instruments = instrument_state_1.DEFAULT_STATE; }
        this._instruments = _instruments;
    }
    InstrumentSelector.prototype.getInstruments = function () {
        return this._instruments.data;
    };
    InstrumentSelector.prototype.getInstrumentsMeta = function () {
        return this._instruments.meta;
    };
    InstrumentSelector.prototype.getLoadError = function () {
        return this._instruments.errors && this._instruments.errors.loadError;
    };
    InstrumentSelector.prototype.getDeleteError = function (instrumentId) {
        if (!this._instruments.errors || (instrumentId && this._instruments.errors.failedInstrument !== instrumentId)) {
            return;
        }
        return this._instruments.errors.deleteError;
    };
    InstrumentSelector.prototype.isLoading = function () {
        return !!(this._instruments.statuses && this._instruments.statuses.isLoading);
    };
    InstrumentSelector.prototype.isDeleting = function (instrumentId) {
        if (!this._instruments.statuses || (instrumentId && this._instruments.statuses.deletingInstrument !== instrumentId)) {
            return false;
        }
        return !!this._instruments.statuses.isDeleting;
    };
    return InstrumentSelector;
}());
exports.default = InstrumentSelector;


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var data_store_1 = __webpack_require__(1);
var actionTypes = __webpack_require__(85);
var instrument_state_1 = __webpack_require__(86);
function instrumentReducer(state, action) {
    if (state === void 0) { state = instrument_state_1.DEFAULT_STATE; }
    var reducer = data_store_1.combineReducers({
        data: dataReducer,
        errors: errorsReducer,
        meta: metaReducer,
        statuses: statusesReducer,
    });
    return reducer(state, action);
}
exports.default = instrumentReducer;
function dataReducer(data, action) {
    if (data === void 0) { data = instrument_state_1.DEFAULT_STATE.data; }
    switch (action.type) {
        case actionTypes.LOAD_INSTRUMENTS_SUCCEEDED:
            return action.payload.vaulted_instruments || [];
        case actionTypes.DELETE_INSTRUMENT_SUCCEEDED:
            return (data || []).filter(function (instrument) {
                return instrument.bigpay_token !== action.meta.instrumentId;
            });
        default:
            return data;
    }
}
function metaReducer(meta, action) {
    switch (action.type) {
        case actionTypes.LOAD_INSTRUMENTS_SUCCEEDED:
        case actionTypes.DELETE_INSTRUMENT_SUCCEEDED:
            return tslib_1.__assign({}, meta, action.meta);
        default:
            return meta;
    }
}
function errorsReducer(errors, action) {
    if (errors === void 0) { errors = instrument_state_1.DEFAULT_STATE.errors; }
    switch (action.type) {
        case actionTypes.LOAD_INSTRUMENTS_REQUESTED:
        case actionTypes.LOAD_INSTRUMENTS_SUCCEEDED:
            return tslib_1.__assign({}, errors, { loadError: undefined });
        case actionTypes.DELETE_INSTRUMENT_REQUESTED:
        case actionTypes.DELETE_INSTRUMENT_SUCCEEDED:
            return tslib_1.__assign({}, errors, { deleteError: undefined, failedInstrument: undefined });
        case actionTypes.LOAD_INSTRUMENTS_FAILED:
            return tslib_1.__assign({}, errors, { loadError: action.payload });
        case actionTypes.DELETE_INSTRUMENT_FAILED:
            return tslib_1.__assign({}, errors, { deleteError: action.payload, failedInstrument: action.meta.instrumentId });
        default:
            return errors;
    }
}
function statusesReducer(statuses, action) {
    if (statuses === void 0) { statuses = instrument_state_1.DEFAULT_STATE.statuses; }
    switch (action.type) {
        case actionTypes.LOAD_INSTRUMENTS_REQUESTED:
            return tslib_1.__assign({}, statuses, { isLoading: true });
        case actionTypes.DELETE_INSTRUMENT_REQUESTED:
            return tslib_1.__assign({}, statuses, { isDeleting: true, deletingInstrument: action.meta.instrumentId });
        case actionTypes.LOAD_INSTRUMENTS_SUCCEEDED:
        case actionTypes.LOAD_INSTRUMENTS_FAILED:
            return tslib_1.__assign({}, statuses, { isLoading: false });
        case actionTypes.DELETE_INSTRUMENT_SUCCEEDED:
        case actionTypes.DELETE_INSTRUMENT_FAILED:
            return tslib_1.__assign({}, statuses, { isDeleting: false, deletingInstrument: undefined });
        default:
            return statuses;
    }
}


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var create_request_error_factory_1 = __webpack_require__(247);
exports.createRequestErrorFactory = create_request_error_factory_1.default;
var request_error_factory_1 = __webpack_require__(88);
exports.RequestErrorFactory = request_error_factory_1.default;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errors_1 = __webpack_require__(9);
var errors_2 = __webpack_require__(2);
var request_error_factory_1 = __webpack_require__(88);
function createRequestErrorFactory() {
    var factory = new request_error_factory_1.default();
    var unrecoverableErrorTypes = [
        'catalog_only',
        'empty_cart',
        'invalid_order_id',
        'invalid_order_token',
        'missing_order_token',
        'missing_provider_token',
        'missing_shipping_method',
        'order_completion_error',
        'order_could_not_be_finalized_error',
        'order_create_failed',
        'provider_fatal_error',
        'provider_setup_error',
        'stock_too_low',
    ];
    unrecoverableErrorTypes.forEach(function (type) {
        factory.register(type, function (response, message) { return new errors_2.UnrecoverableError(response, message); });
    });
    factory.register('invalid_payment_provider', function (response) { return new errors_1.PaymentMethodInvalidError(response); });
    factory.register('payment_config_not_found', function (response) { return new errors_1.PaymentMethodInvalidError(response); });
    return factory;
}
exports.default = createRequestErrorFactory;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var from_1 = __webpack_require__(249);
var operators_1 = __webpack_require__(250);
function createActionTransformer(requestErrorFactory) {
    return function (action$) { return from_1.from(action$).pipe(operators_1.catchError(function (action) {
        if (action instanceof Error || action.payload instanceof Error) {
            throw action;
        }
        if (isResponse(action.payload)) {
            throw tslib_1.__assign({}, action, { payload: requestErrorFactory.createError(action.payload) });
        }
        throw action;
    })); };
}
exports.default = createActionTransformer;
function isResponse(object) {
    if (!object || typeof object !== 'object') {
        return false;
    }
    return ['body', 'headers', 'status', 'statusText'].every(function (key) {
        return object.hasOwnProperty(key);
    });
}


/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = require("rxjs/observable/from");

/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var data_store_1 = __webpack_require__(1);
var cart_1 = __webpack_require__(11);
var config_1 = __webpack_require__(26);
var coupon_1 = __webpack_require__(15);
var customer_1 = __webpack_require__(19);
var geography_1 = __webpack_require__(27);
var order_1 = __webpack_require__(16);
var payment_1 = __webpack_require__(13);
var instrument_1 = __webpack_require__(43);
var quote_1 = __webpack_require__(17);
var remote_checkout_1 = __webpack_require__(21);
var shipping_1 = __webpack_require__(28);
function createCheckoutStoreReducer() {
    return data_store_1.combineReducers({
        cart: cart_1.cartReducer,
        config: config_1.configReducer,
        countries: geography_1.countryReducer,
        coupons: coupon_1.couponReducer,
        customer: customer_1.customerReducer,
        customerStrategies: customer_1.customerStrategyReducer,
        giftCertificates: coupon_1.giftCertificateReducer,
        instruments: instrument_1.instrumentReducer,
        order: order_1.orderReducer,
        payment: payment_1.paymentReducer,
        paymentMethods: payment_1.paymentMethodReducer,
        paymentStrategies: payment_1.paymentStrategyReducer,
        quote: quote_1.quoteReducer,
        remoteCheckout: remote_checkout_1.remoteCheckoutReducer,
        shippingCountries: shipping_1.shippingCountryReducer,
        shippingOptions: shipping_1.shippingOptionReducer,
        shippingStrategies: shipping_1.shippingStrategyReducer,
    });
}
exports.default = createCheckoutStoreReducer;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var billing_1 = __webpack_require__(23);
var cart_1 = __webpack_require__(11);
var utility_1 = __webpack_require__(8);
var config_1 = __webpack_require__(26);
var coupon_1 = __webpack_require__(15);
var customer_1 = __webpack_require__(19);
var form_1 = __webpack_require__(253);
var geography_1 = __webpack_require__(27);
var order_1 = __webpack_require__(16);
var payment_1 = __webpack_require__(13);
var instrument_1 = __webpack_require__(43);
var quote_1 = __webpack_require__(17);
var remote_checkout_1 = __webpack_require__(21);
var shipping_1 = __webpack_require__(28);
function createInternalCheckoutSelectors(state, options) {
    if (options === void 0) { options = {}; }
    var billingAddress = new billing_1.BillingAddressSelector(state.quote);
    var cart = new cart_1.CartSelector(state.cart);
    var config = new config_1.ConfigSelector(state.config);
    var countries = new geography_1.CountrySelector(state.countries);
    var coupons = new coupon_1.CouponSelector(state.coupons);
    var customer = new customer_1.CustomerSelector(state.customer);
    var customerStrategies = new customer_1.CustomerStrategySelector(state.customerStrategies);
    var form = new form_1.FormSelector(state.config);
    var giftCertificates = new coupon_1.GiftCertificateSelector(state.giftCertificates);
    var instruments = new instrument_1.InstrumentSelector(state.instruments);
    var order = new order_1.OrderSelector(state.order, state.customer, state.cart);
    var paymentMethods = new payment_1.PaymentMethodSelector(state.paymentMethods, state.order);
    var paymentStrategies = new payment_1.PaymentStrategySelector(state.paymentStrategies);
    var quote = new quote_1.QuoteSelector(state.quote);
    var remoteCheckout = new remote_checkout_1.RemoteCheckoutSelector(state.remoteCheckout, state.customer);
    var shippingAddress = new shipping_1.ShippingAddressSelector(state.quote);
    var shippingCountries = new shipping_1.ShippingCountrySelector(state.shippingCountries);
    var shippingOptions = new shipping_1.ShippingOptionSelector(state.shippingOptions, state.quote);
    var shippingStrategies = new shipping_1.ShippingStrategySelector(state.shippingStrategies);
    var selectors = {
        billingAddress: billingAddress,
        cart: cart,
        config: config,
        countries: countries,
        coupons: coupons,
        customer: customer,
        customerStrategies: customerStrategies,
        form: form,
        giftCertificates: giftCertificates,
        instruments: instruments,
        order: order,
        paymentMethods: paymentMethods,
        paymentStrategies: paymentStrategies,
        quote: quote,
        remoteCheckout: remoteCheckout,
        shippingAddress: shippingAddress,
        shippingCountries: shippingCountries,
        shippingOptions: shippingOptions,
        shippingStrategies: shippingStrategies,
    };
    return options.shouldWarnMutation ? utility_1.createFreezeProxies(selectors) : selectors;
}
exports.default = createInternalCheckoutSelectors;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var form_selector_1 = __webpack_require__(254);
exports.FormSelector = form_selector_1.default;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var lodash_1 = __webpack_require__(4);
var selector_1 = __webpack_require__(3);
var FormSelector = /** @class */ (function () {
    function FormSelector(_config) {
        this._config = _config;
    }
    FormSelector.prototype.getShippingAddressFields = function (countries, countryCode) {
        var _this = this;
        if (countries === void 0) { countries = []; }
        var selectedCountry = lodash_1.find(countries, { code: countryCode });
        var fields = this._config.data ? this._config.data.storeConfig.formFields.shippingAddressFields : [];
        return fields.map(function (field) { return _this._processField(field, countries, selectedCountry); });
    };
    FormSelector.prototype.getBillingAddressFields = function (countries, countryCode) {
        var _this = this;
        if (countries === void 0) { countries = []; }
        var selectedCountry = lodash_1.find(countries, { code: countryCode });
        var fields = this._config.data ? this._config.data.storeConfig.formFields.billingAddressFields : [];
        return fields.map(function (field) { return _this._processField(field, countries, selectedCountry); });
    };
    FormSelector.prototype._processField = function (field, countries, selectedCountry) {
        if (field.name === 'countryCode') {
            return this._processCountry(field, countries, selectedCountry);
        }
        if (field.name === 'stateOrProvince') {
            return this._processProvince(field, selectedCountry);
        }
        if (field.name === 'postalCode') {
            return this._processsPostCode(field, selectedCountry);
        }
        return field;
    };
    FormSelector.prototype._processCountry = function (field, countries, country) {
        if (countries === void 0) { countries = []; }
        if (!countries.length) {
            return field;
        }
        var _a = (country || {}).code, code = _a === void 0 ? '' : _a;
        var items = countries.map(function (_a) {
            var code = _a.code, name = _a.name;
            return ({
                value: code,
                label: name,
            });
        });
        return tslib_1.__assign({}, field, { options: { items: items }, default: code, type: 'array', fieldType: 'dropdown', itemtype: 'string' });
    };
    FormSelector.prototype._processProvince = function (field, country) {
        var _a = (country || {}).subdivisions, subdivisions = _a === void 0 ? [] : _a;
        if (!subdivisions.length) {
            return tslib_1.__assign({}, field, { required: false });
        }
        var items = subdivisions.map(function (_a) {
            var code = _a.code, name = _a.name;
            return ({
                value: code,
                label: name,
            });
        });
        return tslib_1.__assign({}, field, { name: 'stateOrProvinceCode', options: { items: items }, required: true, type: 'array', fieldType: 'dropdown', itemtype: 'string' });
    };
    FormSelector.prototype._processsPostCode = function (field, country) {
        var _a = (country || {}).hasPostalCodes, hasPostalCodes = _a === void 0 ? [] : _a;
        if (hasPostalCodes === undefined) {
            return field;
        }
        return tslib_1.__assign({}, field, { required: Boolean(hasPostalCodes) });
    };
    FormSelector = tslib_1.__decorate([
        selector_1.selector
    ], FormSelector);
    return FormSelector;
}());
exports.default = FormSelector;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var create_language_service_1 = __webpack_require__(256);
exports.createLanguageService = create_language_service_1.default;
var language_service_1 = __webpack_require__(89);
exports.LanguageService = language_service_1.default;


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = __webpack_require__(84);
var language_service_1 = __webpack_require__(89);
/**
 * Creates an instance of `LanguageService`.
 *
 * ```js
 * const language = {{{langJson 'optimized_checkout'}}}; // `langJson` is a Handlebars helper provided by BigCommerce's Stencil template engine.
 * const service = createLanguageService(language);
 *
 * console.log(service.translate('address.city_label'));
 * ```
 *
 * @param config - A configuration object.
 * @returns An instance of `LanguageService`.
 */
function createLanguageService(config) {
    if (config === void 0) { config = {}; }
    return new language_service_1.default(config, log_1.getDefaultLogger());
}
exports.default = createLanguageService;


/***/ }),
/* 257 */
/***/ (function(module, exports) {

module.exports = require("messageformat");

/***/ })
/******/ ]);
//# sourceMappingURL=checkout-sdk.js.map