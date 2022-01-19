Application.$controller("QryAnimationCatalogPageController", ["$scope", function($scope) {
    "use strict";

    /* perform any action on widgets/variables within this block */
    $scope.onPageReady = function() {
        /*
         * variables can be accessed through '$scope.Variables' property here
         * e.g. to get dataSet in a staticVariable named 'loggedInUser' use following script
         * $scope.Variables.loggedInUser.getData()
         *
         * widgets can be accessed through '$scope.Widgets' property here
         * e.g. to get value of text widget named 'username' use following script
         * '$scope.Widgets.username.datavalue'
         */
        var dateOffset = (24 * 60 * 60 * 1000) * 14; //14 days
        var myDate = new Date();
        myDate.setTime(myDate.getTime() - dateOffset);
        $scope.Widgets.dateFrm.datavalue = myDate;
        $scope.Widgets.panelAnimCat.expanded = false;
        $scope.Widgets.panelExp1.expanded = false;
        $scope.Widgets.panelExp2.expanded = false;
    };


    $scope.btnQryClick = function($event, $isolateScope) {
        var m_Fromreqdat = $scope.Widgets.dateFrm.datavalue;
        var m_Toreqdat = $scope.Widgets.dateTo.datavalue;
        var m_Grp = $scope.Widgets.selectGrp.datavalue;
        var m_Anicod = $scope.Widgets.txtAniCod.datavalue;
        var m_Order = $scope.Widgets.sltOrd.datavalue;
        var m_Client = $scope.Widgets.txtClient.datavalue;
        var m_reference = $scope.Widgets.txtRef.datavalue;
        var m_ColourFrom = $scope.Widgets.txtCltFrm.datavalue;
        var m_ColourTo = $scope.Widgets.txtCltTo.datavalue;
        var m_PropOpt = $scope.Widgets.txtPropOpt.datavalue;
        var m_KeyWrd = $scope.Widgets.txtKeyWrd.datavalue;

        var date1 = new Date(m_Fromreqdat);
        var date2 = new Date(m_Toreqdat);

        var diffDays = (date2 - date1) / 86400000;

        if (!m_Anicod) {
            $scope.Variables.notifMsg.setMessage("Insert Animation Code");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (diffDays > 120) {
            $scope.Variables.notifMsg.setMessage("Please restrict date from and date to. Cannot run more than 4 months");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        if (date1 > date2) {
            $scope.Variables.notifMsg.setMessage("from date cannot be greater than to date");
            $scope.Variables.notifMsg.notify();
            return false;
        }

        $scope.Variables.svGetProcEM1000PK0_ANIM_QryAniCatlg.invoke();
        $scope.Variables.statWorkInProgress.dataSet.dataValue = 'Y';

    };


    $scope.achrLstSamClick = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.dialogLastSample.open();
    };


    $scope.achrLstOrdClick = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.dialogLastOrder.open();
    };


    $scope.achrPropOptClick = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.dialogPropOption.open();
    };


    $scope.PictureMainClick = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.dialogImageForMain.open();
    };


    $scope.btnShowSampleClick = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.dialogLastSample.open();
    };


    $scope.btnShowOrderClick = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.dialogLastOrder.open();
    };


    $scope.btnShowPropOptClick = function($event, $isolateScope, item, currentItemWidgets) {
        $scope.Widgets.dialogPropOption.open();
    };


    $scope.btnResetClick = function($event, $isolateScope) {
        $scope.Widgets.selectGrp.datavalue = "%";
        $scope.Widgets.txtAniCod.datavalue = "%";
        $scope.Widgets.sltOrd.datavalue = "%";
        $scope.Widgets.txtClient.datavalue = "%";
        $scope.Widgets.txtRef.datavalue = "%";
        $scope.Widgets.txtCltFrm.datavalue = 0;
        $scope.Widgets.txtCltTo.datavalue = 99;
        $scope.Widgets.txtPropOpt.datavalue = "%";
        $scope.Widgets.txtKeyWrd.datavalue = "%";
        $scope.Variables.svGetProcEM1000PK0_ANIM_QryAniCatlg.dataSet = null;
        $scope.Widgets.panelAnimCat.expanded = false;

    };


    $scope.svGetProcEM1000PK0_ANIM_PrssCodonSuccess = function(variable, data, options) {
        var m_FullProcessList = "";
        for (var i = 0; i < $scope.Widgets.chkboxPrssCod.dataset.length; i++) {
            m_FullProcessList = m_FullProcessList + $scope.Widgets.chkboxPrssCod.dataset[i].process + ',';
        }
        var str1 = m_FullProcessList;
        str1 = str1.substring(0, str1.length - 1);

        $scope.Widgets.chkboxPrssCod.datavalue = str1;
    };


    $scope.svGetProcEM1000PK0_ANIM_QryAniCatlgonSuccess = function(variable, data, options) {
        $scope.Variables.statWorkInProgress.dataSet.dataValue = 'N';

        if (data.poutAnimations.length <= 0) {
            $scope.Widgets.pnlFilter.expanded = true;
        } else {
            $scope.Widgets.pnlFilter.expanded = false;
        }

        $scope.Widgets.panelAnimCat.expanded = true;
    };

    $scope.svGetProcEM1000PK0_ANIM_QryAniCatlgonError = function(variable, data, options) {
        $scope.Variables.statWorkInProgress.dataSet.dataValue = 'N';
        if (data !== undefined) {
            $scope.Variables.notifMsg.setAlertType("error");
            $scope.Variables.notifMsg.setMessage(data);
            $scope.Variables.notifMsg.notify();
            return false;
        }
    };


    $scope.txtAniCodChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtAniCod.datavalue = newVal.toUpperCase();
    };


    $scope.txtClientChange = function($event, $isolateScope, newVal, oldVal) {
        $scope.Widgets.txtClient.datavalue = newVal.toUpperCase();
    };

}]);

Application.$controller("dialogLastSampleController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.PictureLastSamClick = function($event, $isolateScope, item, currentItemWidgets) {
            $scope.Widgets.dialogImageForSample.open();
        };

    }
]);

Application.$controller("dialogLastOrderController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.PictureLastOrdClick = function($event, $isolateScope, item, currentItemWidgets) {
            $scope.Widgets.dialogImageForOrder.open();
        };

    }
]);

Application.$controller("dialogPropOptionController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.PicturePropOrdClick = function($event, $isolateScope, item, currentItemWidgets) {
            $scope.Widgets.dialogImageforPropOpt.open();
        };

    }
]);

Application.$controller("dialogImageForMainController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.ZoomPicForMainMouseenter = function($event, $isolateScope) {
            cgen.zoomRotateCropper('#image');
        };


        $scope.btnRstImageForMainClick = function($event, $isolateScope) {
            cgen.zoomRotateCropper('#image');
            $('#image').cropper("reset");
        };

    }
]);

Application.$controller("dialogImageForSampleController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.ZoomPicForSampleMouseenter = function($event, $isolateScope) {
            cgen.zoomRotateCropper('#image');
        };


        $scope.btnRstImageForSampleClick = function($event, $isolateScope) {
            cgen.zoomRotateCropper('#image');
            $('#image').cropper("reset");
        };

    }
]);

Application.$controller("dialogImageForOrderController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.ZoomPicForOrderMouseenter = function($event, $isolateScope) {
            cgen.zoomRotateCropper('#image');
        };


        $scope.btnRstImageForOrderClick = function($event, $isolateScope) {
            cgen.zoomRotateCropper('#image');
            $('#image').cropper("reset");
        };

    }
]);

Application.$controller("dialogImageforPropOptController", ["$scope",
    function($scope) {
        "use strict";
        $scope.ctrlScope = $scope;

        $scope.ZoomPicForPropOptMouseenter = function($event, $isolateScope) {
            cgen.zoomRotateCropper('#image');
        };


        $scope.btnRstImageForPropOptClick = function($event, $isolateScope) {
            cgen.zoomRotateCropper('#image');
            $('#image').cropper("reset");
        };

    }
]);