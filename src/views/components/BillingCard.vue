<template>
  <div class="card">
    <div class="card-header pb-0 px-3">
      <h6 class="mb-0">Últimas Compras de Curso</h6>
    </div>
    <div class="card-body pt-4 p-3">
      <ul class="list-group">
        <li
          v-for="student in students"
          :key="student.name"
          class="list-group-item border-0 d-flex p-4 mb-2 mt-3 bg-gray-100 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="mb-3 text-sm">{{ student.name }}</h6>
            <span class="mb-2 text-xs">
              Nome do curso:
              <span class="text-dark font-weight-bold ms-sm-2">{{
                student.course.nome
              }}</span>
            </span>
            <span class="mb-2 text-xs">
              Email:
              <span class="text-dark ms-sm-2 font-weight-bold">{{ student.email }}</span>
            </span>
            <span class="text-xs">
              Número de transação:
              <span class="text-dark ms-sm-2 font-weight-bold">{{
                student.transactionNumber
              }}</span>
            </span>
          </div>
          <div class="ms-auto text-end">
            <a
              class="btn btn-link text-danger text-gradient px-3 mb-0"
              href="javascript:;"
            >
              <i class="far fa-trash-alt me-2" aria-hidden="true"></i>Delete
            </a>
            <a class="btn btn-link text-dark px-3 mb-0" href="javascript:;">
              <i class="fas fa-pencil-alt text-dark me-2" aria-hidden="true"></i>Info
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BillingCard",
  data() {
    return {
      students: [
        {
          name: "Oliver Liam",
          email: "oliver@burrito.com",
          transactionNumber: "FRB1235476",
          course: {
            nome: "Curso Teste [Geral]",
          },
        },
        {
          name: "Lucas Harper",
          email: "lucas@stone-tech.com",
          transactionNumber: "FRB1235476",
          course: {
            nome: "Curso Teste [Trabalhista]",
          },
        },
        {
          name: "Ethan James",
          email: "ethan@fiber.com",
          transactionNumber: "FRB1235476",
          course: {
            nome: "Curso Teste [FEDERAL]",
          },
        },
      ],
    };
  },
};
</script>
