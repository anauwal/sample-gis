<template>
    <div class="accordion accordion-bg-statistic" id="accordionExample">
        <div class="accordion-item">
            <h4 class="accordion-header">
                <button class="accordion-button px-3 py-4" type="button" data-bs-toggle="collapse"
                    data-bs-target="#durationRange" aria-expanded="true" aria-controls="durationRange"
                    style="color: #005D52;">
                    <i class="fa-solid fa-clock fa-mr-3"></i>
                    Duration Range
                </button>
            </h4>
            <div id="durationRange" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body px-3">
                    <div class="card-body card-body-flex flex-row">
                        <div class="card card-flex py-3 px-2">
                            <p class="card-title-text mb-3 text-center">Below 1 Hour</p>
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <h3 class="card-counting text-center" style="color: #0076CE;">{{ this.hour1Sd }}
                                    </h3>
                                    <p class="subtitle text-center">Sites Down</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-flex py-3 px-2">
                            <p class="card-title-text mb-3 text-center">1 - 4 Hour</p>
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <h3 class="card-counting text-center" style="color:#62B230;">{{ this.hour4Sd }}
                                    </h3>
                                    <p class="subtitle text-center">Sites Down</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-flex py-3 px-2">
                            <p class="card-title-text mb-3 text-center">4 - 8 Hour</p>
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <h3 class="card-counting text-center" style="color: #FFA500;">{{ this.hour48Sd }}
                                    </h3>
                                    <p class="subtitle text-center">Sites Down</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-flex py-3 px-2">
                            <p class="card-title-text mb-3 text-center">8 - 24 Hour</p>
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <h3 class="card-counting text-center" style="color: #ED1C24;">{{ this.hour824Sd }}
                                    </h3>
                                    <p class="subtitle text-center">Sites Down</p>
                                </div>
                            </div>
                        </div>
                        <div class="card card-flex py-3 px-2">
                            <p class="card-title-text mb-3 text-center">Above 24 Hour</p>
                            <div class="row">
                                <div class="col-lg-12 col-md-12">
                                    <h3 class="card-counting text-center" style="color: #313131;">{{ this.hourMore24Sd
                                        }}</h3>
                                    <p class="subtitle text-center">Sites Down</p>
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
// IMPORT MODULE
import { MessageProcessor } from "@adc/vigour-ui/lib/spl";
import { U } from "@adc/vigour-ui/lib/spl";

export default {
    name: 'DurationRangeCard',
    props: {
        propsSiteCategory: [],
    },
    watch: {
        propsSiteCategory: function (newVal, oldVal) {
            this.dataSiteCategory = newVal;
            this.getDurationRange();
        }
    },
    data() {
        return {
            dataSiteCategory: [],

            hour1Sd: '...',
            hour4Sd: '...',
            hour48Sd: '...',
            hour824Sd: '...',
            hourMore24Sd: '...',

            lastUpdatedDurationData: null,
            todayDateDurationData: null,
            dataParent: ['BIG HUB SITE', 'MEDIUM HUB SITE', 'SMALL HUB SITE'],
            fetching: null,

            // REFETCH
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,

        }
    },
    async mounted() {
        await U.initCsrfToken();
        await this.getDurationRange();

        this.updateLastUpdatedTime();
        this.checkRefetchData();
    },
    methods: {
        async breakDownSiteDown() {
            MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_site_down_duration_range_breakdown',
                data: {
                    hub_type: this.dataParent,
                    category: this.dataSiteCategory,
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'json duration range card');
                    var res = json.results;
                    this.hour1Sd = res.less_than_1_hour;
                    this.hour4Sd = res.one_to_4_hour;
                    this.hour48Sd = res.four_to_8_hour;
                    this.hour824Sd = res.eight_to_24_hour;
                    this.hourMore24Sd = res.more_than_24_hours;
                },
                error: (error) => {
                    console.log(error, 'error breakdown sitedown duration range');
                }
            });
        },
        async getDurationRange() {
            // NULLABLE
            this.hour1Sd = '...';
            this.hour4Sd = '...';
            this.hour48Sd = '...';
            this.hour824Sd = '...';
            this.hourMore24Sd = '...';

            await this.breakDownSiteDown();
        },

        // REFETCH DATA QUARTER HOUR
        updateLastUpdatedTime() {
            console.log("terpanggil");
            const now = new Date();
            const today = new Date();

            today.setHours(0, 0, 0, 0);

            const hours = now.getHours().toString().padStart(2, "0");
            let minutes = now.getMinutes();

            if (minutes >= 0 && minutes < 15) {
                minutes = 0;
            } else if (minutes >= 15 && minutes < 30) {
                minutes = 15;
            } else if (minutes >= 30 && minutes < 45) {
                minutes = 30;
            } else {
                minutes = 45;
            }

            this.todayDate = today.toLocaleDateString();
            console.log(hours, "hours", minutes, "minutes");
            this.lastUpdated = `${hours}:${minutes.toString().padStart(2, "0")}`;
            console.log(this.todayDate, "today date");
            console.log(this.lastUpdated, "today date");
        },
        async checkMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, "minutes only");
            this.refetch = false;
            if ([2, 17, 32, 47].includes(minutes)) {
                this.updateLastUpdatedTime();
                this.refetch = true;
                await this.getDurationRange();
            }
        },
        checkRefetchData() {
            this.fetching = setInterval(() => {
                console.log("check fetching refetch");
                this.checkMinutes();
                this.refetch = false;
                console.log(this.refetch, "will be false");
            }, 30 * 1000);
            console.log(this.fetching, "check refetch data");
        },
    },


}
</script>