<template>
  <div>
    <div class="card mb-4">
      <div style="padding: 20px">
        <div class="card-header pb-0">
          <h6>Inserir Nova Parceria</h6>
        </div>
        <div class="card-body px-0 pt-0 pb-2">
          <form>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Usuário</label
              >
              <input type="text" v-model="form.user" class="form-control" required />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Senha</label
              >
              <input
                type="password"
                v-model="form.password"
                class="form-control"
                required
              />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Email</label
              >
              <input type="email" v-model="form.email" class="form-control" required />
            </div>
            <div class="mb-3">
              <label
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >Nome da Parceria</label
              >
              <input
                type="text"
                v-model="form.partnershipName"
                class="form-control"
                required
              />
            </div>
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

            <div class="mb-3 text-center">
              <button
                type="submit"
                class="btn btn-primary"
                style="
                  background-image: linear-gradient(310deg, #17ad37 0%, #98ec2d 100%);
                "
                @click="submitForm"
              >
                Finalizar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="card mb-4">
      <div class="card-header pb-0">
        <h6>Parceiros</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center justify-content-center mb-0">
            <thead>
              <tr>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                >
                  Usuário
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >
                  Senha
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                >
                  Nome da Parceira
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
                >
                  Email
                </th>
                <th
                  class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
                >
                  Cidade
                </th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="partner in partners" :key="partner.id">
                <td>
                  <div class="d-flex px-2">
                    <div class="my-auto">
                      <h6 class="mb-0 text-sm">{{ partner.usuario }}</h6>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="text-sm font-weight-bold mb-0">{{ partner.password }}</p>

                  <br />
                </td>
                <td>
                  <span class="text-xs font-weight-bold">{{ partner.name }}</span>
                  <br />
                </td>
                <td class="align-middle text-center">
                  <div class="d-flex align-items-center justify-content-center">
                    <span class="me-2 text-xs font-weight-bold">{{ partner.email }}</span>
                  </div>
                </td>
                <td>
                  <span class="text-xs font-weight-bold">{{ partner.cidade }}</span>
                  <br />
                </td>
                <td class="align-middle">
                  <div class="dropdown-menu-container">
                    <button
                      class="btn btn-link text-secondary mb-0"
                      @click="toggleLabel(partner.id)"
                    >
                      <i class="fa fa-ellipsis-v text-xs" aria-hidden="true"></i>
                    </button>
                    <div class="dropdown-menu-content" v-if="showLabel === partner.id">
                      <a href="#" @click.prevent="markAsUnread">Editar Parceira</a>
                    </div>
                  </div>
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
export default {
  data() {
    return {
      showLabel: false,
      form: {
        user: "",
        password: "",
        email: "",
        partnershipName: "",
        cep: "",
        uf: "",
        city: "",
      },
      partners: [
        {
          id: 1,
          usuario: "Gabriel Sabadin",
          password: "******",
          name: "EDITORA DE PUBLICAÇÕES LTDA",
          email: "gabrielsabadin@gmail.com",
          cidade: "Porto Alegre",
        },
        {
          id: 2,
          usuario: "Gabriel Sabadin",
          password: "******",
          name: "EDITORA DE PUBLICAÇÕES LTDA",
          email: "gabrielsabadin@gmail.com",
          cidade: "Porto Alegre",
        },
      ],
    };
  },
  methods: {
    toggleLabel(partnerId) {
      this.showLabel = this.showLabel === partnerId ? null : partnerId;
    },
    markAsUnread() {
      alert("Marcado como não lido!");
    },

    submitForm() {
      console.log(this.form);
    },

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
