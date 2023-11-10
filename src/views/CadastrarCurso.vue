<template>
  <div>
    <div class="card mb-4">
      <div style="padding: 20px">
        <div class="card-header pb-0">
          <h6>Cadastrar Novo Curso</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
          <form>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Nome Do Curso</label
              >
              <input type="text" v-model="form.user" class="form-control" required />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Objetivo</label
              >
              <input type="text" v-model="form.objetivo" class="form-control" required />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Público Alvo</label
              >
              <input
                type="text"
                v-model="form.publicoAlvo"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Categoria</label
              >
              <select class="form-control">
                <option value="">Selecionar Categoria</option>
                <option value="fiscal">Fiscal</option>
                <option value="trabalhista">Trabalhista</option>
                <option value="federal">Federal</option>
                <option value="outros">Outros</option>
                <option value="palestras">Palestras CRC/RS</option>
              </select>
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Responsável pelo Curso</label
              >
              <input
                type="text"
                v-model="form.responsavel"
                class="form-control"
                required
              />
            </div>

            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Parceria</label
              >
              <select class="form-control">
                <option value="">Selecionar Parceria</option>
              </select>
            </div>
            <router-link to="/DemaisCursos">
              <div class="mb-3 text-center">
             
                <button
                  type="submit"
                  class="btn btn-primary"
                  style="
                    background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
                  "
                >
                  Próximo
                </button>
              </div></router-link
            >
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLabel: false,
      form: {
        courseHistory: "",
        objetivo: "",
        publicoAlvo: "",
        partnershipName: "",
        responsavel: "",
        uf: "",
        city: "",
      },
    };
  },
};
</script>
<style>
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
