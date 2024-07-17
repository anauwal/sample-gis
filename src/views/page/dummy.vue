
// CHECK SITE
async checkSite1Hour(event) {
    var check = event.target.checked;
    if (check == false) {
        this.oneHourCheck = false;
        await this.hideLayer(this.oneHourMarker);
    } else {
        this.oneHourCheck = true;
        this.hideLayer(this.oneHourMarker);
        MessageProcessor.process({
            serviceId: "get_all_sitedown_markers_bdi",
            data: {
                hub_type: this.selectedHubValues,
                status: "1"
            },
            showErrorMessage: false,
            success: (json) => {
                this.oneHourMarker.data = json.results;
                console.log(json, "json marker check 1 hour");
                this.addLayer(this.oneHourMarker);
            },
            error: (error) => {
                console.log(error, "error wo list");
            }
        });
    }
},
async checkSite14Hour(event) {
    var check = event.target.checked;
    if (check == false) {
        this.fourHourCheck = false;
        await this.hideLayer(this.fourHourMarker);
    } else {
        this.fourHourCheck = true;
        this.hideLayer(this.fourHourMarker);
        MessageProcessor.process({
            serviceId: "get_all_sitedown_markers_bdi",
            data: {
                hub_type: this.selectedHubValues,
                status: "1_4"
            },
            showErrorMessage: false,
            success: (json) => {
                this.fourHourMarker.data = json.results;
                console.log(json, "json marker check 1-4 hour");
                this.addLayer(this.fourHourMarker);
            },
            error: (error) => {
                console.log(error, "error wo list");
            }
        });
    }
},
async checkSite48Hour(event) {
    var check = event.target.checked;
    if (check == false) {
        this.eightHourCheck = false;
        await this.hideLayer(this.eightHourMarker);
    } else {
        this.eightHourCheck = true;
        this.hideLayer(this.eightHourMarker);
        MessageProcessor.process({
            serviceId: "get_all_sitedown_markers_bdi",
            data: {
                hub_type: this.selectedHubValues,
                status: "4_8"
            },
            showErrorMessage: false,
            success: (json) => {
                this.eightHourMarker.data = json.results;
                console.log(json, "json marker check 1-4 hour");
                this.addLayer(this.eightHourMarker);
            },
            error: (error) => {
                console.log(error, "error wo list");
            }
        });
    }
},
async checkSite824Hour(event) {
    var check = event.target.checked;
    if (check == false) {
        this.twentyFourHourCheck = false;
        await this.hideLayer(this.twentyFourHourMarker);
    } else {
        this.twentyFourHourCheck = true;
        this.hideLayer(this.twentyFourHourMarker);
        MessageProcessor.process({
            serviceId: "get_all_sitedown_markers_bdi",
            data: {
                hub_type: this.selectedHubValues,
                status: "8_24"
            },
            showErrorMessage: false,
            success: (json) => {
                this.twentyFourHourMarker.data = json.results;
                console.log(json, "json marker check 1-4 hour");
                this.addLayer(this.twentyFourHourMarker);
            },
            error: (error) => {
                console.log(error, "error wo list");
            }
        });
    }
},
async checkSite24Hour(event) {
    var check = event.target.checked;
    if (check == false) {
        this.moreDayCheck = false;
        await this.hideLayer(this.moreDayMarker);
    } else {
        this.moreDayCheck = true;
        this.hideLayer(this.moreDayMarker);
        MessageProcessor.process({
            serviceId: "get_all_sitedown_markers_bdi",
            data: {
                hub_type: this.selectedHubValues,
                status: "m24"
            },
            showErrorMessage: false,
            success: (json) => {
                this.moreDayMarker.data = json.results;
                console.log(json, "json marker check 1-4 hour");
                this.addLayer(this.moreDayMarker);
            },
            error: (error) => {
                console.log(error, "error wo list");
            }
        });
    }
},