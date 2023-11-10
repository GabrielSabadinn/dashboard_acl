<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Cursos Histórico</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Data/Hora
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Tempo de Curso
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Curso
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
              >
                cod
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="courseHistory in courseHistorys" :key="courseHistory.id">
              <td>
                <div class="d-flex px-2">
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ courseHistory.date }}</h6>
                    <small class="text-xs">{{ courseHistory.time }}</small>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">
                  {{ courseHistory.tempodecurso }}
                </p>
                <small class="text-xs">{{ courseHistory.status }}</small>
                <br />
                <small class="text-xs">{{ courseHistory.mensagens }}</small>
              </td>
              <td>
                <span class="text-xs font-weight-bold">{{ courseHistory.name }}</span>
                <br />
                <small class="text-xs">Local:{{ courseHistory.local }}</small>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">{{
                    courseHistory.cod
                  }}</span>
                </div>
              </td>
              <td class="align-middle">
                <div class="dropdown-menu-container">
                  <button
                    class="btn btn-link text-secondary mb-0"
                    @click="toggleLabel(courseHistory.id)"
                  >
                    <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                  </button>
                  <div
                    class="dropdown-menu-content"
                    v-show="dropdownStates[courseHistory.id]"
                  >
                    <a href="#" @click.prevent="showConfirmationModal">Clonar Curso</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div
      class="modal fade"
      id="confirmationModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" style="">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Confirmação</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">Você tem certeza que deseja clonar?</div>
          <div
            class=""
            style="
              font-weight: 600;
              font-size: 11px;
              padding-left: 1rem;
              padding-bottom: 1rem;
            "
          >
            Levaremos você a pagina de edição para que todos dados sejam revisados antes
            da postagem.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Não
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="confirmClone"
              style="background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)"
            >
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VsudProgress from "@/components/VsudProgress.vue";
import { Modal } from "bootstrap";

export default {
  name: "ProjectsTable",
  components: {
    VsudProgress,
  },
  data() {
    const courseHistorys = [
      {
        id: 1,
        date: "11/10/2023",
        time: "06:41:03",
        status: "Onine",
        tempodecurso: "60h",
        local: "Porto Alegre/RS",
        name:
          "tenho interesse 3ª TURMA - EFD-REINF Série R-4000 -últimas alterações Tirar Dúvidas",
        cod: "#4864",
      },
      {
        id: 2,
        date: "09/12/2023",
        time: "06:41:03",
        status: "EAD",
        tempodecurso: "40h",
        local: "Porto Alegre/RS",
        name:
          "tenho interesse 3ª TURMA - EFD-REINF Série R-4000 -últimas alterações Tirar Dúvidas",
        cod: "#26256",
      },
    ];

    let initialDropdownStates = {};
    courseHistorys.forEach((course) => {
      initialDropdownStates[course.id] = false;
    });

    return {
      dropdownStates: initialDropdownStates,
      showLabel: false,
      courseHistorys: courseHistorys,
    };
  },
  methods: {
    toggleLabel(courseHistoryId) {
      this.dropdownStates[courseHistoryId] = !this.dropdownStates[courseHistoryId];
    },
    confirmClone() {
      // Aqui vai o código para clonar o curso
      // Depois de executar, feche o modal
      var myModal = new bootstrap.Modal(document.getElementById("confirmationModal"));
      myModal.show();
    },
    showConfirmationModal() {
      let modalElement = document.getElementById("confirmationModal");

      if (!modalElement) {
        console.error("Modal element not found!");
        return;
      }

      var myModal = new Modal(modalElement);
      myModal.show();
    },

    markAsUnread() {
      let modalElement = document.getElementById("confirmationModal");
      if (!modalElement) {
        console.error("Modal element not found!");
        return;
      }
      var myModal = new bootstrap.Modal(modalElement);
      myModal.show();
    },
  },
};
</script>

<style scoped>
.dropdown-menu-container {
  position: relative;
  display: inline-block;
}

.dropdown-menu-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  right: 20px;
  top: 28px;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 8px 12px;
  z-index: 1;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;

  justify-content: center;
}

.dropdown-menu-container:hover .dropdown-menu-content {
  display: block;
}
</style>
