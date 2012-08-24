/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ListMojit', function(Y, NAME) {

/**
 * The ListMojit module.
 *
 * @module ListMojit
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {

        index: function(ac) {
            return this.__call(ac);
        },
        __call: function(ac) {
           
            var result,
                results;

            ac.assets.addCss('./index.css');

            result = {};
            result.title = "Progressive insurance on defense after court case";
            result.description = "The Progressive Corp. insurance group is defending itself against an onslaught of negative publicity after it tried to avoid paying $75,000 to the family of a client killed in a car crash and tried to blame the wreck on her.";
            result.showTitle = true;
            result.showDescription = true;
            result.showImage = false;

            results = [
                result
            ];

            ac.done(
            {
                results: results
            },
            {
                view: {
                    engine: 'mu'
                }
            }
            );
        }

    };

}, '0.0.1', { requires: [
    'mojito'
]});
