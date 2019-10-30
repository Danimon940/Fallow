<template>
    <div id="myApp" class="d-flex">
        <sidebar/>
        <div>
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Dashdani',
    components: {
        Sidebar: () => import('./layout/Sidebar')
    }
}
</script>