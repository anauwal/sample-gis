<template>
    <div class="col-12 px-4">
        <a href="https://1057-sg.teleows.com/adc-static/static/procodeComp/1057/homepage/homepage/homepage/latest/dist/index.html#/"
            target="_blank" class="btn btn-sidebar ioh-dash d-flex" style="gap: 10px;">
            <img src="../assets/ico/home.png" alt="">
            IOH Dashboard
        </a>
    </div>
    <div class="col-12 px-4 mt-2">
        <button type="button" ref="sidebarCloseButton" id="close-sidebar-btn" data-bs-toggle="modal"
            data-bs-target="#siteStatisticModal" class="btn btn-sidebar ioh-dash d-flex" style="gap: 10px;">
            <img src="../assets/ico/site.png" alt="">
            Site Statistic
        </button>
    </div>
</template>
<script>
export default {
    name: 'ButtonSidebarIohHome',
}
</script>