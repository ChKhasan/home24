<script>
import { required, minLength, between } from "vuelidate/lib/validators";

/**
 * Form Validation component
 */
export default {
  head() {
    return {
      title: `${this.title} | Minton - Nuxtjs Responsive Admin Dashboard Template`,
    };
  },
  data() {
    return {
      name: "",
      age: 0,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    age: {
      between: between(20, 30),
    },
  },
};
</script>

<template>
  <!-- <div class="container">
  <div class="row">
    <div class="col">
    
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input class="form__input" v-model.trim="$v.name.$model" />
    </div>
    <div class="error" v-if="!$v.name.required">Field is required</div>
    <div class="error" v-if="!$v.name.minLength">
      Name must have at least {{ $v.name.$params.minLength.min }} letters.
    </div>
    <tree-view
      :data="$v.name"
      :options="{ rootObjectKey: '$v.name', maxDepth: 2 }"
    ></tree-view>
    <div class="form-group" :class="{ 'form-group--error': $v.age.$error }">
      <label class="form__label">Age</label>
      <input class="form__input" v-model.trim.lazy="$v.age.$model" />
    </div>
    <div class="error" v-if="!$v.age.between">
      Must be between {{ $v.age.$params.between.min }} and
      {{ $v.age.$params.between.max }}
    </div>
    <span tabindex="0">Blur to see changes</span>
    <tree-view
      :data="$v.age"
      :options="{ rootObjectKey: '$v.age', maxDepth: 2 }"
    ></tree-view>
    </div>
  </div>
  </div> -->
</template>
<style>
.form-group--error + .form-group__message,
.form-group--error + .error {
  display: block;
  color: #f57f6c;
}
.form-group--error + .form-group__message,
.form-group--error + .error {
  display: block;
  color: #f57f6c;
}

.form-group--error input,
.form-group--error textarea,
.form-group--error input:focus,
.form-group--error input:hover {
  border-color: #f79483;
}
.form__input,
.form__textarea {
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  color: #374853;
  line-height: 2.375rem;
  min-height: 2.375rem;
  position: relative;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background: #fff;
  padding: 0 0.8125rem;
  width: 100%;
  transition: border 0.1s ease;
  box-sizing: border-box;
}
.errorInput {
  border: 1px solid #f79483 !important;
}
.form-group--error .form__label,
.form-group--error .form__label--inline {
  color: #f04124;
}
input:focus {
  outline: none;
}
.form-group--error input,
.form-group--error textarea,
.form-group--error input:focus,
.form-group--error input:hover {
  border-color: #f79483;
}
</style>
