# Ionic Vue Form

Render fully customizable dynamic form with form-field conditional logic.

## Install
`npm install ionic-vue-form`

```
// Register globally (optional)
import { IonicVueForm } from "ionic-vue-form"

Vue.component("IonicVueForm",IonicVueForm)


// Register locally (optional)
<script>
  import { IonicVueForm } from 'ionic-vue-form'

  export default {
    components: {
      IonicVueForm
    }
  }
<script>
```

## Basic usage
```
<template>
  <div>
    <IonicVueForm :formFields="form" btnText="Submit" @submit="submit" />
  </div>
</template>

<script>
  import { IonicVueForm } from 'ionic-vue-form'

  export default {
    components: {
      IonicVueForm
    },
    data () {
      return {
        form: [
          {
            key: "email",
            label: "Email"
          },
          {
            key: "password",
            label: "Password
          }
        ]
      }
    },
    methods: {
      submit(data) {
        // Submit logic
        // data - Form input(s)
      }
    }
  }
</script>
```

## Note
In your project's main.js import and use vee-validate

```
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
```

## Auto-fill example

`data` prop takes the data object, binds each key-value pair to the relavent form field

```
<template>
  <div>
    <IonicVueForm :formFields="form" :data="formData" btnText="Submit" @submit="submit" />
  </div>
</template>

<script>
  import { IonicVueForm } from 'ionic-vue-form'

  export default {
    components: { IonicVueForm },
    data () {
      return {
        form: [
          {
            key: "first_name",
            label: "First name"
          },
          {
            key: "last_name",
            label: "Last name
          }
        ],
        formData: {
          first_name: "John",
          last_name: "Doe"
        }
      }
    },
    methods: {
      submit(data) {
        // Submit logic
        // data - Form input(s)
      }
    }
  }
</script>
```

## Props

|Name|Type|Required|Default|Description
|---|---|---|---|---|
|formFields|`Array`|`true`|-|List of fields to render|
|data|`Object`|`false`|-|Form datta (if you need to auto-fill the form)|
|btnText|`String`|`false`|Continue|Submit button text|
|wrapperClass|`String`|`false`|-|Form wrapper class|

## Events

|Event|Description|Parameters|
|---|---|---|
|submit|Submit form|-|
|fileUpload|Useful when you want to handle file processing separately |-|

## Field Properties
- **key** `required | String` Must be unique, the key will be used in formData.
- **type** `optional | String` Input type, defaults to `text`.
- **label** `optional | String` Input field's label
- **validation** `optional | String` Field validation rules, Ionic vue form uses [VeeValidate](https://logaretm.github.io/vee-validate/)
- **class** `optional | String` Input CSS class
- **rows** `optional | Integer` *rows* attribute for textarea input
- **rows** `optional | Integer` *cols* attribute for textarea input
- **options** `required | Array` List of *option* values for select dropdown
- **condition** `optional | Object`
Show **number** field if **email** value is **a@b.com**
```
{
  key: "email",
  label: "Email",
},
{
  key: "number",
  type: "number",
  label: "Number",
  condition: {
    key: "email",
    value: "a@b.com"
  }
}
```
- **component** is `required` if `type` is `component`. If the component requires _props_ you can use **props** property which takes an object

This is useful when you want to use a 3rd party component in your form. In the example below, I want to use **vue-multiselect** in my form.
```
<script>
import multiselect from "vue-multiselect";

export default {
  data() {
    form: [
      {
        key: "category",
        label: "Select Category",
        type: "component",
        component: multiselect,
        props: {
          options: [],
          multiple: true,
          closeOnSelect: false,
          clearOnSelect: false,
          hideSelected: true,
          preserveSearch: true,
          trackBy: "category_label",
          label: "category_label"
        }
      }
    ]
  }
}
```


## Demo

[Sandbox Demo](https://codesandbox.io/s/mystifying-bash-4c6iu?file=/src/components/HelloWorld.vue)


![Ionic Vue Form Screenshot](https://github.com/dlodeprojuicer/ionic-images/blob/master/Screenshot%202020-04-19%20at%2013.19.48.png "Ionic Vue Form Screenshot")
