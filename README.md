# Ionic Vue Form

This tiny package renders dynamic fully customizable form with form-field conditional logic.

## Basic usage
`npm install vue-ionic-form`

```
<template>
  <div>
    <IonicVueForm :formFields="form" btnText="Submit" @submit="submit" />
  </div>
</template>

<script>
  import { VueIonicForm } from 'vue-ionic-form'

  export default {
    components: { VueIonicForm },
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

## Auto-fill example

`data` prop takes the data object, binds each key-value pair to the relavent form field

```
<template>
  <div>
    <IonicVueForm :formFields="form" :data="formData" btnText="Submit" @submit="submit" />
  </div>
</template>

<script>
  import { VueIonicForm } from 'vue-ionic-form'

  export default {
    components: { VueIonicForm },
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

## Field Properties
- **key** `required | String` Must be unique, the key will be used in formData.
- **label** `optional | String` Input field's label
- **validation** `optional | String` Field validation rules, Ionic vue form uses [VeeValidate](https://logaretm.github.io/vee-validate/)
- **class** `optional | String` Input CSS class
- **rows** `optional | Integer` *rows* attribute for textarea input
- **rows** `optional | Integer` *cols* attribute for textarea input
- **options** `required | Array` List of *option* values for select dropdown

## Conditional Form Fields

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

## Example

```
  data() {
    return {
      form: [
        {
          key: "fullname",
          label: "Name",
          validation: "required|min:6",
          class: "uk-input",
        },
        {
          key: "email",
          label: "Email",
          validation: "required|min:6",
          class: "uk-input",
        },
        {
          key: "number",
          type: "number",
          label: "Number",
          validation: "required|min:6",
          class: "uk-input",
          condition: {
            key: "email",
            value: "a@b.com"
          }
        },
        {
          key: "profilePicture",
          type: "file",
          label: "Profile Picture",
          class: "uk-input custom-file-input"
        },
        {
          key: "password",
          type: "password",
          label: "Password",
          validation: "required|min:3",
          class: "uk-input"
        },
        {
          key: "textarea",
          type: "textarea",
          label: "Note",
          cols: 40,
          rows: 5
        },
        {
          key: "select",
          type: "select",
          label: "Choose one",
          class: "uk-select uk-form-width-large",
          options: [
            {
              label: "Javascript"
            },
            {
              label: "PHP"
            },
            {
              label: "Java"
            },
            {
              label: "C#"
            }
          ]
        }
      ]
    }
  }
```