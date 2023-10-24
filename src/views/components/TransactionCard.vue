<template>
  <div class="card h-100 mb-4">
    <div class="card-header pb-0 px-3">
      <div class="row">
        <div class="col-md-6">
          <h6 class="mb-0">Transações</h6>
        </div>
        <div class="col-md-6 d-flex justify-content-end align-items-center">
          <i class="far fa-calendar-alt me-2" aria-hidden="true"></i>
          <small>23 - 30 Março 2023</small>
        </div>
      </div>
    </div>
    <div class="card-body pt-4 p-3">
      <h6 class="text-uppercase text-body text-xs font-weight-bolder mb-3">Novos</h6>
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="danger"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-down" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Compras De Material</h6>
              <span class="text-xs">27 Março 2023, as 12:30</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-danger text-gradient text-sm font-weight-bold"
          >
            - $ 2,500
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Compra De Curso</h6>
              <span class="text-xs">27 Março 2023, as 12:30</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 2,000
          </div>
        </li>
      </ul>
      <h6 class="text-uppercase text-body text-xs font-weight-bolder my-3">Ontem</h6>
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Compra De Curso</h6>
              <span class="text-xs">26 Março 2023, as 13:45 </span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 750
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Compra De Curso</h6>
              <span class="text-xs">26 Março 2023, as 12:30 </span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 1,000
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="success"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-arrow-up" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Compra De Curso</h6>
              <span class="text-xs">26 March 2020, as 08:30</span>
            </div>
          </div>
          <div
            class="d-flex align-items-center text-success text-gradient text-sm font-weight-bold"
          >
            + $ 2,500
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex align-items-center">
            <vsud-button
              color="dark"
              variant="outline"
              size="sm"
              class="btn-icon-only btn-rounded mb-0 me-3 d-flex align-items-center justify-content-center"
            >
              <i class="fas fa-exclamation" aria-hidden="true"></i>
            </vsud-button>
            <div class="d-flex flex-column">
              <h6 class="mb-1 text-dark text-sm">Compra de Material</h6>
              <span class="text-xs">26 Março 2023, at 05:00</span>
            </div>
          </div>
          <div class="d-flex align-items-center text-dark text-sm font-weight-bold">
            Pendente
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VsudButton from "@/components/VsudButton.vue";

export default {
  name: "TransactionCard",
  components: {
    VsudButton,
  },
};
</script>
