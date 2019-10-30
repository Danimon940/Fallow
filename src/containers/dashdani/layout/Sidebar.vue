<template>
    <div id="sidebar" v-bind:class="{ 'sidebar-open': showMobileMenu }">
        <div class="row">
            <img width="100em" src="@/assets/images/nike.png" class="img-brand" alt="brand">
        </div>
        <button class="btn btn-info" v-on:click="showMobileMenu = !showMobileMenu">Toggle</button><br>
        Sidebar
    </div>
</template>
<script>
export default {
    name: 'Sidebar',
    data: () => {
        return {
            showMobileMenu: true
        }
    }
}
</script>