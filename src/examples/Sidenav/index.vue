<template>
  <aside
    id="sidenav-main"
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    :class="$store.state.isRTL ? 'me-3 rotate-caret' : 'ms-3'"
    :data-color="sidenavActiveBgColors"
  >
    <div class="sidenav-header">
      <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      ></i>
      <a href="/">
        <div style="display: flex; align-items: center;  ">
        <svg width="20" height="108" viewBox="0 0 111 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_396_8)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M48.0001 107C47.9001 107 47.8001 107 47.6001 106.9C47.7001 107 47.8001 107 48.0001 107Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M45.5001 106.6C45.4001 106.6 45.2001 106.5 45.1001 106.5C45.3001 106.5 45.4001 106.5 45.5001 106.6Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M49.0999 107.1C48.9999 107.1 48.8 107.1 48.7 107C48.8 107.1 48.8999 107.1 49.0999 107.1Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M50.0999 107.3C49.9999 107.3 49.8 107.3 49.7 107.3C49.8 107.2 49.9999 107.2 50.0999 107.3Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M42.5001 105.8C42.4001 105.8 42.2001 105.7 42.1001 105.7C42.2001 105.8 42.4001 105.8 42.5001 105.8Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M44.5001 106.4C44.4001 106.4 44.2001 106.3 44.1001 106.3C44.2001 106.3 44.4001 106.3 44.5001 106.4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M36.3001 107.3C19.8001 88.1 14.1001 54.7 29.9001 32C16.0001 37.1 4.80009 49.8 5.20009 65.5C5.50009 76.3 10.5001 87.6 10.7001 87.9C17.0001 96.7 25.9001 103.5 36.3001 107.3Z" fill="#155477"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.5001 105.2C40.4001 105.2 40.3001 105.1 40.1001 105.1C40.2001 105.1 40.4001 105.2 40.5001 105.2Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.5001 105.6C41.4001 105.6 41.2001 105.5 41.1001 105.5C41.2001 105.5 41.4001 105.5 41.5001 105.6Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.9 106C65.7 106.1 65.4 106.1 65.2 106.2C65.4 106.1 65.6 106 65.9 106Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M63.7999 106.5C63.5999 106.5 63.4 106.6 63.2 106.6C63.3 106.6 63.5999 106.5 63.7999 106.5Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M69.9001 104.7C69.6001 104.8 69.4001 104.9 69.1001 105C69.4001 104.9 69.7001 104.8 69.9001 104.7Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M68.9001 105C68.6001 105.1 68.4001 105.2 68.1001 105.3C68.4001 105.2 68.7001 105.1 68.9001 105Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M67.9 105.4C67.7 105.5 67.4 105.6 67.2 105.6C67.4 105.5 67.7 105.5 67.9 105.4Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M61.6 106.9C61.4 106.9 61.2 107 61 107C61.2 106.9 61.4 106.9 61.6 106.9Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M60.4999 107C60.2999 107 60.0999 107.1 59.8999 107.1C60.0999 107.1 60.2999 107.1 60.4999 107Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M55.3 0C24.8 0 0 24.8 0 55.3C0 55.4 0 55.5 0 55.5C0 51.5 0.5 47.7 1.3 43.9C3.6 40.6 5.5 38.8 5.5 38.8C18.6 25.3 33.9 25.1 35.8 25.1C57.3 4.6 77 7.8 77 7.8C60.1 11.1 48.6 21.9 44.8 25.8C64.5 29.1 73.2 43.2 73.2 43.2C59.6 29.6 42.5 29.6 42.5 29.6C42.2 29.6 41.8 29.6 41.5 29.6C26.3 47.9 32.3 68.7 32.3 68.7C42.1 102.2 75.9 105.9 75.9 105.9V106.7C75.5 106.8 75.2 107 74.8 107.1C95.8 99.2 110.7 79 110.7 55.3C110.6 24.8 85.8 0 55.3 0Z" fill="#155477"/>
</g>
<defs>
<clipPath id="clip0_396_8">
<rect width="110.6" height="107.5" fill="white"/>
</clipPath>
</defs>
</svg>
          <span class="ms-1 font-weight-bold">Cursos Lefisc Dashboard</span>
        </div>
      </a>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :card-bg="customClass" />
  </aside>
</template>
<script>
import SidenavList from "./SidenavList.vue";
import logo from "@/assets/img/logo-ct.png";

export default {
  name: "IndexComponent",
  components: {
    SidenavList,
  },
  props: {
    customClass: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      logo,
      sidenavActiveBgColors: 'success'
    };
  },
};
</script>
