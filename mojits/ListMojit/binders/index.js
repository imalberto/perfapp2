/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ListMojitBinderIndex', function(Y, NAME) {

/**
 * The ListMojitBinderIndex module.
 *
 * @module ListMojitBinderIndex
 */

    /**
     * Constructor for the ListMojitBinderIndex class.
     *
     * @class ListMojitBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;

			this.node.all('a[href*=".yahoo.com/"]').on("click", function(event){
				window.open(event.target.getAttribute("href"));
			});
        }

    };

}, '0.0.1', {requires: ['mojito-client']});
