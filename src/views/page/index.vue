<template>
    <div id="wrapper" class="toggled" ref="sidebarToggler">
        <div id="sidebar-wrapper">
            <ButtonSidebarClose></ButtonSidebarClose>

            <div class="row">
                <div class="col-12 px-4">
                    <a v-if="this.loadingFilter == false"
                        href="https://1057-sg.teleows.com/adc-static/static/procodeComp/1057/homepage/homepage/homepage/latest/dist/index.html#/"
                        target="_blank" class="btn btn-sidebar ioh-dash d-flex" style="gap: 10px;">
                        <img src="../../assets/ico/home.png" alt="">
                        IOH Dashboard
                    </a>
                    <button v-else disabled type="button" target="_blank" class="btn btn-sidebar ioh-dash d-flex"
                        style="gap: 10px;">
                        <img src="../../assets/ico/home.png" alt="">
                        IOH Dashboard
                    </button>
                </div>
                <div class="col-12 px-4 mt-2">
                    <button v-if="this.loadingFilter == false" type="button" ref="sidebarCloseButton"
                        id="close-sidebar-btn" data-bs-toggle="modal" data-bs-target="#siteStatisticModal"
                        class="btn btn-sidebar ioh-dash d-flex" style="gap: 10px;">
                        <img src="../../assets/ico/site.png" alt="">
                        Site Statistic
                    </button>
                    <button v-else disabled type="button" ref="sidebarCloseButton" id="close-sidebar-btn"
                        data-bs-toggle="modal" data-bs-target="#siteStatisticModal"
                        class="btn btn-sidebar ioh-dash d-flex" style="gap: 10px;">
                        <img src="../../assets/ico/site.png" alt="">
                        Site Statistic
                    </button>
                </div>
                <div class="col-12 px-4 mt-2">
                    <button v-if="this.loadingFilter == false" @click="exportByCategory()" type="button"
                        class="btn btn-sidebar ioh-dash d-flex" style="gap: 10px;">
                        <img src="../../assets/ico/site-cat.png" alt="" style="width: 30px; height: 30px;">
                        Site Statistic By Filter
                    </button>
                    <button v-else disabled type="button" class="btn btn-sidebar ioh-dash d-flex" style="gap: 10px;">
                        <img src="../../assets/ico/site-cat.png" alt="" style="width: 30px; height: 30px;">
                        Site Statistic By Filter
                    </button>
                </div>
            </div>

            <div class="row">
                <div class="col-12 px-6">
                    <hr />
                </div>
            </div>
            <div class="row">
                <div class="col-12 px-custom">
                    <h4 class="sidebar-title px-3">Search</h4>
                </div>
            </div>

            <!-- SEARCHING -->
            <ul class="sidebar-nav px-4 mt-3 mt-20">
                <label class="sidebar-filter-title" for="mcCluster">MC Cluster</label>
                <div class="input-group mb-3 mt-2 flex-nowrap">
                    <input v-if="loading == false" v-model="clusterSearch" @keyup.enter="searchCluster()" type="text"
                        class="form-control px-4" id="mcCluster" placeholder="Search MC Cluster" />
                    <button @click="clearSearchCluster()" class="input-group-text" id="addon-wrapping">✖</button>
                    <input v-if="loading == true" disabled type="text" class="form-control px-4" id="mcCluster"
                        placeholder="Search MC Cluster" />
                </div>
                <label class="sidebar-filter-title" for="siteName">Site Name</label>
                <div class="input-group mb-3 mt-2 mt-25 flex-nowrap">
                    <input v-if="loading == false" v-model="siteNameSearch" @keyup.enter="searchSiteName()" type="text"
                        class="form-control px-4" id="siteName" placeholder="Search Site Name" />
                    <button @click="clearSearchSite()" class="input-group-text" id="addon-wrapping">✖</button>
                    <input v-if="loading == true" disabled type="text" class="form-control px-4" id="siteName"
                        placeholder="Search Site Name" />
                </div>
                <label class="sidebar-filter-title" for="fmeName">FME Name</label>
                <div class="input-group mb-3 mt-2 mt-25 flex-nowrap">
                    <input v-if="loading == false" type="text" v-model="fmeNameSearch" @keyup.enter="searchFmeName()"
                        class="form-control px-4" id="fmeName" placeholder="Search FME Name" />
                    <button @click="clearSearchFme()" class="input-group-text" id="addon-wrapping">✖</button>
                    <input v-if="loading == true" disabled type="text" class="form-control px-4" id="fmeName"
                        placeholder="Search FME Name" />
                </div>
            </ul>
            <div class="row">
                <div class="col-12 px-6">
                    <hr />
                </div>
            </div>
            <div class="row">
                <div class="col-12 px-4">
                    <h4 class="sidebar-title px-3">Filter</h4>
                </div>
            </div>
            <ul class="sidebar-nav px-4 mt-3 d-flex flex-row col-gap-10 justify-content-between">
                <button class="btn btn-primary btn-clear-filter btn-15" disabled v-if="loading == true">Clear
                    Filter</button>
                <button class="btn btn-primary btn-apply-filter btn-16" disabled v-if="loading == true">Apply
                    Filter</button>
                <button class="btn btn-primary btn-clear-filter btn-15" @click="handleClearFilter()"
                    v-if="loading == false">
                    Clear Filter
                </button>
                <button class="btn btn-primary btn-apply-filter btn-16" @click="handleApplyFilter()"
                    v-if="loading == false">
                    Apply Filter
                </button>
            </ul>
            <!----------------------- SITE IMPACT ----------------------->
            <ul class="sidebar-nav px-4 mt-3">
                <p class="sidebar-filter-title">Site</p>
                <li class="mb-2">
                    <a class="collapse-btn mb-2 px-4 d-flex flex-row justify-content-between align-items-center"
                        type="button" data-bs-toggle="collapse" data-bs-target="#siteOptions" aria-expanded="false"
                        aria-controls="siteOptions" style="text-indent: 0px">
                        Select Duration<i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                    <div class="collapse" id="siteOptions">
                        <div class="card card-body card-sidebar px-4 py-3 row-gap-15">
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSites($event, 'all')" v-model="allSiteCheck" type="checkbox"
                                    class="sidebar-checkbox" id="site_all" name="site_all" value="Bike" />
                                &nbsp;
                                <i class="font-checkbox">All</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSites($event, '1hr')" v-model="oneHourCheck" type="checkbox"
                                    class="sidebar-checkbox" id="site_all" name="site_all" value="Bike" />
                                <i class="fa-solid fa-square" aria-hidden="true" style="color: #0076CE"></i>
                                &nbsp;
                                <i class="font-checkbox">{{ "<1 H Site Down" }}</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSites($event, '4hr')" v-model="fourHourCheck" type="checkbox"
                                    class="sidebar-checkbox" id="site_all" name="site_all" value="Bike" />
                                <i class="fa-solid fa-square" aria-hidden="true" style="color: #62B230"></i>
                                &nbsp;
                                <i class="font-checkbox">{{ "1-4 H Site Down" }}</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSites($event, '8hr')" v-model="eightHourCheck" type="checkbox"
                                    class="sidebar-checkbox" id="site_all" name="site_all" value="Bike" />
                                <i class="fa-solid fa-square" aria-hidden="true" style="color: #FFA500"></i>
                                &nbsp;
                                <i class="font-checkbox">{{ "4-8 H Site Down" }}</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSites($event, '24hr')" v-model="twentyFourHourCheck"
                                    type="checkbox" class="sidebar-checkbox" id="site_all" name="site_all"
                                    value="Bike" />
                                <i class="fa-solid fa-square" aria-hidden="true" style="color: #ED1C24"></i>
                                &nbsp;
                                <i class="font-checkbox">{{ "8-24 H Site Down" }}</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSites($event, 'moreDay')" v-model="moreDayCheck" type="checkbox"
                                    class="sidebar-checkbox" id="site_all" name="site_all" value="Bike" />
                                <i class="fa-solid fa-square" aria-hidden="true" style="color: #313131"></i>
                                &nbsp;
                                <i class="font-checkbox">{{ ">24 H Site Down" }}</i>
                            </label>
                        </div>
                    </div>
                </li>
            </ul>

            <!----------------------- SITE CATEGORY ----------------------->
            <ul class="sidebar-nav px-4 mt-3">
                <p class="sidebar-filter-title">Site Category</p>
                <li class="mb-2">
                    <a class="collapse-btn mb-2 px-4 d-flex flex-row justify-content-between align-items-center"
                        type="button" data-bs-toggle="collapse" data-bs-target="#siteCategoryOption"
                        aria-expanded="false" aria-controls="siteCategoryOption" style="text-indent: 0px">
                        Select Site Category<i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                    <div class="collapse" id="siteCategoryOption">
                        <div class="card card-body card-sidebar px-4 py-3 row-gap-15">
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSiteCategory($event, 'all')" v-model="allCatSiteCheck"
                                    type="checkbox" class="sidebar-checkbox" id="site_all" name="site_all"
                                    value="Bike" />
                                <i class="font-checkbox">All</i>
                            </label>
                            <p style="margin-left: -33px;"><b>POI</b></p>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSiteCategory($event, 'poiSiteCheckDown')"
                                    v-model="poiSiteCheckDown" type="checkbox" class="sidebar-checkbox" />
                                <!-- <img src="../../assets/marker/poi-down.png" style="width: 15px;"> -->
                                &nbsp;
                                <i class="font-checkbox">POI Sites Down</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSiteCategory($event, 'poiSiteCheckUp')" v-model="poiSiteCheckUp"
                                    type="checkbox" class="sidebar-checkbox" />
                                <!-- <img src="../../assets/marker/poi-up.png" style="width: 15px;"> -->
                                &nbsp;
                                <i class="font-checkbox">POI SitesUp</i>
                            </label>
                            <p class="mt-2" style="margin-left: -33px;"><b>Route</b></p>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSiteCategory($event, 'routeSiteCheckDown')"
                                    v-model="routeSiteCheckDown" type="checkbox" class="sidebar-checkbox" />
                                <!-- <img src="../../assets/marker/route-down.png" style="width: 15px;"> -->
                                &nbsp;
                                <i class="font-checkbox">Route Sites Down</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSiteCategory($event, 'routeSiteCheckUp')"
                                    v-model="routeSiteCheckUp" type="checkbox" class="sidebar-checkbox" />
                                <!-- <img src="../../assets/marker/route-up.png" style="width: 15px;"> -->
                                &nbsp;
                                <i class="font-checkbox">Route Sites Up</i>
                            </label>
                            <p class="mt-2" style="margin-left: -33px;"><b>CTI</b></p>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSiteCategory($event, 'ctiSiteCheckDown')"
                                    v-model="ctiSiteCheckDown" type="checkbox" class="sidebar-checkbox" />
                                <!-- <img src="../../assets/marker/cti-down.png" style="width: 15px;"> -->
                                &nbsp;
                                <i class="font-checkbox">CTI Sites Down</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkSiteCategory($event, 'ctiSiteCheckUp')" v-model="ctiSiteCheckUp"
                                    type="checkbox" class="sidebar-checkbox" />
                                <!-- <img src="../../assets/marker/cti-up.png" style="width: 15px;"> -->
                                &nbsp;
                                <i class="font-checkbox">CTI Sites Up</i>
                            </label>
                        </div>
                    </div>
                </li>
            </ul>

            <!----------------------- FME ----------------------->
            <ul class="sidebar-nav px-4 mt-3 pb-5">
                <p class="sidebar-filter-title">FME</p>
                <li class="mb-2">
                    <a class="collapse-btn mb-2 px-4 d-flex flex-row justify-content-between align-items-center"
                        type="button" data-bs-toggle="collapse" data-bs-target="#fmeOptions" aria-expanded="false"
                        aria-controls="fmeOptions" style="text-indent: 0px">
                        Select FME<i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>
                    <div class="collapse" id="fmeOptions">
                        <div class="card card-body card-sidebar px-4 py-3 row-gap-15">
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkFmeAll($event)" v-model="allFmeCheck" type="checkbox"
                                    class="sidebar-checkbox" />
                                &nbsp;
                                <i class="font-checkbox">All</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkFmeBusy($event)" v-model="fmeBusyCheck" type="checkbox"
                                    class="sidebar-checkbox" />
                                <i class="fa-solid fa-square" style="color: #de4b4d;"></i>
                                &nbsp;
                                <i class="font-checkbox">Busy</i>
                            </label>
                            <label for="poiImpacted" class="checkbox-p">
                                <input @change="checkFmeIdle($event)" v-model="fmeIdleCheck" type="checkbox"
                                    class="sidebar-checkbox" />
                                <i class="fa-solid fa-square" style="color: #6bcd1f;"></i>
                                &nbsp;
                                <i class="font-checkbox">Idle</i>
                            </label>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div id="page-content-wrapper">
            <div class="main-app">
                <nav class="navbar navbar-expand-lg netdrone-nav justify-content-between px-2 py-0">
                    <div class="navbar-brand">
                        <a href="#menu-toggle" class="btn" id="menu-toggle">
                            <i class="fa fa-bars text-white" aria-hidden="true"></i>
                        </a>
                        <img src="../../assets/img/logo/huawei.png" class="navbar-logo" alt="" />
                    </div>
                    <img src="../../assets/img/navbar/Left.png" style="width: 300px; margin-left: 105px;">
                    <h3 class="netdrone-title mb-0">NetDrone Eid Fitr 2024</h3>
                    <img src="../../assets/img/navbar/Right.png" style="width: 300px;">
                    <div class="navbar-brand d-flex flex-row">
                        <div class="col-6 align-self-center text-right me-2">
                            <p class="last-updated-title mb-2">Last Updated Time</p>
                            <p class="last-updated mb-0 ms-2">&nbsp; &nbsp;{{ this.todayDate }} &nbsp; {{
                        this.lastUpdated }}</p>
                        </div>
                        <div class="col-6 text-webkit-right">
                            <img src="../../assets/img/logo/ioh.png" class="navbar-logo" alt="" />
                        </div>
                    </div>
                </nav>
                <div style="width: 100%; height: 90vh; position: fixed">
                    <div class="map-google" id="map-google"></div>
                    <div class="row row-map ps-2 pt-0 mt-2">
                        <div class="col-3 pe-1">
                            <OutagesCard :propsSiteCategory="propsPassedCategory"></OutagesCard>
                        </div>
                        <div class="col-9 ps-1 pe-1">
                            <DurationRangeCard :propsSiteCategory="propsPassedCategory"></DurationRangeCard>
                        </div>
                    </div>
                    <div class="row row-right ps-2 pt-0 mt-2">
                        <RegionWiseCard :propsSiteCategory="propsPassedCategory"></RegionWiseCard>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <SiteStatistic></SiteStatistic>


    <!-- LOADING -->
    <div v-if="loading == true" class="load_parent"
        style="top: 50%; position: absolute; left: 44%; z-index: 999999999999">
        <span class="loader"></span>
    </div>

    <div v-if="this.loadingFilter == true" class="load_parent"
        style="top: 50%; position: absolute; left: 44%; z-index: 999999999999">
        <span class="loader"></span>
    </div>

    <!-- BUTTON MODAL TRIGGER -->
    <button type="button" ref="siteDetailButton" class="btn download-button" data-bs-toggle="modal"
        data-bs-target="#siteDetail" style="display: none; visibility: hidden"></button>
    <button type="button" ref="siteSearchButton" class="btn download-button" data-bs-toggle="modal"
        data-bs-target="#siteSearch" style="display: none; visibility: hidden"></button>
    <button type="button" ref="fmeDetailButton" class="btn download-button" data-bs-toggle="modal"
        data-bs-target="#fmeDetail" style="display: none; visibility: hidden"></button>
    <button type="button" ref="mcClusterSearchButton" class="btn download-button" data-bs-toggle="modal"
        data-bs-target="#mcClusterSearch" style="display: none; visibility: hidden"></button>
    <button type="button" ref="fmeSearchButton" class="btn download-button" data-bs-toggle="modal"
        data-bs-target="#fmeSearch" style="display: none; visibility: hidden"></button>
    <button type="button" ref="siteSearchDetailButton" class="btn download-button" data-bs-toggle="modal"
        data-bs-target="#siteSearchDetail" style="display: none; visibility: hidden"></button>
    <button type="button" ref="fmeSearchDetailButton" class="btn download-button" data-bs-toggle="modal"
        data-bs-target="#fmeSearchDetail" style="display: none; visibility: hidden"></button>
    <button type="button" ref="etaDetailsData" class="btn download-button" data-bs-toggle="modal"
        data-bs-target="#etaDetailsData" style="display: none; visibility: hidden"></button>

    <button type="button" ref="sidebarCloseButton" class="btn download-button" id="close-sidebar-btn"
        style="display: none; visibility: hidden"></button>

    <!-- MC CLUSTER SEARCH -->
    <div class="modal fade" id="mcClusterSearch" tabindex="-1" role="dialog">
        <div class="modal-dialog d-flex flex-column align-items-center justify-content-center" role="document">
            <div class="modal-content modal-details-mc-cluster">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ref="mcClusterSearchDismiss"></button>
                </div>
                <div class="modal-body">
                    <label class="modal-search-label px-3" for="mcCluster">Search MC Cluster</label>
                    <div class="input-group px-3 flex-nowrap mt-2">
                        <input v-model="clusterSearch" @keyup.enter="searchMcClusterModal()" type="text"
                            class="form-control" id="fmeName" placeholder="Search FME Name" />
                        <button @click="clearSearchCluster()" class="input-group-text" id="addon-wrapping">✖</button>
                    </div>
                    <div class="row px-3">
                        <div class="col-12 px-0">
                            <h4 class="text-search-result-top mb-3 mt-3 px-3">Search Result</h4>
                        </div>
                        <div class="row mb-3">
                            <div class="col-12 px-0">
                                <p class="text-search-title" style="margin-left: -11px !important;">MC Cluster Name</p>
                            </div>
                        </div>
                        <div class="container container-content">
                            <div class="row"
                                v-if="this.clusterSearchResult != null || this.clusterSearchResult != undefined">
                                <a type="button" ref="sidebarCloseButton" class="link-a-select"
                                    v-for="data in this.clusterSearchResult" :key="data.str_128_1" :id="data.task_id"
                                    @click="mcSelectById(data.latitude, data.longitude, data.str_128_1)">
                                    <div class="row px-2 py-2">
                                        <div class="col-12 px-0">
                                            <p class="mb-0 a-result-fme text-link-search">
                                                {{ data.str_128_1 }}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SITE SEARCH -->
    <div class="modal fade" id="siteSearch" tabindex="-1" role="dialog">
        <div class="modal-dialog d-flex flex-column align-items-center justify-content-center" role="document">
            <div class="modal-content modal-details">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ref="siteSearchDismiss"></button>
                </div>
                <div class="modal-body">
                    <label class="modal-search-label px-3" for="mcCluster">Search Site Name</label>
                    <div class="input-group px-3 flex-nowrap mt-2">
                        <input v-model="siteNameSearch" @keyup.enter="searchSiteNameModal()" type="text"
                            class="form-control" id="siteName" placeholder="Search Site Name" />
                        <button @click="clearSearchSite()" class="input-group-text" id="addon-wrapping">✖</button>
                    </div>
                    <div class="row px-3">
                        <div class="col-12 px-0">
                            <h4 class="text-search-result-top mb-3 mt-3 px-3">Search Result</h4>
                        </div>
                        <div class="row mb-3">
                            <div class="col-6 px-0">
                                <p class="text-search-title">Site Name</p>
                            </div>
                            <div class="col-3 px-0">
                                <p class="text-search-title">Site ID</p>
                            </div>
                            <div class="col-3 px-0">
                                <p class="text-search-title">Region Name</p>
                            </div>
                        </div>
                        <div class="container container-content">
                            <div class="row" v-if="this.siteSearchResult != null || this.siteSearchResult != undefined">
                                <a type="button" ref="sidebarCloseButton" class="link-a-select"
                                    v-for="data in this.siteSearchResult" :key="data.site_id" :id="data.site_id"
                                    @click="siteSelectByID(data.latitude, data.longitude, data.src, data.site_id, data.site_name)">
                                    <div class="row py-3">
                                        <div class="col-6 px-0">
                                            <p class="mb-0 a-result-fme text-link-search">
                                                {{ data.site_name }}
                                            </p>
                                        </div>
                                        <div class="col-3 px-0">
                                            <p class="mb-0 a-result-fme text-search-result">
                                                {{ data.site_id }}
                                            </p>
                                        </div>
                                        <div class="col-3 px-0">
                                            <p class="mb-0 a-result-fme text-search-result">
                                                {{ data.region_name }}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- FME SEARCH -->
    <div class="modal fade" id="fmeSearch" tabindex="-1" role="dialog">
        <div class="modal-dialog d-flex flex-column align-items-center justify-content-center" role="document">
            <div class="modal-content modal-details">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ref="fmeSearchDismiss"></button>
                </div>
                <div class="modal-body">
                    <label class="modal-search-label px-3" for="mcCluster">Search FME Name</label>
                    <div class="input-group px-3 flex-nowrap mt-2">
                        <input v-model="fmeNameSearch" @keyup.enter="searchFmeNameModal()" type="text"
                            class="form-control" id="fmeName" placeholder="Search FME Name" />
                        <button @click="clearSearchFme()" class="input-group-text" id="addon-wrapping">✖</button>
                    </div>
                    <div class="row px-3">
                        <div class="col-12 px-0">
                            <h4 class="text-search-result-top mb-3 mt-3 px-3">Search Result</h4>
                        </div>
                        <div class="row mb-3">
                            <div class="col-6">
                                <p class="text-search-title">FME Name</p>
                            </div>
                            <div class="col-3 px-0">
                                <p class="text-search-title">FME ID</p>
                            </div>
                            <div class="col-3">
                                <p class="text-search-title">Task Id</p>
                            </div>
                        </div>
                        <div class="container container-content">
                            <div class="row"
                                v-if="this.fmeNameSearchResult != null || this.fmeNameSearchResult != undefined">
                                <a type="button" ref="sidebarCloseButton" class="link-a-select"
                                    v-for="data in this.fmeNameSearchResult" :key="data.task_id" :id="data.task_id"
                                    @click="fmeSelectByID(data.lat, data.lon, data.src, data.assign_to_fme_name)">
                                    <div class="row px-2 py-2">
                                        <div class="col-6 px-0">
                                            <p class="mb-0 a-result-fme text-link-search">
                                                {{ data.fullname }}
                                            </p>
                                        </div>
                                        <div class="col-3 px-0">
                                            <p class="mb-0 a-result-fme text-search-result">
                                                {{ data.assign_to_fme_name }}
                                            </p>
                                        </div>
                                        <div class="col-3 px-0">
                                            <p class="mb-0 a-result-fme text-search-result">
                                                {{ data.task_id }}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SITE DETAIL -->
    <div class="modal fade" id="siteDetail" tabindex="-1" role="dialog">
        <div class="modal-dialog d-flex flex-column align-items-center justify-content-center" role="document">
            <div class="modal-content modal-details">
                <div class="modal-header">
                    <h4><b>Site Details</b></h4>
                    <button type="button" ref="closeSiteDetailModal" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- JSON ALARM GET LIST -->
                    <p class="mb-2"><b>Site</b></p>
                    <div class="row mb-2">
                        <div class="col-2 font-left">
                            <p>Site Name</p>
                        </div>
                        <div class="col-8 font-right">
                            <p v-if="this.siteItem != null || this.siteItem != undefined">{{ this.siteItem.site_name }}
                            </p>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-2 font-left">
                            <p>Site ID</p>
                        </div>
                        <div class="col-8 font-right">
                            <p v-if="this.siteItem != null || this.siteItem != undefined">{{ this.siteItem.title }}</p>
                        </div>
                    </div>
                    <p class="mb-3"><b>Site Issues</b></p>
                    <div class="row px-3 row-steps">
                        <ol class="list-group horizontal-steps d-flex flex-row"
                            v-if="this.siteAlarmList != null || this.siteAlarmList != undefined">
                            <div class="d-flex flex-column" v-for="data in this.siteAlarmList" :key="data.alarmid">
                                <p class="fit-content mb-3 ps-4 ms-2">{{ data.lastoccurrence }}</p>
                                <li class="list-group-item completed">
                                    <span class="ps-4 ms-2">
                                        {{ data.alarmname }}
                                    </span>
                                </li>
                            </div>
                        </ol>
                    </div>
                    <p class="mb-3 mt-3"><b>Task List</b></p>
                    <!-- TICKET LIST -->
                    <div class="row justify-content-center"
                        v-if="this.siteTicketList == null || this.siteTicketList == undefined">
                        <p class="text-center"><b>There is no task list.</b></p>
                    </div>
                    <div class="container-fluid container-modal">
                        <div class="row row-gap-15"
                            v-if="this.siteTicketList != null || this.siteTicketList != undefined">
                            <!-- FOR EACH COL-4 -->
                            <div class="col-6" v-for="data in this.siteTicketList" :key="data.tt_orderid">
                                <div class="accordion accordion-border" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header py-1">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                :data-bs-target="'#collapseOne' + data.tt_orderid" aria-expanded="true"
                                                :aria-controls="'collapseOne' + data.tt_orderid">
                                                <p>
                                                    {{ data.tt_orderid }}
                                                </p>
                                            </button>
                                        </h2>
                                        <div :id="'collapseOne' + data.tt_orderid" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left align-self-center align-items-center">
                                                        <p>TT ID</p>
                                                    </div>
                                                    <div
                                                        class="col-8 font-right d-flex flex-row align-self-center align-items-center">
                                                        <p class="d-flex flex-row w-fit-content" id="site-detail-tt">
                                                            {{ data.tt_orderid }}
                                                        </p>
                                                        <button class="btn btn-primary btn-copy"
                                                            @click="copyTextSiteDetail()">Copy
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>WO ID</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.wo_id }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>FME</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <a data-bs-dismiss="modal" aria-label="Close"
                                                            @click="getFmePosition(data.username, data.wo_id, data.fullname)"
                                                            class="select-by-fme">{{ data.fullname }}</a>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Phone Number</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.phone_number }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Title</p>
                                                    </div>
                                                    <div class="col-8 font-right overflow-break">
                                                        <p class="font-right">
                                                            {{ data.tt_title }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>SLA Site Class</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.site_class }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>SLA Duration</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.hour }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>SLA Remain</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.sla_remain == undefined ? "NA" : data.sla_remain }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Status</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.businessstatus }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Suspect Cause</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.rootcause == undefined ? "NA" : data.rootcause }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Update</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.tt_update }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- SITE SEARCH DETAIL -->
    <div class="modal fade" id="siteSearchDetail" tabindex="-1" role="dialog">
        <div class="modal-dialog d-flex flex-column align-items-center justify-content-center" role="document">
            <div class="modal-content modal-details">
                <div class="modal-header">
                    <h4><b>Site Details</b></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                        ref="closeSiteDetailModalSearch"></button>
                </div>
                <div class="modal-body">
                    <!-- JSON ALARM GET LIST -->
                    <p class="mb-2"><b>Site</b></p>
                    <div class="row mb-2">
                        <div class="col-2 font-left">
                            <p>Site Name</p>
                        </div>
                        <div class="col-8 font-right">
                            <p v-if="this.siteItemSearch.sitename != ''">{{ this.siteItemSearch.sitename }}</p>
                            <p v-if="this.siteItemSearch.sitename == ''">Loading...</p>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-2 font-left">
                            <p>Site ID</p>
                        </div>
                        <div class="col-8 font-right">
                            <p v-if="this.siteItemSearch.siteid != ''">{{ this.siteItemSearch.siteid }}</p>
                            <p v-if="this.siteItemSearch.siteid == ''">Loading...</p>
                        </div>
                    </div>
                    <p class="mb-3"><b>Site Issues</b></p>
                    <div class="row px-3 row-steps">
                        <ol class="list-group horizontal-steps d-flex flex-row"
                            v-if="this.siteAlarmListSearch != null || this.siteAlarmListSearch != undefined">
                            <div class="d-flex flex-column" v-for="data in this.siteAlarmListSearch"
                                :key="data.alarmid">
                                <p class="fit-content mb-3 ps-4 ms-2">{{ data.lastoccurrence }}</p>
                                <li class="list-group-item completed">
                                    <span class="ps-4 ms-2">
                                        {{ data.alarmname }}
                                    </span>
                                </li>
                            </div>
                        </ol>
                    </div>
                    <p class="mb-3 mt-3"><b>Task List</b></p>
                    <!-- TICKET LIST -->
                    <div class="row justify-content-center"
                        v-if="this.siteTicketListSearch == null || this.siteTicketListSearch == undefined">
                        <p class="text-center"><b>There is no task list.</b></p>
                    </div>
                    <div class="container-fluid container-modal">
                        <div class="row row-gap-15"
                            v-if="this.siteTicketListSearch != null || this.siteTicketListSearch != undefined">
                            <!-- FOR EACH COL-4 -->
                            <div class="col-6" v-for="data in this.siteTicketListSearch" :key="data.tt_orderid">
                                <div class="accordion accordion-border" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header px-2 py-1">
                                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                :data-bs-target="'#collapseOne' + data.tt_orderid" aria-expanded="true"
                                                :aria-controls="'collapseOne' + data.tt_orderid">
                                                <p>
                                                    {{ data.tt_orderid }}
                                                </p>
                                            </button>
                                        </h2>
                                        <div :id="'collapseOne' + data.tt_orderid" class="accordion-collapse collapse"
                                            data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left align-self-center align-items-center">
                                                        <p>TT ID</p>
                                                    </div>
                                                    <div
                                                        class="col-8 font-right d-flex flex-row align-self-center align-items-center">
                                                        <p class="d-flex flex-row w-fit-content"
                                                            id="site-search-detail-tt">
                                                            {{ data.tt_orderid }}
                                                        </p>
                                                        <button class="btn btn-primary btn-copy"
                                                            @click="copyTextSearchSiteDetail()">Copy
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>WO ID</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.wo_id }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>FME</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <a data-bs-dismiss="modal" aria-label="Close"
                                                            @click="getFmePosition(data.username, data.wo_id, data.fullname)"
                                                            class="select-by-fme">{{
                        data.fullname }}</a>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Phone Number</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.phone_number }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Title</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>
                                                            {{ data.tt_title }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>SLA Site Class</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.site_class }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>SLA Duration</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.hour }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>SLA Remain</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.sla_remain == undefined ? "NA" : data.sla_remain }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Status</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.businessstatus }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Suspect Cause</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.rootcause == undefined ? "NA" : data.rootcause }}</p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 font-left">
                                                        <p>Update</p>
                                                    </div>
                                                    <div class="col-8 font-right">
                                                        <p>{{ data.tt_update }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- FME DETAIL -->
    <div class="modal fade" id="fmeDetail" tabindex="-1" role="dialog">
        <div class="modal-dialog d-flex flex-column align-items-center justify-content-center" role="document">
            <div class="modal-content modal-details">
                <div class="modal-header">
                    <h4><b>FME Details</b></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-2"><b>FME</b></p>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Name</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2" v-if="this.fmeDetails != null || this.fmeDetails != undefined">
                                {{ this.fmeDetails[0].fullname }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetails == null || this.fmeDetails == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Status</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2" v-if="this.fmeDetails != null || this.fmeDetails != undefined">
                                {{ this.fmeDetails[0].status }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetails == null || this.fmeDetails == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">User Name</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2" v-if="this.fmeDetails != null || this.fmeDetails != undefined">
                                {{ this.fmeDetails[0].username }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetails == null || this.fmeDetails == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Default FM Office</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2" v-if="this.fmeDetails != null || this.fmeDetails != undefined">
                                {{ this.fmeDetails[0].default_fm_office }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetails == null || this.fmeDetails == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Contractor</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2" v-if="this.fmeDetails != null || this.fmeDetails != undefined">
                                {{ this.fmeDetails[0].contractor_name }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetails == null || this.fmeDetails == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Skills</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2" v-if="this.fmeDetails != null || this.fmeDetails != undefined">
                                {{ this.fmeDetails[0].skills }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetails == null || this.fmeDetails == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Task Type</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2" v-if="this.fmeDetails != null || this.fmeDetails != undefined">
                                {{ this.fmeDetails[0].task_types }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetails == null || this.fmeDetails == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Phone Number</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2" v-if="this.fmeDetails != null || this.fmeDetails != undefined">
                                {{ this.fmeDetails[0].phone_number }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetails == null || this.fmeDetails == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="container-fluid container-modal">
                        <div class="row row-ticket-fme">
                            <div class="col-12 text-center align-self-center align-items-center"
                                v-if="this.woListFme == null">
                                <p><b>There is no Ticket List</b></p>
                            </div>
                            <!-- FOR EACH COL-4 -->
                            <div class="col-4" v-if="this.woListFme != null || this.woListFme != undefined"
                                v-for="data in this.woListFme" :key="data.site_id">
                                <div class="accordion accordion-border" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header px-2 py-1 pb-0">
                                            <button class="accordion-button px-2" type="button"
                                                data-bs-toggle="collapse"
                                                :data-bs-target="'#fmeCollapse' + data.task_id" aria-expanded="true"
                                                :aria-controls="'fmeCollapse' + data.task_id">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="row px-2" style="gap: 10px;">
                                                            <p class="task-types-class mb-2">{{ data.task_type }}</p>
                                                            <p v-if="data.cm_fault_level == 'P1'"
                                                                class="fault-lv1 mb-2">P1
                                                            </p>
                                                            <p v-if="data.cm_fault_level == 'P2'"
                                                                class="fault-lv2 mb-2">P2
                                                            </p>
                                                            <p v-if="data.cm_fault_level == 'P3'"
                                                                class="fault-lv3 mb-2">P3
                                                            </p>
                                                            <p v-if="data.cm_fault_level == 'P4'"
                                                                class="fault-lv4 mb-2">P4
                                                            </p>
                                                        </div>
                                                        <p v-if="data.task_type == 'CM'" id="fme-detail-ticket-id">{{
                        data.ticket_id }}</p>
                                                        <p v-if="data.task_type != 'CM'" id="fme-detail-task-id">{{
                        data.task_id }}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div :id="'fmeCollapse' + data.task_id" class="accordion-collapse collapse"
                                            :data-bs-parent="'#fmeCollapse' + data.task_id">
                                            <div class="accordion-body">
                                                <div class="row mb-4">
                                                    <div class="col-6  px-1">
                                                        <button v-if="data.task_type == 'CM'"
                                                            class="btn btn-primary btn-copy"
                                                            @click="copyFmeTicketId()">Copy Ticket ID
                                                        </button>
                                                        <button v-if="data.task_type != 'CM'"
                                                            class="btn btn-primary btn-copy"
                                                            @click="copyFmeTaskId()">Copy Task ID
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4">
                                                        <p class="fme-detail-accordion font-left">Site ID</p>
                                                    </div>
                                                    <div class="col-8">
                                                        <a data-bs-dismiss="modal" aria-label="Close"
                                                            @click='siteSelectInAlarm(data.site_id)'
                                                            class="select-by-fme">{{ data.site_id }}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4">
                                                        <p class="fme-detail-accordion font-left">Title</p>
                                                    </div>
                                                    <div class="col-8 overflow-break">
                                                        <p class="fme-detail-accordion font-right">
                                                            {{ data.title }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 pe-0">
                                                        <p class="fme-detail-accordion font-left">Task Type</p>
                                                    </div>
                                                    <div class="col-8">
                                                        <p class="fme-detail-accordion font-right">{{ data.task_type }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 pe-0">
                                                        <p class="fme-detail-accordion font-left">Task Status</p>
                                                    </div>
                                                    <div class="col-8">
                                                        <p class="fme-detail-accordion font-right">{{ data.task_status
                                                            }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <button
                                                        @click="getFmeTicketDetail(data.task_id, this.fmeDetails[0].phone_number)"
                                                        type="button" ref="etaDetailButton" id="btnid"
                                                        class="btn btn-primary btn-apply-filter btn-16 mt-3"
                                                        data-bs-toggle="modal" data-bs-target="#etaDetails"
                                                        style="width: 100%; font-weight: 700;">
                                                        ETA
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- FME SEARCH DETAIL -->
    <div class="modal fade" id="fmeSearchDetail" tabindex="-1" role="dialog">
        <div class="modal-dialog d-flex flex-column align-items-center justify-content-center" role="document">
            <div class="modal-content modal-details">
                <div class="modal-header">
                    <h4><b>FME Details</b></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="mb-2"><b>FME</b></p>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Name</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2"
                                v-if="this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined">
                                {{ this.fmeDetailsSearch[0].fullname }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetailsSearch == null || this.fmeDetailsSearch == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Status</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2"
                                v-if="this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined">
                                {{ this.fmeDetailsSearch[0].status }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetailsSearch == null || this.fmeDetailsSearch == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">User Name</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2"
                                v-if="this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined">
                                {{ this.fmeDetailsSearch[0].username }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetailsSearch == null || this.fmeDetailsSearch == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Default FM Office</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2"
                                v-if="this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined">
                                {{ this.fmeDetailsSearch[0].default_fm_office }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetailsSearch == null || this.fmeDetailsSearch == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Contractor</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2"
                                v-if="this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined">
                                {{ this.fmeDetailsSearch[0].contractor_name }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetailsSearch == null || this.fmeDetailsSearch == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Skills</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2"
                                v-if="this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined">
                                {{ this.fmeDetailsSearch[0].skills }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetailsSearch == null || this.fmeDetailsSearch == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Task Type</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2"
                                v-if="this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined">
                                {{ this.fmeDetailsSearch[0].task_types }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetailsSearch == null || this.fmeDetailsSearch == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-left">
                            <p class="mb-2 font-left">Phone Number</p>
                        </div>
                        <div class="col-8 font-right">
                            <p class="font-right mb-2"
                                v-if="this.fmeDetailsSearch != null || this.fmeDetailsSearch != undefined">
                                {{ this.fmeDetailsSearch[0].phone_number }}
                            </p>
                            <!-- <p class="mb-2" v-if="this.fmeDetailsSearch == null || this.fmeDetailsSearch == []">Loading...</p> -->
                        </div>
                    </div>
                    <div class="container-fluid container-modal">
                        <div class="row row-ticket-fme">
                            <div class="col-12 text-center align-self-center align-items-center"
                                v-if="this.woListFmeSearch == null">
                                <p><b>There is no Ticket List</b></p>
                            </div>
                            <!-- FOR EACH COL-4 -->
                            <div class="col-4" v-if="this.woListFmeSearch != null || this.woListFmeSearch != undefined"
                                v-for="data in this.woListFmeSearch" :key="data.site_id">
                                <div class="accordion accordion-border" id="accordionExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header px-2 py-1 pb-0">
                                            <button class="accordion-button px-2" type="button"
                                                data-bs-toggle="collapse"
                                                :data-bs-target="'#fmeCollapse' + data.task_id" aria-expanded="true"
                                                :aria-controls="'fmeCollapse' + data.task_id">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="row px-2" style="gap: 10px;">
                                                            <p class="task-types-class mb-2">{{ data.task_type }}</p>
                                                            <p v-if="data.cm_fault_level == 'P1'"
                                                                class="fault-lv1 mb-2">P1
                                                            </p>
                                                            <p v-if="data.cm_fault_level == 'P2'"
                                                                class="fault-lv2 mb-2">P2
                                                            </p>
                                                            <p v-if="data.cm_fault_level == 'P3'"
                                                                class="fault-lv3 mb-2">P3
                                                            </p>
                                                            <p v-if="data.cm_fault_level == 'P4'"
                                                                class="fault-lv4 mb-2">P4
                                                            </p>
                                                        </div>
                                                        <p v-if="data.task_type == 'CM'"
                                                            id="fme-search-detail-ticket-id">{{ data.ticket_id }}</p>
                                                        <p v-if="data.task_type != 'CM'"
                                                            id="fme-search-detail-ticket-id">{{ data.task_id }}</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </h2>
                                        <div :id="'fmeCollapse' + data.task_id" class="accordion-collapse collapse"
                                            :data-bs-parent="'#fmeCollapse' + data.task_id">
                                            <div class="accordion-body">
                                                <div class="row mb-4">
                                                    <div class="col-6 px-1">
                                                        <button v-if="data.task_type == 'CM'"
                                                            class="btn btn-primary btn-copy"
                                                            @click="copyFmeSearchTicketId()">Copy Ticket ID
                                                        </button>
                                                        <button v-if="data.task_type != 'CM'"
                                                            class="btn btn-primary btn-copy"
                                                            @click="copyFmeSearchTaskId()">Copy Task ID
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4">
                                                        <p class="fme-detail-accordion font-left">Site ID</p>
                                                    </div>
                                                    <div class="col-8">
                                                        <a data-bs-dismiss="modal" aria-label="Close"
                                                            @click='siteSelectInAlarm(data.site_id)'
                                                            class="select-by-fme">{{
                        data.site_id }}</a>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4">
                                                        <p class="fme-detail-accordion font-left">Title</p>
                                                    </div>
                                                    <div class="col-8 overflow-break">
                                                        <p class="fme-detail-accordion font-right">
                                                            {{ data.title }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 pe-0">
                                                        <p class="fme-detail-accordion font-left">Task Type</p>
                                                    </div>
                                                    <div class="col-8">
                                                        <p class="fme-detail-accordion font-right">{{ data.task_type }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <div class="col-4 pe-0">
                                                        <p class="fme-detail-accordion font-left">Task Status</p>
                                                    </div>
                                                    <div class="col-8">
                                                        <p class="fme-detail-accordion font-right">{{ data.task_status
                                                            }}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row mb-2">
                                                    <button
                                                        @click="getFmeSearchTicketDetail(data.task_id, this.fmeDetailsSearch[0].phone_number)"
                                                        type="button" ref="etaDetailButton" id="btnid"
                                                        class="btn btn-primary btn-apply-filter btn-16 mt-3"
                                                        data-bs-toggle="modal" data-bs-target="#etaDetails"
                                                        style="width: 100%; font-weight: 700;">
                                                        ETA
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ETA DETAIL -->
    <div class="modal fade" id="etaDetails" tabindex="-1" role="dialog">
        <div class="modal-dialog d-flex flex-column align-items-center justify-content-center" role="document">
            <div class="modal-content modal-details">
                <div class="modal-header">
                    <h4><b>Task Details</b></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="row">
                                <div class="col-4">
                                    <p class="font-left font-16 mb-2 color-black"><b>Task</b></p>
                                    <p class="font-left font-16 mb-3">Task ID</p>
                                    <p class="font-left font-16 mb-2 color-black"><b>Site</b></p>
                                    <p class="font-left font-16 mb-2">Site ID</p>
                                    <p class="font-left font-16 mb-2">Lat</p>
                                    <p class="font-left font-16 mb-3">Lon</p>
                                    <p class="font-left font-16 mb-2 color-black"><b>User</b></p>
                                    <p class="font-left font-16 mb-2">User</p>
                                    <p class="font-left font-16 mb-2">User ID</p>
                                    <p class="font-left font-16 mb-2">Phone Number</p>
                                    <p class="font-left font-16 mb-2">Lat</p>
                                    <p class="font-left font-16 mb-3">Lon</p>
                                    <p class="font-left font-16 mb-2 color-black"><b>User Distance</b></p>
                                    <p class="font-left font-16 mb-2">Distance</p>
                                    <p class="font-left font-16 mb-2">ETA</p>
                                </div>
                                <div class="col-8">
                                    <p class="font-right font-16 mb-2"><b>&nbsp;</b></p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined">
                                        {{ this.getSingleTicketDetail.task_id }}
                                    </p>
                                    <p class="font-right font-16 mb-2"><b>&nbsp;</b></p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined">
                                        {{ this.getSingleTicketDetail.site_id }}
                                    </p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined">
                                        {{ this.getSingleTicketDetail.site_latitude }}
                                    </p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined">
                                        {{ this.getSingleTicketDetail.site_longitude }}
                                    </p>
                                    <p class="font-right font-16 mb-2"><b>&nbsp;</b></p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined">
                                        {{ this.getSingleTicketDetail.assign_to_fme }}
                                    </p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined">
                                        {{ this.getSingleTicketDetail.assign_to_fme_name }}
                                    </p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.fmePhoneNumber != null || this.fmePhoneNumber != undefined">
                                        {{ this.fmePhoneNumber }}
                                    </p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined">
                                        {{ this.getSingleTicketDetail.fme_latitude }}
                                    </p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.getSingleTicketDetail != null || this.getSingleTicketDetail != undefined">
                                        {{ this.getSingleTicketDetail.fme_longitude }}
                                    </p>
                                    <p class="font-right font-16 mb-2"><b>&nbsp;</b></p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.travelDistance != null || this.travelDistance != undefined">
                                        {{ this.travelDistance }}
                                    </p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.timeInTraffic != null || this.timeInTraffic != undefined">
                                        {{ this.timeInTraffic }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6" id="petal-map-col">
                            <div class="site-map-petal-hw"
                                style="width: 100%; height: 500px; cursor: pointer; background-color: whitesmoke"
                                id="site-map-petal-hw"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ETA DETAIL SITE DETAIL -->
    <div class="modal fade" id="etaDetailsData" tabindex="-1" role="dialog">
        <div class="modal-dialog d-flex flex-column align-items-center justify-content-center" role="document">
            <div class="modal-content modal-details">
                <div class="modal-header">
                    <h4><b>Task Details</b></h4>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <div class="row">
                                <div class="col-4">
                                    <p class="font-left font-16 mb-2 color-black"><b>Task</b></p>
                                    <p class="font-left font-16 mb-3">Task ID</p>
                                    <p class="font-left font-16 mb-2 color-black"><b>Site</b></p>
                                    <p class="font-left font-16 mb-2">Site ID</p>
                                    <p class="font-left font-16 mb-2">Lat</p>
                                    <p class="font-left font-16 mb-3">Lon</p>
                                    <p class="font-left font-16 mb-2 color-black"><b>User</b></p>
                                    <p class="font-left font-16 mb-2">User</p>
                                    <p class="font-left font-16 mb-2">User ID</p>
                                    <p class="font-left font-16 mb-2">Phone Number</p>
                                    <p class="font-left font-16 mb-2">Lat</p>
                                    <p class="font-left font-16 mb-3">Lon</p>
                                    <p class="font-left font-16 mb-2 color-black"><b>User Distance</b></p>
                                    <p class="font-left font-16 mb-2">Distance</p>
                                    <p class="font-left font-16 mb-2">ETA</p>
                                </div>
                                <div class="col-8">
                                    <p class="font-right font-16 mb-2"><b>&nbsp;</b></p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.etaTaskId != null || this.etaTaskId != undefined">
                                        {{ this.etaTaskId }}
                                    </p>
                                    <p class="font-right font-16 mb-2"><b>&nbsp;</b></p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.fmePositionData != null || this.fmePositionData != undefined">
                                        {{ this.fmePositionData.site_id }}
                                    </p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.fmePositionData != null || this.fmePositionData != undefined">
                                        {{ this.fmePositionData.site_latitude }}
                                    </p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.fmePositionData != null || this.fmePositionData != undefined">
                                        {{ this.fmePositionData.site_longitude }}
                                    </p>
                                    <p class="font-right font-16 mb-2"><b>&nbsp;</b></p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.etaFullname != null || this.etaFullname != undefined">
                                        {{ this.etaFullname }}
                                    </p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.etaUserId != null || this.etaUserId != undefined">
                                        {{ this.etaUserId }}
                                    </p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.fmeSearchPhoneNumber != null || this.fmeSearchPhoneNumber != undefined">
                                        {{ this.fmeSearchPhoneNumber }}
                                    </p>
                                    <p class="font-right font-16 mb-2"
                                        v-if="this.fmePositionData != null || this.fmePositionData != undefined">
                                        {{ this.fmePositionData.fme_latitude }}
                                    </p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.fmePositionData != null || this.fmePositionData != undefined">
                                        {{ this.fmePositionData.fme_longitude }}
                                    </p>
                                    <p class="font-right font-16 mb-2"><b>&nbsp;</b></p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.travelDistanceEta != null || this.travelDistanceEta != undefined">
                                        {{ this.travelDistanceEta }}
                                    </p>
                                    <p class="font-right font-16 mb-3"
                                        v-if="this.timeInTrafficEta != null || this.timeInTrafficEta != undefined">
                                        {{ this.timeInTrafficEta }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6" id="petal-map-col-eta-detail">
                            <div class="site-map-petal-hw-eta-detail"
                                style="width: 100%; height: 500px; cursor: pointer; background-color: whitesmoke"
                                id="site-map-petal-hw-eta-detail"></div>
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
import { toRaw } from "vue";

// IMPORT COMPONENT
import ButtonSidebarClose from "../../components/ButtonSidebarClose.vue";
import ButtonSidebarIohHome from "../../components/ButtonSidebarIohHome.vue";

// SECTIONS
import DurationRangeCard from "../sections/DurationRangeCard.vue";
import OutagesCard from "../sections/OutagesCard.vue";
import RegionWiseCard from "../sections/RegionWiseCard.vue";
import SiteStatistic from "../sections/SiteStatisticCard.vue";

var map;
var mapFMe;
var coverageCluster = null;
var coverageFme = null;
var coverageSite = null;
var siteSearchMarker = null;
var fmeSearchMarker = null;
var fmeSelectMarker = null;

export default {
    name: "home",
    components: {
        ButtonSidebarClose,
        ButtonSidebarIohHome,

        DurationRangeCard,
        OutagesCard,
        RegionWiseCard,
        SiteStatistic,
    },
    data() {
        return {
            // SITEDOWN MARKER
            allSiteCheck: false,
            oneHourCheck: true,
            fourHourCheck: true,
            eightHourCheck: false,
            twentyFourHourCheck: false,
            moreDayCheck: false,

            // SITE CATEGORY MARKER
            allCatSiteCheck: false,
            poiSiteCheckDown: false,
            poiSiteCheckUp: false,
            routeSiteCheckDown: false,
            routeSiteCheckUp: false,
            ctiSiteCheckDown: false,
            ctiSiteCheckUp: false,

            // FME MARKER
            allFmeCheck: false,
            fmeBusyCheck: false,
            fmeIdleCheck: false,

            selectedHubValues: ["BIG HUB SITE", "MEDIUM HUB SITE", "SMALL HUB SITE"],

            // SITE MARKER
            oneHourMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },
            fourHourMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },
            eightHourMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },
            twentyFourHourMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },
            moreDayMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },

            // CATEGORY MARKER
            ctiMarkerDown: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            poiMarkerDown: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            routeMarkerDown: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            ctiMarkerUp: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            poiMarkerUp: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },
            routeMarkerUp: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 4,
                panelType: "site"
            },

            propsSiteCategory: [],
            propsPassedCategory: [],

            // MC CLUSTER MARKEr
            mcClusterMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "site"
            },

            // FME MARKER
            fmeLocationIdle: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "fme"
            },
            fmeLocationBusy: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "fme"
            },
            fmeSearchMarker: {
                clickAble: true,
                data: [],
                markers: [],
                zindex: 3,
                panelType: "fme"
            },
            // REFETCH
            todayDate: null,
            lastUpdated: null,
            fetching: null,
            refetch: false,

            // SITE DETAILS
            siteItem: null,
            siteAlarmList: null,
            ticketList: null,
            alarmIdList: null,

            // SITE DETAILS SEARCH
            siteItemSearch: {
                siteid: "",
                sitename: ""
            },
            siteAlarmListSearch: null,
            siteTicketListSearch: null,
            ticketListSearch: null,
            alarmIdListSearch: null,

            // FME DETAILS
            woListFme: null,
            fmeDetails: null,

            // FME DETAIL SEARCH
            woListFmeSearch: null,
            fmeDetailsSearch: null,

            // ETA DETAIL
            getSingleTicketDetail: null,
            getOriginData: { lat: 0, lng: 0 },
            getDestinationData: { lat: 0, lng: 0 },
            travelDistance: null,
            estimatedTime: null,
            timeInTraffic: null,

            getOriginDataFmeEta: { lat: 0, lng: 0 },
            getDestinationDataFmeEta: { lat: 0, lng: 0 },
            etaFullname: null,
            etaTaskId: null,
            etaUserId: null,
            travelDistanceEta: null,
            estimatedTimeEta: null,
            timeInTrafficEta: null,
            fmePositionData: null,

            // SEARCHING
            clusterSearch: "",
            clusterSearchResult: null,
            siteNameSearch: "",
            siteSearchResult: null,
            fmeNameSearch: "",
            fmeNameSearchResult: null,

            loading: false,
            loadingFilter: false,

            petalMap: null,

            markerCategory: [],

            fmeSearchPhoneNumber: "",
            fmePhoneNumber: "",
        };
    },
    async mounted() {
        await U.initCsrfToken();
        $("#menu-toggle").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
        $("#close-btn").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });
        $("#close-sidebar-btn").click(function (e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
        });

        await this.petalMapsInit();
        await this.fetchSiteData();
        this.updateLastUpdatedTime();
        this.checkRefetchData();
    },
    methods: {
        // EXPORT BY CATEGORY
        exportByCategory() {
            console.log('props category: ', this.propsSiteCategory);
            window.open(
                "https://1057-sg.teleows.com/app/1057/spl/netdrone_maps_v3/netdrone_maps_lebaran/export_alarm.spl?regions=national&category=" + this.propsPassedCategory,
                "_blank"
            );
        },
        // COPY TEXT
        copyFmeTaskId() {
            var copyText = document.getElementById("fme-detail-task-id");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },
        copyFmeTicketId() {
            var copyText = document.getElementById("fme-detail-ticket-id");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },

        copyFmeSearchTaskId() {
            var copyText = document.getElementById("fme-search-detail-task-id");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },
        copyFmeSearchTicketId() {
            var copyText = document.getElementById("fme-search-detail-ticket-id");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },

        copyTextSiteDetail() {
            var copyText = document.getElementById("site-detail-tt");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },

        copyTextSearchSiteDetail() {
            var copyText = document.getElementById("site-search-detail-tt");
            var textToCopy = copyText.textContent || copyText.innerText;

            navigator.clipboard.writeText(textToCopy).then(function () {
                alert(textToCopy + " Copied");
            }).catch(function (error) {
                console.error('Failed to copy: ', error);
            });
        },

        // INITIATE FETCH DATA
        async fetchSiteData() {
            try {
                this.loading = true;
                await this.getAllMarkers();
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
                this.updateLastUpdatedTime();
            }
        },
        // GET ALL MARKERS
        async getAllMarkers() {
            try {
                // if (this.poiSiteCheckDown == true) {
                //     this.hideLayer(this.poiMarkerDown);
                //     MessageProcessor.process({
                //         serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                //         data: {
                //             hub_type: this.selectedHubValues,
                //             status: "",
                //             category: "POI"
                //         },
                //         showErrorMessage: false,
                //         success: (json) => {
                //             this.poiMarkerDown.data = json.results;
                //             console.log(json, "json poi site up check");
                //             this.addLayer(this.poiMarkerDown);
                //         },
                //         error: (error) => {
                //             console.log(error, "error wo list");
                //         }
                //     });
                // }
                // if (this.routeSiteCheckDown == true) {
                //     this.hideLayer(this.routeMarkerDown);
                //     MessageProcessor.process({
                //         serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                //         data: {
                //             hub_type: this.selectedHubValues,
                //             status: "",
                //             category: "ROUTE"
                //         },
                //         showErrorMessage: false,
                //         success: (json) => {
                //             this.routeMarkerDown.data = json.results;
                //             console.log(json, "json poi site up check");
                //             this.addLayer(this.routeMarkerDown);
                //         },
                //         error: (error) => {
                //             console.log(error, "error wo list");
                //         }
                //     });
                // }
                if (this.oneHourCheck == true) {
                    this.hideLayer(this.oneHourMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "1",
                            category: ""
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
                if (this.fourHourCheck == true) {
                    this.hideLayer(this.fourHourMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "1_4",
                            category: ""
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
                if (this.eightHourCheck == true) {
                    this.hideLayer(this.eightHourMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "4_8",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.eightHourMarker.data = json.results;
                            console.log(json, "json marker check 1 hour");
                            this.addLayer(this.eightHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.twentyFourHourCheck == true) {
                    this.hideLayer(this.twentyFourHourMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "8_24",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.twentyFourHourMarker.data = json.results;
                            console.log(json, "json marker check 1 hour");
                            this.addLayer(this.twentyFourHourMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.moreDayCheck == true) {
                    this.hideLayer(this.moreDayMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "m24",
                            category: ""
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.moreDayMarker.data = json.results;
                            console.log(json, "json marker check 1 hour");
                            this.addLayer(this.moreDayMarker);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
            } catch (error) {
                console.log(error);
            }
        },

        //CLEAR SEARCHING
        async clearSearchFme() {
            this.fmeNameSearch = "";
        },
        async clearSearchSite() {
            this.siteNameSearch = "";
        },
        async clearSearchCluster() {
            this.clusterSearch = "";
        },

        // SEARCHING
        async searchCluster() {
            var ref = this;
            ref.loading = true;
            try {
                // Assume you have replaced 'google.maps.LatLng' with 'H.geo.Point'
                var resultsx;
                MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_mc_cluster_list",
                    data: {
                        cluster: ref.clusterSearch
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "json search cluster");
                        resultsx = json.results;
                        ref.clusterSearchResult = resultsx;
                        if (resultsx.length != 0 && ref.clusterSearchResult != "") {
                            ref.loading = false;
                            ref.triggerMcClusterModal();
                            console.log(ref.clusterSearchResult, "resultsx cluster console");
                        } else {
                            ref.loading = false;
                            console.log("site lon lat not found!");
                            ref.$swal("Error", "MC Cluster Not Found", "Try to search with the correct MC Cluster");
                        }
                    },
                    error: (error) => {
                        ref.loading = false;
                        ref.$swal("Error", "MC Cluster Not Found", "Try to search with the correct MC Cluster");
                        // console.log(error, "error seach cluster");
                    }
                });
            } catch (e) {
                ref.loading = false;
                console.error(e);
            }
        },
        async searchMcClusterModal() {
            this.loading = true;
            try {
                // Assume you have replaced 'google.maps.LatLng' with 'H.geo.Point'
                var resultsx;
                MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_mc_cluster_list",
                    data: {
                        cluster: this.clusterSearch
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "json search cluster");
                        resultsx = json.results;
                        this.clusterSearchResult = resultsx;
                        if (resultsx.length != 0 && this.clusterSearchResult != "") {
                            this.loading = false;
                            console.log(this.clusterSearchResult, "resultsx cluster console");
                        } else {
                            this.loading = false;
                            console.log("site lon lat not found!");
                            this.$swal("Error", "MC Cluster Not Found", "Try to search with the correct MC Cluster");
                        }
                    },
                    error: (error) => {
                        this.loading = false;
                        this.$swal("Error", "MC Cluster Not Found", "Try to search with the correct MC Cluster");
                        // console.log(error, "error seach cluster");
                    }
                });
            } catch (e) {
                this.loading = false;
                console.error(e);
            }
        },
        async searchSiteName() {
            var ref = this;
            ref.loading = true;
            try {
                var resultsx;
                var wrapper;
                MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_site_name",
                    data: {
                        sitename: ref.siteNameSearch
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "search site name");
                        resultsx = json.results;
                        if (resultsx.length != 0 && ref.siteNameSearch != "") {
                            ref.siteSearchResult = resultsx;
                            ref.triggerSiteSearchModal();
                        } else {
                            console.log("site lon lat not found!");
                            ref.$swal("Error", "Site Name Not Found", "Try to search with the correct Site Name");
                        }
                        ref.loading = false;
                    },
                    error: (error) => {
                        ref.loading = false;
                        console.log(error, "error search site name");
                        ref.$swal("Error", "Site Name Not Found", "Try to search with the correct Site Name");
                    }
                });
            } catch (e) {
                ref.loading = false;
                console.error(e);
            }
        },
        async searchSiteNameModal() {
            this.loading = true;
            try {
                var resultsx;
                var wrapper;
                MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_site_name",
                    data: {
                        sitename: this.siteNameSearch
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "search site name");
                        resultsx = json.results;
                        if (resultsx.length != 0 && this.siteNameSearch != "") {
                            this.siteSearchResult = resultsx;
                        } else {
                            console.log("site lon lat not found!");
                            this.$swal("Error", "Site Name Not Found", "Try to search with the correct Site Name");
                        }
                        this.loading = false;
                    },
                    error: (error) => {
                        this.loading = false;
                        console.log(error, "error search site name");
                        this.$swal("Error", "Site Name Not Found", "Try to search with the correct Site Name");
                    }
                });
            } catch (e) {
                this.loading = false;
                console.error(e);
            }
        },
        async searchFmeNameModal() {
            this.loading = true;
            try {
                var resultsx;
                MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_fme_list",
                    data: {
                        username: this.fmeNameSearch,
                        status: "inprocess"
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "search FME name");
                        resultsx = json.results;
                        if (resultsx.length != 0 && this.fmeNameSearchResult != "") {
                            this.fmeNameSearchResult = resultsx;
                        } else {
                            console.log("FME NOT FOUND");
                            this.$swal("Error", "FME Name Not Found", "Try to search with the correct FME Name");
                        }
                        this.loading = false;
                    },
                    error: (error) => {
                        this.loading = false;
                        console.log(error, "error search FME name");
                        this.$swal("Error", "FME Name Not Found", "Try to search with the correct FME Name");
                    }
                });
            } catch (e) {
                this.loading = false;
                console.log(error, "error");
            }
        },
        async searchFmeName() {
            var ref = this;
            ref.loading = true;
            console.log(ref.loading, "loading");
            try {
                var resultsx;
                MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_fme_list",
                    data: {
                        username: ref.fmeNameSearch,
                        status: "inprocess"
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        console.log(json, "search FME name");
                        resultsx = json.results;
                        if (resultsx.length != 0 && ref.fmeNameSearchResult != "") {
                            ref.fmeNameSearchResult = resultsx;
                            ref.triggerFmeSearchModal();
                        } else {
                            console.log("FME NOT FOUND");
                            ref.$swal("Error", "FME Name Not Found", "Try to search with the correct FME Name");
                        }
                        ref.loading = false;
                        console.log(ref.loading, "loading");
                    },
                    error: (error) => {
                        ref.loading = false;
                        console.log(ref.loading, "loading");
                        console.log(error, "error search FME name");
                        ref.$swal("Error", "FME Name Not Found", "Try to search with the correct FME Name");
                    }
                });
            } catch (e) {
                ref.loading = false;
                console.log(ref.loading, "loading");
                console.log(error, "error");
            }
            console.log(ref.loading, "loading");
        },

        // AFTER SEARCHING
        async siteSelectByID(resultLat, resultLng, src, siteid, sitename) {
            this.loading = true;
            this.siteItemSearch.siteid = siteid.toString();
            this.siteItemSearch.sitename = sitename.toString();
            if (resultLat !== "" && resultLng !== "") {
                var coord = { lat: parseFloat(resultLat), lng: parseFloat(resultLng) };
            }

            map.panTo(coord);
            map.setZoom(10);
            map.setCenter(coord);

            this.$refs.siteSearchDismiss.click();

            if (coverageSite != null) {
                coverageSite.setMap(null);
            }
            coverageSite = new HWMapJsSDK.HWCircle({
                map: map,
                center: coord, // LatLng object
                radius: 12000, // in meters
                fillColor: "rgba(237, 109, 0, 0.1)",
                strokeColor: "rgba(237, 109, 0, 0.8)",
                strokeWeight: 2
            });

            var iconStr = "";
            iconStr = src;

            if (siteSearchMarker != null) {
                toRaw(siteSearchMarker).setMap(null);
            }

            siteSearchMarker = new HWMapJsSDK.HWMarker({
                map: map,
                position: coord,
                zIndex: 10,
                icon: {
                    scale: 0.07,
                    url: iconStr
                }
            });

            this.loading = false;

            siteSearchMarker.addListener("click", async () => {
                this.loading = true;
                console.log("masuk");
                var alarmListSearch = [];
                var alarmIdListSearch = "";
                MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_list_alarm_by_site",
                    data: {
                        siteid: siteid
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        alarmListSearch = json.results;
                        console.log(alarmListSearch, 'alarm list search');
                        // SITE NAME GET FROM HERE site_name
                        for (var i = 0; i < alarmListSearch.length; i++) {
                            if (i != alarmListSearch.length - 1) {
                                alarmIdListSearch += "'" + alarmListSearch[i].alarmid + "',";
                            } else {
                                alarmIdListSearch += "'" + alarmListSearch[i].alarmid + "'";
                            }
                        }
                        console.log(alarmIdListSearch, 'alarm list search');
                        if (alarmIdListSearch == '' || alarmIdListSearch == null || alarmIdListSearch == undefined) {
                            this.loading = false;
                            this.triggerSiteSearchDetailModal();
                        } else {
                            var ticketListSearch = [];
                            MessageProcessor.process({
                                serviceId: "netdrone_maps_lebaran_get_list_ticket",
                                data: {
                                    start: 0,
                                    limit: 3,
                                    siteid: siteid,
                                    alarmid: alarmIdListSearch
                                },
                                showErrorMessage: false,
                                success: (json) => {
                                    ticketListSearch = json.results;
                                    this.siteAlarmListSearch = alarmListSearch;
                                    for (let i = 0; i < this.siteAlarmListSearch.length; i++) {
                                        const timestamp = this.siteAlarmListSearch[i].lastoccurrence;
                                        const date = new Date(timestamp);
                                        const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
                                        this.siteAlarmListSearch[i].lastoccurrence = formattedDate;
                                    }
                                    this.siteTicketListSearch = ticketListSearch;
                                    if (this.siteAlarmListSearch != null || this.siteTicketListSearch != null) {
                                        this.triggerSiteSearchDetailModal();
                                        this.loading = false;
                                    }
                                },
                                error: (error) => {
                                    this.loading = false;
                                    console.log(error, "error site down layer");
                                }
                            });
                        }
                    },
                    error: (error) => {
                        this.loading = false;
                        console.log(error, "json ALARM GET LIST");
                    }
                });
            });
        },

        async siteSelectInAlarm(siteid) {
            this.loading = true;
            MessageProcessor.process({
                serviceId: "netdrone_maps_lebaran_get_site_by_id",
                data: {
                    site_id: siteid,
                },
                showErrorMessage: false,
                success: (json) => {
                    this.loading = false;

                    var res;
                    res = json.results;
                    if (res.latitude !== "" && res.longitude !== "") {
                        var coord = { lat: parseFloat(res.latitude), lng: parseFloat(res.longitude) };
                    }
                    map.panTo(coord);
                    map.setZoom(10);
                    map.setCenter(coord);

                    if (coverageSite != null) {
                        coverageSite.setMap(null);
                    }

                    coverageSite = new HWMapJsSDK.HWCircle({
                        map: map,
                        center: coord, // LatLng object
                        radius: 12000, // in meters
                        fillColor: "rgba(237, 109, 0, 0.1)",
                        strokeColor: "rgba(237, 109, 0, 0.8)",
                        strokeWeight: 2
                    });

                    var iconStr = "";
                    iconStr = res.src;

                    if (siteSearchMarker != null) {
                        toRaw(siteSearchMarker).setMap(null);
                    }

                    siteSearchMarker = new HWMapJsSDK.HWMarker({
                        map: map,
                        position: coord,
                        zIndex: 10,
                        icon: {
                            scale: 0.07,
                            url: iconStr
                        }
                    });

                    siteSearchMarker.addListener("click", async () => {
                        this.loading = true;
                        console.log("masuk");
                        var alarmListSearch = [];
                        var alarmIdListSearch = "";
                        MessageProcessor.process({
                            serviceId: "netdrone_maps_lebaran_get_list_alarm_by_site",
                            data: {
                                siteid: siteid
                            },
                            showErrorMessage: false,
                            success: (json) => {
                                alarmListSearch = json.results;
                                console.log(alarmListSearch, 'alarm list search');
                                // SITE NAME GET FROM HERE site_name
                                for (var i = 0; i < alarmListSearch.length; i++) {
                                    if (i != alarmListSearch.length - 1) {
                                        alarmIdListSearch += "'" + alarmListSearch[i].alarmid + "',";
                                    } else {
                                        alarmIdListSearch += "'" + alarmListSearch[i].alarmid + "'";
                                    }
                                }
                                console.log(alarmIdListSearch, 'alarm list search');
                                if (alarmIdListSearch == '' || alarmIdListSearch == null || alarmIdListSearch == undefined) {
                                    this.loading = false;
                                    this.triggerSiteSearchDetailModal();
                                } else {
                                    var ticketListSearch = [];
                                    MessageProcessor.process({
                                        serviceId: "netdrone_maps_lebaran_get_list_ticket",
                                        data: {
                                            start: 0,
                                            limit: 3,
                                            siteid: siteid,
                                            alarmid: alarmIdListSearch
                                        },
                                        showErrorMessage: false,
                                        success: (json) => {
                                            ticketListSearch = json.results;
                                            this.siteAlarmListSearch = alarmListSearch;
                                            for (let i = 0; i < this.siteAlarmListSearch.length; i++) {
                                                const timestamp = this.siteAlarmListSearch[i].lastoccurrence;
                                                const date = new Date(timestamp);
                                                const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
                                                this.siteAlarmListSearch[i].lastoccurrence = formattedDate;
                                            }
                                            this.siteTicketListSearch = ticketListSearch;
                                            if (this.siteAlarmListSearch != null || this.siteTicketListSearch != null) {
                                                this.triggerSiteSearchDetailModal();
                                                this.loading = false;
                                            }
                                        },
                                        error: (error) => {
                                            this.loading = false;
                                            console.log(error, "error site down layer");
                                        }
                                    });
                                }
                            },
                            error: (error) => {
                                this.loading = false;
                                console.log(error, "json ALARM GET LIST");
                            }
                        });
                    });
                },
            });
        },

        async fmeSelectByID(resultLat, resultLng, src, userId) {
            this.loading = true;
            if (resultLat !== "" && resultLng !== "") {
                var coord = { lat: parseFloat(resultLat), lng: parseFloat(resultLng) };
            }

            map.panTo(coord);
            map.setZoom(10);
            map.setCenter(coord);

            this.$refs.fmeSearchDismiss.click();

            if (coverageFme != null) {
                coverageFme.setMap(null);
            }
            coverageFme = new HWMapJsSDK.HWCircle({
                map: map,
                center: coord, // LatLng object
                radius: 1, // in meters
                fillColor: "rgba(237, 109, 0, 0.1)",
                strokeColor: "rgba(237, 109, 0, 0.8)",
                strokeWeight: 2
            });

            var iconStr = "";
            iconStr = src;

            if (fmeSearchMarker != null) {
                toRaw(fmeSearchMarker).setMap(null);
            }

            fmeSearchMarker = new HWMapJsSDK.HWMarker({
                map: map,
                position: coord,
                zIndex: 10,
                icon: {
                    scale: 0.9,
                    url: iconStr
                }
            });

            this.loading = false;

            var ref = this;
            fmeSearchMarker.addListener("click", async function (param) {
                ref.loading = true;
                var fmeDetailVar = {};
                var woListVar = {};
                MessageProcessor.process({
                    serviceId: "netdrone_maps_lebaran_get_fme_basic_information",
                    data: {
                        user_id: userId
                    },
                    showErrorMessage: false,
                    success: (json) => {
                        fmeDetailVar = json.results;
                        console.log(fmeDetailVar, "FME DETAILS");
                        setTimeout(() => {
                            try {
                                MessageProcessor.process({
                                    serviceId: "netdrone_maps_lebaran_get_task_work_list",
                                    data: {
                                        start: 0,
                                        limit: 1000,
                                        task_status: ['accepted', 'inprocess'],
                                        assign_to_fme_name: userId
                                    },
                                    showErrorMessage: false,
                                    success: (json) => {
                                        woListVar = json.results;
                                        console.log(woListVar, "WO LIST");
                                        if (fmeDetailVar != {} && woListVar != {}) {
                                            ref.triggerFmeSearchDetailModal(fmeDetailVar, woListVar);
                                        }
                                        ref.loading = false;
                                    },
                                    error: (error) => {
                                        ref.loading = false;
                                        console.log(error, "error wo list");
                                    }
                                });
                            } catch (error) {
                                ref.loading = false;
                                console.log(error, "error fme details");
                            }
                        }, 5000);
                    },
                    error: (error) => {
                        ref.loading = false;
                        console.log(error, "error fme details");
                    }
                });
            });
        },

        async mcSelectById(lat, lon, siteName) {
            this.$refs.mcClusterSearchDismiss.click();
            this.loading = true;

            var coord = { lat: parseFloat(1), lng: parseFloat(1) };
            if (lat !== "" && lon !== "") {
                coord = { lat: parseFloat(lat), lng: parseFloat(lon) };
                console.log(coord, 'lon lat mc select');
                // console.log(lon, 'longitude mc select');
            }
            map.panTo(coord);
            map.setZoom(10);

            this.hideLayer(this.oneHourMarker);
            this.hideLayer(this.fourHourMarker);
            this.hideLayer(this.eightHourMarker);
            this.hideLayer(this.twentyFourHourMarker);
            this.hideLayer(this.moreDayMarker);
            this.hideLayer(this.mcClusterMarker);

            MessageProcessor.process({
                serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                data: {
                    hub_type: this.selectedHubValues,
                    status: "",
                    mc_cluster: siteName,
                },
                showErrorMessage: false,
                success: (json) => {
                    this.mcClusterMarker.data = json.results;
                    console.log(json, "mc cluster console");
                    this.addLayer(this.mcClusterMarker);
                    this.loading = false;
                },
                error: (error) => {
                    this.loading = false;
                    console.log(error, "error wo list");
                }
            });
        },

        async getFmeTicketDetail(taskId, phoneNumber) {
            this.loading = true;
            const ticketDetails = this.woListFme.find((item) => item.task_id === taskId);
            this.fmePhoneNumber = phoneNumber;
            if (ticketDetails) {
                this.getSingleTicketDetail = ticketDetails;
                this.getOriginData = { lat: ticketDetails.fme_latitude, lng: ticketDetails.fme_longitude };
                this.getDestinationData = { lat: ticketDetails.site_latitude, lng: ticketDetails.site_longitude };
            }
            await this.fmePetalMapsInit(this.getOriginData, this.getDestinationData);
            this.loading = false;
        },

        async getFmeEtaData(datax) {
            await this.$refs.etaDetailsData.click();
            this.loading = true;
            this.getOriginDataFmeEta = { lat: parseFloat(datax.fme_latitude), lng: parseFloat(datax.fme_longitude) };
            this.getDestinationDataFmeEta = { lat: parseFloat(datax.site_latitude), lng: parseFloat(datax.site_longitude) };

            await this.fmePetalMapsInitEtaData(this.getOriginDataFmeEta, this.getDestinationDataFmeEta);
            this.loading = false;
        },

        async getFmeSearchTicketDetail(taskId, phoneNumber) {
            this.loading = true;
            const ticketDetails = this.woListFmeSearch.find((item) => item.task_id === taskId);
            this.fmeSearchPhoneNumber = phoneNumber;
            if (ticketDetails) {
                this.getSingleTicketDetail = ticketDetails;
                this.getOriginData = { lat: parseFloat(ticketDetails.fme_latitude), lng: parseFloat(ticketDetails.fme_longitude) };
                this.getDestinationData = { lat: parseFloat(ticketDetails.site_latitude), lng: parseFloat(ticketDetails.site_longitude) };
            }
            await this.fmePetalMapsInit(this.getOriginData, this.getDestinationData);
            this.loading = false;
        },

        async getFmePosition(fmeUserName, taskId, fmeFullName) {
            this.loading = true;
            console.log(fmeUserName, 'user id')
            var resultsx;
            MessageProcessor.process({
                serviceId: "netdrone_maps_lebaran_get_fme_position",
                data: {
                    username: fmeUserName,
                    task_id: taskId,
                },
                showErrorMessage: false,
                success: (json) => {
                    console.log(json, 'resultsx get fme position');
                    resultsx = json.results[0];
                    this.fmePositionData = resultsx;
                    console.log(this.fmePositionData, 'this fme position data');
                    this.etaFullname = fmeFullName;
                    this.etaTaskId = taskId;
                    this.etaUserId = fmeUserName;
                    this.getFmeEtaData(this.fmePositionData);
                    this.loading = false;
                },
                error: (error) => {
                    this.loading = false;
                    this.$swal("Error", error, "Try to search with the correct FME Name");
                }
            });
        },

        // HANDLE APPLY FILTER
        async handleApplyFilter() {
            try {
                this.loadingFilter = true;
                // SITE DURATION
                if (this.oneHourCheck == false) {
                    await this.hideLayer(this.oneHourMarker);
                }
                if (this.oneHourCheck == true) {
                    this.hideLayer(this.oneHourMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "1",
                            category: ""
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
                if (this.fourHourCheck == false) {
                    await this.hideLayer(this.fourHourMarker);
                }
                if (this.fourHourCheck == true) {
                    this.hideLayer(this.fourHourMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "1_4",
                            category: ""
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
                if (this.eightHourCheck == false) {
                    await this.hideLayer(this.eightHourMarker);
                }
                if (this.eightHourCheck == true) {
                    this.hideLayer(this.eightHourMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "4_8",
                            category: ""
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
                if (this.twentyFourHourCheck == false) {
                    await this.hideLayer(this.twentyFourHourMarker);
                }
                if (this.twentyFourHourCheck == true) {
                    this.hideLayer(this.twentyFourHourMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "8_24",
                            category: ""
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
                if (this.moreDayCheck == false) {
                    await this.hideLayer(this.moreDayMarker);
                }
                if (this.moreDayCheck == true) {
                    this.hideLayer(this.moreDayMarker);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            status: "m24",
                            category: ""
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

                // SITE CATEGORY
                if (this.poiSiteCheckDown == false) {
                    this.hideLayer(this.poiMarkerDown);
                }
                if (this.poiSiteCheckDown == true) {
                    this.hideLayer(this.poiMarkerDown);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "POI"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.poiMarkerDown.data = json.results;
                            console.log(json, "json poi site up check");
                            this.addLayer(this.poiMarkerDown);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.poiSiteCheckUp == false) {
                    this.hideLayer(this.poiMarkerUp);
                }
                if (this.poiSiteCheckUp == true) {
                    this.hideLayer(this.poiMarkerUp);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "POI"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.poiMarkerUp.data = json.site_up;
                            console.log(json, "json poi site up check");
                            this.addLayer(this.poiMarkerUp);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.routeSiteCheckDown == false) {
                    this.hideLayer(this.routeMarkerDown);
                }
                if (this.routeSiteCheckDown == true) {
                    this.hideLayer(this.routeMarkerDown);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "ROUTE"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.routeMarkerDown.data = json.results;
                            console.log(json, "Route Marker");
                            this.addLayer(this.routeMarkerDown);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.routeSiteCheckUp == false) {
                    this.hideLayer(this.routeMarkerUp);
                }
                if (this.routeSiteCheckUp == true) {
                    this.hideLayer(this.routeMarkerUp);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "ROUTE"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.routeMarkerUp.data = json.site_up;
                            console.log(json, "Route Marker");
                            this.addLayer(this.routeMarkerUp);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.ctiSiteCheckDown == false) {
                    this.hideLayer(this.ctiMarkerDown);
                }
                if (this.ctiSiteCheckDown == true) {
                    this.hideLayer(this.ctiMarkerDown);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "CTI"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.ctiMarkerDown.data = json.results;
                            console.log(json, "json marker check 1-4 hour");
                            this.addLayer(this.ctiMarkerDown);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.ctiSiteCheckUp == false) {
                    this.hideLayer(this.ctiMarkerUp);
                }
                if (this.ctiSiteCheckUp == true) {
                    this.hideLayer(this.ctiMarkerUp);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_all_site_down_markers",
                        data: {
                            hub_type: this.selectedHubValues,
                            category: "CTI"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.ctiMarkerUp.data = json.site_up;
                            console.log(json, "json marker check 1-4 hour");
                            this.addLayer(this.ctiMarkerUp);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }

                if (this.poiSiteCheckDown || this.poiSiteCheckUp) {
                    if (Array.isArray(this.propsSiteCategory)) {
                        console.log(this.propsSiteCategory, 'check array poi');
                        // Remove 'POI' if it exists in the array
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'POI');
                        // Add 'POI' to the array if it's not already present
                        if (!this.propsSiteCategory.includes('POI')) {
                            this.propsSiteCategory.push('POI');
                            console.log(this.propsSiteCategory, 'push array poi');
                        }
                    }
                } else {
                    // If both poiSiteCheckDown and poiSiteCheckUp are false
                    if (Array.isArray(this.propsSiteCategory)) {
                        // Remove 'POI' from the array if it exists
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'POI');
                    }
                }

                if (this.routeSiteCheckDown || this.routeSiteCheckUp) {
                    if (Array.isArray(this.propsSiteCategory)) {
                        console.log(this.propsSiteCategory, 'check array ROUTE');
                        // Remove 'ROUTE' if it exists in the array
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'ROUTE');
                        // Add 'ROUTE' to the array if it's not already present
                        if (!this.propsSiteCategory.includes('ROUTE')) {
                            this.propsSiteCategory.push('ROUTE');
                            console.log(this.propsSiteCategory, 'push array ROUTE');
                        }
                    }
                } else {
                    // If both ROUTESiteCheckDown and ROUTESiteCheckUp are false
                    if (Array.isArray(this.propsSiteCategory)) {
                        // Remove 'ROUTE' from the array if it exists
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'ROUTE');
                    }
                }

                if (this.ctiSiteCheckDown || this.ctiSiteCheckUp) {
                    if (Array.isArray(this.propsSiteCategory)) {
                        console.log(this.propsSiteCategory, 'check array CTI');
                        // Remove 'CTI' if it exists in the array
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'CTI');
                        // Add 'CTI' to the array if it's not already present
                        if (!this.propsSiteCategory.includes('CTI')) {
                            this.propsSiteCategory.push('CTI');
                            console.log(this.propsSiteCategory, 'push array CTI');
                        }
                    }
                } else {
                    // If both CTISiteCheckDown and CTISiteCheckUp are false
                    if (Array.isArray(this.propsSiteCategory)) {
                        // Remove 'CTI' from the array if it exists
                        this.propsSiteCategory = this.propsSiteCategory.filter(item => item !== 'CTI');
                    }
                }

                // FME
                if (this.fmeIdleCheck == false) {
                    this.hideLayer(this.fmeLocationIdle);
                }
                if (this.fmeIdleCheck == true) {
                    this.hideLayer(this.fmeLocationIdle);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_fme_list",
                        data: {
                            status: "accepted"
                        },
                        success: (json) => {
                            this.fmeLocationIdle.data = json.results;
                            console.log(this.fmeLocationIdle, "fme idle");
                            this.addLayer(this.fmeLocationIdle);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                if (this.fmeBusyCheck == false) {
                    this.hideLayer(this.fmeLocationBusy);
                }
                if (this.fmeBusyCheck == true) {
                    console.log("masuk");
                    this.hideLayer(this.fmeLocationBusy);
                    MessageProcessor.process({
                        serviceId: "netdrone_maps_lebaran_get_fme_list",
                        data: {
                            status: "inprocess"
                        },
                        showErrorMessage: false,
                        success: (json) => {
                            this.fmeLocationBusy.data = json.results;
                            console.log(this.fmeLocationBusy, "fme busy");
                            this.addLayer(this.fmeLocationBusy);
                        },
                        error: (error) => {
                            console.log(error, "error wo list");
                        }
                    });
                }
                setTimeout(() => {
                    this.loadingFilter = false;
                }, 10000);

                setTimeout(() => {
                    this.propsPassedCategory = this.propsSiteCategory;
                }, 3000);
            } catch (error) {
                console.log(error);
            }
        },
        // HANDLE CLEAR FILTER
        async handleClearFilter() {
            // CLEAR ALL MARKER
            this.allSiteCheck = false;
            this.oneHourCheck = false;
            this.fourHourCheck = false;
            this.eightHourCheck = false;
            this.twentyFourHourCheck = false;
            this.moreDayCheck = false;

            this.allCatSiteCheck = false;
            // this.poiSiteCheckDown = true;
            this.poiSiteCheckUp = false;
            // this.routeSiteCheckDown = true;
            this.routeSiteCheckUp = false;
            this.ctiSiteCheckDown = false;
            this.ctiSiteCheckUp = false;

            this.moreDayCheck = false;
            this.fmeBusyCheck = false;
            this.fmeIdleCheck = false;

            if (coverageSite != null) {
                coverageSite.setMap(null);
            }
            if (fmeSearchMarker != null) {
                toRaw(fmeSearchMarker).setMap(null);
            }

            this.hideLayer(this.oneHourMarker);
            this.hideLayer(this.fourHourMarker);
            this.hideLayer(this.eightHourMarker);
            this.hideLayer(this.twentyFourHourMarker);
            this.hideLayer(this.moreDayMarker);

            this.hideLayer(this.poiMarkerDown);
            this.hideLayer(this.poiMarkerUp);
            this.hideLayer(this.routeMarkerDown);
            this.hideLayer(this.routeMarkerUp);
            this.hideLayer(this.ctiMarkerDown);
            this.hideLayer(this.ctiMarkerUp);


            if (siteSearchMarker != null) {
                toRaw(siteSearchMarker).setMap(null);
            }


            if (fmeSelectMarker != null) {
                toRaw(fmeSelectMarker).setMap(null);
            }

            if (coverageFme != null) {
                coverageFme.setMap(null);
            }

            this.hideLayer(this.fmeLocationBusy);
            this.hideLayer(this.fmeLocationIdle);
            this.hideLayer(this.mcClusterMarker);

            // THEN SET TO DEFAULT
            this.poiSiteCheckDown = true;
            this.routeSiteCheckDown = true;

            this.handleApplyFilter();
        },


        // FILTER CHECK SITES
        async checkSites(event, type) {
            const check = event.target.checked;
            if (check == true) {
                this.allCatSiteCheck = false;
                this.poiSiteCheckDown = false;
                this.poiSiteCheckUp = false;
                this.routeSiteCheckDown = false;
                this.routeSiteCheckUp = false;
                this.ctiSiteCheckDown = false;
                this.ctiSiteCheckUp = false;
            }
            switch (type) {
                case 'all':
                    this.allSiteCheck = check;
                    this.oneHourCheck = check;
                    this.fourHourCheck = check;
                    this.eightHourCheck = check;
                    this.twentyFourHourCheck = check;
                    this.moreDayCheck = check;
                    break;
                case '1hr':
                    this.oneHourCheck = check;
                    break;
                case '4hr':
                    this.fourHourCheck = check;
                    break;
                case '8hr':
                    this.eightHourCheck = check;
                    break;
                case '24hr':
                    this.twentyFourHourCheck = check;
                    break;
                case 'moreDay':
                    this.moreDayCheck = check;
                    break;
                default:
                    break;
            }
        },

        // FILTER CHECK SITE CATEGORY
        async checkSiteCategory(event, category) {
            const check = event.target.checked;
            if (check == true) {
                this.allSiteCheck = false;
                this.oneHourCheck = false;
                this.fourHourCheck = false;
                this.eightHourCheck = false;
                this.twentyFourHourCheck = false;
                this.moreDayCheck = false;
            }
            switch (category) {
                case 'all':
                    this.allCatSiteCheck = check;
                    this.poiSiteCheckDown = check;
                    this.poiSiteCheckUp = check;
                    this.routeSiteCheckDown = check;
                    this.routeSiteCheckUp = check;
                    this.ctiSiteCheckDown = check;
                    this.ctiSiteCheckUp = check;
                    break;
                case 'poiSiteCheckDown':
                    this.poiSiteCheckDown = check;
                    console.log(this.propsSiteCategory);
                    break;
                case 'poiSiteCheckUp':
                    this.poiSiteCheckUp = check;
                    break;
                case 'routeSiteCheckDown':
                    this.routeSiteCheckDown = check;
                    break;
                case 'routeSiteCheckUp':
                    this.routeSiteCheckUp = check;
                    break;
                case 'ctiSiteCheckDown':
                    this.ctiSiteCheckDown = check;
                    break;
                case 'ctiSiteCheckUp':
                    this.ctiSiteCheckUp = check;
                    break;
                default:
                    break;
            }
        },


        // FILTER CHECK FME
        async checkFmeAll(event) {
            var check = event.target.checked;
            if (check == false) {
                this.fmeBusyCheck = false;
                this.fmeIdleCheck = false;
            } else {
                this.fmeBusyCheck = true;
                this.fmeIdleCheck = true;
            }
        },
        async checkFmeBusy(event) {
            var check = event.target.checked;
            if (check == false) {
                this.fmeBusyCheck = false;
            } else {
                this.fmeBusyCheck = true;
            }
        },
        async checkFmeIdle(event) {
            var check = event.target.checked;
            if (check == false) {
                this.fmeIdleCheck = false;
            } else {
                this.fmeIdleCheck = true;
            }
        },

        // BACKGROUND FUNCTION
        addLayer(datax) {
            var ref = this;
            datax.data.forEach(async function (item) {
                console.log(item, 'item item item');
                let iconStr = item.src !== undefined ? item.src : item.url;
                let coord = { lat: parseFloat(1), lng: parseFloat(1) };

                if (item.lat !== "" && item.lon !== "") {
                    coord = { lat: parseFloat(item.lat), lng: parseFloat(item.lon) };
                }

                let MM = null;

                if (datax.panelType === "site") {
                    MM = new HWMapJsSDK.HWMarker({
                        map: map,
                        position: coord,
                        zIndex: 10,
                        icon: {
                            scale: 0.30,
                            url: iconStr
                        }
                    });
                }

                if (datax.panelType === "fme") {
                    MM = new HWMapJsSDK.HWMarker({
                        map: map,
                        position: coord,
                        zIndex: 10,
                        icon: {
                            scale: 0.5,
                            url: iconStr
                        }
                    });
                }

                datax.markers.push(MM);

                MM.addListener("click", async () => {
                    if (datax.panelType === "site") {
                        ref.loading = true;
                        var alarmList = [];
                        var alarmIdList = "";
                        map.panTo({ lat: parseFloat(item.lat), lng: parseFloat(item.lon) });
                        map.setZoom(12);
                        MessageProcessor.process({
                            serviceId: "netdrone_maps_lebaran_get_list_alarm_by_site",
                            data: {
                                siteid: item.title
                            },
                            showErrorMessage: false,
                            success: (json) => {
                                alarmList = json.results;
                                // SITE NAME GET FROM HERE site_name
                                console.log(alarmList, "json ALARM GET LIST");
                                console.log(item.title, "item title2");
                                for (var i = 0; i < alarmList.length; i++) {
                                    if (i != alarmList.length - 1) {
                                        alarmIdList += "'" + alarmList[i].alarmid + "',";
                                    } else {
                                        alarmIdList += "'" + alarmList[i].alarmid + "'";
                                    }
                                }
                                console.log(alarmIdList, 'alarm id list');
                                var ticketList = [];
                                MessageProcessor.process({
                                    serviceId: "netdrone_maps_lebaran_get_list_ticket",
                                    data: {
                                        start: 0,
                                        limit: 3,
                                        siteid: item.title,
                                        alarmid: alarmIdList
                                    },
                                    showErrorMessage: false,
                                    success: (json) => {
                                        console.log(item.title, "item title3");
                                        console.log(json, "json mentahan Site Down Layer");
                                        ticketList = json.results;
                                        console.log(ticketList, "json Site Down layer");
                                        ref.loading = false;
                                        ref.triggerSiteDetailModal(item, alarmList, ticketList);
                                    },
                                    error: (error) => {
                                        ref.loading = false;
                                        console.log(error, "error site down layer");
                                    }
                                });
                            },
                            error: (error) => {
                                ref.loading = false;
                                console.log(error, "json ALARM GET LIST");
                            }
                        });
                    }
                    if (datax.panelType === "fme") {
                        ref.loading = true;
                        var fmeDetails = {};
                        var woList = {};
                        map.panTo({ lat: parseFloat(item.lat), lng: parseFloat(item.lon) });
                        map.setZoom(12);
                        MessageProcessor.process({
                            serviceId: "netdrone_maps_lebaran_get_fme_basic_information",
                            data: {
                                user_id: item.assign_to_fme_name
                            },
                            showErrorMessage: false,
                            success: (json) => {
                                fmeDetails = json.results;
                                console.log(fmeDetails, "FME DETAILS");
                                setTimeout(() => {
                                    try {
                                        MessageProcessor.process({
                                            serviceId: "netdrone_maps_lebaran_get_task_work_list",
                                            data: {
                                                start: 0,
                                                limit: 1000,
                                                task_status: ['accepted', 'inprocess'],
                                                assign_to_fme_name: item.assign_to_fme_name
                                            },
                                            showErrorMessage: false,
                                            success: (json) => {
                                                woList = json.results;
                                                console.log(woList, "WO LIST");
                                                if (fmeDetails != {} && woList != {}) {
                                                    ref.loading = false;
                                                    ref.triggerFmeDetailModal(woList, fmeDetails);
                                                }
                                            },
                                            error: (error) => {
                                                ref.loading = false;
                                                console.log(error, "error wo list");
                                            }
                                        });
                                    } catch (error) {
                                        ref.loading = false;
                                        console.log(error, "error fme details");
                                    }
                                }, 5000);
                            },
                            error: (error) => {
                                ref.loading = false;
                                console.log(error, "error fme details");
                            }
                        });
                    }
                });
            });
        },

        hideLayer(layerObj) {
            if (layerObj.markers && layerObj.markers.length > 0) {
                layerObj.markers.map((marker) => toRaw(marker).setMap(null));
            }
            layerObj.markers = [];
        },

        // MODAL TRIGGER
        async triggerMcClusterModal() {
            await this.$refs.mcClusterSearchButton.click();
        },
        async triggerSiteDetailModal(item, alarmList, ticketList) {
            this.siteAlarmList = alarmList;
            for (let i = 0; i < this.siteAlarmList.length; i++) {
                const timestamp = this.siteAlarmList[i].lastoccurrence;
                const date = new Date(timestamp);
                const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
                this.siteAlarmList[i].lastoccurrence = formattedDate;
            }
            this.siteTicketList = ticketList;
            console.log(this.siteTicketList, 'site ticket list');
            this.siteItem = item;
            console.log(item, 'item');
            await this.$refs.siteDetailButton.click();
        },
        async triggerSiteSearchDetailModal() {
            await this.$refs.siteSearchDetailButton.click();
        },
        async triggerFmeSearchDetailModal(fmeDetailVar, woListVar) {
            console.log(fmeDetailVar, "fme detail var");
            console.log(woListVar, "wo list var");
            this.fmeDetailsSearch = fmeDetailVar;
            this.woListFmeSearch = woListVar;
            await this.$refs.fmeSearchDetailButton.click();
        },
        async triggerFmeDetailModal(listWo, detailFme) {
            this.woListFme = listWo;
            this.fmeDetails = detailFme;
            console.log(this.fmeDetails, "fmeDetails");
            console.log(this.woListFme, "wo list fme");
            if (this.woListFme != null && this.fmeDetails != null) {
                await this.$refs.fmeDetailButton.click();
            }
        },
        async triggerSiteSearchModal() {
            await this.$refs.siteSearchButton.click();
        },
        async triggerFmeSearchModal() {
            await this.$refs.fmeSearchButton.click();
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
                this.loading = true;
                this.updateLastUpdatedTime();
                this.refetch = true;

                this.hideLayer(this.oneHourMarker);
                this.hideLayer(this.fourHourMarker);
                this.hideLayer(this.eightHourMarker);
                this.hideLayer(this.twentyFourHourMarker);
                this.hideLayer(this.moreDayMarker);

                this.hideLayer(this.fmeLocationIdle);
                this.hideLayer(this.fmeLocationBusy);

                this.hideLayer(this.poiMarkerDown);
                this.hideLayer(this.poiMarkerUp);
                this.hideLayer(this.ctiMarkerDown);
                this.hideLayer(this.ctiMarkerUp);
                this.hideLayer(this.routeMarkerDown);
                this.hideLayer(this.routeMarkerUp);

                await this.handleApplyFilter();
                console.log(this.refetch, "will be true");
                console.log("update refetch data");
                this.loading = false;
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

        // BACKGROUND PROCESS
        async petalMapsInit() {
            var mapOptions = {};
            // mapOptions.center = { lat: -0.2228782, lng: 127.832282 };
            mapOptions.center = { lat: 0.55942, lng: 125.348276 };
            mapOptions.zoom = 5.0;
            mapOptions.language = "ENG";
            mapOptions.sourceType = "raster";
            mapOptions.zoomControl = false;
            map = new HWMapJsSDK.HWMap(document.getElementById("map-google"), mapOptions);
            this.petalMap = map;
        },
        async fmePetalMapsInit(originData, destinationData) {
            var mapOptions = {};

            mapOptions.center = { lat: parseFloat(originData.lat), lng: parseFloat(originData.lng) };
            mapOptions.zoom = 10;
            mapOptions.language = "ENG";
            mapOptions.sourceType = "raster";

            let mapContainer = document.getElementById("site-map-petal-hw");

            if (mapContainer) {
                mapContainer.parentNode.removeChild(mapContainer);
            }

            // Create a new map container
            mapContainer = document.createElement("div");
            mapContainer.id = "site-map-petal-hw";
            mapContainer.classList.add("site-map-petal-hw");
            mapContainer.style.width = "100%";
            mapContainer.style.height = "500px";
            mapContainer.style.cursor = "pointer";
            mapContainer.style.backgroundColor = "whitesmoke";
            document.getElementById("petal-map-col").appendChild(mapContainer);

            let mapFme = new HWMapJsSDK.HWMap(mapContainer, mapOptions);
            let direction = new HWMapJsSDK.HWDirectionsService(mapFme);

            const request = {
                origin: originData,
                destination: destinationData
            };

            direction.routeDriving(request, (DirectionsResult, StatusCode) => {
                // Origin marker
                var result = DirectionsResult.routes[0].paths[0];
                this.travelDistance = result.distanceText;
                this.timeInTraffic = result.durationInTrafficText;
                this.estimatedTime = result.durationText;
                let originMarker = new HWMapJsSDK.HWMarker({
                    map: mapFme,
                    position: { lat: parseFloat(originData.lat), lng: parseFloat(originData.lng) },
                    zIndex: 999,
                    icon: {
                        scale: 0.30,
                        url: "https://1057-sg.teleows.com/adc-static/imagemgt/images/1057/netdrone_maps_v3/netdrone_maps_v3/sitedown_marker/fme.png?_v=standard_1707939751633?t=1707940456288"
                    }
                });

                let destinationMarker = new HWMapJsSDK.HWMarker({
                    map: mapFme,
                    position: { lat: parseFloat(destinationData.lat), lng: parseFloat(destinationData.lng) },
                    zIndex: 999,
                    icon: {
                        scale: 0.30,
                        url: "https://1057-sg.teleows.com/adc-static/imagemgt/images/1057/netdrone_maps_v3/netdrone_maps_v3/sitedown_marker/sitefme.png?_v=standard_1707939751633?t=1707940456288"
                    }
                });

                //draw direction
                var direction = new HWMapJsSDK.HWDirectionsRenderer();
                direction.setMap(mapFme);
                direction.setDirections(DirectionsResult, { visible: true });

                // originMarker.setMap(map);
                // destinationMarker.setMap(map);
            });
        },
        async fmePetalMapsInitEtaData(originData, destinationData) {
            var mapOptions = {};

            mapOptions.center = { lat: parseFloat(originData.lat), lng: parseFloat(originData.lng) };
            mapOptions.zoom = 10;
            mapOptions.language = "ENG";
            mapOptions.sourceType = "raster";

            let mapContainer = document.getElementById("site-map-petal-hw-eta-detail");

            if (mapContainer) {
                mapContainer.parentNode.removeChild(mapContainer);
            }

            // Create a new map container
            mapContainer = document.createElement("div");
            mapContainer.id = "site-map-petal-hw-eta-detail";
            mapContainer.classList.add("site-map-petal-hw-eta-detail");
            mapContainer.style.width = "100%";
            mapContainer.style.height = "500px";
            mapContainer.style.cursor = "pointer";
            mapContainer.style.backgroundColor = "whitesmoke";
            document.getElementById("petal-map-col-eta-detail").appendChild(mapContainer);

            let mapFme = new HWMapJsSDK.HWMap(mapContainer, mapOptions);
            let direction = new HWMapJsSDK.HWDirectionsService(mapFme);

            const request = {
                origin: originData,
                destination: destinationData
            };

            direction.routeDriving(request, (DirectionsResult, StatusCode) => {
                // Origin marker
                var result = DirectionsResult.routes[0].paths[0];
                this.travelDistanceEta = result.distanceText;
                this.timeInTrafficEta = result.durationInTrafficText;
                this.estimatedTimeEta = result.durationText;
                let originMarker = new HWMapJsSDK.HWMarker({
                    map: mapFme,
                    position: { lat: parseFloat(originData.lat), lng: parseFloat(originData.lng) },
                    zIndex: 999,
                    icon: {
                        scale: 0.30,
                        url: "https://1057-sg.teleows.com/adc-static/imagemgt/images/1057/netdrone_maps_v3/netdrone_maps_v3/sitedown_marker/fme.png?_v=standard_1707939751633?t=1707940456288"
                    }
                });

                let destinationMarker = new HWMapJsSDK.HWMarker({
                    map: mapFme,
                    position: { lat: parseFloat(destinationData.lat), lng: parseFloat(destinationData.lng) },
                    zIndex: 999,
                    icon: {
                        scale: 0.30,
                        url: "https://1057-sg.teleows.com/adc-static/imagemgt/images/1057/netdrone_maps_v3/netdrone_maps_v3/sitedown_marker/sitefme.png?_v=standard_1707939751633?t=1707940456288"
                    }
                });

                //draw direction
                var direction = new HWMapJsSDK.HWDirectionsRenderer();
                direction.setMap(mapFme);
                direction.setDirections(DirectionsResult, { visible: true });

                // originMarker.setMap(map);
                // destinationMarker.setMap(map);
            });
        }
    }
};
</script>
