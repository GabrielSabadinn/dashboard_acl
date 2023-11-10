<template>
  <div class="py-4 container-fluid">
    <router-link to="/CadastrarCurso">
      <button
        type="submit"
        class="btn btn-primary"
        style="
          background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
          width: 200px;
          margin-bottom: 20px;
        "
      >
        Adicionar Curso
      </button>
    </router-link>
    <div class="row">
      <div class="col-12">
        <AuthorsTable />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <ProjectsTable />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <CursosFechar />
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <CursosHistorico />
      </div>
    </div>
  </div>
</template>

<script>
import AuthorsTable from "./components/AuthorsTable.vue";
import ProjectsTable from "./components/ProjectsTable.vue";
import CursosFechar from "./components/CursosFechar.vue";
import CursosHistorico from "./components/CursosHistorico.vue";
export default {
  name: "TablesPage",
  components: {
    AuthorsTable,
    ProjectsTable,
    CursosHistorico,
    CursosFechar,
  },
};
</script>
