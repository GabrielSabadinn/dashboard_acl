<template>
  <div>
    <div class="card mb-4">
      <div style="padding: 20px">
        <div class="card-header pb-0">
          <h6>Numeração Ano</h6>

          <div class="mb-3">
            <label
              class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Modalidade</label
            >
            <select class="form-control">
              <option value="">Selecionar Ano</option>
              <option value="">2023</option>
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017</option>
              <option value="">2016</option>
              <option value="">2015</option>
            </select>
          </div>
          <div class="mb-3 text-center">
            <button
              type="submit"
              class="btn btn-primary"
              style="background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%)"
            >
              Buscar
            </button>
          </div>
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
