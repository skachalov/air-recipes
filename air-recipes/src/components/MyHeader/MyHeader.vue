<template>
    <v-container class="pa-0 overflow-hidden" style="height: 600px;" fluid>
      <v-row>
        <v-col class="pa-0" cols="4">
          <my-content />
        </v-col>
        <v-col cols="8">
          <v-img
            src="https://s3-alpha-sig.figma.com/img/4753/d7c5/cb990e282b15a01c7b59a7ea480ff736?Expires=1665360000&Signature=cSZvtvVSQYp-we-MgVPEMcR6yRS603NH8dIiqrjOzCrlMrKhxmz6vv6JCXV4K5vj6Li92-hCs~RK1780B1H0VrUK3U~7j3Ht2gp2TSTxh2NojkrUAZo7Vy2WuLSdNw7~WBg~viWZ7ALz-ncxRnNqPD2XKIXbntUV8Am3F~OrCmLv9H~c0qbNlyZcKIuOPWSvN5TfmAva8pBnvJOppq3n5pM0u58x4ocl2yKpshVKBZLF8pPRk~60Vg2MHHS2STr~xxbS4SeJARuzze5e1CBGXiVYLgIg3dMTxZt0Mw8Nt6Mcb14MFUxIdm8CPF-PrCgXegyWDg79oapzCaJFALhV6w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
            style="transform: scaleX(-1)"
          />
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup>
import MyContent from "@/components/MyHeader/MyContent";

</script>

<style scoped>
</style>