<template>
  <div class="m-0">
    <div class="row">
      <div class="col-lg-4">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Account Details</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item p-3">
              <div class="row">
                <div class="col">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feFirstName">First Name</label>
                        <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"> </div>
                      <div class="form-group col-md-6">
                        <label for="feLastName">Last Name</label>
                        <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Email</label>
                        <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"> </div>
                      <div class="form-group col-md-6">
                        <label for="fePassword">Password</label>
                        <input type="password" class="form-control" id="fePassword" placeholder="Password"> </div>
                    </div>
                    <div class="form-group">
                      <label for="feInputAddress">Address</label>
                      <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"> </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feInputCity">City</label>
                        <input type="text" class="form-control" id="feInputCity"> </div>
                      <div class="form-group col-md-4">
                        <label for="feInputState">State</label>
                        <select id="feInputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="feDescription">Description</label>
                        <textarea class="form-control" name="feDescription" rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</textarea>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-accent">Update Account</button>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="card card-small mb-4">
          <div class="card-header border-bottom">
            <h6 class="m-0">Account Details</h6>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item p-3">
              <div class="row">
                <div class="col">
                  <form>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feFirstName">First Name</label>
                        <input type="text" class="form-control" id="feFirstName" placeholder="First Name" value="Sierra"> </div>
                      <div class="form-group col-md-6">
                        <label for="feLastName">Last Name</label>
                        <input type="text" class="form-control" id="feLastName" placeholder="Last Name" value="Brooks"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feEmailAddress">Email</label>
                        <input type="email" class="form-control" id="feEmailAddress" placeholder="Email" value="sierra@example.com"> </div>
                      <div class="form-group col-md-6">
                        <label for="fePassword">Password</label>
                        <input type="password" class="form-control" id="fePassword" placeholder="Password"> </div>
                    </div>
                    <div class="form-group">
                      <label for="feInputAddress">Address</label>
                      <input type="text" class="form-control" id="feInputAddress" placeholder="1234 Main St"> </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="feInputCity">City</label>
                        <input type="text" class="form-control" id="feInputCity"> </div>
                      <div class="form-group col-md-4">
                        <label for="feInputState">State</label>
                        <select id="feInputState" class="form-control">
                          <option selected>Choose...</option>
                          <option>...</option>
                        </select>
                      </div>
                      <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip"> </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="feDescription">Description</label>
                        <textarea class="form-control" name="feDescription" rows="5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?</textarea>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-accent">Update Account</button>
                  </form>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
