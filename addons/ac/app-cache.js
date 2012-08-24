/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
/*global YUI,process,require*/

// setup a global var for caching
var serverCache = {},
    cacheDir = null;

YUI.add('app-cache-addon', function(Y, NAME) {

    var libfs = require('fs');
    function Addon(command, adapter, ac) {
        var self = this;
        self.ac = ac;
    }
    
    Addon.prototype = {
        namespace: 'app_cache',

        /**
         * fetches the data from cache.
         * will read from persistent storage if not in cache
         */
        getData: function(key) {
            var data = serverCache[key],
                out = null,
                file;
            if (!data) {
                try {
                    file = this._getCacheDir() + '/static_list.json';
                    data = libfs.readFileSync(file);
                    data = Y.JSON.parse(data);
                    serverCache[key] = data;
                    // Y.log('-- CACHE MISS', 'debug', NAME);
                } catch (err) {
                    Y.log('error loading data from FS', 'error', NAME);
                    Y.log(err, 'error', NAME);
                }
            }
            return data;
        },

        /**
         * abstract this part so that we can run on Manhattan
         */
        _getAppDir: function() {
            var pwd;
            pwd = process.cwd();
            // Y.log('-- current working dir: ' + pwd, 'info', NAME);
            return pwd;
        },
        _getCacheDir: function() {
            if (null === cacheDir) {
                cacheDir = this._getAppDir() + '/config';
            }
            return cacheDir;
        },

        get: function(modelName) {
            var model = this.ac.models[modelName];
            if (model) {
                if (model.setDebug) {
                    model.setDebug(this.ac.debug);
                }
                return model;
            }
            return null;
        }
    };
    
    Y.mojito.addons.ac.godmother_cache = Addon;

}, '0.0.1', {requires: []});
