<template>
    <div>
      <p :class="validation">{{ verification }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
        password: {
            type: String,
            required: true,
        }
    },
    data() {
      return {
        verification: '',
        validation: 'invalid',
      };
    },
    watch: {
      password(newPassword) {
        const hasEigthToTwentyCharacters = newPassword.length >= 8 && newPassword.length <= 20
        const hasCapitalLetter = /[A-Z]/.test(newPassword)
        const hasAtLeastOneNumber = /[0-9]/.test(newPassword)
        const hasNoSpaces = /^\s|\s$|\s{2,}/
        const hasNoSpacesBetween = /[^\s]\s[^\s]/

        console.log("senha: ", newPassword)
        if (hasEigthToTwentyCharacters) {
            console.log('tem de 8 a 20 caracteres')
        }
        else {
            console.log('não tem de 8 a 20 caracteres')
        }

        if(hasCapitalLetter){
            console.log('caiu letra maiuscula')
        }else{
            console.log('não tem letra maiuscula')
        }

        if(hasAtLeastOneNumber){
            console.log('tem número')
        }else{
            console.log('não tem número')
        }
        
        if(hasNoSpaces.test(newPassword) || hasNoSpacesBetween.test(newPassword)){
            console.log('com espaço em branco')
        }else{
            console.log('sem espaço em branco')
        }
      }
    }
  }
  </script>  