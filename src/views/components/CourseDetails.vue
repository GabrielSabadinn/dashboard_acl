<!-- CourseDetails.vue -->
<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Detalhes da Aula EAD</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center justify-content-center mb-0">
          <thead>
            <tr>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Aula
              </th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Ordem
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div style="padding-left: 1rem">
                <td>
                  <span class="text-xs font-weight-bold"
                    >1 - Introdução e Regime Cumulativo e não Cumulativo</span
                  >
                </td>
              </div>
              <td>
                <div class="d-flex px-2">
                  <div class="my-auto">
                    <h6 class="mb-0 text-sm">ㅤ1</h6>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  class="btn btn-warning"
                  @click="showEditModal"
                  style="margin-right: 12px"
                >
                  Alterar
                </button>
                <button type="button" class="btn btn-danger" @click="deleteCourse">
                  Excluir
                </button>

                <button
                  type="submit"
                  class="btn btn-primary"
                  @click="goBack"
                  style="
                    background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
                    width: 100px;
                    margin-left: 12px;
                  "
                >
                  Voltar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="modal fade"
          id="editModal"
          tabindex="-1"
          aria-labelledby="editModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="editModalLabel">Edição de Curso</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <!-- Aqui é a mudança -->
                <div class="mb-3">
                  <label
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >Título da aula</label
                  >
                  <input
                    type="text"
                    v-model="form.tituloAula"
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >Nome do video</label
                  >
                  <input
                    type="text"
                    v-model="form.tituloAula" 
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label
                    class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >Ordem</label
                  >
                  <input
                    type="number"
                    v-model="form.tituloAula"
                    class="form-control"
                    required
                  />
                </div>
              </div>

              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                  Cancelar
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="confirmEdit"
                  style="
                    background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
                  "
                >
                  ALTERAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Modal } from "bootstrap";

export default {
  props: ["selectedCourse"],
  data() {
    return {
      form: { tituloAula: "" },
    };
  },
  methods: {
    showEditModal() {
      let modalElement = document.getElementById("editModal");
      if (!modalElement) {
        console.error("Elemento modal não encontrado!");
        return;
      }
      var myModal = new Modal(modalElement);
      myModal.show();
    },
    confirmEdit() {
      // Aqui, você pode fazer algo com o valor de form.tituloAula, como enviar para um servidor ou outra lógica de sua escolha.
      var myModal = new Modal(document.getElementById("editModal"));
      myModal.hide();
    },

    goBack() {
      this.$emit("goBack");
    },

    editCourse() {},
    deleteCourse() {},
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
