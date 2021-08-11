import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'

import PrimeVue from 'primevue/config'

import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ContextMenu from 'primevue/contextmenu'
import Dialog from 'primevue/dialog'
import Dropdown from 'primevue/dropdown'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import RadioButton from 'primevue/radiobutton'
import Textarea from 'primevue/textarea'

import { locale } from './locale'

const options = {
  locale,
  ripple: true,
  inputStyle: 'filled',
}

const components = [
  Avatar,
  Button,
  Card,
  ContextMenu,
  Dialog,
  Dropdown,
  InputNumber,
  InputText,
  Password,
  RadioButton,
  Textarea,
]

export default function (app) {
  app.use(PrimeVue, options)

  components.forEach((component) => {
    app.component(component.name, component)
  })
}
