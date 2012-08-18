/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('LayoutBinderIndex', function(Y, NAME) {

/**
 * The LayoutBinderIndex module.
 *
 * @module LayoutBinderIndex
 */

    /**
     * Constructor for the LayoutBinderIndex class.
     *
     * @class LayoutBinderIndex
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

			var scrollView = new Y.ScrollView({
			        id: "scrollview",
			        srcNode : '.yui3-scrollview-loading-phone',
					width: window.width,
			        flick: {
			            minDistance: 10,
			            minVelocity: 0.3,
			            axis: "x"
			        }
			    });

			    scrollView.plug(Y.Plugin.ScrollViewPaginator, {
			        selector: '.slots'
			    });

			    scrollView.render();

				var scrollViewT = new Y.ScrollView({
			        id: "scrollviewT",
			        srcNode : '.yui3-scrollview-loading-tablet',
					width: window.width,
			        flick: {
			            minDistance: 10,
			            minVelocity: 0.3,
			            axis: "x"
			        }
			    });

			    scrollViewT.plug(Y.Plugin.ScrollViewPaginator, {
			        selector: '.yui3-g'
			    });

			    scrollViewT.render();
		}
    };

}, '0.0.1', {requires: ['mojito-client', 'scrollview', 'scrollview-paginator']});
