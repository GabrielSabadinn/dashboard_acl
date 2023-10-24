<template>
  <div>
    <CourseDetails
      v-if="selectedCourseId"
      :selectedCourse="courseEADs.find((course) => course.id === selectedCourseId)"
    />

    <div v-else class="card mb-4">
      <div class="card-header pb-0">
        <h6>Aulas EAD</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center justify-content-center mb-0">
            <thead>
              <tr>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Curso
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Data/Hora
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="courseEAD in courseEADs" :key="courseEAD.id">
                <div style="padding-left: 1rem">
                  <td>
                    <span class="text-xs font-weight-bold">{{ courseEAD.name }}</span>
                    <br />
                    <small class="text-xs">Local:{{ courseEAD.local }}</small>
                  </td>
                </div>
                <td>
                  <div class="d-flex px-2">
                    <div class="my-auto">
                      <h6 class="mb-0 text-sm">{{ courseEAD.date }}</h6>
                      <small class="text-xs">{{ courseEAD.time }}</small>
                    </div>
                  </div>
                </td>
                <td class="align-middle">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="selectCourse(courseEAD.id)"
                    style="
                      background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
                    "
                  >
                    Selecionar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseDetails from "../components/CourseDetails.vue";

export default {
  name: "CursosEAD",
  components: {
    CourseDetails,
  },
  data() {
    return {
      selectedCourseId: null,
      courseEADs: [
        {
          id: 1,
          date: "11/10/2023",
          time: "06:41:03",
          local: "Porto Alegre/RS",
          name: " [RS-06378] - Formação de Analista de Departamento Pessoal",
        },
        {
          id: 2,
          date: "09/12/2023",
          time: "06:41:03",
          local: "Porto Alegre/RS",
          name:
            "[RS-06405] - Atividade Rural – Atualizações Para 2023 – Opção Pela Contribuição Previdenciária",
        },
      ],
    };
  },
  methods: {
    selectCourse(courseId) {
      this.selectedCourseId = courseId;
    },
  },
};
</script>

<style scoped>
/* Seus estilos, como estavam anteriormente */
</style>
