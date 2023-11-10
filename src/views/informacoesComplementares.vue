<template>
  <div>
    <div class="card mb-4">
      <div style="padding: 20px">
        <div class="card-header pb-0">
          <h6>Informações Complementares</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
          <form>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >CEP</label
              >
              <input
                maxlength="9"
                type="text"
                v-model="form.cep"
                class="form-control"
                @blur="handleCepInput"
                required
              />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >UF</label
              >
              <input type="text" v-model="form.uf" class="form-control" readonly />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Cidade</label
              >
              <input type="text" v-model="form.city" class="form-control" readonly />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Endereço</label
              >
              <input type="text" v-model="form.endereco" class="form-control" readonly />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Valor</label
              >
              <input v-money="money" v-model="form.valor" class="form-control" required />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Nº Máximo de Participantes</label
              >
              <input type="number" v-model="form.nmaximo" class="form-control" required />
            </div>
            <div class="mb-3 text-center">
              <button
                type="submit"
                class="btn btn-primary"
                style="
                  background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
                "
                @click="submitForm"
              >
                Próximo
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VMoney } from "v-money";
export default {
  directives: { Money: VMoney },
  data() {
    return {
      valor: 0,
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        precision: 2,
        masked: false,
      },
      showLabel: false,
      form: {
        nmaximo: "",
        valor: "",
        email: "",
        partnershipName: "",
        cep: "",
        uf: "",
        city: "",
        endereco: "",
      },
    };
  },
  methods: {
    handleCepInput() {
      this.formatCep();
      console.log(this.form.cep.length);
      if (this.form.cep.length >= 8) {
        this.fetchCepData();
      }
    },
    formatCep() {
      let value = this.form.cep;
      value = value.replace(/\D/g, "");
      value = value.replace(/^(\d{5})(\d)/, "$1-$2");

      if (value.length > 9) {
        value = value.slice(0, 9);
      }

      this.form.cep = value;
    },
    async fetchCepData() {
      if (this.form.cep && this.form.cep.length >= 8) {
        try {
          const response = await fetch(`https://viacep.com.br/ws/${this.form.cep}/json/`);
          const data = await response.json();

          if (data.erro) {
            console.error("CEP não encontrado.");
            return;
          }

          this.form.uf = data.uf;
          this.form.city = data.localidade;
          this.form.endereco = data.logradouro;
        } catch (error) {
          console.error("Erro ao buscar dados do CEP.", error);
        }
      }
    },
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
