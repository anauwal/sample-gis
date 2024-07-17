<template>
    <div class="accordion accordion-bg-statistic p-0" id="accordionExample">
        <div class="accordion-item">
            <h4 class="accordion-header">
                <button class="accordion-button px-3 py-4" type="button" data-bs-toggle="collapse"
                    data-bs-target="#regionWiseCard" aria-expanded="true" aria-controls="regionWiseCard"
                    style="color: #005D52;">
                    <i class="fa-solid fa-earth-asia fa-mr-3"></i>
                    Region Wise
                </button>
            </h4>
            <div id="regionWiseCard" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body px-3">
                    <div class="row align-items-center justify-content-around mb-2 mt-1 px-2">
                        <a class="index-Region"><i class="fa-solid fa-square" style="color:#0076CE;"></i> {{ "<1 Hr"
                                }}</a>
                                <a class="index-Region"><i class="fa-solid fa-square" style="color:#62B230;"></i> 1-4
                                    Hr</a>
                                <a class="index-Region"><i class="fa-solid fa-square" style="color:#FFA500;"></i> 4-8
                                    Hr</a>
                                <a class="index-Region"><i class="fa-solid fa-square" style="color:#ED1C24;"></i> 8-24
                                    Hr</a>
                                <a class="index-Region"><i class="fa-solid fa-square" style="color:#313131;"></i>{{
                            ">24Hr" }}</a>

                    </div>
                    <div class="row row-region">
                        <div class="card card-region-wise">
                            <div class="row">
                                <div class="col-3 align-self-center text-center" id="region-chart-1">
                                    <canvas id="regionChart1" style="height: 65px; width: 65px"></canvas>
                                </div>
                                <div class="col-6" id="region-bar-chart-1">
                                    <canvas id="regionBarChart1" style="height: 75px; width: 175px"></canvas>
                                </div>
                                <div class="col-3 align-self-center text-center">
                                    <p class="total-site-count">
                                        Total
                                        <b>
                                            {{ this.totalJbro }}
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3 align-self-center text-center" id="region-chart-2">
                                    <canvas id="regionChart2" style="height: 65px; width: 65px"></canvas>
                                </div>
                                <div class="col-6" id="region-bar-chart-2">
                                    <canvas id="regionBarChart2" style="height: 75px; width: 175px"></canvas>
                                </div>
                                <div class="col-3 align-self-center text-center">
                                    <p class="total-site-count">
                                        Total
                                        <b>
                                            {{ this.totalSmtr }}
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3 align-self-center text-center" id="region-chart-3">
                                    <canvas id="regionChart3" style="height: 65px; width: 65px"></canvas>
                                </div>
                                <div class="col-6" id="region-bar-chart-3">
                                    <canvas id="regionBarChart3" style="height: 75px; width: 175px"></canvas>
                                </div>
                                <div class="col-3 align-self-center text-center">
                                    <p class="total-site-count">
                                        Total
                                        <b>
                                            {{ this.totalCjwj }}
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3 align-self-center text-center" id="region-chart-4">
                                    <canvas id="regionChart4" style="height: 65px; width: 65px"></canvas>
                                </div>
                                <div class="col-6" id="region-bar-chart-4">
                                    <canvas id="regionBarChart4" style="height: 75px; width: 175px"></canvas>
                                </div>
                                <div class="col-3 align-self-center text-center">
                                    <p class="total-site-count">
                                        Total
                                        <b>
                                            {{ this.totalEjbn }}
                                        </b>
                                    </p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3 align-self-center text-center" id="region-chart-5">
                                    <canvas id="regionChart5" style="height: 65px; width: 65px"></canvas>
                                </div>
                                <div class="col-6" id="region-bar-chart-5">
                                    <canvas id="regionBarChart5" style="height: 75px; width: 175px"></canvas>
                                </div>
                                <div class="col-3 align-self-center text-center">
                                    <p class="total-site-count">
                                        Total
                                        <b>
                                            {{ this.totalKsmp }}
                                        </b>
                                    </p>
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
// import echarts
import * as echarts from 'echarts';

import { MessageProcessor } from "@adc/vigour-ui/lib/spl";
import { U } from "@adc/vigour-ui/lib/spl";
import { watch } from 'vue';

export default {
    name: 'RegionWiseCard',
    data() {
        return {
            regionWiseData: null,
            sdSMTR: 0,
            cdSMTR: 0,
            sdJBRO: 0,
            cdJBRO: 0,
            sdKSMP: 0,
            cdKSMP: 0,
            sdEJBN: 0,
            cdEJBN: 0,
            sdCJWJ: 0,
            cdCJWJ: 0,

            totalCjwj: 0,
            totalEjbn: 0,
            totalJbro: 0,
            totalKsmp: 0,
            totalSmtr: 0,

            cellDownArrayKSMP: [],
            siteDownArrayKSMP: [],
            cellDownArrayJBRO: [],
            siteDownArrayJBRO: [],
            cellDownArrayCJWJ: [],
            siteDownArrayCJWJ: [],
            cellDownArraySMTR: [],
            siteDownArraySMTR: [],
            cellDownArrayEJBN: [],
            siteDownArrayEJBN: [],

            arraySMTR: [],
            arrayKSMP: [],
            arrayJBRO: [],
            arrayCJWJ: [],
            arrayEJBN: [],

            dataParent: ['BIG HUB SITE', 'MEDIUM HUB SITE', 'SMALL HUB SITE'],

            // REFETCH
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,

            dataSiteCategory: [],
        }
    },
    props: {
        propsSiteCategory: [],
    },
    watch: {
        propsSiteCategory: function (newVal, oldVal) {
            this.dataSiteCategory = newVal;
            this.clearData();
            this.refetchRegionWiseData();
        },
        arrayKSMP(newKSMP) {
            this.updateBarChart("regionBarChart5", newKSMP);
        },
        arrayJBRO(newJBRO) {
            this.updateBarChart("regionBarChart1", newJBRO);
        },
        arrayCJWJ(newCJWJ) {
            this.updateBarChart("regionBarChart3", newCJWJ);
        },
        arraySMTR(newSMTR) {
            this.updateBarChart("regionBarChart2", newSMTR);
        },
        arrayEJBN(newEJBN) {
            this.updateBarChart("regionBarChart4", newEJBN);
        },
    },
    created() {
        watch(() => [this.sdSMTR, this.cdSMTR], ([newSdSMTR, newCdSMTR], [oldSdSMTR, oldCdSMTR]) => {
            this.updateCircleChart("regionChart3", newSdSMTR, newCdSMTR);
        });
        watch(() => [this.sdJBRO, this.cdJBRO], ([newSdJBRO, newCdJBRO], [oldSdJBRO, oldCdJBRO]) => {
            this.updateCircleChart("regionChart3", newSdJBRO, newCdJBRO);
        });
        watch(() => [this.sdKSMP, this.cdKSMP], ([newSdKSMP, newCdKSMP], [oldSdKSMP, oldCdKSMP]) => {
            this.updateCircleChart("regionChart3", newSdKSMP, newCdKSMP);
        });
        watch(() => [this.sdCJWJ, this.cdCJWJ], ([newSdCJWJ, newCdCJWJ], [oldSdCJWJ, oldCdCJWJ]) => {
            this.updateCircleChart("regionChart3", newSdCJWJ, newCdCJWJ);
        });
        watch(() => [this.sdEJBN, this.cdEJBN], ([newSdEJBN, newCdEJBN], [oldSdEJBN, oldCdEJBN]) => {
            this.updateCircleChart("regionChart3", newSdEJBN, newCdEJBN);
        });
    },
    async mounted() {
        await U.initCsrfToken();
        await this.getRegionWiseData();

        this.checkRefetchData();
    },
    methods: {
        async getRegionWiseData() {
            MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_site_down_aging_by_region',
                data: {
                    hub_type: this.dataParent,
                    category: this.dataSiteCategory,
                },
                showErrorMessage: false,
                success: (json) => {
                    this.regionWiseData = json.results;
                    console.log(json, 'json region wise');
                    for (var i = 0; i < this.regionWiseData.length; i++) {
                        if (this.regionWiseData[i].location == "SMTR") {
                            this.cdSMTR = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdSMTR = this.regionWiseData[i].unique_sitedown;
                            console.log(this.cdSMTR, 'cd smtr');
                            console.log(this.sdSMTR, 'sd SMTR');

                            this.cellDownArraySMTR.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].less_than_1_hour_cell)

                            this.siteDownArraySMTR.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].more_than_24_hours_unq)
                            this.siteDownArraySMTR.reverse();

                            this.arraySMTR = this.siteDownArraySMTR;

                            this.totalSmtr = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart2", this.sdSMTR, this.cdSMTR);
                            this.getBarChart("regionBarChart2", this.arraySMTR);
                        } else if (this.regionWiseData[i].location == "JBRO") {
                            this.cdJBRO = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdJBRO = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayJBRO.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayJBRO.reverse();

                            this.siteDownArrayJBRO.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].more_than_24_hours_unq)
                            this.siteDownArrayJBRO.reverse();

                            this.arrayJBRO = this.siteDownArrayJBRO;

                            this.totalJbro = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart1", this.sdJBRO, this.cdJBRO);
                            this.getBarChart("regionBarChart1", this.arrayJBRO);
                        } else if (this.regionWiseData[i].location == "KSMP") {
                            this.cdKSMP = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdKSMP = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayKSMP.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayKSMP.reverse();

                            this.siteDownArrayKSMP.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayKSMP.reverse();

                            this.arrayKSMP = this.siteDownArrayKSMP;

                            this.totalKsmp = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart5", this.sdKSMP, this.cdKSMP);
                            this.getBarChart("regionBarChart5", this.arrayKSMP);
                        } else if (this.regionWiseData[i].location == "CJWJ") {
                            this.cdCJWJ = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdCJWJ = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayCJWJ.reverse();

                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayCJWJ.reverse();

                            this.arrayCJWJ = this.siteDownArrayCJWJ;

                            this.totalCjwj = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart3", this.sdCJWJ, this.cdCJWJ);
                            this.getBarChart("regionBarChart3", this.arrayCJWJ);
                        } else if (this.regionWiseData[i].location == "EJBN") {
                            this.cdEJBN = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdEJBN = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayEJBN.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayEJBN.reverse();

                            this.siteDownArrayEJBN.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayEJBN.reverse();

                            this.arrayEJBN = this.siteDownArrayEJBN;

                            this.totalEjbn = this.regionWiseData[i].unique_sitedown;

                            this.getCharts("regionChart4", this.sdEJBN, this.cdEJBN);
                            this.getBarChart("regionBarChart4", this.arrayEJBN);
                        }
                    }

                },
                error: (error) => {
                    console.log(error, 'error breakdown sitedown duration range');
                }
            });
        },

        async refetchRegionWiseData() {
            this.siteDownArrayKSMP = [];
            this.siteDownArrayJBRO = [];
            this.siteDownArrayCJWJ = [];
            this.siteDownArraySMTR = [];
            this.siteDownArrayEJBN = [];

            MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_site_down_aging_by_region',
                data: {
                    hub_type: this.dataParent,
                    category: this.dataSiteCategory,
                },
                showErrorMessage: false,
                success: (json) => {
                    this.regionWiseData = json.results;
                    console.log(json, 'json region wise');
                    for (var i = 0; i < this.regionWiseData.length; i++) {
                        if (this.regionWiseData[i].location == "SMTR") {
                            this.cdSMTR = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdSMTR = this.regionWiseData[i].unique_sitedown;
                            console.log(this.cdSMTR, 'cd smtr');
                            console.log(this.sdSMTR, 'sd SMTR');

                            this.cellDownArraySMTR.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArraySMTR.push(this.regionWiseData[i].less_than_1_hour_cell)

                            this.siteDownArraySMTR.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArraySMTR.push(this.regionWiseData[i].more_than_24_hours_unq)
                            this.siteDownArraySMTR.reverse();

                            this.arraySMTR = this.siteDownArraySMTR;

                            this.totalSmtr = this.regionWiseData[i].unique_sitedown;

                        } else if (this.regionWiseData[i].location == "JBRO") {
                            this.cdJBRO = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdJBRO = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayJBRO.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayJBRO.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayJBRO.reverse();

                            this.siteDownArrayJBRO.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayJBRO.push(this.regionWiseData[i].more_than_24_hours_unq)
                            this.siteDownArrayJBRO.reverse();

                            this.arrayJBRO = this.siteDownArrayJBRO;

                            this.totalJbro = this.regionWiseData[i].unique_sitedown;

                        } else if (this.regionWiseData[i].location == "KSMP") {
                            this.cdKSMP = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdKSMP = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayKSMP.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayKSMP.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayKSMP.reverse();

                            this.siteDownArrayKSMP.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayKSMP.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayKSMP.reverse();

                            this.arrayKSMP = this.siteDownArrayKSMP;

                            this.totalKsmp = this.regionWiseData[i].unique_sitedown;

                        } else if (this.regionWiseData[i].location == "CJWJ") {
                            this.cdCJWJ = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdCJWJ = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayCJWJ.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayCJWJ.reverse();

                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayCJWJ.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayCJWJ.reverse();

                            this.arrayCJWJ = this.siteDownArrayCJWJ;

                            this.totalCjwj = this.regionWiseData[i].unique_sitedown;

                        } else if (this.regionWiseData[i].location == "EJBN") {
                            this.cdEJBN = (this.regionWiseData[i].total_4g_site + this.regionWiseData[i].total_2g_site)
                            this.sdEJBN = this.regionWiseData[i].unique_sitedown;

                            this.cellDownArrayEJBN.push(this.regionWiseData[i].more_than_24_hours_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].eight_to_24_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].four_to_8_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].one_to_4_hour_cell)
                            this.cellDownArrayEJBN.push(this.regionWiseData[i].less_than_1_hour_cell)
                            // this.cellDownArrayEJBN.reverse();

                            this.siteDownArrayEJBN.push(this.regionWiseData[i].less_than_1_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].one_to_4_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].four_to_8_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].eight_to_24_hour_unq)
                            this.siteDownArrayEJBN.push(this.regionWiseData[i].more_than_24_hours_unq)

                            this.siteDownArrayEJBN.reverse();

                            this.arrayEJBN = this.siteDownArrayEJBN;

                            this.totalEjbn = this.regionWiseData[i].unique_sitedown;

                        }
                    }

                },
                error: (error) => {
                    console.log(error, 'error breakdown sitedown duration range');
                }
            });
        },

        async clearData() {
            this.regionWiseData = null;
            this.sdSMTR = 0;
            this.cdSMTR = 0;
            this.sdJBRO = 0;
            this.cdJBRO = 0;
            this.sdKSMP = 0;
            this.cdKSMP = 0;
            this.sdEJBN = 0;
            this.cdEJBN = 0;
            this.sdCJWJ = 0;
            this.cdCJWJ = 0;

            this.totalCjwj = 0;
            this.totalEjbn = 0;
            this.totalJbro = 0;
            this.totalKsmp = 0;
            this.totalSmtr = 0;

            this.cellDownArrayKSMP = [];
            this.siteDownArrayKSMP = [];
            this.cellDownArrayJBRO = [];
            this.siteDownArrayJBRO = [];
            this.cellDownArrayCJWJ = [];
            this.siteDownArrayCJWJ = [];
            this.cellDownArraySMTR = [];
            this.siteDownArraySMTR = [];
            this.cellDownArrayEJBN = [];
            this.siteDownArrayEJBN = [];
        },

        updateCircleChart(id, sd, cd) {
            var chartDom = document.getElementById(id);
            var myChart = echarts.getInstanceByDom(chartDom);
            var option = myChart.getOption();

            // Update the values of data array for both layers
            option.series[0].data[0].value = sd;
            option.series[0].data[1].value = cd;

            // Set the updated option to the chart
            myChart.setOption(option);
        },

        updateBarChart(id, data) {
            var chartDom = document.getElementById(id);
            var myChart = echarts.getInstanceByDom(chartDom);
            var option = myChart.getOption();
            option.series[0].data = data; // Update data
            myChart.setOption(option);
        },

        async getCharts(id, sd, cd) {
            var chartDom = document.getElementById(id);
            var myChart = echarts.init(chartDom);
            var option;
            if (myChart !== null) {
                myChart.clear();
            }

            let colorPrimary = '#BE161D';
            let title = String;

            if (id == 'regionChart1') {
                title = 'JBRO';
            } else if (id == 'regionChart2') {
                title = 'SMTR';
            } else if (id == 'regionChart3') {
                title = 'CJWJ';
            } else if (id == 'regionChart4') {
                title = 'EJBN';
            } else if (id == 'regionChart5') {
                title = 'KSMP';
            }
            option = {
                tooltip: {
                    trigger: 'item',
                },
                legend: {
                    show: false,
                },
                graphic: [
                    {
                        type: 'text', // Change type to 'text'
                        id: 'chart-text',
                        left: 'center',
                        top: 'center',
                        style: {
                            text: title, // Set the text content
                            fontSize: 12, // Set the font size
                            fontWeight: 'bold', // Set the font weight
                            fill: '#000', // Set the text color
                        },
                    },
                ],
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['65%', '85%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: false, // Disable label on hover
                            },
                            itemStyle: {
                                opacity: 1, // Disable opacity change on hover
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: [
                            {
                                // Create the blue layer to represent the data to be shown
                                value: sd, // Set the actual value you want to display
                                name: 'Search Engine', // Name should match the bottom layer
                                itemStyle: {
                                    color: colorPrimary,
                                    borderRadius: [15, 15, 15, 15], // Set border radius for top corners
                                },
                            },
                            {
                                value: cd, // Set value to 0 for the bottom layer
                                name: 'Search Engine',
                                itemStyle: {
                                    color: '#D8D8D8', // Set the color for the bottom layer
                                    borderRadius: [15, 15, 15, 15], // Set border radius for top corners
                                },
                            },
                        ],
                    },
                ],
            };
            myChart.hideLoading();
            myChart.resize();

            option && myChart.setOption(option);
        },
        async getBarChart(id, arraySite) {
            var chartDom = document.getElementById(id);
            var myChart;
            console.log(myChart, 'my chart init');
            myChart = echarts.init(chartDom);
            console.log(myChart, 'my chart dom');
            var option;

            if (myChart && myChart != null) {
                myChart.clear();
            }

            // black, red, orange, green, blue
            var colors = ['#313131', '#ED1C24', '#FFA500', '#62B230', '#0076CE'];

            let xAxisData = [];


            var emphasisStyle = {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0,0,0,0.3)',
                },
            };
            option = {
                legend: {
                    show: false,
                },
                brush: {
                    show: false,
                },
                toolbox: {
                    show: false,
                },
                tooltip: {},
                yAxis: {
                    data: xAxisData,
                    name: '', // Set xAxis label to an empty string
                    axisLine: { onZero: true },
                    splitLine: { show: false },
                    splitArea: { show: false },
                    axisLabel: {
                        show: false, // Hide xAxis labels
                    },
                },
                xAxis: {
                    show: false,
                },
                grid: {
                    width: '70%', // Set the width of the grid
                    height: '80%', // Set the height of the grid
                    left: '15%', // Set the left margin
                    top: '11.5%', // Set the top margin
                },
                series: [
                    {
                        name: 'bar',
                        type: 'bar',
                        stack: 'one',
                        emphasis: emphasisStyle,
                        data: arraySite, // Specify data as an array of values
                        itemStyle: {
                            color: function (params) {
                                return colors[params.dataIndex];
                            },
                            barBorderRadius: [0, 0, 0, 0],
                        },
                        label: {
                            show: true,
                            position: 'right', // Position of data labels
                            formatter: function (params) {
                                return params.value;
                            },
                            color: 'black', // Label color
                            fontWeight: 'bold', // Bold font weight
                            fontSize: '11px'
                        },
                    },
                ],
            };

            myChart.on('brushSelected', function (params) {
                var brushed = [];
                var brushComponent = params.batch[0];
                for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
                    var rawIndices = brushComponent.selected[sIdx].dataIndex;
                    // Check if the selected indices contain 0; if not, then display them
                    if (!rawIndices.includes(0)) {
                        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
                    }
                }
                myChart.setOption({
                    title: {
                        text: '', // Set an empty string to remove the title
                    },
                });
            });

            option && myChart.setOption(option);
            myChart.hideLoading();
            myChart.resize();
        },

        async checkMinutes() {
            const now = new Date();
            const minutes = now.getMinutes();
            console.log(minutes, "minutes only");
            this.refetch = false;
            if ([2, 17, 32, 47].includes(minutes)) {
                this.updateLastUpdatedTime();
                this.refetch = true;
                await this.refetchRegionWiseData();
                console.log(this.refetch, "will be true");
                console.log("update refetch data");
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
    }
}
</script>