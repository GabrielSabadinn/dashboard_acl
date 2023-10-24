<template>
  <div class="card h-100 mt-4">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Extrato Mensal</h6>
        </div>
        <div class="col-6 text-end">
          <vsud-button color="success" size="sm" variant="outline">Ver Todos</vsud-button>
        </div>
      </div>
    </div>
    <div class="card-body p-3 pb-0 mb-0">
      <ul class="list-group">
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="mb-1 text-dark font-weight-bold text-sm">Março, 01, 2023</h6>
            <span class="text-xs">#MS-415646</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $22.891
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i> PDF
            </button>
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">Fevereiro, 10, 2023</h6>
            <span class="text-xs">#RV-126749</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $25.086
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i> PDF
            </button>
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">Abril, 05, 2023</h6>
            <span class="text-xs">#FB-212562</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $56.546
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i> PDF
            </button>
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">Junho, 25, 2023</h6>
            <span class="text-xs">#QW-103578</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $12.000
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i> PDF
            </button>
          </div>
        </li>
        <li
          class="list-group-item border-0 d-flex justify-content-between ps-0 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">Março, 01, 2023</h6>
            <span class="text-xs">#AR-803481</span>
          </div>
          <div class="d-flex align-items-center text-sm">
            $30.000
            <button class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i> PDF
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import VsudButton from "@/components/VsudButton.vue";

export default {
  name: "InvoiceCard",
  components: {
    VsudButton,
  },
};
</script>
