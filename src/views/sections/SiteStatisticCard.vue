<template>
    <div class="modal fade" id="siteStatisticModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered d-flex flex-column align-items-center justify-content-center"
            role="document">
            <div class="modal-content modal-details px-3 py-2" style="width: 1350px !important;">
                <div class="modal-header">
                    <h4><b>Site Statistic</b></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ref="siteStatisticModalDismiss"></button>
                </div>
                <div class="modal-body justify-content-around row" style="gap: 10px;">

                    <CardSiteComponent :cardTitle="'National'" :onClick="() => showTableModal('National', 'national')"
                        :uniqueSiteDown=uniqSdNational :percentNeDown2G=pct2gNeDownNational :neDown2G=neDown2gNational
                        :siteImpacted2G=siteImpacted2gNational :cellDown2G=cellDown2gNational
                        :totalSite2G=total2gSiteNational :percentageNeDown4G=pct4gNeDownNational
                        :neDown4G=neDown4gNational :siteImpacted4G=siteImpacted4gNational :cellDown4G=cellDown4gNational
                        :totalSite4G=total4gSiteNational>
                    </CardSiteComponent>

                    <CardSiteComponent :cardTitle="'EJBN'"
                        :onClick="() => showTableModal('EJBN', 'EAST JAVA & BALI NUSRA')" :uniqueSiteDown=uniqSdEjbn
                        :percentNeDown2G=pct2gNeDownSmtr :neDown2G=neDown2gEjbn :siteImpacted2G=siteImpacted2gEjbn
                        :cellDown2G=cellDown2gEjbn :totalSite2G=total2gSiteEjbn :percentageNeDown4G=pct4gNeDownEjbn
                        :neDown4G=neDown4gEjbn :siteImpacted4G=siteImpacted4gEjbn :cellDown4G=cellDown4gEjbn
                        :totalSite4G=total4gSiteEjbn>
                    </CardSiteComponent>

                    <CardSiteComponent :cardTitle="'JBRO'" :onClick="() => showTableModal('JBRO', 'JABOTABEK')"
                        :uniqueSiteDown=uniqSdJbro :percentNeDown2G=pct2gNeDownJbro :neDown2G=neDown2gJbro
                        :siteImpacted2G=siteImpacted2gJbro :cellDown2G=cellDown2gJbro :totalSite2G=total2gSiteJbro
                        :percentageNeDown4G=pct4gNeDownJbro :neDown4G=neDown4gJbro :siteImpacted4G=siteImpacted4gJbro
                        :cellDown4G=cellDown4gJbro :totalSite4G=total4gSiteJbro>
                    </CardSiteComponent>

                    <CardSiteComponent :cardTitle="'KSMP'"
                        :onClick="() => showTableModal('KSMP', 'KALIMANTAN & SULAMPAPUA')" :uniqueSiteDown=uniqSdKsmp
                        :percentNeDown2G=pct2gNeDownKsmp :neDown2G=neDown2gKsmp :siteImpacted2G=siteImpacted2gKsmp
                        :cellDown2G=cellDown2gKsmp :totalSite2G=total2gSiteKsmp :percentageNeDown4G=pct4gNeDownKsmp
                        :neDown4G=neDown4gKsmp :siteImpacted4G=siteImpacted4gKsmp :cellDown4G=cellDown4gKsmp
                        :totalSite4G=total4gSiteKsmp>
                    </CardSiteComponent>

                    <CardSiteComponent :cardTitle="'SMTR'" :onClick="() => showTableModal('SMTR', 'SUMATERA')"
                        :uniqueSiteDown=uniqSdSmtr :percentNeDown2G=pct2gNeDownSmtr :neDown2G=neDown2gSmtr
                        :siteImpacted2G=siteImpacted2gSmtr :cellDown2G=cellDown2gSmtr :totalSite2G=total2gSiteSmtr
                        :percentageNeDown4G=pct4gNeDownSmtr :neDown4G=neDown4gSmtr :siteImpacted4G=siteImpacted4gSmtr
                        :cellDown4G=cellDown4gSmtr :totalSite4G=total4gSiteSmtr>
                    </CardSiteComponent>

                    <CardSiteComponent :cardTitle="'CJWJ'"
                        :onClick="() => showTableModal('CJWJ', 'WEST JAVA & CENTRAL JAVA')" :uniqueSiteDown=uniqSdCjwj
                        :percentNeDown2G=pct2gNeDownCjwj :neDown2G=neDown2gCjwj :siteImpacted2G=siteImpacted2gCjwj
                        :cellDown2G=cellDown2gCjwj :totalSite2G=total2gSiteCjwj :percentageNeDown4G=pct4gNeDownCjwj
                        :neDown4G=neDown4gCjwj :siteImpacted4G=siteImpacted4gCjwj :cellDown4G=cellDown4gCjwj
                        :totalSite4G=total4gSiteCjwj>
                    </CardSiteComponent>

                </div>
            </div>
        </div>
    </div>
    <button type="button" ref="siteDataDetailButton" class="btn download-button" data-bs-toggle="modal"
        data-bs-target="#siteDataDetail" style="display: none; visibility: hidden;">
    </button>

    <!-- MODAL -->
    <div class="modal fade" id="siteDataDetail" tabindex="-1" aria-labelledby="overalDataLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content content-site-id">
                <div class="modal-body">
                    <div class="row mt-3 px-3">
                        <div class="col-12 mb-2" style="justify-content: end; text-align: end;">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="col-6 mt-2" style="text-align: left;">
                            <b style="margin-left: 15px; font-size: 26px; font-weight: 800;">{{ this.titleModal
                                }}</b><br>
                        </div>
                        <div class="col-6 mt-2" style="text-align: right;">
                            <button @click="openTabExport()" class="btn btn-primary btn-apply-filter btn-16"
                                style="margin-right: 12px; font-size: 12px; width: 180px;">
                                <i class="fa-solid fa-download"></i>
                                Download Data
                            </button>
                        </div>
                    </div>
                    <div class="row justify-content-center"
                        style="padding:0px 25px; height: 100%; max-height: 500px; overflow-y: scroll; overflow-x: hidden;">
                        <table class="content-table">
                            <thead>
                                <tr>
                                    <td rowspan="2" style="text-align: center;">Area Name</td>
                                    <td rowspan="2" style="text-align: center;">Roh</td>
                                    <td colspan="2" style="text-align: center;">Cell Down</td>
                                    <td rowspan="2" style="text-align: center;">Site Down</td>
                                </tr>
                                <tr>
                                    <td style="text-align: center;">2G</td>
                                    <td style="text-align: center;">4G</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in this.dataTable">
                                    <td>{{ item.area_name }}</td>
                                    <td>{{ item.roh_name }} {{ item.roh_phone }}</td>
                                    <td>{{ item.celldown_2g }}</td>
                                    <td>{{ item.celldown_4g }}</td>
                                    <td>{{ item.sitedown }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-if="this.loadingModal == true" class="load_parent"
        style="top: 50%; position: absolute; left: 44%; z-index: 999999999999">
        <span class="loader"></span>
    </div>
</template>


<script>
// COMPONENT
import CardSiteComponent from '../../components/CardSiteComponent.vue';
// MODULE
import { MessageProcessor } from "@adc/vigour-ui/lib/spl";
import { U } from "@adc/vigour-ui/lib/spl";

export default {
    name: 'SiteStatisticCard',
    components: {
        CardSiteComponent,
    },
    data() {
        return {
            siteStatsDataNational: null,
            SiteStatsDataRegion: null,

            uniqSdNational: 0,
            pct2gNeDownNational: 0,
            neDown2gNational: 0,
            siteImpacted2gNational: 0,
            cellDown2gNational: 0,
            total2gSiteNational: 0,
            pct4gNeDownNational: 0,
            neDown4gNational: 0,
            siteImpacted4gNational: 0,
            cellDown4gNational: 0,
            total4gSiteNational: 0,

            uniqSdSmtr: 0,
            pct2gNeDownSmtr: 0,
            neDown2gSmtr: 0,
            siteImpacted2gSmtr: 0,
            cellDown2gSmtr: 0,
            total2gSiteSmtr: 0,
            pct4gNeDownSmtr: 0,
            neDown4gSmtr: 0,
            siteImpacted4gSmtr: 0,
            cellDown4gSmtr: 0,
            total4gSiteSmtr: 0,

            uniqSdKsmp: 0,
            pct2gNeDownKsmp: 0,
            neDown2gKsmp: 0,
            siteImpacted2gKsmp: 0,
            cellDown2gKsmp: 0,
            total2gSiteKsmp: 0,
            pct4gNeDownKsmp: 0,
            neDown4gKsmp: 0,
            siteImpacted4gKsmp: 0,
            cellDown4gKsmp: 0,
            total4gSiteKsmp: 0,

            uniqSdJbro: 0,
            pct2gNeDownJbro: 0,
            neDown2gJbro: 0,
            siteImpacted2gJbro: 0,
            cellDown2gJbro: 0,
            total2gSiteJbro: 0,
            pct4gNeDownJbro: 0,
            neDown4gJbro: 0,
            siteImpacted4gJbro: 0,
            cellDown4gJbro: 0,
            total4gSiteJbro: 0,

            uniqSdEjbn: 0,
            pct2gNeDownEjbn: 0,
            neDown2gEjbn: 0,
            siteImpacted2gEjbn: 0,
            cellDown2gEjbn: 0,
            total2gSiteEjbn: 0,
            pct4gNeDownEjbn: 0,
            neDown4gEjbn: 0,
            siteImpacted4gEjbn: 0,
            cellDown4gEjbn: 0,
            total4gSiteEjbn: 0,

            uniqSdCjwj: 0,
            pct2gNeDownCjwj: 0,
            neDown2gCjwj: 0,
            siteImpacted2gCjwj: 0,
            cellDown2gCjwj: 0,
            total2gSiteCjwj: 0,
            pct4gNeDownCjwj: 0,
            neDown4gCjwj: 0,
            siteImpacted4gCjwj: 0,
            cellDown4gCjwj: 0,
            total4gSiteCjwj: 0,

            lastUpdatedSiteStatisticData: null,
            todayDateSiteStatisticData: null,
            titleChart: null,
            current_region_detail: null,
            datatablex: null,
            loading_table: false,

            // MODAL
            currentRegionDetail: null,
            titleModal: null,
            dataTable: null,

            // REFETCH
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,

            loadingModal: false,
        }
    },
    async mounted() {
        await U.initCsrfToken();
        await this.getSiteStatsData();

        this.updateLastUpdatedTime();
        this.checkRefetchData();
    },
    methods: {
        async getSiteStatsData() {
            MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_get_region_site_down_count',
                data: {
                    hub_type: ["BIG HUB SITE", "MEDIUM HUB SITE", "SMALL HUB SITE"]
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'json count celldown site down stats region');
                    this.SiteStatsDataRegion = json.results;
                    console.log(this.SiteStatsDataRegion, 'json site stats');
                    for (var i = 0; i < this.SiteStatsDataRegion.length; i++) {
                        if (this.SiteStatsDataRegion[i].location == "SMTR") {
                            this.uniqSdSmtr = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownSmtr = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gSmtr = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gSmtr = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gSmtr = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteSmtr = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownSmtr = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gSmtr = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gSmtr = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gSmtr = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteSmtr = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "JBRO") {
                            this.uniqSdJbro = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownJbro = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gJbro = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gJbro = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gJbro = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteJbro = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownJbro = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gJbro = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gJbro = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gJbro = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteJbro = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "KSMP") {
                            this.uniqSdKsmp = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownKsmp = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gKsmp = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gKsmp = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gKsmp = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteKsmp = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownKsmp = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gKsmp = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gKsmp = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gKsmp = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteKsmp = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "CJWJ") {
                            this.uniqSdCjwj = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownCjwj = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gCjwj = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gCjwj = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gCjwj = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteCjwj = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownCjwj = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gCjwj = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gCjwj = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gCjwj = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteCjwj = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "EJBN") {
                            this.uniqSdEjbn = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownEjbn = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gEjbn = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gEjbn = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gEjbn = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteEjbn = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownEjbn = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gEjbn = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gEjbn = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gEjbn = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteEjbn = this.SiteStatsDataRegion[i].total_4g_site;
                        } else if (this.SiteStatsDataRegion[i].location == "NATIONAL") {
                            this.uniqSdNational = this.SiteStatsDataRegion[i].unique_sitedown;
                            this.pct2gNeDownNational = this.SiteStatsDataRegion[i].pct_down_2g.toFixed(3);
                            this.neDown2gNational = this.SiteStatsDataRegion[i].nedown_2g;
                            this.siteImpacted2gNational = this.SiteStatsDataRegion[i].site_impacted_2g;
                            this.cellDown2gNational = this.SiteStatsDataRegion[i].celldown_2g;
                            this.total2gSiteNational = this.SiteStatsDataRegion[i].total_2g_site;
                            this.pct4gNeDownNational = this.SiteStatsDataRegion[i].pct_down_4g.toFixed(3);
                            this.neDown4gNational = this.SiteStatsDataRegion[i].nedown_4g;
                            this.siteImpacted4gNational = this.SiteStatsDataRegion[i].site_impacted_4g;
                            this.cellDown4gNational = this.SiteStatsDataRegion[i].celldown_4g;
                            this.total4gSiteNational = this.SiteStatsDataRegion[i].total_4g_site;
                        }
                    }
                },
                error: (error) => {
                    console.log(error, 'error site statistic national');
                }
            });

        },
        openTabExport() {
            window.open(
                "https://1057-sg.teleows.com/app/1057/spl/netdrone_maps_v3/netdrone_maps_lebaran/export_alarm.spl?regions=" +
                this.currentRegionDetail,
                "_blank"
            );
        },
        async showTableModal(title, region) {
            this.loadingModal = true;
            this.currentRegionDetail = region.replace("&", "%26");
            this.titleModal = title;
            this.dataTable = null;
            MessageProcessor.process({
                serviceId: 'netdrone_maps_lebaran_get_site_statistic',
                data: {
                    region: region
                },
                showErrorMessage: false,
                success: (json) => {
                    this.loadingModal = false;
                    this.dataTable = json.results;
                    this.$refs.siteDataDetailButton.click();
                },
                error: (error) => {
                    console.log(error, 'error breakdown sitedown duration range');
                }
            });
        },

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
                await this.getSiteStatsData();
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