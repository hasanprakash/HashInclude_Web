<template>
  <div class="limiter">
    <div class="container-login100" style="margin-top: 95px">
      <div class="wrap-login100" style="height: 1240px">
        <form
          action=""
          method="POST"
          name="form"
          id="reg"
          onsubmit="return false;"
          style="height: 1085px"
        >
          <span class="login100-form-title p-b-34 p-t-27"> Register </span>
          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <div class="input100">
              <div class="username">
                  <input type="text" placeholder="Enter First Name" />
              </div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <div class="input100">
              <div class="username">
                  <input type="text" placeholder="Enter Last Name" />
              </div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>
          <p style="color: #fff; text-align: center">
            * Provide your Personal Gmail Id for Registration
          </p>
          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <div class="input100">
              <div class="username">Yur Email</div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>
          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <div class="input100">
              <div class="username">You rUSr Name</div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <div class="input100">
              <div class="username">Yur Clg</div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
            id="register_clg"
          >
            <div class="input100">
              <div class="username">Yur Colg Nme</div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <div class="input100">
              <div class="username">Yur Brmanh</div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <div class="input100">
              <div class="username">Your Yr off Study</div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <div class="input100">
              <div class="username">Yur Phine</div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter username"
          >
            <div class="input100">
              <div class="username">Yor Gnder</div>
            </div>
            <span class="focus-input100" data-placeholder="&#xf207;"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <div class="input100">
              You re Psword
            </div>
            <span class="focus-input100" data-placeholder="&#xf191;"></span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Enter password"
          >
            <div class="input100">
              Confirm Ps word 
            </div>
            <span class="focus-input100" data-placeholder="&#xf191;"></span>
          </div>

          <div class="container-login100-form-btn" id="send_otp_btn">
            <button
              class="login100-form-btn"
              id="send_otp"
              type="submit"
              value="Send OTP"
            >
              Send OTP
            </button>
          </div>

          <div class="text-center p-t-90" style="margin-bottom: -60px">
            Already have an account ?
            <a class="txt1" href="/password_reset/" style="font-size: 16px">
              Login Here</a
            >
          </div>
        </form>
      </div>
    </div>
    <div id="a">
      <div
        class="container-login100"
        style="min-height: 27vh; margin-bottom: 50px; margin-top: -13px"
      >
        <div class="wrap-login100" style="height: 280px">
          <form action="" id="getotp" method="post" onsubmit="return false;">
            {% csrf_token %}
            <div
              class="wrap-input100 validate-input"
              data-validate="Enter username"
            >
              <div class="input100">
                <div class="username">Send Otp</div>
              </div>
              <span class="focus-input100" data-placeholder="&#xf207;"></span>
            </div>
            <p style="color: #fff; text-align: center">
              * Please Check Your Spam Folder of Your Registered Mail Id
            </p>
            <div class="container-login100-form-btn">
              <button
                class="login100-form-btn"
                id="register"
                type="submit"
                value="Register"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
input {
	outline: none;
	border: none;
}

textarea {
  outline: none;
  border: none;
}

textarea:focus, input:focus {
  border-color: transparent !important;
}

input:focus::-webkit-input-placeholder { color:transparent; }
input:focus:-moz-placeholder { color:transparent; }
input:focus::-moz-placeholder { color:transparent; }
input:focus:-ms-input-placeholder { color:transparent; }

textarea:focus::-webkit-input-placeholder { color:transparent; }
textarea:focus:-moz-placeholder { color:transparent; }
textarea:focus::-moz-placeholder { color:transparent; }
textarea:focus:-ms-input-placeholder { color:transparent; }

input::-webkit-input-placeholder { color: #fff;}
input:-moz-placeholder { color: #fff;}
input::-moz-placeholder { color: #fff;}
input:-ms-input-placeholder { color: #fff;}

textarea::-webkit-input-placeholder { color: #fff;}
textarea:-moz-placeholder { color: #fff;}
textarea::-moz-placeholder { color: #fff;}
textarea:-ms-input-placeholder { color: #fff;}

label {
  margin: 0;
  display: block;
}
</style>
