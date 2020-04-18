<template>
  <form @submit="submit" :class="wrapperClass">
    <div v-for="(item, index) in formFields" :key="index">
      <!-- Show if the is no condition or if specified condition is met -->
      <div v-if="!item.condition || (item.condition && item.condition.value === formData[item.condition.key])">
        <label v-if="item.type !== 'helperText' && item.type !== 'checkbox'">{{ item.label }}</label>

        <p :class="item.class" v-if="item.type === `helperText`">
          <b>{{ item.label }}</b>
          <br />
          {{ item.description }}
        </p>

        <input
          :class="item.class"
          :type="item.type"
          v-model="formData[item.key]"
          v-if="item.type !== 'select' && item.type !== 'helperText' && item.type !== 'checkbox' && item.type !== 'textarea'"
          :name="item.key"
          @change="item.type === 'file' ? fileUpload : null"
          v-validate="item.validation"
        />

        <ion-item class="checkbox" v-if="item.type === 'checkbox'">
          <p>{{ item.label }}</p>
          <ion-checkbox
            slot="start"
            @input="formData[item.key] = $event.target.value"
            :checked="formData[item.key]"
            :value="formData[item.key]">
          </ion-checkbox>
        </ion-item>

        <select
          v-if="item.type === 'select'"
          v-model="formData[item.key]"
          :class="item.class"
          :name="item.key"
          v-validate="item.validation"
        >
          <option
            v-for="(item, index) in item.options"
            :key="index"
            :value="item.label"
            >{{ item.label }}
            </option>
        </select>

        <textarea
          v-model="formData[item.key]"
          :rows="item.rows"
          :cols="item.cols"
          :class="item.class"
          v-if="item.type === 'textarea'"
        />

        <div class="form-error" v-if="errors.first(item.key)">{{ errors.first(item.key) }}</div>
      </div>
    </div>

    <ion-button expand="block" type="submit">{{ btnText }}</ion-button>
  </form>
</template>

<script>
// import { formFieldsList } from "./form";
export default {
  name: "ionic-vue-form",
  props: {
    formFields: {
      type: Array,
      required: true
    },
    data: {
      type: Object
    },
    btnText: {
      type: String,
      default: "Continue"
    },
    wrapperClass: {
      type: String,
    },
    groupAddress: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formData: this.data ? this.data : {},
      // formFields: this.form
      // formFields: formFieldsList(this.form)
    };
  },
  methods: {
    fileUpload(item) {
      this.$emit("fileUpload", item);
    },
    submit(e) {
      e.preventDefault();

      this.$validator.validateAll().then(res => {
        if (res) {
          this.$emit("submit", this.formData);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
ion-item.checkbox {
  --background: none;
  margin: 10px;
}

ion-button {
  margin-top: 10px;
  --border-radius: 20px;
}

ion-textarea {
  --background: #fff;
}

.form-error {
  // font-size: 13px;
  color: #fff;
  background: red;
  padding: 11px;
  border-radius: 10px;
}

.helperText {
  font-size: 13px;
  text-align: left;
  margin-top: 20px;
}

.validation-massage {
  color: red;
  font-size: 12px;
  margin-left: 5px;
}

.validation-massage:last-child {
  margin-bottom: 10px;
}

.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
.custom-file-input::before {
  content: "Locate File";
  display: inline-block;
  background: #ecedf0;
  border: 1px dashed #999;
  border-radius: 3px;
  padding: 9px 10px;
  margin-left: -10px;
  outline: none;
  width: 99%;
  white-space: nowrap;
  -webkit-user-select: none !important;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}
.custom-file-input:hover::before {
  border-color: black;
}
.custom-file-input:active::before {
  background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);
}
</style>
