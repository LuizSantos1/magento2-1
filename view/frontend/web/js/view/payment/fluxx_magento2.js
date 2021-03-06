/**
 * Copyright © Fluxx. All rights reserved.
 * See COPYING.txt for license details.
 */
define(
    [
        "uiComponent",
        "Magento_Checkout/js/model/payment/renderer-list"
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(
            {
                type: "fluxx_magento2",
                component: "Fluxx_Magento2/js/view/payment/method-renderer/fluxx_magento2"
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);
