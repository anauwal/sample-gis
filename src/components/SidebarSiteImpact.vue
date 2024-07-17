<template>
    <ul class="sidebar-nav px-4 mt-3">
        <p class="sidebar-filter-title">Site</p>
        <li class="mb-2">
            <a class="collapse-btn mb-2 px-4 d-flex flex-row justify-content-between align-items-center" type="button"
                data-bs-toggle="collapse" data-bs-target="#siteOptions" aria-expanded="false" aria-controls="siteOptions"
                style="text-indent: 0px">
                Select Site<i class="fa fa-chevron-down" aria-hidden="true"></i>
            </a>
            <div class="collapse" id="siteOptions">
                <div class="card card-body card-sidebar px-2 py-3">
                    <div class="col-12">
                        <label for="below_1h" class="checkbox-p check-site">
                            <input @change="checkSites1Hr($event)" type="checkbox" class="sidebar-checkbox" id="below_1h"
                                name="below_1h" value="Bike" checked />
                            <i class="fa fa-circle ml-3" aria-hidden="true" style="color: #00ff9f"></i>
                            &nbsp;
                            {{ "<1 H Site Impacted" }} </label>
                    </div>
                    <div class="col-12">
                        <label for="1-4hr" class="checkbox-p check-site">
                            <input @change="checkSites14Hr($event)" type="checkbox" class="sidebar-checkbox" id="1-4hr"
                                name="1-4hr" value="Bike" checked />
                            <i class="fa fa-circle ml-3" aria-hidden="true" style="color: #001eff"></i>
                            &nbsp;
                            {{ "1-4 H Site Impacted" }}
                        </label>
                    </div>
                    <div class="col-12">
                        <label for="4-8hr" class="checkbox-p check-site">
                            <input @change="checkSites48Hr($event)" type="checkbox" class="sidebar-checkbox" id="4-8hr"
                                name="4-8hr" value="Bike" />
                            <i class="fa fa-circle ml-3" aria-hidden="true" style="color: #d600ff"></i>
                            &nbsp;
                            {{ "4-8 H Site Impacted" }}
                        </label>
                    </div>
                    <div class="col-12">
                        <label for="8-24hr" class="checkbox-p check-site">
                            <input @change="checkSites824Hr($event)" type="checkbox" class="sidebar-checkbox" id="8-24hr"
                                name="8-24hr" value="Bike" />
                            <i class="fa fa-circle ml-3" aria-hidden="true" style="color: #f2e900"></i>
                            &nbsp;
                            {{ "8-24 H Site Impacted" }}
                        </label>
                    </div>
                    <div class="col-12">
                        <label for="more_24hr" class="checkbox-p check-site">
                            <input @change="checkSites24Hr($event)" type="checkbox" class="sidebar-checkbox" id="more_24hr"
                                name="more_24hr" value="Bike" />
                            <i class="fa fa-circle ml-3" aria-hidden="true" style="color: #ff1111"></i>
                            &nbsp;
                            {{ ">24 H Site Impacted" }}
                        </label>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'SidebarSiteImpact',
    props: {
        checkSites1Hr: Function,
        checkSites14Hr: Function,
        checkSites48Hr: Function,
        checkSites824Hr: Function,
        checkSites24Hr: Function,
    }
}
</script>