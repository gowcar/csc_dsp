/*jslint white: true, browser: true, windows: true, forin: true,  undef: true,
    eqeqeq: true, plusplus: true, bitwise: true, regexp: true, immed: true */

/*global window: false, FusionCharts: false, document: false*/

/*!
 * FusionCharts JavaScript Library
 * Copyright FusionCharts Technologies LLP
 * License Information at <http://www.fusioncharts.com/license>
 *
 * @author FusionCharts Technologies LLP
 * @version 1.0.0 (initially designed for 3.2.2-release.3800)
 *
 * @description
 * This module contains the methods to extend the jQuery framework to 
 * support methods for performing various operations on FusionCharts 
 * object.
 *
 * Third-party attributions:
 * SWFObject v2.2 <http://code.google.com/p/swfobject/>
 * JSON v2 <http://www.JSON.org/js.html>
 * Firebug Lite 1.3.0 <http://getfirebug.com/firebuglite>
 * jQuery 1.4.2 <http://jquery.com/>
 */

(function () {

    // Register the module with FusionCharts.
    var global = FusionCharts(['private', 'extensions.jQueryPlugin']);
    // Check whether the module has been already registered. If true, then
    // do not bother to re-register.
    if (global === undefined) {
        return;
    }

    var jQ = window.jQuery,
        renderFusionCharts,
        captureAllFusionChartsEvents,
        getChartObjectsFromSelection,
        configureLinkedCharts;
    
    // Assign FusionCharts object to global jQuery object for easy use.
    jQ.FusionCharts = global.core;

    /**
     * Used purely for rendering the FusionCharts.
     * Acts as a common method that is invoked by all the APIs that create a
     * FusionChart object
     *
     * @param {jQuery Array} elemList is a list of all the HTML elements that
     * are selected using the jQuery selectors
     *
     * @param {Object} chartOptions is the options that are to be passed to
     * the FusionCharts contructor.
     */
    renderFusionCharts = function (elemList, chartOptions) {
        var i, l, cO, chartObj, scriptElement;

        if (chartOptions instanceof Array || chartOptions instanceof jQ) {
            l = Math.min(elemList.length, chartOptions.length)
        } else {
            l = elemList.length;
        }
        
        for (i = 0; i < l; i += 1) {

            // One-to-one mapping with the HTML elements in case of 
            // multiple option objects.
            if (chartOptions instanceof Array || chartOptions instanceof jQ) {
                cO = chartOptions[i];
            } else {
                cO = chartOptions;
            }
            
            // check if the element is appended to the window document or not.
            if (elemList[i].parentNode) {
                // Adding the renderAt option to the chartOptions tells the
                // constructor where to render the FusionCharts object.
                global.core.render(jQ.extend({}, cO, {
                    renderAt: elemList[i]
                }));
            } else {
                chartObj = new FusionCharts(jQ.extend({}, cO, {
                    renderAt: elemList[i]
                }));
                
                if (!jQ.FusionCharts.delayedRender) {
                    jQ.FusionCharts.delayedRender = {};
                }
                jQ.FusionCharts.delayedRender[chartObj.id] = elemList[i];
                
                scriptElement = document.createElement("script");
                scriptElement.setAttribute('type', 'text/javascript');

                if (/*@cc_on!@*/false) {
                    scriptElement.text = "FusionCharts.items['" + chartObj.id + "'].render();";
                } else {
                    scriptElement.appendChild(
                        document.createTextNode("FusionCharts.items['" + chartObj.id + "'].render();")
                    );
                }
                elemList[i].appendChild(scriptElement);
            }
        }
        return elemList;
    };

    /**
     *  Using jQuery's event model for attaching handlers to FusionCharts events.
     *  This is achieved by listening to the FusionCharts "*" event and then 
     *  triggering a jQuery event on the associated DOM element.
     */
    captureAllFusionChartsEvents = function (event, args) {
        var containerElement;

        // Extending our event with the jQuery event model for proper
        // delegation and bubbling.
        jQ.extend(event, jQ.Event("fusioncharts" + event.eventType));

        // Checking if there is an associated DOM object
        if (event.sender && event.sender.options && event.sender.options.containerElementId) {
            containerElement = event.sender.options.containerElementId;

            if (typeof containerElement === "object") {
                jQ(containerElement).trigger(event, args);
            } else if (jQ("#" + containerElement).length) {
                jQ("#" + containerElement).trigger(event, args);
            } else {
                jQ(document).trigger(event, args);
            }
        } else {
            // If there is no DOM object associated with the FusionCharts object
            // then triggering the event on the document itself for any possible
            // global handlers that might want to capture it.
            jQ(document).trigger(event, args);
        }
    };
    
    global.addEventListener("*", captureAllFusionChartsEvents);

    /**
     * Used to select all the HTML object/embed elements that have been created
     * using the FusionCharts constructor
     *
     * @param {jQuery} obj, the selection of elements that need to be processed.
     *
     */
    getChartObjectsFromSelection = function (obj) {

        // The HTML object/embed may be part of the current selection or a
        // child of the current selection. Need to take both cases into account.
        // @note If the FusionCharts object has not been rendered yet, e.g in
        // case the container is not appended to the document, then 'find' for 
        // that element will NOT return the corresponding FusionCharts object.
        return obj.filter(":FusionCharts").add(obj.find(":FusionCharts"));
    };

    /**
     *  Used to configure the links at various levels in a linked chart.
     *
     *  @param {jQuery} chartObjects The FusionCharts objects for which the link
     *  has to be configured.
     *  
     *  @param {Object} linkConfigObj contains the configuration details of the
     *  linked chart like swfUrl, height, width etc.
     *
     *  @param {String} level contains the level at which the user wants to
     *  configure the link.
     *
     */
    configureLinkedCharts = function (chartObjects, linkConfigObj, level) {

        if (typeof linkConfigObj === "object") {
            chartObjects.each(function () {
                this.configureLink(linkConfigObj, level);
            });
        }
    };
     
    /**
     * @id: jQuery.fn.insertFusionCharts
     * @id: $.fn.insertFusionCharts
     *
     * @param {Object} options contains the parameters that need to be passed
     * to the FusionCharts constructor
     *
     * Inserts the FusionCharts objects in the HTML elements that are selected
     * by the jQuery selector.
     */
    jQ.fn.insertFusionCharts = function (options) {
        return renderFusionCharts(this, options);

    };

    /**
     * @id: jQuery.fn.appendFusionCharts
     * @id: $.fn.appendFusionCharts
     *
     * @param {Object} options contains that parameters that need to be passed
     * to the FusionCharts constructor
     *
     * Appends the FusionCharts objects immediately after the HTML elements
     * that are selected by the jQuery selector.
     */
    jQ.fn.appendFusionCharts = function (options) {
        options.insertMode = 'append';
        return renderFusionCharts(this, options);
    };

    /**
     * @id: jQuery.fn.prependFusionCharts
     * @id: $.fn.prependFusionCharts
     *
     * @param {Object} options contains the parameters that need to be passed
     * to the FusionCharts constructor
     *
     *  Prepends the FusionCharts objects before the HTML elements that are
     *  selected by the jQuery selector.
     */
    jQ.fn.prependFusionCharts = function (options) {
        options.insertMode = 'prepend';
        return renderFusionCharts(this, options);
    };

    /**
     * @id: jQuery.fn.attrFusionCharts
     * @id: $.fn.attrFusionCharts
     *
     * @param {Object String} attr, If this is a string then it contains
     * the FusionCharts object's attribute that needs to be set or fetched.
     * If it is an object then, it contains the attributes along with the
     * corresponding values that need to be set on the FusionCharts object
     *
     * @param {String} attrVal, To be used if attr is a string. Contains the
     * value that needs to be set for the attribute that attr corresponds to.
     *
     *  Used to set or get the attribute(s) of the FusionCharts object.
     */
    jQ.fn.attrFusionCharts = function (attr, attrVal) {

        /**
         * @var {jQuery} chartsObjects stores the FusionCharts objects in
         * the selected HTML elements.
         * @var {Object} transfer Holds all atttributes to be returned to the
         * callee Function.
         */
        var transfer = [],
            chartObjects = getChartObjectsFromSelection(this);

        if (attrVal !== undefined) {
            // Set the charts attribute attr with value attrVal.

            chartObjects.each(function () {
                this.FusionCharts.setChartAttribute(attr, attrVal);
            });
            return this;
        }
        if (typeof attr === "object") {
             // Set the charts attributes, in the passed object's keys with
             // the corresponding values.

            chartObjects.each(function () {
                this.FusionCharts.setChartAttribute(attr);
            });
            return this;
        }

        // If both the above cases fail, user is trying to, in accordance with the
        // jQuery paradigm, get the value of the arrtibute.
        chartObjects.each(function () {
            transfer.push(
                this.FusionCharts.getChartAttribute(attr)
            );
        });
        return transfer;
    };

    /**
     * @id jQuery.fn.updateFusionCharts
     * @id $.fn.updateFusionCharts
     *
     * @param {Object} options Contains the new options that the FusionCharts
     * objects need to update themselves with. Currently, using this interface
     * the dataType, data, width, height, debugMode and swfUrl can be updated.
     */
    jQ.fn.updateFusionCharts = function (options) {

        var i, 
            l, 
            fcChart, 
            renderFlag, 
            optStr, 
            filterOpts = {},
            chartObjects = getChartObjectsFromSelection(this),
        
            updateOptions = [
                ["swfUrl", false],
                ["height", false],
                ["width", false],
                ["bgColor", true],
                ["renderer", true],
                ["dataFormat", false],
                ["dataSource", false],
                ["detectFlashVersion", true],
                ["autoInstallRedirect", true],
                ["lang", true],
                ["scaleMode", true],
                ["debugMode", true]
            ];
        
        for (i = 0, l = updateOptions.length; i < l; i += 1) {
            optStr = updateOptions[i][0];
            
            if (options[optStr]) {
                if (updateOptions[i][1]) {
                    renderFlag = true;
                }
                filterOpts[optStr] = options[optStr];
            }
        }
        
        chartObjects.each(function () {
            // If height and width are given then resize the chart first.
            fcChart = this.FusionCharts;
            if (renderFlag) {
                fcChart.clone(filterOpts).render();
                return;
            }

            if (filterOpts.dataSource !== undefined || filterOpts.dataFormat !== undefined) {
                if (filterOpts.dataSource === undefined) {
                    fcChart.setChartData(fcChart.args.dataSource, filterOpts.dataFormat);
                } else if (filterOpts.dataFormat === undefined) {
                    fcChart.setChartData(filterOpts.dataSource, fcChart.args.dataFormat);
                } else {
                    fcChart.setChartData(filterOpts.dataSource, filterOpts.dataFormat);
                }
            }
            if (filterOpts.width !== undefined || filterOpts.height !== undefined) {
                fcChart.resizeTo(filterOpts.width, filterOpts.height);
            }
            if (filterOpts.swfUrl) {
                fcChart.src = filterOpts.swfUrl;
                fcChart.render();
            }
        });

        return this;
    };
    
    /**
     *  @id: jQuery.fn.cloneFusionCharts
     *  @id: $.fn.cloneFusionCharts
     *
     *  @param {Object} options The options object that takes the additional
     *  parameters to be passed while cloning the FusionCharts object.
     *
     *  @param {Function} callback The callback function that has to be called
     *  once the FusionCharts objects have been cloned. This function will take
     *  the new clone objects as parameter.
     *
     */
    jQ.fn.cloneFusionCharts = function (callback, options) {
    
        var transfer, temp,
            chartObjects;

        // Check if the options parameter, which is not mandatory, has been
        // passed or not. If not, that means that options is the callback function.
        if (typeof callback !== 'function' && typeof options === 'function') {
            temp = callback
            callback = options;
            options = temp;
        }
            
        transfer = [];
        chartObjects = getChartObjectsFromSelection(this);

        chartObjects.each(function () {
            transfer.push(this.FusionCharts.clone(options, {}, true));
        });

        callback.call(jQ(transfer), transfer);

        return this;
    };


    /**
     * @id jQuery.fn.covertToFusionCharts
     * @id $.fn.convertToFusionCharts
     *
     * @param {Object} chartOpts Configuration options to generate FusionCharts.
     * See documentation to get the list.
     *
     * @param {Object} convertOpts Configuration options to convert the table
     * into a FusionCharts object.
     * See documentation to get the list.
     *
     */
    jQ.fn.convertToFusionCharts = function (chartOpts, convertOpts) {

        var transferObj = [];
        
        if (typeof chartOpts.dataConfiguration === "undefined") {
            chartOpts.dataConfiguration = {};
        }

        jQ.extend(true, chartOpts.dataConfiguration, convertOpts);

        this.each(function () {
            
            transferObj.push(jQ("<div></div>")
                .insertBefore(this)
                .insertFusionCharts(chartOpts).get(0)
            );
        });

        return jQ(transferObj);
    };

    /**
     * @id jQuery.fn.drillDownFusionChartsTo
     * @id $.fn.drillDownFusionChartsTo
     *
     * Used to set multi-level configurations of linked FusionCharts objects.
     * The levels are iterated depending on the number of configuration objects
     * in a single jQuery chain.
     *
     * To set the configuration at a specific level please refer to docs.
     */
    jQ.fn.drillDownFusionChartsTo = function () {
        var j, len, i, l, configureOpts,
            chartObjects = getChartObjectsFromSelection(this);

        // hack to support chaining of multiple drillDowns in a single chain
        if (typeof this._fcDrillDownLevel === "undefined") {
            this._fcDrillDownLevel = 0;
        }

        for (j = 0, len = arguments.length; j < len; j += 1) {
            configureOpts = arguments[j];
            
            if (configureOpts instanceof Array) {
                for (i = 0, l = configureOpts.length; i < l; i += 1) {
                    configureLinkedCharts(chartObjects, configureOpts[i], this._fcDrillDownLevel);
                    this._fcDrillDownLevel += 1;
                }
            } else {
                configureLinkedCharts(chartObjects, configureOpts, this._fcDrillDownLevel);
                this._fcDrillDownLevel += 1;
            }
        }
        return this;
    };

    jQ.extend(jQ.expr[":"], {
        /**
         *  Extending the jQuery selector to select all object/embed elements that
         *  have been created using the FusionCharts constructor i.e that are an
         *  instance of FusionCharts.
         *
         *  @param {Object} obj, Is the HTML element that is currently being
         *  checked.
         */
        FusionCharts: function (obj) {
            return (obj.FusionCharts instanceof global.core);
        }
    });

}());



