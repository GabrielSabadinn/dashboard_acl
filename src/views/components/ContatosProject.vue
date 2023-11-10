<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Cursos</h6>
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
                Contato
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Curso
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
              >
                Responsável
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="course in courses" :key="course.id">
              <td>
                <div class="d-flex px-2">
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ course.date }}</h6>
                    <small class="text-xs">{{ course.time }}</small>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ course.contact }}</p>
                <small class="text-xs">{{ course.numero }}</small>
                <br />
                <small class="text-xs">{{ course.mensagens }}</small>
              </td>
              <td>
                <span class="text-xs font-weight-bold">{{ course.name }}</span>
                <br />
                <small class="text-xs">Local:{{ course.local }}</small>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold">{{
                    course.responsible
                  }}</span>
                </div>
              </td>
              <td class="align-middle">
                <div class="dropdown-menu-container">
                  <button class="btn btn-link text-secondary mb-0" @click="toggleLabel">
                    <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                  </button>
                  <div class="dropdown-menu-content" v-if="showLabel">
                    <a href="#" @click.prevent="markAsUnread">Marcar como não lido</a>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VsudProgress from "@/components/VsudProgress.vue";

export default {
  name: "ProjectsTable",
  components: {
    VsudProgress,
  },
  data() {
    return {
      showLabel: false,
      courses: [
        {
          id: 1,
          date: "11/10/2023",
          time: "06:41:03",
          numero: "(35) 33633682",
          mensagens: "tenho interesse",
          contact: "Airton Carvalho",
          local: "Porto Alegre/RS",
          name:
            "tenho interesse 3ª TURMA - EFD-REINF Série R-4000 -últimas alterações Tirar Dúvidas",
          responsible: "Nome do Responsável",
        },
        {
          id: 2,
          date: "11/10/2023",
          time: "06:41:03",
          numero: "(35) 33633682",
          mensagens: "tenho interesse",
          contact: "Airton Carvalho",
          local: "Porto Alegre/RS",
          name:
            "tenho interesse 3ª TURMA - EFD-REINF Série R-4000 -últimas alterações Tirar Dúvidas",
          responsible: "Nome do Responsável",
        },
      ],
    };
  },
  methods: {
    toggleLabel() {
      this.showLabel = !this.showLabel;
    },
    markAsUnread() {
      alert("Marcado como não lido!");
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
