<template>
    <div class="col-site">
        <span class="d-flex justify-content-between mb-2">
            <b class="card-title-site align-self-center">{{ cardTitle }}</b>
            <button @click="handleClick()" class="btn-export-data-excel px-2 py-1">
                <i class="fa-solid fa-file-arrow-down"></i>
            </button>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">Unique Site Down</a>
            <a class="card-title-right">{{ uniqueSiteDown }}</a>
        </span>
        <span class="d-flex justify-content-between my-2">
            <b class="card-subtitle-site">2G</b>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">Percentage NE Down</a>
            <a class="card-title-right">{{ percentNeDown2G }}%</a>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">NE Down</a>
            <a class="card-title-right">{{ neDown2G }}</a>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">Site Impacted</a>
            <a class="card-title-right">{{ siteImpacted2G }}</a>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">Cell Down</a>
            <a class="card-title-right">{{ cellDown2G }}</a>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">Total Site</a>
            <a class="card-title-right">{{ totalSite2G }}</a>
        </span>
        <span class="d-flex justify-content-between my-2">
            <b class="card-subtitle-site">4G</b>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">Percentage NE Down</a>
            <a class="card-title-right">{{ percentageNeDown4G }}%</a>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">NE Down</a>
            <a class="card-title-right">{{ neDown4G }}</a>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">Site Impacted</a>
            <a class="card-title-right">{{ siteImpacted4G }}</a>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">Cell Down</a>
            <a class="card-title-right">{{ cellDown4G }}</a>
        </span>
        <span class="d-flex justify-content-between">
            <a class="card-title-left">Total Site</a>
            <a class="card-title-right">{{ totalSite4G }}</a>
        </span>
    </div>
</template>
<script>
import { MessageProcessor } from "@adc/vigour-ui/lib/spl";
import { U } from "@adc/vigour-ui/lib/spl";

export default {
    name: 'CardSiteComponent',
    props: {
        cardTitle: String,
        uniqueSiteDown: Number,
        percentNeDown2G: String,
        neDown2G: String,
        siteImpacted2G: Number,
        cellDown2G: Number,
        totalSite2G: Number,
        percentageNeDown4G: String,
        neDown4G: String,
        siteImpacted4G: Number,
        cellDown4G: Number,
        totalSite4G: Number,
        onClick: Function,
    },

    async mounted() {
        await U.initCsrfToken();
    },
    methods: {
        handleClick() {
            // Trigger the function passed as prop
            if (typeof this.onClick === 'function') {
                this.onClick();
            }
        }
    }
}
</script>