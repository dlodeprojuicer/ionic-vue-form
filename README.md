# Ionic Vue Form

This tiny package renders dynamic fully customizable form with conditional logic; if answer is this then show/hide this field. Takes in 3 props, form, data and btnText.

## Basic usage
`npm install vue-ionic-form`

```
<template>
  <div>
    <IonicVueForm :form="form" btnText="Submit" />
  </div>
</template>

<script>
  import VueIonicForm from 'vue-ionic-form'

  export default {
    components: { VueIonicForm },
    data () {
      return {
        selected: null,
        form: [
          {
            key: "email",
            label: "Email",
            validation: "required|min:6"
          },
          {
            key: "password",
            validation: "required|min:3"
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

## Props

<!-- @vuese:default-form:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|form|List of fields to render|`Array`|`true`|-|
|data|Form datta (if you need to auto-fill the form)|`Object`|`false`|-|
|btnText|Submit button text|`String`|`false`|Continue|

<!-- @vuese:default-form:props:end -->


## Events

<!-- @vuese:default-form:events:start -->
|Event|Description|Parameters|
|---|---|---|
|submit|Submit form|-|

<!-- @vuese:default-form:events:end -->


