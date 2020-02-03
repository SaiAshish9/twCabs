import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)





const store={
  state:{
data:{
  name:'---',
  email:'---',
  address:'---'
}
},
}

export default new vuex.Store(store)
