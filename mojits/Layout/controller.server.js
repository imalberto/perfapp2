/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Layout', function(Y, NAME) {

/**
 * The Layout module.
 *
 * @module Layout
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {
        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            // NOTE: last opportunity to add assets to the frame + layout
			ac.assets.addCss('./index.css');
            ac.assets.addCss('./Layout-css-asset.css');
            if (ac.params.getFromMerged('firstbyte')) {
                ac.firstbyte.done();
            } else {
                ac.composite.done();
            }
        }
    };

}, '0.0.1', {requires: ['mojito', 'mojito-firstbyte-addon']});
