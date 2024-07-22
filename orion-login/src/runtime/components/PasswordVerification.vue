<template>
    <p :class="validation"></p>
</template>

<script>
export default {
    props: {
    operation: { type: String, default: '/create' },
},
  emits: ['create-user']
} 
data() {
    return {
        email : '',
        verification: '',
        validation: 'invalid',
    }
}

watch: {
    email(newPassword, oldPassword) {
        if(9 > newPassword.length ){
            this.verification = 'A senha precisa ter no mínimo 8 caracteres.';
            this.validation = 'invalid';
            } if(!newPassword.email.value.toUpperCase()){
                this.verification = "A senha precisa ter no mínimo uma letra maiúscula.";
                this.validation= 'invalid';
            } if(!newPassword) {
                this.verification = "A senha precisa ter no mínimo um caractere especial.";
                this.validation= 'invalid';
        }else if(9 > oldPassword.length && 9 < newPassword.length && new)
    }
}
</script>