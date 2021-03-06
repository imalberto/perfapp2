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
			ac.assets.addCss('./index.css');
            if (ac.params.getFromMerged('firstbyte')) {
                if (Y.Lang.isUndefined(ac.firstbyte)) {
                    return ac.error('ac.firstbyte.addon not loaded.');
                }
                ac.firstbyte.done();
            } else {
                ac.composite.done();
            }
        }
    };

}, '0.0.1', {requires: ['mojito', 'mojito-firstbyte-addon']});
