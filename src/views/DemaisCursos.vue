<template>
  <div>
    <div class="card mb-4">
      <div style="padding: 20px">
        <div class="card-header pb-0">
          <h6>Demais Informações</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
          <form>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Data de Início</label
              >
              <input
                type="date"
                v-model="form.dataInicio"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Data Término</label
              >
              <input
                type="date"
                v-model="form.dataTermino"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Carga Horária</label
              >
              <input
                type="number"
                v-model="form.cargaHoraria"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Modalidade</label
              >
              <select class="form-control">
                <option value="">Selecionar Categoria</option>
                <option value="Presencial">Presencial</option>
                <option value="Semiextensivo">Semiextensivo</option>
                <option value="extensaoUniversitario">Extensão Universitária</option>
                <option value="inCompany">In Company</option>
                <option value="EAD">EAD</option>
                <option value="Webinar">Webinar</option>
              </select>
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Palestrante</label
              >
              <input
                type="text"
                v-model="form.palestrante"
                class="form-control"
                required
              />
            </div>

            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Horas</label
              >
              <input
                type="text"
                v-model="form.palestrante"
                class="form-control"
                required
              />
            </div>

            <div class="mb-3 text-center">
              <router-link to="/CadastrarCurso">
                <button
                  type="submit"
                  class="btn btn-primary"
                  style="
                    background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
                    margin-right: 12px;
                  "
                >
                  Voltar
                </button></router-link
              >
              <router-link to="/informacoesComplementares"> <button
                type="submit"
                class="btn btn-primary"
                style="
                  background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
                "
              >
                Próximo
              </button></router-link>
            </div>
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
        dataInicio: "",
        dataTermino: "",
        cargaHoraria: "",
        partnershipName: "",
        palestrante: "",
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
