<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Подробно о пользователе</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" v-if="$store.getters.selectedUser !== null">
          <table class="table mb-0">
            <tbody>
              <tr>
                <th class="table-dark" colspan="2">Общее:</th>
              </tr>
              <tr>
                <th>Имя</th>
                <td>{{userInfo.name}}</td>
              </tr>
              <tr>
                <th>Ник</th>
                <td>{{userInfo.username}}</td>
              </tr>
              <tr>
                <th>Почта</th>
                <td>{{userInfo.email}}</td>
              </tr>
              <tr>
                <th class="table-dark" colspan="2">Адрес:</th>
              </tr>
              <tr>
                <th>Город</th>
                <td>{{userInfo.address.city}}</td>
              </tr>
              <tr>
                <th>Улица</th>
                <td>{{userInfo.address.street}}</td>
              </tr>
              <tr>
                <th>Suite</th>
                <td>{{userInfo.address.suite}}</td>
              </tr>
              <tr>
                <th>Zipcode</th>
                <td>{{userInfo.address.zipcode}}</td>
              </tr>
            </tbody>
          </table>
            
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      //
    };
  },
  computed: {
    userInfo() {                    
     return this.$store.getters.selectedUser;
    }
  }
};
</script>

<style></style>
