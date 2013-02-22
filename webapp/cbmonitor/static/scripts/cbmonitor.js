/*jshint jquery: true, browser: true*/

/*
 * Name space
 */
var CBMONITOR = CBMONITOR || {};

/*
 * Accordion with clusters/metrics/events
 */
CBMONITOR.configureAccordion = function() {
    "use strict";

    $("#accordion").accordion({
        heightStyle: "fill"
    });
};

$(document).ready(function(){
    "use strict";

    CBMONITOR.configureAccordion();

    CBMONITOR.inventory = new CBMONITOR.Inventory();
    CBMONITOR.inventory.configureButtons();
    CBMONITOR.inventory.configureTree();

    CBMONITOR.observables = new CBMONITOR.Observables();
    CBMONITOR.observables.updateSelectors();

    CBMONITOR.dialogs = new CBMONITOR.Dialogs();
    CBMONITOR.dialogs.configureAddNewCluster();
    CBMONITOR.dialogs.configureAddNewServer();
    CBMONITOR.dialogs.configureAddNewBucket();
    CBMONITOR.dialogs.configureDeleteItem();

    CBMONITOR.graphManager = new CBMONITOR.GraphManager();

    CBMONITOR.views = new CBMONITOR.Views();
    CBMONITOR.views.configurePanel();
    CBMONITOR.views.enableDroppable();
});