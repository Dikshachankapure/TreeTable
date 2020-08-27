sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.ZTreeTable.controller.View1", {
		onInit: function () {
				var oModel = this.getOwnerComponent().getModel("ClothingDataSet");
			this.getView().setModel(oModel);
		}
	});
});