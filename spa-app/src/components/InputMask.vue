<script setup lang="ts">
import masker from "@/directives/mask/masker";
import token from "@/directives/mask/tokens";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  mask: {
    type: String,
    default: null,
    required: false,
  },
  masked: {
    type: Boolean,
    default: false,
    required: false,
  },
  value: {
    type: [Number, String, Date],
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
    required: false,
  },
  placeholder: {
    type: String,
    default: "",
  },
  class: {
    type: String,
    default: ""
  }
});

console.log(props)

const emits = defineEmits<{
  (event: "input", value: string): void;
}>();

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (props.masked) {
    emits("input", masker(target.value, props.mask, false, token));
  } else {
    emits("input", target.value);
  }
};
</script>

<template>
  <input
    v-if="mask !== null"
    :type="type"
    :value="value"
    v-mask="mask"
    @input="updateValue"
    :class="class"
    :placeholder="placeholder"
    :required="required"
  />
  <input
    v-else
    :type="type"
    :value="value"
    @input="updateValue"
    :class="class"
    :placeholder="placeholder"
    :required="required"
  />
</template>
