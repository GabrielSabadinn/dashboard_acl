<template>
  <footer class="py-3 footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="mb-4 col-lg-6 mb-lg-0">
          <div
            class="text-sm text-center copyright text-muted"
            :class="$store.state.isRTL ? 'text-lg-end' : 'text-lg-start'"
          >
            ©
            {{ new Date().getFullYear() }}, Copyright LEFISC
            <i class="fa fa-heart"></i> by
            <a
              href="https://portal.al.go.leg.br/noticias/129441/combate-ao-trabalho-escravo#:~:text=Al%C3%A9m%20disso%2C%20conforme%20o%20Conatetrap,condi%C3%A7%C3%B5es%20an%C3%A1logas%20%C3%A0s%20de%20escravo."
              class="font-weight-bold"
              target="_blank"
              >SOS DEVS</a
            >
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>
