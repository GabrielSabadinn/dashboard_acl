<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Cursos Aberto</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Nome do Curso
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Quantidade de Alunos
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Modalidade
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
              >
                Percentual de conclusão por Aluno
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(curso, index) in cursos" :key="index">
              <td>
                <div class="d-flex px-2">
                  <div>
                    <img
                      :src="curso.imagem"
                      class="avatar avatar-sm rounded-circle me-2"
                      :alt="curso.nome"
                    />
                  </div>
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">{{ curso.nome }}</h6>
                  </div>
                </div>
              </td>
              <td>
                <p class="text-sm font-weight-bold mb-0">{{ curso.alunos }}</p>
              </td>
              <td>
                <span class="text-xs font-weight-bold">{{ curso.modalidade }}</span>
              </td>
              <td class="align-middle text-center">
                <div class="d-flex align-items-center justify-content-center">
                  <span class="me-2 text-xs font-weight-bold"
                    >{{ curso.conclusao }}%</span
                  >
                  <div>
                    <vsud-progress
                      :color="curso.corProgresso"
                      variant="gradient"
                      :percentage="curso.conclusao"
                    />
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <div class="dropdown-menu-container">
                  <button class="btn btn-link text-secondary mb-0" @click="toggleLabel">
                    <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                  </button>
                  <div class="dropdown-menu-content" v-if="showLabel">
                    <a href="#" @click.prevent="markAsUnread">Editar Curso</a>
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
  data() {
    return {
      showLabel: false,
      cursos: [
        {
          nome: "Curso Teste [Geral]",
          alunos: 4,
          modalidade: "Prescencial",
          conclusao: 100,
          corProgresso: "info",
          imagem: "../../assets/img/small-logos/logo-invision.svg",
        },
        {
          nome: "Curso Teste [Fedeal]",
          alunos: 18,
          modalidade: "EAD",
          conclusao: 60,
          corProgresso: "info",
          imagem: "../../assets/img/small-logos/logo-invision.svg",
        },
        {
          nome: "Curso Teste [Trabalhista]",
          alunos: 30,
          modalidade: "Online",
          conclusao: 10,
          corProgresso: "info",
          imagem: "../../assets/img/small-logos/logo-invision.svg",
        },
      ],
    };
  },
  name: "ProjectsTable",
  components: {
    VsudProgress,
  },
  methods: {
    toggleLabel() {
      this.showLabel = !this.showLabel;
    },
    markAsUnread() {
      alert("Clonar Curso!");
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
