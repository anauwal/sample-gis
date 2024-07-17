<template>
    <div class="accordion accordion-bg-statistic" id="accordionExample">
        <div class="accordion-item">
            <h4 class="accordion-header">
                <button class="accordion-button px-3 py-4" type="button" data-bs-toggle="collapse"
                    data-bs-target="#outagesCard" aria-expanded="true" aria-controls="outagesCard"
                    style="color: #005D52;">
                    <i class="fa fa-location-arrow fa-mr-3"></i>
                    Total Outages Down
                </button>
            </h4>
            <div id="outagesCard" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body px-3">
                    <div class="row">
                        <div class="col-12">
                            <div class="card card-outages px-3 py-3">
                                <p class="card-title-text mb-3 text-center">Site Down</p>
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="card-counting text-center">{{ this.siteDown }}</h3>
                                        <p class="subtitle text-center">Tota Sites Down</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MessageProcessor } from "@adc/vigour-ui/lib/spl";
import { U } from "@adc/vigour-ui/lib/spl";

export default {
    name: 'OutagesCard',
    props: {
        propsSiteCategory: [],
    },
    watch: {
        propsSiteCategory: function (newVal, oldVal) {
            this.dataSiteCategory = newVal;
            this.outagesData = null;
            this.siteDown = "...";
            this.totalNe2gDown = '...';
            this.totalNe4gDown = '...';
            this.getOutageData();
        }
    },
    data() {
        return {
            outagesData: null,
            cellsImpacted: 0,
            siteDown: "...",
            lastUpdatedOutagesData: null,
            todayDateOutagesData: null,
            dataParent: ['BIG HUB SITE', 'MEDIUM HUB SITE', 'SMALL HUB SITE'],
            dataSiteCategory: [],
        }
    },
    async mounted() {
        await U.initCsrfToken();
        await this.getOutageData();

        // this.updateLastUpdatedTime();
        this.checkRefetchData();
    },
    methods: {
        async getOutageData() {
            MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_site_down_duration_range_breakdown',
                data: {
                    hub_type: this.dataParent,
                    category: this.dataSiteCategory,
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'json outages card');
                    var res = json.results;
                    this.siteDown = res.total_sitedown;
                },
                error: (error) => {
                    console.log(error, 'error Outages Card');
                }
            });
        },
        // REFETCH DATA QUARTER HOUR
        async checkMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            if ([2, 17, 32, 47].includes(minutes)) {
                this.outagesData = null;
                this.cellsImpacted = '...';
                this.siteDown = '...';
                this.getOutageData();
            }
        },
        checkRefetchData() {
            this.fetching = setInterval(() => {
                this.checkMinutes()
            }, 30 * 1000)
        },

    }
}
</script>